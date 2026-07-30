const blockedKeys = new Set(["__proto__", "prototype", "constructor"]);
const sheetMarkers = new Set([
  "rank", "level", "origin", "className", "calling", "heroName", "realName",
  "concept", "strScore", "powerPurchases", "powerSetAbilities", "powerSet1"
]);

function isPlainObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function sanitizeJsonValue(value, depth = 0) {
  if (depth > 20) throw new Error("The character data is nested too deeply.");
  if (value === null || typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (Array.isArray(value)) return value.map(item => sanitizeJsonValue(item, depth + 1));
  if (!isPlainObject(value)) return undefined;

  const clean = {};
  Object.entries(value).forEach(([key, item]) => {
    if (blockedKeys.has(key)) return;
    const sanitized = sanitizeJsonValue(item, depth + 1);
    if (sanitized !== undefined) clean[key] = sanitized;
  });
  return clean;
}

function looksLikeSheet(value) {
  if (!isPlainObject(value)) return false;
  return Object.keys(value).filter(key => sheetMarkers.has(key) || /^powerSet\d+$/.test(key) || /^skill_.+_(trained|expert)$/.test(key)).length >= 3;
}

export function importedSheetFromPayload(payload) {
  if (!isPlainObject(payload)) throw new Error("The file does not contain a character object.");
  if (isPlainObject(payload.sheet)) return payload.sheet;
  if (isPlainObject(payload.character?.sheet)) return payload.character.sheet;
  if (looksLikeSheet(payload)) return payload;
  throw new Error("This is not a HEROIC 5e generator character file.");
}

export function normalizeImportedSheet(source, defaults) {
  if (!isPlainObject(source)) throw new Error("The imported sheet is invalid.");
  const imported = sanitizeJsonValue(source);
  const normalized = { ...sanitizeJsonValue(defaults), ...imported };

  normalized.powerPurchases = Array.isArray(imported.powerPurchases)
    ? [...new Set(imported.powerPurchases.filter(value => typeof value === "string"))]
    : [];
  normalized.powerSetAbilities = isPlainObject(imported.powerSetAbilities)
    ? { ...imported.powerSetAbilities }
    : {};
  if (typeof normalized.portrait !== "string") normalized.portrait = "";
  if (!["contain", "cover"].includes(normalized.portraitMode)) normalized.portraitMode = "contain";
  return normalized;
}

export function createCharacterExport(sheet, {
  rulesVersion = "",
  activeStep = "concept",
  liveSheetMode = "visual",
  exportedAt = new Date().toISOString()
} = {}) {
  const cleanSheet = sanitizeJsonValue(sheet);
  return {
    type: "HEROIC 5e Character Generator",
    schemaVersion: 5,
    rulesVersion,
    exportedAt,
    state: {
      activeStep,
      liveSheetMode
    },
    sheet: cleanSheet
  };
}
