import { ABILITIES, SKILLS, CLASSES, RANKS, NPC_TIERS } from "./config.mjs";

const { ActorSheetV2, ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class HeroicActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["heroic5e", "actor-sheet"],
    position: { width: 860, height: 760 },
    tag: "form",
    form: { closeOnSubmit: false, submitOnChange: true, handler: HeroicActorSheet.#onSubmit }
  };
  static PARTS = { main: { template: "systems/heroic5e/templates/actor-sheet.hbs" } };

  static async #onSubmit(event, form, formData) {
    return this.actor.update(formData.object);
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context, actor: this.actor, system: this.actor.system, editable: this.isEditable,
      config: { abilities: ABILITIES, skills: SKILLS, classes: Object.keys(CLASSES), ranks: Object.keys(RANKS) },
      items: this.actor.items.map(item => ({ item, isPower: item.type === "power" }))
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const root = this.element;
    root.querySelectorAll("[data-tab-target]").forEach(button => button.addEventListener("click", event => {
      event.preventDefault();
      const tab = button.dataset.tabTarget;
      root.querySelectorAll("[data-tab-target]").forEach(el => el.classList.toggle("active", el.dataset.tabTarget === tab));
      root.querySelectorAll("[data-tab]").forEach(el => el.classList.toggle("active", el.dataset.tab === tab));
    }));
    root.querySelectorAll("[data-roll]").forEach(button => button.addEventListener("click", event => this._onRoll(event)));
    root.querySelectorAll("[data-item-action]").forEach(button => button.addEventListener("click", event => this._onItem(event)));
  }

  async _onRoll(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const kind = button.dataset.roll;
    const key = button.dataset.key;
    if (kind === "ability") return this.actor.rollCheck(ABILITIES[key], this.actor.system.abilities[key].mod);
    if (kind === "save") return this.actor.rollCheck(`${ABILITIES[key]} Save`, this.actor.system.abilities[key].save);
    if (kind === "skill") return this.actor.rollCheck(SKILLS[key][0], this.actor.system.skills[key].mod, { detail: ABILITIES[SKILLS[key][1]] });
    if (kind === "initiative") return this.actor.rollCheck("Initiative", this.actor.system.initiative);
    if (kind === "defense") return this.actor.rollCheck(`${key.charAt(0).toUpperCase()}${key.slice(1)} Defense`, this.actor.system.defenses[key]);
  }

  async _onItem(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const item = this.actor.items.get(button.closest("[data-item-id]")?.dataset.itemId);
    if (button.dataset.itemAction === "create") return Item.create({ name: "New Power", type: "power" }, { parent: this.actor });
    if (!item) return;
    if (button.dataset.itemAction === "edit") return item.sheet.render(true);
    if (button.dataset.itemAction === "roll") return item.roll();
    if (button.dataset.itemAction === "delete" && await foundry.applications.api.DialogV2.confirm({ window: { title: "Delete Item" }, content: `<p>Delete <strong>${item.name}</strong>?</p>` })) return item.delete();
  }
}

export class HeroicNpcSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["heroic5e", "npc-sheet"], position: { width: 790, height: 720 }, tag: "form",
    form: { closeOnSubmit: false, submitOnChange: true, handler: HeroicNpcSheet.#onSubmit }
  };
  static PARTS = { main: { template: "systems/heroic5e/templates/npc-sheet.hbs" } };
  static async #onSubmit(event, form, formData) { return this.actor.update(formData.object); }

  async _prepareContext(options) {
    return {
      ...(await super._prepareContext(options)), actor: this.actor, system: this.actor.system, editable: this.isEditable,
      abilities: ABILITIES, tiers: Object.keys(NPC_TIERS),
      sides: ["Heroic", "Unaligned", "Villainous"], minionTiers: ["", "Thug", "Goon", "Lieutenant"],
      items: this.actor.items.map(item => ({ item, isPower: item.type === "power" }))
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const root = this.element;
    root.querySelectorAll("[data-tab-target]").forEach(button => button.addEventListener("click", event => {
      event.preventDefault();
      const tab = button.dataset.tabTarget;
      root.querySelectorAll("[data-tab-target]").forEach(el => el.classList.toggle("active", el.dataset.tabTarget === tab));
      root.querySelectorAll("[data-tab]").forEach(el => el.classList.toggle("active", el.dataset.tab === tab));
    }));
    root.querySelectorAll("[data-share]").forEach(button => button.addEventListener("click", event => this._onShare(event)));
    root.querySelectorAll("[data-item-action]").forEach(button => button.addEventListener("click", event => this._onItem(event)));
  }

  async _onShare(event) {
    event.preventDefault();
    const key = event.currentTarget.dataset.share;
    const labels = { attackValue: "Attack Value", effectValue: "Effect Value", parry: "Parry / Block", dodge: "Dodge", willpower: "Willpower", social: "Social Defense" };
    const value = key in this.actor.system.defenses ? this.actor.system.defenses[key] : this.actor.system[key];
    return this.actor.shareNpcStat(labels[key], value, `${this.actor.system.powerTier} · Tier Bonus +${this.actor.system.tierBonus}`);
  }

  async _onItem(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const item = this.actor.items.get(button.closest("[data-item-id]")?.dataset.itemId);
    if (button.dataset.itemAction === "create") return Item.create({ name: "New NPC Power", type: "power" }, { parent: this.actor });
    if (!item) return;
    if (button.dataset.itemAction === "edit") return item.sheet.render(true);
    if (button.dataset.itemAction === "roll") return item.roll();
    if (button.dataset.itemAction === "delete" && await foundry.applications.api.DialogV2.confirm({ window: { title: "Delete Item" }, content: `<p>Delete <strong>${item.name}</strong>?</p>` })) return item.delete();
  }
}

export class HeroicItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["heroic5e", "item-sheet"], position: { width: 560, height: 620 }, tag: "form",
    form: { closeOnSubmit: false, submitOnChange: true, handler: HeroicItemSheet.#onSubmit }
  };
  static PARTS = { main: { template: "systems/heroic5e/templates/item-sheet.hbs" } };
  static async #onSubmit(event, form, formData) { return this.item.update(formData.object); }
  async _prepareContext(options) {
    return { ...(await super._prepareContext(options)), item: this.item, system: this.item.system, editable: this.isEditable, abilities: ABILITIES };
  }
}
