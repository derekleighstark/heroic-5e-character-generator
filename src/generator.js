const rulesSource = await fetch("/app.js").then(response => response.text());
const rulesPrefix = rulesSource.slice(0, rulesSource.indexOf("const STORAGE_KEY"));
const {
  abilities,
  ranks,
  classes,
  skills,
  origins,
  callings,
  talents,
  merits,
  flaws,
  powerSets,
  gearCatalog
} = Function(`${rulesPrefix}; return { abilities, ranks, classes, skills, origins, callings, talents, merits, flaws, powerSets, gearCatalog };`)();

const STORAGE_KEY = "heroic5e_generator_sheet";
const ACCESSIBILITY_KEY = "heroic5e_generator_accessibility";
const LIBRARY_KEY = "heroic5e_generator_library";
const defaults = {
  rank: "Mid-Level",
  level: 1,
  origin: "Enhanced",
  className: "Bruiser",
  calling: "Protector",
  powerAbility: "str",
  limitations: 0,
  bonusPicks: 0,
  strScore: 18,
  dexScore: 16,
  conScore: 15,
  figScore: 14,
  intScore: 13,
  wisScore: 12,
  chaScore: 10,
  perScore: 8
};

const steps = [
  ["concept", "Concept", "Identity, rank, and portrait"],
  ["origin", "Origin", "Bonuses and built-in mechanics"],
  ["class", "Class", "Class, calling, and Edge"],
  ["abilities", "Abilities", "Scores, saves, and skills"],
  ["powers", "Powers", "Sets, picks, and tier notes"],
  ["features", "Features", "Talents, merits, and flaws"],
  ["gear", "Gear", "Equipment and notes"],
  ["review", "Review", "Export and print"]
];

const app = document.querySelector("#app");
let activeStep = "concept";
let sheet = load(STORAGE_KEY, defaults);
let accessibility = load(ACCESSIBILITY_KEY, { zoom: "normal", dyslexic: false });

function load(key, fallback) {
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(key) || "{}") };
  } catch {
    return { ...fallback };
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
}

function saveAccess() {
  localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(accessibility));
}

function loadLibrary() {
  try {
    const library = JSON.parse(localStorage.getItem(LIBRARY_KEY) || "[]");
    return Array.isArray(library) ? library : [];
  } catch {
    return [];
  }
}

function saveLibrary(library) {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
}

function characterName() {
  return sheet.heroName || sheet.realName || "Unnamed Hero";
}

function characterId(name) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "character"}-${Date.now()}`;
}

function cloneSheet(value) {
  return JSON.parse(JSON.stringify(value));
}

function mod(score) {
  return Math.floor((Number(score || 10) - 10) / 2);
}

function signed(value) {
  const number = Number(value || 0);
  return number >= 0 ? `+${number}` : `${number}`;
}

function prowess(level) {
  const value = Number(level || 1);
  if (value >= 10) return 5;
  if (value >= 7) return 4;
  if (value >= 4) return 3;
  return 2;
}

function hitAverage(hitDie) {
  return Math.floor(hitDie / 2) + 1;
}

function originBonus(key) {
  return (sheet.originPrimaryBonus === key ? 2 : 0) + (sheet.originSecondaryBonus === key ? 1 : 0);
}

function abilityScore(key) {
  return Number(sheet[`${key}Score`] || 10) + originBonus(key);
}

function abilityMod(key) {
  return mod(abilityScore(key));
}

function calc() {
  const level = Math.max(1, Math.min(10, Number(sheet.level || 1)));
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const classInfo = classes[sheet.className] || classes.Bruiser;
  const pro = prowess(level);
  const conMod = abilityMod("con");
  const hp = classInfo.hitDie + abilityScore("con") + ((level - 1) * (hitAverage(classInfo.hitDie) + conMod)) + (sheet.toughTalent ? level * 2 : 0);
  const limitationPicks = Math.min(Number(sheet.limitations || 0), rank.maxLimitations);
  return {
    level,
    pro,
    prowess: signed(pro),
    hp,
    hitDie: `d${classInfo.hitDie}`,
    powerDie: rank.powerDie,
    classEV: 10 + abilityMod(classInfo.primary) + pro,
    powerEV: 10 + abilityMod(sheet.powerAbility || "str") + pro,
    edgeStart: rank.edgeStart,
    edgeCap: level + pro,
    recovery: signed(classInfo.recovery),
    initiative: signed(abilityMod("dex") + abilityMod("per")),
    parry: signed(abilityMod("fig") + abilityMod("per") + pro),
    dodge: signed(abilityMod("dex") + abilityMod("per") + pro),
    willpower: signed(abilityMod("wis") + abilityMod("per") + pro),
    socialDefense: signed(abilityMod("cha") + abilityMod("int") + pro),
    meleeAttack: signed(abilityMod("fig") + pro),
    rangedAttack: signed(abilityMod("dex") + pro),
    mentalAttack: signed(abilityMod("int") + pro),
    socialAttack: signed(abilityMod("cha") + pro),
    powerPicks: rank.startingPicks + Math.max(0, level - 1) + limitationPicks + Number(sheet.bonusPicks || 0),
    maxPowerSets: rank.maxPowerSets,
    powerSlots: Math.max(8, rank.powerSlots),
    maxTier: rank.maxTier,
    startingPicks: rank.startingPicks,
    maxLimitations: rank.maxLimitations,
    classPrimary: classInfo.primary.toUpperCase(),
    classSaves: classInfo.saves.map(save => save.toUpperCase()).join(", ")
  };
}

function html(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function selected(value, option) {
  return value === option ? "selected" : "";
}

function checked(value) {
  return value ? "checked" : "";
}

function options(items, value = "", blank = "Choose") {
  return `<option value="">${blank}</option>${items.map(item => {
    const optionValue = Array.isArray(item) ? item[0] : item;
    const label = Array.isArray(item) ? item[1] : item;
    return `<option value="${html(optionValue)}" ${selected(value, optionValue)}>${html(label)}</option>`;
  }).join("")}`;
}

function lines(value) {
  return String(value || "").split("\n").map(line => line.trim()).filter(Boolean);
}

function addLine(field, value) {
  if (!value) return;
  const current = lines(sheet[field]);
  if (!current.includes(value)) current.push(value);
  sheet[field] = current.join("\n");
}

function removeOriginLines() {
  const originMerits = Object.values(origins).map(origin => origin.merit);
  const originFlaws = Object.values(origins).map(origin => origin.flaw);
  sheet.merits = lines(sheet.merits).filter(line => !originMerits.includes(line)).join("\n");
  sheet.flaws = lines(sheet.flaws).filter(line => !originFlaws.includes(line)).join("\n");
}

function ensureOrigin() {
  if (!origins[sheet.origin]) sheet.origin = "Enhanced";
  const origin = origins[sheet.origin];
  if (!origin.primary.includes(sheet.originPrimaryBonus)) sheet.originPrimaryBonus = origin.primary[0];
  const secondary = origin.secondary[sheet.originPrimaryBonus] || [];
  if (!secondary.includes(sheet.originSecondaryBonus)) sheet.originSecondaryBonus = secondary[0] || "";
  if (!origin.skills.includes(sheet.originSkill1)) sheet.originSkill1 = "";
  if (origin.skillPicks < 2 || !origin.skills.includes(sheet.originSkill2)) sheet.originSkill2 = "";
  if (!origin.traits.includes(sheet.originTrait)) sheet.originTrait = "";
}

function fillOrigin() {
  ensureOrigin();
  const origin = origins[sheet.origin];
  removeOriginLines();
  const traitLine = sheet.originTrait ? `Chosen ${origin.traitLabel}: ${sheet.originTrait}` : `Choose ${origin.traitLabel}.`;
  const skillLine = origin.skillPicks > 1 ? `Choose ${origin.skillPicks} Origin Skills.` : "Choose 1 Origin Skill.";
  sheet.originTalent = `${origin.talent}\nBuilt-In Merit: ${origin.merit}\nBuilt-In Flaw: ${origin.flaw}\n${traitLine}\n${skillLine}\n${origin.note}`;
  addLine("merits", origin.merit);
  addLine("flaws", origin.flaw);
  [sheet.originSkill1, sheet.originSkill2].filter(Boolean).forEach(skillName => {
    const skill = skills.find(([, name]) => name === skillName);
    if (skill) sheet[`skill_${skill[0]}_trained`] = true;
  });
}

function fillClassFeatures() {
  const info = classes[sheet.className] || classes.Bruiser;
  const level = Number(sheet.level || 1);
  const features = [];
  if (level >= 1) features.push(`Level 1: ${info.features[0]}`, `Level 1: ${info.features[1]}`);
  if (level >= 3) features.push(`Level 3: ${info.features[2]}`);
  if (level >= 5) features.push(`Level 5: ${info.features[3]}`);
  if (level >= 7) features.push(`Level 7: ${info.features[4]}`);
  if (level >= 10) features.push(`Level 10: ${info.features[5]}`);
  sheet.classFeatures = features.join("\n");
}

function fillCalling() {
  const triggers = callings[sheet.calling];
  if (!triggers) return;
  sheet.minorTrigger = triggers[0];
  sheet.majorTrigger = triggers[1];
  sheet.definingTrigger = triggers[2];
}

function ensureClassSaves(reset = false) {
  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (reset || sheet[field] === undefined) sheet[field] = classSaves.includes(key);
  });
}

function initialize(reset = false) {
  ensureOrigin();
  ensureClassSaves(reset);
  fillOrigin();
  if (reset || !sheet.classFeatures) fillClassFeatures();
  if (reset || !sheet.minorTrigger) fillCalling();
  save();
}

function input(field, label, type = "text", attrs = "") {
  const value = type === "number" ? Number(sheet[field] || 0) : html(sheet[field] || "");
  return `<label>${label}<input type="${type}" data-field="${field}" value="${value}" ${attrs}></label>`;
}

function textarea(field, label, rows = 4) {
  return `<label>${label}<textarea data-field="${field}" rows="${rows}">${html(sheet[field] || "")}</textarea></label>`;
}

function select(field, label, list, blank = "Choose") {
  return `<label>${label}<select data-field="${field}">${options(list, sheet[field], blank)}</select></label>`;
}

function currentStepIndex() {
  return steps.findIndex(([id]) => id === activeStep);
}

function completion() {
  const tests = [
    Boolean(sheet.heroName),
    Boolean(sheet.origin && sheet.originTrait && sheet.originPrimaryBonus && sheet.originSecondaryBonus),
    Boolean(sheet.className && sheet.calling),
    abilities.every(([key]) => Number(sheet[`${key}Score`] || 0) > 0),
    chosenPowers().length > 0,
    Boolean(sheet.startingTalent || sheet.talents),
    Boolean(sheet.gear || sheet.costume),
    Boolean(sheet.concept || sheet.backstory)
  ];
  return Math.round((tests.filter(Boolean).length / tests.length) * 100);
}

function renderApp() {
  app.innerHTML = `
    <header class="app-topbar">
      <div class="brand"><strong>HEROIC 5e</strong><span>Character Generator</span></div>
      <div class="topbar-tools">
        <label>Zoom<select data-access="zoom">
          <option value="normal" ${selected(accessibility.zoom, "normal")}>100%</option>
          <option value="large" ${selected(accessibility.zoom, "large")}>115%</option>
          <option value="xlarge" ${selected(accessibility.zoom, "xlarge")}>130%</option>
        </select></label>
        <label class="check-control"><input type="checkbox" data-access="dyslexic" ${checked(accessibility.dyslexic)}> Dyslexic Font</label>
        <button type="button" data-action="save-character">Save Character</button>
        <button type="button" data-action="open-library">Load Character</button>
        <button type="button" data-action="export-json">Export JSON</button>
        <button type="button" data-action="import-json">Import JSON</button>
        <button type="button" data-action="print">Print Sheet</button>
        <input id="importFile" type="file" accept="application/json,.json" hidden>
      </div>
    </header>
    <main class="generator-shell">
      <aside class="step-rail">
        <div class="progress-card"><span>Completion</span><strong data-progress-text></strong><div class="progress-track"><i data-progress-bar></i></div></div>
        <nav class="step-list"></nav>
      </aside>
      <section class="builder-panel"></section>
      <section class="sheet-stage">
        <div class="sheet-actions"><strong>Live Character Sheet</strong><button type="button" data-action="clear">Clear</button></div>
        <div id="sheet"></div>
      </section>
    </main>
    <section class="json-drawer" data-json-drawer hidden>
      <div class="json-panel">
        <header>
          <div>
            <strong>Character JSON</strong>
            <span data-json-filename></span>
          </div>
          <button type="button" data-action="close-json">Close</button>
        </header>
        <textarea data-json-output spellcheck="false"></textarea>
        <div class="json-actions">
          <button type="button" data-action="copy-json">Copy JSON</button>
          <button type="button" data-action="download-json">Download JSON</button>
        </div>
      </div>
    </section>
    <section class="library-drawer" data-library-drawer hidden>
      <div class="library-panel">
        <header>
          <div>
            <strong>Saved Characters</strong>
            <span data-library-count></span>
          </div>
          <button type="button" data-action="close-library">Close</button>
        </header>
        <div class="library-list" data-library-list></div>
      </div>
    </section>
  `;
  applyAccess();
  renderBuilder();
  renderSheet();
  renderProgress();
}

function renderProgress() {
  const value = completion();
  document.querySelector("[data-progress-text]").textContent = `${value}%`;
  document.querySelector("[data-progress-bar]").style.width = `${value}%`;
  document.querySelector(".step-list").innerHTML = steps.map(([id, label, deck], index) => `
    <button type="button" data-action="step" data-step="${id}" class="${id === activeStep ? "active" : ""}">
      <span>${index + 1}</span><strong>${label}</strong><small>${deck}</small>
    </button>
  `).join("");
}

function renderBuilder() {
  const index = currentStepIndex();
  const [, label] = steps[index] || steps[0];
  document.querySelector(".builder-panel").innerHTML = `
    <header class="builder-header">
      <div><p>Step ${index + 1} of ${steps.length}</p><h1>${label}</h1></div>
      <div class="builder-nav">
        <button type="button" data-action="back" ${index === 0 ? "disabled" : ""}>Back</button>
        <button type="button" data-action="next" ${index === steps.length - 1 ? "disabled" : ""}>Next</button>
      </div>
    </header>
    ${renderStep(activeStep)}
  `;
  renderProgress();
}

function renderStep(id) {
  if (id === "concept") return renderConcept();
  if (id === "origin") return renderOrigin();
  if (id === "class") return renderClass();
  if (id === "abilities") return renderAbilities();
  if (id === "powers") return renderPowers();
  if (id === "features") return renderFeatures();
  if (id === "gear") return renderGear();
  return renderReview();
}

function renderConcept() {
  return `
    <div class="form-grid three">
      ${input("heroName", "Hero Name")}
      ${input("realName", "Real Name")}
      ${select("identity", "Identity", ["Secret", "Public", "Not Public"])}
      ${select("rank", "Campaign Rank", Object.keys(ranks))}
      ${input("level", "Level", "number", 'min="1" max="10"')}
      ${select("side", "Side", ["Heroic", "Unaligned"])}
    </div>
    <div class="builder-split">
      <div>${textarea("concept", "Concept", 6)}${textarea("backstory", "Backstory", 8)}</div>
      <div class="portrait-uploader">
        <div class="portrait-preview" style="${sheet.portrait ? `background-image:url(${sheet.portrait})` : ""}">${sheet.portrait ? "" : "Portrait"}</div>
        <label>Portrait Image<input id="portraitInput" type="file" accept="image/*"></label>
      </div>
    </div>
  `;
}

function renderOrigin() {
  const origin = origins[sheet.origin] || origins.Enhanced;
  const secondary = origin.secondary[sheet.originPrimaryBonus] || origin.secondary[origin.primary[0]] || [];
  return `
    <div class="form-grid three">
      ${select("origin", "Origin", Object.keys(origins))}
      ${select("originPrimaryBonus", "+2 Ability", origin.primary.map(key => [key, key.toUpperCase()]))}
      ${select("originSecondaryBonus", "+1 Ability", secondary.map(key => [key, key.toUpperCase()]))}
      ${select("originTrait", origin.traitLabel, origin.traits)}
      ${select("originSkill1", "Origin Skill 1", origin.skills)}
      ${origin.skillPicks > 1 ? select("originSkill2", "Origin Skill 2", origin.skills) : "<div></div>"}
    </div>
    <div class="rule-card"><h2>${html(origin.talent)}</h2><div class="pill-row"><span>Merit: ${html(origin.merit)}</span><span>Flaw: ${html(origin.flaw)}</span></div><p>${html(origin.note)}</p></div>
  `;
}

function renderClass() {
  const info = classes[sheet.className] || classes.Bruiser;
  const triggers = callings[sheet.calling] || [];
  return `
    <div class="form-grid three">
      ${select("className", "Class", Object.keys(classes))}
      ${select("calling", "Calling", Object.keys(callings))}
      ${select("powerAbility", "Power Ability", abilities.map(([key, short, name]) => [key, `${short} - ${name}`]))}
    </div>
    <div class="mechanic-grid">
      <div><span>Primary</span><strong>${info.primary.toUpperCase()}</strong></div>
      <div><span>Hit Die</span><strong>d${info.hitDie}</strong></div>
      <div><span>Saves</span><strong>${info.saves.map(save => save.toUpperCase()).join(", ")}</strong></div>
      <div><span>Recovery</span><strong>${signed(info.recovery)}</strong></div>
    </div>
    <div class="form-grid three">
      ${textarea("minorTrigger", "Minor Trigger - 1 Edge", 5)}
      ${textarea("majorTrigger", "Major Trigger - 2 Edge", 5)}
      ${textarea("definingTrigger", "Defining Trigger - 3 Edge", 5)}
    </div>
    <div class="rule-card"><h2>${html(sheet.calling || "Calling")}</h2><p>${html(triggers.join(" "))}</p></div>
  `;
}

function renderAbilities() {
  const values = calc();
  return `
    <div class="ability-builder">
      ${abilities.map(([key, short, name]) => `
        <div class="ability-card"><strong>${short}</strong><label>${name}<input type="number" min="1" max="30" data-field="${key}Score" value="${Number(sheet[`${key}Score`] || 10)}"></label><span>${abilityScore(key)}</span><em>${signed(abilityMod(key))}</em></div>
      `).join("")}
    </div>
    <div class="form-grid two">
      <section><h2>Skills</h2><div class="check-grid">
        ${skills.map(([key, name, ability]) => {
          const total = abilityMod(ability) + (sheet[`skill_${key}_trained`] ? values.pro : 0) + (sheet[`skill_${key}_expert`] ? values.pro : 0);
          return `<label class="check-row"><input type="checkbox" data-field="skill_${key}_trained" ${checked(sheet[`skill_${key}_trained`])}><span>${name} <small>${ability.toUpperCase()}</small></span><strong>${signed(total)}</strong><input type="checkbox" title="Expertise" data-field="skill_${key}_expert" ${checked(sheet[`skill_${key}_expert`])}></label>`;
        }).join("")}
      </div></section>
      <section><h2>Saves</h2><div class="check-grid compact">
        ${abilities.map(([key, short]) => {
          const total = abilityMod(key) + (sheet[`save_${key}_trained`] ? values.pro : 0);
          return `<label class="check-row"><input type="checkbox" data-field="save_${key}_trained" ${checked(sheet[`save_${key}_trained`])}><span>${short} Save</span><strong>${signed(total)}</strong></label>`;
        }).join("")}
      </div><label class="wide-check"><input type="checkbox" data-field="toughTalent" ${checked(sheet.toughTalent)}> Tough talent HP bonus</label></section>
    </div>
  `;
}

function renderPowers() {
  const values = calc();
  return `
    <div class="mechanic-grid">
      <div><span>Power Die</span><strong>${values.powerDie}</strong></div><div><span>Power EV</span><strong>${values.powerEV}</strong></div><div><span>Picks</span><strong>${values.powerPicks}</strong></div><div><span>Max Sets</span><strong>${values.maxPowerSets}</strong></div><div><span>Max Tier</span><strong>${values.maxTier}</strong></div><div><span>Limit Cap</span><strong>${values.maxLimitations}</strong></div>
    </div>
    <div class="form-grid three">${input("limitations", "Limitations Used", "number", `min="0" max="${values.maxLimitations}"`)}${input("bonusPicks", "Bonus Picks", "number", 'min="0"')}${select("powerAbility", "Power Ability", abilities.map(([key, short, name]) => [key, `${short} - ${name}`]))}</div>
    <div class="power-builder">${Array.from({ length: values.powerSlots }, (_, index) => {
      const number = index + 1;
      return `<div class="power-card">${select(`powerSet${number}`, `Power Set ${number}`, powerSets, "Choose Power Set")}${textarea(`powerSet${number}Notes`, "At-Wills / Tier Notes", 4)}</div>`;
    }).join("")}</div>
  `;
}

function renderFeatures() {
  return `
    <div class="form-grid three">
      <label>Talent Picker<select data-add-field="talents">${options(talents, "", "Choose Talent")}</select></label>
      <label>Merit Picker<select data-add-field="merits">${options(merits, "", "Choose Merit")}</select></label>
      <label>Flaw Picker<select data-add-field="flaws">${options(flaws, "", "Choose Flaw")}</select></label>
    </div>
    <div class="form-grid two">${textarea("originTalent", "Origin Mechanics", 8)}${textarea("classFeatures", "Class Features", 8)}${textarea("startingTalent", "Starting Talent", 6)}${textarea("talents", "Additional Talents", 6)}${textarea("merits", "Merits", 6)}${textarea("flaws", "Flaws", 6)}</div>
  `;
}

function renderGear() {
  return `
    <div class="form-grid four">
      <label>Weapon Gear<select data-add-field="gear">${options(gearCatalog.weapon, "", "Choose")}</select></label>
      <label>Armor<select data-add-field="gear">${options(gearCatalog.armor, "", "Choose")}</select></label>
      <label>Gadget<select data-add-field="gear">${options(gearCatalog.gadget, "", "Choose")}</select></label>
      <label>Vehicle<select data-add-field="gear">${options(gearCatalog.vehicle, "", "Choose")}</select></label>
    </div>
    <div class="form-grid two">${textarea("gear", "Gear", 7)}${textarea("costume", "Costume / Symbol", 7)}${textarea("enhancements", "Enhancements", 6)}${textarea("limitationsText", "Limitations", 6)}${textarea("specialties", "Specialties / Expertise", 5)}${textarea("proficiencies", "Languages / Proficiencies", 5)}${textarea("sessionNotes", "Session Notes", 7)}</div>
  `;
}

function renderReview() {
  const values = calc();
  return `<div class="review-grid"><div class="rule-card"><h2>${html(sheet.heroName || "Unnamed Hero")}</h2><p>${html([sheet.origin, sheet.className, sheet.calling].filter(Boolean).join(" - "))}</p><div class="pill-row"><span>Level ${values.level}</span><span>${html(sheet.rank)}</span><span>${values.hp} HP</span><span>${values.powerPicks} Picks</span></div></div><div class="export-card"><button type="button" data-action="export-json">Export JSON</button><button type="button" data-action="import-json">Import JSON</button><button type="button" data-action="print">Print / Save PDF</button></div></div>`;
}

function chosenPowers() {
  const values = calc();
  return Array.from({ length: values.powerSlots }, (_, index) => {
    const number = index + 1;
    return { name: sheet[`powerSet${number}`], notes: sheet[`powerSet${number}Notes`] };
  }).filter(power => power.name || power.notes);
}

function sheetLine(label, value) {
  return `<div><span>${label}</span><strong>${html(value || "-")}</strong></div>`;
}

function bigStat(label, value) {
  return `<div class="big-stat"><span>${label}</span><strong>${html(value)}</strong></div>`;
}

function listBlock(items) {
  const clean = items.flatMap(item => lines(item)).filter(Boolean);
  if (!clean.length) return `<p class="empty">-</p>`;
  return `<ul>${clean.map(item => `<li>${html(item)}</li>`).join("")}</ul>`;
}

function renderSheet() {
  const values = calc();
  const origin = origins[sheet.origin] || origins.Enhanced;
  const powers = chosenPowers();
  document.querySelector("#sheet").innerHTML = `
    <article class="sheet-page">
      <header class="sheet-title"><p>HEROIC 5e</p><h1>${html(sheet.heroName || "Character Sheet")}</h1></header>
      <section class="sheet-hero-grid"><div class="identity-block">${sheetLine("Real Name", sheet.realName)}${sheetLine("Identity", sheet.identity)}${sheetLine("Origin", sheet.origin)}${sheetLine("Class", sheet.className)}${sheetLine("Calling", sheet.calling)}${sheetLine("Rank / Level", `${sheet.rank || ""} / ${values.level}`)}</div><div class="portrait-box" style="${sheet.portrait ? `background-image:url(${sheet.portrait})` : ""}">${sheet.portrait ? "" : "Portrait"}</div><div class="core-block">${bigStat("HP", values.hp)}${bigStat("PRO", values.prowess)}${bigStat("Hit Die", values.hitDie)}${bigStat("Power Die", values.powerDie)}${bigStat("Edge", `${values.edgeStart}/${values.edgeCap}`)}${bigStat("Recovery", values.recovery)}</div></section>
      <section class="sheet-section"><h2>Abilities</h2><div class="sheet-abilities">${abilities.map(([key, short]) => `<div><span>${short}</span><strong>${abilityScore(key)}</strong><em>${signed(abilityMod(key))}</em></div>`).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section"><h2>Combat</h2><div class="sheet-stats">${bigStat("Initiative", values.initiative)}${bigStat("Class EV", values.classEV)}${bigStat("Power EV", values.powerEV)}${bigStat("Primary", values.classPrimary)}${bigStat("Melee", values.meleeAttack)}${bigStat("Ranged", values.rangedAttack)}${bigStat("Mental", values.mentalAttack)}${bigStat("Social", values.socialAttack)}</div></div><div class="sheet-section"><h2>Defenses</h2><div class="sheet-stats">${bigStat("Parry / Block", values.parry)}${bigStat("Dodge", values.dodge)}${bigStat("Willpower", values.willpower)}${bigStat("Social", values.socialDefense)}</div></div></section>
      <section class="sheet-section"><h2>Skills</h2><div class="sheet-skills">${skills.map(([key, name, ability]) => {
        const total = abilityMod(ability) + (sheet[`skill_${key}_trained`] ? values.pro : 0) + (sheet[`skill_${key}_expert`] ? values.pro : 0);
        return `<div><span>${name}</span><em>${ability.toUpperCase()}</em><strong>${signed(total)}</strong></div>`;
      }).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Origin</h2>${listBlock([origin.talent, `Merit: ${origin.merit}`, `Flaw: ${origin.flaw}`, sheet.originTrait ? `${origin.traitLabel}: ${sheet.originTrait}` : "", sheet.originSkill1, sheet.originSkill2, origin.note])}</div><div class="sheet-section text-list"><h2>Concept</h2>${listBlock([sheet.concept, sheet.specialties, sheet.proficiencies])}</div></section>
    </article>
    <article class="sheet-page">
      <header class="sheet-title"><p>Features and Powers</p><h1>${html(sheet.heroName || "Character")}</h1></header>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Class Features</h2>${listBlock(lines(sheet.classFeatures))}</div><div class="sheet-section text-list"><h2>Edge Triggers</h2>${listBlock([`Minor: ${sheet.minorTrigger || ""}`, `Major: ${sheet.majorTrigger || ""}`, `Defining: ${sheet.definingTrigger || ""}`])}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Talents and Merits</h2>${listBlock([...lines(sheet.startingTalent), ...lines(sheet.talents), ...lines(sheet.merits)])}</div><div class="sheet-section text-list"><h2>Flaws</h2>${listBlock(lines(sheet.flaws))}</div></section>
      <section class="sheet-section"><h2>Powers</h2><div class="sheet-powers">${(powers.length ? powers : [{ name: "Power Set", notes: "Choose at least one Power Set." }]).map(power => `<div><strong>${html(power.name || "Power Set")}</strong><p>${html(power.notes || "")}</p></div>`).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Gear</h2>${listBlock([...lines(sheet.gear), ...lines(sheet.enhancements), ...lines(sheet.limitationsText), sheet.costume])}</div><div class="sheet-section text-list"><h2>Backstory / Notes</h2>${listBlock([sheet.backstory, sheet.sessionNotes])}</div></section>
    </article>
  `;
}

function updateField(field, value) {
  sheet[field] = value;
  if (["origin", "originPrimaryBonus", "originSecondaryBonus", "originTrait", "originSkill1", "originSkill2"].includes(field)) fillOrigin();
  if (field === "className") {
    ensureClassSaves(true);
    fillClassFeatures();
  }
  if (field === "level") fillClassFeatures();
  if (field === "calling") fillCalling();
  save();
}

function fieldValue(el) {
  if (el.type === "checkbox") return el.checked;
  if (el.type === "number") return Number(el.value || 0);
  return el.value;
}

function applyAccess() {
  document.body.dataset.zoom = accessibility.zoom || "normal";
  document.body.dataset.dyslexic = accessibility.dyslexic ? "true" : "false";
}

function exportPayload() {
  return {
    type: "HEROIC 5e Character Generator",
    version: 2,
    exportedAt: new Date().toISOString(),
    sheet
  };
}

function exportFilename() {
  const hero = sheet.heroName || sheet.realName || "heroic-5e-character";
  return `${hero.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "heroic-5e-character"}.json`;
}

function exportText() {
  return JSON.stringify(exportPayload(), null, 2);
}

function downloadJson() {
  const blob = new Blob([exportText()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = exportFilename();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showExportJson() {
  const drawer = document.querySelector("[data-json-drawer]");
  const output = document.querySelector("[data-json-output]");
  document.querySelector("[data-json-filename]").textContent = exportFilename();
  output.value = exportText();
  drawer.hidden = false;
  output.focus();
  output.select();
  downloadJson();
}

function exportJson() {
  showExportJson();
}

async function copyJson() {
  const output = document.querySelector("[data-json-output]");
  output.focus();
  output.select();
  try {
    await navigator.clipboard.writeText(output.value);
  } catch {
    document.execCommand("copy");
  }
}

function saveCharacterToLibrary() {
  const currentName = characterName();
  const name = prompt("Save character as:", currentName);
  if (!name) return;

  const record = makeCharacterRecord(name);
  saveRecordLocal(record);
  openLibrary();
}

function makeCharacterRecord(name) {
  const library = loadLibrary();
  const existing = library.find(character => character.name.toLowerCase() === name.toLowerCase());
  const now = new Date().toISOString();
  return {
    id: existing ? existing.id : characterId(name),
    name,
    heroName: sheet.heroName || "",
    realName: sheet.realName || "",
    origin: sheet.origin || "",
    className: sheet.className || "",
    calling: sheet.calling || "",
    rank: sheet.rank || "",
    level: Number(sheet.level || 1),
    updatedAt: now,
    createdAt: existing ? existing.createdAt : now,
    sheet: cloneSheet(sheet)
  };
}

function saveRecordLocal(record) {
  const library = loadLibrary();
  const existing = library.find(character => character.id === record.id);
  const nextLibrary = existing
    ? library.map(character => character.id === existing.id ? record : character)
    : [record, ...library];
  saveLibrary(nextLibrary);
}

function openLibrary() {
  const drawer = document.querySelector("[data-library-drawer]");
  drawer.hidden = false;
  renderLibrary();
}

function closeLibrary() {
  document.querySelector("[data-library-drawer]").hidden = true;
}

function renderLibrary() {
  const library = loadLibrary().sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  const list = document.querySelector("[data-library-list]");
  document.querySelector("[data-library-count]").textContent = `${library.length} saved`;

  if (!library.length) {
    list.innerHTML = `<div class="library-empty">No saved characters yet.</div>`;
    return;
  }

  list.innerHTML = library.map(character => libraryItem(character)).join("");
}

function libraryItem(character) {
  return `
    <article class="library-item">
      <div>
        <strong>${html(character.name)}</strong>
        <span>${html([character.origin, character.className, character.calling].filter(Boolean).join(" - ") || "No build details")}</span>
        <small>Level ${html(character.level || 1)} ${html(character.rank || "")} - Saved ${html(new Date(character.updatedAt).toLocaleString())}</small>
      </div>
      <div class="library-item-actions">
        <button type="button" data-action="load-character" data-character-id="${html(character.id)}">Load</button>
        <button type="button" data-action="delete-character" data-character-id="${html(character.id)}">Delete</button>
      </div>
    </article>
  `;
}

function loadCharacter(id) {
  const library = loadLibrary();
  const record = library.find(character => character.id === id);
  if (!record) return;
  sheet = { ...defaults, ...record.sheet };
  initialize(true);
  closeLibrary();
  renderBuilder();
  renderSheet();
  renderProgress();
}

function deleteCharacter(id) {
  const library = loadLibrary();
  const record = library.find(character => character.id === id);
  if (!record || !confirm(`Delete saved character "${record.name}"?`)) return;
  saveLibrary(library.filter(character => character.id !== id));
  renderLibrary();
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = payload.sheet && typeof payload.sheet === "object" ? payload.sheet : payload;
      sheet = { ...defaults, ...imported };
      initialize(true);
      renderBuilder();
      renderSheet();
      renderProgress();
    } catch {
      alert("That JSON file could not be imported.");
    }
  };
  reader.readAsText(file);
}

app.addEventListener("input", event => {
  const el = event.target.closest("[data-field]");
  if (!el) return;
  updateField(el.dataset.field, fieldValue(el));
  renderSheet();
  renderProgress();
});

app.addEventListener("change", event => {
  const field = event.target.closest("[data-field]");
  const add = event.target.closest("[data-add-field]");
  const access = event.target.closest("[data-access]");

  if (field) {
    updateField(field.dataset.field, fieldValue(field));
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (add && add.value) {
    addLine(add.dataset.addField, add.value);
    add.value = "";
    save();
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (access) {
    accessibility[access.dataset.access] = access.type === "checkbox" ? access.checked : access.value;
    saveAccess();
    applyAccess();
  }

  if (event.target.id === "portraitInput") {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      sheet.portrait = reader.result;
      save();
      renderBuilder();
      renderSheet();
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  if (event.target.id === "importFile") {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  }
});

app.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const index = currentStepIndex();
  if (action === "step") activeStep = button.dataset.step;
  if (action === "next") activeStep = steps[Math.min(steps.length - 1, index + 1)][0];
  if (action === "back") activeStep = steps[Math.max(0, index - 1)][0];
  if (["step", "next", "back"].includes(action)) renderBuilder();
  if (action === "export-json") exportJson();
  if (action === "download-json") downloadJson();
  if (action === "copy-json") copyJson();
  if (action === "close-json") document.querySelector("[data-json-drawer]").hidden = true;
  if (action === "save-character") saveCharacterToLibrary();
  if (action === "open-library") openLibrary();
  if (action === "close-library") closeLibrary();
  if (action === "load-character") loadCharacter(button.dataset.characterId);
  if (action === "delete-character") deleteCharacter(button.dataset.characterId);
  if (action === "import-json") document.querySelector("#importFile").click();
  if (action === "print") window.print();
  if (action === "clear" && confirm("Clear this HEROIC 5e character?")) {
    sheet = { ...defaults };
    initialize(true);
    renderBuilder();
    renderSheet();
    renderProgress();
  }
});

initialize();
renderApp();
