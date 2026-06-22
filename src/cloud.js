const config = window.__HEROIC_CLOUD_CONFIG__ || {};
const BUCKET = "character-portraits";
let clientPromise;

export function cloudConfigured() {
  return Boolean(config.url && config.publishableKey);
}

async function getClient() {
  if (!cloudConfigured()) return null;
  if (!clientPromise) {
    clientPromise = import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm")
      .then(({ createClient }) => createClient(config.url, config.publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }));
  }
  return clientPromise;
}

function requireResult(result) {
  if (result.error) throw result.error;
  return result.data;
}

function dataUrlToBlob(dataUrl) {
  const [header, encoded] = dataUrl.split(",");
  const mimeType = (header.match(/^data:([^;]+)/) || [])[1] || "image/png";
  const bytes = atob(encoded);
  const buffer = new Uint8Array(bytes.length);
  for (let index = 0; index < bytes.length; index += 1) buffer[index] = bytes.charCodeAt(index);
  return new Blob([buffer], { type: mimeType });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function portraitExtension(blob) {
  if (blob.type === "image/jpeg") return "jpg";
  if (blob.type === "image/webp") return "webp";
  return "png";
}

export async function getCloudSession() {
  const client = await getClient();
  if (!client) return null;
  const data = requireResult(await client.auth.getSession());
  return data.session;
}

export async function watchCloudSession(callback) {
  const client = await getClient();
  if (!client) return () => {};
  const { data } = client.auth.onAuthStateChange((_event, session) => callback(session));
  return () => data.subscription.unsubscribe();
}

export async function sendCloudMagicLink(email) {
  const client = await getClient();
  if (!client) throw new Error("Cloud saving is not configured.");
  const configuredOrigin = String(config.siteUrl || "").trim().replace(/\/$/, "");
  const redirectOrigin = configuredOrigin || window.location.origin;
  const redirectTo = `${redirectOrigin}/`;
  requireResult(await client.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo }
  }));
  return redirectTo;
}

export async function cloudSignOut() {
  const client = await getClient();
  if (!client) return;
  requireResult(await client.auth.signOut());
}

export async function listCloudCharacters() {
  const client = await getClient();
  if (!client) return [];
  return requireResult(await client
    .from("characters")
    .select("id,name,character_data,portrait_path,created_at,updated_at")
    .order("updated_at", { ascending: false }));
}

export async function cloudPortraitUrl(path) {
  if (!path) return "";
  const client = await getClient();
  if (!client) return "";
  const data = requireResult(await client.storage.from(BUCKET).createSignedUrl(path, 3600));
  return data.signedUrl || "";
}

export async function saveCloudCharacter({ id, name, sheet }) {
  const client = await getClient();
  if (!client) throw new Error("Cloud saving is not configured.");
  const session = await getCloudSession();
  if (!session?.user) throw new Error("Sign in before saving to the cloud.");

  const characterData = JSON.parse(JSON.stringify(sheet));
  const portrait = characterData.portrait;
  characterData.portrait = "";
  const payload = {
    user_id: session.user.id,
    name,
    character_data: characterData
  };

  let record;
  if (id) {
    const data = requireResult(await client.from("characters").update(payload).eq("id", id).select().single());
    record = data;
  } else {
    const data = requireResult(await client.from("characters").insert(payload).select().single());
    record = data;
  }

  if (typeof portrait === "string" && portrait.startsWith("data:image/")) {
    const blob = dataUrlToBlob(portrait);
    const path = `${session.user.id}/${record.id}.${portraitExtension(blob)}`;
    requireResult(await client.storage.from(BUCKET).upload(path, blob, { upsert: true, contentType: blob.type }));
    record = requireResult(await client.from("characters").update({ portrait_path: path }).eq("id", record.id).select().single());
  }

  return record;
}

export async function loadCloudCharacter(id) {
  const client = await getClient();
  if (!client) throw new Error("Cloud saving is not configured.");
  const record = requireResult(await client
    .from("characters")
    .select("id,name,character_data,portrait_path,created_at,updated_at")
    .eq("id", id)
    .single());
  const sheet = JSON.parse(JSON.stringify(record.character_data || {}));
  if (record.portrait_path) {
    const blob = requireResult(await client.storage.from(BUCKET).download(record.portrait_path));
    sheet.portrait = await blobToDataUrl(blob);
  }
  return { ...record, sheet };
}

export async function deleteCloudCharacter(id, portraitPath) {
  const client = await getClient();
  if (!client) throw new Error("Cloud saving is not configured.");
  if (portraitPath) requireResult(await client.storage.from(BUCKET).remove([portraitPath]));
  requireResult(await client.from("characters").delete().eq("id", id));
}
