import { HeroicActorData, HeroicNpcData, HeroicItemData } from "./data-models.mjs";
import { HeroicActor, HeroicItem } from "./documents.mjs";
import { HeroicActorSheet, HeroicNpcSheet, HeroicItemSheet } from "./sheets.mjs";
import { ABILITIES, SKILLS, CLASSES, RANKS, NPC_TIERS } from "./config.mjs";
import { updateThresholdFromPdf } from "./threshold-migration.mjs";
import { repairStreetAngelsTraits } from "./street-angels-migration.mjs";
import { installFeaturedContent } from "./content-migration.mjs";

Hooks.once("init", () => {
  console.log("Heroic 5e | Initializing for Foundry VTT 14");
  CONFIG.HEROIC5E = { ABILITIES, SKILLS, CLASSES, RANKS, NPC_TIERS };
  game.settings.register("heroic5e", "featuredContentVersion", { scope: "world", config: false, type: String, default: "" });
  CONFIG.Actor.documentClass = HeroicActor;
  CONFIG.Item.documentClass = HeroicItem;
  CONFIG.Actor.dataModels.character = HeroicActorData;
  CONFIG.Actor.dataModels.npc = HeroicNpcData;
  for (const type of ["power", "talent", "merit", "flaw", "calling", "origin", "class", "feature", "equipment"]) CONFIG.Item.dataModels[type] = HeroicItemData;
  CONFIG.Actor.trackableAttributes = { character: { bar: ["hp", "edge", "burnout"] }, npc: { bar: ["hp", "edge", "burnout"] } };
  const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, game.system.id, HeroicActorSheet, { types: ["character"], makeDefault: true, label: "Heroic 5e Hero Sheet" });
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, game.system.id, HeroicNpcSheet, { types: ["npc"], makeDefault: true, label: "Heroic 5e NPC Sheet" });
  DocumentSheetConfig.registerSheet(foundry.documents.Item, game.system.id, HeroicItemSheet, { types: ["power", "talent", "merit", "flaw", "calling", "origin", "class", "feature", "equipment"], makeDefault: true, label: "Heroic 5e Item Sheet" });
});

Hooks.once("ready", updateThresholdFromPdf);
Hooks.once("ready", repairStreetAngelsTraits);
Hooks.once("ready", installFeaturedContent);
