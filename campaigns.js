const manifestUrl = "campaigns/manifest.json";
const escapeHtml = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

async function getManifest() {
  const response = await fetch(manifestUrl, { cache: "no-store" });
  if (!response.ok) throw new Error("Campaign data could not be loaded.");
  return response.json();
}

function campaignCard(campaign) {
  return `<a class="campaign-card theme-${campaign.theme}" href="campaign.html?id=${encodeURIComponent(campaign.id)}"><span class="campaign-status">${escapeHtml(campaign.status)}</span><div class="campaign-wordmark">${escapeHtml(campaign.name)}</div><p>${escapeHtml(campaign.tagline)}</p><strong>${campaign.characters.length ? `${campaign.characters.length} playable heroes` : "Campaign roster pending"} <i>→</i></strong></a>`;
}

function characterCard(character, campaignId) {
  const style = character.banner ? `style="background-image:linear-gradient(180deg,transparent 38%,#05070bf5 88%),url('${escapeHtml(character.banner)}');--accent:${escapeHtml(character.accent)}"` : `style="--accent:${escapeHtml(character.accent)}"`;
  return `<a class="roster-card ${character.banner ? "has-banner" : "no-banner"}" ${style} href="character.html?campaign=${encodeURIComponent(campaignId)}&character=${encodeURIComponent(character.id)}"><div class="roster-fallback">${escapeHtml(character.name.slice(0, 1))}</div><div class="roster-info"><span>${escapeHtml(character.className)} • ${escapeHtml(character.origin)}</span><h2>${escapeHtml(character.name)}</h2><p>${escapeHtml(character.realName)} • ${escapeHtml(character.calling)}</p><strong>Open Dashboard →</strong></div></a>`;
}

async function render() {
  try {
    const { campaigns } = await getManifest();
    const campaignGrid = document.querySelector("#campaignGrid");
    if (campaignGrid) campaignGrid.innerHTML = campaigns.map(campaignCard).join("");
    const rosterGrid = document.querySelector("#rosterGrid");
    if (rosterGrid) {
      const id = new URLSearchParams(location.search).get("id") || "street-angels";
      const campaign = campaigns.find(item => item.id === id) || campaigns[0];
      document.title = `${campaign.name} • HEROIC 5e`;
      document.body.dataset.theme = campaign.theme;
      document.querySelector("#rosterHero").innerHTML = `<span>${escapeHtml(campaign.status)}</span><h1>${escapeHtml(campaign.name)}</h1><p>${escapeHtml(campaign.tagline)}</p>`;
      rosterGrid.innerHTML = campaign.characters.length ? campaign.characters.map(character => characterCard(character, campaign.id)).join("") : `<div class="empty-roster"><b>Roster incoming</b><p>This campaign is ready for its logo and player characters.</p></div>`;
    }
  } catch (error) {
    const target = document.querySelector("#campaignGrid") || document.querySelector("#rosterGrid");
    if (target) target.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
}

render();
