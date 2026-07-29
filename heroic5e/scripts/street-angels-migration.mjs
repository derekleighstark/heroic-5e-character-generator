const STREET_ANGELS = new Set(["Brightheart", "Ghost Fox", "Hardbody", "Madame Noir", "Nightshade", "Psyche", "Shield Maiden", "Starling"]);
const MIGRATION_VERSION = "merit-flaw-types-2";
const BRIGHTHEART_MERITS = new Set(["Cosmic Signature 1", "Public Trust 1", "Local Support 1", "Mentor 1"]);
const BRIGHTHEART_MISSING_MERITS = ["Cosmic Signature 1", "Mentor 1"];
const ratingFromName = name => Number(String(name).match(/(?:^|\s)([1-3])(?:\s|\(|$)/)?.[1] ?? 0);

export async function repairStreetAngelsTraits() {
  if (!game.user?.isGM) return;
  for (const actor of game.actors.filter(actor => STREET_ANGELS.has(actor.name))) {
    if (actor.getFlag("heroic5e", "streetAngelsTraitMigration") === MIGRATION_VERSION) continue;
    let markedSection = "";
    const replacements = [], deletes = [], updates = [];
    for (const item of actor.items) {
      const marker = item.name.match(/^(Merits?|Flaws?)\s+/i)?.[1]?.toLowerCase();
      if (marker) markedSection = marker.startsWith("merit") ? "merit" : "flaw";
      if (!["merit", "flaw"].includes(item.type)) continue;
      const cleanName = item.name.replace(/^(Merits?|Flaws?)\s+/i, "");
      const desiredType = actor.name === "Brightheart" && BRIGHTHEART_MERITS.has(cleanName)
        ? "merit"
        : markedSection || item.type;
      const cost = Number(item.system.cost) || ratingFromName(cleanName);
      if (desiredType !== item.type) {
        const replacement = item.toObject();
        delete replacement._id;
        replacement.name = cleanName;
        replacement.type = desiredType;
        replacement.system.subtype = desiredType === "merit" ? "Merit" : "Flaw";
        replacement.system.category = desiredType === "merit" ? "Merit" : "Flaw";
        replacement.system.cost = cost;
        replacements.push(replacement);
        deletes.push(item.id);
      } else {
        const update = { _id: item.id };
        if (cleanName !== item.name) update.name = cleanName;
        if (cost !== Number(item.system.cost)) update["system.cost"] = cost;
        if (Object.keys(update).length > 1) updates.push(update);
      }
    }
    if (deletes.length) await actor.deleteEmbeddedDocuments("Item", deletes);
    if (replacements.length) await actor.createEmbeddedDocuments("Item", replacements);
    if (updates.length) await actor.updateEmbeddedDocuments("Item", updates);
    if (actor.name === "Brightheart") {
      const existing = new Set(actor.items.map(item => item.name));
      const missing = BRIGHTHEART_MISSING_MERITS.filter(name => !existing.has(name)).map(name => ({
        name,
        type: "merit",
        img: "icons/svg/downgrade.svg",
        system: {
          description: `<p>${name}</p>`, subtype: "Merit", action: "Passive", category: "Merit",
          source: "Heroic 5e v2.4", prerequisite: "", tier: 1, powerSet: "", cost: 1,
          tags: [], ability: "str", attackBonus: 0, damage: "", effect: "",
          uses: { value: 0, max: 0 }, quantity: 1, equipped: true
        }
      }));
      if (missing.length) await actor.createEmbeddedDocuments("Item", missing);
    }
    await actor.setFlag("heroic5e", "streetAngelsTraitMigration", MIGRATION_VERSION);
  }
}
