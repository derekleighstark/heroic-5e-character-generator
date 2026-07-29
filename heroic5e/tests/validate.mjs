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
for (const type of ["talent", "merit", "flaw", "calling", "origin", "class"]) assert.ok(type in manifest.documentTypes.Item);
for (const file of [...manifest.esmodules, ...manifest.styles, ...manifest.languages.map(l => l.path), "templates/actor-sheet.hbs", "templates/npc-sheet.hbs", "templates/item-sheet.hbs", "templates/charactermancer.hbs"]) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing ${file}`);
}
JSON.parse(fs.readFileSync(path.join(root, "lang/en.json"), "utf8"));
for (const file of fs.readdirSync(path.join(root, "scripts")).filter(file => file.endsWith(".mjs"))) execFileSync(process.execPath, ["--check", path.join(root, "scripts", file)]);
const expectedPacks = { talents: 57, merits: 73, flaws: 88, callings: 24, powers: 888, origins: 10, classes: 8, "featured-heroes": 11, "ready-templates": 30, "npcs-opponents": 75 };
assert.equal(manifest.packs.length, Object.keys(expectedPacks).length);
for (const pack of manifest.packs) {
  assert.ok(pack.name in expectedPacks, `Unexpected pack ${pack.name}`);
  const db = new ClassicLevel(path.join(root, pack.path), { keyEncoding: "utf8", valueEncoding: "json" });
  await db.open();
  let count = 0;
  for await (const [key, document] of db.iterator()) {
    const prefix = pack.type === "Actor" ? "!actors!" : "!items!";
    assert.match(key, new RegExp(`^${prefix}[a-f0-9]{16}$`));
    assert.equal(document._id, key.slice(prefix.length));
    assert.ok(document.name && document.type && document.system);
    if (pack.type === "Item") assert.ok(document.system.description !== undefined);
    count += 1;
  }
  await db.close();
  assert.equal(count, expectedPacks[pack.name], `${pack.name} count mismatch`);
}
const packManifest = JSON.parse(fs.readFileSync(path.join(root, "packs", "manifest.json"), "utf8"));
assert.equal(packManifest.total, 1264);
const threshold = JSON.parse(fs.readFileSync(path.join(root, "sample-actors", "threshold.json"), "utf8"));
assert.equal(threshold.system.className, "Sentinel");
assert.equal(threshold.system.rank, "Street Level");
assert.equal(threshold.system.side, "Heroic");
assert.equal(threshold.system.calling, "Defender");
assert.deepEqual(Object.fromEntries(Object.entries(threshold.system.abilities).map(([key, value]) => [key, value.value])), { str:11, dex:10, con:17, fig:12, int:13, wis:15, cha:8, per:16 });
assert.deepEqual(threshold.system.hp, { value:25, max:25 });
assert.equal(threshold.system.initiativeOverride, "2");
assert.equal(threshold.items.filter(item => item.type === "merit" && item.system.subtype !== "Origin Merit").reduce((sum, item) => sum + item.system.cost, 0), 3);
assert.equal(threshold.items.filter(item => item.type === "flaw" && item.system.subtype !== "Origin Flaw").reduce((sum, item) => sum + item.system.cost, 0), 3);
assert.equal(threshold.items.filter(item => item.type === "power").reduce((sum, item) => sum + item.system.cost, 0), 8);
console.log("Heroic 5e system validation passed.");
