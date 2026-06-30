const grid = document.querySelector("#galleryGrid");

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

async function loadGallery() {
  try {
    const response = await fetch("sample-characters/manifest.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Roster unavailable");
    const { samples = [] } = await response.json();
    const heroes = samples.slice(0, 6).map(hero => `
      <article class="hero-card">
        <div class="hero-portrait ${hero.portrait ? "" : "no-portrait"}" ${hero.portrait ? `style="background-image:url('${escapeHtml(hero.portrait)}')"` : ""}>${hero.portrait ? "" : escapeHtml((hero.name || "?").slice(0, 1))}</div>
        <div class="hero-card-content"><span class="hero-meta">${escapeHtml(hero.rank)} • Level ${escapeHtml(hero.level)} • ${escapeHtml(hero.className)}</span><h2>${escapeHtml(hero.name)}</h2><h3>${escapeHtml(hero.realName)}</h3><p>${escapeHtml(hero.concept)}</p></div>
      </article>`).join("");
    const openSlots = Array.from({ length: Math.max(0, 6 - samples.length) }, (_, index) => `<article class="coming-soon"><div><b>0${samples.length + index + 1}</b><span>New hero incoming</span></div></article>`).join("");
    grid.innerHTML = heroes + openSlots;
  } catch (error) {
    grid.innerHTML = `<p class="gallery-loading">${escapeHtml(error.message)}</p>`;
  }
}

loadGallery();
