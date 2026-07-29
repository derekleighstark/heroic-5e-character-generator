import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { ClassicLevel } from "classic-level";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "system.json"), "utf8"));
assert.equal(manifest.id, "heroic5e");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(Number(manifest.compatibility.verified.split(".")[1]) >= 364);
for (const type of ["character", "npc"]) assert.ok(type in manifest.documentTypes.Actor);
for (const type of ["power", "feature", "equipment"]) assert.ok(type in manifest.documentTypes.Item);
for (const type of ["talent", "merit", "flaw", "origin", "class"]) assert.ok(type in manifest.documentTypes.Item);
for (const file of [...manifest.esmodules, ...manifest.styles, ...manifest.languages.map(l => l.path), "templates/actor-sheet.hbs", "templates/npc-sheet.hbs", "templates/item-sheet.hbs"]) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing ${file}`);
}
JSON.parse(fs.readFileSync(path.join(root, "lang/en.json"), "utf8"));
for (const file of fs.readdirSync(path.join(root, "scripts")).filter(file => file.endsWith(".mjs"))) execFileSync(process.execPath, ["--check", path.join(root, "scripts", file)]);
const expectedPacks = { talents: 57, merits: 40, flaws: 45, powers: 888, origins: 10, classes: 8 };
assert.equal(manifest.packs.length, Object.keys(expectedPacks).length);
for (const pack of manifest.packs) {
  assert.ok(pack.name in expectedPacks, `Unexpected pack ${pack.name}`);
  const db = new ClassicLevel(path.join(root, pack.path), { keyEncoding: "utf8", valueEncoding: "json" });
  await db.open();
  let count = 0;
  for await (const [key, document] of db.iterator()) {
    assert.match(key, /^!items![a-f0-9]{16}$/);
    assert.equal(document._id, key.slice("!items!".length));
    assert.ok(document.name && document.type && document.system?.description !== undefined);
    count += 1;
  }
  await db.close();
  assert.equal(count, expectedPacks[pack.name], `${pack.name} count mismatch`);
}
const packManifest = JSON.parse(fs.readFileSync(path.join(root, "packs", "manifest.json"), "utf8"));
assert.equal(packManifest.total, 1048);
console.log("Heroic 5e system validation passed.");
