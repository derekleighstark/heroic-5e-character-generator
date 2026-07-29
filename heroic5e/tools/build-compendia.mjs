import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { ClassicLevel } from "classic-level";
import { powerSetRules, powerFramework, generalUtilityPowers } from "../../src/power-data.js";

const systemRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectRoot = path.resolve(systemRoot, "..");
const appSource = fs.readFileSync(path.join(projectRoot, "app.js"), "utf8");
const appPrefix = appSource.slice(0, appSource.indexOf("const STORAGE_KEY"));
const base = Function(`${appPrefix}; return {classes, origins, talents, merits, flaws, callings};`)();
const generatorSource = fs.readFileSync(path.join(projectRoot, "src", "generator.js"), "utf8");
const rulesFragment = generatorSource.slice(generatorSource.indexOf("const sideRules"), generatorSource.indexOf("const defaults"));
const rules = Function(`${rulesFragment}; return {originTraitRules, classText, classFeatureRules, meritRules, flawRules, talentRules};`)();

const esc = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const html = value => String(value ?? "").split(/\n{2,}/).map(block => `<p>${esc(block).replaceAll("\n", "<br>")}</p>`).join("");
const idFor = value => crypto.createHash("sha256").update(value).digest("hex").slice(0, 16);
const iconFor = type => ({ talent: "icons/svg/upgrade.svg", merit: "icons/svg/aura.svg", flaw: "icons/svg/downgrade.svg", calling: "icons/svg/compass.svg", origin: "icons/svg/mystery-man.svg", class: "icons/svg/angel.svg", power: "icons/svg/explosion.svg" })[type] ?? "icons/svg/item-bag.svg";

function item(type, name, system = {}, identity = name) {
  return {
    _id: idFor(`${type}:${identity}`), name, type, img: iconFor(type),
    system: {
      description: "", subtype: "", action: "", category: "", source: "Heroic 5e v2.4 Playtest Edition",
      prerequisite: "", tier: "", powerSet: "", cost: 0, tags: "", ability: "str", attackBonus: 0,
      damage: "", effect: "", uses: { value: 0, max: 0 }, quantity: 1, equipped: true, ...system
    },
    effects: [], folder: null, sort: 0, ownership: { default: 0 }, flags: {}
  };
}

const talents = Object.entries(rules.talentRules).map(([name, text]) => item("talent", name, { description: html(text), category: String(text).split(".")[0], tags: String(text).split(".")[0] }));
for (const [originName, origin] of Object.entries(base.origins)) talents.push(item("talent", origin.talent, {
  description: html(origin.note), category: "Origin Talent", prerequisite: `${originName} Origin`, tags: originName
}, `origin:${originName}:${origin.talent}`));
function ratedItems(type, entries) {
  const documents = [];
  const originNames = new Set(Object.values(base.origins).map(origin => (type === "merit" ? origin.merit : origin.flaw).replace(/\s+\d+$/, "")));
  for (const [name, text] of Object.entries(entries)) {
    if (originNames.has(name)) documents.push(item(type, name, { description: html(text), category: `Origin ${type === "merit" ? "Merit" : "Flaw"}`, tags: "Origin; does not count against budget" }, `origin:${name}`));
    if (/Origin (Merit|Flaw)/.test(text)) continue;
    const range = String(text).match(/^Rating (\d)(?:-(\d))?/);
    const min = Number(range?.[1] ?? 1), max = Number(range?.[2] ?? range?.[1] ?? 1);
    for (let rating = min; rating <= max; rating++) documents.push(item(type, `${name} ${rating}`, {
      description: `<p><strong>Rating ${rating}</strong></p>${html(text)}`, category: type === "merit" ? "Merit" : "Flaw", subtype: name,
      cost: rating, tags: `Rating ${rating}; ${name}`
    }, `${name}:${rating}`));
  }
  return documents;
}
const merits = ratedItems("merit", rules.meritRules);
const flaws = ratedItems("flaw", rules.flawRules);
const callings = Object.entries(base.callings).map(([name, triggers]) => item("calling", name, {
  description: `<h3>Minor Trigger</h3><p>${esc(triggers[0])}</p><h3>Major Trigger</h3><p>${esc(triggers[1])}</p><h3>Defining Trigger</h3><p>${esc(triggers[2])}</p>`,
  category: "Calling", subtype: "Edge Triggers", triggerMinor: triggers[0], triggerMajor: triggers[1], triggerDefining: triggers[2]
}));

const origins = Object.entries(base.origins).map(([name, origin]) => {
  const sections = [
    `<p>${esc(origin.note)}</p>`,
    `<h3>Ability Choices</h3><p>Primary: ${esc(origin.primary.join(", "))}</p>`,
    `<h3>Skills</h3><p>Choose ${esc(origin.skillPicks)} from: ${esc(origin.skills.join(", "))}</p>`,
    `<h3>Built-in Merit</h3><p>${esc(origin.merit)}</p>`, `<h3>Built-in Flaw</h3><p>${esc(origin.flaw)}</p>`,
    `<h3>Origin Talent</h3><p>${esc(origin.talent)}</p>`, `<h3>${esc(origin.traitLabel)}</h3><ul>${origin.traits.map(trait => `<li><strong>${esc(trait)}:</strong> ${esc(rules.originTraitRules[trait] ?? "")}</li>`).join("")}</ul>`
  ];
  return item("origin", name, { description: sections.join(""), category: "Origin", tags: origin.traits.join(", ") });
});

const classes = Object.entries(base.classes).map(([name, cls]) => {
  const features = cls.features.map(feature => `<li><strong>${esc(feature)}:</strong> ${esc(rules.classFeatureRules[feature] ?? "")}</li>`).join("");
  const description = `<p>${esc(rules.classText[name])}</p><h3>Class Chassis</h3><p>Primary Ability: ${esc(cls.primary.toUpperCase())}<br>Hit Die: d${esc(cls.hitDie)}<br>Trained Saves: ${esc(cls.saves.map(s => s.toUpperCase()).join(", "))}<br>Recovery: ${esc(cls.recovery)}</p><h3>Class Features</h3><ol>${features}</ol>`;
  return item("class", name, { description, category: "Class", ability: cls.primary, tags: cls.features.join(", ") });
});

const powers = [];
for (const set of powerSetRules) {
  const overview = `<p>${esc(set.description)}</p><h3>Power Set Rules</h3><p>Governing Ability: ${esc(set.governingAbility)}<br>Associated Conditions: ${esc(set.associatedConditions)}<br>Default Damage: ${esc(set.defaultDamage)}<br>Ability Score Bonus: ${esc(set.abilityScoreBonus)}</p>`;
  powers.push(item("power", set.name, { description: overview, subtype: "Power Set", category: "Power Set", powerSet: set.name, action: "Passive", tags: set.abilityOptions.join(",") }, `${set.id}:overview`));
  const groups = [["Core Track", set.coreTrack], ["Branch Power", set.powers], ["Utility", set.utilities], ["Enhancement", set.enhancements], ["Limitation", set.limitations]];
  for (const [category, entries] of groups) for (const entry of entries) {
    powers.push(item("power", entry.name, {
      description: html(entry.text), subtype: entry.type || category, category, powerSet: set.name,
      action: entry.action || (category === "Enhancement" ? "Passive" : "Varies"), prerequisite: entry.prerequisite || "",
      tier: entry.tier ? `Tier ${entry.tier}` : "", cost: Number(entry.creationCost ?? (category === "Enhancement" ? 0.5 : 0)),
      effect: entry.text || "", tags: [entry.type, entry.level ? `Core ${entry.level}` : ""].filter(Boolean).join(", ")
    }, `${set.id}:${category}:${entry.id || entry.name}`));
  }
}
for (const entry of generalUtilityPowers) powers.push(item("power", entry.name, { description: html(entry.text), subtype: entry.type || "Utility", category: "General Utility", action: entry.action || "Action", prerequisite: entry.prerequisite || "", tier: entry.tier ? `Tier ${entry.tier}` : "", cost: Number(entry.creationCost ?? 1), effect: entry.text || "" }, `general-utility:${entry.id || entry.name}`));
for (const entry of powerFramework.genericEnhancements) powers.push(item("power", entry.name, { description: html(entry.text), subtype: "Enhancement", category: "General Enhancement", action: "Passive", cost: 0.5, effect: entry.text }, `general-enhancement:${entry.name}`));
for (const entry of powerFramework.genericLimitations) powers.push(item("power", entry.name, { description: html(entry.text), subtype: "Limitation", category: "General Limitation", action: "Varies", effect: entry.text }, `general-limitation:${entry.name}`));

async function writePack(name, documents) {
  const directory = path.join(systemRoot, "packs", name);
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory, { recursive: true });
  const db = new ClassicLevel(directory, { keyEncoding: "utf8", valueEncoding: "json" });
  await db.open();
  await db.batch(documents.map(document => ({ type: "put", key: `!items!${document._id}`, value: document })));
  await db.close();
  return documents.length;
}

const counts = {};
for (const [name, documents] of Object.entries({ talents, merits, flaws, callings, powers, origins, classes })) counts[name] = await writePack(name, documents);
fs.writeFileSync(path.join(systemRoot, "packs", "manifest.json"), `${JSON.stringify({ generated: new Date().toISOString(), source: "Heroic 5e v2.4 Playtest Edition", counts, total: Object.values(counts).reduce((a, b) => a + b, 0) }, null, 2)}\n`);
console.log(JSON.stringify({ counts, total: Object.values(counts).reduce((a, b) => a + b, 0) }, null, 2));
