const abilities = [
  ["str", "STR", "Strength"],
  ["dex", "DEX", "Dexterity"],
  ["con", "CON", "Constitution"],
  ["fig", "FIG", "Fighting"],
  ["int", "INT", "Intelligence"],
  ["wis", "WIS", "Wisdom"],
  ["cha", "CHA", "Charisma"],
  ["per", "PER", "Perception"]
];

const ranks = {
  "Street Level": { powerDie: "d8", maxPowerSets: 3, maxTier: "Tier 1", startingPicks: 8, powerSlots: 8, maxLimitations: 2, edgeStart: 3 },
  "Mid-Level": { powerDie: "d10", maxPowerSets: 5, maxTier: "Tier 2", startingPicks: 10, powerSlots: 10, maxLimitations: 4, edgeStart: 2 },
  "World Class": { powerDie: "d12", maxPowerSets: 7, maxTier: "Tier 3", startingPicks: 12, powerSlots: 12, maxLimitations: 6, edgeStart: 1 }
};

const classes = {
  Beacon: { primary: "cha", hitDie: 8, saves: ["cha", "wis"], recovery: 1, features: ["Commanding Presence", "Taunt", "Rally the Human Spirit", "Rally Cry", "Break Them", "Living Legend"] },
  Bruiser: { primary: "str", hitDie: 10, saves: ["str", "con"], recovery: 1, features: ["Heavy Hitter", "Heavy Impact", "Breakthrough", "Devastating Force", "Unstoppable", "Irresistible Force"] },
  Guardian: { primary: "con", hitDie: 12, saves: ["con", "str"], recovery: 2, features: ["Stand Between", "Iron Presence", "Breakthrough Resistance", "Guardian's Mark", "Immovable", "Last One Standing"] },
  Sentinel: { primary: "per", hitDie: 8, saves: ["per", "dex"], recovery: 1, features: ["Threat Assessment", "Reactive Awareness", "Threat Lock", "Decisive Strike", "Read the Room", "Overwatch"] },
  Strategist: { primary: "int", hitDie: 8, saves: ["int", "per"], recovery: 0, features: ["Tactical Analysis", "Tactical Exploitation", "Contingency Planning", "Calculated Pressure", "Expose the Pattern", "Master Plan"] },
  Striker: { primary: "fig", hitDie: 8, saves: ["fig", "dex"], recovery: 0, features: ["Precision Strike", "Exploit Opening", "Combat Read", "Vital Strike", "Killer Instinct", "Perfect Form"] },
  Vanguard: { primary: "dex", hitDie: 8, saves: ["dex", "per"], recovery: 0, features: ["Fluid Motion", "Evasive Strike", "Momentum Shift", "Blitz", "Untouchable", "Apex Predator"] },
  Warden: { primary: "wis", hitDie: 8, saves: ["wis", "con"], recovery: 2, features: ["Inner Fortress", "Force of Will", "Unshakable Ground", "Eye of the Storm", "Turning the Tide", "Transcendent Presence"] }
};

const skills = [
  ["acrobatics", "Acrobatics", "dex"],
  ["athletics", "Athletics", "str"],
  ["culture", "Culture", "int"],
  ["finesse", "Finesse", "dex"],
  ["influence", "Influence", "cha"],
  ["insight", "Insight", "wis"],
  ["intimidation", "Intimidation", "cha"],
  ["investigation", "Investigation", "int"],
  ["medicine", "Medicine", "int"],
  ["notice", "Notice", "per"],
  ["occult", "Occult", "wis"],
  ["science", "Science", "int"],
  ["stealth", "Stealth", "dex"],
  ["streetwise", "Streetwise", "cha"],
  ["survival", "Survival", "wis"],
  ["technology", "Technology", "int"],
  ["vehicles", "Vehicles", "dex"]
];

const origins = {
  "Alien": {
    primary: ["con", "int", "per", "cha"],
    secondary: { con: ["str", "wis", "per"], int: ["per", "wis", "cha"], per: ["int", "wis", "dex"], cha: ["wis", "con", "int"] },
    skills: ["Culture", "Insight", "Notice", "Science", "Survival", "Technology"],
    skillPicks: 1,
    merit: "Strange Biology 1",
    flaw: "Alien Outsider 1",
    talent: "Not From Here",
    traitLabel: "Alien Biological Trait",
    traits: ["Environmental Adaptation", "Unusual Diet", "Natural Camouflage"],
    note: "Once per encounter, reroll a failed Insight, Science, Notice, or Survival check using an alien perspective."
  },
  "Artificial": {
    primary: ["int", "con", "str"],
    secondary: { int: ["con", "per", "str"], con: ["int", "str", "per"], str: ["int", "con", "fig"] },
    skills: ["Investigation", "Science", "Stealth", "Technology", "Vehicles"],
    skillPicks: 1,
    merit: "Synthetic Construction 1",
    flaw: "Constructed Nature 1",
    talent: "Synthetic Edge",
    traitLabel: "Mechanical Advantage",
    traits: ["Integrated Systems", "Modular Repair", "Environmental Hardening"],
    note: "Once per encounter before an attack roll, skill check, or save, gain Advantage through rapid internal calculation."
  },
  "Cosmic": {
    primary: ["cha", "con", "wis"],
    secondary: { cha: ["con", "wis", "per"], con: ["cha", "str", "wis"], wis: ["cha", "per", "int"] },
    skills: ["Science", "Occult", "Notice", "Survival", "Influence"],
    skillPicks: 1,
    merit: "Cosmic Signature 1",
    flaw: "Too Bright to Hide 1",
    talent: "Stellar Endurance",
    traitLabel: "Stellar Endurance Feature",
    traits: ["Vacuum-Touched", "Energy-Born", "Universal Perspective"],
    note: "Choose one Skill and one Specialty tied to the Cosmic concept."
  },
  "Enhanced": {
    primary: ["str", "con", "dex"],
    secondary: { str: ["con", "dex", "per"], con: ["str", "dex", "wis"], dex: ["str", "con", "per"] },
    skills: ["Athletics", "Intimidation", "Science", "Stealth", "Survival"],
    skillPicks: 1,
    merit: "Altered Physiology 1",
    flaw: "Marked by Change 1",
    talent: "Adaptive Biology",
    traitLabel: "Altered Physiology Trait",
    traits: ["Heightened Reflexes", "Enhanced Recovery", "Unusual Senses"],
    note: "Choose one Power Set. Once per encounter when using an At-Will from it, choose Controlled Surge, Instinctive Control, or Biological Push."
  },
  "Gearbound": {
    primary: ["int", "dex", "fig"],
    secondary: { int: ["dex", "per", "fig"], dex: ["int", "per", "fig"], fig: ["int", "dex", "per"] },
    skills: ["Acrobatics", "Investigation", "Science", "Technology", "Vehicles"],
    skillPicks: 1,
    merit: "Gear Access 1",
    flaw: "Gear Dependency 1",
    talent: "Field Systems",
    traitLabel: "Field Systems Mode",
    traits: ["Keep It Running", "Emergency Bypass", "Reroute Power", "Controlled Failure"],
    note: "Once per encounter when gear would fail, make Technology, Science, or Vehicles and choose a Field Systems result."
  },
  "Legacy": {
    primary: ["cha", "fig", "wis"],
    secondary: { cha: ["int", "wis", "fig"], fig: ["cha", "dex", "per"], wis: ["cha", "int", "per"] },
    skills: ["Athletics", "Influence", "Insight", "Investigation", "Streetwise"],
    skillPicks: 1,
    merit: "The Name 1",
    flaw: "The Expectation 1",
    talent: "Inherited Instinct",
    traitLabel: "Legacy Benefit",
    traits: ["Inherited Network", "Famous Symbol", "Mentor's Gift"],
    note: "Once per encounter, add Prowess after seeing a save or skill check tied to the Legacy. If already successful, treat it as a Strong Success."
  },
  "Monster": {
    primary: ["str", "con", "per"],
    secondary: { str: ["con", "per", "wis"], con: ["str", "wis", "cha"], per: ["str", "con", "dex"] },
    skills: ["Athletics", "Intimidation", "Notice", "Stealth", "Survival"],
    skillPicks: 1,
    merit: "Inhuman Body 1",
    flaw: "Feared 1",
    talent: "Apex Predator",
    traitLabel: "Monstrous Physical Trait",
    traits: ["Natural Weapons", "Night Creature", "Terrifying Form", "Strange Anatomy"],
    note: "Choose one Skill and one Specialty tied to the monstrous nature."
  },
  "Mystic": {
    primary: ["wis", "cha", "int"],
    secondary: { wis: ["cha", "int", "per"], cha: ["wis", "int", "con"], int: ["wis", "cha", "per"] },
    skills: ["Insight", "Occult", "Notice", "Influence", "Investigation"],
    skillPicks: 1,
    merit: "Mystic Attunement 1",
    flaw: "Supernatural Burden 1",
    talent: "Ward the Soul",
    traitLabel: "Mystic Practice",
    traits: ["Spellcraft", "Spirit Pact", "Divine Favor", "Bloodline", "Relic-Bound", "Curse-Bearer"],
    note: "Once per encounter, add Prowess to your or an ally's save against fear, charm, possession, curse, psychic intrusion, or mystical manipulation."
  },
  "Trained": {
    primary: ["fig", "dex", "int"],
    secondary: { fig: ["dex", "int", "per", "wis"], dex: ["fig", "int", "per", "cha"], int: ["fig", "dex", "per", "wis"] },
    skills: ["Acrobatics", "Athletics", "Investigation", "Notice", "Stealth", "Streetwise", "Technology", "Vehicles"],
    skillPicks: 2,
    merit: "Prepared Foundation 1",
    flaw: "Only Human 1",
    talent: "Trained to Survive",
    traitLabel: "Prepared Foundation Merit",
    traits: ["Base of Operations", "Connected", "Gear Access", "Legal Authority", "Local Support", "Mentor", "Prepared Cache", "Safehouse Network"],
    note: "Once per encounter, reroll a failed skill check using a Skill you are trained in."
  },
  "Transcendent": {
    primary: ["wis", "cha", "con"],
    secondary: { wis: ["cha", "con", "per"], cha: ["wis", "con", "int"], con: ["wis", "cha", "str"] },
    skills: ["Insight", "Occult", "Notice", "Science", "Influence"],
    skillPicks: 1,
    merit: "Beyond Mortal 1",
    flaw: "Losing Humanity 1",
    talent: "Beyond the Moment",
    traitLabel: "Beyond Mortal Benefit",
    traits: ["Ageless", "Strange Perception", "Death-Touched", "Conceptual Presence"],
    note: "Choose one Skill and one Specialty tied to the transformation."
  }
};

const callings = {
  "Adventurer": ["Take a risky direct approach and complications follow.", "Throw yourself into danger without preparation and change the outcome.", "Refusing caution costs something significant."],
  "Advocate": ["Speak up for someone with less power when it creates friction.", "Defy authority or convenience to protect the vulnerable.", "Risk standing, safety, or a mission for the people you represent."],
  "Avenger": ["Confront a reminder of the wrong you pursue.", "Choose the hard path because justice demands it.", "Pay a real price pursuing justice or vengeance."],
  "Beast Within": ["Your inner nature creates an unforeseen consequence.", "Restrain yourself when losing control would be easier.", "Lose control in a way that causes harm or fallout."],
  "Boy Scout": ["Do the decent thing when cynicism would be easier.", "Choose principle over tactical advantage at a cost.", "Sacrifice something meaningful because it is right."],
  "Champion": ["Publicly stand for a cause when it matters.", "Carry hope or morale for others under pressure.", "Risk yourself or your reputation as the symbol people need."],
  "Defender": ["Put yourself between a threat and someone vulnerable.", "Hold a position alone so others can escape or recover.", "Lose or suffer because you refused to abandon those you protect."],
  "Fame": ["Public attention complicates a scene.", "Choose responsibility over image when people are watching.", "Your public identity costs you something major."],
  "Hotshot": ["Show off or take a bold risk that creates trouble.", "Escalate a dangerous moment to prove you can handle it.", "Your ego or audacity costs something significant."],
  "Human Nature": ["Try to engage with ordinary human emotion in a meaningful scene.", "Choose connection over efficiency at real cost.", "Sacrifice for loyalty, love, or belonging."],
  "Idealist": ["Act on hope when compromise would be easier.", "Refuse a practical but corrosive solution.", "Lose something because you would not surrender the ideal."],
  "Investigator": ["Pursue an uncomfortable truth despite friction.", "Risk safety or trust to uncover what is hidden.", "Expose truth at major personal or social cost."],
  "Journeyman": ["Say the uncomfortable truth because it needs saying.", "Use hard-earned experience to help an ally at cost.", "Keep going through failure because the work matters."],
  "Lone Wolf": ["Refuse help or distance yourself and create a complication.", "Protect others without admitting you need them.", "Your isolation costs you or the team something major."],
  "Mentor": ["Teach or correct someone when it creates tension.", "Put a student's growth over tactical ease.", "Sacrifice for the next generation or a lesson that must endure."],
  "Mercenary": ["Refuse a better payday because it violates your code.", "Break or renegotiate a contract because the situation changed.", "Lose major profit, safety, or reputation to honor your code."],
  "Outsider": ["Your alienation or difference complicates a scene.", "Choose belonging or honesty at real cost.", "Risk rejection or loss to protect people who may never accept you."],
  "Protector": ["Shield someone from danger or consequence.", "Take on a burden so others can survive or heal.", "Suffer defeat, injury, or loss because you protected someone."],
  "Redeemer": ["Face evidence of past harm and do not run.", "Offer mercy or help to someone who mirrors your past.", "Pay a real price trying to make amends."],
  "Role Model": ["Act visibly as the example others need.", "Choose the harder public standard over easy victory.", "Lose something to remain worthy of those who look up to you."],
  "Seeker": ["Pursue a lead, mystery, or answer despite inconvenience.", "Choose discovery over comfort or safety.", "Truth changes or costs something important."],
  "Soldier": ["Follow discipline or mission standards under pressure.", "Put the team or mission before personal ease.", "Accept major cost because duty requires it."],
  "Survivor": ["Keep moving through a moment that echoes past trauma.", "Use survival experience to pull someone else through crisis.", "Face the source or equivalent of what shaped you at personal cost."],
  "Wiseacre": ["Use humor or provocation when silence would be safer.", "Mock danger or authority to protect morale or expose weakness.", "Your mouth costs you something significant but changes the scene."]
};

const talents = ["Actor", "Alert", "Appeal", "Athlete", "Battlefield Leader", "Cold Reader", "Counterguard", "Defensive Fighter", "Durable", "Fast Draw", "Field Commander", "Forensic Expert", "Grappler", "Hard to Kill", "Improvised Fighter", "Inspiring Leader", "Interrogator", "Iron Will", "Jack of All Trades", "Linguist", "Lucky", "Martial Artist", "Marksman", "Master Negotiator", "Master of Combat", "Mobile", "Never Give Up", "Observant", "Pain Tolerance", "Pattern Recognition", "Performer", "Power Control", "Power Focus", "Provocateur", "Psychic Discipline", "Resilient", "Sharpshooter", "Skilled", "Specialist", "Surveillance Specialist", "Takedown Artist", "Team Player", "Tireless", "Tough", "Underwater Combatant", "War Caster", "Weapon Specialist"];

const merits = ["Ally", "Alternate Identity", "Attractive", "Base of Operations", "Cash Flow", "Civic Standing", "Connected", "Danger Aware", "Easy Company", "Eidetic Memory", "Fame", "Fortunate Reputation", "Legal Authority", "Local Support", "Media Favor", "Mentor", "No Public Records", "Patron", "Prepared Cache", "Public Trust", "Restless Sleeper", "Rugged", "Secret Identity", "Sidekick", "Stage Presence", "Strong Resolve", "Team Membership", "Vehicle", "Wary", "Wealth"];

const flaws = ["Absent-Minded", "Action Addict", "Addiction", "Alien Outsider", "Bad Reputation", "Berserk Trigger", "Bully", "Code of Conduct", "Combat Freeze", "Cowardice", "Debt", "Dependent", "Destitute", "Enemy", "Emotional Trigger", "Famous Identity", "Fugitive", "Gear Dependent", "Haunted", "Honest to a Fault", "Hunted", "Infamy", "Marked by Power", "Monstrous Appearance", "Obligation", "Oath", "Overconfident", "Phobia", "Power Instability", "Public Identity", "Reckless", "Responsibility to the Innocent", "Secret Weakness", "Social Outsider", "Vulnerable Reputation", "Weak Support System"];

const powerSets = ["Animal Powers", "Armor Systems", "Cold Control", "Cosmic Power", "Elasticity", "Electricity Control", "Energy Generation", "Gadgetry", "Illusion", "Fire Control", "Flight", "Light Control", "Machine Interface", "Martial Mastery", "Plant Control", "Phasing", "Precognition", "Reality Control", "Regeneration", "Shadow Control", "Shapechanging", "Size Control", "Sorcery", "Super Agility", "Super Durability", "Super Genius", "Super Presence", "Super Senses", "Super Speed", "Super Strength", "Telekinesis", "Telepathy", "Teleportation", "Trick Archery", "Weather Control"];

const gearCatalog = {
  weapon: ["Unarmed", "Light Weapon", "Heavy Weapon", "Ranged Weapon", "Improvised Weapon", "Reach Weapon", "Thrown Weapon", "Concealable Weapon", "Armor-Piercing Weapon", "Nonlethal Weapon"],
  armor: ["Light Armor (+2 Parry/Block or Dodge)", "Heavy Armor (+4 Parry/Block or Dodge)", "Powered Armor (+3 Parry/Block and Dodge, +2 STR checks)", "Environmental Suit", "Shield", "Reinforced Costume"],
  gadget: ["First Aid Kit", "Scanner", "Sensor Drone", "Grappling Line", "Smoke Grenade", "Signal Jammer", "Specialized Restraints", "Burner Phone", "Forensic Kit", "Comms Gear", "Tracking Beacon", "EMP Device"],
  vehicle: ["Motorcycle", "Standard Road Vehicle", "High-Performance Vehicle", "Armored Vehicle", "Light Aircraft", "Jet Aircraft", "Speedboat", "Spacecraft", "Iconic Super-Vehicle"]
};

const STORAGE_KEY = "heroic5e_sheet";
const ACCESSIBILITY_KEY = "heroic5e_sheet_accessibility";
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

const app = document.querySelector("#app");
const dynamicFields = new Set(["origin", "originPrimaryBonus", "rank", "level", "className", "calling"]);
const steps = [
  { id: "concept", label: "Concept", deck: "Identity, rank, and portrait" },
  { id: "origin", label: "Origin", deck: "Origin bonuses and built-in mechanics" },
  { id: "class", label: "Class", deck: "Class, calling, and Edge triggers" },
  { id: "abilities", label: "Abilities", deck: "Scores, saves, skills, and defenses" },
  { id: "powers", label: "Powers", deck: "Power sets, picks, and limits" },
  { id: "features", label: "Features", deck: "Talents, merits, flaws, and class features" },
  { id: "gear", label: "Gear", deck: "Equipment, costume, and notes" },
  { id: "review", label: "Review", deck: "Export, print, and final sheet" }
];

let activeStep = "concept";
let sheet = loadSheet();
let accessibility = loadAccessibility();

function modifier(score) {
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

function medianHitDie(hitDie) {
  return Math.floor(hitDie / 2) + 1;
}

function originBonusFor(key) {
  let bonus = 0;
  if (sheet.originPrimaryBonus === key) bonus += 2;
  if (sheet.originSecondaryBonus === key) bonus += 1;
  return bonus;
}

function abilityScore(key) {
  return Number(sheet[`${key}Score`] || 10) + originBonusFor(key);
}

function abilityMod(key) {
  return modifier(abilityScore(key));
}

function calc() {
  const level = Math.max(1, Math.min(10, Number(sheet.level || 1)));
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const classInfo = classes[sheet.className] || classes.Bruiser;
  const pro = prowess(level);
  const hitDie = classInfo.hitDie;
  const hp = hitDie + abilityScore("con") + ((level - 1) * (medianHitDie(hitDie) + abilityMod("con"))) + (sheet.toughTalent ? level * 2 : 0);
  const totalPicks = rank.startingPicks + Math.max(0, level - 1) + Number(sheet.limitations || 0) + Number(sheet.bonusPicks || 0);

  return {
    level,
    prowess: signed(pro),
    prowessRaw: pro,
    hp,
    hitDie: `d${hitDie}`,
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
    powerPicks: totalPicks,
    maxPowerSets: rank.maxPowerSets,
    powerSlots: rank.powerSlots,
    maxTier: rank.maxTier,
    startingPicks: rank.startingPicks,
    maxLimitations: rank.maxLimitations,
    classPrimary: classInfo.primary.toUpperCase(),
    classSaves: classInfo.saves.map(save => save.toUpperCase()).join(", ")
  };
}

function fieldValue(el) {
  if (el.type === "checkbox") return el.checked;
  if (el.type === "number") return Number(el.value || 0);
  return el.value;
}

function setField(el, value) {
  if (el.type === "checkbox") {
    el.checked = Boolean(value);
  } else {
    el.value = value ?? "";
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
}

function addLine(field, value) {
  if (!value) return;
  const lines = String(sheet[field] || "").split("\n").map(line => line.trim()).filter(Boolean);
  if (!lines.includes(value)) lines.push(value);
  sheet[field] = lines.join("\n");
}

function removeOriginLines() {
  const originMerits = Object.values(origins).map(origin => origin.merit);
  const originFlaws = Object.values(origins).map(origin => origin.flaw);
  sheet.merits = String(sheet.merits || "").split("\n").filter(line => !originMerits.includes(line.trim())).join("\n");
  sheet.flaws = String(sheet.flaws || "").split("\n").filter(line => !originFlaws.includes(line.trim())).join("\n");
}

function appendField(field, value) {
  if (!value) return;
  addLine(field, value);
  syncFields();
  recalc();
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

function fillOrigin() {
  const origin = origins[sheet.origin];
  if (!origin) return;
  removeOriginLines();
  if (!origin.primary.includes(sheet.originPrimaryBonus)) {
    sheet.originPrimaryBonus = origin.primary[0];
  }
  const secondary = origin.secondary[sheet.originPrimaryBonus] || [];
  if (!secondary.includes(sheet.originSecondaryBonus)) {
    sheet.originSecondaryBonus = secondary[0] || "";
  }
  if (!origin.skills.includes(sheet.originSkill1)) sheet.originSkill1 = "";
  if (!origin.skills.includes(sheet.originSkill2)) sheet.originSkill2 = "";
  if (!origin.traits.includes(sheet.originTrait)) sheet.originTrait = "";
  const traitLine = sheet.originTrait ? `Chosen ${origin.traitLabel}: ${sheet.originTrait}` : `Choose ${origin.traitLabel}.`;
  const skillLine = origin.skillPicks > 1 ? `Choose ${origin.skillPicks} Origin Skills.` : "Choose 1 Origin Skill.";
  sheet.originTalent = `${origin.talent}\nBuilt-In Merit: ${origin.merit}\nBuilt-In Flaw: ${origin.flaw}\n${traitLine}\n${skillLine}\n${origin.note}`;
  addLine("merits", origin.merit);
  addLine("flaws", origin.flaw);
  trainOriginSkills();
}

function trainOriginSkills() {
  const origin = origins[sheet.origin];
  if (!origin) return;
  [sheet.originSkill1, sheet.originSkill2].filter(Boolean).forEach(skillName => {
    const skill = skills.find(([, name]) => name === skillName);
    if (skill) sheet[`skill_${skill[0]}_trained`] = true;
  });
}

function fillCallingTriggers() {
  const triggers = callings[sheet.calling];
  if (!triggers) return;
  sheet.minorTrigger = triggers[0];
  sheet.majorTrigger = triggers[1];
  sheet.definingTrigger = triggers[2];
}

function saveAccessibility() {
  localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(accessibility));
}

function applyAccessibility() {
  document.body.dataset.fontSize = accessibility.fontSize || "normal";
  document.body.dataset.dyslexic = accessibility.dyslexic ? "true" : "false";
  document.querySelector("#fontSizeSelect").value = accessibility.fontSize || "normal";
  document.querySelector("#dyslexicToggle").checked = Boolean(accessibility.dyslexic);
  requestAnimationFrame(updateSheetZoomSpace);
}

function updateSheetZoomSpace() {
  const sheetEl = document.querySelector("#sheet");
  if (!sheetEl) return;
  const scale = accessibility.fontSize === "xlarge" ? 1.3 : accessibility.fontSize === "large" ? 1.15 : 1;
  const extraHeight = Math.max(0, sheetEl.offsetHeight * (scale - 1));
  sheetEl.style.marginBottom = `${32 + extraHeight}px`;
}

function exportJson() {
  const payload = {
    type: "HEROIC 5e Character Sheet",
    version: 1,
    exportedAt: new Date().toISOString(),
    sheet
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const hero = sheet.heroName || sheet.realName || "heroic-5e-character";
  link.href = url;
  link.download = `${hero.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "heroic-5e-character"}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = payload.sheet && typeof payload.sheet === "object" ? payload.sheet : payload;
      sheet = { ...defaults, ...imported };
      ensureClassSaves();
      renderPowerSets();
      syncFields();
      wireFields();
      recalc();
    } catch {
      alert("That JSON file could not be imported.");
    }
  };
  reader.readAsText(file);
}

function ensureClassSaves() {
  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (sheet[field] === undefined) sheet[field] = classSaves.includes(key);
  });
}

function renderOptions() {
  document.querySelector("#className").innerHTML = Object.keys(classes).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#originSelect").innerHTML = Object.keys(origins).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#callingSelect").innerHTML = Object.keys(callings).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#powerAbility").innerHTML = abilities
    .map(([key, short, name]) => `<option value="${key}">${short} - ${name}</option>`)
    .join("");
  document.querySelector("#talentPicker").innerHTML = `<option value="">Choose Talent</option>${talents.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#meritPicker").innerHTML = `<option value="">Choose Merit</option>${merits.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#flawPicker").innerHTML = `<option value="">Choose Flaw</option>${flaws.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#weaponGearPicker").innerHTML = `<option value="">Choose Weapon Gear</option>${gearCatalog.weapon.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#armorGearPicker").innerHTML = `<option value="">Choose Armor</option>${gearCatalog.armor.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#gadgetGearPicker").innerHTML = `<option value="">Choose Gadget</option>${gearCatalog.gadget.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#vehicleGearPicker").innerHTML = `<option value="">Choose Vehicle</option>${gearCatalog.vehicle.map(name => `<option>${name}</option>`).join("")}`;
}

function renderAbilities() {
  document.querySelector("#abilityGrid").innerHTML = abilities.map(([key, short, name]) => `
    <div class="ability-row">
      <strong>${short}</strong>
      <label>${name} Base<input type="number" min="1" max="30" data-field="${key}Score"></label>
      <span class="ability-total" data-out="${key}Total"></span>
      <strong data-out="${key}Mod"></strong>
    </div>
  `).join("");
}

function renderTraining() {
  document.querySelector("#skillsTable").innerHTML = skills.map(([key, name, ability]) => `
    <div class="skill-row">
      <input type="checkbox" title="Trained" data-field="skill_${key}_trained">
      <span class="skill-name">${name}</span>
      <span class="skill-ability">${ability.toUpperCase()}</span>
      <span class="skill-total" data-out="skill_${key}_total"></span>
      <input type="checkbox" title="Expertise" data-field="skill_${key}_expert">
    </div>
  `).join("");

  document.querySelector("#savesTable").innerHTML = abilities.map(([key, short, name]) => `
    <div class="save-row">
      <input type="checkbox" title="Trained" data-field="save_${key}_trained">
      <span class="save-name">${short} ${name}</span>
      <span class="save-total" data-out="save_${key}_total"></span>
    </div>
  `).join("");
}

function abilityOption(key) {
  const ability = abilities.find(([value]) => value === key);
  return ability ? `${ability[1]} - ${ability[2]}` : key.toUpperCase();
}

function renderOriginOptions() {
  const origin = origins[sheet.origin] || origins.Enhanced;
  const secondary = origin.secondary[sheet.originPrimaryBonus] || origin.secondary[origin.primary[0]] || [];
  const skillSelect = index => `
    <label>Origin Skill ${index}
      <select data-field="originSkill${index}">
        <option value="">Choose Skill</option>
        ${origin.skills.map(skill => `<option>${skill}</option>`).join("")}
      </select>
    </label>
  `;

  document.querySelector("#originOptions").innerHTML = `
    <h2>Origin Mechanics</h2>
    <div class="origin-grid">
      <label>Primary Bonus (+2)
        <select data-field="originPrimaryBonus">
          ${origin.primary.map(key => `<option value="${key}">${abilityOption(key)}</option>`).join("")}
        </select>
      </label>
      <label>Secondary Bonus (+1)
        <select data-field="originSecondaryBonus">
          ${secondary.map(key => `<option value="${key}">${abilityOption(key)}</option>`).join("")}
        </select>
      </label>
      ${skillSelect(1)}
      ${origin.skillPicks > 1 ? skillSelect(2) : ""}
      <label>${origin.traitLabel}
        <select data-field="originTrait">
          <option value="">Choose Option</option>
          ${origin.traits.map(trait => `<option>${trait}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="origin-note">
      <strong>${origin.talent}</strong>
      <span>${origin.note}</span>
    </div>
  `;
}

function renderPowerSets() {
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const grid = document.querySelector("#powerSetGrid");
  const options = `<option value="">Choose Power Set</option>${powerSets.map(name => `<option>${name}</option>`).join("")}`;
  grid.innerHTML = Array.from({ length: rank.powerSlots }, (_, index) => {
    const number = index + 1;
    return `
      <label class="power-slot">Power Set ${number}
        <select data-field="powerSet${number}Name">${options}</select>
        <textarea data-field="powerSet${number}Notes" placeholder="Core track, branch powers, utility powers, notes"></textarea>
      </label>
    `;
  }).join("");
}

function syncFields() {
  document.querySelectorAll("[data-field]").forEach(el => setField(el, sheet[el.dataset.field]));
}

function renderOutputs() {
  const values = calc();

  document.querySelectorAll("[data-out]").forEach(el => {
    const key = el.dataset.out;
    if (values[key] !== undefined) el.textContent = values[key];
  });

  abilities.forEach(([key]) => {
    document.querySelectorAll(`[data-out="${key}Total"]`).forEach(el => {
      const bonus = originBonusFor(key);
      el.textContent = bonus ? `${abilityScore(key)} (+${bonus})` : `${abilityScore(key)}`;
    });
    document.querySelectorAll(`[data-out="${key}Mod"]`).forEach(el => {
      el.textContent = signed(abilityMod(key));
    });
  });

  skills.forEach(([key, , ability]) => {
    const trained = Boolean(sheet[`skill_${key}_trained`]);
    const expert = Boolean(sheet[`skill_${key}_expert`]);
    const total = abilityMod(ability) + (trained ? values.prowessRaw : 0) + (expert ? values.prowessRaw : 0);
    document.querySelectorAll(`[data-out="skill_${key}_total"]`).forEach(el => {
      el.textContent = signed(total);
    });
  });

  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (sheet[field] === undefined) sheet[field] = classSaves.includes(key);
    const total = abilityMod(key) + (sheet[field] ? values.prowessRaw : 0);
    document.querySelectorAll(`[data-out="save_${key}_total"]`).forEach(el => {
      el.textContent = signed(total);
    });
  });

  const portrait = document.querySelector("#portraitPreview");
  if (sheet.portrait) {
    portrait.style.backgroundImage = `url("${sheet.portrait}")`;
    portrait.textContent = "";
  } else {
    portrait.style.backgroundImage = "";
    portrait.textContent = "Portrait";
  }
}

function recalc() {
  save();
  renderOutputs();
  requestAnimationFrame(updateSheetZoomSpace);
}

function wireFields() {
  document.querySelectorAll("[data-field]").forEach(el => {
    if (el.dataset.wired === "true") return;
    el.dataset.wired = "true";
    el.addEventListener("input", () => {
      sheet[el.dataset.field] = fieldValue(el);
      if (el.dataset.field === "className" || el.dataset.field === "level") {
        const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
        abilities.forEach(([key]) => {
          sheet[`save_${key}_trained`] = classSaves.includes(key);
        });
        fillClassFeatures();
        syncFields();
      }
      if (el.dataset.field === "origin") {
        fillOrigin();
        renderOriginOptions();
        syncFields();
        wireFields();
      }
      if (el.dataset.field === "originPrimaryBonus") {
        const origin = origins[sheet.origin];
        const secondary = origin?.secondary[sheet.originPrimaryBonus] || [];
        if (!secondary.includes(sheet.originSecondaryBonus)) sheet.originSecondaryBonus = secondary[0] || "";
        renderOriginOptions();
        syncFields();
        wireFields();
      }
      if (el.dataset.field === "originSkill1" || el.dataset.field === "originSkill2") trainOriginSkills();
      if (el.dataset.field === "originTrait") fillOrigin();
      if (el.dataset.field === "calling") fillCallingTriggers();
      if (el.dataset.field === "rank") {
        renderPowerSets();
        syncFields();
        wireFields();
      }
      recalc();
    });
  });
}

function wireActions() {
  document.querySelector("#fontSizeSelect").addEventListener("input", event => {
    accessibility.fontSize = event.target.value;
    applyAccessibility();
    saveAccessibility();
  });
  document.querySelector("#dyslexicToggle").addEventListener("change", event => {
    accessibility.dyslexic = event.target.checked;
    applyAccessibility();
    saveAccessibility();
  });

  document.querySelector("#exportBtn").addEventListener("click", exportJson);
  document.querySelector("#importBtn").addEventListener("click", () => document.querySelector("#importFile").click());
  document.querySelector("#importFile").addEventListener("change", event => {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  });

  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#talentPicker").addEventListener("change", event => {
    appendField(sheet.startingTalent ? "talents" : "startingTalent", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#meritPicker").addEventListener("change", event => {
    appendField("merits", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#flawPicker").addEventListener("change", event => {
    appendField("flaws", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#weaponGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#armorGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#gadgetGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#vehicleGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#clearBtn").addEventListener("click", () => {
    if (!confirm("Clear the saved HEROIC 5e sheet?")) return;
    localStorage.removeItem(STORAGE_KEY);
    sheet = { ...defaults };
    ensureClassSaves();
    fillClassFeatures();
    fillOrigin();
    fillCallingTriggers();
    renderPowerSets();
    syncFields();
    wireFields();
    recalc();
  });

  document.querySelector("#portraitInput").addEventListener("change", event => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      sheet.portrait = reader.result;
      recalc();
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  });
}

renderOptions();
renderAbilities();
renderTraining();
ensureClassSaves();
if (!sheet.classFeatures) fillClassFeatures();
fillOrigin();
if (!sheet.minorTrigger) fillCallingTriggers();
renderOriginOptions();
renderPowerSets();
syncFields();
applyAccessibility();
wireFields();
wireActions();
recalc();
