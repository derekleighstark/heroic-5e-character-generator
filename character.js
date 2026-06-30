const params = new URLSearchParams(location.search);
const campaignId = params.get("campaign") || "street-angels";
const characterId = params.get("character") || "nightshade";
const escapeHtml = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
let character;
let parsed;
let rollMode = "normal";
let history = [];

function matchNumber(text, pattern, fallback = 0) { const match = text.match(pattern); return match ? Number(match[1]) : fallback; }
function parseCharacter(text) {
  const title = text.match(/###\s+[^A-Z]*([A-Z][A-Z _'-]+)\s+\(([^)]+)\)/);
  const abilities = [...text.matchAll(/\*\s+\*\*([^*]+?)\s+\(([A-Z]{3})\):\*\*\s+(\d+)\s+\(([+-]\d+)\)/g)].map(match => ({ name: match[1].trim(), key: match[2], score: Number(match[3]), modifier: Number(match[4]) }));
  const defenses = [...text.matchAll(/\*\s+\*\*(Parry\/Block|Dodge|Willpower|Social|Initiative)(?:\s+\([^)]*\))?:\*\*\s+([+-]?\d+)/g)].map(match => ({ name: match[1], modifier: Number(match[2]) }));
  const sections = [];
  let current = { title: "Character Overview", lines: [] };
  let skippedCharacterTitle = false;
  text.split(/\r?\n/).forEach(line => {
    if (line.startsWith("### ") && !skippedCharacterTitle) { skippedCharacterTitle = true; return; }
    const heading = line.match(/^####\s+(.+)/) || line.match(/^###\s+(.+)/);
    if (heading) { sections.push(current); current = { title: heading[1], lines: [] }; }
    else current.lines.push(line);
  });
  sections.push(current);
  return { name: title?.[1]?.trim() || character.name, realName: title?.[2] || character.realName, hp: matchNumber(text, /\*\*HP:\*\*\s+(\d+)/, character.hp), bloodied: matchNumber(text, /\*\*Bloodied:\*\*\s+(\d+)/), edge: matchNumber(text, /\*\*Starting Edge:\*\*\s+(\d+)/, 3), prowess: matchNumber(text, /\*\*Prowess \(PRO\):\*\*\s+\+?(\d+)/, 2), powerDie: text.match(/\*\*Power Die:\*\*\s+(d\d+)/)?.[1] || "d8", abilities, defenses, sections, text };
}

function inlineMarkup(value) {
  let html = escapeHtml(value);
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code>$1</code>");
  return html.replace(/\b(\d+d\d+(?:\s*[+-]\s*\d+)?)\b/gi, match => `<button type="button" class="inline-roll" data-roll="${match.replaceAll(" ", "")}">${match}</button>`);
}

function markdown(lines) {
  let html = "";
  let list = false;
  const closeList = () => { if (list) { html += "</ul>"; list = false; } };
  lines.forEach(line => {
    if (/^\*\s+/.test(line)) { if (!list) { html += "<ul>"; list = true; } html += `<li>${inlineMarkup(line.replace(/^\*\s+/, ""))}</li>`; return; }
    closeList();
    const heading = line.match(/^###\s+(.+)/) || line.match(/^####\s+(.+)/);
    if (heading) html += `<h3>${inlineMarkup(heading[1])}</h3>`;
    else if (/^\*\*.+\*\*$/.test(line.trim())) html += `<h4>${inlineMarkup(line)}</h4>`;
    else if (/^---|^\*\*\*/.test(line)) html += "<hr>";
    else if (/^\d+\.\s+/.test(line)) html += `<p class="numbered">${inlineMarkup(line)}</p>`;
    else if (line.trim()) html += `<p>${inlineMarkup(line)}</p>`;
  });
  closeList(); return html;
}

function resourceState() {
  try { return { hp: parsed.hp, edge: parsed.edge, conditions: [], notes: "", ...JSON.parse(localStorage.getItem(`heroic5e_play_${characterId}`) || "{}") }; } catch { return { hp: parsed.hp, edge: parsed.edge, conditions: [], notes: "" }; }
}
function saveResources() {
  const conditions = [...document.querySelectorAll("[data-condition]:checked")].map(input => input.value);
  localStorage.setItem(`heroic5e_play_${characterId}`, JSON.stringify({ hp: Number(document.querySelector("#currentHp").value), edge: Number(document.querySelector("#currentEdge").value), conditions, notes: document.querySelector("#playNotes").value }));
}

function renderDashboard() {
  const state = resourceState();
  document.title = `${parsed.name} • Street Angels`;
  document.documentElement.style.setProperty("--accent", character.accent);
  document.querySelector("#backLink").href = `campaign.html?id=${encodeURIComponent(campaignId)}`;
  document.querySelector("#rollerCharacter").textContent = parsed.name;
  const banner = character.banner ? `style="background-image:linear-gradient(90deg,#04070bb8,#04070b22 55%,#04070bba),url('${escapeHtml(character.banner)}')"` : "";
  const abilityCards = parsed.abilities.map(item => `<button type="button" class="stat-card" data-roll="1d20${item.modifier >= 0 ? "+" : ""}${item.modifier}"><span>${item.name}</span><b>${item.score}</b><strong>${item.modifier >= 0 ? "+" : ""}${item.modifier}</strong><small>Roll ${item.key}</small></button>`).join("");
  const defenseCards = parsed.defenses.map(item => `<button type="button" class="defense-card" data-roll="1d20${item.modifier >= 0 ? "+" : ""}${item.modifier}"><span>${item.name}</span><strong>${item.modifier >= 0 ? "+" : ""}${item.modifier}</strong><small>Active roll</small></button>`).join("");
  const conditions = ["Blinded", "Dazed", "Frightened", "Prone", "Restrained", "Shaken", "Stunned", "Incapacitated"].map(name => `<label><input type="checkbox" data-condition value="${name}" ${state.conditions.includes(name) ? "checked" : ""}>${name}</label>`).join("");
  document.querySelector("#dashboard").className = "dashboard";
  document.querySelector("#dashboard").innerHTML = `<section class="character-hero ${character.banner ? "has-banner" : "no-banner"}" ${banner}><div><span>Street Angels • ${escapeHtml(character.className)} • ${escapeHtml(character.origin)}</span><h1>${escapeHtml(parsed.name)}</h1><p>${escapeHtml(parsed.realName)} • ${escapeHtml(character.calling)}</p></div></section><div class="dashboard-grid"><aside class="play-panel"><section><h2>Live Resources</h2><div class="resource-control"><label>Hit Points<input id="currentHp" type="number" value="${state.hp}"></label><b>/ ${parsed.hp}</b><span>Bloodied ${parsed.bloodied}</span></div><div class="resource-control"><label>Edge<input id="currentEdge" type="number" value="${state.edge}"></label><b>/ ${parsed.edge}</b><span>Prowess +${parsed.prowess}</span></div><div class="mini-stat"><span>Power Die</span><b>${parsed.powerDie}</b><button type="button" data-roll="1${parsed.powerDie}">Roll</button></div></section><section><h2>Conditions</h2><div class="condition-list">${conditions}</div></section><section><h2>Play Notes</h2><textarea id="playNotes" placeholder="Damage reduction, spent powers, clues…">${escapeHtml(state.notes)}</textarea></section></aside><div class="sheet-content"><nav class="section-nav"><a href="#core-rolls">Core Rolls</a>${parsed.sections.map((section, index) => `<a href="#section-${index}">${escapeHtml(section.title.replace(/^[^A-Za-z]+/, ""))}</a>`).join("")}</nav><section id="core-rolls" class="rules-section core-rolls"><header><span>Click any card to roll</span><h2>Abilities & Defenses</h2></header><div class="ability-cards">${abilityCards}</div><div class="defense-cards">${defenseCards}</div></section>${parsed.sections.map((section, index) => `<section id="section-${index}" class="rules-section"><header><span>${String(index + 1).padStart(2, "0")}</span><h2>${escapeHtml(section.title.replace(/^[^A-Za-z]+/, ""))}</h2></header><div class="rules-copy">${markdown(section.lines)}</div></section>`).join("")}</div></div>`;
  document.querySelector("#quickInitiative").dataset.roll = `1d20${(parsed.defenses.find(item => item.name === "Initiative")?.modifier || 0) >= 0 ? "+" : ""}${parsed.defenses.find(item => item.name === "Initiative")?.modifier || 0}`;
  document.querySelectorAll("#currentHp,#currentEdge,#playNotes,[data-condition]").forEach(control => control.addEventListener("input", saveResources));
}

function parseRoll(notation) { const match = String(notation).replaceAll(" ", "").match(/^(\d+)d(\d+)([+-]\d+)?$/i); return match ? { count: Number(match[1]), sides: Number(match[2]), modifier: Number(match[3] || 0) } : null; }
function die(sides) { const value = new Uint32Array(1); crypto.getRandomValues(value); return value[0] % sides + 1; }
function performRoll(label, notation) {
  const spec = parseRoll(notation); if (!spec) return;
  let dice = Array.from({ length: spec.count }, () => die(spec.sides)); let kept = dice;
  if (spec.count === 1 && spec.sides === 20 && rollMode !== "normal") { dice.push(die(20)); kept = [rollMode === "advantage" ? Math.max(...dice) : Math.min(...dice)]; }
  const total = kept.reduce((sum, value) => sum + value, 0) + spec.modifier;
  const detail = `${notation}: [${dice.join(", ")}]${spec.modifier ? ` ${spec.modifier >= 0 ? "+" : ""}${spec.modifier}` : ""}${rollMode !== "normal" && spec.sides === 20 ? ` • ${rollMode}` : ""}`;
  history.unshift({ label, total, detail }); history = history.slice(0, 30);
  document.querySelector("#latestRoll").innerHTML = `<span>${escapeHtml(label)}</span><strong>${total}</strong><small>${escapeHtml(detail)}</small>`;
  document.querySelector("#quickResult").textContent = total;
  document.querySelector("#quickResult").title = `${label}: ${detail}`;
  document.querySelector("#rollHistory").innerHTML = history.map(item => `<article><div><b>${escapeHtml(item.label)}</b><small>${escapeHtml(item.detail)}</small></div><strong>${item.total}</strong></article>`).join("");
  document.querySelector("#rollerPanel").hidden = false;
}

document.addEventListener("click", event => { const button = event.target.closest("[data-roll],[data-quick]"); if (button) performRoll(button.textContent.trim() || button.dataset.roll || button.dataset.quick, button.dataset.roll || button.dataset.quick); });
document.querySelector("#openRoller").addEventListener("click", () => document.querySelector("#rollerPanel").hidden = false);
document.querySelector("#closeRoller").addEventListener("click", () => document.querySelector("#rollerPanel").hidden = true);
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { rollMode = button.dataset.mode; document.querySelectorAll("[data-mode]").forEach(item => item.classList.toggle("active", item === button)); }));

async function init() {
  try {
    const manifest = await fetch("campaigns/manifest.json", { cache: "no-store" }).then(response => response.json());
    const campaign = manifest.campaigns.find(item => item.id === campaignId) || manifest.campaigns[0];
    character = campaign.characters.find(item => item.id === characterId) || campaign.characters[0];
    const text = await fetch(character.file, { cache: "no-store" }).then(response => { if (!response.ok) throw new Error("Character record unavailable."); return response.text(); });
    parsed = parseCharacter(text); renderDashboard();
  } catch (error) { document.querySelector("#dashboard").textContent = error.message; }
}
init();
