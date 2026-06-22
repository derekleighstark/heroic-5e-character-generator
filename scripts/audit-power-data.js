const fs = require("fs");
const path = require("path");

const sourcePath = path.resolve(__dirname, "..", "src", "power-data.js");
const source = fs.readFileSync(sourcePath, "utf8");
const executable = source.replace(/export const (\w+)\s*=/g, "data.$1 =");
const data = Function(`const data = {}; ${executable}; return data;`)();
const { powerFramework, powerSetRules, generalUtilityPowers } = data;
const errors = [];

if (!Array.isArray(powerSetRules) || powerSetRules.length !== 37) {
  errors.push(`Expected 37 Power Sets, found ${powerSetRules?.length ?? "none"}.`);
}

if (!Array.isArray(generalUtilityPowers) || generalUtilityPowers.length !== 36) {
  errors.push(`Expected 36 General Utilities, found ${generalUtilityPowers?.length ?? "none"}.`);
}

if (powerFramework?.powerTypes?.length !== 6) errors.push("Power framework does not contain all six Power Types.");
if (powerFramework?.genericEnhancements?.length !== 8) errors.push("Power framework does not contain all eight General Enhancements.");
if (powerFramework?.genericLimitations?.length !== 9) errors.push("Power framework does not contain all nine General Limitations.");

const seenSetIds = new Set();
for (const powerSet of powerSetRules || []) {
  if (seenSetIds.has(powerSet.id)) errors.push(`Duplicate Power Set id: ${powerSet.id}.`);
  seenSetIds.add(powerSet.id);
  if (powerSet.coreTrack?.length !== 4) errors.push(`${powerSet.name} does not have four Core Track entries.`);
  for (const group of ["coreTrack", "powers", "utilities", "enhancements", "limitations"]) {
    if (!powerSet[group]?.length) errors.push(`${powerSet.name} has no ${group}.`);
    const ids = new Set();
    for (const item of powerSet[group] || []) {
      if (!item.name || !item.text) errors.push(`${powerSet.name} has an incomplete ${group} entry.`);
      const itemId = item.id || item.name;
      if (ids.has(itemId)) errors.push(`${powerSet.name} has duplicate ${group} id ${itemId}.`);
      ids.add(itemId);
    }
  }
}

for (const requiredSet of ["earth-control", "water-control"]) {
  if (!seenSetIds.has(requiredSet)) errors.push(`Required Power Set missing: ${requiredSet}.`);
}

const utilityIds = new Set();
for (const utility of generalUtilityPowers || []) {
  if (!utility.name || !utility.text) errors.push("General Utility entry is missing a name or rules text.");
  if (utilityIds.has(utility.id)) errors.push(`Duplicate General Utility id: ${utility.id}.`);
  utilityIds.add(utility.id);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const combatCount = powerSetRules.reduce((total, powerSet) => total + powerSet.powers.length, 0);
const setUtilityCount = powerSetRules.reduce((total, powerSet) => total + powerSet.utilities.length, 0);
const coreCount = powerSetRules.reduce((total, powerSet) => total + powerSet.coreTrack.length, 0);
const enhancementCount = powerSetRules.reduce((total, powerSet) => total + powerSet.enhancements.length, 0);
const limitationCount = powerSetRules.reduce((total, powerSet) => total + powerSet.limitations.length, 0);
if (combatCount !== 233) errors.push(`Expected 233 Combat Powers, found ${combatCount}.`);
if (setUtilityCount !== 158) errors.push(`Expected 158 set utilities, found ${setUtilityCount}.`);
if (coreCount !== 148) errors.push(`Expected 148 Core Track entries, found ${coreCount}.`);
if (enhancementCount !== 148) errors.push(`Expected 148 set Enhancements, found ${enhancementCount}.`);
if (limitationCount !== 111) errors.push(`Expected 111 set Limitations, found ${limitationCount}.`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Power data audit passed: ${powerSetRules.length} sets, ${coreCount} Core Track entries, ${combatCount} combat powers, ${setUtilityCount} set utilities, ${enhancementCount} Enhancements, ${limitationCount} Limitations, and ${generalUtilityPowers.length} general utilities.`);
