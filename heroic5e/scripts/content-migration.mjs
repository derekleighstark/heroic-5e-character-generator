const CONTENT_VERSION = "featured-heroes-and-splash-3";
const REBUILD_HEROES = new Set(["The Motor City Sentinel", "Wraith"]);

export async function installFeaturedContent() {
  if (!game.user?.isGM) return;
  const done = game.settings.get("heroic5e", "featuredContentVersion");
  if (done === CONTENT_VERSION) return;
  try {
    const pack = game.packs.get("heroic5e.featured-heroes");
    if (pack) {
      const documents = await pack.getDocuments();
      for (const source of documents) {
        const existing = game.actors.getName(source.name);
        if (existing) {
          if (REBUILD_HEROES.has(source.name)) {
            await existing.update({ img: source.img, system: source.system, prototypeToken: source.prototypeToken });
            if (existing.items.size) await existing.deleteEmbeddedDocuments("Item", existing.items.map(item => item.id));
            await existing.createEmbeddedDocuments("Item", source.items.map(item => foundry.utils.deepClone(item.toObject())));
          } else await existing.update({ img: source.img, prototypeToken: source.prototypeToken });
          continue;
        }
        const data = source.toObject();
        delete data._id;
        await Actor.create(data);
      }
    }
    if (!game.scenes.getName("Heroic 5e - Splash Screen")) await Scene.create({
      name: "Heroic 5e - Splash Screen",
      active: false,
      navigation: true,
      background: { src: "systems/heroic5e/assets/branding/heroic-5e-logo.png" },
      width: 1382,
      height: 598,
      padding: 0.05,
      grid: { type: 0, size: 100, distance: 5, units: "ft" },
      darkness: 0
    });
    await game.settings.set("heroic5e", "featuredContentVersion", CONTENT_VERSION);
    ui.notifications.info("Heroic 5e featured heroes and splash screen were added.");
  } catch (error) {
    console.error("Heroic 5e | Featured content installation failed", error);
    ui.notifications.error("Heroic 5e could not finish installing the featured content.");
  }
}
