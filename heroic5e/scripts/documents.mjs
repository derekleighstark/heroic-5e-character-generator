import { ABILITIES, SKILLS, CLASSES, RANKS, NPC_TIERS } from "./config.mjs";

export class HeroicActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();
    if (this.type === "npc") return this._prepareNpcData();
    const s = this.system;
    const level = Math.max(1, Number(s.level) || 1);
    const prowess = level >= 10 ? 5 : level >= 7 ? 4 : level >= 4 ? 3 : 2;
    const cls = CLASSES[s.className] ?? CLASSES.Bruiser;
    const rank = RANKS[s.rank] ?? RANKS["Mid-Level"];
    const mods = {};
    for (const key of Object.keys(ABILITIES)) {
      const ability = s.abilities[key];
      ability.mod = mods[key] = Math.floor((Number(ability.value) - 10) / 2);
      ability.save = mods[key] + (ability.trained ? prowess : 0);
    }
    for (const [key, [, ability]] of Object.entries(SKILLS)) {
      const skill = s.skills[key];
      skill.mod = mods[ability] + (skill.trained ? prowess : 0) + (skill.expertise ? prowess : 0);
    }
    Object.assign(s, {
      prowess, powerDie: rank.powerDie, hitDie: `d${cls.hitDie}`,
      initiative: s.initiativeOverride === "" ? mods.dex + mods.per : Number(s.initiativeOverride),
      defenses: { parry: mods.fig + mods.per + prowess, dodge: mods.dex + mods.per + prowess, willpower: mods.wis + mods.per + prowess, social: mods.cha + mods.int + prowess },
      attacks: { melee: mods.fig + prowess, ranged: mods.dex + prowess, mental: mods.int + prowess, social: mods.cha + prowess },
      classEV: 10 + mods[cls.primary] + prowess,
      powerMod: mods[s.powerAbility] ?? 0,
      powerEV: 10 + (mods[s.powerAbility] ?? 0) + prowess,
      calculatedHpMax: Number(s.abilities.con.value) + (cls.hitDie * rank.hpMultiplier) + ((level - 1) * (Math.floor(cls.hitDie / 2) + 1 + mods.con)) + (s.tough ? level * 2 : 0),
      calculatedEdgeMax: level + prowess,
      classRecovery: cls.recovery
    });
  }

  _prepareNpcData() {
    const s = this.system;
    const tier = NPC_TIERS[s.powerTier] ?? NPC_TIERS["Medium Power"];
    const mod = key => Number(s.abilities[key]?.mod) || 0;
    Object.assign(s, {
      tierBonus: tier.bonus, prowess: tier.bonus, powerDie: tier.die,
      initiative: mod("dex") + mod("per"),
      attackValue: 10 + mod(s.primaryAbility) + tier.bonus,
      effectValue: 10 + mod(s.effectAbility) + tier.bonus,
      calculatedHpMax: (Math.max(1, Number(s.conScore) || 10) + tier.dieMax) * tier.multiplier + Number(s.bonusHp || 0)
    });
    Object.assign(s.defenses, {
      parry: 10 + mod("fig") + mod("per") + tier.bonus,
      dodge: 10 + mod("dex") + mod("per") + tier.bonus,
      willpower: 10 + mod("wis") + mod("per") + tier.bonus,
      social: 10 + mod("cha") + mod("int") + tier.bonus
    });
  }

  async rollCheck(label, modifier, options = {}) {
    const roll = await new Roll(`1d20 + @mod`, { mod: Number(modifier) || 0 }).evaluate();
    return roll.toMessage({ speaker: ChatMessage.getSpeaker({ actor: this }), flavor: `<strong>${label}</strong>${options.detail ? `<div>${options.detail}</div>` : ""}` });
  }

  async shareNpcStat(label, value, detail = "") {
    return ChatMessage.create({ speaker: ChatMessage.getSpeaker({ actor: this }), content: `<div class="heroic5e chat-card"><h3>${label}</h3><div class="npc-chat-value">${value}</div>${detail ? `<p>${detail}</p>` : ""}</div>` });
  }
}

export class HeroicItem extends Item {
  async roll() {
    const actor = this.actor;
    if (!actor) return ui.notifications.warn("This item must belong to an Actor to roll it.");
    if (actor.type === "npc") return this.#useNpcPower(actor);
    const mod = (actor.system.abilities[this.system.ability]?.mod ?? 0) + actor.system.prowess + Number(this.system.attackBonus || 0);
    const attack = await new Roll("1d20 + @mod", { mod }).evaluate();
    let damage;
    if (this.system.damage?.trim()) {
      const formula = this.system.damage.replaceAll("@powerDie", actor.system.powerDie).replaceAll("@powerMod", String(actor.system.powerMod));
      try { damage = await new Roll(formula).evaluate(); } catch (error) { ui.notifications.error(`Invalid damage formula: ${formula}`); }
    }
    const rolls = damage ? [attack, damage] : [attack];
    return ChatMessage.create({ speaker: ChatMessage.getSpeaker({ actor }), flavor: `<strong>${this.name}</strong><div>${this.system.effect || ""}</div>`, rolls });
  }

  async #useNpcPower(actor) {
    let damage;
    if (this.system.damage?.trim()) {
      const formula = this.system.damage.replaceAll("@powerDie", actor.system.powerDie).replaceAll("@powerMod", String(actor.system.abilities[this.system.ability]?.mod ?? 0));
      try { damage = await new Roll(formula).evaluate(); } catch (error) { ui.notifications.error(`Invalid damage formula: ${formula}`); }
    }
    const content = `<div class="heroic5e chat-card"><h3>${this.name}</h3><p><strong>Attack Value:</strong> ${actor.system.attackValue} &nbsp; <strong>Effect Value:</strong> ${actor.system.effectValue}</p><p>${this.system.effect || this.system.description || ""}</p></div>`;
    return ChatMessage.create({ speaker: ChatMessage.getSpeaker({ actor }), content, rolls: damage ? [damage] : [] });
  }
}
