export const ABILITIES = {
  str: "Strength", dex: "Dexterity", con: "Constitution", fig: "Fighting",
  int: "Intelligence", wis: "Wisdom", cha: "Charisma", per: "Perception"
};

export const SKILLS = {
  acrobatics: ["Acrobatics", "dex"], athletics: ["Athletics", "str"], culture: ["Culture", "int"],
  finesse: ["Finesse", "dex"], influence: ["Influence", "cha"], insight: ["Insight", "wis"],
  intimidation: ["Intimidation", "cha"], investigation: ["Investigation", "int"], medicine: ["Medicine", "int"],
  notice: ["Notice", "per"], occult: ["Occult", "wis"], science: ["Science", "int"],
  stealth: ["Stealth", "dex"], streetwise: ["Streetwise", "cha"], survival: ["Survival", "wis"],
  technology: ["Technology", "int"], vehicles: ["Vehicles", "dex"]
};

export const CLASSES = {
  Beacon: { primary: "cha", hitDie: 8, saves: ["cha", "wis"], recovery: 1 },
  Bruiser: { primary: "str", hitDie: 10, saves: ["str", "con"], recovery: 1 },
  Guardian: { primary: "con", hitDie: 12, saves: ["con", "str"], recovery: 2 },
  Sentinel: { primary: "per", hitDie: 8, saves: ["per", "dex"], recovery: 1 },
  Strategist: { primary: "int", hitDie: 8, saves: ["int", "per"], recovery: 0 },
  Striker: { primary: "fig", hitDie: 8, saves: ["fig", "dex"], recovery: 0 },
  Vanguard: { primary: "dex", hitDie: 8, saves: ["dex", "per"], recovery: 0 },
  Warden: { primary: "wis", hitDie: 8, saves: ["wis", "con"], recovery: 2 }
};

export const RANKS = {
  "Street Level": { powerDie: "d8", hpMultiplier: 1, edgeStart: 3 },
  "Mid-Level": { powerDie: "d10", hpMultiplier: 2, edgeStart: 2 },
  "World Class": { powerDie: "d12", hpMultiplier: 3, edgeStart: 1 }
};

export const NPC_TIERS = {
  "Day Player": { bonus: 1, die: "d6", dieMax: 6, multiplier: 1 },
  "Low Power": { bonus: 2, die: "d8", dieMax: 8, multiplier: 1 },
  "Medium Power": { bonus: 3, die: "d10", dieMax: 10, multiplier: 2 },
  "High Power": { bonus: 4, die: "d12", dieMax: 12, multiplier: 3 },
  "Cosmic Power": { bonus: 6, die: "d12+d6", dieMax: 18, multiplier: 4 }
};
