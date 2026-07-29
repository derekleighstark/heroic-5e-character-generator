import assert from "node:assert/strict";
import {
  createCharacterExport,
  importedSheetFromPayload,
  normalizeImportedSheet
} from "../src/character-json.js";

const defaults = { rank: "Mid-Level", level: 1, portraitMode: "contain" };
const completeSheet = {
  ...defaults,
  heroName: "Round Trip",
  concept: "Every field survives.",
  powerSet1: "Absorption",
  powerSet7: "Weather Control",
  powerPurchases: ["absorption::core::1", "absorption::at-will::redirect"],
  powerSetAbilities: { absorption: "con" },
  skill_science_trained: true,
  skill_science_expert: true,
  save_con_trained: true,
  minorTrigger: "Custom minor trigger",
  merits: "A Merit 2",
  limitationsText: "A real limitation",
  gear: "A signature device",
  sessionNotes: "Do not drop this.",
  portrait: "data:image/jpeg;base64,abc123",
  portraitMode: "cover",
  portraitZoom: 1.65,
  portraitX: 28,
  portraitY: 72,
  futureField: { nested: ["preserved", 42, true] }
};

const exported = createCharacterExport(completeSheet, {
  rulesVersion: "Playtest v3.5.3",
  activeStep: "powers",
  liveSheetMode: "official",
  exportedAt: "2026-07-29T00:00:00.000Z"
});
const imported = normalizeImportedSheet(importedSheetFromPayload(JSON.parse(JSON.stringify(exported))), defaults);

assert.deepEqual(imported, completeSheet);
assert.equal(exported.schemaVersion, 4);
assert.deepEqual(exported.state, { activeStep: "powers", liveSheetMode: "official" });

const duplicatePowers = normalizeImportedSheet({ ...completeSheet, powerPurchases: ["a", "a", "b"] }, defaults);
assert.deepEqual(duplicatePowers.powerPurchases, ["a", "b"]);

const rawSheet = normalizeImportedSheet(importedSheetFromPayload(completeSheet), defaults);
assert.equal(rawSheet.heroName, completeSheet.heroName);
assert.equal(rawSheet.powerSet7, completeSheet.powerSet7);

console.log(`Character JSON audit passed: ${Object.keys(completeSheet).length} fields round-tripped.`);
