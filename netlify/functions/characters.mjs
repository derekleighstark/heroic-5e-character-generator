import { getStore } from "@netlify/blobs";
import { getUser } from "@netlify/identity";

const STORE_NAME = "heroic5e-characters";

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function sanitizeId(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
}

function keyFor(userId, characterId) {
  return `users/${userId}/${sanitizeId(characterId)}.json`;
}

async function currentUser() {
  const user = await getUser();
  if (!user) return null;
  return user;
}

export default async function handler(request) {
  const user = await currentUser();
  if (!user) return json({ error: "Unauthorized" }, 401);

  const store = getStore(STORE_NAME);
  const prefix = `users/${user.id}/`;
  const url = new URL(request.url);

  if (request.method === "GET") {
    const { blobs } = await store.list({ prefix });
    const characters = await Promise.all(
      blobs.map(async blob => store.get(blob.key, { type: "json" }))
    );
    return json({
      user: { id: user.id, email: user.email },
      characters: characters
        .filter(Boolean)
        .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    });
  }

  if (request.method === "POST") {
    const record = await request.json();
    if (!record || typeof record !== "object" || !record.id || !record.sheet) {
      return json({ error: "Character record requires id and sheet." }, 400);
    }

    const saved = {
      ...record,
      ownerId: user.id,
      ownerEmail: user.email,
      updatedAt: new Date().toISOString()
    };
    await store.setJSON(keyFor(user.id, saved.id), saved);
    return json({ character: saved });
  }

  if (request.method === "DELETE") {
    const id = sanitizeId(url.searchParams.get("id"));
    if (!id) return json({ error: "Missing character id." }, 400);
    await store.delete(keyFor(user.id, id));
    return json({ ok: true });
  }

  return json({ error: "Method not allowed" }, 405);
}
