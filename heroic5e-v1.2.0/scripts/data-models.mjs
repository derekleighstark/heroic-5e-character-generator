const fields = foundry.data.fields;
const abilityField = () => new fields.SchemaField({
  value: new fields.NumberField({ initial: 10, integer: true }),
  trained: new fields.BooleanField({ initial: false }),
  mod: new fields.NumberField({ initial: 0, persisted: false }),
  save: new fields.NumberField({ initial: 0, persisted: false })
});
const skillField = () => new fields.SchemaField({
  trained: new fields.BooleanField({ initial: false }),
  expertise: new fields.BooleanField({ initial: false }),
  mod: new fields.NumberField({ initial: 0, persisted: false })
});
const resourceField = (value = 0, max = 0) => new fields.SchemaField({
  value: new fields.NumberField({ initial: value, integer: true }),
  max: new fields.NumberField({ initial: max, integer: true })
});

export class HeroicActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      biography: new fields.HTMLField(), notes: new fields.HTMLField(),
      level: new fields.NumberField({ initial: 1, min: 1, max: 10, integer: true }),
      rank: new fields.StringField({ initial: "Mid-Level" }),
      className: new fields.StringField({ initial: "Bruiser" }),
      powerAbility: new fields.StringField({ initial: "str" }),
      tough: new fields.BooleanField({ initial: false }),
      abilities: new fields.SchemaField(Object.fromEntries(["str","dex","con","fig","int","wis","cha","per"].map(k => [k, abilityField()]))),
      skills: new fields.SchemaField(Object.fromEntries(["acrobatics","athletics","culture","finesse","influence","insight","intimidation","investigation","medicine","notice","occult","science","stealth","streetwise","survival","technology","vehicles"].map(k => [k, skillField()]))),
      hp: resourceField(10, 10), tempHp: new fields.NumberField({ initial: 0, integer: true }),
      edge: resourceField(2, 3), burnout: resourceField(0, 6), recovery: resourceField(1, 1),
      speed: new fields.NumberField({ initial: 30, integer: true }), conditions: new fields.StringField(),
      prowess: new fields.NumberField({ initial: 2, persisted: false }),
      powerDie: new fields.StringField({ initial: "d10", persisted: false }),
      hitDie: new fields.StringField({ initial: "d10", persisted: false }),
      initiative: new fields.NumberField({ initial: 0, persisted: false }),
      defenses: new fields.SchemaField(Object.fromEntries(["parry","dodge","willpower","social"].map(k => [k, new fields.NumberField({ initial: 0, persisted: false })]))),
      attacks: new fields.SchemaField(Object.fromEntries(["melee","ranged","mental","social"].map(k => [k, new fields.NumberField({ initial: 0, persisted: false })]))),
      classEV: new fields.NumberField({ initial: 10, persisted: false }),
      powerMod: new fields.NumberField({ initial: 0, persisted: false }),
      powerEV: new fields.NumberField({ initial: 10, persisted: false }),
      calculatedHpMax: new fields.NumberField({ initial: 10, persisted: false }),
      calculatedEdgeMax: new fields.NumberField({ initial: 3, persisted: false }),
      classRecovery: new fields.NumberField({ initial: 1, persisted: false }),
      schemaVersion: new fields.NumberField({ initial: 1, integer: true })
    };
  }
}

const npcAbilityField = () => new fields.SchemaField({
  mod: new fields.NumberField({ initial: 0, integer: true })
});

export class HeroicNpcData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      concept: new fields.StringField(), side: new fields.StringField({ initial: "Villainous" }),
      powerTier: new fields.StringField({ initial: "Medium Power" }), minionTier: new fields.StringField(),
      boss: new fields.BooleanField({ initial: false }), conScore: new fields.NumberField({ initial: 14, integer: true }),
      bonusHp: new fields.NumberField({ initial: 0, integer: true }), hp: resourceField(44, 44), tempHp: new fields.NumberField({ initial: 0, integer: true }),
      speed: new fields.StringField({ initial: "30 ft" }), primaryAbility: new fields.StringField({ initial: "fig" }), effectAbility: new fields.StringField({ initial: "str" }),
      abilities: new fields.SchemaField(Object.fromEntries(["str","dex","con","fig","int","wis","cha","per"].map(k => [k, npcAbilityField()]))),
      classAbilities: new fields.HTMLField(), powers: new fields.HTMLField(), skillsText: new fields.HTMLField(),
      talentsText: new fields.HTMLField(), meritsText: new fields.HTMLField(), flawsText: new fields.HTMLField(), notes: new fields.HTMLField(),
      conditions: new fields.StringField(),
      tierBonus: new fields.NumberField({ initial: 3, persisted: false }), powerDie: new fields.StringField({ initial: "d10", persisted: false }), prowess: new fields.NumberField({ initial: 3, persisted: false }),
      initiative: new fields.NumberField({ initial: 0, persisted: false }), attackValue: new fields.NumberField({ initial: 13, persisted: false }), effectValue: new fields.NumberField({ initial: 13, persisted: false }),
      defenses: new fields.SchemaField(Object.fromEntries(["parry","dodge","willpower","social"].map(k => [k, new fields.NumberField({ initial: 10, persisted: false })]))),
      calculatedHpMax: new fields.NumberField({ initial: 44, persisted: false }), schemaVersion: new fields.NumberField({ initial: 1, integer: true })
    };
  }
}

export class HeroicItemData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fields.HTMLField(), subtype: new fields.StringField(), action: new fields.StringField({ initial: "Action" }),
      category: new fields.StringField(), source: new fields.StringField({ initial: "Heroic 5e v2.4" }),
      prerequisite: new fields.StringField(), tier: new fields.StringField(), powerSet: new fields.StringField(),
      cost: new fields.NumberField({ initial: 0 }), tags: new fields.StringField(),
      ability: new fields.StringField({ initial: "str" }), attackBonus: new fields.NumberField({ initial: 0, integer: true }),
      damage: new fields.StringField(), effect: new fields.StringField(), uses: resourceField(0, 0),
      quantity: new fields.NumberField({ initial: 1, min: 0, integer: true }), equipped: new fields.BooleanField({ initial: true })
    };
  }
}
