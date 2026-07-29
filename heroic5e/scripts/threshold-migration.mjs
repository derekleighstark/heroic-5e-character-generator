const THRESHOLD_PDF_VERSION = "2.4-updated-2026-07b";

export async function updateThresholdFromPdf() {
  if (!game.user?.isGM) return;
  const actor = game.actors.getName("Threshold");
  if (!actor || actor.type !== "character" || actor.getFlag("heroic5e", "thresholdPdfVersion") === THRESHOLD_PDF_VERSION) return;
  try {
    const response = await fetch("systems/heroic5e/sample-actors/threshold.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const source = await response.json();
    await actor.update({ name: source.name, img: source.img, system: source.system, prototypeToken: source.prototypeToken, "flags.heroic5e.thresholdPdfVersion": THRESHOLD_PDF_VERSION });
    if (actor.items.size) await actor.deleteEmbeddedDocuments("Item", actor.items.map(item => item.id));
    await actor.createEmbeddedDocuments("Item", source.items.map(item => foundry.utils.deepClone(item)));
    ui.notifications.info("Threshold was updated from the v2.4 PDF character sheet.");
  } catch (error) {
    console.error("Heroic 5e | Threshold PDF update failed", error);
    ui.notifications.error("Threshold could not be updated from the packaged v2.4 data.");
  }
}
