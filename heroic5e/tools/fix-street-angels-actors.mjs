import fs from "node:fs";
import path from "node:path";

const files = process.argv.slice(2);
if (!files.length) throw new Error("Pass one or more Foundry Actor JSON files.");

const ratingFromName = name => Number(String(name).match(/(?:^|\s)([1-3])(?:\s|\(|$)/)?.[1] ?? 0);

for (const file of files) {
  const actor = JSON.parse(fs.readFileSync(file, "utf8"));
  let markedSection = "";
  for (const item of actor.items ?? []) {
    const marker = String(item.name).match(/^(Merits?|Flaws?)\s+/i)?.[1]?.toLowerCase();
    if (marker) {
      markedSection = marker.startsWith("merit") ? "merit" : "flaw";
      item.name = item.name.replace(/^(Merits?|Flaws?)\s+/i, "");
    }
    if (markedSection && ["merit", "flaw"].includes(item.type)) item.type = markedSection;
    if (!["merit", "flaw"].includes(item.type)) continue;
    item.system ??= {};
    item.system.subtype = item.type === "merit" ? "Merit" : "Flaw";
    item.system.category = item.type === "merit" ? "Merit" : "Flaw";
    if (!Number(item.system.cost)) item.system.cost = ratingFromName(item.name);
  }
  fs.writeFileSync(file, `${JSON.stringify(actor, null, 2)}\n`);
  console.log(`Corrected ${actor.name}: ${path.basename(file)}`);
}
