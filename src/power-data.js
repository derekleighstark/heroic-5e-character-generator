// Generated from HEROIC 5e v2.4 Playtest Edition, Chapters 10-12.
// Run scripts/extract_power_rules.py to regenerate after a rules update.

export const powerFramework = {
  "creationCosts": {
    "Core Track 1": 1,
    "Core Track 2": 2,
    "Core Track 3": 3,
    "Core Track 4": 3,
    "Tier 1 Branch": 1,
    "Tier 2 Branch": 2,
    "Tier 3 Branch": 3,
    "Utility": 1,
    "Two Enhancements": 1
  },
  "minimumBaseline": "At least one Core Track purchase, two At-Will Powers, and one Encounter Power.",
  "advancement": "Levels 2-10 grant one Power Pick each. Advancement purchases cost 1 Pick regardless of Tier. Odd-level Refinement picks stay within owned sets; even-level Expansion picks may add sets or Core Track steps.",
  "powerDice": "Power Die size is set by Campaign Rank. Individual entries specify the number of Power Dice.",
  "limitations": "Each Limitation grants 1 additional starting Power Pick, up to the Campaign Rank limit, and must directly constrain a Power or Power Set.",
  "coreTracks": "Core Track steps are purchased in order. Core 1 establishes the set and Tier 1 access; Core 2 expands scale and Tier 2 access; Core 3 provides World Class expression and Tier 3 access; Core 4 is the Apex capstone.",
  "powerTypes": [
    {
      "name": "At-Will",
      "text": "Available every Turn without limit."
    },
    {
      "name": "Encounter",
      "text": "Usable once per encounter and refreshes when the encounter ends."
    },
    {
      "name": "Daily",
      "text": "Usable once per day safely and refreshes during Downtime. Pushing beyond safe use costs 2 Edge and 1 Burnout."
    },
    {
      "name": "Utility",
      "text": "Noncombat movement, sensory, survival, communication, investigation, or support capability. Available freely unless its entry says otherwise."
    },
    {
      "name": "Passive",
      "text": "Always active, requiring no action or declaration."
    },
    {
      "name": "Sustained",
      "text": "Maintained with a Bonus Action at the start of each Turn. Only one Sustained Power may be active at a time, and it ends if the hero is Stunned, Incapacitated, or Unconscious."
    }
  ],
  "attackAndEffect": "Power attack rolls use the delivery ability plus Prowess: FIG for melee, DEX for ranged, INT for mental, and CHA for social. Power Effect Value is 10 + the Power Set's Governing Ability modifier + Prowess.",
  "tierAccess": "Street Level begins with Tier 1 and may buy Tier 2 from Level 5 through play. Mid-Level begins with Tier 2 and may buy Tier 3 from Level 5 through play. World Class begins with Tier 3 access. Power Die size always remains tied to Campaign Rank.",
  "enhancementRules": "One Power Pick buys two Enhancements. Common improvements include Range, Targeting, Protection, Duration, Precision, Concealment, Action Economy, and narrow Reliability. Enhancements cannot exceed Campaign Rank, remove a Limitation, or turn a Utility into a Branch Power.",
  "genericEnhancements": [
    {
      "name": "Range",
      "text": "Extend a power's effective range by one range band."
    },
    {
      "name": "Targeting",
      "text": "Allow a power to affect one additional adjacent target."
    },
    {
      "name": "Protection",
      "text": "Extend a defensive power to cover an ally within Close range."
    },
    {
      "name": "Duration",
      "text": "Extend a Utility from one minute to one scene, or from one scene to one encounter."
    },
    {
      "name": "Precision",
      "text": "Use a normally destructive power nonlethally without changing its mechanical effect."
    },
    {
      "name": "Concealment",
      "text": "Mask or mute a normally obvious power signature from casual observation."
    },
    {
      "name": "Action Economy",
      "text": "Activate a Utility as a Bonus Action instead of an Action."
    },
    {
      "name": "Reliability",
      "text": "Gain Advantage on a power attack in one narrow circumstance defined when selected."
    }
  ],
  "genericLimitations": [
    {
      "name": "Gear Dependent",
      "text": "Powers require removable gear or a focus and are lost when it is taken."
    },
    {
      "name": "Transformation Required",
      "text": "Powers function only in a defined altered form."
    },
    {
      "name": "Environmental Weakness",
      "text": "Powers weaken or fail in a specific common environment."
    },
    {
      "name": "Vulnerability",
      "text": "A defined force bypasses defenses, deals extra harm, or grants attackers Advantage."
    },
    {
      "name": "Uncontrolled",
      "text": "Powers may cause instability or collateral effects under stress."
    },
    {
      "name": "Exhausting",
      "text": "Defined uses beyond the baseline risk Burnout."
    },
    {
      "name": "Obvious Manifestation",
      "text": "Active powers cannot be concealed and identify the hero immediately."
    },
    {
      "name": "Emotional Trigger",
      "text": "Powers require a precisely defined emotional state or weaken without it."
    },
    {
      "name": "Recharge Requirement",
      "text": "Powers require a specific input such as sunlight, electricity, rest, fuel, or a material."
    }
  ],
  "powerStunts": "Spend 1 Edge to improvise a weaker, shorter, riskier, or more conditional use within an owned Power Set's theme. A Stunt never becomes a permanent free power; repeated desired capability should be purchased during advancement.",
  "emulation": "Spend 2 Edge and a Full Turn, once per day, to use one unpurchased Branch Power from an owned set at or below current Tier access. Resolve it at full printed effect, then make 1d20 + Governing Ability modifier + Prowess at Disadvantage vs. DC 20. Success gains 2 Burnout; failure sets Burnout to 5. Emulation is blocked at Burnout 5.",
  "powersAndGear": "Gear that creates superhuman capability is built as a Power Set. Ordinary access and equipment remain Gear or Merits. Gear-sourced Power Sets normally use both the Gear Dependent Limitation and the matching Flaw.",
  "newPowerSetDesign": "Define one clear concept and Governing Ability, build a four-step Core Track, then create 2-4 At-Wills, 2-4 Encounter Powers, 1-2 Daily or Apex Powers, 2-4 Utilities, 4-6 Enhancement pairs, and 2-4 optional Limitations. Use the campaign Power Die and require GM approval and playtesting.",
  "examplePowerSet": {
    "name": "Absorption",
    "governingAbility": "CON",
    "text": "A design example for absorbing physical impacts, energy, matter, or exotic effects and converting them into protection, healing, stored force, or redirected attacks. Its example Core Track expands absorbed damage types and stored energy; sample powers include Absorb & Redirect, Fortified Shell, Energy Conversion, Kinetic Burst, and Total Absorption; Utilities include Matter Conversion, Power Leech, and Adaptive Resilience. This entry demonstrates the custom Power Set process and is not part of the indexed 37-set catalog."
  }
};

export const powerSetRules = [
  {
    "id": "animal-powers",
    "name": "Animal Powers",
    "governingAbility": "Choose STR , DEX , or CON at character creation",
    "abilityOptions": [
      "str",
      "dex",
      "con"
    ],
    "associatedConditions": "Prone, Restrained, Poisoned, Shaken",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "None",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "Animal Powers is the Power Set of the evolutionary library - the biological capabilities of the entire animal kingdom distilled into a single hero: striking speed, immense strength, echolocation, venom, armored hide, and predatory awareness all available to one body that has learned to access four billion years of biological development. Heroes may draw from genetic mutation, experimental enhancement, alien biology, mystical animal totems, or a connection to the primal force of animal life itself. Animal Powers heroes are defined by biological versatility. They move between capabilities as the situation demands, and at higher tiers they can combine multiple animal capabilities simultaneously - becoming something that no single animal in nature has ever been. STR - predatory power, mass, physical force. DEX - speed, reflexes, sensory acuity. CON - endurance, venom, adaptation, survival.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Animal Powers 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Choose two animal traits from the Tier 1 trait list (below). Each trait is always active unless suppressed. Natural weapons deal default damage track damage. Access to Tier 1 Combat Powers."
      },
      {
        "id": "core-2",
        "name": "Animal Powers 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Animal Powers 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Choose two additional traits from Tier 1 or 2 lists. You may activate and suppress individual traits as a free action each round. Access to Tier 2 Combat Powers."
      },
      {
        "id": "core-3",
        "name": "Animal Powers 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Animal Powers 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Choose two additional traits from any tier. Up to three traits active simultaneously. Combining complementary traits produces additional benefits (GM-defined): echolocation + pounce grants Advantage on the attack; venom + constriction deals additional venom damage per Turn. Access to Tier 3 Combat Powers."
      },
      {
        "id": "core-4",
        "name": "Animal Powers 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Animal Powers 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Choose two final traits from any tier. Once per day, enter Apex Predator for 1 minute. While active, all traits are simultaneously active at maximum expression, natural weapon attacks deal maximum damage on the dice, and you gain one Tier 3 trait of your choice for the duration even if not purchased. Animal Trait Lists Tier 1 Traits (available at Core Track 1)\n- Claws: Natural weapons deal slashing damage. Climb any clawable surface at full speed.\n- Echolocation: Blindsight within Close range (25 ft) through sound-based perception.\n- Enhanced Smell: Advantage on Notice checks by scent; track any creature by scent within 24 hours.\n- Gecko Grip: Climb any surface including ceilings at full speed; no Athletics check.\n- Low Light Vision: See in dim light as bright; in darkness as dim within Close range (25 ft).\n- Pack Instinct: Advantage on attack rolls against targets an ally attacked this Turn.\n- Prehensile Tail: A tail functioning as a third hand for grabbing and basic manipulation.\n- Thick Hide: Flat damage reduction equal to your Prowess against physical damage.\n- Water Breathing: Breathe underwater. Swim at full speed without penalty. Tier 2 Traits (available at Core Track 2)\n- Camouflage Skin: Bonus Action to blend in. Advantage on Stealth; targets have Disadvantage on Notice while you are motionless.\n- Constrictor Grip: While grappling a target, they take 1 Power Die + Governing Ability modifier damage at the start of each of their Turns.\n- Enhanced Reflexes: Advantage on Initiative; cannot be surprised while conscious.\n- Natural Armor: Resistance to one physical damage type (choose when taken).\n- Sonar Sense: Blindsight within Short range (25-50 ft). Replaces or upgrades Echolocation.\n- Venomous Strike: On a natural weapon hit, apply venom as a free action. Roll Power Effect Value vs. CON Save or target gains Poisoned until end of their next Turn.\n- Wall Crawl: Climb any surface at full speed including ceilings. No Athletics checks to climb. Tier 3 Traits (available at Core Track 3)\n- Apex Predator Senses: Full awareness of all creatures within Medium range (50-120 ft) regardless of darkness, invisibility, or concealment. Cannot be surprised.\n- Armored Carapace: Resistance to all physical damage types simultaneously.\n- Bioluminescence: Controlled light from Close dim to Short bright, or a disorienting attack (targets within Close range: WIS vs. Power Effect Value or Dazed until end of your next Turn).\n- Regenerative Biology: Regain HP equal to your Governing Ability modifier at the start of each Turn. Non-stacking - use only the highest passive per-Turn healing value.\n- Tremorsense: Detect precise location and movement of all creatures in contact with the same surface within Short range (25-50 ft) regardless of visibility."
      }
    ],
    "powers": [
      {
        "id": "predatory-strike",
        "name": "Predatory Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Animal Powers 1",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 1 A natural weapon attack combining the speed and precision of an apex predator.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track (slashing, piercing, or bludgeoning)\n- Strong Success: Choose one based on active traits - knock Prone (strength traits); apply venom if you have Venomous Strike; Shaken until end of your next Turn (display traits); move up to Close range without provoking Reactions (agility traits)\n- Duration: Conditions until end of your next Turn"
      },
      {
        "id": "pounce",
        "name": "Pounce",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Animal Powers 1 \u00b7 Must move at least Close range (25 ft) toward target first",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 1 \u00b7 Must move at least Close range (25 ft) toward target first You launch yourself at a target with predatory speed, closing distance and striking in one fluid motion.\n- Range: Close (0-25 ft) after movement\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track + 1 additional Power Die from momentum. Roll Power Effect Value vs. STR Save - Failure: knocked Prone; Success: Shaken until end of your next Turn\n- Duration: Prone until target stands"
      },
      {
        "id": "constrict",
        "name": "Constrict",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Animal Powers 2 \u00b7 Constrictor Grip trait",
        "creationCost": 2,
        "text": "Prerequisite: Animal Powers 2 \u00b7 Constrictor Grip trait You seize a target and begin crushing them with your full body weight.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Target Grappled + 2 Power Dice crushing damage. While Grappled, takes 1 Power Die + Governing Ability modifier per Turn. Escape: STR vs. Power Effect Value as Action.\n- Duration: Until target escapes or you release"
      },
      {
        "id": "venom-burst",
        "name": "Venom Burst",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Animal Powers 2 \u00b7 Venomous Strike trait",
        "creationCost": 2,
        "text": "Prerequisite: Animal Powers 2 \u00b7 Venomous Strike trait You deliver an overwhelming dose of venom through bite, sting, or spray.\n- Range: Close (0-25 ft) contact \u00b7 Short (25-50 ft) spray\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge (spray) or Parry/Block (contact)\n- Hit: 2 Power Dice poison damage. Power Effect Value vs. CON - Failure: Poisoned + Slowed until end of your next Turn; Success: Poisoned only\n- Duration: Until end of your next Turn"
      },
      {
        "id": "apex-strike",
        "name": "Apex Strike",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Animal Powers 3",
        "creationCost": 3,
        "text": "Prerequisite: Animal Powers 3 You combine multiple animal capabilities into a single overwhelming attack.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: 4 Power Dice damage. Choose up to two effects based on active traits applied simultaneously: Prone (strength), Poisoned (venom), Restrained (constriction), Blinded (bioluminescence), Slowed (crippling strike), or Shaken (intimidation display)\n- Duration: Conditions until end of your next Turn"
      },
      {
        "id": "pack-assault",
        "name": "Pack Assault",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Animal Powers 3",
        "creationCost": 3,
        "text": "Prerequisite: Animal Powers 3 You coordinate with allies using instinctive predator pack tactics, directing a simultaneous strike that overwhelms a target's defenses.\n- Range: Short (25-50 ft) \u00b7 Affects you and up to your Governing Ability modifier in allies who can perceive you\n- Effect: You and each participating ally may immediately make one attack against the same target as a free action. Your attack deals 4 Power Dice + Governing Ability modifier on a hit; each ally uses normal attack and damage. The target has Disadvantage on all Active Defense rolls against these simultaneous attacks."
      }
    ],
    "utilities": [
      {
        "id": "animal-communication",
        "name": "Animal Communication",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Animal Powers 1",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 1 Communicate simple ideas and emotions with animals of any type. Animals are naturally inclined toward you. Advantage on checks to calm, direct, or request assistance from animals. Replaces Animal Empathy General Utility if you have both."
      },
      {
        "id": "biological-adaptation",
        "name": "Biological Adaptation",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Animal Powers 2",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 2 Over one minute, adapt your biology to one hostile environment (deep cold, extreme heat, high altitude, underwater pressure, or radiation). Immune to that environment's passive hazards for one scene. Only one active adaptation at a time."
      },
      {
        "id": "predatory-tracking",
        "name": "Predatory Tracking",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Animal Powers 2",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 2 Track any creature you have directly perceived within the last 48 hours across any terrain using enhanced animal senses. Advantage on all checks to follow the trail. Weather, time, and deliberate evasion degrade but cannot automatically end the trail."
      },
      {
        "id": "apex-senses",
        "name": "Apex Senses",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Animal Powers 3",
        "creationCost": 1,
        "text": "Prerequisite: Animal Powers 3 Detect living creatures by heartbeat and scent within Medium range (50-120 ft) through barriers. Identify individuals you have previously encountered by scent alone. Perceive structural weaknesses in buildings and objects by vibration sense. Always active; cannot be fully suppressed."
      }
    ],
    "enhancements": [
      {
        "name": "Rapid Trait Shift",
        "text": "Rapid Trait Shift: Activate and suppress traits as a free action at Core Track 1, rather than waiting until Core Track 2."
      },
      {
        "name": "Enhanced Venom",
        "text": "Enhanced Venom: When Venomous Strike or Venom Burst applies Poisoned, the target also has Disadvantage on their first attack roll before end of their next Turn."
      },
      {
        "name": "Constriction Mastery",
        "text": "Constriction Mastery: While a target is Grappled through Constrict, you move at full speed rather than half speed."
      },
      {
        "name": "Pack Leader",
        "text": "Pack Leader: When you use Pack Assault, designate one ally whose attack automatically achieves Strong Success effects without requiring the margin."
      }
    ],
    "limitations": [
      {
        "name": "Instinct Override",
        "text": "Instinct Override: When Bloodied, GM may invoke this - roll 1d20 + WIS vs. 15 or revert to predatory instinct, prioritizing nearest perceived threat over tactical planning. +1 Power Pick."
      },
      {
        "name": "Obvious Biology",
        "text": "Obvious Biology: Animal traits are never concealable. You cannot pass for an ordinary human without significant concealment. Social checks where appearance creates prejudice or fear suffer Disadvantage. +1 Power Pick."
      },
      {
        "name": "Environmental Dependency",
        "text": "Environmental Dependency: Traits are optimized for one environment (aquatic, forest, underground, arctic, etc.). Outside it, damage track drops by 1 Power Die and physical trait checks have Disadvantage. +1 Power Pick. Armor Systems Power Set"
      }
    ]
  },
  {
    "id": "armor-systems",
    "name": "Armor Systems",
    "governingAbility": "Choose INT or STR at character creation",
    "abilityOptions": [
      "str",
      "int"
    ],
    "associatedConditions": "Overloaded, Dazed, Prone, Blinded",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "",
    "limitationNote": "Gear Dependent Limitation is very common for this Power Set",
    "description": "Armor Systems is the Power Set of the powered suit. Not a costume - a weapons and defense platform built around the hero's body, representing years of engineering refinement, iterative improvement, and the genius of someone who decided the best way to be a hero was to build the capability rather than wait for it. Armor Systems heroes are defined by versatility within a framework: flight, energy weapons, enhanced strength, sensor systems, and defensive plating all integrated into a single platform that can be upgraded and rebuilt between missions. The cost is dependency - without the suit, there are no powers. INT - engineer-pilot, built and understands every system. STR - warrior-pilot, suit amplifies and focuses existing physical capability.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Armor Systems 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +2 to all Active Defense rolls while armored. Resistance to one chosen damage type. Don armor in one minute (unless modified). Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Armor Systems 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Armor Systems 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Active Defense bonus becomes +3. Environmental sealing: no need to breathe, vacuum survival, immunity to airborne toxins and extreme temperature. Echolocation and Thermal Vision within Short range (25-50 ft). Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Armor Systems 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Armor Systems 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Active Defense bonus becomes +4. Once per encounter as a Reaction when you take damage, reduce that damage by 3 Power Dice + Governing Ability modifier. Bonus Action interface with compatible technological systems within Close range (25 ft). Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Armor Systems 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Armor Systems 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Full Combat Mode for 1 minute: Active Defense bonus +6; all attacks deal maximum damage; Emergency systems activate one spent Encounter Power as a free action once during duration; if reduced to 0 HP the suit automatically stabilizes you, moves you up to Short range from threat, and grants temporary HP equal to Governing Ability modifier + Prowess."
      }
    ],
    "powers": [
      {
        "id": "blasters",
        "name": "Blasters",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Armor Systems 1 \u00b7 Choose emission type from damage types list at character creation",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 1 \u00b7 Choose emission type from damage types list at character creation (permanent) A directed discharge from your suit's primary weapon system.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (chosen emission type)\n- Strong Success: Choose one: push target Short range (25-50 ft); knock Prone; Disadvantage on their next attack roll before end of their next Turn\n- Special: Enhancement - Adaptive Emission: Add up to 2 additional damage types. Declare emission type freely before each attack."
      },
      {
        "id": "missile-salvo",
        "name": "Missile Salvo",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Armor Systems 1",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 1 Your suit fires guided munitions at up to three targets simultaneously.\n- Range: Short area - up to three targets within Short range (25-50 ft) of each other\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each target (same roll)\n- Hit: 1 Power Die + Governing Ability modifier damage per target. Power Effect Value vs. DEX Save or knocked Prone.\n- Duration: Prone until target stands"
      },
      {
        "id": "system-disruption",
        "name": "System Disruption",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Armor Systems 2",
        "creationCost": 2,
        "text": "Prerequisite: Armor Systems 2 A targeted pulse designed to overload another technological system.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice energy damage. Power Effect Value vs. INT - Failure: Overloaded + Power Disrupted until end of your next Turn (powered armor loses bonuses, tech powers unavailable); Success: Overloaded only. Against non-technological targets: damage only, no Overloaded/Power Disrupted.\n- Duration: Until end of your next Turn on failure"
      },
      {
        "id": "omnibeam",
        "name": "Omnibeam",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Armor Systems 2",
        "creationCost": 2,
        "text": "Prerequisite: Armor Systems 2 Your suit's heavy weapon fires a concentrated sustained blast in a line.\n- Range: Medium (50-120 ft) line through all creatures between you and target\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature in the line\n- Hit: 3 Power Dice energy damage. Power Effect Value vs. CON - Failure: Dazed; Success: Shaken (both until end of your next Turn)\n- Special: Enhancement - Adaptive Emission: Same as Blasters."
      },
      {
        "id": "tactical-barrage",
        "name": "Tactical Barrage",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Armor Systems 3",
        "creationCost": 3,
        "text": "Prerequisite: Armor Systems 3 Your suit unleashes everything simultaneously in a coordinated full-system assault.\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature in area\n- Hit: 6 Power Dice energy damage, maximum on all dice. Power Effect Value vs. CON - Failure: Stunned + knocked Prone; Success: Dazed only (both until end of your next Turn)"
      },
      {
        "id": "emergency-countermeasures",
        "name": "Emergency Countermeasures",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Armor Systems 3",
        "creationCost": 3,
        "text": "Prerequisite: Armor Systems 3 \u00b7 Trigger: You take damage while armored Your suit's emergency systems engage automatically. Reduce incoming damage by 3 Power Dice +\nGoverning Ability modifier. If reduction brings damage to 0, the suit vents excess energy as a shockwave: each creature within Close range (25 ft) rolls DEX vs. your Power Effect Value or is pushed Close range and knocked Prone. This is distinct from the Core Track 3 Reaction - they do not share uses."
      }
    ],
    "utilities": [
      {
        "id": "suit-deployment",
        "name": "Suit Deployment",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Armor Systems 1",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 1 Don or deploy your armor as a Bonus Action. Define the deployment method at character creation (assembles from storage, launches remotely, deploys from compact form, etc.)."
      },
      {
        "id": "armor-flight",
        "name": "Armor Flight",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Armor Systems 2",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 2 Integrated flight. Flying speed equal to Short range per Turn (25-50 ft) in combat; sustained cruise for regional travel outside combat. If you also have the Flight Power Set, use the higher speed - these do not stack."
      },
      {
        "id": "remote-operation",
        "name": "Remote Operation",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Armor Systems 2",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 2 Operate your suit remotely when not wearing it. The suit acts on your initiative, can move and use basic systems, provides a sensor feed. Uses your attack bonus; cannot use Daily powers remotely. The suit has HP equal to half your maximum and is destroyed if reduced to 0."
      },
      {
        "id": "modular-configuration",
        "name": "Modular Configuration",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Armor Systems 3",
        "creationCost": 1,
        "text": "Prerequisite: Armor Systems 3 During a Breather, reconfigure for one mode until next Breather: Assault Mode - all Armor Systems attacks deal 1 additional Power Die. Defense Mode - Active Defense bonus +1; Emergency Countermeasures reduces damage by 1 additional Power Die. Support Mode - produce one gadget effect per scene equivalent to a Tier 1 Gadgetry power (no Gadgetry Power Set required)."
      }
    ],
    "enhancements": [
      {
        "name": "Reinforced Systems",
        "text": "Reinforced Systems: Resistance from Core Track 1 extends to a second damage type. Both active simultaneously while armored."
      },
      {
        "name": "Targeting Systems",
        "text": "Targeting Systems: Once per encounter, declare Lock-On against one target as a free action. Until end of your next Turn, all Armor Systems attacks against them ignore half and three-quarters cover bonuses."
      },
      {
        "name": "Power Cells",
        "text": "Power Cells: Emergency Countermeasures may be used twice per encounter before requiring a Breather to recharge."
      },
      {
        "name": "Integrated Support",
        "text": "Integrated Support: When Modular Configuration enters Support Mode, the gadget effect upgrades to Tier 2 Gadgetry equivalent rather than Tier 1."
      }
    ],
    "limitations": [
      {
        "name": "Gear Dependent",
        "text": "Gear Dependent: All powers require the suit. Without it: no Core Track benefits, no powers, no Active Defense bonus, no environmental protection. Recovery requires Downtime and resources. The defining Limitation of this archetype. +1 Power Pick."
      },
      {
        "name": "Power Dependency",
        "text": "Power Dependency: Suit requires a specific fuel source or recharge method. If unavailable, Core Track benefits drop one tier and Active Defense bonus halves until recharged. +1 Power Pick."
      },
      {
        "name": "Extended Deployment",
        "text": "Extended Deployment: Suit takes 1 minute to don without Suit Deployment Utility. Being caught without the suit is a genuine tactical liability. +1 Power Pick. Cold Control Power Set"
      }
    ]
  },
  {
    "id": "cold-control",
    "name": "Cold Control",
    "governingAbility": "Choose CON , WIS , or INT at character creation",
    "abilityOptions": [
      "con",
      "int",
      "wis"
    ],
    "associatedConditions": "Frozen, Slowed, Restrained (via ice), Prone (via ice patches)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Battlefield control and terrain denial; ice as wall, floor, barrier, trap, and prison",
    "limitationNote": "",
    "description": "Cold Control is the Power Set of ice, frost, and absolute zero. The ability to drain thermal energy from the environment, from objects, and from living targets with precision that ranges from delicate crystalline frost to instant encasement in solid ice. Cold controllers are tacticians as much as fighters - ice is a wall, a floor, a barrier, a trap, and a prison simultaneously. CON - biological cold generation, physical endurance. WIS - mystical attunement to cold and winter. INT - calculated thermal energy manipulation and scientific precision.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Cold Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Generate and project cold; create frost; chill objects and surfaces. Resistance to cold damage. Immune to extreme cold environments. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Cold Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Cold Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Combat-scale ice formation and sustained freezing fields. Immunity to cold damage (replaces Resistance). Cold attacks ignore cold Resistance equal to your Prowess. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Cold Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Cold Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Immunity to cold and extreme environmental cold of any natural origin. Cold attacks ignore cold Resistance entirely and treat cold Immunity as Resistance. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Cold Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Cold Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Absolute Zero State for 1 minute: all cold attacks deal maximum damage; targets whose Save Value your power roll beats become Frozen rather than Slowed; immunity to all fire and heat damage."
      }
    ],
    "powers": [
      {
        "id": "ice-shard",
        "name": "Ice Shard",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Cold Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (cold and piercing)\n- Strong Success: Slowed until end of your next Turn"
      },
      {
        "id": "ice-patch",
        "name": "Ice Patch",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Cold Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 1 Coat the ground in slick ice beneath targets.\n- Range: Close area (15-ft radius, 0-25 ft)\n- Effect: Area becomes difficult terrain until melted. Each creature in the area rolls DEX vs. Power Effect Value or is knocked Prone. Difficult terrain persists until cleared."
      },
      {
        "id": "cold-aura",
        "name": "Cold Aura",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Cold Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 1 Radiate intense cold. Until start of your next Turn, any creature that hits you with a melee attack takes cold damage equal to your Prowess and loses 10 feet of Speed until end of their next Turn."
      },
      {
        "id": "flash-freeze",
        "name": "Flash Freeze",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Cold Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Cold Control 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice cold damage. Power Effect Value vs. CON - Failure: Frozen; Success: Slowed (both until end of your next Turn)"
      },
      {
        "id": "cold-snap",
        "name": "Cold Snap",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Cold Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Cold Control 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice cold damage. Power Effect Value vs. CON - Failure: Speed halved + Slowed; Success: Speed halved only (until end of your next Turn)"
      },
      {
        "id": "freeze-the-room",
        "name": "Freeze the Room",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Cold Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Cold Control 3\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each enemy\n- Hit: 3 Power Dice cold damage. Power Effect Value vs. CON - Failure: Slowed; Success: Speed reduced 10 ft (until end of your next Turn). Entire area becomes difficult terrain from ice and frost until end of your next Turn."
      },
      {
        "id": "absolute-zero",
        "name": "Absolute Zero",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Cold Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Cold Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 6 Power Dice cold damage, maximum on all dice. Power Effect Value vs. CON - Failure: Frozen until end of your next Turn + Slowed for the remainder of the encounter; Success: Frozen until end of your next Turn only"
      }
    ],
    "utilities": [
      {
        "id": "chill-object",
        "name": "Chill Object",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cold Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 1 Freeze, chill, or frost any unattended object as an Action. Extinguish small fires, preserve biological samples, freeze locks solid, make surfaces dangerously slippery, weld objects with ice. Effect is permanent until heat is applied."
      },
      {
        "id": "preserve",
        "name": "Preserve",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cold Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 1 Maintain a perfect preservation field around biological material. Material does not decay, decompose, or deteriorate. A dying creature in preservation stasis does not make saves but also does not improve - field paramedic and crime scene tool."
      },
      {
        "id": "ice-slide",
        "name": "Ice Slide",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cold Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 2 Create an ice ramp, bridge, or slide between two points within Medium range (50-120 ft). Supports your weight plus up to Governing Ability modifier additional passengers. Moving along your ice structure costs no additional movement and grants +10 ft speed. Persists for one scene or until melted."
      },
      {
        "id": "ice-wall",
        "name": "Ice Wall",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cold Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 2 As an Action, create an ice wall up to 30 ft long, 10 ft high, 1 ft thick within Short range (25-50 ft). HP equal to 5 x your Level; Resistance to all damage except fire. Creatures can break through with STR vs. your Power Effect Value. Persists until destroyed or melted."
      },
      {
        "id": "cryo-shell",
        "name": "Cryo-Shell",
        "tier": 3,
        "type": "Utility",
        "action": "Reaction",
        "prerequisite": "Cold Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Cold Control 3 \u00b7 Trigger: You or one ally within Close range (25 ft) would take damage Encase the target in a protective ice shell. They reduce incoming damage by 3 Power Dice but become Restrained until start of their next Turn. Break free early: STR vs. Power Effect Value as Action."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Freeze",
        "text": "Extended Freeze: Flash Freeze's Frozen duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Layered Ice",
        "text": "Layered Ice: When Ice Patch knocks a target Prone, they are also Slowed until end of your next Turn."
      },
      {
        "name": "Cold Mastery",
        "text": "Cold Mastery: Cold Aura damage increases to Prowess + Governing Ability modifier."
      },
      {
        "name": "Blizzard Field",
        "text": "Blizzard Field: Freeze the Room's difficult terrain lasts until end of your Turn after next (two rounds of persistence)."
      }
    ],
    "limitations": [
      {
        "name": "Heat Vulnerability",
        "text": "Heat Vulnerability: Fire, heat, and radiant damage bypass flat damage reduction if you have it. Disadvantage on saves against fire and heat. Powers suppressed for one Turn after taking fire damage exceeding your CON. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Frost forms nearby when you concentrate; breath always visible; attacks create unmistakable ice formations. Stealth while using Cold Control is impossible. +1 Power Pick."
      },
      {
        "name": "Environmental Dependency",
        "text": "Environmental Dependency: In extremely hot environments, Power Effect Value \u22123 and cold attacks deal 1 fewer Power Die. +1 Power Pick. Cosmic Power Power Set"
      }
    ]
  },
  {
    "id": "cosmic-power",
    "name": "Cosmic Power",
    "governingAbility": "Choose CHA or WIS at character creation",
    "abilityOptions": [
      "wis",
      "cha"
    ],
    "associatedConditions": "Dazed, Stunned, Blinded (cosmic radiance), Prone (force)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Versatile offense + defense; Power Negation; cosmic-scale mobility",
    "limitationNote": "",
    "description": "Cosmic Power is the Power Set of heroes touched by forces operating beyond human comprehension - contact with something that exists outside the normal boundaries of what a person can be. They project raw cosmic energy expressible as any force, move through space naturally, and at the highest tiers interact with reality itself: negating powers, anchoring dimensions. CHA - cosmic force expressing through sheer force of being. WIS - spiritual and perceptual attunement; channels understanding outward.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Cosmic Power 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Resistance to radiant and force damage. Does not need to breathe; survives vacuum indefinitely. Emits faint suppressable luminescence. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Cosmic Power 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Cosmic Power 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to radiant and force damage (replaces Resistance). Perceive cosmic energy signatures within Medium range (50-120 ft). Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Cosmic Power 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Cosmic Power 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Cosmic attacks ignore Resistance to radiant/force; treat Immunity as Resistance. Once per encounter when dealing damage with a Cosmic Power attack, add 1 Power Die as a free action. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Cosmic Power 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Cosmic Power 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Full Cosmic Manifestation for 1 minute: immunity to all damage from non-superpowered sources; movement does not provoke Reactions; all attacks deal maximum damage on the dice; once per round negate one Power, effect, or condition affecting yourself or one ally within Short range (25-50 ft) as a free action."
      }
    ],
    "powers": [
      {
        "id": "cosmic-bolt",
        "name": "Cosmic Bolt",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Cosmic Power 1",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (Radiant). Strong Success: push Short range (25-50 ft), knock Prone, or Blind until end of your next Turn."
      },
      {
        "id": "cosmic-shield",
        "name": "Cosmic Shield",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Cosmic Power 1",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 1 \u00b7 Trigger: You or one ally within Short range (25-50 ft) would take damage Project a cosmic energy field. Reduce damage by 2 Power Dice + Governing Ability modifier. If this brings damage to 0, the attacker is pushed Close range (25 ft) from the protected target."
      },
      {
        "id": "energy-absorption",
        "name": "Energy Absorption",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Cosmic Power 2",
        "creationCost": 2,
        "text": "Prerequisite: Cosmic Power 2 \u00b7 Trigger: You take energy damage of any type Absorb incoming energy. Reduce damage by 3 Power Dice + Governing Ability modifier. If reduction brings damage to 0, your next attack, before end of your next Turn. adds 2 Power Dice to its damage as you release the absorbed energy.."
      },
      {
        "id": "stellar-flare",
        "name": "Stellar Flare",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Cosmic Power 2",
        "creationCost": 2,
        "text": "Prerequisite: Cosmic Power 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice radiant damage. Power Effect Value vs. CON - Failure: Blinded; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "power-negation",
        "name": "Power Negation",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Cosmic Power 3",
        "creationCost": 3,
        "text": "Prerequisite: Cosmic Power 3 Temporarily sever a target's connection to their power source.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. target's Governing Ability - Failure: one chosen Power Set Power Disrupted until end of your next Turn (passive benefits suppressed, powers unavailable, Sustained Powers end); Success: Overloaded only"
      },
      {
        "id": "stellar-collapse",
        "name": "Stellar Collapse",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Cosmic Power 3",
        "creationCost": 3,
        "text": "Prerequisite: Cosmic Power 3\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice radiant and force damage, maximum on all dice. Power Effect Value vs. CON - Failure: Stunned until end of your next Turn + pushed Short range (25-50 ft) from center; Success: Dazed until end of your next Turn + pushed Close range (25 ft) only"
      }
    ],
    "utilities": [
      {
        "id": "cosmic-flight",
        "name": "Cosmic Flight",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cosmic Power 1",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 1 Flying speed equal to Short range per Turn (25-50 ft) in combat. Outside combat, can reach orbital velocity and travel between planets in the same solar system. If you also have Flight, use the higher speed - these do not stack."
      },
      {
        "id": "void-step",
        "name": "Void Step",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cosmic Power 2",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 2 As an Action, step through dimensional space and emerge anywhere within Medium range (50-120 ft) you can perceive or have visited. May bring one willing creature. Does not provoke Reactions. Passenger: WIS vs. Power Effect Value or Shaken until end of their next Turn."
      },
      {
        "id": "cosmic-sense",
        "name": "Cosmic Sense",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cosmic Power 2",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 2 Sense general location and power level of any being with significant superhuman capabilities within Long range (120-300 ft). Automatically detect dimensional anomalies, active Power Negation fields, and cosmic-scale threats within the same range. Know the direction of the nearest dimensional rift within one mile."
      },
      {
        "id": "reality-anchor",
        "name": "Reality Anchor",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cosmic Power 3",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 3 As an Action, stabilize the local dimensional fabric within Short range (25-50 ft) for one scene. Teleportation fails unless superpowered and the user's WIS Save Value meets or beats your Power Effect Value roll. Dimensional movement suppressed. Reality-warping effects in the area have Disadvantage on attacks or DCs increase by your Prowess. Does not affect your own powers."
      },
      {
        "id": "universal-translation",
        "name": "Universal Translation",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Cosmic Power 3",
        "creationCost": 1,
        "text": "Prerequisite: Cosmic Power 3 Understand and speak any language - alien languages, dimensional languages, mathematical constructs, basic emotional broadcasts of non-verbal beings. Passive and always active; no concentration required."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Negation",
        "text": "Extended Negation: Power Negation's Power Disrupted duration extends to end of the target's next Turn."
      },
      {
        "name": "Cosmic Radiance",
        "text": "Cosmic Radiance: Passive luminescence can be activated as a Bonus Action to fill Close range with bright light and Short range with dim light. Radiance-sensitive creatures have Disadvantage on attacks against you while active."
      },
      {
        "name": "Absorption Mastery",
        "text": "Absorption Mastery: When Energy Absorption reduces damage to 0, immediately move up to Close range (25 ft) without provoking Reactions."
      },
      {
        "name": "Stellar Shield",
        "text": "Stellar Shield: Cosmic Shield also applies to the next attack against the protected target before the start of your next Turn."
      }
    ],
    "limitations": [
      {
        "name": "Cosmic Responsibility",
        "text": "Cosmic Responsibility: Once per session GM may present a cosmic-level situation demanding your attention, potentially conflicting with the current mission. Ignoring it may have campaign consequences. +1 Power Pick."
      },
      {
        "name": "Power Dependency",
        "text": "Power Dependency: Cosmic power requires an ongoing connection to its source. If disrupted by a specific event, Core Track drops by 1 tier until restored. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: You glow, trail cosmic light, and are immediately identifiable when powers are active. Stealth while using Cosmic Power is impossible. +1 Power Pick. Earth Control Power Set"
      }
    ]
  },
  {
    "id": "earth-control",
    "name": "Earth Control",
    "governingAbility": "Choose STR , CON , or WIS at character creation",
    "abilityOptions": [
      "str",
      "con",
      "wis"
    ],
    "associatedConditions": "Prone (via tremor and upheaval), Restrained (via entombment), Grappled (via stone grip), Slowed (via rubble and broken terrain)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Heavy offense and battlefield disruption; armored bulwark; crushing single-target and area control",
    "limitationNote": "",
    "description": "Earth Control is the Power Set of stone, seismic force, and the mineral bones of the world. The ability to crack open the ground at will, hurl boulders with the force of a wrecking ball, harden flesh into living rock, and bring an entire battlefield down around an enemy's feet. Earth controllers hit like nothing else in the game - sluggers and bulwarks in equal measure, armored in stone when they need to take a hit, devastating when they need to give one. They do not need finesse. The ground itself does the work. STR - raw physical force channeled directly into stone and seismic output. CON - endurance-based connection, a body as durable and tireless as bedrock. WIS - deep, patient attunement to the earth itself.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Earth Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Shape, fracture, and command earth, stone, and unworked rock within range; harden your own skin to a stony texture at will. Resistance to bludgeoning damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Earth Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Earth Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Combat-scale stone shaping and durable hardened skin. Immunity to bludgeoning damage (replaces Resistance). Tremorsense - sense vibrations and movement through solid ground within Short range (25-50 ft) without a check. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Earth Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Earth Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Earth attacks ignore bludgeoning Resistance entirely and treat bludgeoning Immunity as Resistance. Once per encounter as a free action, cause the ground within Short range (25-50 ft) to become difficult terrain for everyone but yourself. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Earth Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Earth Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Living Bedrock for 1 minute: immunity to all physical damage from non-superpowered sources; cannot be knocked Prone or moved against your will; all earth attacks deal maximum damage on the dice."
      }
    ],
    "powers": [
      {
        "id": "rock-lance",
        "name": "Rock Lance",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Earth Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (piercing). Strong Success: knocked Prone."
      },
      {
        "id": "stone-fist",
        "name": "Stone Fist",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Earth Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track (bludgeoning). Strong Success: push Close range (25 ft) from you."
      },
      {
        "id": "stoneskin-surge",
        "name": "Stoneskin Surge",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Earth Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 1 Harden your entire body to dense, armored stone. Until start of your next Turn, gain +2 Active Defense and Resistance to slashing and piercing damage in addition to any Resistance you already have."
      },
      {
        "id": "tremor",
        "name": "Tremor",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Earth Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Earth Control 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: knocked Prone; Success: Slowed only (both until end of your next Turn)."
      },
      {
        "id": "stone-grip",
        "name": "Stone Grip",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Earth Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Earth Control 2 Target must be standing on a surface connected to solid ground.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: Grappled; Success: Slowed only (both until end of your next Turn)."
      },
      {
        "id": "seismic-rupture",
        "name": "Seismic Rupture",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Earth Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Earth Control 3\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: knocked Prone + pushed Close range (25 ft) from the center; Success: pushed Close range only. Area becomes difficult terrain from rubble and fissures until end of your next Turn."
      },
      {
        "id": "cataclysm",
        "name": "Cataclysm",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Earth Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Earth Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 6 Power Dice bludgeoning damage, maximum on all dice. Power Effect Value vs. STR - Failure: Restrained until end of your next Turn + Slowed for the remainder of the encounter; Success: Restrained until end of your next Turn only."
      },
      {
        "id": "bulwark-stance",
        "name": "Bulwark Stance",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Earth Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Earth Control 3 \u00b7 Trigger: You or one ally within Close range (25 ft) would take physical damage Raise a wall of stone from the ground to intercept the blow. Reduce incoming damage by 3 Power Dice + Governing Ability modifier. If this brings damage to 0, the stone remains as a barrier providing three-quarters cover (+5 Active Defense) until start of your next Turn."
      }
    ],
    "utilities": [
      {
        "id": "shape-stone",
        "name": "Shape Stone",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Earth Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 1 Shape any earth or stone you control into simple stationary forms: a ramp, a wall section, a set of stairs, or a platform. Holds until dismissed or destroyed. Cannot be shaped into a weapon or used to deal damage."
      },
      {
        "id": "mineral-sense",
        "name": "Mineral Sense",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Earth Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 1 Sense the composition, density, and structural integrity of any stone, soil, or mineral within Short range (25-50 ft), including hollow spaces, unstable structures, buried objects, and ore deposits. Purely informational; no check required."
      },
      {
        "id": "earthen-climb",
        "name": "Earthen Climb",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Earth Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 2 Reshape stone and earth surfaces into handholds and footholds as you move. Climbing Speed equal to full Speed on any stone, earth, or masonry surface, even sheer angles, with no check required."
      },
      {
        "id": "tunnel",
        "name": "Tunnel",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Earth Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 2 As an Action, carve a stable tunnel through earth or unworked stone at Short range (25-50 ft) per minute. Tunnel does not collapse on its own; wide enough for you and one ally walking abreast. Not fast enough for combat use."
      },
      {
        "id": "structural-reinforcement",
        "name": "Structural Reinforcement",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Earth Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Earth Control 3 As an Action, stabilize and reinforce a damaged or collapsing structure within Short range (25-50 ft), preventing further collapse for one scene. Reinforced structure has HP equal to 5 x your Level against further structural damage."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Grip",
        "text": "Extended Grip: Stone Grip's Grappled duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Crushing Tremor",
        "text": "Crushing Tremor: Targets knocked Prone by Tremor take 1 additional Power Die bludgeoning damage from falling debris."
      },
      {
        "name": "Piercing Lance",
        "text": "Piercing Lance: Rock Lance's Strong Success push may instead deal 1 additional Power Die of damage, chosen at the time of attack."
      },
      {
        "name": "Lasting Rupture",
        "text": "Lasting Rupture: Seismic Rupture's difficult terrain lasts until end of your Turn after next (two rounds of persistence)."
      }
    ],
    "limitations": [
      {
        "name": "Surface Dependent",
        "text": "Surface Dependent: Requires a connection to natural earth, stone, or unworked mineral within range to function at full strength. On a fully artificial surface with no exposed ground beneath it (upper floors, a ship's deck, open water), Core Track drops by 1 tier and Tier 3 Earth Control powers are unavailable until a connected surface is reached. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: The ground audibly shifts and cracks around you when you concentrate; hardened skin is visibly stone-textured while active; attacks leave unmistakable structural damage. Stealth while using Earth Control is impossible. +1 Power Pick."
      },
      {
        "name": "Slow and Heavy",
        "text": "Slow and Heavy: Base Speed reduced by 10 ft. Disadvantage on DEX Saves against effects that would knock you Prone or move you against your will, except while Stoneskin Surge or Living Bedrock is active. +1 Power Pick. Elasticity Power Set"
      }
    ]
  },
  {
    "id": "elasticity",
    "name": "Elasticity",
    "governingAbility": "CON (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "con"
    ],
    "associatedConditions": "Restrained (wrap/constriction), Prone (sweep/trip), Grappled (extended limb), Dazed (unexpected angle impact)",
    "defaultDamage": "Power Dice x Core Track level + CON modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Reach, multi-target melee, living restraint; attack from unexpected angles and distances",
    "limitationNote": "",
    "description": "Elasticity is the Power Set of a body that has become something other than solid - a body whose fundamental material properties have changed so that it stretches, compresses, flows, and reforms with complete voluntary control. Elasticity heroes are defined by geometric creativity and spatial unpredictability: they attack from angles melee heroes cannot reach, restrain opponents by becoming the restraint, and escape any physical containment.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Elasticity 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Extend any limb or body part up to Short range (25-50 ft); compress to fit through any opening at least 6 inches in diameter. Natural melee reach extends to Close range (25 ft). Resistance to bludgeoning damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Elasticity 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Elasticity 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Extend limbs up to Medium range (50-120 ft); compress to 1-inch openings. Bludgeoning Resistance becomes Immunity; Resistance to piercing damage. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Elasticity 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Elasticity 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Extend limbs up to Long range (120-300 ft); compress to molecular thinness. Piercing Resistance becomes Immunity; Resistance to slashing damage. Once per encounter when you take physical damage, reduce it by Prowess + CON as a free action. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Elasticity 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Elasticity 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Fluid Form for 1 minute: immunity to all physical damage from non-superpowered sources; extension range Extreme (300+ ft); extend multiple limbs simultaneously without action cost; any creature attempting to grapple, restrain, or strike you in melee automatically fails unless their attack roll achieves a Strong Success."
      }
    ],
    "powers": [
      {
        "id": "elastic-strike",
        "name": "Elastic Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Elasticity 1",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + CON + Prowess vs. Parry/Block\n- Hit: Default damage track (bludgeoning). Strong Success: Dazed until end of your next Turn from impact at unexpected angle."
      },
      {
        "id": "elastic-sweep",
        "name": "Elastic Sweep",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Elasticity 1",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 1\n- Range: Close area (15-ft arc within 0-25 ft, up to three targets)\n- Attack: 1d20 + CON + Prowess vs. Parry/Block of each target (same roll)\n- Hit: 1 Power Die + CON modifier bludgeoning per target. Power Effect Value vs. STR - Failure: knocked Prone; Success: pushed Close range in direction of sweep"
      },
      {
        "id": "constricting-wrap",
        "name": "Constricting Wrap",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Elasticity 2",
        "creationCost": 2,
        "text": "Prerequisite: Elasticity 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + CON + Prowess vs. Parry/Block\n- Hit: Power Effect Value vs. STR - Failure: Restrained until end of your next Turn; takes 1 Power Die + CON modifier per Turn; escape as Action (STR vs. Power Effect Value). Success: Grappled only."
      },
      {
        "id": "spring-launch",
        "name": "Spring Launch",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Elasticity 2",
        "creationCost": 2,
        "text": "Prerequisite: Elasticity 2 Compress to maximum density then release explosively. Move up to Short range (25-50 ft) in a straight line without provoking Reactions; attack at end.\n- Attack: 1d20 + CON + Prowess vs. Parry/Block\n- Hit: 3 Power Dice + CON modifier bludgeoning. Power Effect Value vs. STR - Failure: Prone + pushed Short range; Success: Prone only"
      },
      {
        "id": "elastic-cage",
        "name": "Elastic Cage",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Elasticity 3",
        "creationCost": 3,
        "text": "Prerequisite: Elasticity 3\n- Range: Close area (15-ft radius within 0-25 ft), up to CON modifier in targets\n- Attack: 1d20 + CON + Prowess vs. Parry/Block of each target\n- Hit: Power Effect Value vs. STR - Failure: Restrained until end of your next Turn; cannot move beyond Close range of you; 1 Power Die bludgeoning damage per Turn. You move at half speed while maintaining. Success: Slowed only."
      },
      {
        "id": "impact-slam",
        "name": "Impact Slam",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Elasticity 3",
        "creationCost": 3,
        "text": "Prerequisite: Elasticity 3\n- Range: Medium (50-120 ft) line, all creatures in the line\n- Attack: 1d20 + CON + Prowess vs. Parry/Block of each creature\n- Hit: 6 Power Dice bludgeoning damage, maximum on all dice. Power Effect Value vs. STR - Failure: Stunned until end of your next Turn + pushed Short range; Success: Dazed only"
      }
    ],
    "utilities": [
      {
        "id": "compression",
        "name": "Compression",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Elasticity 1",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 1 Compress to fit through any opening at least 6 inches in diameter, flatten to slide under doors, reshape to fit into containers that should not hold a person. Extensive infiltration, investigation, and escape applications. Can hold this state indefinitely."
      },
      {
        "id": "extended-reach",
        "name": "Extended Reach",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Elasticity 1",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 1 Extend any limb or body part to perform fine manipulation at Short range (25-50 ft): picking locks across a room, pressing buttons on the far side of a barrier, retrieving objects from inaccessible locations. Precise enough for delicate work."
      },
      {
        "id": "impact-absorption",
        "name": "Impact Absorption",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Elasticity 2",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 2 Take no falling damage regardless of height. Spread and flow to distribute impact across your entire surface area. Use yourself as a landing pad for falling allies. Catch projectiles and thrown objects with Advantage on the relevant check."
      },
      {
        "id": "elastic-flight",
        "name": "Elastic Flight",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Elasticity 2",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 2 Gliding membrane or elastic propulsion grants flying speed equal to Close range per Turn (25 ft); can hover. Slowest flight in the game - cannot be upgraded by Enhancements. Does not stack with Flight Power Set."
      },
      {
        "id": "shapeshifting-disguise",
        "name": "Shapeshifting Disguise",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Elasticity 3",
        "creationCost": 1,
        "text": "Prerequisite: Elasticity 3 Reshape facial features, body proportions, skin texture, and superficial appearance to mimic another humanoid's looks. Visual approximation rather than biological duplicate. Casual observers cannot distinguish you from the original. Creatures who know the original well gain Advantage on Insight checks to detect the deception."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Wrap",
        "text": "Extended Wrap: Constricting Wrap's range increases to Medium (50-120 ft); maintain constriction at full speed rather than half."
      },
      {
        "name": "Snap-Back Strike",
        "text": "Snap-Back Strike: Once per encounter when a melee attack misses you, immediately make one Elastic Strike as a Reaction at Advantage."
      },
      {
        "name": "Coiled Power",
        "text": "Coiled Power: When you use Spring Launch, add 1 Power Die per Zone traveled in a straight line before the attack (maximum +2 dice)."
      },
      {
        "name": "Elastic Shield",
        "text": "Elastic Shield: Once per encounter as a Reaction when you or one ally within Close range (25 ft) would take physical damage, interpose your elastic body. Reduce that damage by 2 Power Dice + CON."
      }
    ],
    "limitations": [
      {
        "name": "Energy Vulnerability",
        "text": "Energy Vulnerability: No protection against energy damage. No Resistance to fire, cold, lightning, radiant, or similar types. Enemies who cannot penetrate physical defenses may switch specifically to energy attacks. +1 Power Pick."
      },
      {
        "name": "Concentration Required",
        "text": "Concentration Required: When Stunned or Dazed, all Elasticity Sustained Powers end immediately and melee reach reverts to adjacent until the condition ends. +1 Power Pick."
      },
      {
        "name": "Slow Reform",
        "text": "Slow Reform: After taking fire, cold, or energy damage exceeding CON in a single hit, extension range drops one range band and Encounter Powers are unavailable until start of your next Turn. +1 Power Pick. Electricity Control Power Set"
      }
    ]
  },
  {
    "id": "electricity-control",
    "name": "Electricity Control",
    "governingAbility": "Choose CON , INT , or CHA at character creation",
    "abilityOptions": [
      "con",
      "int",
      "cha"
    ],
    "associatedConditions": "Dazed, Stunned, Overloaded (against technological targets)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Disruptor; uniquely effective against technological opponents and powered armor",
    "limitationNote": "",
    "description": "Electricity Control is the Power Set of lightning, bio-electricity, electromagnetic pulse, and machine overload. Electricity controllers are uniquely effective against technological opponents - a villain in powered armor is a liability against a hero who can overload their systems with a touch. The conditions they inflict (Dazed, Stunned, Overloaded) compromise the target's action economy in ways that benefit the entire team. CON - biological electricity generation and bio-electric mastery. INT - engineered precision, calculated electromagnetic control, machine interface. CHA - raw force of personality channeled as electrical output.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Electricity Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Generate and project electrical current. Resistance to lightning damage. Immune to non-superpowered electrical sources. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Electricity Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Electricity Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to lightning damage (replaces Resistance). Sense presence of active electrical systems, powered devices, and electromagnetic fields within Short range (25-50 ft) without a check. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Electricity Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Electricity Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Lightning attacks ignore Resistance entirely; treat Immunity as Resistance. Once per encounter when you deal lightning damage, arc to one additional target within Close range (25 ft) of the original for half damage - no additional attack roll. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Electricity Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Electricity Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Living Lightning for 1 minute: become partially electromagnetic - immunity to all physical damage from non-superpowered sources; movement does not provoke Reactions; all lightning attacks automatically chain to one additional target within Close range (25 ft) for full damage (not half)."
      }
    ],
    "powers": [
      {
        "id": "lightning-bolt",
        "name": "Lightning Bolt",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Electricity Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (lightning). Strong Success: Shaken until end of target's next Turn."
      },
      {
        "id": "static-discharge",
        "name": "Static Discharge",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Electricity Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 1 \u00b7 Trigger: A creature hits you with a melee attack The attacker takes lightning damage equal to Prowess + Governing Ability modifier and rolls CON vs. your Power Effect Value. Failure: Dazed until end of their next Turn. Success: Shaken. Fires automatically when a melee hit connects."
      },
      {
        "id": "chain-lightning",
        "name": "Chain Lightning",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Electricity Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Electricity Control 2\n- Range: Short (25-50 ft) primary; chain reaches each subsequent target within Close range (25 ft) of the previous\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of primary (same roll for chain targets)\n- Hit (primary): 2 Power Dice + Governing Ability modifier lightning. Hit (each chain): 1 Power Die lightning. Power Effect Value vs. CON or Dazed until end of your next Turn. Maximum chain targets: equal to Prowess."
      },
      {
        "id": "system-overload",
        "name": "System Overload",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Electricity Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Electricity Control 2 Target the electrical systems of a powered suit, vehicle, drone, or technological device directly.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice lightning damage. Power Effect Value vs. INT - Failure: Overloaded + Power Disrupted until end of your next Turn; Success: Overloaded only. Against non-technological targets: damage only."
      },
      {
        "id": "electromagnetic-cage",
        "name": "Electromagnetic Cage",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Electricity Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Electricity Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Power Effect Value vs. CON - Failure: Restrained inside crackling electromagnetic field until end of your next Turn (cannot use tech powers/devices; takes lightning damage equal to Prowess per Turn; ally attacks against target have Advantage). Success: Slowed + Overloaded."
      },
      {
        "id": "ball-lightning",
        "name": "Ball Lightning",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Electricity Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Electricity Control 3\n- Range: Medium area (20-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice lightning damage, maximum on all dice. Power Effect Value vs. CON - Failure: Stunned; Success: Dazed (both until end of your next Turn). Strong Success on attack: EMP also affects all electronic and powered devices in area - Overloaded regardless of whether operators were hit."
      }
    ],
    "utilities": [
      {
        "id": "electrical-interface",
        "name": "Electrical Interface",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Electricity Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 1 Communicate with, power, or shut down simple electrical systems through direct contact. Unlock electronic locks, power dead devices, short-circuit simple security systems, read basic data from connected systems. Complex systems require a Technology check."
      },
      {
        "id": "electromagnetic-sense",
        "name": "Electromagnetic Sense",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Electricity Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 2 Detect bio-electric signatures of living creatures within Short range (25-50 ft) through walls and barriers - know location and approximate size of any creature with a nervous system, even invisible or hidden. Cannot distinguish specific identities through this sense alone."
      },
      {
        "id": "lightning-ride",
        "name": "Lightning Ride",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Electricity Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 2 Travel through electrical systems at lightning speed. Touch a power line or conduit to transmit yourself through the electrical network and emerge from any connected outlet or panel within the same building or grid. Takes one Action; arrive at start of your next Turn. Cannot bring passengers."
      },
      {
        "id": "emp-burst",
        "name": "EMP Burst",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Electricity Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Electricity Control 3 Once per scene as an Action, release a focused EMP in a Close area (25-ft radius) around you. All non-superpowered electronic devices in the area disabled for one scene. Superpowered technological systems roll INT vs. Power Effect Value or Overloaded until end of your next Turn. No damage. Pure disruption tool."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Chain",
        "text": "Extended Chain: Chain Lightning's chain range increases from Close (25 ft) to Short (25-50 ft) between targets."
      },
      {
        "name": "Conducted Current",
        "text": "Conducted Current: Static Discharge also triggers when hit by a ranged attack using a conductive weapon or electromagnetic projectile."
      },
      {
        "name": "Overload Mastery",
        "text": "Overload Mastery: System Overload's Power Disrupted effect lasts until end of the target's next Turn on failure."
      },
      {
        "name": "Living Conductor",
        "text": "Living Conductor: Use Lightning Ride without touching the electrical system directly - transmit through air across up to Close range (25 ft) to the nearest conductive surface."
      }
    ],
    "limitations": [
      {
        "name": "Grounded",
        "text": "Grounded: Insulating materials, rubber, specific force fields, or deliberate electrical shielding can block your powers. A prepared opponent with insulating gear reduces Power Effect Value by 3 and has Advantage on saves against your electrical effects. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Powers crackle visibly. Static electricity follows you; hair stands on end when you concentrate. Stealth while using Electricity Control is impossible. +1 Power Pick."
      },
      {
        "name": "Voltage Dependency",
        "text": "Voltage Dependency: Powers require a minimum charge state. Without electrical access during Downtime, the next session begins with Power Effect Value \u22122 and attacks deal 1 fewer Power Die. +1 Power Pick. Energy Generation Power Set"
      }
    ]
  },
  {
    "id": "energy-generation",
    "name": "Energy Generation",
    "governingAbility": "Choose STR , INT , WIS , or CHA at character creation Energy TypeChoose one at character creation: fire, cold, lightning, radiant, sonic, force, necrotic, or GM-approved type",
    "abilityOptions": [
      "str",
      "int",
      "wis",
      "cha"
    ],
    "associatedConditions": "Blinded (bright energy types), Dazed, Prone (force), Burning (fire-type)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Most versatile offensive Power Set; reliable at-range output; team's offensive core",
    "limitationNote": "",
    "description": "Energy Generation is the Power Set of pure projected force. Not a specific element in the environment but raw energy the hero generates internally - solar blasts, plasma bolts, cosmic rays, kinetic force beams, heat projection, sonic waves. Where other Power Sets control existing phenomena, an Energy Generation hero creates their energy from within. They are the source. This is the most versatile offensive Power Set in the game. The energy type is chosen at character creation and defines the visual and narrative expression, but the mechanics remain consistent regardless of source. Always armed, never out of ammunition.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Energy Generation 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Generate and project chosen energy type. Resistance to that energy type. Attacks deal 1 Power Die + Governing Ability modifier. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Energy Generation 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Energy Generation 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to chosen energy type (replaces Resistance). Attacks deal 2 Power Dice + Governing Ability modifier. Once per encounter when you take damage of your chosen energy type, convert it to temporary HP equal to the damage instead. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Energy Generation 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Energy Generation 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Attacks deal 3 Power Dice + Governing Ability modifier. Energy attacks ignore Resistance; treat Immunity as Resistance. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Energy Generation 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Energy Generation 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Attacks deal 4 Power Dice + Governing Ability modifier. Once per encounter when Bloodied, immediately regain one spent Encounter Power. Once per day enter Full Output for 1 minute: all energy attacks deal maximum damage; aura deals Prowess in energy damage to any creature starting their Turn within Close range (25 ft)."
      }
    ],
    "powers": [
      {
        "id": "energy-bolt",
        "name": "Energy Bolt",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Energy Generation 1",
        "creationCost": 1,
        "text": "Prerequisite: Energy Generation 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track. Strong Success: push 10 ft or apply type-appropriate condition until end of your next Turn (Shaken - force/sonic; Blinded - radiant/fire; Slowed - cold; Dazed - lightning/necrotic)"
      },
      {
        "id": "energy-shield",
        "name": "Energy Shield",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Energy Generation 1",
        "creationCost": 1,
        "text": "Prerequisite: Energy Generation 1 \u00b7 Trigger: You or one ally within Close range (25 ft) is hit by an attack Reduce damage taken by 1 Power Die + Prowess. A brief burst of your chosen energy intercepts the attack. Must perceive both the ally and the attack to protect an ally."
      },
      {
        "id": "energy-absorption",
        "name": "Energy Absorption",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Energy Generation 2",
        "creationCost": 2,
        "text": "Prerequisite: Energy Generation 2 \u00b7 Trigger: You would take damage of your chosen energy type Reduce incoming damage by 2 Power Dice + Prowess. If this brings damage to 0, your next Energy Bolt before end of your next Turn deals 1 additional Power Die of damage."
      },
      {
        "id": "energy-burst",
        "name": "Energy Burst",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Energy Generation 2",
        "creationCost": 2,
        "text": "Prerequisite: Energy Generation 2\n- Range: Short area (15-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice energy damage. Power Effect Value vs. CON or DEX (whichever higher) - Failure: pushed Close range + knocked Prone; Success: pushed 5 ft only"
      },
      {
        "id": "sustained-beam",
        "name": "Sustained Beam",
        "tier": 2,
        "type": "Encounter",
        "action": "Action (Sustained)",
        "prerequisite": "Energy Generation 2",
        "creationCost": 2,
        "text": "Prerequisite: Energy Generation 2 Project a continuous beam you can sweep across targets. Sustained - spend Bonus Action each Turn to maintain and make one additional attack. May change target as part of maintenance. Ends if you do not spend the Bonus Action.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice energy damage per hit"
      },
      {
        "id": "nova-flare",
        "name": "Nova Flare",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Energy Generation 3",
        "creationCost": 3,
        "text": "Prerequisite: Energy Generation 3\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice energy damage, maximum on all dice. Power Effect Value vs. CON - Failure:\nknocked Prone + pushed Short range + Blinded or Dazed until end of your next Turn; Success: half damage only, no additional effects"
      }
    ],
    "utilities": [
      {
        "id": "environmental-interaction",
        "name": "Environmental Interaction",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Energy Generation 1",
        "creationCost": 1,
        "text": "Prerequisite: Energy Generation 1 Your energy interacts with the environment beyond combat, appropriate to its type. Define three specific\nnon-combat environmental applications with the GM at character creation (e.g., fire: ignite/illuminate/extinguish; force: push/lift/hold objects; sonic: communicate at range or shatter specific frequencies). Available freely."
      },
      {
        "id": "power-signature",
        "name": "Power Signature",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Energy Generation 1",
        "creationCost": 1,
        "text": "Prerequisite: Energy Generation 1 Your energy output is distinctive and identifiable. Once per scene, mark a location, object, or creature with traceable energy residue. Detect the signature within Medium range (50-120 ft); sense its general direction at any distance on the same plane for 24 hours."
      },
      {
        "id": "energy-flight",
        "name": "Energy Flight",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Energy Generation 2",
        "creationCost": 1,
        "text": "Prerequisite: Energy Generation 2 Propel yourself using energy output. Flying speed equal to Close range per Turn (25 ft). Does not stack with the Flight Power Set - if you have Flight, use that instead."
      },
      {
        "id": "living-reactor",
        "name": "Living Reactor",
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Energy Generation 3",
        "creationCost": 3,
        "text": "Prerequisite: Energy Generation 3 Once per encounter when Bloodied, immediately regain one spent Energy Generation Encounter Power. Additionally, when you regain HP from any source while Bloodied, immediately make one Energy Bolt attack as a free action against any target within Short range (25-50 ft)."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Range",
        "text": "Extended Range: Energy Bolt and Energy Burst each gain one additional range band."
      },
      {
        "name": "Overcharge",
        "text": "Overcharge: Once per encounter before an Energy Bolt, add 1 Power Die to damage but gain 1 Burnout after the attack regardless of hit."
      },
      {
        "name": "Shield Ally",
        "text": "Shield Ally: Energy Shield may protect any ally within Short range (25-50 ft) rather than only Close range."
      },
      {
        "name": "Adaptive Energy",
        "text": "Adaptive Energy: Once per scene, temporarily shift your energy type to a different type for one attack or power use (must have encountered that type before)."
      }
    ],
    "limitations": [
      {
        "name": "Power Source Dependent",
        "text": "Power Source Dependent: Energy comes from an external source (sunlight, radiation, power cell, mystical font). If unavailable, Core Track damage dice drop by 1 at each tier and Daily power is unavailable. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Cannot conceal energy output while active. You glow, crackle, radiate heat, or visibly express your energy type. Stealth while using Energy Generation powers is impossible. +1 Power Pick."
      },
      {
        "name": "Collateral Risk",
        "text": "Collateral Risk: Energy type is particularly prone to environmental damage in enclosed spaces or near civilians. GM may introduce collateral damage consequences even on a successful attack. Spend 1 Edge to avoid. +1 Power Pick. Gadgetry Power Set"
      }
    ]
  },
  {
    "id": "gadgetry",
    "name": "Gadgetry",
    "governingAbility": "INT (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "int"
    ],
    "associatedConditions": "Blinded (flashbang/smoke), Dazed (shock/sonic), Restrained (foam/net), Overloaded (tech targets)",
    "defaultDamage": "Power Dice x Core Track level + INT modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Preparation and versatility; solution for every situation built in advance",
    "limitationNote": "",
    "description": "Gadgetry is the Power Set of preparation, tools, and the belief that the right device at the right moment can solve any problem. Not a specific weapon or suit but an entire philosophy of heroism: intelligence, foresight, and a well-stocked utility belt are enough to stand alongside heroes with cosmic power. These heroes do not have one power - they have a solution for every situation because they prepared one before the situation arrived.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Gadgetry 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Produce any mundane small tool or simple device as a free action. Once per Breather, prepare a number of temporary single-use gadgets equal to INT modifier + Prowess (minimum 1). Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Gadgetry 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Gadgetry 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Kit expands to advanced sensor systems, deployable countermeasures, and specialized devices. Once per encounter, draw or deploy a Gadgetry Utility Power as a Bonus Action rather than an Action. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Gadgetry 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Gadgetry 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Gadget suite reaches super-science territory. Once per scene, declare you previously prepared a specific noncombat device appropriate to the current situation. GM may reject implausible items given scene context. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Gadgetry 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Gadgetry 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day when you use a Gadgetry Encounter Power, immediately regain that use by revealing a backup or emergency prototype. The second use costs 1 Burnout as the improvised backup pushes your preparation to its limit."
      }
    ],
    "powers": [
      {
        "id": "gadget-strike",
        "name": "Gadget Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Gadgetry 1 \u00b7 Choose damage type at character creation: energy, piercing, or bludgeoning",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1 \u00b7 Choose damage type at character creation: energy, piercing, or bludgeoning\n- Range: Short (25-50 ft)\n- Attack: 1d20 + INT + Prowess vs. Dodge\n- Hit: Default damage track. Strong Success: Power Effect Value vs. CON or Shaken until end of your next Turn."
      },
      {
        "id": "flashbang",
        "name": "Flashbang",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Gadgetry 1",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1\n- Range: Close area (15-ft radius within 0-25 ft)\n- Attack: 1d20 + INT + Prowess vs. Dodge of each creature\n- Hit: Power Effect Value vs. CON - Failure: Blinded + Dazed; Success: Blinded only (both until end of your next Turn)"
      },
      {
        "id": "smoke-pellet",
        "name": "Smoke Pellet",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Gadgetry 1",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1 Deploy a smoke canister. Area (15-ft radius within 0-25 ft) becomes heavily obscured until end of your next Turn. All creatures in area have Disadvantage on attacks against targets outside the smoke. You and allies who knew the smoke was coming may move through it without penalty."
      },
      {
        "id": "restraint-device",
        "name": "Restraint Device",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Gadgetry 2",
        "creationCost": 2,
        "text": "Prerequisite: Gadgetry 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + INT + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Restrained until end of your next Turn (physical restraint - can be cut or broken with Strong Success on STR vs. Power Effect Value as Action); Success: Slowed"
      },
      {
        "id": "explosive-charge",
        "name": "Explosive Charge",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Gadgetry 2",
        "creationCost": 2,
        "text": "Prerequisite: Gadgetry 2\n- Range: Short area (10-ft radius within 25-50 ft; place within Close range or throw to Short)\n- Attack: 1d20 + INT + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice explosive damage. Power Effect Value vs. DEX or knocked Prone. Success: half damage only. Objects and barriers take maximum damage."
      },
      {
        "id": "nano-swarm",
        "name": "Nano-Swarm",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Gadgetry 3",
        "creationCost": 3,
        "text": "Prerequisite: Gadgetry 3 Release a cloud of microscopic devices. Choose targeting mode at activation.\n- Range: Medium area (20-ft radius within 50-120 ft)\n- Attack: 1d20 + INT + Prowess vs. Dodge of each creature\n- Biological: 3 Power Dice poison damage; Power Effect Value vs. CON Save Value or Dazed\n- Technological: 3 Power Dice energy damage; Power Effect Value vs. INT Save Value or Overloaded + Power Disrupted (all until end of your next Turn)"
      },
      {
        "id": "impossible-device",
        "name": "Impossible Device",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Gadgetry 3",
        "creationCost": 3,
        "text": "Prerequisite: Gadgetry 3 Produce a device that addresses a major scene problem in a way that should not be possible given available resources and time. Define the device's purpose when activated - it must address a specific significant problem present in the scene (cutting through an alien barrier, stabilizing a reactor breach, decoding an impossible signal, etc.). Works once, perfectly, for its stated purpose. Not a combat attack. GM may require a Technology check for effects at the very edge of plausibility."
      }
    ],
    "utilities": [
      {
        "id": "gadget-kit",
        "name": "Gadget Kit",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 1",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1 Produce any small mundane or near-future tool appropriate to the scene: lockpick, glass cutter, rebreather, cable spool, adhesive patch, forensic scanner, signal detector. No roll for straightforward applications. Unusual or creative uses may call for a Technology check."
      },
      {
        "id": "grapnel-line",
        "name": "Grapnel Line",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 1",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1 Fire a grappling line to any anchor point within Short range (25-50 ft). Climb, swing, pull light objects, traverse gaps, or descend safely. In combat, grapnel movement costs a Bonus Action and covers one Zone of distance."
      },
      {
        "id": "tracer",
        "name": "Tracer",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 1",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 1 As a Bonus Action, tag a creature, vehicle, or object with a concealed tracking device. Locate the tagged item within Long range (120-300 ft) and sense its general direction at any distance on the same plane for 24 hours. The tracer can be found and removed with a DC 15 Notice or Investigation check."
      },
      {
        "id": "drone-scout",
        "name": "Drone Scout",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 2",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 2 Deploy a small autonomous aerial or ground drone for one scene. Can fly or roll, record and transmit, scout locations, detect threats within Short range (25-50 ft) of its position. Minimal HP - easily destroyed if directly attacked. Control as a free action each Turn."
      },
      {
        "id": "signal-jammer",
        "name": "Signal Jammer",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 2",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 2 Deploy a jamming device that disrupts communications and electronic surveillance within Short range\n(25-50 ft) for one scene. Mundane communications fail completely. Advanced or superpowered systems: roll INT vs. Power Effect Value at activation or disrupted for the scene. Deactivate as a free action."
      },
      {
        "id": "scene-solution",
        "name": "Scene Solution",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Gadgetry 3",
        "creationCost": 1,
        "text": "Prerequisite: Gadgetry 3 Once per scene, declare you prepared for exactly this kind of technical obstacle. Automatically succeed on one Technology, Investigation, or relevant Skill check involving a technical challenge. Alternatively, for an extremely hard challenge, gain Advantage and add Prowess to the roll in addition to normal modifiers."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Kit",
        "text": "Extended Kit: Core Track 1 temporary gadget preparation limit increases by Prowess."
      },
      {
        "name": "Quick Deploy",
        "text": "Quick Deploy: Smoke Pellet may be used as a free action once per encounter rather than a Bonus Action."
      },
      {
        "name": "Targeted Nano-Swarm",
        "text": "Targeted Nano-Swarm: When you use Nano-Swarm, designate up to INT modifier in creatures within the area to be unaffected."
      },
      {
        "name": "Overclocked Device",
        "text": "Overclocked Device: Once per encounter before a Gadgetry attack roll, push a device beyond rated performance - add 1 Power Die to damage but the device is destroyed after this use regardless of outcome."
      }
    ],
    "limitations": [
      {
        "name": "Gear Dependent",
        "text": "Gear Dependent: Powers require your kit, belt, pouch system, or equipment loadout. Without gear, Power Set is inaccessible until recovered or replaced. Can improvise basic tools with Kitbashing rules. +1 Power Pick."
      },
      {
        "name": "Preparation Time",
        "text": "Preparation Time: Daily Gadgetry powers used without at least one Breather of preparation before the current encounter cost 1 Burnout each. +1 Power Pick."
      },
      {
        "name": "Limited Resupply",
        "text": "Limited Resupply: Encounter Powers represent physical devices. If all Encounter Powers are used and Gadgetry 4 Apex is not active, cannot produce replacements until a Breather. +1 Power Pick. Illusion Power Set"
      }
    ]
  },
  {
    "id": "illusion",
    "name": "Illusion",
    "governingAbility": "Choose WIS or CHA at character creation",
    "abilityOptions": [
      "wis",
      "cha"
    ],
    "associatedConditions": "Shaken (terrifying illusions), Dazed (sensory overload), Blinded (false darkness), Prone (reacting to false ground)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Misdirection, psychological pressure, perceptual battlefield control; rarely the strongest but frequently the most dangerous",
    "limitationNote": "",
    "description": "Illusion is the Power Set of false perception - not holograms that instruments can measure, but the ability to reach into the perceptual experience of other minds and change what they receive. Illusion heroes operate through misdirection and the exploitation of the gap between perception and reality. An opponent who does not know what is real has already lost the most important battle. WIS - disciplined psychic illusionist; projections of focused mental force. CHA - natural performer; illusions flow from force of personality.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Illusion 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Create simple illusions affecting one sense within Short range (25-50 ft). Illusions are static or have simple repeating motion. Physical interaction or WIS vs. Power Effect Value reveals the illusion as false. Sustain one simple illusion as a free action each Turn. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Illusion 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Illusion 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Illusions extend to two simultaneous senses; fully animated and reactive to events. Range extends to Medium (50-120 ft). Can create illusions of specific people, creatures, or objects that pass casual inspection. Sustain two illusions simultaneously. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Illusion 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Illusion 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Illusions engage all five senses simultaneously; fool enhanced senses as well as ordinary ones. Creatures attempting to see through illusions roll at Disadvantage. Range extends to Long (120-300 ft). Sustain three illusions simultaneously. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Illusion 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Illusion 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Master of Perception for 1 minute: creatures with True Sight or Reality Anchor must still roll WIS vs. Power Effect Value to perceive truth; illusions require no free action to sustain; create a full sensory environment affecting every creature within Long range simultaneously."
      }
    ],
    "powers": [
      {
        "id": "false-image",
        "name": "False Image",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Illusion 1",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 1 Create one illusory duplicate of yourself or a simple object within Short range (25-50 ft). Until a creature physically interacts with it or succeeds on WIS vs. Power Effect Value, they cannot distinguish it from real. Attackers who cannot determine which image is real have Disadvantage on attacks against you. The duplicate is destroyed the first time it is struck."
      },
      {
        "id": "phantom-strike",
        "name": "Phantom Strike",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Illusion 1",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Default damage track (psychic). Power Effect Value vs. WIS - Failure: Shaken until end of your next Turn; Success: Disadvantage on their next attack roll"
      },
      {
        "id": "terror-vision",
        "name": "Terror Vision",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Illusion 2",
        "creationCost": 2,
        "text": "Prerequisite: Illusion 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Frightened of you until end of your next Turn (if they determine the illusion's source, may roll WIS vs. Power Effect Value to end); Success: Shaken"
      },
      {
        "id": "sensory-fog",
        "name": "Sensory Fog",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Illusion 2",
        "creationCost": 2,
        "text": "Prerequisite: Illusion 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower of each creature\n- Hit: Power Effect Value vs. WIS - Failure: Dazed + Blinded; Success: Shaken + Blinded (both until end of your next Turn)"
      },
      {
        "id": "mirror-maze",
        "name": "Mirror Maze",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Illusion 3",
        "creationCost": 3,
        "text": "Prerequisite: Illusion 3 Create a number of illusory duplicates of yourself equal to Prowess in spaces within Short range (25-50 ft). While active: attacks against you have Disadvantage; miss automatically on any roll that would hit a duplicate (which is then destroyed). The maze ends when all duplicates are destroyed, when you are struck, or when you dismiss it. Each duplicate lasts until destroyed."
      },
      {
        "id": "grand-illusion",
        "name": "Grand Illusion",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Illusion 3",
        "creationCost": 3,
        "text": "Prerequisite: Illusion 3 Construct a complete false environment affecting all senses of every creature in a wide area simultaneously. Concentration required - ends if you are Stunned, Incapacitated, or Unconscious.\n- Range: Long area (entire battlefield within 120-300 ft)\n- Effect: Every enemy makes WIS vs. Power Effect Value. Failure: for the remainder of the encounter that creature perceives a false version of the battlefield you control - you may alter their perception of terrain, cover, creature positions, and environmental features as a free action each Turn. They may roll WIS vs. Power Effect Value at the start of each of their Turns to see through. Allies immune. Success: Shaken until end of your next Turn, sees through the larger illusion."
      }
    ],
    "utilities": [
      {
        "id": "disguise-self",
        "name": "Disguise Self",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Illusion 1",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 1 Project an illusory overlay over your own appearance - appear as any humanoid of similar size. Affects sight and sound. Casual observers cannot distinguish you from the illusion. Close interaction: WIS vs. Power Effect Value to see through. Physical substance remains your actual form - touching you reveals the truth."
      },
      {
        "id": "silent-zone",
        "name": "Silent Zone",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Illusion 1",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 1 Create an area of illusory silence within Close range (25 ft) of a designated point. Sounds within do not exit; sounds outside do not enter. Creatures with enhanced hearing may roll WIS vs. Power Effect Value to perceive through it."
      },
      {
        "id": "environmental-illusion",
        "name": "Environmental Illusion",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Illusion 2",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 2 As an Action, create a sustained illusory environment within Short range (25-50 ft) - a room appearing as a different room, a locked door appearing to be a solid wall. Fully sensory and reactive. Physical interaction reveals the truth. Casual observation: WIS vs. Power Effect Value. Lasts one scene without concentration."
      },
      {
        "id": "perfect-double",
        "name": "Perfect Double",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Illusion 3",
        "creationCost": 1,
        "text": "Prerequisite: Illusion 3 Create a complete illusory duplicate of one creature you have observed for at least one minute. The double moves, speaks, and behaves convincingly - can engage in conversation using your knowledge of the original. Cannot affect the physical world. Creatures interacting closely roll WIS vs. Power Effect Value at Disadvantage. Lasts one scene."
      }
    ],
    "enhancements": [
      {
        "name": "Persistent Duplicates",
        "text": "Persistent Duplicates: False Image creates two duplicates rather than one. Both must be destroyed before Disadvantage on attacks is removed."
      },
      {
        "name": "Deep Terror",
        "text": "Deep Terror: When Terror Vision causes Frightened, the target also has Disadvantage on WIS saves to identify the illusion as false during that Turn."
      },
      {
        "name": "Extended Maze",
        "text": "Extended Maze: Mirror Maze duplicates last until the end of the encounter rather than until individually destroyed."
      },
      {
        "name": "Tactile Illusion",
        "text": "Tactile Illusion: Illusions now include convincing tactile sensation - creatures that physically interact with illusions must still succeed on WIS vs. Power Effect Value even on physical contact."
      }
    ],
    "limitations": [
      {
        "name": "Concentration Dependent",
        "text": "Concentration Dependent: When Stunned, Dazed, or Unconscious, all sustained illusions end immediately. When Shaken, sustained illusions flicker - creatures within range may immediately attempt WIS vs. Power Effect Value as a free action to see through them. +1 Power Pick."
      },
      {
        "name": "True Sight Vulnerability",
        "text": "True Sight Vulnerability: Creatures with True Sight, Reality Anchor, or similar effects automatically see through all your illusions without a roll - your illusions are completely transparent to them. +1 Power Pick."
      },
      {
        "name": "Psychic Feedback",
        "text": "Psychic Feedback: When a creature successfully identifies one of your illusions as false, you take psychic damage equal to Prowess as the mental projection collapses back into your own mind. Cannot be reduced. Multiple creatures seeing through illusions in the same Turn each deal this damage separately. +1 Power Pick. Fire Control Power Set"
      }
    ]
  },
  {
    "id": "fire-control",
    "name": "Fire Control",
    "governingAbility": "Choose CON , CHA , or WIS at character creation",
    "abilityOptions": [
      "con",
      "wis",
      "cha"
    ],
    "associatedConditions": "Burning (primary), Blinded (smoke/flash), Dazed (heat/smoke)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Burning condition creates ongoing per-Turn damage; fire reshapes terrain and creates persistent area hazards",
    "limitationNote": "",
    "description": "Fire Control is the Power Set of flame, heat, combustion, and thermal mastery. Fire is not just damage - it spreads, it lingers, it creates ongoing hazards that reshape the battlefield long after the initial attack. A fire controller fights differently from every other energy-based hero: they are not just projecting force at opponents. They are setting the terms of the entire engagement. CON - biological heat generation and metabolic fire production. CHA - primal emotional force of fire, passion and fury. WIS - mystical attunement to fire's nature, patient mastery.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Fire Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Generate flame, heat objects, and command small existing fires. Resistance to fire damage. Immune to extreme heat and ordinary flames. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Fire Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Fire Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to fire damage (replaces Resistance). Sense heat sources within Short range (25-50 ft) regardless of visibility - thermal vision. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Fire Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Fire Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Fire attacks ignore Resistance entirely; treat Immunity as Resistance. Once per encounter when you deal fire damage to a target, automatically apply Burning without requiring a separate save. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Fire Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Fire Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Living Flame for 1 minute: Resistance to all physical damage; movement does not provoke Reactions; all fire attacks automatically apply Burning on a hit with no save required."
      }
    ],
    "powers": [
      {
        "id": "fire-blast",
        "name": "Fire Blast",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Fire Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (fire). Strong Success: Power Effect Value vs. CON or gains Burning. A Burning target takes damage equal to Prowess at the start of each of their Turns until condition is removed."
      },
      {
        "id": "smoke-veil",
        "name": "Smoke Veil",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Fire Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 1 Create a billowing cloud of thick smoke. Area (15-ft radius within 0-25 ft) becomes heavily obscured until end of your next Turn. Creatures in the area when it forms: Power Effect Value vs. CON or Dazed until end of your next Turn from smoke inhalation. Can be dispersed by strong wind early."
      },
      {
        "id": "wall-of-fire",
        "name": "Wall of Fire",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Fire Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Fire Control 2 Create a sheet of fire up to 30 ft long, 10 ft high, 1 ft thick within Short range (25-50 ft). Persists until start of your next Turn. Any creature passing through or starting their Turn in it takes 2 Power Dice fire damage and rolls CON vs. Power Effect Value or gains Burning. Provides three-quarters cover (+5 Active Defense) to creatures on either side."
      },
      {
        "id": "firestorm",
        "name": "Firestorm",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Fire Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Fire Control 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice fire damage. Area becomes difficult terrain from heat and burning debris until end of your next Turn. Any creature starting their Turn in the area takes 1 Power Die fire damage automatically."
      },
      {
        "id": "solar-furnace",
        "name": "Solar Furnace",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Fire Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Fire Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 4 Power Dice fire and radiant damage. Power Effect Value vs. CON - Failure: Blinded until end of your next Turn + Burning; Success: Burning only"
      },
      {
        "id": "inferno",
        "name": "Inferno",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Fire Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Fire Control 3\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice fire damage, maximum on all dice. Power Effect Value vs. CON - Failure: Burning + knocked Prone; Success: Burning only. Entire area becomes difficult terrain from burning debris and heat distortion for the remainder of the encounter."
      }
    ],
    "utilities": [
      {
        "id": "extinguish",
        "name": "Extinguish",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Fire Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 1 Suppress or extinguish flames within Short range (25-50 ft) as an Action. Small fires: extinguished instantly. Large fires (burning rooms, vehicles): suppressed for one scene with sustained effort. City-scale fires require Tier 3 utility. As a Bonus Action, immediately end the Burning condition on one creature within Close range (25 ft)."
      },
      {
        "id": "heat-metal",
        "name": "Heat Metal",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Fire Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 1 As an Action, superheat a metal object or target wearing significant metal armor within Close range (25 ft). Power Effect Value vs. CON - Failure: drop any metal object held; take 1 Power Die fire damage per\nTurn until contact ends. Success: uncomfortably hot but retain hold. Against metal armor targets: Disadvantage on attack rolls until armor cools (one round outside fire contact)."
      },
      {
        "id": "fire-flight",
        "name": "Fire Flight",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Fire Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 2 Propelled by jets of flame, flying speed equal to Close range per Turn (25 ft). Does not stack with the Flight Power Set."
      },
      {
        "id": "citywide-burn-control",
        "name": "Citywide Burn Control",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Fire Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Fire Control 3 Over the course of one scene of sustained effort, suppress, redirect, or shape a large-scale fire: a burning building, industrial fire, or wildfire front. Does not extinguish instantly but prevents spreading, protects specific areas, creates firebreaks, and controls direction. Essential emergency responder capability."
      }
    ],
    "enhancements": [
      {
        "name": "Persistent Flame",
        "text": "Persistent Flame: When Fire Blast applies Burning on a Strong Success, the Burning damage increases to Prowess + Governing Ability modifier per Turn."
      },
      {
        "name": "Spreading Fire",
        "text": "Spreading Fire: When you apply Burning to a target, any creature starting their Turn within Close range (25 ft) of them rolls DEX vs. Power Effect Value or gains Burning as well."
      },
      {
        "name": "Firewall Duration",
        "text": "Firewall Duration: Wall of Fire persists until the start of your Turn after next rather than your next Turn."
      },
      {
        "name": "Phoenix Rise",
        "text": "Phoenix Rise: Once per encounter when reduced to 0 HP, expend your Daily power use (if available) to drop to 1 HP instead, deal 2 Power Dice fire damage to all creatures within Close range (25 ft), and gain temporary HP equal to Governing Ability modifier + Prowess."
      }
    ],
    "limitations": [
      {
        "name": "Water Vulnerability",
        "text": "Water Vulnerability: Water, ice, and cold effects suppress powers. When you take cold damage exceeding Governing Ability modifier in a single hit, Power Effect Value drops by 3 and attacks deal 1 fewer Power Die until start of your next Turn. Fully submerged: all Fire Control powers unavailable until you exit. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Fire cannot be hidden while active - heat distortion, light, and smoke accompany all power uses. In enclosed spaces, powers carry significant collateral risk. Stealth impossible. +1 Power Pick."
      },
      {
        "name": "Emotional Trigger",
        "text": "Emotional Trigger: When you are Frightened or Shaken, powers flare uncontrollably - GM may introduce collateral fire damage to the environment and allies as a consequence even when you are not actively using your powers. +1 Power Pick. Flight Power Set"
      }
    ]
  },
  {
    "id": "flight",
    "name": "Flight",
    "governingAbility": "Choose DEX , WIS , or INT at character creation",
    "abilityOptions": [
      "dex",
      "int",
      "wis"
    ],
    "associatedConditions": "Prone (immune while airborne), Grounded (Limitation vulnerability)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Vertical battlefield control; rescue and mobility; fundamentally different relationship to terrain than grounded heroes",
    "limitationNote": "",
    "description": "Flight is the Power Set of unassisted aerial movement. Not gliding, not jumping very high, not being carried - the ability to lift off, move through the air with intention and control, hover in place, and treat the vertical dimension of the world as simply another direction. It can look like anything: wings, cosmic energy, repulsor technology, telekinetic self-levitation, magical buoyancy. The mechanics are the same. What changes is the image. DEX - physical precision and aerial instinct. WIS - mystic attunement and force of will. INT - technological interface and calculated thrust.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Flight 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Combat flying speed: Close range per Turn (30 ft). Out of combat: twice governing ability score in MPH. Can hover. Immune to Prone and ground-level difficult terrain while airborne. Take off or land as part of normal movement at no action cost. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Flight 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Flight 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Combat flying speed: Short range per Turn (60 ft). Out of combat: ten times governing ability score in MPH. Fly in any weather. Carry one willing creature without reducing speed. City-scale flight: cross a city in minutes, regional distances in an hour or two. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Flight 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Flight 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Combat flying speed: Long range per Turn (300 ft). Out of combat: one hundred times governing ability score in MPH. Continental-scale: cross continents within hours, anywhere on Earth within a day. Fly through vacuum and extreme environments without harm from movement itself. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Flight 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Flight 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Combat speed remains Long range, but if you do not attack on your Turn you may move twice (start and end of Turn). Out of combat: one thousand times governing ability score in MPH - escape velocity, orbital or near-interplanetary distances. Once per encounter, move up to full flying speed as a free action in response to any trigger without expending your Reaction."
      }
    ],
    "powers": [
      {
        "id": "aerial-strike",
        "name": "Aerial Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Flight 1 \u00b7 Must have moved at least Close range (25 ft) this Turn before attacking",
        "creationCost": 1,
        "text": "Prerequisite: Flight 1 \u00b7 Must have moved at least Close range (25 ft) this Turn before attacking\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track + 1 additional Power Die from momentum. Strong Success: target knocked Prone."
      },
      {
        "id": "evasive-maneuver",
        "name": "Evasive Maneuver",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Flight 1",
        "creationCost": 1,
        "text": "Prerequisite: Flight 1 \u00b7 Trigger: An attack targets you while you are airborne Before the attack roll is made, move up to Close range (25 ft) in any direction including vertically without provoking Reactions. The attack must still be resolved against your new position. If the attacker cannot reach your new position, the attack automatically misses."
      },
      {
        "id": "swooping-rescue",
        "name": "Swooping Rescue",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Flight 2",
        "creationCost": 2,
        "text": "Prerequisite: Flight 2 Move up to your full flying speed in any direction. At any point during this movement, pick up one willing ally or civilian and carry them with you for the remainder of the movement. This movement does not provoke Reactions. The rescued creature is safely deposited at the end of your movement. If they have not yet taken their Turn, they may act immediately after being deposited."
      },
      {
        "id": "aerial-bombardment",
        "name": "Aerial Bombardment",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Flight 2 \u00b7 Must be at least Short range (25 ft) above target",
        "creationCost": 2,
        "text": "Prerequisite: Flight 2 \u00b7 Must be at least Short range (25 ft) above target\n- Range: Short (25-50 ft) directly below you\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 3 Power Dice + Governing Ability modifier damage. Power Effect Value vs. STR - Failure: knocked Prone + pushed Close range in your choice of direction; impact creates difficult terrain in a Close area (15-ft radius)"
      },
      {
        "id": "aerial-mastery",
        "name": "Aerial Mastery",
        "tier": 3,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Flight 3",
        "creationCost": 3,
        "text": "Prerequisite: Flight 3 Until start of your next Turn: all attacks against you from grounded creatures have Disadvantage; your flying speed doubles; you may move through other creatures' spaces without provoking Reactions; any creature you move past rolls DEX vs. your Power Effect Value or becomes Shaken until end of their next Turn from the shockwave of your passage."
      },
      {
        "id": "sonic-dive",
        "name": "Sonic Dive",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Flight 3 \u00b7 Must move at least Medium range (50 ft) in a straight line before impact",
        "creationCost": 3,
        "text": "Prerequisite: Flight 3 \u00b7 Must move at least Medium range (50 ft) in a straight line before impact\n- Range: Move in a straight line up to Long range (300 ft); strike first creature or barrier in path\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 6 Power Dice + Governing Ability modifier bludgeoning damage, maximum on all dice. Power Effect Value vs. STR - Failure: Stunned until end of your next Turn + pushed Short range; Success: Dazed. Against a barrier rather than a creature: pass through automatically; barrier takes maximum damage."
      }
    ],
    "utilities": [
      {
        "id": "hover",
        "name": "Hover",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Flight 1",
        "creationCost": 1,
        "text": "Prerequisite: Flight 1 Remain stationary in the air indefinitely with no concentration or action required. Sleep, eat, perform delicate tasks, and have conversations while hovering. Passive extension of your flight - functions automatically whenever you are airborne and not moving."
      },
      {
        "id": "carry-capacity",
        "name": "Carry Capacity",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Flight 2",
        "creationCost": 1,
        "text": "Prerequisite: Flight 2 Carry a number of additional willing creatures equal to your Governing Ability modifier simultaneously without reducing your flying speed. Each creature must be within Close range (25 ft) of you and willing to be carried. The classic image of a flying hero evacuating multiple civilians simultaneously."
      },
      {
        "id": "high-altitude-survival",
        "name": "High Altitude Survival",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Flight 2",
        "creationCost": 1,
        "text": "Prerequisite: Flight 2 Survive at extreme altitudes without harm - no oxygen deprivation, no pressure effects, no temperature extremes from altitude alone. Does not provide full vacuum survival or protection from deliberate environmental attacks; only passive hazards of high altitude flight."
      },
      {
        "id": "atmospheric-exit",
        "name": "Atmospheric Exit",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Flight 3",
        "creationCost": 1,
        "text": "Prerequisite: Flight 3 Reach and survive in low Earth orbit under your own power. Do not need oxygen while in flight at this tier. Survive temperature extremes and radiation of near-space for a number of hours equal to Governing Ability modifier before needing to return or find shelter. Extended space survival requires additional powers."
      }
    ],
    "enhancements": [
      {
        "name": "Aerial Agility",
        "text": "Aerial Agility: While airborne, gain Advantage on all Active Defense rolls."
      },
      {
        "name": "Combat Flier",
        "text": "Combat Flier: The movement requirement for Aerial Strike is removed - use it as a standard attack without needing to move first."
      },
      {
        "name": "Speed Burst",
        "text": "Speed Burst: Once per encounter as a free action, double your flying speed for one Turn."
      },
      {
        "name": "Protective Escort",
        "text": "Protective Escort: When using Swooping Rescue, the carried creature gains Resistance to all damage until the start of your next Turn."
      }
    ],
    "limitations": [
      {
        "name": "Grounded",
        "text": "Grounded: A specific condition, material, effect, or power can prevent you from flying. When grounded, you lose all Flight powers until the condition is removed. +1 Power Pick."
      },
      {
        "name": "Exposed",
        "text": "Exposed: Cannot benefit from cover while airborne. Ranged attacks against you never suffer penalties from your movement or position. +1 Power Pick."
      },
      {
        "name": "Powered Source",
        "text": "Powered Source: Flight requires an active power source. If unavailable or depleted, flying speed drops to Flight 1 regardless of Core Track level, and sustained high-speed flight costs 1 Burnout per encounter in which you use Tier 2 or higher Flight powers. +1 Power Pick. Light Control Power Set"
      }
    ]
  },
  {
    "id": "light-control",
    "name": "Light Control",
    "governingAbility": "Choose INT , WIS , or CHA at character creation",
    "abilityOptions": [
      "int",
      "wis",
      "cha"
    ],
    "associatedConditions": "Blinded (primary), Dazed (sensory disruption), Shaken (disorientation)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Most tactically versatile in this group; blinding + hard-light barriers + holographic misdirection simultaneously",
    "limitationNote": "",
    "description": "Light Control is the Power Set of radiance, lasers, blinding flashes, hard-light constructs, holograms, and mastery of the visible and invisible electromagnetic spectrum. Light controllers operate in two distinct combat registers simultaneously: devastating precision offense and sophisticated deception. At higher tiers they become genuine battlefield architects. INT - calculated photonic engineering and precision light manipulation. WIS - mystical attunement to radiance or divine light. CHA - performance and projection of light as extension of presence.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Light Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Generate, bend, and shape light. Create illumination in any color and intensity within Short range (25-50 ft) or suppress light sources within Close range (25 ft). Resistance to radiant damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Light Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Light Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to radiant damage and to Blinded from natural light sources. When you impose Blinded on a target, even those who succeed on their save suffer Disadvantage on their next Notice check before end of their next Turn. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Light Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Light Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Light attacks ignore radiant Resistance entirely; treat Immunity as Resistance. Once per encounter when you hit with a light attack, add 1 Power Die to the damage as a free action. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Light Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Light Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Photonic Form for 1 minute: become partially light - immunity to all physical damage from non-superpowered sources; movement does not provoke Reactions; all attacks that would Blind automatically Blind without requiring a save."
      }
    ],
    "powers": [
      {
        "id": "light-lance",
        "name": "Light Lance",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Light Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Light Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (radiant). Strong Success: Power Effect Value vs. CON or Blinded until end of your next Turn."
      },
      {
        "id": "flash-burst",
        "name": "Flash Burst",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Light Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Light Control 1 Pure control power - no damage.\n- Range: Close area (20-ft radius within 0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: Power Effect Value vs. CON - Failure: Blinded; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "hard-light-barrier",
        "name": "Hard Light Barrier",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Light Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Light Control 2 Construct a solid barrier of compressed photonic energy - wall up to 20 ft long, 10 ft high, 1 ft thick within Short range (25-50 ft). HP equal to 3x your Level + Governing Ability modifier; Resistance to all damage except force. Provides full cover. Persists until destroyed or until start of your Turn after next."
      },
      {
        "id": "laser-precision",
        "name": "Laser Precision",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Light Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Light Control 2\n- Range: Medium (50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 3 Power Dice radiant damage. Ignores half and three-quarters cover bonuses; ignores Resistance to radiant damage regardless of source; treats Immunity as Resistance. Strong Success: beam passes through primary target to hit the next creature in the line within Medium range for half damage - no additional attack roll."
      },
      {
        "id": "light-prison",
        "name": "Light Prison",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Light Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Light Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Restrained inside hard-light cage until end of your next Turn (cage HP = 5 x your Level; Resistance to non-force damage; ally attacks against target have Advantage). Success: Slowed only."
      },
      {
        "id": "solar-flare",
        "name": "Solar Flare",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Light Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Light Control 3\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice radiant damage, maximum on all dice. Power Effect Value vs. CON - Failure: Blinded for the remainder of the encounter + knocked Prone; Success: Blinded until end of your next Turn only"
      }
    ],
    "utilities": [
      {
        "id": "holographic-decoy",
        "name": "Holographic Decoy",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Light Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Light Control 1 As a Bonus Action, project a convincing holographic duplicate of yourself at any unoccupied point within Close range (25 ft). The decoy moves and acts as you direct as a free action each Turn but cannot affect physical objects. Attacks against the decoy automatically miss; attacker realizes the target was false. Persists until discovered, dismissed, or end of scene."
      },
      {
        "id": "illumination-control",
        "name": "Illumination Control",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Light Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Light Control 1 Complete control over ambient light in your vicinity. Create perfect darkness in a Close area (25-ft radius) suppressing all non-superpowered light sources, or fill the same area with bright light of any color or intensity. Create precise illumination patterns: spotlights, colored signals, written messages in light, or navigational beacons visible at Long range (120-300 ft). Light BendingTier 2 \u00b7 Utility (Sustained)\nPrerequisite: Light Control 2 Bend light around yourself or one willing ally within Close range (25 ft), rendering them effectively invisible. The affected creature gains the Hidden condition and Advantage on Stealth checks. Ends if the creature attacks, uses a power with a visible effect, or takes damage. Sustained - maintain with Bonus Action each Turn; may switch the protected creature as part of maintenance."
      },
      {
        "id": "perfect-hologram",
        "name": "Perfect Hologram",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Light Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Light Control 3 As an Action, create a convincing multi-sensory holographic environment, object, or person filling up to a 30-ft cube within Medium range (50-120 ft). The hologram engages sight, sound, and smell. Physical interaction: roll INT vs. Power Effect Value to recognize as illusory. Persists for one scene without concentration. Animate and alter content as a free action each Turn."
      }
    ],
    "enhancements": [
      {
        "name": "Sustained Beam",
        "text": "Sustained Beam: Light Lance may be used as a Sustained Power - spend Bonus Action each Turn to maintain a continuous beam that automatically hits the same target for 1 Power Die radiant damage with no attack roll required."
      },
      {
        "name": "Improved Decoy",
        "text": "Improved Decoy: Holographic Decoy produces two decoys simultaneously. Each must be dismissed separately. Discovering one does not reveal the other."
      },
      {
        "name": "Extended Barrier",
        "text": "Extended Barrier: Hard Light Barrier persists until the start of your Turn two rounds later rather than one."
      },
      {
        "name": "Blinding Efficiency",
        "text": "Blinding Efficiency: When Flash Burst Blinds a target, their save to end the Blinded condition at the end of their Turn is made at Disadvantage for the first attempt only."
      }
    ],
    "limitations": [
      {
        "name": "Darkness Dependent",
        "text": "Darkness Dependent: Powers significantly weakened in total magical or supernatural darkness that suppresses light itself - Power Effect Value \u22123; cannot use Holographic Decoy, Light Bending, or Perfect Hologram until light is restored. Ordinary darkness does not trigger this. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Beams, flashes, glowing constructs, and radiant auras accompany all active power use. Stealth while using Light Control powers is impossible. +1 Power Pick."
      },
      {
        "name": "Precision Dependency",
        "text": "Precision Dependency: Requires clear line of sight and precise targeting. In heavy smoke, thick fog, or magical obscurement: Disadvantage on all Light Control attack rolls; cannot create holograms or hard-light constructs in areas you cannot clearly see. +1 Power Pick. Machine Interface Power Set"
      }
    ]
  },
  {
    "id": "machine-interface",
    "name": "Machine Interface",
    "governingAbility": "INT (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "int"
    ],
    "associatedConditions": "Overloaded, Power Disrupted, Dazed (feedback), Restrained (system seizure)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Disruptor and controller in combat; most capable investigator and infiltrator outside it",
    "limitationNote": "",
    "description": "Machine Interface is the Power Set of the mind-machine connection - not using technology but becoming part of it. The ability to interface directly with electronic systems, networks, mechanical devices, vehicles, and at higher tiers entire technological infrastructures, through a connection that bypasses physical interaction entirely. In combat: disruptors and controllers. Outside combat: the most capable investigators, infiltrators, and intelligence gatherers in the game.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Machine Interface 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Interface with any electronic or mechanical system through direct touch. Lock mechanisms, security panels, vehicle controls, networked devices respond to mental commands. Communicate with simple electronic systems and receive basic status information. Advantage on Technology checks. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Machine Interface 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Machine Interface 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Interface range extends beyond touch to Short range (25-50 ft) for networked and electronic systems. Passively sense presence and general function of all active technological systems within Short range without a check. Know when networked systems in your vicinity activate, change state, or are accessed by others. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Machine Interface 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Machine Interface 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Interface extends to Medium range (50-120 ft); penetrate multiple security layers simultaneously. Automatically succeed on Technology checks of DC 20 or lower without rolling. Above DC 20: Advantage + Prowess added twice. Perceive entire logical architecture of any networked system within range as a free action. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Machine Interface 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Machine Interface 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Full Integration for 1 minute: interface range extends to Long range (120-300 ft); control up to INT modifier in separate technological systems simultaneously; all attacks deal maximum damage; immunity to all technological attacks and Overloaded conditions."
      }
    ],
    "powers": [
      {
        "id": "system-shock",
        "name": "System Shock",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Machine Interface 1",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 1\n- Range: Short (25-50 ft) for networked targets \u00b7 Close (0-25 ft) for non-networked\n- Attack: 1d20 + INT + Prowess vs. Dodge\n- Hit: Default damage track (lightning or force). Power Effect Value vs. INT or CON (whichever higher) - Failure: Overloaded (technological) or Dazed (biological) until end of your next Turn; Success: Shaken"
      },
      {
        "id": "system-seizure",
        "name": "System Seizure",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Machine Interface 1 \u00b7 Target must have active technological systems, powered armor,",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 1 \u00b7 Target must have active technological systems, powered armor, cybernetics, or be a technological construct\n- Range: Short (25-50 ft)\n- Attack: 1d20 + INT + Prowess vs. Willpower\n- Hit: Power Effect Value vs. INT - Failure: Power Disrupted + Restrained until end of your next Turn; Success: Power Disrupted only. No effect against purely biological targets with no technological components."
      },
      {
        "id": "network-assault",
        "name": "Network Assault",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Machine Interface 2",
        "creationCost": 2,
        "text": "Prerequisite: Machine Interface 2\n- Range: Short area (20-ft radius within 25-50 ft) - affects all creatures with active technological systems, powered armor, or cybernetics in the area\n- Attack: 1d20 + INT + Prowess vs. Willpower of each valid target\n- Hit: 2 Power Dice lightning damage. Power Effect Value vs. INT - Failure: Overloaded + Power Disrupted; Success: Overloaded only. Purely biological targets in the area are unaffected."
      },
      {
        "id": "control-override",
        "name": "Control Override",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Machine Interface 2 \u00b7 Target must be a vehicle, drone, automated system, or technological",
        "creationCost": 2,
        "text": "Prerequisite: Machine Interface 2 \u00b7 Target must be a vehicle, drone, automated system, or technological construct\n- Range: Short (25-50 ft)\n- Effect: Seize control of the target system until end of your next Turn. Direct its actions on your initiative count as a free action: a vehicle rams passengers or enemies; a drone fires on former operators; automated defenses target their builders; a robot attacks the nearest non-you creature. Original operator may wrest back control with INT vs. Power Effect Value as their Action."
      },
      {
        "id": "feedback-loop",
        "name": "Feedback Loop",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Machine Interface 3",
        "creationCost": 3,
        "text": "Prerequisite: Machine Interface 3 \u00b7 Trigger: A technological power, device, or system targets you or one ally within Short range (25-50 ft) Intercept the attack through your interface and redirect it. The triggering attack or effect is turned back on its source, resolving against their own defenses with the same attack roll result. If this is not possible (area effects, non-directional systems): instead reduce the damage or effect by 3 Power Dice + INT modifier and impose Overloaded on the source system until end of your next Turn."
      },
      {
        "id": "system-collapse",
        "name": "System Collapse",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Machine Interface 3",
        "creationCost": 3,
        "text": "Prerequisite: Machine Interface 3 Cascade a failure through every technological system in range simultaneously.\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Effect: Every non-superpowered electronic and mechanical system in the area shuts down for the remainder of the encounter. Superpowered technological systems and powered armor: INT vs. Power Effect Value - Failure: Overloaded + Power Disrupted for the remainder of the encounter; Success: Overloaded until end of your next Turn. Each creature wearing or integrated with affected technological systems takes 5 Power Dice lightning damage, maximum on all dice, as the cascade sends feedback through their connection."
      }
    ],
    "utilities": [
      {
        "id": "remote-access",
        "name": "Remote Access",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Machine Interface 1",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 1 Access any networked system within Short range (25-50 ft) without physical contact. Unlock doors, disable cameras, access building systems, read data from connected devices, send commands through networks - all as a free action once per Turn. Physical systems not connected to any network still require touch."
      },
      {
        "id": "machine-commune",
        "name": "Machine Commune",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Machine Interface 1",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 1 Receive basic status information and simple impressions from mechanical and electronic devices through touch - fuel level, mechanical condition, tampering status, active processes, recent inputs without login credentials. The machine's immediate experiential state - not full data access."
      },
      {
        "id": "digital-presence",
        "name": "Digital Presence",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Machine Interface 2",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 2 Project your consciousness into a network as a digital avatar. While projected, your body is Unconscious and vulnerable. Your digital form travels through any connected network instantly, accesses data at any node, interfaces with systems throughout the network, and emerges from any networked terminal or device within the network's reach. Sustain for up to one scene. If your body takes damage while projected, you snap back immediately and become Dazed until end of your next Turn."
      },
      {
        "id": "infrastructure-control",
        "name": "Infrastructure Control",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Machine Interface 3",
        "creationCost": 1,
        "text": "Prerequisite: Machine Interface 3 Over one scene of focused interface, take administrative control of a building, facility, or city block's entire technological infrastructure - power grid, communications, security systems, elevators, automated defenses, environmental controls, and networked devices. Monitor everything; control individual systems as free actions; lock out other users for the duration. Remains under your control until you release it, are forcibly disconnected, or the scene ends."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Range",
        "text": "Extended Range: Machine Interface powers requiring Short range (25-50 ft) extend to Medium range (50-120 ft). Passive awareness extends one range band at each Core Track level."
      },
      {
        "name": "Rapid Seizure",
        "text": "Rapid Seizure: System Seizure may now also target biological targets with cybernetic implants, treating the implants as the technological entry point."
      },
      {
        "name": "Smooth Override",
        "text": "Smooth Override: Control Override now lasts until the end of your Turn after next, giving you two full rounds of control."
      },
      {
        "name": "Ghost in the Machine",
        "text": "Ghost in the Machine: While using Digital Presence, your digital form cannot be traced, detected, or attacked by standard security systems - only systems with specifically designed anti-intrusion superpowers can perceive or interact with you."
      }
    ],
    "limitations": [
      {
        "name": "Interface Vulnerability",
        "text": "Interface Vulnerability: Deep connection makes you specifically vulnerable to technological attacks. Attackers using technological powers, powered armor, or machine-based attacks gain Advantage on attack rolls against you and your Power Effect Value decreases by 2 against such attacks. +1 Power Pick."
      },
      {
        "name": "Sensory Overflow",
        "text": "Sensory Overflow: Passive technological awareness is constant and cannot be fully suppressed. In areas of dense technology, Disadvantage on Notice and Insight checks as background machine noise competes with organic senses. +1 Power Pick."
      },
      {
        "name": "Biological Limitation",
        "text": "Biological Limitation: Powers only affect technological, electronic, mechanical, and cybernetic systems. Purely biological targets, mystical constructs, and cosmic entities with no technological component are completely immune to all your Machine Interface powers. +1 Power Pick. Martial Mastery Power Set"
      }
    ]
  },
  {
    "id": "martial-mastery",
    "name": "Martial Mastery",
    "governingAbility": "Choose STR , DEX , or FIG at character creation \u00b7 +1 to chosen score per Core Track step",
    "abilityOptions": [
      "str",
      "dex",
      "fig"
    ],
    "associatedConditions": "Prone, Dazed, Stunned, Restrained, Pinned",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "+1 to chosen Ability Score at each Core Track step",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "Martial Mastery is the Power Set of unparalleled hand-to-hand combat - not peak human skill, but techniques so refined they produce superhuman results. Strikes that drop opponents twice your size. Holds that immobilize beings with supernatural strength. Pressure targeting that disrupts powers and shatters focus. Covers every fighting tradition: wrestlers and grapplers, strikers, weapon masters, brawlers, ancient disciplines. The mechanics describe what the technique does; the tradition behind it is yours to define. FIG - pure combat mastery and timing. STR - power-based fighting styles. DEX - speed and precision-based styles.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Martial Mastery 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to governing Ability Score. Unarmed strikes and martial techniques deal default damage track damage. +1 to all Active Defense rolls while unarmored or in light armor. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Martial Mastery 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Martial Mastery 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to governing Ability Score. Once per encounter when you hit with an unarmed strike, force the target to roll CON vs. Power Effect Value or become Dazed until end of your next Turn. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Martial Mastery 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to governing Ability Score. Unarmed strikes and martial techniques ignore flat damage reduction equal to your Prowess. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Martial Mastery 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Martial Mastery 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to governing Ability Score. Once per day, enter Perfect Form for 1 minute: Advantage on all unarmed attack rolls; may use one additional Combat Power from this set per Turn without spending an additional action."
      }
    ],
    "powers": [
      {
        "id": "brutal-strike",
        "name": "Brutal Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Martial Mastery 1",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track. Strong Success: push Close range (25 ft) or knock Prone."
      },
      {
        "id": "control-hold",
        "name": "Control Hold",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Martial Mastery 1",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Target Grappled. While Grappled: rolls STR vs. Power Effect Value at start of each Turn - Failure: remains Grappled + cannot take Actions; Success: escapes. You move at half speed while maintaining the hold."
      },
      {
        "id": "disabling-strike",
        "name": "Disabling Strike",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 2,
        "text": "Prerequisite: Martial Mastery 2\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track. Power Effect Value vs. CON - Failure: Slowed + loses Bonus Action until end of your next Turn. Strong Success on attack: also loses Reaction until end of your next Turn."
      },
      {
        "id": "momentum-throw",
        "name": "Momentum Throw",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 2,
        "text": "Prerequisite: Martial Mastery 2\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: 2 Power Dice + Governing Ability modifier damage. Target knocked Prone + pushed up to Short range (25-50 ft) in a direction you choose. If they impact a wall, barrier, or another creature during this movement, both take 1 Power Die additional damage."
      },
      {
        "id": "flurry",
        "name": "Flurry",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 2,
        "text": "Prerequisite: Martial Mastery 2 Make two unarmed strike attacks against one target. Both attacks are at Disadvantage per the secondary attacks rule. If both strikes hit, target rolls CON vs. Power Effect Value or becomes Dazed until end of your next Turn."
      },
      {
        "id": "counter",
        "name": "Counter",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Martial Mastery 3",
        "creationCost": 3,
        "text": "Prerequisite: Martial Mastery 3 \u00b7 Trigger: A melee attack targeting you misses Make one unarmed strike against the attacker at Advantage using the default damage track. On a hit, also choose to push the attacker Close range (25 ft) or knock them Prone."
      },
      {
        "id": "finishing-technique",
        "name": "Finishing Technique",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Martial Mastery 3",
        "creationCost": 3,
        "text": "Prerequisite: Martial Mastery 3\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: 6 Power Dice + Governing Ability modifier damage. Power Effect Value vs. CON - Failure: Stunned; Success: Dazed (both until end of your next Turn). Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "combat-awareness",
        "name": "Combat Awareness",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Martial Mastery 1",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 1 Cannot be surprised while conscious. Advantage on Initiative rolls. Does not stack with the Alert Talent - if you have both, choose one source; the benefit is the same."
      },
      {
        "id": "controlled-fall",
        "name": "Controlled Fall",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Martial Mastery 1",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 1 Ignore the first 30 feet (Short range) of falling damage. On any fall, always land on your feet - never knocked Prone by falling damage alone."
      },
      {
        "id": "kinetic-wall-step",
        "name": "Kinetic Wall-Step",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 2 Using momentum and precise footwork, may move along vertical surfaces for one Turn without falling, provided you end your movement on solid ground. Does not require a Speed Action."
      },
      {
        "id": "pressure-point-mastery",
        "name": "Pressure Point Mastery",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Martial Mastery 2",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 2 Outside combat: stabilize a dying creature as a Bonus Action without a Medicine check, or non-lethally incapacitate a willing or restrained creature over 1 minute of work with no lasting harm."
      },
      {
        "id": "iron-body",
        "name": "Iron Body",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Martial Mastery 3",
        "creationCost": 1,
        "text": "Prerequisite: Martial Mastery 3 Flat damage reduction equal to Prowess against unarmed and mundane weapon strikes. Does not stack with Super Durability's flat damage reduction - use the higher value."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Reach",
        "text": "Extended Reach: One Martial Mastery Combat Power of your choice gains +1 range band (Close becomes Short). Define the technique: a spinning kick, a weapon extension, a grapple launch."
      },
      {
        "name": "Improved Control Hold",
        "text": "Improved Control Hold: While maintaining a Control Hold, may use Bonus Action to deal 1 Power Die damage to the held target without making a new attack roll."
      },
      {
        "name": "Signature Technique",
        "text": "Signature Technique: Choose one Tier 1 At-Will Combat Power. Once per encounter when you use it and hit, add Prowess to the damage roll in addition to normal modifiers."
      },
      {
        "name": "Takedown Specialist",
        "text": "Takedown Specialist: When you knock a target Prone with any Martial Mastery power, immediately move up to Close range (25 ft) toward them as a free action without provoking Reactions."
      }
    ],
    "limitations": [
      {
        "name": "Gear Dependent (Weapon Style)",
        "text": "Gear Dependent (Weapon Style): Martial Mastery requires a specific weapon, tool, or focus. Without it, Tier 2 and Tier 3 powers are unavailable and damage track drops by 1 Power Die. +1 Power Pick."
      },
      {
        "name": "Conspicuous Style",
        "text": "Conspicuous Style: Fighting style is distinctive and identifiable. Anyone who has seen you fight once can identify you by your techniques. Attempts to maintain a secret identity after fighting are made at Disadvantage. +1 Power Pick."
      },
      {
        "name": "Exhausting Mastery",
        "text": "Exhausting Mastery: Using Finishing Technique or Perfect Form always causes 1 Burnout, regardless of other factors. +1 Power Pick. Plant Control Power Set"
      }
    ]
  },
  {
    "id": "plant-control",
    "name": "Plant Control",
    "governingAbility": "Choose WIS or CON at character creation",
    "abilityOptions": [
      "con",
      "wis"
    ],
    "associatedConditions": "Restrained (vines/roots), Slowed (undergrowth), Prone (root trip), Poisoned (spores/toxins)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Battlefield control and terrain denial; strongest in environments with plant life",
    "limitationNote": "",
    "description": "Plant Control is the Power Set of mastery over living plant matter - commanding, accelerating, and weaponizing the vast biological infrastructure that already exists everywhere life has taken hold. Plant Control heroes are defined by battlefield control and environmental awareness. Their powers reward preparation and scene awareness: a plant controller who spent a moment before the fight growing tactical entanglements has a different battlefield than everyone else. WIS - mystical and intuitive connection to plant life. CON - biological mastery, cellular kinship.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Plant Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Command existing plant matter within Short range (25-50 ft) and dramatically accelerate plant growth. Grow vines, roots, thorns, and brambles from any available organic surface as a free action, creating difficult terrain in a Close area (15-ft radius) within range. Resistance to poison damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Plant Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Plant Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Range extends to Medium (50-120 ft). Grow a tree to full size in one round; command existing trees to move limbs. Release spores or pollens as area effects. Immunity to poison damage (replaces Resistance). Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Plant Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Plant Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Range extends to Long (120-300 ft). Once per encounter as a free action at start of your Turn, create difficult terrain across an entire Zone within range. Plant attacks ignore Resistance to poison damage; treat Immunity as Resistance. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Plant Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Plant Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter World of Green for 1 minute: plant matter grows throughout the entire battlefield at your direction; all areas become difficult terrain for enemies while remaining clear for you and allies; plant attacks deal maximum damage on the dice; any creature starting their Turn within Close range (25 ft) rolls CON vs. Power Effect Value or takes 1 Power Die poison damage from ambient spores."
      }
    ],
    "powers": [
      {
        "id": "vine-lash",
        "name": "Vine Lash",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Plant Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (bludgeoning or slashing). Strong Success: Power Effect Value vs. STR or Grappled until end of your next Turn as the vine wraps around them."
      },
      {
        "id": "entangle",
        "name": "Entangle",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Plant Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 1\n- Range: Short area (20-ft radius within 25-50 ft)\n- Effect: Area becomes difficult terrain immediately. Each creature in area rolls STR vs. Power Effect Value - Failure: Restrained until end of your next Turn; Success: Slowed until end of your next Turn. Difficult terrain persists until cleared by fire, cutting, or significant physical effort."
      },
      {
        "id": "thorn-volley",
        "name": "Thorn Volley",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Plant Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Plant Control 2\n- Range: Short area (15-ft cone within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice piercing damage + poison damage equal to Prowess. Power Effect Value vs. CON - Failure: Poisoned; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "spore-cloud",
        "name": "Spore Cloud",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Plant Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Plant Control 2\n- Range: Medium area (20-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 1 Power Die poison damage. Power Effect Value vs. CON - Failure: Dazed; Success: Shaken (both until end of your next Turn). Area remains lightly obscured by spores until end of your next Turn."
      },
      {
        "id": "wood-ward",
        "name": "Wood Ward",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Plant Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Plant Control 3 Grow a rapid barrier of dense wood and thorn - wall up to 30 ft long, 10 ft high, 2 ft thick within Short range (25-50 ft). HP equal to 5 x your Level + Governing Ability modifier; Resistance to all damage except fire. Provides full cover. Any creature passing through takes 2 Power Dice piercing damage from thorns and rolls STR vs. Power Effect Value or Slowed until end of their next Turn. Persists until destroyed or end of encounter."
      },
      {
        "id": "forest-assault",
        "name": "Forest Assault",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Plant Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Plant Control 3\n- Range: Long area (entire battlefield within 120-300 ft), all enemies\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each enemy\n- Hit: 5 Power Dice bludgeoning and poison damage, maximum on all dice. Power Effect Value vs. STR - Failure: Restrained for the remainder of the encounter as roots permanently anchor them (freed only by an Action succeeding on STR vs. Power Effect Value); Success: Restrained until end of your next Turn only"
      }
    ],
    "utilities": [
      {
        "id": "plant-growth",
        "name": "Plant Growth",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Plant Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 1 Over one minute, grow any plant to full maturity, create a dense undergrowth across a Close area (15-ft radius), cause plants to flower or fruit out of season, or accelerate existing plant growth to achieve in minutes what would normally take months."
      },
      {
        "id": "toxin-harvest",
        "name": "Toxin Harvest",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Plant Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 1 Extract and concentrate natural plant toxins with a minute of work and access to appropriate plant matter.\nProduce a number of doses equal to Governing Ability modifier per Breather. A dose applied to a weapon: 1 Power Die poison damage on contact + Poisoned if Power Effect Value beats CON Save Value. Doses lose potency after 24 hours."
      },
      {
        "id": "photosynthetic-recovery",
        "name": "Photosynthetic Recovery",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Plant Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 2 In direct sunlight or strong artificial light, recover HP equal to Prowess at the start of each of your Turns through a symbiotic photosynthetic process. Non-stacking - use only the highest value if you have another source of passive per-Turn HP recovery."
      },
      {
        "id": "environmental-reshape",
        "name": "Environmental Reshape",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Plant Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Plant Control 3 Over the course of one scene of focused growth, transform the local environment: grow a forest from scrubland, create an impassable barrier of thorns across a road, purify polluted soil, establish a living fortress of wood and vine, or restore damaged natural environment to health. Work that would take nature decades takes you one scene."
      }
    ],
    "enhancements": [
      {
        "name": "Persistent Entangle",
        "text": "Persistent Entangle: Entangle's Restrained duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Toxic Thorns",
        "text": "Toxic Thorns: When Vine Lash achieves a Strong Success and Grapples a target, the vines also deliver toxins - the Grappled target takes 1 Power Die poison damage at the start of each of their Turns while Grappled."
      },
      {
        "name": "Accelerated Growth",
        "text": "Accelerated Growth: Core Track passive difficult terrain creation extends from a Close area (15-ft radius) to a Short area (20-ft radius) at all Core Track levels."
      },
      {
        "name": "Living Armor",
        "text": "Living Armor: Maintain a constant layer of bark and vine armor - flat damage reduction equal to Prowess against physical damage. Passive; no action to maintain."
      }
    ],
    "limitations": [
      {
        "name": "Environmental Dependency",
        "text": "Environmental Dependency: Powers significantly weaker in environments with no plant life (sterile labs, spacecraft, deep underground, desert wastelands) - Power Effect Value \u22123; damage track \u22121 Power Die; cannot use Entangle, Wood Ward, or Environmental Reshape without first spending an Action to grow seed material from your own biology. +1 Power Pick."
      },
      {
        "name": "Fire Vulnerability",
        "text": "Fire Vulnerability: When you take fire damage exceeding Governing Ability modifier in a single hit, Power Effect Value drops by 2 and difficult terrain effects end immediately until start of your next Turn. Being in an actively burning area makes maintaining plant matter nearly impossible. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Vines grow where they should not. Wood creaks and moves. Spores drift visibly. Stealth while actively using Plant Control powers is impossible. +1 Power Pick. Phasing Power Set"
      }
    ]
  },
  {
    "id": "phasing",
    "name": "Phasing",
    "governingAbility": "Choose CON or INT at character creation",
    "abilityOptions": [
      "con",
      "int"
    ],
    "associatedConditions": "Immobilized (can impose on partially-phased targets), Stunned (Apex only)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Defense through intangibility; infiltration; escape; environment interaction through walls",
    "limitationNote": "",
    "description": "Phasing is the Power Set of intangibility, matter permeation, and selective incorporeality. A phasing hero does not break through walls - they walk through them. Attacks do not deflect off a phaser; they pass through. At lower tiers phasing is precise and deliberate. At higher tiers it becomes fast enough to use in the heat of combat. Phasing carries tactical weight that extends beyond simple defense: phasers can enter secured rooms from outside, escape restraints, and move through architecture as though none of it is an obstacle. The limitation - while phased they cannot interact with the physical world - is as important to play as the capability itself. CON - biological intangibility; phasing is as natural as breathing. INT - calculated, mentally-controlled phasing; disciplined technique requiring active management.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Phasing 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Phase selectively: individual limbs, whole body, or specific objects in contact with you. Phasing requires an Action or Bonus Action to initiate; ends when you choose or when you attack or use a power with a physical effect. While fully phased: cannot be targeted by physical attacks; cannot interact with physical objects; pass through solid matter at normal speed. Fall through floors unless phasing upward or bracing. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Phasing 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Phasing 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Phasing fast enough to use defensively - initiate a full-body phase as a Reaction when targeted by an attack. No longer fall through floors while phased. May pass through solid objects of any thickness. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Phasing 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Phasing 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Phasing sustainable under combat pressure without constant concentration. May maintain a phased state across multiple Turns without spending Actions to renew it. Gained the ability to phase other creatures and objects you touch, willing or not. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Phasing 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Phasing 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Phase Mastery for 1 minute: phase and unphase as a free action on any Turn; movement does not provoke Reactions; Resistance to all physical damage from non-superpowered sources; extend phased state to up to Prowess in creatures or objects simultaneously."
      }
    ],
    "powers": [
      {
        "id": "phase-through",
        "name": "Phase Through",
        "tier": 1,
        "type": "At-Will",
        "action": "Bonus Action",
        "prerequisite": "Phasing 1",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 1 Move up to Close range (25 ft) through solid matter. Does not provoke Reactions during this movement. Must end this movement in open space - cannot end your Turn inside solid matter."
      },
      {
        "id": "disruptive-phase",
        "name": "Disruptive Phase",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Phasing 1",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 1 Reach a phased hand into a target's body and briefly disrupt their physical systems.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: 2 Power Dice + Governing Ability modifier damage, bypassing armor and worn equipment entirely. Power Effect Value vs. CON - Failure: Dazed; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "intangible-dodge",
        "name": "Intangible Dodge",
        "tier": 2,
        "type": "Reaction",
        "action": "Reaction",
        "prerequisite": "Phasing 2",
        "creationCost": 2,
        "text": "Prerequisite: Phasing 2 \u00b7 Trigger: You are hit by an attack Phase the targeted part of your body. The attack passes through harmlessly - the hit becomes a miss. Once used, this Reaction is unavailable until start of your next Turn. Cannot be used against attacks that affect an area or that do not require an attack roll."
      },
      {
        "id": "phase-lock",
        "name": "Phase Lock",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Phasing 2 \u00b7 Requires a solid surface adjacent to the target",
        "creationCost": 2,
        "text": "Prerequisite: Phasing 2 \u00b7 Requires a solid surface adjacent to the target\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Immobilized until end of your next Turn as part of their body is phased into and then solidified against a surface; Success: Slowed only"
      },
      {
        "id": "forced-phase",
        "name": "Forced Phase",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Phasing 3",
        "creationCost": 3,
        "text": "Prerequisite: Phasing 3 Push a target into a half-phased state - present enough to suffer but unable to act.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 4 Power Dice + Governing Ability modifier damage. Power Effect Value vs. CON - Failure: Stunned until end of your next Turn (cannot interact with physical objects, cannot use physical attacks, cannot be targeted by allies' physical abilities); Success: Immobilized only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "walk-through-walls",
        "name": "Walk Through Walls",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Phasing 1",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 1 Outside combat, phase through any solid barrier of any thickness with no time limit. Moving through a wall, vault door, or sealed chamber requires only that you walk at normal speed. Carry whatever you are wearing and holding. Cannot carry other creatures unless you also have Phase Carry."
      },
      {
        "id": "phase-slip",
        "name": "Phase Slip",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Phasing 1",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 1 Once per Turn as a free action, extend your phased state to one object you are carrying or wearing - a lockpick passed through a locked door, a hand slipped through a restraint, a device carried through a wall without triggering sensors. Does not require you to fully phase your body. Objects returned to a solid state in occupied space are pushed to the nearest open space."
      },
      {
        "id": "phase-ambush",
        "name": "Phase Ambush",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Phasing 2",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 2 Phase into a solid surface - wall, floor, or ceiling - and remain inside for up to one scene without harm. While embedded, perceive everything adjacent to the surface. Emerge as a free action on your Turn. Attacks made on the Turn you emerge have Advantage and the target is denied their Active Defense if they were unaware of your presence."
      },
      {
        "id": "phase-carry",
        "name": "Phase Carry",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Phasing 2",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 2 As an Action, extend your phased state to one willing creature touching you or within Close range (25 ft). That creature shares your intangibility completely - passes through matter, cannot interact with physical objects, and is immune to physical attacks. If contact is broken, their phased state ends immediately."
      },
      {
        "id": "matter-permeation",
        "name": "Matter Permeation",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Phasing 3",
        "creationCost": 1,
        "text": "Prerequisite: Phasing 3 Your phased state is now fully passive when you choose. Declare yourself Phased at the start of any scene. While Phased this way, physical objects, environmental hazards, and non-superpowered attacks pass through you automatically with no Reaction required. Interact with the physical world selectively - touching specific objects while remaining intangible to everything else. Ending and resuming this state costs no action."
      }
    ],
    "enhancements": [
      {
        "name": "Phase Speed",
        "text": "Phase Speed: While phased, your movement speed increases by 10 feet."
      },
      {
        "name": "Disruption Reach",
        "text": "Disruption Reach: Disruptive Phase may target creatures at Short range (25-50 ft) rather than requiring Close range."
      },
      {
        "name": "Sustained Intangibility",
        "text": "Sustained Intangibility: May maintain a phased state without it ending when you attack or use powers - your attacks and power effects still work normally while phased."
      },
      {
        "name": "Phase Senses",
        "text": "Phase Senses: While phased inside solid matter, perceive clearly through up to 10 feet of solid material in all directions, not just through surfaces you are adjacent to."
      }
    ],
    "limitations": [
      {
        "name": "Exhausting Phasing",
        "text": "Exhausting Phasing: Maintaining a phased state for longer than one Turn is physically draining. Using Intangible Dodge or maintaining Phase Carry for more than one scene always causes 1 Burnout. +1 Power Pick."
      },
      {
        "name": "Sound and Light Permeable",
        "text": "Sound and Light Permeable: While fully phased, cannot speak above a whisper and cannot use powers producing sound or light-based effects. Still fully visible - phased state does not conceal you. +1 Power Pick."
      },
      {
        "name": "Selective Only",
        "text": "Selective Only: Cannot phase objects or creatures other than yourself under any circumstances. Phase Carry and the Apex's multi-target extension are unavailable. +1 Power Pick."
      },
      {
        "name": "Solid Ground Required",
        "text": "Solid Ground Required: Cannot phase through floors or ground-level surfaces. Can pass through walls, ceilings, and vertical barriers but always need something solid beneath your feet. +1 Power Pick. Precognition Power Set"
      }
    ]
  },
  {
    "id": "precognition",
    "name": "Precognition",
    "governingAbility": "WIS (fixed) \u00b7 +1 to WIS at each Core Track step",
    "abilityOptions": [
      "wis"
    ],
    "associatedConditions": "Shaken (inflicts via forewarned disruption), Dazed (temporal disorientation), Prone (perfectly timed counters)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Wisdom at each Core Track step",
    "tacticalRole": "Predictive combat advantage; Degree of Success manipulation; initiative and information dominance",
    "limitationNote": "",
    "description": "Precognition is the Power Set of foresight, temporal awareness, and the ability to perceive events before they occur. Not guessing - actual knowledge of what is coming: the attack that has not landed yet, the trap that has not been triggered, the outcome of a decision that has not been made. A precognitive hero does not react to the world. They position themselves in relation to a future they can already see.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Precognition 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to Wisdom. Cannot be surprised while conscious. Advantage on Initiative rolls. Once per scene, ask the GM one direct question about what is most likely to happen next in the current situation - the GM answers honestly based on the current trajectory of events. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Precognition 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Precognition 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to Wisdom. At the start of each encounter, before initiative is rolled, declare one specific action or attack that one enemy will take during the first round - if that action occurs, gain Advantage on the relevant Active Defense roll or Skill check to respond to it. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Precognition 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Precognition 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to Wisdom. Once per Turn as a free action, raise your own Degree of Success by one step or reduce an opponent's Degree of Success by one step on any roll you can perceive. (Failure -> Normal Success -> Strong Success -> HEROIC Success, or in reverse.) Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Precognition 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Precognition 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to Wisdom. Once per day, use Inevitability : either (a) before any d20 roll is made by any creature you can perceive, declare the outcome - it occurs regardless of what is rolled (cannot declare instant death or physically impossible outcome); or (b) after any d20 roll is made, shift the Degree of Success by one step in either direction - this does not cost your once-per-Turn free action and may be used in addition to your Core Track 3 shift on the same Turn."
      }
    ],
    "powers": [
      {
        "id": "forewarned",
        "name": "Forewarned",
        "tier": 1,
        "type": "At-Will",
        "action": "Reaction",
        "prerequisite": "Precognition 1",
        "creationCost": 1,
        "text": "Prerequisite: Precognition 1 \u00b7 Trigger: Any attack targets you that you can perceive before it resolves Add your WIS modifier to your Active Defense roll against that attack. You saw it coming before it started."
      },
      {
        "id": "precognitive-counter",
        "name": "Precognitive Counter",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Precognition 1",
        "creationCost": 1,
        "text": "Prerequisite: Precognition 1 \u00b7 Trigger: An attack against you misses You positioned yourself perfectly for exactly this miss. Make one immediate unarmed or basic attack against the attacker at Advantage using the default damage track. On a hit, the attacker is Shaken until end of their next Turn."
      },
      {
        "id": "temporal-strike",
        "name": "Temporal Strike",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Precognition 2",
        "creationCost": 2,
        "text": "Prerequisite: Precognition 2 Attack not where the target is but where you know they will be.\n- Range: Close (0-25 ft)\n- Attack: 1d20 + WIS + Prowess vs. the target's lowest Active Defense. Ignores any Advantage the target has on their Active Defense roll this Turn since you saw through it.\n- Hit: Default damage track + WIS modifier again. Power Effect Value vs. WIS - Failure: Dazed; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "future-sight",
        "name": "Future Sight",
        "tier": 2,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Precognition 2",
        "creationCost": 2,
        "text": "Prerequisite: Precognition 2 Share a glimpse of the immediate future with one ally within Short range (25-50 ft). Until start of your next Turn, that ally gains Advantage on one Active Defense roll or one attack roll of their choice. Once they use the Advantage, the effect ends."
      },
      {
        "id": "inevitable-outcome",
        "name": "Inevitable Outcome",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Precognition 3",
        "creationCost": 3,
        "text": "Prerequisite: Precognition 3 \u00b7 Trigger: Any creature within Short range (25-50 ft) makes a roll you can perceive Apply your Core Track 3 Degree of Success shift to this roll as a Reaction rather than waiting for your free action. This does not consume your Core Track 3 free action for the Turn - you may still use it separately this Turn."
      },
      {
        "id": "probability-cascade",
        "name": "Probability Cascade",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Precognition 3",
        "creationCost": 3,
        "text": "Prerequisite: Precognition 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: 5 Power Dice psychic damage. Power Effect Value vs. WIS - Failure: Stunned until end of your next Turn (overwhelmed by visions of their own possible deaths); Success: Dazed only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "read-the-room",
        "name": "Read the Room",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Precognition 1",
        "creationCost": 1,
        "text": "Prerequisite: Precognition 1 At the start of any social or investigation scene, ask the GM two questions from: What is the most significant hidden danger here? What does the most influential person in this scene most want? What is the most likely outcome if this scene continues on its current path? What is the single most important piece of information in this environment? The GM answers honestly based on current conditions."
      },
      {
        "id": "fated-step",
        "name": "Fated Step",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Precognition 1",
        "creationCost": 1,
        "text": "Prerequisite: Precognition 1 You always find parking. You always take the route that avoids the accident. Once per session, when a random environmental event or coincidence would negatively affect you, declare that you anticipated it. The event still occurs but you are not in its path."
      },
      {
        "id": "temporal-map",
        "name": "Temporal Map",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Precognition 2",
        "creationCost": 1,
        "text": "Prerequisite: Precognition 2 Once per scene, spend one minute in quiet focus and receive a vision of what occurred in the current\nlocation within the last 24 hours. The GM describes the single most significant event that happened here: who was present, what they did, and one piece of information they left behind. A reliable investigative tool, not an exhaustive replay."
      },
      {
        "id": "fated-intervention",
        "name": "Fated Intervention",
        "tier": 3,
        "type": "Daily",
        "action": "Reaction",
        "prerequisite": "Precognition 3",
        "creationCost": 3,
        "text": "Prerequisite: Precognition 3 \u00b7 Trigger: Any attack or effect that would hit you or one ally within Short range (25-50 ft) You saw this coming far enough in advance to position everything perfectly. The attack or effect automatically misses or fails entirely - no roll required. Cannot be refreshed by Edge spending, Team Combos, or any other resource recovery mechanism. Fires once per day only."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Future Sight",
        "text": "Extended Future Sight: Future Sight may now target two allies within Short range simultaneously."
      },
      {
        "name": "Improved Counter",
        "text": "Improved Counter: Precognitive Counter deals an additional Power Die of damage on a hit."
      },
      {
        "name": "Cascading Vision",
        "text": "Cascading Vision: When your Core Track 3 Degree of Success shift changes the outcome from a failure to any Success, gain Advantage on your next roll before end of your next Turn as correct predictions compound."
      },
      {
        "name": "Temporal Awareness",
        "text": "Temporal Awareness: Once per encounter, act on your Turn as if you had the highest initiative count regardless of what you rolled."
      }
    ],
    "limitations": [
      {
        "name": "Visions of Violence",
        "text": "Visions of Violence: When in the presence of imminent large-scale violence or disaster, GM may trigger an uninvited vision - Dazed until end of your next Turn as the future floods your perception. +1 Power Pick."
      },
      {
        "name": "Fixed Future Dependency",
        "text": "Fixed Future Dependency: Powers work best when you have had time to observe and calculate. Against creatures or situations you have had no prior exposure to, Precognition powers that reference prior observation do not function until you have spent at least one round perceiving the new situation. +1 Power Pick."
      },
      {
        "name": "Temporal Fatigue",
        "text": "Temporal Fatigue: Using Inevitability, Probability Cascade, or Fated Intervention in the same session causes 1 Burnout regardless of other factors. +1 Power Pick. Reality Control Power Set"
      }
    ]
  },
  {
    "id": "reality-control",
    "name": "Reality Control",
    "governingAbility": "Choose WIS or CHA at character creation",
    "abilityOptions": [
      "wis",
      "cha"
    ],
    "associatedConditions": "Any condition (can remove from allies); Any condition (can impose on enemies via edit); Power Disrupted (editing a power out of having worked)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Most powerful single capability in the game at high tier; retroactive event editing; bounded by the rule that play must keep moving",
    "limitationNote": "",
    "description": "Reality Control is the Power Set of altering what is true - not what appears to be true, but what actually is true. An attack that already landed can be made to have missed. A wall that exists can be made to not exist. Reality Control heroes carry enormous dramatic weight. The ethical questions their power raises are not abstract. The power is bounded by the rule that the game has to keep moving: Reality Control produces edits, not complete rewrites. It changes specific moments, not entire histories. WIS - disciplined practitioner; perceptual and philosophical clarity to perceive the structure of events. CHA - intuitive reality warper; the universe bends to accommodate their sense of how things should be.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Reality Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Make small edits to immediate physical reality within Close range (25 ft). Objects may be moved, altered, or briefly replaced. Create simple objects lasting one scene before dissolving. Advantage on saves against illusions and reality-altering effects from other sources. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Reality Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Reality Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Reality edits extend to Short range (25-50 ft) and become significant enough to affect the outcome of events - change what material a surface is made of, alter a projectile's trajectory in flight, create solid barriers for one scene. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Reality Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Reality Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Edits extend to Medium range (50-120 ft) and reach backward into events that have just occurred - alter something that happened within the last round. Once per encounter as a free action, immediately end one condition affecting you or one ally within range by editing the event that caused it out of having occurred. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Reality Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Reality Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Reality Mastery for 1 minute: edits extend to Long range (120-300 ft); use one Reality Control Encounter Power per Turn as a free action in addition to normal actions; once during this period make an edit large enough to affect the outcome of an entire scene (GM determines scope)."
      }
    ],
    "powers": [
      {
        "id": "reality-edit",
        "name": "Reality Edit",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Reality Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 1\nMake a small immediate change to physical reality affecting the current combat situation. Choose one: create a solid 5-foot object in an unoccupied space (providing half cover); alter ground in a Close area (15-ft radius) to difficult terrain; change composition of one object within range to a harmless material for one round; redirect one unattended projectile or moving object to a new path."
      },
      {
        "id": "retroactive-miss",
        "name": "Retroactive Miss",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Reality Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 1 \u00b7 Trigger: An attack hits you or one ally within Close range (25 ft) \u00b7 May only be used once per encounter Edit the moment of the attack. The attack is retroactively a miss - the damage does not apply. Cannot be used against attacks that were HEROIC Successes."
      },
      {
        "id": "probability-shift",
        "name": "Probability Shift",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Reality Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Reality Control 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: until end of your next Turn, target has Disadvantage on all rolls and any roll that would normally succeed on a natural 20 instead succeeds only on a natural 20 that also beats the relevant DC or defense value; Success: Disadvantage on their next roll only"
      },
      {
        "id": "rewrite-moment",
        "name": "Rewrite Moment",
        "tier": 2,
        "type": "Encounter",
        "action": "Action \u00b7 Once per encounter",
        "prerequisite": "Reality Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Reality Control 2\nReach back into the last round (since the start of your last Turn) and change what happened. Options: one attack that hit becomes a miss; one condition that was applied is removed as though it never occurred; one resource that was spent (Encounter Power, Hit Die, single use of Edge) is restored; one piece of damage that was dealt is halved. Cannot restore someone who died this round."
      },
      {
        "id": "unmake",
        "name": "Unmake",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Reality Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Reality Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: one chosen Power Set Power Disrupted for the remainder of the encounter (passive benefits suppressed, active powers unavailable, Sustained Powers end immediately); Success: Power Disrupted until end of your next Turn only"
      },
      {
        "id": "reality-assault",
        "name": "Reality Assault",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Reality Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Reality Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: 5 Power Dice psychic damage as the dissonance between edited and unedited reality tears through their consciousness. Power Effect Value vs. WIS - Failure: Stunned until end of your next Turn + you may apply any two conditions from the standard Conditions list simultaneously\n(these conditions have their normal duration); Success: Dazed only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "perception-of-truth",
        "name": "Perception of Truth",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Reality Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 1 Automatically see through mundane disguises and non-magical illusions. Magical, psychic, or superpowered illusions and disguises require you to roll WIS vs. the creator's Power Effect Value to see through - but you always get this roll even when others would not think to look."
      },
      {
        "id": "object-creation",
        "name": "Object Creation",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Reality Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 2 As an Action, create one object of up to 50 pounds and 5 cubic feet from nothing - made of a mundane material you specify (wood, stone, metal, fabric, glass), functions as that material would. Persists for one scene before dissolving. Cannot create complex mechanical or electronic objects; living matter; or specific valuable items in quantities that would meaningfully alter the campaign economy."
      },
      {
        "id": "reality-stabilization",
        "name": "Reality Stabilization",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Reality Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 2 As an Action, stabilize the local reality against alteration within Close range (25 ft) for one scene. Teleportation requires WIS Save Value meeting or beating your Power Effect Value roll to succeed. Dimensional effects suppressed. Other reality-altering powers have Disadvantage on attack rolls or impose increased DCs on saves within the field. Does not affect your own powers."
      },
      {
        "id": "history-edit",
        "name": "History Edit",
        "tier": 3,
        "type": "Utility",
        "action": "Once per session",
        "prerequisite": "Reality Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Reality Control 3 With at least 10 minutes of focused concentration, make a small but real change to recent history - something that occurred within the last 24 hours that affected a single person, object, or location. The change must be plausible given the circumstances and cannot have prevented a death. The GM determines what adjustments to the current situation follow from the historical edit. Not a time travel power - a very precise reality edit with a longer temporal reach."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Retroactive Miss",
        "text": "Extended Retroactive Miss: Retroactive Miss may now be used against HEROIC Success attacks as well as normal hits. The once-per-encounter limit remains."
      },
      {
        "name": "Efficient Editing",
        "text": "Efficient Editing: Rewrite Moment may now also restore one spent Daily Power that was used within the last round."
      },
      {
        "name": "Probability Cascade",
        "text": "Probability Cascade: When Probability Shift causes Disadvantage on all rolls through a failed save, the target also cannot benefit from Edge spending until end of their next Turn."
      },
      {
        "name": "Reality Anchor",
        "text": "Reality Anchor: You become immune to other reality-altering effects, illusions, and Banished conditions."
      }
    ],
    "limitations": [
      {
        "name": "Psychic Cost",
        "text": "Psychic Cost: Every use of an Encounter or Daily Reality Control power costs 1 Burnout in addition to any other costs. At Burnout 5, Encounter and Daily powers are unavailable until you recover. +1 Power Pick."
      },
      {
        "name": "Scope Limitation",
        "text": "Scope Limitation: Cannot edit situations you have no direct knowledge of; cannot make edits requiring understanding of complex systems you do not possess; cannot edit events involving creatures or locations outside your perception range. +1 Power Pick."
      },
      {
        "name": "Instability",
        "text": "Instability: Using your Apex power or History Edit introduces minor reality instabilities in the surrounding area for the rest of the session - the GM may introduce small unexpected changes to the environment (a door that was open is now closed, a resource slightly depleted, etc.). Not punishments but natural interference pattern of significant reality editing. +1 Power Pick. Regeneration Power Set"
      }
    ]
  },
  {
    "id": "regeneration",
    "name": "Regeneration",
    "governingAbility": "CON (fixed) \u00b7 +1 to CON at each Core Track step \u00b7 No attack rolls - defense and recovery Power Set",
    "abilityOptions": [
      "con"
    ],
    "associatedConditions": "Poisoned (resists and removes), Burning (resists), Stunned (resists via rapid recovery), Shaken (resists)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Constitution at each Core Track step Stacking NotePassive per-Turn HP recovery from multiple sources does not stack - use only the highest value",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "Regeneration is the Power Set of the body that refuses to stay damaged - not healing faster than normal but something categorically different: a biological process so accelerated that wounds close in seconds, severed tissue reconnects in minutes, and toxins are metabolized before they can cause harm. Regeneration heroes are persistent rather than invincible. The danger is anything that removes them from the fight faster than they can recover: instant incapacitation, power negation, or damage that exceeds even extraordinary biological repair rates in a single catastrophic hit.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Regeneration 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to CON. At the start of each of your Turns, regain HP equal to your Prowess. Non-stacking rule applies. Resistance to poison damage; Advantage on saves against the Poisoned condition. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Regeneration 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Regeneration 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to CON. At the start of each of your Turns, regain HP equal to Prowess + CON (replaces Tier 1 rate entirely). Immunity to poison damage; automatically end the Poisoned condition at start of each Turn. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Regeneration 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Regeneration 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to CON. At the start of each of your Turns, regain HP equal to 1 Power Die + CON (replaces all previous rates). Resistance to fire damage. Once per encounter, end one ongoing condition affecting you at the start of your Turn as a free action in addition to healing. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Regeneration 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Regeneration 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to CON. Per-Turn healing becomes 2 Power Dice + CON (replaces all previous rates). Once per day, when you would be reduced to 0 HP, drop to 1 HP instead - healing fires immediately at start of your next Turn. Cannot trigger if damage exceeds your maximum HP in a single instance. The Non-Stacking Rule - Restated Here for Clarity Always Use Only the Highest Value Passive per-Turn HP recovery from multiple sources does not stack. If you have Regeneration and any other source of passive per-Turn HP recovery, you use only the highest applicable value - do not add them together. This rule exists because the math breaks without it: combined passive healing at World Class can outpace incoming damage from a single attacker entirely. The Regeneration Power Set is already powerful. It does not need to be combined with other passive healing to function."
      }
    ],
    "powers": [
      {
        "id": "resilient-surge",
        "name": "Resilient Surge",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Regeneration 1",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 1 \u00b7 Trigger: You take damage Trigger an accelerated healing surge in response to damage. Immediately regain HP equal to Prowess + CON. This is in addition to your normal per-Turn healing and does not trigger the non-stacking rule since it is an active triggered effect."
      },
      {
        "id": "pain-nullification",
        "name": "Pain Nullification",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Regeneration 1",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 1 \u00b7 Trigger: You would gain Shaken, Dazed, or Stunned from a physical source (not psychic) Your accelerated biology processes the physical trauma before it can affect your function. Negate the condition entirely. You still take any associated damage."
      },
      {
        "id": "accelerated-recovery",
        "name": "Accelerated Recovery",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Regeneration 2",
        "creationCost": 2,
        "text": "Prerequisite: Regeneration 2 Focus your biological regeneration into a burst of accelerated healing. Immediately regain HP equal to 3 Power Dice + CON. Also end one of the following conditions currently affecting you: Burning, Poisoned, Slowed, or Restrained (if restraint is biological, chemical, or physical rather than energy-based)."
      },
      {
        "id": "biological-resistance",
        "name": "Biological Resistance",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Regeneration 2",
        "creationCost": 2,
        "text": "Prerequisite: Regeneration 2 \u00b7 Trigger: You take damage from a specific damage type Your biology adapts in real time. Until end of the encounter, gain Resistance to the triggering damage type. If you already have Resistance to that type, instead reduce the incoming damage by Prowess as your biology pushes past normal limits."
      },
      {
        "id": "endure",
        "name": "Endure",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Regeneration 3",
        "creationCost": 3,
        "text": "Prerequisite: Regeneration 3 \u00b7 Trigger: You take damage that would reduce you below half your maximum HP Absorb the damage and keep moving. Reduce incoming damage by 2 Power Dice + CON. If this reduction would bring damage to 0, you instead take 1 damage (damage cannot be reduced to 0 by this effect). You do not gain the Bloodied condition this Turn even if you would otherwise qualify."
      },
      {
        "id": "total-regeneration",
        "name": "Total Regeneration",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Regeneration 3 \u00b7 Cannot use while Unconscious",
        "creationCost": 3,
        "text": "Prerequisite: Regeneration 3 \u00b7 Cannot use while Unconscious Push your regeneration to its absolute limit. Immediately regain HP equal to half your maximum HP, rounded up. End all ongoing conditions currently affecting you regardless of source. Reattach or regrow lost biological components if any have been severed or destroyed this encounter (GM determines feasibility for extreme cases)."
      }
    ],
    "utilities": [
      {
        "id": "toxin-immunity",
        "name": "Toxin Immunity",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Regeneration 1",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 1 Immune to all ordinary toxins, venoms, drugs, alcohol, airborne chemical hazards, and natural diseases. Supernatural, cosmic, or specifically engineered biological agents designed to affect beings with your physiology may still affect you at GM discretion. Replaces the need for the Toxin Resistance General Utility."
      },
      {
        "id": "accelerated-stabilization",
        "name": "Accelerated Stabilization",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Regeneration 1",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 1 When an ally within Close range (25 ft) is dying, touch them as a Bonus Action to immediately stabilize without a Medicine check. They regain 1 HP and stop making saves."
      },
      {
        "id": "limb-regeneration",
        "name": "Limb Regeneration",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Regeneration 2",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 2 Over the course of one Downtime period, regenerate a lost or severely damaged biological component: a limb, an organ, or similar. Does not function during combat or even during a Breather - full biological regrowth requires extended recovery time even for a world-class regenerator."
      },
      {
        "id": "biological-adaptation",
        "name": "Biological Adaptation",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Regeneration 3",
        "creationCost": 1,
        "text": "Prerequisite: Regeneration 3 Over the course of one Breather, adapt your biology to a specific environmental threat you have been exposed to - become immune to the passive environmental hazards of that specific type for the remainder of the session. Only one active Biological Adaptation at a time."
      }
    ],
    "enhancements": [
      {
        "name": "Accelerated Surge",
        "text": "Accelerated Surge: Resilient Surge may be used twice per encounter before requiring a Breather to recharge."
      },
      {
        "name": "Rapid Condition Clearing",
        "text": "Rapid Condition Clearing: Your Core Track 3 once-per-Turn condition removal applies starting at Core Track 2 instead."
      },
      {
        "name": "Contagious Recovery",
        "text": "Contagious Recovery: When you use Accelerated Recovery on yourself, one ally within Close range (25 ft) may spend one Hit Die as a free action, taking the higher of the roll or the median value."
      },
      {
        "name": "Adaptation Speed",
        "text": "Adaptation Speed: Biological Resistance now triggers at the start of your Turn rather than as a Reaction, applying to all incoming damage of that type from the first hit onward."
      }
    ],
    "limitations": [
      {
        "name": "Power Negation Vulnerability",
        "text": "Power Negation Vulnerability: Any power, substance, or condition that specifically targets biological regeneration or healing suppresses your per-Turn passive healing for the duration. Define the suppression method with the GM - it should appear in play with some regularity. +1 Power Pick."
      },
      {
        "name": "Slow Against Overwhelming Force",
        "text": "Slow Against Overwhelming Force: When you take damage exceeding your maximum HP divided by 4 from a single hit, your per-Turn healing does not apply at the start of your next Turn as your biology is overwhelmed. You heal normally the Turn after. +1 Power Pick."
      },
      {
        "name": "Biological Only",
        "text": "Biological Only: Regeneration only addresses biological damage. Force fields, energy constructs, psychic constructs, and similar non-physical damage types are not addressed by your biological repair processes any faster than for an unenhanced hero. Per-Turn healing applies only to damage that left a biological wound. +1 Power Pick. Shadow Control Power Set"
      }
    ]
  },
  {
    "id": "shadow-control",
    "name": "Shadow Control",
    "governingAbility": "Choose WIS , CHA , or INT at character creation",
    "abilityOptions": [
      "int",
      "wis",
      "cha"
    ],
    "associatedConditions": "Blinded (darkness), Frightened, Restrained (shadow tendrils), Shaken (fear)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Offense + control + psychological warfare; darkness as physical medium for movement and combat",
    "limitationNote": "",
    "description": "Shadow Control is the Power Set of darkness, concealment, fear, shadow constructs, umbral movement, and living darkness. Not the absence of light but something with presence and weight: shadows that move with intention, darkness that presses against you like a physical thing, tendrils of void that restrain and crush. Shadow Control heroes operate at the intersection of offense, control, and psychological warfare. WIS - mystical attunement to shadow, disciplined mastery of something ancient. CHA - projected force of personality expressed through darkness. INT - calculated manipulation of light absorption and shadow physics.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Shadow Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Deepen shadows, dim light sources, and command darkness within Short range (25-50 ft). Advantage on Stealth checks in dim light or darkness. See normally in darkness including magical darkness. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Shadow Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Shadow Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Shadows become semi-solid and mobile. May move through spaces occupied by other creatures as difficult terrain while in dim light or darkness. Creatures in your shadow aura within Close range (25 ft) have Disadvantage on Notice checks. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Shadow Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Shadow Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Darkness becomes supernatural and overwhelming. Tier 3 access. Once per encounter when a Shadow Control power imposes Blinded, Frightened, or Restrained, the target has Disadvantage on their first save to end or resist that condition. Shadow aura extends to Short range (25-50 ft)."
      },
      {
        "id": "core-4",
        "name": "Shadow Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Shadow Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Shadow Form for 1 minute: become living shadow - Resistance to all physical damage from non-superpowered sources; move through any opening wide enough for light; movement does not provoke Reactions; any creature starting their Turn within Short range (25-50 ft) rolls WIS vs. Power Effect Value or becomes Frightened of you until the start of their next Turn."
      }
    ],
    "powers": [
      {
        "id": "shadow-lash",
        "name": "Shadow Lash",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Shadow Control 1 \u00b7 Damage type: cold or necrotic (choose at character creation)",
        "creationCost": 1,
        "text": "Prerequisite: Shadow Control 1 \u00b7 Damage type: cold or necrotic (choose at character creation)\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track. Strong Success: Shaken until end of your next Turn."
      },
      {
        "id": "fear-shape",
        "name": "Fear Shape",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shadow Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Shadow Control 1 Sculpt the shadows into the shape of a target's deepest fear, visible only to them. No effect on creatures that cannot see or that are immune to fear.\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Frightened of you; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "darkness-field",
        "name": "Darkness Field",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shadow Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Shadow Control 2 Flood an area with supernatural darkness that normal vision and most enhanced senses cannot penetrate. You may see normally within it. Light sources within the area are suppressed. Creatures entering the area from outside roll WIS vs. Power Effect Value or are Shaken until end of their next Turn from the sudden disorienting blindness.\n- Range: Short area (20-ft radius within 25-50 ft)\n- Duration: Magical darkness until end of your next Turn"
      },
      {
        "id": "shadow-bind",
        "name": "Shadow Bind",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shadow Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Shadow Control 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Restrained by animated shadows until end of your next Turn (also in dim light regardless of ambient lighting - Disadvantage on their attack rolls); Success: Slowed only"
      },
      {
        "id": "shadow-grasp",
        "name": "Shadow Grasp",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Shadow Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Shadow Control 3 \u00b7 Trigger: A creature within Short range (25-50 ft) moves or takes an action Shadows lash out before the triggering action resolves. The creature rolls STR vs. Power Effect Value - Failure: Restrained until end of their next Turn; their triggering action has Disadvantage if it requires movement or a physical action. Success: Slowed only; action proceeds normally."
      },
      {
        "id": "terror-eclipse",
        "name": "Terror Eclipse",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Shadow Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Shadow Control 3\n- Range: Medium area (30-ft radius within 50-120 ft), all enemies\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower of each enemy\n- Hit: 5 Power Dice cold or necrotic damage, maximum on all dice. Power Effect Value vs. WIS - Failure: Frightened for the remainder of the encounter (must use movement to increase distance from you on each Turn if able); Success: Frightened until end of your next Turn only. The entire area becomes magical darkness for the remainder of the encounter."
      }
    ],
    "utilities": [
      {
        "id": "shadow-hide",
        "name": "Shadow Hide",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shadow Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Shadow Control 1 In any area of dim light or darkness, attempt to Hide as a free action rather than an Action. Move at full speed while Hidden in darkness without automatically revealing yourself. Standard rules for breaking the Hidden condition still apply."
      },
      {
        "id": "dim-light-step",
        "name": "Dim Light Step",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shadow Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Shadow Control 1 As a Bonus Action, step through shadow to emerge from another shadow. Teleport up to Close range (25 ft) between any two points of dim light or darkness you can perceive. Does not provoke Reactions. If no shadow exists at the destination, the power fails and the Bonus Action is spent."
      },
      {
        "id": "shadow-walk",
        "name": "Shadow Walk",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shadow Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Shadow Control 2 As an Action, step into the shadow dimension and emerge from any shadow within Medium range (50-120 ft) you can perceive. May bring one willing creature. The transit is instantaneous and does not provoke Reactions. Passenger: WIS vs. Power Effect Value or Shaken until end of their next Turn from the transit through cold darkness."
      },
      {
        "id": "living-darkness",
        "name": "Living Darkness",
        "tier": 3,
        "type": "Sustained",
        "action": "Bonus Action to maintain",
        "prerequisite": "Shadow Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Shadow Control 3 Maintain a field of supernatural darkness extending to Short range (25-50 ft) around you. This darkness moves with you. Creatures without your ability to see in magical darkness treat the area as heavily obscured. You can selectively exclude specific creatures from the darkness - allies see normally while enemies are blinded. Sustaining costs a Bonus Action at the start of each Turn."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Fear Shape",
        "text": "Extended Fear Shape: Fear Shape now affects up to two targets within Short range (25-50 ft) simultaneously, projecting individualized fears to each."
      },
      {
        "name": "Deepened Darkness",
        "text": "Deepened Darkness: Darkness Field's radius increases to 30-ft radius and the magical darkness is impenetrable to all non-magical enhanced senses including tremorsense and echolocation."
      },
      {
        "name": "Shadow Tendril Reach",
        "text": "Shadow Tendril Reach: Shadow Bind's range increases to Medium (50-120 ft)."
      },
      {
        "name": "Persistent Terror",
        "text": "Persistent Terror: When Terror Eclipse applies Frightened for the remainder of the encounter, the Frightened target also has Disadvantage on all attack rolls for the duration."
      }
    ],
    "limitations": [
      {
        "name": "Light Vulnerability",
        "text": "Light Vulnerability: Bright supernatural or divine light suppresses your powers - Power Effect Value \u22123; shadow movement utilities unavailable; Darkness Field immediately dispelled. Ordinary bright light does not trigger this. +1 Power Pick."
      },
      {
        "name": "Emotional Resonance",
        "text": "Emotional Resonance: Fear-based powers require focused menace. When you are Shaken or Frightened yourself, fear-inflicting powers have Disadvantage on attack rolls and Power Effect Value for fear effects drops by 2. +1 Power Pick."
      },
      {
        "name": "Darkness Bound",
        "text": "Darkness Bound: Shadow movement utilities require ambient shadow or darkness. In areas of full bright light with no shadows present, Dim Light Step and Shadow Walk are unavailable. Stealth Advantage from Core Track 1 also does not apply in bright light. +1 Power Pick. Shapechanging Power Set"
      }
    ]
  },
  {
    "id": "shapechanging",
    "name": "Shapechanging",
    "governingAbility": "Choose CON or WIS at character creation",
    "abilityOptions": [
      "con",
      "wis"
    ],
    "associatedConditions": "",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Adaptability and creativity; resists Grappled/Restrained via form change; visual deception; biological versatility RestrictionCannot replicate technological, cosmic, or magical powers - biology only",
    "limitationNote": "",
    "description": "Shapechanging is the Power Set of biological potential without limit - not taking on a few animal traits or shifting between two forms, but the ability to become anything that biology can express. Shapechanging heroes are defined by adaptability and creativity. Every encounter is a question of what form serves this moment best. The limitation is the imagination of the player and the biological plausibility threshold the GM maintains: Shapechanging produces biology, not magic. A shapechanger cannot become a robot or generate energy blasts from nowhere. CON - biological mastery, cellular command; physical process driven by metabolic control. WIS - intuitive transformation; flows from instinct and empathy with other life forms.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Shapechanging 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Alter physical appearance within your approximate size and biological category. Mimic the appearance of a specific person observed for at least one minute (close inspection or interaction may reveal deception). Take animal forms of roughly your own size: gain natural movement modes and one natural weapon dealing default damage track damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Shapechanging 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Shapechanging 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Transformations extend across size categories - Tiny to Large. Large forms: +STR equal to CON, natural armor +2 to all Active Defense rolls. Small forms: Advantage on Stealth; access spaces no larger creature could enter. Can replicate biological features of creatures observed in detail: gills, echolocation, venom glands, natural armor, enhanced musculature. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Shapechanging 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Shapechanging 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Transformations reach extreme scales - microscopic to Huge. Huge forms: STR equal to CON + Prowess; natural weapon damage +1 Power Die; Disadvantage on Parry/Block rolls against your attacks from sheer size. Sustain partial transformations indefinitely. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Shapechanging 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Shapechanging 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Perfect Form for 1 minute: change form as a free action; transformations instantaneous; maintain up to three partial transformations simultaneously; mimicry is biologically perfect - supernatural detection methods require a roll against your Power Effect Value to see through your disguise."
      }
    ],
    "powers": [
      {
        "id": "adaptive-strike",
        "name": "Adaptive Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Shapechanging 1",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track. Choose damage type at point of attack based on current form: slashing (claws/talons), piercing (fangs/horns/beak), or bludgeoning (fists/tail/bulk). Strong Success: push Close range, knock Prone, or Shaken until end of your next Turn."
      },
      {
        "id": "crushing-mass",
        "name": "Crushing Mass",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shapechanging 1 \u00b7 Must be able to become at least one size category larger",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 1 \u00b7 Must be able to become at least one size category larger\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track + 1 additional Power Die from sheer mass. Power Effect Value vs. STR - Failure: knocked Prone + pushed Close range; Success: knocked Prone only"
      },
      {
        "id": "monstrous-form",
        "name": "Monstrous Form",
        "tier": 2,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Shapechanging 2",
        "creationCost": 2,
        "text": "Prerequisite: Shapechanging 2 Shift into a combat-optimized form. Until start of your next Turn, choose two of the following biological adaptations: Armored Hide (+3 to all Active Defense rolls); Venomous Strike (next natural weapon hit applies Poisoned if Power Effect Value beats CON Save Value); Prehensile Limbs (Advantage on grapple checks; grapple as free action after hitting with natural weapon); Heightened Speed (Speed +15 ft; movement does not provoke Reactions this Turn); Threatening Display (CHA + Prowess vs. one creature within Short range's WIS Save Value - success: Shaken until end of your next Turn). Only one Monstrous Form active at a time."
      },
      {
        "id": "engulf",
        "name": "Engulf",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shapechanging 2 \u00b7 Must be Large or larger \u00b7 Target must be at least one size category",
        "creationCost": 2,
        "text": "Prerequisite: Shapechanging 2 \u00b7 Must be Large or larger \u00b7 Target must be at least one size category smaller\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Power Effect Value vs. STR or DEX (whichever higher) - Failure: Restrained + Blinded inside your mass until end of your next Turn; takes 1 Power Die + Governing Ability modifier damage per Turn. Success: Grappled only."
      },
      {
        "id": "perfect-mimic",
        "name": "Perfect Mimic",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Shapechanging 3",
        "creationCost": 3,
        "text": "Prerequisite: Shapechanging 3 Replicate the biological capabilities of one creature you can perceive within Short range (25-50 ft) with such precision that you gain access to their physical power expression. Until end of the encounter, gain access to one of their biological or physical At-Will powers (not technological, cosmic, or magical). Use your own Governing Ability and Prowess for any rolls the mimicked power requires. May only mimic one creature at a time."
      },
      {
        "id": "mass-assault",
        "name": "Mass Assault",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Shapechanging 3 \u00b7 Shift to Huge size as part of this power at no additional action cost",
        "creationCost": 3,
        "text": "Prerequisite: Shapechanging 3 \u00b7 Shift to Huge size as part of this power at no additional action cost\n- Range: Close area (20-ft radius centered on you)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block of each creature\n- Hit: 6 Power Dice bludgeoning damage, maximum on all dice. Power Effect Value vs. STR - Failure: knocked Prone + pushed Short range; Success: knocked Prone only"
      }
    ],
    "utilities": [
      {
        "id": "perfect-disguise",
        "name": "Perfect Disguise",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shapechanging 1",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 1\nReplicate the appearance of any humanoid observed for at least one minute with biological precision: height, weight, voice, mannerisms, and superficial features. Casual observers cannot distinguish you from the original. Creatures who know the original well: Insight vs. Power Effect Value to detect the deception. Biometric and technological scanners treat you as the original unless specifically calibrated to detect shapeshifting."
      },
      {
        "id": "microscopic-form",
        "name": "Microscopic Form",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shapechanging 2",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 2 Reduce yourself to microscopic scale - small enough to travel through a keyhole, enter a ventilation system, hide inside a pocket. Cannot carry equipment beyond what fits at that size. At microscopic scale any damage that hits you deals your full Power Die in damage regardless of normal reduction."
      },
      {
        "id": "biological-sampling",
        "name": "Biological Sampling",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shapechanging 2",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 2 After physically touching or being in close proximity to a creature for at least one round, replicate their biological features more precisely than standard Shapechanging allows. Advantage on Shapechanging-related checks to mimic that specific creature; disguise withstands supernatural detection unless the detecting power specifically beats your Power Effect Value."
      },
      {
        "id": "environmental-form",
        "name": "Environmental Form",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Shapechanging 3",
        "creationCost": 1,
        "text": "Prerequisite: Shapechanging 3 Adapt your biology to survive any natural environment indefinitely: vacuum, deep ocean, volcanic heat, arctic extremes, toxic atmospheres. The adaptation takes one minute of focused transformation. Only adapted to one environment at a time. Deliberate environmental attacks still deal damage - this covers only passive environmental hazards."
      }
    ],
    "enhancements": [
      {
        "name": "Rapid Shift",
        "text": "Rapid Shift: Transforming between forms costs a free action rather than a Bonus Action at all Core Track levels, not only during Perfect Form."
      },
      {
        "name": "Sustained Monstrous Form",
        "text": "Sustained Monstrous Form: Monstrous Form lasts until start of your Turn after next rather than your next Turn."
      },
      {
        "name": "Size Mastery",
        "text": "Size Mastery: When in a form larger than your base size, pushed distances increase by Close range (25 ft) on all Shapechanging powers and forced movement you generate."
      },
      {
        "name": "Perfect Recall",
        "text": "Perfect Recall: Precisely replicate the form of any creature you have previously shapeshifted into, even without them present, as long as you have done so within the last month. No observation period required."
      }
    ],
    "limitations": [
      {
        "name": "Transformation Time",
        "text": "Transformation Time: Shifting between significantly different forms takes one full round rather than a Bonus Action. During the transformation Turn you may still move and act but cannot benefit from the new form's advantages until the start of your next Turn. +1 Power Pick."
      },
      {
        "name": "Biological Only",
        "text": "Biological Only: Cannot replicate powered armor, energy weapons, dimensional abilities, psychic powers, or any capability not expressed through living tissue. +1 Power Pick."
      },
      {
        "name": "Scent Signature",
        "text": "Scent Signature: Despite visual and tactile transformations, your biological scent signature remains consistent across all forms. Heroes, animals, or enemies with enhanced smell can identify you regardless of current form. +1 Power Pick. Size Control Power Set"
      }
    ]
  },
  {
    "id": "size-control",
    "name": "Size Control",
    "governingAbility": "Choose CON or DEX at character creation",
    "abilityOptions": [
      "dex",
      "con"
    ],
    "associatedConditions": "Prone (large via stomp/sweep), Restrained (grapple at size advantage), Dazed (overwhelming scale), Shaken (sudden size change as intimidation)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier + Size Bonus Dice (per Creature Size table) ReferenceAll size modifiers (reach, Active Defense bonuses, Size Bonus Dice, Stealth effects) defined in Creature Size section of Chapter 15",
    "abilityScoreBonus": "",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "Size Control is the Power Set of changing scale - physically. A body that grows from human size to the height of a building. Or shrinks below the threshold of human visibility. Or both. Size Control heroes are defined by the strategic use of scale as a weapon. Larger is not simply stronger - it is also slower and harder to conceal. Smaller is not simply stealthier - it is also weaker and more vulnerable to area effects. CON - biological mass generation; growth driven by metabolic force and physical endurance. DEX - precision reduction; surgical scale control through extraordinary bodily awareness.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Size Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Change size between Large and Tiny as a Bonus Action. Changing size does not cost movement. While Large: melee reach extends to Close range (25 ft); +2 to Parry/Block; unarmed attacks deal +1 Size Bonus Die; Disadvantage on Stealth. While Tiny: move through any space at least 1 inch in diameter; Advantage on Stealth; Advantage on saves against area effects. Unarmed attacks deal \u22121 Size Bonus Die (minimum 1). Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Size Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Size Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Range expands to Huge and Diminutive. Changing size costs no action at this tier - free action once per Turn. While Huge: reach to Short range (25-50 ft); +3 to Parry/Block and Dodge; +2 Size Bonus Dice; +STR equal to CON modifier for STR checks and saves (does not stack with Super Strength - use higher). While Diminutive: move through any space at least \u00bd inch; Advantage on Stealth; all physical Active Defense rolls at Advantage; effectively invisible at this size. \u22121 Size Bonus Die (minimum 1). Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Size Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Size Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Range expands to Gargantuan and Fine. May change size as a free action at any point during your Turn. While Gargantuan: reach to Short range (25-50 ft); +4 to Parry/Block and Dodge; +3 Size Bonus Dice; +STR equal to CON modifier + Prowess; Disadvantage on Parry/Block rolls against your attacks from sheer overwhelming scale; Disadvantage on Stealth. While Fine: move through any gap visible to naked eye; Advantage on Stealth; all physical Active Defense rolls at Advantage; immune to targeted attacks (area effects still apply). \u22122 Size Bonus Dice (minimum 1). Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Size Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Size Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Range expands to Colossal and Miniscule. Change size as free action or Reaction at any point during Turn. While Colossal: reach to Medium range (50-120 ft); +5 to Parry/Block and Dodge; +4 Size Bonus Dice; +STR equal to CON + Prowess; count as terrain feature - allies can use your body as cover; carry vehicles, structures, and large objects freely. Stealth auto-fails. While Miniscule: occupy sub-square space; immune to all targeted attacks; invisible to casual observation. Stealth auto-fails. \u22122 Size Bonus Dice (minimum 1). Unlimited Form (once per day): Free action for 1 minute - change size freely including different sizes on different body parts simultaneously; size changes used as part of attacks deal maximum damage on all dice. Special Enhancements Microscopic Reduction (requires Size Control 4): Once per encounter as a free action, extend shrinking below Miniscule to true microscopic scale. Immunity to all targeted attacks; move through any gap that allows light to pass; undetectable by any mundane means. Powers relying on physical scale suppressed. When effect ends, make a Burnout check for the Size Control Power Set - on failure the Power Set is unavailable until you take a Breather. Titanic Growth (requires Size Control 4): Once per encounter as a free action, extend growth above Colossal to Titanic scale (128-256 feet). +6 to Parry/Block and Dodge; +5 Size Bonus Dice; reach extends to Long range (300 ft). Standard combat encounters cannot fully contain you - GM may shift to scene-scale rules. See Creature Size section of Chapter 15 for Titanic rules. Same Burnout check as Microscopic Reduction when the effect ends."
      }
    ],
    "powers": [
      {
        "id": "growth-strike",
        "name": "Growth Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Size Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 1 Rapidly expand as part of your attack, using the momentum of growth itself as a weapon. If you were not already enlarged, grow to Large size as part of this action (may shrink back as a free action at end of Turn).\n- Range: Close (0-25 ft) at base size; extends to current reach if already enlarged\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track + Size Bonus Dice. Strong Success: target knocked Prone."
      },
      {
        "id": "stomp",
        "name": "Stomp",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Size Control 1 \u00b7 Must be Large or larger",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 1 \u00b7 Must be Large or larger\n- Range: Close area (15-ft radius within 0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice bludgeoning + Size Bonus Dice. Power Effect Value vs. STR - Failure: knocked Prone; area becomes difficult terrain from impact crater. Success: knocked Prone only."
      },
      {
        "id": "shrink-attack",
        "name": "Shrink Attack",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Size Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Size Control 2 Shrink to Diminutive, pass through an impossible gap, and expand back to full size inside your target's defenses. Move up to full Speed through any gap that accommodates Diminutive size, ignoring walls and barriers, then expand to base size or larger at destination. This movement does not provoke Reactions.\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block at Advantage (attack comes from wholly unexpected direction)\n- Hit: Default damage track + Size Bonus Dice. Shaken until end of your next Turn from the disorienting appearance."
      },
      {
        "id": "size-slam",
        "name": "Size Slam",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Size Control 2 \u00b7 Must be Huge or larger",
        "creationCost": 2,
        "text": "Prerequisite: Size Control 2 \u00b7 Must be Huge or larger\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice bludgeoning + Size Bonus Dice. Power Effect Value vs. STR - Failure: pushed Short range from center + knocked Prone; Success: pushed Close range only."
      },
      {
        "id": "precision-shrink",
        "name": "Precision Shrink",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Size Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Size Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. CON - Failure: target shrinks to Tiny until end of your next Turn (\u22121 Power Die on all attacks; Disadvantage on STR checks and saves; all attacks against them have Advantage; scale-based powers suppressed); Success: Slowed only"
      },
      {
        "id": "crushing-advance",
        "name": "Crushing Advance",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Size Control 3 \u00b7 Must be Gargantuan or larger",
        "creationCost": 3,
        "text": "Prerequisite: Size Control 3 \u00b7 Must be Gargantuan or larger Move up to your full Speed in a straight line through any number of Zones without provoking Reactions. Every creature in any Zone you move through or within Close range (25 ft) of your path rolls STR vs. Power Effect Value - Failure: 3 Power Dice bludgeoning + Size Bonus Dice, knocked Prone, pushed Short range from path; Success: knocked Prone only. All terrain in Zones you move through becomes difficult terrain until cleared."
      },
      {
        "id": "titan-strike",
        "name": "Titan Strike",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Size Control 4 \u00b7 Must be Colossal",
        "creationCost": 3,
        "text": "Prerequisite: Size Control 4 \u00b7 Must be Colossal\n- Range: Medium (50-120 ft) matching your Colossal melee reach\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: 6 Power Dice bludgeoning, maximum on all dice, + full Size Bonus Dice (+4). Power Effect Value vs. STR - Failure: Stunned until end of your next Turn + pushed Short range + knocked Prone; all creatures within Close range (25 ft) of primary target roll STR vs. Power Effect Value or take 3 Power Dice bludgeoning + knocked Prone from the shockwave. Success: Dazed + knocked Prone only."
      }
    ],
    "utilities": [
      {
        "id": "micro-scout",
        "name": "Micro Scout",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Size Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 1 At Tiny size you can scout locations inaccessible at normal scale - move at full speed, observe and listen normally, interact with objects small enough for Tiny hands. Cannot be detected by casual observation. Still visible to creatures with enhanced senses or appropriate detection methods."
      },
      {
        "id": "size-shift",
        "name": "Size Shift",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Size Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 1 Change size gradually rather than instantly, holding any size between Tiny and Large for as long as you choose. Fit through specific-sized spaces, adjust size for delicate work, or maintain a size advantage in a confined space. Change size while carrying objects or passengers."
      },
      {
        "id": "carry-passenger",
        "name": "Carry Passenger",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Size Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 2 At Huge or larger size, carry willing passengers - pick up and transport a number of human-sized creatures equal to your Governing Ability modifier without reducing your Speed. Passengers in your hand or on your shoulder have three-quarters cover from your body, granting Advantage on their Dodge Active Defense rolls against ranged attacks."
      },
      {
        "id": "environmental-compression",
        "name": "Environmental Compression",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Size Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Size Control 3 At Fine size, compress through porous solid materials - wood grain, concrete, fabric weave, packed earth - that have no visible opening but permit airflow. Takes one full round of movement per foot of solid material. Cannot compress through force fields, energy barriers, vacuum seals, or superpowered containment."
      }
    ],
    "enhancements": [
      {
        "name": "Rapid Resize",
        "text": "Rapid Resize: Changing size costs no action at all tiers from Level 1, not only at Core Track 2."
      },
      {
        "name": "Size Advantage",
        "text": "Size Advantage: When you are Large or larger and initiate a grapple against a creature smaller than you, the grapple automatically succeeds without a check."
      },
      {
        "name": "Precision Growth",
        "text": "Precision Growth: Grow specific body parts while the rest of you remains at base size - an enormous fist, an extended arm with greater reach, a hardened foot for a stomp. Attacks at one size category above current physical size for reach and Size Bonus Dice purposes."
      },
      {
        "name": "Shrink Resistance",
        "text": "Shrink Resistance: When you are Tiny or smaller, area effects deal half damage rather than full damage."
      }
    ],
    "limitations": [
      {
        "name": "Scale Instability",
        "text": "Scale Instability: Rapid size changes under stress are unreliable. When Shaken, Dazed, or Stunned, any size change requires 1d20 + CON vs. 15. On a failure, the change does not occur and the action is spent. +1 Power Pick."
      },
      {
        "name": "Mass Conservation",
        "text": "Mass Conservation: Mass does not change with size. At Tiny or smaller: still as heavy as a full-grown human - sink in water, cannot be carried by wind, detectable by pressure-sensitive surfaces. At Colossal or larger: weigh what a creature of that size would actually weigh. GM may introduce environmental consequences. +1 Power Pick."
      },
      {
        "name": "Gear Incompatibility",
        "text": "Gear Incompatibility: Equipment does not change size with you unless specifically designed to do so. Powers derived from gear-based Power Sets are unavailable while outside base size unless the gear is built to scale. +1 Power Pick. Sorcery Power Set"
      }
    ]
  },
  {
    "id": "sorcery",
    "name": "Sorcery",
    "governingAbility": "Choose WIS or CHA at character creation",
    "abilityOptions": [
      "wis",
      "cha"
    ],
    "associatedConditions": "Dazed, Restrained (mystical binding), Banished, Shaken (eldritch pressure)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Most versatile Power Set in the game; breadth over depth; Counterspell, Ritual Magic, and Dispel Magic extend reach beyond any specialised set",
    "limitationNote": "",
    "description": "Sorcery is the Power Set of magic: the deliberate manipulation of mystical forces, dimensional energies, ancient traditions, and the fundamental laws governing supernatural reality. Sorcerers trade depth for breadth - no other Power Set can simultaneously attack, defend, open dimensional portals, create barriers, counter another practitioner's magic, and reshape the conditions of an encounter as completely as a sorcerer can. WIS - disciplined scholar and practitioner; earns power through mastery of ancient knowledge and patient attunement. CHA - natural sorcerer; magic flows from force of personality, mystical bloodline, or a cosmic gift that requires will rather than study.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Sorcery 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Detect presence and general nature of active magical effects within Close range (25 ft). Resistance to psychic and necrotic damage. Speak and read one additional language of a mystical, dimensional, or ancient nature. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Sorcery 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Sorcery 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Immunity to psychic damage (replaces Resistance). Magical perception extends to Short range (25-50 ft) and can identify specific spells, rituals, and magical traditions in active use. Sense dimensional weak points within Medium range (50-120 ft). Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Sorcery 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Sorcery 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Magical attacks ignore Resistance to psychic and necrotic damage; treat Immunity as Resistance. Once per encounter when you successfully counter or dispel a magical effect, regain one spent Sorcery Encounter Power as the magical energy feeds back into your reserves. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Sorcery 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Sorcery 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Supreme Sorcery for 1 minute: all sorcery attacks deal maximum damage on the dice; maintain two Sorcery Sustained Powers simultaneously; Counterspell automatically succeeds without a roll; once per round use one Tier 1 Sorcery power as a free action in addition to normal actions."
      }
    ],
    "powers": [
      {
        "id": "eldritch-bolt",
        "name": "Eldritch Bolt",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Sorcery 1 \u00b7 Damage type: psychic or necrotic (choose at character creation)",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 1 \u00b7 Damage type: psychic or necrotic (choose at character creation)\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Default damage track. Strong Success: Shaken until end of your next Turn."
      },
      {
        "id": "mystic-binding",
        "name": "Mystic Binding",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Sorcery 1",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. STR - Failure: Restrained by mystical bonds until end of your next Turn (cannot use Sustained Powers while Restrained this way); Success: Slowed only"
      },
      {
        "id": "counterspell",
        "name": "Counterspell",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Sorcery 2",
        "creationCost": 2,
        "text": "Prerequisite: Sorcery 2 \u00b7 Trigger: A creature within Short range (25-50 ft) uses a Power, magical effect, or supernatural ability \u00b7 Cannot counter At-Will powers Attempt to unravel the magical working before it completes. Roll 1d20 + Governing Ability + Prowess against the triggering creature's Power Effect Value. Success: the power fails entirely and is wasted; triggering creature's resource (Action, Encounter Power, Daily Power) is spent. Failure: the power proceeds normally, but the triggering power has Disadvantage on its attack roll or the target gains Advantage on their save against it if applicable."
      },
      {
        "id": "dimensional-shunt",
        "name": "Dimensional Shunt",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Sorcery 2",
        "creationCost": 2,
        "text": "Prerequisite: Sorcery 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Banished to a pocket dimension until end of your next Turn (cannot act, cannot be targeted, cannot perceive the current plane; reappears at end of your next Turn in their original space or nearest unoccupied space); Success: Dazed only from partial dimensional displacement"
      },
      {
        "id": "mystical-aegis",
        "name": "Mystical Aegis",
        "tier": 2,
        "type": "Sustained",
        "action": "Bonus Action to activate",
        "prerequisite": "Sorcery 2",
        "creationCost": 2,
        "text": "Prerequisite: Sorcery 2 Maintain a sustained field of protective magic around yourself. While sustained: flat damage reduction equal to Prowess against all damage; any creature targeting you with a power or magical effect rolls Governing Ability vs. your Power Effect Value or their attack has Disadvantage. Sustaining costs a Bonus Action at the start of each Turn."
      },
      {
        "id": "eldritch-storm",
        "name": "Eldritch Storm",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Sorcery 3",
        "creationCost": 3,
        "text": "Prerequisite: Sorcery 3\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower of each creature\n- Hit: 6 Power Dice psychic and necrotic damage, maximum on all dice. Power Effect Value vs. WIS - Failure: Stunned; Success: Dazed (both until end of your next Turn)"
      }
    ],
    "utilities": [
      {
        "id": "mystic-senses",
        "name": "Mystic Senses",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Sorcery 1",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 1 See invisible and hidden magical constructs; detect active enchantments on objects and people within Short range (25-50 ft); identify the school, tradition, or source of any magical effect you can directly perceive. In non-combat scenes, ask the GM one question about the magical nature of anything you can perceive."
      },
      {
        "id": "portal-step",
        "name": "Portal Step",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Sorcery 2",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 2 As an Action, open a portal between two points you can perceive or have personally visited within Medium range (50-120 ft) of your current position. You and up to Governing Ability modifier in willing creatures may step through. The portal closes behind you. Transit is instantaneous. Passengers: WIS vs. Power Effect Value or Shaken until end of their next Turn."
      },
      {
        "id": "ritual-magic",
        "name": "Ritual Magic",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Sorcery 2",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 2 With at least 10 minutes of preparation and appropriate materials, attempt a magical ritual to produce an effect beyond your normal power entries. The ritual can produce effects equivalent to a Tier 1 or Tier 2 power from any Power Set, used once, with no attack roll required. The GM sets a WIS check DC based on how far the effect is from your established magical tradition. Degrees of Success apply normally."
      },
      {
        "id": "dispel-magic",
        "name": "Dispel Magic",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Sorcery 3",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 3 As an Action, attempt to end one magical effect, Sustained Power, or enchantment within Short range (25-50 ft). Roll 1d20 + Governing Ability + Prowess against the originating practitioner's Power Effect Value, or against DC 15 if the source is environmental or no longer present. Success: the effect ends immediately. Failure: the effect persists but you learn its precise nature, source, and any conditions required to end it. This is not Counterspell - Dispel Magic ends effects already in place rather than intercepting them at activation."
      },
      {
        "id": "astral-projection",
        "name": "Astral Projection",
        "tier": 3,
        "type": "Utility",
        "action": "Once per day",
        "prerequisite": "Sorcery 3",
        "creationCost": 1,
        "text": "Prerequisite: Sorcery 3 As an Action, project your consciousness from your body. Your astral form may travel to any location on the same plane you can visualize, observe remotely with full sensory fidelity, interact with other astral or dimensional entities, and use non-physical Sorcery powers. Your physical body remains unconscious and vulnerable while projected. Lasts up to one hour or until you choose to return. If your body is killed while you are projected, roll WIS vs. DC 20 or become permanently lost in the astral plane."
      }
    ],
    "enhancements": [
      {
        "name": "Empowered Counterspell",
        "text": "Empowered Counterspell: When Counterspell succeeds, also regain the Encounter Power resource spent to activate Counterspell itself, as the captured magical energy refuels you."
      },
      {
        "name": "Extended Binding",
        "text": "Extended Binding: Mystic Binding's Restrained duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Ritual Mastery",
        "text": "Ritual Mastery: Ritual Magic's preparation time reduces to 1 minute and the DC for effects within your established magical tradition reduces by your Prowess."
      },
      {
        "name": "Dimensional Anchor",
        "text": "Dimensional Anchor: When Dimensional Shunt successfully Banishes a target, you may choose their reappearance point anywhere within Close range (25 ft) of their original position rather than the space they left."
      }
    ],
    "limitations": [
      {
        "name": "Mystical Debt",
        "text": "Mystical Debt: Once per session the GM may call in a debt - a mystical entity requests a favor, a past casting has an unforeseen consequence, or the forces you channel demand acknowledgment through a specific action. Ignoring the debt imposes Disadvantage on all Sorcery powers until it is addressed. +1 Power Pick."
      },
      {
        "name": "Ritual Dependency",
        "text": "Ritual Dependency: Powers above Tier 1 used without preparation in a scene where you have not had at least one round of mystical focus cost 1 Burnout each time. +1 Power Pick."
      },
      {
        "name": "Ancient Rivalry",
        "text": "Ancient Rivalry: Another magical practitioner, tradition, or dimensional entity specifically opposes your magic. Their powers and those of their allies have Advantage on saves against your effects; they can detect your magical activity within Long range (120-300 ft). The GM introduces this rivalry as a recurring story element. +1 Power Pick. Super Agility Power Set"
      }
    ]
  },
  {
    "id": "super-agility",
    "name": "Super Agility",
    "governingAbility": "DEX (fixed) \u00b7 +1 to DEX at each Core Track step",
    "abilityOptions": [
      "dex"
    ],
    "associatedConditions": "Prone (resists/removes), Restrained (resists/removes), Slowed (resists/removes), Immobilized (resists)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Dexterity at each Core Track step",
    "tacticalRole": "Hardest target on the battlefield; reliable escape artist; precise positioning rather than raw speed",
    "limitationNote": "",
    "description": "Super Agility is the Power Set of impossible grace, perfect coordination, and superhuman evasion. Not trained acrobatics - something beyond that. A body that moves like liquid through spaces that should not accommodate it. Reflexes that make incoming attacks look like they are happening in slow motion. Super Agility heroes are not necessarily fast in the way speedsters are fast. They are precise. Every movement is exactly what it needs to be and nothing more.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Agility 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to DEX. Advantage on Acrobatics checks involving balance, tumbling, evasive movement, and controlled falls. Standing from Prone costs no movement. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Agility 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Agility 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to DEX. Ignore difficult terrain from non-superpowered sources. Cannot be knocked off narrow surfaces, moving vehicles, or unstable ground by ordinary environmental effects. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Agility 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Agility 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to DEX. Reflexes border on precognitive. Once per encounter, turn a failed DEX check of any kind into a success. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Agility 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Agility 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to DEX. Once per encounter, when hit by an attack you can perceive, force the attacker to reroll the attack and use the new result. Once per Turn as a free action, add DEX to your Dodge Active Defense roll, representing a perfectly timed movement that costs no action."
      }
    ],
    "powers": [
      {
        "id": "evasive-strike",
        "name": "Evasive Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Super Agility 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + DEX + Prowess vs. Parry/Block\n- Hit: Default damage track. After the attack, move up to 10 ft without provoking Reactions. Strong Success: move up to 20 ft instead; Advantage on your next Dodge Active Defense roll before start of your next Turn."
      },
      {
        "id": "slip-away",
        "name": "Slip Away",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Agility 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 1 \u00b7 Trigger: A melee attack targets you Before the attack roll is made, move up to 15 ft without provoking Reactions. The attack must be resolved against your new position. If the attacker cannot reach your new position, the attack automatically misses."
      },
      {
        "id": "momentum-strike",
        "name": "Momentum Strike",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Agility 2 \u00b7 Must move at least Short range (25 ft) this Turn before using this power",
        "creationCost": 2,
        "text": "Prerequisite: Super Agility 2 \u00b7 Must move at least Short range (25 ft) this Turn before using this power\n- Range: Close (0-25 ft)\n- Attack: 1d20 + DEX + Prowess vs. Parry/Block\n- Hit: Default damage track + 2 additional Power Dice. Power Effect Value vs. STR or knocked Prone."
      },
      {
        "id": "redirect",
        "name": "Redirect",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Agility 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Agility 2 \u00b7 Trigger: A melee attack misses you Redirect the attacker's momentum. Move the attacker up to 15 ft in any direction. If they impact a wall, barrier, or another creature, they take 2 Power Dice bludgeoning damage and are knocked Prone. You may then move up to 15 ft without provoking Reactions."
      },
      {
        "id": "kinetic-reversal",
        "name": "Kinetic Reversal",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Agility 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Agility 3 \u00b7 Trigger: A melee attack misses you Turn the attacker's failed strike into a takedown. The attacker rolls STR or DEX (their choice) vs. your Power Effect Value - Failure: knocked Prone + Slowed until end of their next Turn; Success: knocked Prone only. You may then move up to 15 ft without provoking Reactions."
      },
      {
        "id": "untouchable",
        "name": "Untouchable",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Agility 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Agility 3 Until start of your next Turn: all attacks against you have Disadvantage; if an attack still hits, you may use your Reaction to halve the damage; you may move up to your full Speed as a free action at any point during this Turn, even if you have already moved."
      }
    ],
    "utilities": [
      {
        "id": "perfect-landing",
        "name": "Perfect Landing",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Agility 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 1 Ignore all falling damage regardless of height. Always land on your feet. Use a fall as movement - deliberately drop to a lower level as part of your movement without any action cost."
      },
      {
        "id": "wall-run",
        "name": "Wall Run",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Agility 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 1 Move along vertical surfaces and across ceilings as part of your normal movement. Do not need to end your movement on solid ground. Fall only if you choose to stop moving or are knocked Prone while on a vertical surface."
      },
      {
        "id": "escape-artist",
        "name": "Escape Artist",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Agility 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 2 Advantage on all checks to escape Grappled, Restrained, Pinned, or Immobilized conditions. Once per encounter, attempt to end one of these conditions as a free action at the start of your Turn with no check required."
      },
      {
        "id": "zero-gravity-movement",
        "name": "Zero Gravity Movement",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Agility 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Agility 3 In zero gravity, low gravity, or underwater environments, move with complete control as though in normal conditions. No Disadvantage on attack rolls or checks from unusual gravity or buoyancy. Orient in any direction and move at full Speed in any axis."
      }
    ],
    "enhancements": [
      {
        "name": "Improved Evasive Strike",
        "text": "Improved Evasive Strike: After using Evasive Strike, also end one of the following conditions currently affecting you: Shaken, Slowed, or Prone."
      },
      {
        "name": "Reactive Slip",
        "text": "Reactive Slip: Slip Away may now also trigger when a ranged attack targets you, provided you are aware of the attacker."
      },
      {
        "name": "Momentum Carry",
        "text": "Momentum Carry: When you use Momentum Strike, may move an additional 10 ft after the attack resolves, without provoking Reactions."
      },
      {
        "name": "Uncanny Dodge",
        "text": "Uncanny Dodge: Once per encounter when you would take damage, halve that damage as a free action. This does not require a Reaction."
      }
    ],
    "limitations": [
      {
        "name": "Armor Incompatible",
        "text": "Armor Incompatible: Cannot wear heavy armor. While wearing medium armor, all Super Agility powers that involve movement cost an additional 5 ft of movement and you lose the +1 Active Defense bonus from Core Track 1. +1 Power Pick."
      },
      {
        "name": "Open Terrain Dependent",
        "text": "Open Terrain Dependent: Agility requires space. In cramped conditions (tunnels, tight corridors, packed crowds) movement-based powers function at half distance and you lose Advantage from Core Track 1 on Acrobatics checks. +1 Power Pick. Super Durability Power Set"
      }
    ]
  },
  {
    "id": "super-durability",
    "name": "Super Durability",
    "governingAbility": "CON (fixed) \u00b7 +1 to CON at each Core Track step",
    "abilityOptions": [
      "con"
    ],
    "associatedConditions": "Burning (resists), Frozen (resists), Stunned (resists), Dazed (resists), Prone (resists)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Constitution at each Core Track step",
    "tacticalRole": "Last one standing; protect allies by absorbing hits meant for softer targets; keep fighting past the point any reasonable opponent would give up",
    "limitationNote": "",
    "description": "Super Durability is the Power Set of unbreakable toughness and relentless endurance. Not trained resilience but something fundamentally different: a body that absorbs punishment that would destroy anything else and keeps moving. Skin that turns bullets. Bones that do not break under forces measured in tons. Super Durability heroes are the wall between the team and whatever is trying to break through.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Durability 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to CON. Flat damage reduction equal to Prowess against all damage sources (cannot reduce any damage instance below 1). Gain temporary HP equal to CON at the start of each encounter. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Durability 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Durability 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to CON. Choose one damage type (bludgeoning, piercing, slashing, fire, cold, or lightning) - gain Resistance to that type. Flat damage reduction increases to Prowess + CON. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Durability 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Durability 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to CON. Once per encounter as a Reaction when you take damage, reduce that damage by 3 Power Dice + CON. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Durability 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Durability 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to CON. Once per day, when you would be reduced to 0 HP, drop to 1 HP instead; then gain temporary HP equal to CON + Prowess. Cannot be triggered by damage that specifically bypasses your Resistance or exploits a Limitation."
      }
    ],
    "powers": [
      {
        "id": "brace-for-impact",
        "name": "Brace for Impact",
        "tier": 1,
        "type": "Reaction",
        "action": "Reaction",
        "prerequisite": "Super Durability 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 1 \u00b7 Trigger: You or one ally within Close range (25 ft) is hit by an attack or collision Reduce the damage taken by 1 Power Die + CON. If used to protect an ally, you must be able to physically interpose yourself. The damage reduction applies to the protected target."
      },
      {
        "id": "unstoppable-advance",
        "name": "Unstoppable Advance",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Durability 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 1 Move up to your full Speed in a straight line. This movement does not provoke Reactions. Any creature in your path rolls STR vs. your Power Effect Value or is pushed 10 ft out of your path. Difficult terrain costs no additional movement during this advance."
      },
      {
        "id": "no-sell",
        "name": "No-Sell",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Durability 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Durability 2 \u00b7 Trigger: You are hit by an attack Reduce the damage from that attack by 3 Power Dice. If the reduction brings the damage to 0, you may immediately move 5 ft as a free action and the attacker becomes Shaken until end of their next Turn as your complete indifference rattles them."
      },
      {
        "id": "stay-standing",
        "name": "Stay Standing",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Durability 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Durability 2 \u00b7 Trigger: You would be knocked Prone, pushed, or moved involuntarily Roll 1d20 + CON + Prowess vs. DC 15. Success: ignore the forced movement or knockdown entirely. Failure: reduce the forced movement distance by half. This power does not prevent damage, only the positional effect."
      },
      {
        "id": "endure",
        "name": "Endure",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Durability 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Durability 3 Until start of your next Turn: Resistance to all damage types; cannot be moved involuntarily; automatically succeed on saves against Prone, Dazed, and Slowed. This stacks with existing Resistance from Core Track 2 by granting Immunity to that damage type for the duration. At the start of your next Turn, if you are Bloodied, regain HP equal to CON + Prowess."
      },
      {
        "id": "indestructible-moment",
        "name": "Indestructible Moment",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Durability 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Durability 3 For 1 minute: immunity to bludgeoning, piercing, and slashing damage from non-superpowered sources; Resistance to all other physical damage types; cannot be moved involuntarily, knocked Prone, or have Speed reduced. Psychic damage and effects targeting your mind are not affected by this power. End early as a free action."
      }
    ],
    "utilities": [
      {
        "id": "thick-skin",
        "name": "Thick Skin",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Durability 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 1 Flat damage reduction from Core Track 1 also applies to environmental hazards: extreme heat, extreme cold, crushing pressure, and falls. Survive conditions that would kill an unprotected human for a number of hours equal to CON before needing to make saves."
      },
      {
        "id": "toxin-purge",
        "name": "Toxin Purge",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Durability 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 1 Once per Breather, end one Poisoned condition or disease effect currently affecting you through sheer biological fortitude."
      },
      {
        "id": "shrug-it-off",
        "name": "Shrug It Off",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Durability 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 2\nOnce per encounter at the start of your Turn, end one of the following conditions currently affecting you: Shaken, Slowed, or Burning. No action required."
      },
      {
        "id": "immovable",
        "name": "Immovable",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Durability 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Durability 3 Cannot be moved involuntarily by any non-superpowered force. Against superpowered forced movement, reduce the distance by your Prowess in zones. If this reduces the movement to 0, you do not move at all."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Brace",
        "text": "Extended Brace: Brace for Impact may now protect any ally within Short range (25-50 ft) rather than only Close range, provided you can narrate a plausible physical interposition."
      },
      {
        "name": "Hardened Resistance",
        "text": "Hardened Resistance: Resistance from Core Track 2 now applies to one additional damage type of your choice."
      },
      {
        "name": "Reactive Durability",
        "text": "Reactive Durability: Once per encounter when you use your Core Track 3 Reaction damage reduction, if you reduce the damage to 0, regain HP equal to your Prowess."
      },
      {
        "name": "Enduring Advance",
        "text": "Enduring Advance: When you use Unstoppable Advance, creatures who fail their save against it are also knocked Prone."
      }
    ],
    "limitations": [
      {
        "name": "Vulnerability",
        "text": "Vulnerability: Choose one specific damage type or material. Attacks of that type deal additional damage equal to one Power Die and bypass your flat damage reduction entirely. Should appear in play with some regularity. +1 Power Pick."
      },
      {
        "name": "Slow",
        "text": "Slow: Density and toughness costs mobility - Speed reduced by 10 ft permanently. Cannot take the Dash action to move more than 1 Zone per Turn. +1 Power Pick."
      },
      {
        "name": "Obvious Physiology",
        "text": "Obvious Physiology: Superhuman toughness is immediately visible: crystalline skin, obvious metallic plating, unusual density, etc. Cannot pass for an ordinary human without significant concealment effort. +1 Power Pick. Super Genius Power Set"
      }
    ]
  },
  {
    "id": "super-genius",
    "name": "Super Genius",
    "governingAbility": "INT (fixed) \u00b7 +1 to INT at each Core Track step",
    "abilityOptions": [
      "int"
    ],
    "associatedConditions": "Dazed (cognitive overload), Shaken (psychological pressure), Overloaded (against technological targets)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Intelligence at each Core Track step",
    "tacticalRole": "Analytical combat support; information control; team-wide tactical enhancement; already finished the conversation three exchanges ago",
    "limitationNote": "",
    "description": "Super Genius is the Power Set of a mind operating beyond human limits. Not exceptional intelligence but something categorically different: a brain that processes information at superhuman speed, identifies patterns in real time that would take ordinary geniuses days to find, calculates trajectories and probabilities simultaneously across dozens of variables, and solves problems that should be unsolvable in the time it takes most people to understand the question. A Super Genius hero is the person in the room who already finished the conversation three exchanges ago and is now waiting for everyone else to catch up.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Genius 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to INT. Advantage on all Intelligence-based Skill checks. Once per scene, ask the GM one direct question about a situation, location, person, or object you have observed for at least one round - the GM answers honestly based on what your superhuman analysis would reveal. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Genius 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Genius 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to INT. At the start of each encounter, immediately identify the most significant threat, the most exploitable weakness, and one hidden factor the GM has not yet revealed. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Genius 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Genius 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to INT. Automatically succeed on Intelligence-based Skill checks of DC 20 or lower without rolling. For checks above DC 20: Advantage + Prowess added twice. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Genius 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Genius 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to INT. Once per day, enter Overdrive for 1 minute: automatically succeed on all Intelligence-based checks regardless of DC; Power Effect Value increases by 3; once per round use Calculated Strike or Exploit Weakness as a free action in addition to normal actions."
      }
    ],
    "powers": [
      {
        "id": "calculated-strike",
        "name": "Calculated Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Super Genius 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 1 Identify the precise angle, timing, and force required to make your attack land with maximum effect, then execute it. Attack the target's lowest Active Defense (choose after observing for at least one round; otherwise GM determines which applies).\n- Range: Close (0-25 ft)\n- Attack: 1d20 + INT + Prowess vs. target's lowest Active Defense\n- Hit: 1 Power Die + INT modifier damage. Strong Success: target has Disadvantage on their next roll before end of their next Turn."
      },
      {
        "id": "exploit-weakness",
        "name": "Exploit Weakness",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Super Genius 1 \u00b7 Must have observed the target for at least one round",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 1 \u00b7 Must have observed the target for at least one round Identify and broadcast a specific vulnerability in a target's defense, position, or capability. Choose one ally within Short range (25-50 ft). Until end of your next Turn, that ally gains Advantage on their next attack against the target and adds INT modifier to the damage if the attack hits."
      },
      {
        "id": "cognitive-overload",
        "name": "Cognitive Overload",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Genius 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Genius 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + INT + Prowess vs. Willpower\n- Hit: 2 Power Dice psychic damage. Power Effect Value vs. INT - Failure: Dazed until end of your next Turn; Strong Success on attack: also Shaken."
      },
      {
        "id": "tactical-breakdown",
        "name": "Tactical Breakdown",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Genius 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Genius 2 Analyze the battlefield in an instant and redistribute advantage across your entire team. Each affected ally within Medium range (50-120 ft) who can hear or see you may immediately move up to 10 ft without provoking Reactions and gains Advantage on their next attack roll or Active Defense roll before start of your next Turn. Choose which benefit each ally receives individually."
      },
      {
        "id": "predicted-response",
        "name": "Predicted Response",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Genius 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Genius 3 \u00b7 Trigger: A creature within Short range (25-50 ft) you have observed for at least one round declares an action You predicted this exact action. Before the action resolves, choose one: impose Disadvantage on the triggering roll; grant one ally Advantage on their Active Defense against it; or move one ally up to 15 ft out of the effect's area without provoking Reactions."
      },
      {
        "id": "calculated-collapse",
        "name": "Calculated Collapse",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Genius 3 \u00b7 Must have observed the target for at least one round",
        "creationCost": 3,
        "text": "Prerequisite: Super Genius 3 \u00b7 Must have observed the target for at least one round\n- Range: Short (25-50 ft)\n- Attack: 1d20 + INT + Prowess vs. Willpower\n- Hit: 5 Power Dice psychic damage. Power Effect Value vs. INT - Failure: Stunned until end of your next Turn + loses access to one Power Set of your choice for the remainder of the encounter (Power Disrupted); Success: Dazed only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "rapid-analysis",
        "name": "Rapid Analysis",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Genius 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 1 As a free action once per scene, analyze one object, substance, mechanism, or system you can directly observe. The GM tells you its purpose, composition, any weaknesses or vulnerabilities, and one piece of information about it that would not be immediately obvious to an ordinary observer."
      },
      {
        "id": "eidetic-recall",
        "name": "Eidetic Recall",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Genius 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 1 Remember everything you have deliberately observed with perfect accuracy - exact details of any scene, document, conversation, or event you witnessed without making a check. Under pressure or time constraints, Advantage on INT checks to extract specific information from memory."
      },
      {
        "id": "speed-reading",
        "name": "Speed Reading",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Genius 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 2 Process written information at superhuman speed. Read and fully comprehend any written document, regardless of length or complexity, in a number of rounds equal to the document's complexity (1 for simple, 3 for technical, 5 for extremely complex). Understand full content and implications, not just surface meaning."
      },
      {
        "id": "genius-level-invention",
        "name": "Genius-Level Invention",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Genius 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 2 When you attempt Downtime Invention or Kitbashing, reduce the DC by INT modifier (minimum DC 10). On a Normal Success, your invented device has one additional use beyond the standard. Represents superhuman engineering capability rather than the Gadgetry Power Set's specific toolkit."
      },
      {
        "id": "predictive-modeling",
        "name": "Predictive Modeling",
        "tier": 3,
        "type": "Utility",
        "action": "Once per session",
        "prerequisite": "Super Genius 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Genius 3 Ask the GM what the most likely outcome of a specific course of action will be, based on currently available information. The GM gives you an honest probability assessment and the most significant variable that could change the outcome. This is analysis, not prophecy - new information or unexpected choices can change the outcome."
      }
    ],
    "enhancements": [
      {
        "name": "Shared Analysis",
        "text": "Shared Analysis: When you use Exploit Weakness, you may target two allies within Short range instead of one."
      },
      {
        "name": "Accelerated Processing",
        "text": "Accelerated Processing: Once per encounter, use Calculated Strike as a Bonus Action instead of an Action."
      },
      {
        "name": "Deeper Breakdown",
        "text": "Deeper Breakdown: When Cognitive Overload causes Dazed, the duration extends to end of the target's next Turn rather than your next Turn."
      },
      {
        "name": "Combat Prediction",
        "text": "Combat Prediction: Once per encounter, declare that you have predicted an enemy's attack before initiative is rolled - if that enemy attacks you during the first round, gain Advantage on your Active Defense roll against that specific attack."
      }
    ],
    "limitations": [
      {
        "name": "Physical Frailty",
        "text": "Physical Frailty: Superhuman mind developed at cost to your body. Maximum HP reduced by 2 per Level. Disadvantage on STR and CON saves against physical effects. +1 Power Pick."
      },
      {
        "name": "Analytical Dependency",
        "text": "Analytical Dependency: Powers requiring you to have observed the target for at least one round cannot be used against targets you have not yet seen in the current encounter, even if you have faced them before. +1 Power Pick."
      },
      {
        "name": "Overconfidence in Analysis",
        "text": "Overconfidence in Analysis: Once per session the GM may declare that your analysis was wrong about one specific fact, without warning. Must be used against a meaningful assumption rather than a trivial detail. +1 Power Pick. Super Presence Power Set"
      }
    ]
  },
  {
    "id": "super-presence",
    "name": "Super Presence",
    "governingAbility": "CHA (fixed) \u00b7 +1 to CHA at each Core Track step",
    "abilityOptions": [
      "cha"
    ],
    "associatedConditions": "Shaken (inflicts on enemies), Frightened (inflicts on enemies), Shaken (removes from allies)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Charisma at each Core Track step",
    "tacticalRole": "Passive aura suppresses enemies while inspiring allies; dual-direction emotional force; battlefield emotional control",
    "limitationNote": "",
    "description": "Super Presence is the Power Set of Charisma made supernatural. Not charm. Not social skill. Not the practiced magnetism of a politician but something that operates below conscious processing: a force of personality so concentrated it affects people before they have decided how to feel about it. A room changes when a Super Presence hero enters it. The Apex hero is a living storm of emotional force that terrifies enemies and emboldens allies in the same moment.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Presence 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to CHA. Enemies beginning their Turn within Close range (25 ft) who can perceive you must roll WIS vs. your Power Effect Value or have Disadvantage on their first attack roll that Turn. This is a passive aura requiring no action. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Presence 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Presence 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to CHA. Passive enemy aura extends to Short range (25-50 ft). Allies within Close range (25 ft) who can perceive you gain Advantage on saves against Shaken and Frightened. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Presence 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Presence 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to CHA. Both auras extend to Short range (25-50 ft). Once per encounter when you enter a scene or initiative begins, all enemies within Short range who can perceive you roll vs. your Power Effect Value or become Shaken until end of their first Turn. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Presence 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Presence 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to CHA. Once per day as a free action, enter Legendary Presence for 1 minute: passive enemy aura becomes automatic - enemies within Short range have Disadvantage on all attack rolls without a save; simultaneously, all allies within Short range who can perceive you gain Advantage on all attack rolls and saves against conditions. Both effects operate simultaneously."
      }
    ],
    "powers": [
      {
        "id": "commanding-word",
        "name": "Commanding Word",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Super Presence 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + CHA + Prowess vs. Social Defense\n- Hit: 1 Power Die + CHA modifier psychic damage. Target Shaken until end of your next Turn. Strong Success: Shaken + Disadvantage on their next Active Defense roll before end of their next Turn."
      },
      {
        "id": "unnerving-gaze",
        "name": "Unnerving Gaze",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Super Presence 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + CHA + Prowess vs. Social Defense\n- Hit: Power Effect Value vs. WIS - Failure: Frightened of you; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "rally",
        "name": "Rally",
        "tier": 2,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Super Presence 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Presence 2 Project focused inspiration at a critical moment. Choose one ally within Short range (25-50 ft) who can perceive you. That ally immediately ends one of the following conditions: Shaken, Frightened, or Dazed. They then gain temporary HP equal to CHA + Prowess and Advantage on their next roll before end of their next Turn."
      },
      {
        "id": "aura-of-dread",
        "name": "Aura of Dread",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Presence 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Presence 2\n- Range: Short range area (25-50 ft), all enemies who can perceive you\n- Attack: 1d20 + CHA + Prowess vs. Social Defense of each target\n- Hit: Power Effect Value vs. WIS - Failure: Shaken until end of your next Turn. Strong Success on attack: Frightened instead of Shaken."
      },
      {
        "id": "tide-turner",
        "name": "Tide Turner",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Presence 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Presence 3 Read the emotional state of the entire battlefield and shift it with a single decisive act of will. All enemies\nwithin Medium range (50-120 ft) who can perceive you roll WIS vs. your Power Effect Value - Failure: Shaken until end of their next Turn. All allies within Medium range who can perceive you immediately end one condition of their choice (Shaken, Frightened, or Dazed) and each gains temporary HP equal to Prowess."
      },
      {
        "id": "break-their-will",
        "name": "Break Their Will",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Presence 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Presence 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + CHA + Prowess vs. Social Defense\n- Hit: 5 Power Dice psychic damage. Power Effect Value vs. WIS - Failure: Frightened for the remainder of the encounter (must use movement to increase distance from you on each Turn if able); Success: Frightened until end of your next Turn only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "commanding-presence",
        "name": "Commanding Presence",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Presence 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 1 In non-combat social situations, your presence alone shifts the starting Response of any group or individual who can perceive you by one step in a direction of your choosing before any roll is made. Applies once per scene - the immediate instinctive reaction to encountering you."
      },
      {
        "id": "fearless",
        "name": "Fearless",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Presence 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 1 Immune to the Frightened condition. Effects that would make you Frightened make you Shaken instead, and you have Advantage on saves against Shaken from external sources."
      },
      {
        "id": "inspiring-presence",
        "name": "Inspiring Presence",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Presence 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 2 Once per Breather, allies who spend time with you during the recovery period gain temporary HP equal to CHA when the Breather ends. Does not stack with other temporary HP sources - use the highest pool."
      },
      {
        "id": "legendary-entrance",
        "name": "Legendary Entrance",
        "tier": 3,
        "type": "Utility",
        "action": "Once per session",
        "prerequisite": "Super Presence 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Presence 3 When you arrive at a scene where you are not yet present, your arrival automatically shifts the Response of all non-enemy groups who can perceive you by one step in a direction you choose. The GM may rule that particularly hostile groups resist this shift if their WIS Save Value meets or beats your Power Effect Value roll."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Aura",
        "text": "Extended Aura: Passive enemy aura extends by one additional range band at each Core Track tier (Close becomes Short at Tier 1; Short becomes Medium at Tier 2)."
      },
      {
        "name": "Deeper Fear",
        "text": "Deeper Fear: When Unnerving Gaze causes Frightened, the condition persists until end of the target's next Turn rather than yours."
      },
      {
        "name": "Inspiring Rally",
        "text": "Inspiring Rally: When you use Rally, the ally may also immediately move up to 10 ft as a free action without provoking Reactions."
      },
      {
        "name": "Residual Dread",
        "text": "Residual Dread: When an enemy ends the Frightened condition applied by any Super Presence power, they immediately become Shaken until end of their following Turn."
      }
    ],
    "limitations": [
      {
        "name": "Emotional Broadcast",
        "text": "Emotional Broadcast: Presence is always on and cannot be suppressed. Attempts to move unnoticed, infiltrate, or blend into a crowd automatically fail unless you take specific technological or mystical measures to suppress the effect. +1 Power Pick."
      },
      {
        "name": "Reactive Presence",
        "text": "Reactive Presence: Powers require you to be perceived. Against targets who cannot see, hear, or otherwise sense you, all Super Presence powers that require the target to perceive you are unavailable. +1 Power Pick."
      },
      {
        "name": "Singular Focus",
        "text": "Singular Focus: Passive aura does not discriminate without effort. In scenes containing both allies and enemies, declare at start of your Turn which direction your aura is projecting: enemy suppression or ally inspiration. Cannot run both passive effects simultaneously without using Legendary Presence. +1 Power Pick. Super Senses Power Set"
      }
    ]
  },
  {
    "id": "super-senses",
    "name": "Super Senses",
    "governingAbility": "PER (fixed) \u00b7 +1 to PER at each Core Track step",
    "abilityOptions": [
      "per"
    ],
    "associatedConditions": "Blinded (counters), Deafened (counters), Hidden (counters), Surprised (counters)",
    "defaultDamage": "",
    "abilityScoreBonus": "+1 to Perception at each Core Track step",
    "tacticalRole": "Information superiority; never ambushed; best scout/investigator/overwatch operative on any team",
    "limitationNote": "",
    "description": "Super Senses is the Power Set of perception pushed beyond the boundaries of what human biology should allow. Not keen eyesight or good hearing but something categorically different: senses that operate across spectra ordinary humans cannot access, at ranges that make distance meaningless, with precision that turns the world into a constant stream of information that most people are simply not built to process. A Super Senses hero does not observe the world. They read it.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Senses 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to PER. Advantage on all Notice checks. Darkvision to Short range (25-50 ft): dim light as bright, darkness as dim. Cannot be surprised while conscious. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Senses 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Senses 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to PER. Darkvision extends to Medium range (50-120 ft). Hear heartbeats, detect micro-expressions, track by scent, and perceive thermal signatures within Short range (25-50 ft). Automatically detect Hidden creatures within Close range (25 ft) without making a check. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Senses 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Senses 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to PER. Automatically succeed on Notice checks of DC 20 or lower. Perceive precise location of any creature within Medium range (50-120 ft) regardless of concealment, darkness, or invisibility, as long as they are not specifically shielded against multiple sense types simultaneously. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Senses 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Senses 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to PER. Once per day, enter Hyper-Awareness for 1 minute: automatically succeed on all Notice, Insight, and Investigation checks regardless of DC; 360-degree perception with no blind spots; perceive all invisible and Hidden creatures within Long range (120-300 ft); add PER to all Active Defense rolls."
      }
    ],
    "powers": [
      {
        "id": "spot-weakness",
        "name": "Spot Weakness",
        "tier": 1,
        "type": "At-Will",
        "action": "Bonus Action",
        "prerequisite": "Super Senses 1 \u00b7 Must be able to perceive the target",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 1 \u00b7 Must be able to perceive the target A moment of observation reveals exactly where the target is most vulnerable right now. Choose one ally within Short range (25-50 ft): their next attack against the target before end of your next Turn deals additional damage equal to Prowess on a hit. Alternatively, use on yourself: your next attack against the target gains Advantage."
      },
      {
        "id": "sensory-overload",
        "name": "Sensory Overload",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Senses 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + PER + Prowess vs. Willpower\n- Hit: Power Effect Value vs. CON - Failure: Blinded or Deafened (your choice); Strong Success on attack: both Blinded and Deafened (both until end of your next Turn)"
      },
      {
        "id": "precision-strike",
        "name": "Precision Strike",
        "tier": 2,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Super Senses 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Senses 2 After a moment of complete sensory analysis, direct an attack to land exactly where it will do the most damage. Your next attack or one ally's next attack before end of your next Turn ignores cover bonuses, treats the target as if they have no Resistance to that damage type, and adds PER modifier to the damage roll on a hit."
      },
      {
        "id": "echo-blast",
        "name": "Echo Blast",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Senses 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Senses 2\n- Range: Close cone (25-ft cone originating from you)\n- Attack: 1d20 + PER + Prowess vs. Willpower of each creature\n- Hit: 2 Power Dice thunder or psychic damage (your choice). Power Effect Value vs. CON - Failure: Dazed; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "analytical-vision",
        "name": "Analytical Vision",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Senses 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Senses 3 For 1 minute, automatically know the current HP (exact number), all active conditions, all Resistance and Immunity types, all remaining Encounter Power uses, and one hidden fact about every creature you can perceive. This information updates in real time. Share one piece of information per Turn with an ally as a free action."
      },
      {
        "id": "sensory-assault",
        "name": "Sensory Assault",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Senses 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Senses 3\n- Range: Short range area (25-50 ft), all enemies who can perceive you\n- Attack: 1d20 + PER + Prowess vs. Willpower of each target\n- Hit: 5 Power Dice psychic damage. Power Effect Value vs. WIS - Failure: Stunned; Success: Dazed (both until end of your next Turn). Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "enhanced-vision",
        "name": "Enhanced Vision",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Senses 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 1 See through smoke, fog, and light obscurement without penalty. Read fine print at Medium range (50-120 ft) and identify faces at Long range (120-300 ft). Darkness beyond your darkvision range appears as dim light rather than total blackness."
      },
      {
        "id": "tracking-sense",
        "name": "Tracking Sense",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Senses 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 1 Track any creature or object you have directly perceived within the last 24 hours by scent, sound residue, thermal trace, or visual trail - Advantage on all checks to follow the trail. Rain, crowds, and time degrade the trail but do not automatically end it."
      },
      {
        "id": "lie-detection",
        "name": "Lie Detection",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Senses 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 2 Advantage on Insight checks to detect deception. When a creature lies to you in direct conversation and you succeed on an Insight check, you automatically know the lie is a lie - though not necessarily what the truth is. Does not function against creatures who genuinely believe what they are saying."
      },
      {
        "id": "x-ray-vision",
        "name": "X-Ray Vision",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Senses 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Senses 3 See through solid matter up to 1 foot thick within Short range (25-50 ft). Lead, force fields, and materials specifically designed to block enhanced perception block this sense. You can voluntarily suppress this sense when you do not want to see through surfaces."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Darkvision",
        "text": "Extended Darkvision: Darkvision extends by one range band at each tier."
      },
      {
        "name": "Shared Perception",
        "text": "Shared Perception: Once per encounter as a Bonus Action, share your full sensory picture with one ally for 1 minute - they gain your darkvision and automatic Hidden creature detection while the link is active."
      },
      {
        "name": "Improved Spot Weakness",
        "text": "Improved Spot Weakness: When you use Spot Weakness on yourself, the Advantage lasts for your next two attacks rather than one."
      },
      {
        "name": "Danger Sense",
        "text": "Danger Sense: Advantage on all Active Defense rolls against attacks from sources you were not previously aware of. Ambushes and hidden attackers no longer catch you flat-footed."
      }
    ],
    "limitations": [
      {
        "name": "Sensory Vulnerability",
        "text": "Sensory Vulnerability: Enhanced senses can be overwhelmed. When subjected to intense light, sound, or other sensory input beyond normal levels, become Dazed until end of your next Turn and lose benefits of passive Core Track features for that Turn. +1 Power Pick."
      },
      {
        "name": "Constant Input",
        "text": "Constant Input: Senses never stop. During Downtime and social scenes, the constant stream of sensory data creates fatigue - Disadvantage on saves against exhaustion; Disadvantage on social Skill checks in loud, crowded, or visually chaotic environments unless you take measures to dampen your senses. +1 Power Pick."
      },
      {
        "name": "Narrow Spectrum",
        "text": "Narrow Spectrum: Choose two sense types (sight, hearing, smell, touch, taste, thermal, electromagnetic). Super Senses powers only operate through those two types. Effects that block those specific senses completely negate your Super Senses benefits. +1 Power Pick. Super Speed Power Set"
      }
    ]
  },
  {
    "id": "super-speed",
    "name": "Super Speed",
    "governingAbility": "DEX (fixed) - all attack rolls, Effect Values, and Speed Action-based checks",
    "abilityOptions": [
      "dex"
    ],
    "associatedConditions": "Slowed (counters and inflicts), Prone (resists), Shaken (inflicts through disruption) Special MechanicSpeed Actions - a specialized action type granted exclusively by this Power Set",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Does more in a single Turn than most heroes accomplish in three; overwhelms through presence, pressure, and impossibly fast repositioning",
    "limitationNote": "",
    "description": "Super Speed is the Power Set of blistering velocity and superhuman reaction time. A speedster does not simply cross the battlefield faster than anyone else - they cross it multiple times in the space of a single heartbeat, create afterimages, vibrate through solid matter, and experience combat as a series of moments they have already processed before anyone else has finished reacting to the first one. Super Speed heroes are defined by their relationship to time as much as to space.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Speed 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Gain 1 Speed Action per Turn in addition to normal Action, Bonus Action, and Reactions. Base movement speed +15 ft. Advantage on Initiative rolls. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Speed 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Speed 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Gain 2 Speed Actions per Turn. Base movement speed +30 ft (replaces Tier 1 bonus). Can run across liquids and up vertical surfaces as part of any movement using a Speed Action. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Speed 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Speed 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Gain 3 Speed Actions per Turn. Base movement speed +60 ft (replaces Tier 2 bonus). Can move through solid barriers up to 5 ft thick by vibrating molecules - if you end movement inside solid matter, expelled to nearest open space and take 2 Power Dice force damage. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Speed 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Speed 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Gain 4 Speed Actions per Turn. Base movement speed is effectively unlimited within any standard combat space - move to any point in the encounter area as part of a single movement action. Once per encounter, declare that you have already acted before anyone else this Turn regardless of initiative - take one Speed Action before any other creature acts. Speed Actions Speed Actions are a specialized action type granted exclusively by this Power Set, in addition to your normal Action, Bonus Action, and Reactions each Turn. A Speed Action may be used to: Move up to your full movement speed. Dash (move an additional Zone). Disengage. Stand from Prone. Interact with one object. Use a Super Speed power specifically tagged as a Speed Action. A Speed Action may NOT be used to: Take the full Attack Action. Use non-Speed Encounter Powers. Use Daily Powers. Activate powers from unrelated Power Sets unless the GM rules the fiction supports it. Speed Action attacks are subject to the secondary attacks Disadvantage rule - a Speed Action that involves an attack roll is made at Disadvantage. Unused Speed Actions are lost at end of your Turn and cannot be converted into other action types or saved between Turns."
      }
    ],
    "powers": [
      {
        "id": "speed-strike",
        "name": "Speed Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Speed Action",
        "prerequisite": "Super Speed 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + DEX + Prowess vs. Parry/Block at Disadvantage (secondary attack rule)\n- Hit: 1 Power Die + DEX modifier damage. Strong Success despite Disadvantage: Shaken until end of target's next Turn."
      },
      {
        "id": "afterimage",
        "name": "Afterimage",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Super Speed 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 1 Move up to Close range (25 ft) without provoking Reactions. Until start of your next Turn, the first attack made against you has Disadvantage as attackers target where you were rather than where you are. Applies prospectively to the next attack, not retroactively to attacks already resolved."
      },
      {
        "id": "rapid-interpose",
        "name": "Rapid Interpose",
        "tier": 2,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Speed 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Speed 2 \u00b7 Trigger: An ally within Short range (25-50 ft) is targeted by an attack Move to your ally's position before the attack resolves - you become the target of the attack instead. The attack resolves against your Active Defense. After the attack resolves, you may move back up to Close range (25 ft) without provoking Reactions."
      },
      {
        "id": "whirlwind",
        "name": "Whirlwind",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Speed 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Speed 2 Move up to your full movement speed in any path through your current Zone and adjacent Zones. Make one Speed Strike attack against each enemy you pass within Close range (25 ft) during this movement. Each attack is at Disadvantage per the secondary attacks rule. May not attack the same target more than once. Maximum targets: equal to Prowess."
      },
      {
        "id": "impossible-reaction",
        "name": "Impossible Reaction",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Speed 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Speed 3 \u00b7 Trigger: Any creature within Short range (25-50 ft) declares an action or attack Before the declared action resolves, take one Speed Action. This Speed Action follows all normal Speed Action rules including Disadvantage on attacks. After your Speed Action resolves, the original action proceeds normally. This represents inserting a burst of activity into a gap so small no one else could perceive it."
      },
      {
        "id": "blitz",
        "name": "Blitz",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Speed 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Speed 3 Move up to Long range (300 ft) in a straight line without provoking Reactions. Each creature in your path within Close range (25 ft) of the line rolls DEX vs. your Power Effect Value - Failure: 3 Power Dice bludgeoning + DEX modifier damage + knocked Prone; Success: half damage only. After completing the movement, make one Speed Strike attack against any creature within Close range (25 ft) of your final position at no Disadvantage for this attack only."
      }
    ],
    "utilities": [
      {
        "id": "fast-feet",
        "name": "Fast Feet",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Speed 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 1 Difficult terrain costs no additional movement during Speed Actions. Ignore non-superpowered environmental movement penalties when using Speed Actions."
      },
      {
        "id": "wall-run",
        "name": "Wall Run",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Speed 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 2 Move across vertical surfaces and ceilings during any movement using a Speed Action. Unlike Super Agility's version, you must use a Speed Action for this movement and must end your movement on a solid surface or begin to fall."
      },
      {
        "id": "vibration-phase",
        "name": "Vibration Phase",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Speed 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 3 By vibrating your molecules at an exact frequency, pass through one solid barrier up to 5 ft thick as a Speed Action. Distinct from the passive phasing in Core Track 3 - costs a Speed Action rather than being part of normal movement, but does not risk expulsion if used deliberately with this power."
      },
      {
        "id": "mass-evacuation",
        "name": "Mass Evacuation",
        "tier": 3,
        "type": "Utility",
        "action": "Once per day",
        "prerequisite": "Super Speed 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Speed 3 As an Action, move a number of civilians or allies equal to twice your Prowess to safety within your movement reach. Each individual is moved one at a time at impossible speed, appearing to simply vanish from danger and reappear somewhere safe in the span of a single heartbeat. Evacuated creatures may not be moved beyond Long range (300 ft) from their starting position."
      }
    ],
    "enhancements": [
      {
        "name": "Improved Speed Strike",
        "text": "Improved Speed Strike: Speed Strike no longer suffers Disadvantage when it is the first Speed Action attack you make on your Turn. Subsequent Speed Action attacks on the same Turn still apply Disadvantage normally."
      },
      {
        "name": "Afterimage Upgrade",
        "text": "Afterimage Upgrade: Afterimage now causes Disadvantage on the first two attacks made against you before start of your next Turn rather than only the first."
      },
      {
        "name": "Rapid Interpose Reach",
        "text": "Rapid Interpose Reach: Rapid Interpose may now be triggered for allies within Medium range (50-120 ft) rather than Short range only."
      },
      {
        "name": "Momentum Build",
        "text": "Momentum Build: If you use all your Speed Actions in a Turn on movement without making any attacks, your base movement speed doubles until start of your next Turn."
      }
    ],
    "limitations": [
      {
        "name": "Friction Damage",
        "text": "Friction Damage: Moving at super speed generates heat and friction. When you use 3 or more Speed Actions in a single Turn, take 1 Power Die fire damage at end of that Turn. Cannot be reduced by Resistance or flat damage reduction. +1 Power Pick."
      },
      {
        "name": "Tunnel Vision",
        "text": "Tunnel Vision: When using Blitz or moving at full speed through multiple Zones, Disadvantage on Notice checks to detect hidden threats, traps, or ambushes along your movement path. +1 Power Pick."
      },
      {
        "name": "Metabolic Cost",
        "text": "Metabolic Cost: Maintaining super speed requires significant caloric and metabolic resources. During Downtime you require twice the normal food and rest to fully recover, and if you have not eaten within 6 hours, your Speed Actions drop by 1 until you do. +1 Power Pick. Super Strength Power Set"
      }
    ]
  },
  {
    "id": "super-strength",
    "name": "Super Strength",
    "governingAbility": "STR (fixed) \u00b7 +1 to STR at each Core Track step",
    "abilityOptions": [
      "str"
    ],
    "associatedConditions": "Prone, Dazed, Stunned, Restrained (via grapple)",
    "defaultDamage": "Power Dice x Core Track level + STR modifier",
    "abilityScoreBonus": "+1 to Strength at each Core Track step Super Strength is the oldest and most recognizable Power Set in superhero fiction. Raw, overwhelming physical might that rewrites what a body can do - the ability to lift buildings, throw vehicles, punch through reinforced concrete, hold collapsing structures together with bare hands. Super Strength heroes are not subtle. They are force. They solve physical problems by being stronger than the problem. At higher tiers they become forces of nature whose interaction with ordinary matter is a one-sided conversation that matter always loses.",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Super Strength 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to STR. Lifting, carrying, dragging, and breaking capacity equals STR score in tons. Unarmed strikes deal 1 Power Die + STR modifier per default damage track. Advantage on all STR-based Skill checks involving lifting, breaking, grappling, or forcing objects. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Super Strength 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Strength 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to STR. Capacity expands to STR score x 10 in tons. Count as one size category larger for all grappling, shoving, and forced movement purposes. Flat damage reduction equal to Prowess against mundane weapon impacts. Unarmed strikes deal 2 Power Dice + STR modifier. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Super Strength 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Super Strength 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to STR. Capacity expands to STR score x 100 in tons. Can lift and throw vehicles, tear reinforced barriers apart, brace collapsing structures for a number of rounds equal to STR modifier. All forced movement you generate through Super Strength powers increases by 10 ft. Unarmed strikes deal 3 Power Dice + STR modifier. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Super Strength 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Super Strength 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to STR. Capacity reaches STR score x 1000 in tons. Once per encounter when you deal damage with a Super Strength power or unarmed strike, add 1 additional Power Die to the damage roll as a free action. Unarmed strikes deal 4 Power Dice + STR modifier. The scale of force you represent makes you a genuine environmental hazard when you choose to be."
      }
    ],
    "powers": [
      {
        "id": "mighty-blow",
        "name": "Mighty Blow",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Super Strength 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + STR + Prowess vs. Parry/Block\n- Hit: Default damage track + STR modifier again (the modifier is added twice, not doubled with the dice). Strong Success: push Close range (25 ft) or knock Prone. HEROIC Success: push Short range (25-50 ft) and knock Prone."
      },
      {
        "id": "object-throw",
        "name": "Object Throw",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Super Strength 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 1\n- Range: Short (25-50 ft) for objects up to 1 ton; Medium (50-120 ft) for smaller objects\n- Attack: 1d20 + STR + Prowess vs. Dodge\n- Hit: Default damage track (bludgeoning). Large objects that miss still land somewhere - GM determines where and whether difficult terrain or a hazard is created. Strong Success: thrown object creates difficult terrain in a Close area (15-ft radius) around the impact point."
      },
      {
        "id": "shockwave-strike",
        "name": "Shockwave Strike",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Strength 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 1\n- Range: Close area (15-ft radius, 0-25 ft)\n- Attack: 1d20 + STR + Prowess vs. Dodge of each creature\n- Hit: 1 Power Die + STR modifier bludgeoning damage. Power Effect Value vs. STR or knocked Prone."
      },
      {
        "id": "thunderclap",
        "name": "Thunderclap",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Strength 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Strength 2\n- Range: Close cone (25-ft cone originating from you)\n- Attack: 1d20 + STR + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice thunder damage. Power Effect Value vs. CON - Failure: Dazed; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "groundbreaker",
        "name": "Groundbreaker",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Super Strength 2",
        "creationCost": 2,
        "text": "Prerequisite: Super Strength 2\n- Range: Close area (15-ft radius, 0-25 ft)\n- Attack: 1d20 + STR + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice bludgeoning damage. Power Effect Value vs. DEX - Failure: knocked Prone; area becomes difficult terrain until cleared. Success: knocked Prone only."
      },
      {
        "id": "seismic-slam",
        "name": "Seismic Slam",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Super Strength 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Strength 3 \u00b7 Trigger: A creature within Close range (25 ft) attacks you or an ally Before the attack resolves, grab, shove, or strike the attacker with enough force to disrupt the action. The attacker rolls STR vs. your Power Effect Value - Failure: the attack has Disadvantage + attacker is pushed 15 ft + knocked Prone; Success: the attack has Disadvantage only."
      },
      {
        "id": "devastating-force",
        "name": "Devastating Force",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Super Strength 3",
        "creationCost": 3,
        "text": "Prerequisite: Super Strength 3\n- Range: Close (0-25 ft)\n- Attack: 1d20 + STR + Prowess vs. Parry/Block\n- Hit: 7 Power Dice + STR modifier bludgeoning damage, maximum on all dice. All creatures within Close range (25 ft) of the primary target roll STR vs. your Power Effect Value or take half the damage (rounded down) from the shockwave. Strong Success against primary target: also Stunned until end of your next Turn."
      }
    ],
    "utilities": [
      {
        "id": "carry-capacity",
        "name": "Carry Capacity",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Strength 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 1 Carry, support, or move a number of people or objects simultaneously equal to STR modifier without penalty to movement or actions. Rescuing civilians, supporting collapsing structures, and moving large objects are all handled without Skill checks at this scale."
      },
      {
        "id": "break-object",
        "name": "Break Object",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Strength 1",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 1 Deal maximum damage on all dice when attacking objects, barriers, structures, vehicles, or restraints. Mundane locks, chains, doors, and walls present no meaningful resistance. Reinforced or superpowered barriers may still require a check at the GM's discretion."
      },
      {
        "id": "brace-structure",
        "name": "Brace Structure",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Strength 2",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 2 Physically support a collapsing or damaged structure, holding it stable for a number of rounds equal to STR modifier while others evacuate. During this time you cannot move from your position but may still take Actions. After the duration, the structure collapses unless reinforced by other means."
      },
      {
        "id": "earthmover",
        "name": "Earthmover",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Super Strength 3",
        "creationCost": 1,
        "text": "Prerequisite: Super Strength 3 Over the course of one scene, reshape terrain: dig trenches, clear rubble fields, move large quantities of earth or stone, demolish structures, or create barriers. The scale of work you can accomplish in one scene would take construction equipment days. Obvious applications for rescue, fortification, and environmental problem-solving."
      }
    ],
    "enhancements": [
      {
        "name": "Improved Throw",
        "text": "Improved Throw: Object Throw's range increases by one range band - Short becomes Medium for large objects; Medium becomes Long for smaller objects."
      },
      {
        "name": "Shockwave Mastery",
        "text": "Shockwave Mastery: When Groundbreaker or Shockwave Strike knocks a target Prone, they must also roll CON vs. your Power Effect Value or become Dazed until end of your next Turn."
      },
      {
        "name": "Chain Strike",
        "text": "Chain Strike: Once per encounter when you reduce a target to 0 HP with Mighty Blow, immediately make one additional Mighty Blow against a different target within Close range (25 ft) as a free action - at Disadvantage per the secondary attacks rule."
      },
      {
        "name": "Crush",
        "text": "Crush: While you have a target Grappled, deal 1 Power Die + STR modifier bludgeoning damage to them at the start of each of their Turns as a passive effect, with no action required."
      }
    ],
    "limitations": [
      {
        "name": "Collateral Damage",
        "text": "Collateral Damage: Strength is difficult to modulate. When you use any Super Strength Combat Power in an enclosed space, near civilians, or around fragile structures, the GM may introduce collateral damage consequences even on a successful attack. Spend 1 Edge to avoid. +1 Power Pick."
      },
      {
        "name": "Unsubtle",
        "text": "Unsubtle: Strength cannot be concealed during use. Any attempt to use Super Strength discreetly, quietly, or without attracting immediate attention automatically fails. +1 Power Pick."
      },
      {
        "name": "Overextension",
        "text": "Overextension: Using Devastating Force always causes 1 Burnout regardless of other factors. +1 Power Pick. Telekinesis Power Set"
      }
    ]
  },
  {
    "id": "telekinesis",
    "name": "Telekinesis",
    "governingAbility": "WIS (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "wis"
    ],
    "associatedConditions": "Restrained, Prone, Stunned (high tier), Slowed",
    "defaultDamage": "Power Dice x Core Track level + WIS modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Most tactically flexible hero in the game; attack and defend simultaneously; move allies and enemies; reshape the battlefield",
    "limitationNote": "",
    "description": "Telekinesis is the Power Set of mental force applied to physical reality - the ability to move, lift, hold, throw, crush, and reshape objects and creatures without touching them, using nothing but focused mental effort. A telekinetic does not need to be physically strong to overturn a vehicle or hurl a villain through a wall. They need to be mentally strong. The force they project is as real as any punch, and at higher tiers it operates at a scale that makes physical strength feel like a very small and intimate way of interacting with matter. The limitation is attention: telekinesis requires focus, and a telekinetic trying to do too many things at once is doing none of them well. The most dangerous telekinetics are the ones who have learned to pick the one thing that matters most and do it perfectly.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Telekinesis 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Move unattended objects up to WIS score in pounds within Short range (25-50 ft) as a free action. Exert fine manipulation on small objects within Close range (25 ft): picking locks, pressing buttons, writing, turning pages. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Telekinesis 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Telekinesis 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Lifting capacity increases to WIS score x 10 in pounds within Medium range (50-120 ft). Can lift and move objects large enough to provide cover, create barriers from available matter, and apply meaningful force to vehicles and structures. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Telekinesis 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Telekinesis 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Lifting capacity increases to WIS score x 100 in pounds within Long range (120-300 ft). Can lift and move vehicles, sections of building, and other large structures. Telekinetic force is now sufficient to affect superpowered targets without automatic failure from their physical resistance. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Telekinesis 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Telekinesis 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Lifting capacity reaches WIS score x 1000 in pounds. Once per day enter Telekinetic Singularity for 1 minute: maintain two Telekinesis Sustained Powers simultaneously; telekinetic attacks automatically gain Strong Success effects without the margin requirement; any creature you move involuntarily takes damage equal to Prowess + WIS modifier from the force of displacement on each instance of forced movement."
      }
    ],
    "powers": [
      {
        "id": "telekinetic-shove",
        "name": "Telekinetic Shove",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Telekinesis 1",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge\n- Hit: Default damage track (force). Strong Success: push target Short range (25-50 ft) in a direction you choose, or knock Prone."
      },
      {
        "id": "telekinetic-grip",
        "name": "Telekinetic Grip",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telekinesis 1",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Restrained until end of your next Turn; you may move target up to Close range (25 ft) in any direction as a free action at start of each of your Turns, dealing 1 Power Die force damage if impacted against a surface. Success: Slowed only."
      },
      {
        "id": "deflection-field",
        "name": "Deflection Field",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Telekinesis 1",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 1 \u00b7 Trigger: You or one ally within Close range (25 ft) is hit by a ranged attack or ranged Power Interpose a burst of telekinetic force. Reduce damage from that attack by 1 Power Die + WIS modifier. If this brings damage to 0, the attack is completely deflected and you may immediately redirect the projectile at any target within Short range (25-50 ft) as a free action, dealing 1 Power Die force damage on a hit with no attack roll required."
      },
      {
        "id": "telekinetic-barrage",
        "name": "Telekinetic Barrage",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telekinesis 2 \u00b7 Requires loose objects, debris, or environmental material available in the",
        "creationCost": 2,
        "text": "Prerequisite: Telekinesis 2 \u00b7 Requires loose objects, debris, or environmental material available in the area\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice + WIS modifier force and bludgeoning damage. Power Effect Value vs. STR - Failure: knocked Prone; Success: Shaken until end of your next Turn"
      },
      {
        "id": "crush",
        "name": "Crush",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telekinesis 2",
        "creationCost": 2,
        "text": "Prerequisite: Telekinesis 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge\n- Hit: 3 Power Dice force damage. Power Effect Value vs. STR - Failure: Restrained + Dazed until end of your next Turn; Success: Restrained only."
      },
      {
        "id": "telekinetic-shield",
        "name": "Telekinetic Shield",
        "tier": 2,
        "type": "Sustained",
        "action": "Bonus Action to activate",
        "prerequisite": "Telekinesis 2",
        "creationCost": 2,
        "text": "Prerequisite: Telekinesis 2 Maintain a constant telekinetic barrier around yourself. While sustained: flat damage reduction equal to Prowess against all physical and force damage; any creature that hits you with a melee attack rolls STR vs. your Power Effect Value or is pushed Close range (25 ft) from you. Sustaining costs a Bonus Action at start of each Turn."
      },
      {
        "id": "telekinetic-maelstrom",
        "name": "Telekinetic Maelstrom",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Telekinesis 3",
        "creationCost": 3,
        "text": "Prerequisite: Telekinesis 3\n- Range: Medium area (40-ft radius within 50-120 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge of each creature\n- Hit: 6 Power Dice force damage, maximum on all dice. Power Effect Value vs. STR - Failure:\nStunned until end of your next Turn + pushed Short range (25-50 ft) from the center; Success: knocked Prone + pushed Close range (25 ft) only."
      }
    ],
    "utilities": [
      {
        "id": "fine-manipulation",
        "name": "Fine Manipulation",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telekinesis 1",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 1\nPerform any task requiring fine manual dexterity within Close range (25 ft) using telekinesis alone: surgery, lockpicking, electronics work, writing, painting, assembling devices. Advantage on Skill checks involving fine manipulation performed telekinetically - the absence of tremor and precision of mental control exceeds what hands alone can achieve."
      },
      {
        "id": "telekinetic-flight",
        "name": "Telekinetic Flight",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telekinesis 2",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 2 Levitate and fly by applying telekinetic force to your own body. Flying speed equal to Close range per Turn (25 ft); can hover. Does not stack with the Flight Power Set."
      },
      {
        "id": "environmental-control",
        "name": "Environmental Control",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telekinesis 2",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 2 Over one scene of focused effort, rearrange the physical environment at scale within Medium range (50-120 ft): clear rubble fields, move large objects into position, create barriers from available matter, brace collapsing structures, or reshape terrain. Work that would take construction equipment hours takes you one scene."
      },
      {
        "id": "telekinetic-bubble",
        "name": "Telekinetic Bubble",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telekinesis 3",
        "creationCost": 1,
        "text": "Prerequisite: Telekinesis 3 As an Action, encase yourself or one willing ally within Close range (25 ft) in a spherical telekinetic field. HP equal to 5 x your Level + WIS modifier; Resistance to all damage; total cover. The occupant can see out and fire powers through it but cannot make physical attacks outward. Persists until destroyed, dismissed, or start of your Turn after next. A creature inside can dismiss it as a free action."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Grip",
        "text": "Extended Grip: Telekinetic Grip's range increases to Medium (50-120 ft) and the movement you can apply to a Restrained target increases to Short range (25-50 ft) per Turn."
      },
      {
        "name": "Improved Deflection",
        "text": "Improved Deflection: Deflection Field now reduces damage by 2 Power Dice + WIS modifier rather than 1 Power Die, and the redirect option fires automatically on a 0-damage result."
      },
      {
        "name": "Dual Grip",
        "text": "Dual Grip: Once per encounter, target two creatures simultaneously with Telekinetic Grip using one action. Both make saves separately. Concentration required - if you use any other Telekinesis power requiring concentration, both grips end."
      },
      {
        "name": "Kinetic Absorption",
        "text": "Kinetic Absorption: Once per encounter when you take force damage, absorb it instead of taking it. Your next Telekinetic Shove before end of your next Turn adds that absorbed damage to its damage roll."
      }
    ],
    "limitations": [
      {
        "name": "Focus Dependency",
        "text": "Focus Dependency: Powers require unbroken concentration. When Dazed, Stunned, or Shaken, all Sustained Telekinesis powers end immediately and you cannot activate new ones until the condition ends. +1 Power Pick."
      },
      {
        "name": "Line of Sight Required",
        "text": "Line of Sight Required: Can only affect targets and objects you can directly perceive. Targets behind total cover, in magical darkness, or otherwise beyond your perception are immune regardless of range. +1 Power Pick."
      },
      {
        "name": "Escalating Effort",
        "text": "Escalating Effort: Using Telekinetic Maelstrom or maintaining two Sustained Powers simultaneously always causes 1 Burnout regardless of other factors. +1 Power Pick. Telepathy Power Set"
      }
    ]
  },
  {
    "id": "telepathy",
    "name": "Telepathy",
    "governingAbility": "WIS (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "wis"
    ],
    "associatedConditions": "Dazed, Shaken, Stunned (high tier), Charmed (via domination)",
    "defaultDamage": "",
    "abilityScoreBonus": "",
    "tacticalRole": "Carries more dramatic weight than any other Power Set; reads and alters minds; defined as much by what you choose not to do as by what you can",
    "limitationNote": "",
    "description": "Telepathy is the Power Set of mental communication, psychic intrusion, emotional reading, memory access, and at its highest tiers, the direct rewriting of what a mind believes is real. At lower tiers telepaths read and transmit. At higher tiers they alter, implant, dominate, and reshape. Telepathy carries more dramatic weight than any other Power Set in the game. The question of consent is not abstract when a telepath is at the table. The best telepathic heroes are defined as much by what they choose not to do as by what they can.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Telepathy 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Sense the presence and general emotional state of minded creatures within Close range (25 ft). Send and receive wordless mental impressions with willing creatures within Short range (25-50 ft). Advantage on Insight checks. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Telepathy 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Telepathy 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Reach extends to Medium range (50-120 ft); reading becomes specific rather than general. Full two-way telepathic conversations with willing creatures within Medium range. Automatically know when a creature within Short range (25-50 ft) is lying to you, though not what the truth is. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Telepathy 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Telepathy 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Reach extends to any creature you have previously made telepathic contact with, regardless of distance, on the same plane. Mental intrusions become difficult to detect or defend against. Creatures that succeed on saves against your Telepathy powers still suffer Shaken until end of their next Turn. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Telepathy 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Telepathy 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Psychic Dominion for 1 minute: reach extends to Long range (120-300 ft); all creatures within Short range (25-50 ft) that fail saves against your powers are also Shaken for the remainder of the encounter in addition to other conditions; maintain two Telepathy Sustained Powers simultaneously."
      }
    ],
    "powers": [
      {
        "id": "mental-probe",
        "name": "Mental Probe",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Telepathy 1",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: 1 Power Die + WIS modifier psychic damage. Power Effect Value vs. WIS - Failure: Shaken until end of your next Turn; Success: no additional effect beyond damage."
      },
      {
        "id": "psychic-assault",
        "name": "Psychic Assault",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telepathy 1",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: 2 Power Dice psychic damage. Power Effect Value vs. WIS - Failure: Dazed; Success: Shaken (both until end of your next Turn)"
      },
      {
        "id": "compel",
        "name": "Compel",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telepathy 2",
        "creationCost": 2,
        "text": "Prerequisite: Telepathy 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Charmed until end of your next Turn (cannot willingly attack you; treats your allies as neutral rather than hostile; will not take actions that directly harm themselves; will comply with simple one-sentence directives). Success: Shaken only."
      },
      {
        "id": "mind-shield",
        "name": "Mind Shield",
        "tier": 2,
        "type": "Sustained",
        "action": "Utility",
        "prerequisite": "Telepathy 2",
        "creationCost": 2,
        "text": "Prerequisite: Telepathy 2 Extend a protective psychic barrier around yourself or one willing ally within Close range (25 ft). The protected creature gains Advantage on all saves against psychic effects, mental intrusion, Charmed conditions, and fear effects. Sustained - maintain with Bonus Action each Turn; may switch the protected creature as part of the maintenance Bonus Action."
      },
      {
        "id": "psychic-domination",
        "name": "Psychic Domination",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Telepathy 3 \u00b7 May only be used against any single target once per encounter",
        "creationCost": 3,
        "text": "Prerequisite: Telepathy 3 \u00b7 May only be used against any single target once per encounter\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Charmed and under direct control until end of your next Turn (uses their Action, Bonus Action, and Movement as you direct; will not take actions that would kill them instantly; may attack allies, move into danger, or use powers as directed; each time they take damage they may reroll their save). Success: standard Compel effect only. A target who succeeds on their save against Psychic Domination is immune to it for the remainder of the encounter."
      },
      {
        "id": "mindwipe",
        "name": "Mindwipe",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Telepathy 3",
        "creationCost": 3,
        "text": "Prerequisite: Telepathy 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Willpower\n- Hit: 5 Power Dice psychic damage. Power Effect Value vs. WIS - Failure: Stunned until end of your next Turn + loses access to one chosen Power Set or tactical capability for the remainder of the encounter (Power Disrupted); Success: Dazed only. Strong Success on attack: maximum damage on all dice."
      }
    ],
    "utilities": [
      {
        "id": "surface-read",
        "name": "Surface Read",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telepathy 1",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 1 As a Bonus Action, read the surface thoughts of one creature within Close range (25 ft). Learn their current emotional state, most immediate conscious intention, and one thing they are actively trying to conceal in this moment. Willing creatures may allow deeper access. Unwilling creatures are aware of the intrusion if they roll WIS vs. your Power Effect Value and succeed. No attack roll. No damage. Pure information tool."
      },
      {
        "id": "telepathic-link",
        "name": "Telepathic Link",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telepathy 1",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 1 As an Action, establish a two-way telepathic communication link between yourself and up to Prowess in willing creatures within Short range (25-50 ft). The link persists for one scene. Linked creatures can communicate silently and instantaneously regardless of distance within the scene. Relay information to all linked creatures simultaneously as a free action once per Turn."
      },
      {
        "id": "memory-access",
        "name": "Memory Access",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Telepathy 2",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 2 With one minute of contact with a willing or restrained creature, access a specific memory. Must know roughly what you are looking for: a specific event, face, location, or conversation. Experience the memory as the target experienced it. The GM rolls the unwilling subject's WIS Save Value against your Power Effect Value roll to resist - if their Save Value meets or beats your roll, they resist and become aware of the attempt. Not a general memory scan - retrieves what you search for, not everything the target knows."
      },
      {
        "id": "mass-suggestion",
        "name": "Mass Suggestion",
        "tier": 3,
        "type": "Utility",
        "action": "Once per scene",
        "prerequisite": "Telepathy 3",
        "creationCost": 1,
        "text": "Prerequisite: Telepathy 3 As an Action, broadcast a simple suggestion to all minded creatures within Medium range (50-120 ft) that can perceive you. The suggestion must be a single sentence and cannot demand self-harm. Each creature rolls WIS vs. your Power Effect Value - Failure: they follow the suggestion as though it seemed reasonable and self-motivated until end of the scene or until the suggestion conflicts with their core values or safety; Success: they resist and are aware something attempted to influence them. Not combat-usable - requires a moment of broadcast focus and functions in social and investigation scenes primarily."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Reach",
        "text": "Extended Reach: Mental Probe and Psychic Assault both gain one additional range band - Short becomes Medium for both."
      },
      {
        "name": "Deepened Read",
        "text": "Deepened Read: Surface Read now also reveals the target's most significant current fear and the name or face of the person they are most loyal to."
      },
      {
        "name": "Shared Shield",
        "text": "Shared Shield: Mind Shield may now protect two creatures simultaneously rather than one, with both benefiting from Advantage on psychic saves for the same Sustained Power cost."
      },
      {
        "name": "Psychic Feedback",
        "text": "Psychic Feedback: When a creature succeeds on a save against any Telepathy power, they take psychic damage equal to Prowess as the mental contact snaps back. They kept you out but it was not free."
      }
    ],
    "limitations": [
      {
        "name": "Emotional Bleed",
        "text": "Emotional Bleed: The minds you touch leave impressions. After any combat in which you used Telepathy powers on three or more creatures, you become Shaken until your next Breather as the accumulated emotional residue overwhelms your own baseline. +1 Power Pick."
      },
      {
        "name": "Physical Toll",
        "text": "Physical Toll: Sustained psychic effort is physically exhausting. Using Mindwipe, Psychic Domination, or Memory Access always causes 1 Burnout regardless of other factors. +1 Power Pick."
      },
      {
        "name": "Open Mind",
        "text": "Open Mind: Psychic sensitivity cannot be fully shielded. Attackers with psychic powers gain Advantage on attack rolls against you and you have Disadvantage on saves against psychic effects from other sources. +1 Power Pick. Teleportation Power Set"
      }
    ]
  },
  {
    "id": "teleportation",
    "name": "Teleportation",
    "governingAbility": "Choose DEX , INT , or WIS at character creation",
    "abilityOptions": [
      "dex",
      "int",
      "wis"
    ],
    "associatedConditions": "Disoriented (Shaken + Dazed, on passengers and enemies), Prone (inflicts on displaced enemies), Restrained (counters through escape teleportation)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Instantaneous spatial displacement; unique relationship to the battlefield no other power replicates; escape, flanking, and portal control",
    "limitationNote": "",
    "description": "Teleportation is the Power Set of instantaneous spatial displacement. Not movement. Not crossing distance. Skipping it entirely. A teleporter does not travel from one point to another - they cease to exist at the first point and begin to exist at the second, with the space between rendered meaningless. This creates a relationship to the battlefield that neither flight nor super speed can replicate: a teleporter does not need to cross the Zone between themselves and their target. They simply appear there. DEX - physical instinct and combat precision, split-second acrobatic spatial awareness. INT - calculated dimensional geometry and spatial mapping; super-science or techno-teleporter. WIS - mystical attunement and dimensional sensitivity; portal-weaver navigating spaces between spaces through spiritual awareness.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Teleportation 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive As a Movement action, vanish from your current location and appear at any point within Close range (25 ft) you can see or have clearly visualized. Your teleportation carries worn equipment and anything you are holding. Cannot teleport into a space occupied by solid matter - if destination is somehow invalid, the teleport fails and your Movement action is spent. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Teleportation 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Teleportation 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Range expands to Medium range (50-120 ft) for any point you can see or have clearly visualized. Can now teleport to locations you cannot currently see but have personally visited (chance of minor positional error at GM discretion). Carry one willing creature of your size or smaller. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Teleportation 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Teleportation 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Teleport to any location on the same plane you have personally visited, seen clearly in real time, or can precisely visualize through a reliable description. Carry a number of willing creatures equal to Governing Ability modifier. Passengers experience a moment of dimensional transit that is disorienting but not harmful. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Teleportation 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Teleportation 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Teleport between planes, dimensions, and realities with GM approval for the destination's accessibility. Within a single plane, teleport to any location you can conceptually identify without having visited it (though imprecise destinations carry greater positional error). Once per encounter as a free action, teleport up to Short range (25-50 ft) without spending your Movement action - a reflexive spatial skip that has become completely automatic."
      }
    ],
    "powers": [
      {
        "id": "combat-teleport",
        "name": "Combat Teleport",
        "tier": 1,
        "type": "At-Will",
        "action": "Movement (not Action)",
        "prerequisite": "Teleportation 1",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 1 Teleport to any unoccupied space within Close range (25 ft) you can see. This replaces your normal movement for the Turn. Does not provoke Reactions. If you teleport to a space adjacent to an enemy, your next attack against that enemy before end of your Turn gains Advantage as you appear at an unexpected angle."
      },
      {
        "id": "vanishing-strike",
        "name": "Vanishing Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Teleportation 1",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 1\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Parry/Block\n- Hit: Default damage track. Immediately after the attack resolves (hit or miss), teleport up to Close\nrange (25 ft) to any unoccupied space you can see without provoking Reactions. Strong Success: target also Shaken until end of their next Turn."
      },
      {
        "id": "displacement",
        "name": "Displacement",
        "tier": 1,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Teleportation 1",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 1 \u00b7 Trigger: You are targeted by an attack you can perceive Before the attack roll is made, teleport up to Close range (25 ft) to any unoccupied space you can see. The attack must be resolved against your new position. If the attacker cannot reach or target your new position, the attack automatically misses."
      },
      {
        "id": "portal",
        "name": "Portal",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Teleportation 2",
        "creationCost": 2,
        "text": "Prerequisite: Teleportation 2 Create an entry portal at a point within Close range (25 ft) and an exit portal at any point within Medium range (50-120 ft) you can see or have visited. The portal pair remains open until the start of your next Turn. Any creature that moves through the entry portal immediately appears at the exit portal. Enemies can also use the portals if they choose. A creature teleported through a portal involuntarily rolls WIS vs. your Power Effect Value or is Disoriented (Shaken + Dazed) until end of their next Turn."
      },
      {
        "id": "offensive-displacement",
        "name": "Offensive Displacement",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Teleportation 2",
        "creationCost": 2,
        "text": "Prerequisite: Teleportation 2\n- Range: Close (0-25 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Target teleported up to Short range (25-50 ft) to a location you choose that you can see. Power Effect Value vs. WIS - Failure: Disoriented (Shaken + Dazed) until end of your next Turn + 2 Power Dice force damage from displacement stress; Success: Dazed only. If you teleport the target into a hazardous location, GM determines additional environmental consequences."
      },
      {
        "id": "dimensional-anchor",
        "name": "Dimensional Anchor",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Teleportation 3",
        "creationCost": 3,
        "text": "Prerequisite: Teleportation 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Willpower\n- Hit: Power Effect Value vs. WIS - Failure: Power Disrupted for all teleportation, phasing, and dimensional movement until end of your next Turn (cannot teleport, become intangible, or exit the current plane by any means); Success: Disadvantage on their next teleportation or phasing attempt before end of your next Turn."
      },
      {
        "id": "mass-transit",
        "name": "Mass Transit",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Teleportation 3",
        "creationCost": 3,
        "text": "Prerequisite: Teleportation 3 Open a dimensional corridor large enough for your entire team and designated allies. You and up to Governing Ability modifier + Prowess willing creatures teleport together to any location within your Core Track 3 range. Transit is instantaneous. Each passenger rolls WIS vs. your Power Effect Value or arrives Shaken until end of their first Turn from dimensional disorientation. Unwilling creatures cannot be brought through Mass Transit. The power that evacuates a party from a losing position, delivers a strike team to a target location, or completes an extraction."
      }
    ],
    "utilities": [
      {
        "id": "dimensional-sense",
        "name": "Dimensional Sense",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Teleportation 1",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 1 Automatically detect other teleporters, portals, dimensional distortions, and extradimensional spaces within Close range (25 ft). Advantage on checks to identify teleportation effects, dimensional rifts, and spatial anomalies."
      },
      {
        "id": "object-retrieval",
        "name": "Object Retrieval",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Teleportation 2",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 2 As a Bonus Action, teleport one unattended object within Medium range (50-120 ft) to your hand or to an unoccupied space within Close range (25 ft). The object must fit within your hand or be small enough to carry. Snatches a weapon from across the room, retrieves a dropped device, or steals an item from a surface without touching it."
      },
      {
        "id": "escape-artist",
        "name": "Escape Artist",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Teleportation 2",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 2 Once per encounter when you are Grappled, Restrained, Pinned, or Immobilized, teleport free as a free action at the start of your Turn. Appear in any unoccupied space within Close range (25 ft). No check required. You simply leave."
      },
      {
        "id": "dimensional-corridor",
        "name": "Dimensional Corridor",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Teleportation 3",
        "creationCost": 1,
        "text": "Prerequisite: Teleportation 3 Create a stable portal corridor between two fixed points that persists for one scene without concentration. Both endpoints must be locations you have personally visited. Any willing creature may use the corridor. Close it as a free action. Creates a permanent shortcut through a building, maintains a link between a safe house and a field position, or provides an extraction route that remains available throughout an operation."
      }
    ],
    "enhancements": [
      {
        "name": "Precision Transit",
        "text": "Precision Transit: When using Combat Teleport or Vanishing Strike, you may choose to appear in any space adjacent to your target rather than simply within range - including behind them, above them, or at an angle that denies them cover. Never land in an invalid space due to this enhancement."
      },
      {
        "name": "Passenger Comfort",
        "text": "Passenger Comfort: Willing creatures you carry through teleportation automatically succeed on their check against disorientation."
      },
      {
        "name": "Extended Portal",
        "text": "Extended Portal: The Portal power now remains open until the start of your Turn after next, giving it one additional round of availability."
      },
      {
        "name": "Rapid Displacement",
        "text": "Rapid Displacement: Displacement may now also trigger when you are targeted by an area effect that you can perceive being initiated, not only targeted attacks. Teleport out of the area before it resolves."
      }
    ],
    "limitations": [
      {
        "name": "Line of Sight Required",
        "text": "Line of Sight Required: Can only teleport to locations you can currently see with your own eyes. Visualized or remembered locations are unavailable. Portals must connect two points you can simultaneously observe. Precise within sight, blind beyond it. +1 Power Pick."
      },
      {
        "name": "Dimensional Signature",
        "text": "Dimensional Signature: Teleportation leaves a detectable trace: a sound, smell, flash of light, temperature drop, or crack of displaced air. Creatures with enhanced senses, dimensional awareness, or appropriate technology can track your teleportation signature and know exactly where you arrived. Stealth after teleporting requires a separate check at Disadvantage. +1 Power Pick."
      },
      {
        "name": "Carrying Limit",
        "text": "Carrying Limit: Cannot carry passengers when teleporting unless you spend your full Action on the transit. Combat Teleport and Displacement can never carry passengers regardless of Core Track level. +1 Power Pick. Trick Archery Power Set"
      }
    ]
  },
  {
    "id": "trick-archery",
    "name": "Trick Archery",
    "governingAbility": "DEX (fixed) \u00b7 +1 to DEX at each Core Track step",
    "abilityOptions": [
      "dex"
    ],
    "associatedConditions": "Prone (knockdown arrows), Restrained (net/cable arrows), Dazed (sonic/flashbang arrows), Blinded (smoke/flare arrows)",
    "defaultDamage": "Power Dice x Core Track level + DEX modifier",
    "abilityScoreBonus": "+1 to Dexterity at each Core Track step",
    "tacticalRole": "",
    "limitationNote": "",
    "description": "Trick Archery is the Power Set of the bow, the quiver, and the belief that a person with a string, a stick, and the right arrowhead can stand on any battlefield in the world and matter. Trick Archery heroes are not snipers - they are tactical fighters who happen to use a bow. The trick arrows are not gadgets attached to a ranged weapon. They are a fighting style: aggressive, creative, constantly adapting, and devastatingly effective in the hands of someone who has mastered the discipline of putting exactly the right arrowhead exactly where it needs to go at exactly the right moment.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Trick Archery 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive +1 to DEX. Ranged attacks with a bow ignore half cover bonuses. Can draw and nock an arrow as part of any attack without a separate action. Standard arrows deal default damage track damage. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Trick Archery 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Trick Archery 1",
        "creationCost": 2,
        "text": "Tier 2 Passive +1 to DEX. Ranged attacks with a bow ignore half and three-quarters cover bonuses. Attacking at Long range (120-300 ft) does not impose Disadvantage on attack rolls. Once per Turn when you hit with a Trick Arrow Encounter Power, make one additional basic arrow attack against the same or different target within Short range (25-50 ft) as a free action - at Disadvantage per the secondary attacks rule."
      },
      {
        "id": "core-3",
        "name": "Trick Archery 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Trick Archery 2",
        "creationCost": 3,
        "text": "Tier 3 Passive +1 to DEX. Ranged attacks with a bow treat Resistance to physical damage as no Resistance for arrow strikes, representing the precision of your placement. Once per encounter when you make an attack roll and miss, declare the arrow a near miss - the arrow strikes a surface within Close range (25 ft) of the target and triggers its payload as an area effect centered on that point. Treat as a hit against the new point for the purpose of the arrow's secondary effects."
      },
      {
        "id": "core-4",
        "name": "Trick Archery 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Trick Archery 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive +1 to DEX. Once per day, enter Perfect Form for 1 minute: all bow attacks automatically achieve Strong Success effects without requiring the margin; use one Trick Arrow Encounter Power per Turn as a free action in addition to your normal Action; your quiver effectively never runs out as you improvise arrows from available materials between shots with no action cost."
      }
    ],
    "powers": [
      {
        "id": "standard-arrow",
        "name": "Standard Arrow",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Trick Archery 1",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 1\n- Range: Medium (50-120 ft)\n- Attack: 1d20 + DEX + Prowess vs. Dodge\n- Hit: Default damage track (piercing). Strong Success: choose one - the arrow pins something important (target loses their Reaction until end of their next Turn as a strap, holster, or limb is transfixed), or immediately nock a second arrow and make one additional Standard Arrow attack against a different target within Short range (25-50 ft) at Disadvantage."
      },
      {
        "id": "explosive-arrow",
        "name": "Explosive Arrow",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Trick Archery 1",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 1\n- Range: Short area (10-ft radius within 25-50 ft)\n- Attack: 1d20 + DEX + Prowess vs. Dodge of each creature\n- Hit: 1 Power Die + DEX modifier explosive damage. Power Effect Value vs. DEX - Failure: knocked Prone; Success: Shaken until end of your next Turn"
      },
      {
        "id": "smoke-arrow",
        "name": "Smoke Arrow",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Trick Archery 1",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 1 An arrow that deploys a thick smoke screen on impact. Area (15-ft radius within 0-25 ft, centered on impact point) becomes heavily obscured until end of your next Turn. All creatures in area have Disadvantage on attacks against targets outside the smoke. May fire as a Bonus Action alongside your normal Action."
      },
      {
        "id": "net-arrow",
        "name": "Net Arrow",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Trick Archery 2",
        "creationCost": 2,
        "text": "Prerequisite: Trick Archery 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + DEX + Prowess vs. Dodge\n- Hit: Power Effect Value vs. STR - Failure: Restrained until end of your next Turn (net is physical - can be cut or torn free with Strong Success on STR vs. Power Effect Value as Action); Success: Slowed only."
      },
      {
        "id": "flashbang-arrow",
        "name": "Flashbang Arrow",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Trick Archery 2",
        "creationCost": 2,
        "text": "Prerequisite: Trick Archery 2\n- Range: Close area (15-ft radius within 0-25 ft, centered on impact point)\n- Attack: 1d20 + DEX + Prowess vs. Dodge of each creature\n- Hit: Power Effect Value vs. CON - Failure: Blinded + Dazed; Success: Blinded only (both until end of your next Turn)"
      },
      {
        "id": "sonic-arrow",
        "name": "Sonic Arrow",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Trick Archery 2",
        "creationCost": 2,
        "text": "Prerequisite: Trick Archery 2\n- Range: Short area (15-ft radius within 25-50 ft, centered on impact point)\n- Attack: 1d20 + DEX + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice sonic damage. Power Effect Value vs. CON - Failure: Dazed until end of your next Turn + any Sustained Power they are maintaining ends immediately from the disruption; Success: Shaken until end of your next Turn. All non-superpowered electronic devices in the area are Overloaded until end of your next Turn."
      },
      {
        "id": "signature-shot",
        "name": "Signature Shot",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Trick Archery 3",
        "creationCost": 3,
        "text": "Prerequisite: Trick Archery 3 The arrow that defines you. A single perfectly placed shot demonstrating exactly what years of mastery looks like.\n- Range: Long (120-300 ft)\n- Attack: 1d20 + DEX + Prowess vs. Dodge\n- Hit: 6 Power Dice piercing damage, maximum on all dice. Choose one additional effect that resolves simultaneously: Restrained until end of your next Turn (pin arrow); Blinded until end of their next Turn (flare arrow); all creatures within Close range (25 ft) of target roll DEX vs. Power Effect Value or knocked Prone (explosive arrow); or one Power Set the target possesses is Power Disrupted until end of their next Turn (disruption arrow). Strong Success: apply two effects. HEROIC Success: apply all three simultaneously."
      }
    ],
    "utilities": [
      {
        "id": "grapple-arrow",
        "name": "Grapple Arrow",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Trick Archery 1",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 1 Fire an arrow with a grappling head and cable to any anchor point within Short range (25-50 ft). Climb, swing, traverse gaps, descend safely, or pull light objects. In combat, using for movement costs a Bonus Action and covers one Zone. Can also create a tripwire across a passage as a free action - the first creature to cross it rolls DEX vs. your Power Effect Value or is knocked Prone."
      },
      {
        "id": "tracer-arrow",
        "name": "Tracer Arrow",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Trick Archery 1",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 1 Fire a tracer arrow at a creature, vehicle, or object within Short range (25-50 ft) - hit or miss, if the arrow contacts the target, it embeds a tracking device. Locate the tagged item within Long range (120-300 ft) and sense its general direction at any distance on the same plane for 24 hours. Can be found and removed with a DC 15 Notice or Investigation check."
      },
      {
        "id": "called-shot",
        "name": "Called Shot",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Trick Archery 2",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 2 Once per scene as an Action, make a precisely targeted shot at a specific small target: a lock, a cable, a held weapon, a specific device, a light source, a communication array, or a similarly precise objective within Medium range (50-120 ft). Automatically hit the intended small target if you succeed on an attack roll against DC 15. Not a combat attack - cannot target creatures directly. Precision utility tool for solving environmental problems through archery."
      },
      {
        "id": "quiver-management",
        "name": "Quiver Management",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Trick Archery 3",
        "creationCost": 1,
        "text": "Prerequisite: Trick Archery 3 During a Breather, replenish your Encounter Power arrows fully by crafting, combining, or recovering fired arrows from the environment. No special materials required for standard arrow types - expertise lets you improvise adequate heads and shafts from available materials. Exotic payloads (specialized chemicals, rare electronics) may require GM approval and access to appropriate materials."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Net",
        "text": "Extended Net: Net Arrow's Restrained duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Ricochet Shot",
        "text": "Ricochet Shot: Once per encounter, Standard Arrow may be fired at an angle to hit a target behind full cover. The arrow ricochets off a surface within Close range (25 ft) of the target. The attack roll is at Disadvantage but full cover provides no benefit."
      },
      {
        "name": "Arrow Storm",
        "text": "Arrow Storm: Once per encounter as an Action, fire a spread of arrows targeting up to Prowess creatures within Short range (25-50 ft) simultaneously. Each target uses the same attack roll against their individual Dodge values. Each hit deals 1 Power Die + DEX modifier damage. No secondary effects apply."
      },
      {
        "name": "Improvised Payload",
        "text": "Improvised Payload: Once per scene, declare that one of your basic arrows carries an improvised payload appropriate to materials available in the current environment. The GM determines the specific effect based on the fiction."
      }
    ],
    "limitations": [
      {
        "name": "Gear Dependent",
        "text": "Gear Dependent: Powers require your bow and arrows. Without them your Trick Archery powers are entirely unavailable. A quiver can be rebuilt during a Breather with available materials for standard arrows. Trick arrow payloads require Downtime and appropriate materials. +1 Power Pick."
      },
      {
        "name": "Melee Vulnerability",
        "text": "Melee Vulnerability: Fighting style optimized for range. Within Close range (0-25 ft), Disadvantage on all Trick Archery attack rolls as the bow becomes unwieldy in tight quarters. May still draw a sidearm or use unarmed combat at Close range but Power Set is severely compromised. +1 Power Pick."
      },
      {
        "name": "Limited Payload",
        "text": "Limited Payload: Encounter Power arrows represent specialized payloads consumed on use. Once all Encounter Power arrows are used, restricted to Standard Arrow at-will attacks until you resupply at a Breather. +1 Power Pick. Water Control Power Set"
      }
    ]
  },
  {
    "id": "water-control",
    "name": "Water Control",
    "governingAbility": "Choose CON , WIS , or CHA at character creation",
    "abilityOptions": [
      "con",
      "wis",
      "cha"
    ],
    "associatedConditions": "Restrained (via encasement), Prone (via wave and undertow), Slowed (via current and pressure), Shaken (via submersion)",
    "defaultDamage": "Power Dice x Core Track level + Governing Ability modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Versatile control and battlefield manipulation; restraint, displacement, and team support through fluid mastery",
    "limitationNote": "",
    "description": "Water Control is the Power Set of tides, pressure, and the fluid mastery of the world's most common substance. The ability to summon, shape, and command water from any available source with precision that ranges from a controlled stream to a cresting wave to the crushing weight of the ocean floor. Water controllers do not commit to one expression of the element - they read the fight and become whatever the moment requires: a wall when the team needs cover, a current when an ally needs distance, a crushing grip when an enemy needs to go down. CON - biological water generation, oceanic physiology, physical endurance of crushing depths. WIS - intuitive or mystical attunement to tides, currents, and the natural rhythm of water. CHA - commanding presence channeled into the element, the will that the tide obeys.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Water Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Summon, shape, and project water from any source within range, or condense it from ambient moisture if no source is present. Resistance to cold damage. Breathe underwater and ignore pressure at any depth. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Water Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Water Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Combat-scale water shaping into temporary solid forms. Immunity to cold damage (replaces Resistance). Swimming Speed equal to full Speed even out of water when standing on, in, or adjacent to a sufficient source. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Water Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Water Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Immunity to crushing damage from water pressure of any origin. Water attacks ignore cold Resistance entirely and treat cold Immunity as Resistance. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Water Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Water Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Tidal Form for 1 minute: immunity to all physical damage from non-superpowered sources as attacks pass through you; move through any opening a single drop of water could pass through; all water attacks deal maximum damage on the dice."
      }
    ],
    "powers": [
      {
        "id": "water-jet",
        "name": "Water Jet",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Water Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: Default damage track (bludgeoning). Strong Success: push Close range (25 ft) from you."
      },
      {
        "id": "tidal-sweep",
        "name": "Tidal Sweep",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Water Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 1 Draw water from any source within range and sweep it across the ground beneath one or more targets.\n- Range: Close area (15-ft radius, 0-25 ft)\n- Effect: Each creature in the area rolls DEX vs. your Power Effect Value. Failure: knocked Prone."
      },
      {
        "id": "water-shroud",
        "name": "Water Shroud",
        "tier": 1,
        "type": "Encounter",
        "action": "Bonus Action",
        "prerequisite": "Water Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 1 Wrap a thin layer of water around yourself in a defensive sheath. Until start of your next Turn, gain Resistance to fire damage; any creature that hits you with a melee attack rolls STR vs. your Power Effect Value or is Shaken until end of their next Turn."
      },
      {
        "id": "crushing-grip",
        "name": "Crushing Grip",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Water Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Water Control 2\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 2 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: Restrained; Success: Slowed only (both until end of your next Turn)."
      },
      {
        "id": "riptide",
        "name": "Riptide",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Water Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Water Control 2\n- Range: Short area (20-ft radius within 25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 2 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: knocked Prone + pulled Close range (25 ft) toward the center; Success: pulled Close range only."
      },
      {
        "id": "tidal-wave",
        "name": "Tidal Wave",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Water Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Water Control 3\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: knocked Prone + pushed Close range (25 ft) from the center; Success: pushed Close range only. Area becomes difficult terrain from standing water until end of your next Turn."
      },
      {
        "id": "maelstrom",
        "name": "Maelstrom",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Water Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Water Control 3\n- Range: Short (25-50 ft)\n- Attack: 1d20 + Governing Ability + Prowess vs. Dodge\n- Hit: 6 Power Dice bludgeoning damage, maximum on all dice. Power Effect Value vs. STR - Failure: Restrained until end of your next Turn + Slowed for the remainder of the encounter; Success: Restrained until end of your next Turn only."
      },
      {
        "id": "absorbing-tide",
        "name": "Absorbing Tide",
        "tier": 3,
        "type": "Encounter",
        "action": "Reaction",
        "prerequisite": "Water Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Water Control 3 \u00b7 Trigger: You or one ally within Short range (25-50 ft) would take fire damage Interpose a wall of water that drinks the heat from the attack. Reduce incoming damage by 3 Power Dice + Governing Ability modifier. If this brings damage to 0, the resulting steam burst Blinds the attacker until end of their next Turn."
      }
    ],
    "utilities": [
      {
        "id": "water-shape",
        "name": "Water Shape",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Water Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 1 Shape any water you control into simple stationary forms: a ramp, a basin, a wall section, a rope, or a platform. Holds for one scene or until dismissed. Cannot be shaped into a weapon or used to deal damage."
      },
      {
        "id": "purify",
        "name": "Purify",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Water Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 1 Instantly remove contaminants, toxins, and pathogens from any quantity of water you touch as an Action. Does not cure conditions already affecting a creature - purifies the water itself only."
      },
      {
        "id": "wave-crest",
        "name": "Wave Crest",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Water Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 2 Raise and ride a wave to travel at high speed across any sufficient water source. Swimming Speed equal to Short range per Turn (25-50 ft) in combat while a source is available. Outside combat, cross regional distances within hours riding currents you summon ahead of yourself. Does not stack with the Flight Power Set - use whichever speed is higher."
      },
      {
        "id": "moisture-sense",
        "name": "Moisture Sense",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Water Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 2 Sense the presence and approximate quantity of water, including biological water content of living creatures, within Short range (25-50 ft) without a check. Detects hidden creatures, water sources behind walls, and unusual fluid loss in a target."
      },
      {
        "id": "pressure-seal",
        "name": "Pressure Seal",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Water Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Water Control 3 As an Action, seal a breach, hold back a flood, or contain a contaminated source by commanding water to hold its position against significant outside pressure. HP equal to 5 x your Level. Persists until destroyed or dismissed."
      }
    ],
    "enhancements": [
      {
        "name": "Extended Grip",
        "text": "Extended Grip: Crushing Grip's Restrained duration extends to end of the target's next Turn rather than yours."
      },
      {
        "name": "Riptide Mastery",
        "text": "Riptide Mastery: Creatures pulled by Riptide into the same space collide, each taking 1 additional Power Die bludgeoning damage."
      },
      {
        "name": "Pressurized Stream",
        "text": "Pressurized Stream: Water Jet's push distance increases to Medium range (50-120 ft); target also rolls STR vs. your Power Effect Value or is knocked Prone."
      },
      {
        "name": "Undertow",
        "text": "Undertow: Tidal Wave's difficult terrain lasts until end of your Turn after next (two rounds of persistence)."
      }
    ],
    "limitations": [
      {
        "name": "Source Dependent",
        "text": "Source Dependent: Requires an available water source within range - a body of water, plumbing, rain, or sufficient ambient humidity - to function at full strength. With no accessible source and insufficient humidity to condense, Core Track drops by 1 tier and Tier 3 Water Control powers are unavailable until a source is reached. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Water pools and drips around you when you concentrate; surfaces near you stay perpetually damp; attacks leave unmistakable flooding. Stealth while using Water Control is impossible. +1 Power Pick."
      },
      {
        "name": "Electrical Vulnerability",
        "text": "Electrical Vulnerability: No Resistance to lightning damage regardless of any other source. Water Shroud and Crushing Grip both lose their effects for one Turn after you take lightning damage exceeding your CON. +1 Power Pick. Weather Control Power Set"
      }
    ]
  },
  {
    "id": "weather-control",
    "name": "Weather Control",
    "governingAbility": "WIS (fixed) - all attack rolls, Effect Values, and Power Effect Values",
    "abilityOptions": [
      "wis"
    ],
    "associatedConditions": "Prone (wind/lightning), Slowed (wind/ice), Blinded (fog/storm), Dazed (lightning)",
    "defaultDamage": "Power Dice x Core Track level + WIS modifier",
    "abilityScoreBonus": "",
    "tacticalRole": "Largest scale of any Power Set; conditions affect areas and persist; the hero whose arrival changes the sky",
    "limitationNote": "",
    "description": "Weather Control is the Power Set of atmospheric mastery at scale: wind, rain, lightning, ice, fog, temperature, pressure, and the full complexity of weather systems from a localized thundercloud to a continental storm front. Weather Control heroes operate at the largest scale of any Power Set in this group. Their powers affect areas. Their conditions persist. Their environmental changes outlast individual actions and create ongoing complications that reshape every subsequent Turn. They are never just fighting one person. They are fighting alongside the entire atmosphere.",
    "coreTrack": [
      {
        "id": "core-1",
        "name": "Weather Control 1",
        "level": 1,
        "tier": 1,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "",
        "creationCost": 1,
        "text": "Tier 1 Passive Alter local weather conditions within Short range (25-50 ft): create wind gusts, generate rain or fog, drop temperature, call small lightning strikes. Resistance to lightning and cold damage. Immune to harm from weather effects of any natural origin. Tier 1 access."
      },
      {
        "id": "core-2",
        "name": "Weather Control 2",
        "level": 2,
        "tier": 2,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Weather Control 1",
        "creationCost": 2,
        "text": "Tier 2 Passive Weather control extends to Medium range (50-120 ft) and can affect a full Zone. Immunity to lightning and cold damage (replaces Resistance). Sense atmospheric conditions and predict natural weather changes up to 24 hours in advance with perfect accuracy. Tier 2 access."
      },
      {
        "id": "core-3",
        "name": "Weather Control 3",
        "level": 3,
        "tier": 3,
        "type": "Passive",
        "action": "Passive",
        "prerequisite": "Weather Control 2",
        "creationCost": 3,
        "text": "Tier 3 Passive Atmospheric mastery reaches world-class scale - affect weather across an entire city district from a central position. Weather attacks ignore Resistance to lightning and cold damage entirely. Once per encounter when you deal lightning or cold damage, arc the effect to one additional target within Close range (25 ft) of the original for half damage with no additional roll. Tier 3 access."
      },
      {
        "id": "core-4",
        "name": "Weather Control 4",
        "level": 4,
        "tier": 3,
        "type": "Apex Passive",
        "action": "Passive",
        "prerequisite": "Weather Control 3",
        "creationCost": 3,
        "text": "Tier 3 Apex Passive Once per day, enter Eye of the Storm for 1 minute: weather effects extend to Long range (120-300 ft) automatically; all weather conditions you create last until you dismiss them rather than having a duration; immunity to all damage from energy sources as the storm absorbs and redirects it; any creature starting their Turn within Short range (25-50 ft) rolls STR vs. your Power Effect Value or is knocked Prone by wind force."
      }
    ],
    "powers": [
      {
        "id": "lightning-strike",
        "name": "Lightning Strike",
        "tier": 1,
        "type": "At-Will",
        "action": "Action",
        "prerequisite": "Weather Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 1\n- Range: Short (25-50 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge\n- Hit: Default damage track (lightning). Strong Success: Power Effect Value vs. CON or Dazed until end of your next Turn."
      },
      {
        "id": "wind-blast",
        "name": "Wind Blast",
        "tier": 1,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Weather Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 1\n- Range: Short (25-50 ft) - up to three targets within Close range (25 ft) of each other\n- Attack: 1d20 + WIS + Prowess vs. Dodge of each target\n- Hit: 1 Power Die + WIS modifier bludgeoning damage. Power Effect Value vs. STR - Failure: pushed Short range in a direction you choose + knocked Prone; Success: pushed Close range only."
      },
      {
        "id": "storm-surge",
        "name": "Storm Surge",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Weather Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Weather Control 2 Call a concentrated weather event across a Zone - persists until end of your next Turn. Choose one\nstorm type at activation:\n- Ice Storm: Area (30-ft radius within 50-120 ft) becomes difficult terrain from ice. Each creature rolls DEX vs. Power Effect Value - Failure: 2 Power Dice cold damage + Slowed; Success: 1 Power Die cold damage only.\n- Lightning Squall: Each creature in the area rolls DEX vs. Power Effect Value - Failure: 2 Power Dice lightning damage + Dazed; Success: 1 Power Die lightning damage only.\n- Fog Bank: Area becomes heavily obscured; all creatures in it are Blinded while inside it. You can see normally through your own fog."
      },
      {
        "id": "gale-force",
        "name": "Gale Force",
        "tier": 2,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Weather Control 2",
        "creationCost": 2,
        "text": "Prerequisite: Weather Control 2 Until start of your next Turn, generate hurricane-force winds. All creatures without flight or magnetic/gravitational anchoring within Medium range (50-120 ft) must spend double movement to move against the wind direction (you choose direction at activation). Ranged attacks against the wind direction have Disadvantage. Flying creatures without superpowered flight roll STR vs. Power Effect Value at start of each Turn or are forced Short range in the wind direction and knocked Prone if they contact a surface."
      },
      {
        "id": "hurricane-spiral",
        "name": "Hurricane Spiral",
        "tier": 3,
        "type": "Encounter",
        "action": "Action",
        "prerequisite": "Weather Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Weather Control 3\n- Range: Medium area (30-ft radius within 50-120 ft)\n- Attack: 1d20 + WIS + Prowess vs. Dodge of each creature\n- Hit: 3 Power Dice bludgeoning damage. Power Effect Value vs. STR - Failure: pulled to the center of the vortex (Restrained until end of your next Turn as wind holds them) then blasted Short range outward at end of the effect, taking 1 Power Die additional damage on impact with any surface. Success: pulled to center only with no Restrained condition."
      },
      {
        "id": "tempest",
        "name": "Tempest",
        "tier": 3,
        "type": "Daily",
        "action": "Action",
        "prerequisite": "Weather Control 3",
        "creationCost": 3,
        "text": "Prerequisite: Weather Control 3 Unleash a full atmospheric catastrophe across the battlefield. A massive storm front descends. For the\nremainder of the encounter, the affected area has these persistent effects you do not need to maintain: area is heavily obscured by rain and cloud; wind force imposes Disadvantage on all ranged attacks; lightning strikes at the start of each of your Turns - make one Lightning Strike attack against any target in the area as a free action each Turn.\n- Range: Long area (60-ft radius within 120-300 ft)\n- On activation: Each creature in the area rolls STR vs. Power Effect Value - Failure: 5 Power Dice lightning and cold damage combined + knocked Prone + Slowed until end of your next Turn; Success: half damage only.\n- Duration: Persistent storm for the remainder of the encounter."
      }
    ],
    "utilities": [
      {
        "id": "weather-sense",
        "name": "Weather Sense",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Weather Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 1 Automatically know local weather patterns and predict natural weather changes up to 24 hours in advance with perfect accuracy. Sense approaching storms, temperature changes, and atmospheric pressure shifts before they are visible. Extensive applications in navigation, mission planning, and disaster response."
      },
      {
        "id": "control-weather",
        "name": "Control Weather",
        "tier": 1,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Weather Control 1",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 1 Over one minute of concentration, alter weather conditions in a 1-mile radius around you. Create or clear clouds, change temperature by up to 20 degrees, create or stop rain, generate or dispel fog, increase or decrease wind speed. Gradual changes - weather transitions over the minute of concentration. Extreme weather such as full storms requires Tier 2 or higher."
      },
      {
        "id": "storm-travel",
        "name": "Storm Travel",
        "tier": 2,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Weather Control 2",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 2 Ride storm systems as transportation by merging with a storm front. Travel at atmospheric speed: cross a city in minutes, regional distances in under an hour. Arrive riding lightning or wind, appearing dramatically from the storm itself. Cannot bring passengers through storm travel unless they have weather immunity or equivalent protection."
      },
      {
        "id": "suppress-weather",
        "name": "Suppress Weather",
        "tier": 3,
        "type": "Utility",
        "action": "Utility",
        "prerequisite": "Weather Control 3",
        "creationCost": 1,
        "text": "Prerequisite: Weather Control 3 Over one scene of sustained effort, suppress a major weather event: reduce a hurricane to tropical storm intensity, stop a tornado, clear a blizzard from a populated area, or prevent flooding by redirecting rainfall. Does not eliminate the weather system, only reduces it to a manageable level within range. The power that makes a weather controller an essential disaster response resource."
      }
    ],
    "enhancements": [
      {
        "name": "Chain Lightning",
        "text": "Chain Lightning: When Lightning Strike achieves a Strong Success, the lightning arcs to a second target within Close range (25 ft) of the original for 1 Power Die lightning damage with no additional attack roll required."
      },
      {
        "name": "Persistent Storm Surge",
        "text": "Persistent Storm Surge: Storm Surge's effects persist until the start of your Turn after next rather than your next Turn - two full rounds of battlefield effect."
      },
      {
        "name": "Tailwind",
        "text": "Tailwind: You and allies of your choice within Short range (25-50 ft) gain +10 ft of movement speed as you generate favorable winds around them. Passive benefit active whenever you are conscious and not Stunned or Incapacitated."
      },
      {
        "name": "Eye of Calm",
        "text": "Eye of Calm: Designate a Close range (25-ft radius) area around yourself as the eye of your storm. Within this area your allies are unaffected by weather effects you generate - no Disadvantage from wind, no difficult terrain from ice, no obscurement from fog. Enemies entering the eye are immediately subjected to full weather effects when they cross the boundary."
      }
    ],
    "limitations": [
      {
        "name": "Emotional Weather",
        "text": "Emotional Weather: Powers respond to your emotional state in ways you cannot always control. When Frightened or Shaken, GM may introduce uncontrolled weather effects in your vicinity - sudden gusts, unexpected lightning, temperature drops. These are environmental hazards the GM manages, not attacks you control. +1 Power Pick."
      },
      {
        "name": "Obvious Manifestation",
        "text": "Obvious Manifestation: Power use is visible from miles away - storm clouds gather when you concentrate, lightning marks your position, wind patterns are unmistakable to any observer. Stealth while using Weather Control powers is essentially impossible. +1 Power Pick."
      },
      {
        "name": "Slow Build",
        "text": "Slow Build: Most powerful weather effects require atmospheric time to develop. Storm Surge and Hurricane Spiral cannot be used on the first Turn of combat. Tempest requires two rounds of preparation (two Turns of lesser weather effects already active) before it can be activated. +1 Power Pick."
      }
    ]
  }
];

export const generalUtilityPowers = [
  {
    "id": "adhesive-grip",
    "name": "Adhesive Grip",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Climb any surface including overhangs and ceilings without making an Athletics check. Your hands and feet adhere to glass, metal, stone, and similar surfaces. Move at full speed while climbing and do not fall if you take damage during the climb. Does not stack with Super Agility's wall-crawling utility - use whichever is superior."
  },
  {
    "id": "animal-empathy",
    "name": "Animal Empathy",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Communicate simple ideas and emotions with animals as though you shared a language. Animals are naturally inclined toward friendliness unless you or your allies have harmed them recently. Advantage on Influence, Insight, and Survival checks to interact with, calm, or direct animals. Does not stack with Animal Powers' Animal Communication. If you have that Power Set, use it instead."
  },
  {
    "id": "aquatic-adaptation",
    "name": "Aquatic Adaptation",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Gain a swimming speed equal to your walking speed and breathe underwater indefinitely. Ignore the effects of cold water and pressure at normal ocean depths. At Mid-Level Campaign Rank or higher, also survive extreme deep-sea pressure without harm."
  },
  {
    "id": "camouflage",
    "name": "Camouflage",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As a Bonus Action, blend into your surroundings through pigment changes, adaptive coloration, or similar biological or technological adaptation. Advantage on Stealth checks and may attempt to Hide while lightly obscured. While motionless in a natural environment, extremely difficult to detect without powers specifically designed to pierce concealment."
  },
  {
    "id": "echolocation",
    "name": "Echolocation",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Perceive the world through sound, vibration, radar, or similar non-visual sensing. Gain blindsight out to Close range (25 ft). Detect invisible creatures through this sense unless they specifically move to avoid producing detectable signals. Covers all non-visual sensing variants: echolocation, radar sense, tremorsense, and sonar. Choose the version that fits your concept. The mechanical effect is identical."
  },
  {
    "id": "emergency-shield",
    "name": "Emergency Shield",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per encounter, as a Reaction when you or one ally within Close range (25 ft) would take damage, project a brief protective barrier. The protected creature reduces that damage by your Prowess. Does not stack with Energy Shield or similar Power Set features."
  },
  {
    "id": "environmental-adaptation",
    "name": "Environmental Adaptation",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Choose one hostile environment when you purchase this power: extreme heat, extreme cold, hard vacuum, deep underwater, or high radiation. Survive in that environment without harm and do not need to make saves against its natural effects. You still take damage from deliberate attacks using that environment as a weapon. This power may be purchased more than once, choosing a different environment each time."
  },
  {
    "id": "gliding",
    "name": "Gliding",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "When you fall, spread wings, a cape, or similar surfaces to glide. Fall at a rate of only 10 feet per round instead of the normal rate and move horizontally up to your full Speed while gliding. Take no falling damage when landing from a controlled glide. Cannot gain altitude through gliding alone. This is not Flight. If you have the Flight Power Set, use that instead."
  },
  {
    "id": "healing-touch",
    "name": "Healing Touch",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As an Action, touch one creature and restore HP equal to your Prowess plus your WIS. You may use this once per Breather. Does not function on yourself. Distinct from the Regeneration Power Set's passive recovery - does not trigger the passive HP recovery stacking rule since it is an active action rather than passive per-Turn healing."
  },
  {
    "id": "invisibility",
    "name": "Invisibility",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As an Action, turn invisible until the end of your next Turn. While invisible, you gain the Hidden condition: attacks against you have Disadvantage and your attacks have Advantage. The Hidden condition ends if you attack, use a power that produces a visible effect, or take damage. Sound and scent still betray your presence - a creature with enhanced hearing or smell can detect you and negate the Hidden condition normally. This power may be taken as a Sustained Power, maintained with a Bonus Action each Turn. The source - biological transparency, technological camouflage, light-bending, psychic deflection - is chosen at character creation and is always consistent with the hero's concept."
  },
  {
    "id": "low-light-vision",
    "name": "Low-Light Vision",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "See in dim light as if it were bright light and in darkness as if it were dim light out to Close range (25 ft). Cannot see in total magical or supernatural darkness through this power alone. A lighter version of Super Senses' Darkvision. If you have Super Senses Core Track 1, use that instead."
  },
  {
    "id": "psychic-resistance",
    "name": "Psychic Resistance",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Gain Resistance to psychic damage. This does not provide Advantage on psychic saves - that broader protection belongs to Telepathy's Mind Shield. The passive HP recovery stacking rule does not apply here since this is damage Resistance rather than healing."
  },
  {
    "id": "quick-recovery",
    "name": "Quick Recovery",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "During a Breather, recover additional HP equal to your Prowess when spending Hit Dice. This bonus applies once per Breather regardless of how many Hit Dice you spend. Also gain Advantage on saves against lingering fatigue, exhaustion, and environmental stress during Downtime. Does not trigger the passive HP recovery stacking rule since it applies only during Breathers, not passively per Turn."
  },
  {
    "id": "spirit-speech",
    "name": "Spirit Speech",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Perceive and briefly communicate with spirits of the recently dead. A spirit is accessible if it died within the last week and its remains, a significant personal possession, or the location of its death is within Short range (25-50 ft). Willing spirits communicate freely for up to one minute. With one minute of contact with a corpse or death location, you also experience the subject's final moments - what they saw, heard, and felt in their last minutes. This is not a complete record: distress and the disruption of death affect what is retrievable. You automatically sense the presence of spirits in your vicinity even when they do not speak. Advantage on Occult checks related to death and spiritual activity."
  },
  {
    "id": "stabilize",
    "name": "Stabilize",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As a Bonus Action, touch a dying creature and stabilize them instantly without requiring a Medicine check. The creature stops making saves and is stable at 0 HP. They remain Unconscious. A faster version of the standard Medicine stabilization - costs a Bonus Action rather than an Action."
  },
  {
    "id": "super-jump",
    "name": "Super Jump",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Your jumping distance is multiplied by 5. Ignore falling damage from heights equal to or less than your maximum jump distance. Leap horizontally, vertically, or between structures at comic-book scale, clearing gaps and reaching heights that would normally require climbing."
  },
  {
    "id": "telepathic-whisper",
    "name": "Telepathic Whisper",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Send brief one-way mental messages of up to ten words to one willing creature you can see within Short range (25-50 ft). The target receives the message clearly regardless of ambient noise or language barriers. You cannot receive messages back through this power and cannot affect unwilling creatures. This is not Telepathy and cannot be used for two-way communication or mental influence."
  },
  {
    "id": "thermal-vision",
    "name": "Thermal Vision",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Perceive heat signatures through darkness, smoke, fog, and light cover out to Medium range (50-120 ft). Invisible creatures still emit detectable heat unless specifically shielded against thermal detection. Blocked by materials designed to mask heat signatures."
  },
  {
    "id": "toxin-resistance",
    "name": "Toxin Resistance",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Advantage on saves against poison, disease, venom, narcotics, intoxicants, radiation poisoning, and airborne chemical hazards. This does not grant immunity - full immunity belongs to Poison Immunity at Tier 2."
  },
  {
    "id": "universal-translator",
    "name": "Universal Translator",
    "tier": 1,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "After hearing a spoken language for at least one minute, understand basic meaning and communicate simple ideas in that language. Complex technical language, coded speech, ancient dialects, or alien concepts with no equivalent in known languages may still require checks or be beyond translation. A practical communication tool, not fluency."
  },
  {
    "id": "adrenaline-surge",
    "name": "Adrenaline Surge",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per encounter as a Bonus Action, call on reserves of biological or superhuman endurance. Gain temporary HP equal to your Prowess plus your CON. These temporary HP last until the end of the encounter or until depleted. Distinct from Super Durability Branch Powers - does not stack with them. If both grant temporary HP in the same encounter, use the higher pool only."
  },
  {
    "id": "aura-of-fear",
    "name": "Aura of Fear",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per encounter as a Bonus Action, project an unsettling presence. Choose one creature within Close range (25 ft) that can perceive you. That creature rolls 1d20 + WIS against your Power Effect Value. Failure: the creature is Shaken until the end of its next Turn. Success: no effect. Minor single-target disruption. Area fear effects and the Frightened condition belong to dedicated Power Sets such as Super Presence and Shadow Control."
  },
  {
    "id": "bio-electric-shock",
    "name": "Bio-Electric Shock",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As an Action, deliver a bio-electric charge through touch, claws, or conductive contact. Make a melee Power Attack against one creature within Close range (25 ft). On a hit, deal 2 Power Dice lightning damage. The target rolls 1d20 + CON against your Power Effect Value. Failure: Dazed until the end of its next Turn. Success: no additional effect beyond the damage. Can also be used outside combat to overload, disrupt, or power small electrical systems through contact."
  },
  {
    "id": "burrowing",
    "name": "Burrowing",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Gain a burrowing speed of Close range (25 ft) through earth, sand, clay, and soft stone. Leave a tunnel behind that other creatures may follow. Cannot burrow through reinforced concrete, solid metal, force barriers, or supernaturally reinforced structures unless another power specifically grants that capability."
  },
  {
    "id": "dimensional-pocket",
    "name": "Dimensional Pocket",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Possess a small extradimensional storage space capable of holding up to 50 pounds or 5 cubic feet of material. Retrieving or storing an item costs a Bonus Action. The pocket is invisible and inaccessible to other creatures unless a power specifically interacts with extradimensional spaces. The pocket collapses if you die, depositing its contents in your space."
  },
  {
    "id": "object-reading",
    "name": "Object Reading",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As an Action, touch an object and receive a brief psychic impression of the last creature to handle it meaningfully. Learn one of the following: their emotional state at the time, one sensory impression from the moment of contact, or one simple fact about what they did with the object. Requires at least one round of concentration and produces vague impressions rather than detailed memories. Mundane objects with many handlers produce only the most recent or most emotionally charged impression."
  },
  {
    "id": "phase-shift",
    "name": "Phase Shift",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per encounter as a Bonus Action, become partially intangible until the start of your next Turn. While intangible, gain Resistance to non-energy weapon damage (bludgeoning, piercing, and slashing from physical sources) and may move through occupied spaces as difficult terrain. Cannot move through solid objects entirely in this state. Moving through solid objects entirely belongs to Super Speed's Vibration Phase. Does not stack with Vibration Phase if both are held."
  },
  {
    "id": "photographic-reflexes",
    "name": "Photographic Reflexes",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "After observing a physical skill, combat technique, or trained maneuver for at least one round, gain Advantage on checks and attack rolls to replicate it during the current scene. Covers trained physical techniques only: athletics, acrobatics, martial techniques, and skilled physical performances. Cannot copy Powers, supernatural abilities, or effects that require specific biological or technological capabilities you do not possess."
  },
  {
    "id": "poison-immunity",
    "name": "Poison Immunity",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Immune to ordinary poisons, toxins, venoms, gases, chemical intoxicants, and natural diseases. Supernatural, cosmic, or specially engineered toxins designed to affect beings with your physiology may still affect you at GM discretion."
  },
  {
    "id": "super-speed-utility",
    "name": "Super Speed Utility",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Your Speed increases by 20 feet in all movement modes you currently possess. Passive enhancement applying to all forms of your movement. This is not the Super Speed Power Set and does not grant Speed Actions, Disadvantage immunity on secondary attacks, or any other Super Speed feature. It is a simple speed increase."
  },
  {
    "id": "technopathy",
    "name": "Technopathy",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "As an Action, interface mentally with technological systems within Close range (25 ft). Read simple machine status, unlock basic electronic systems, bypass non-military security, issue simple commands to compatible devices, and detect nearby active technology. Complex systems, military-grade security, and alien technology may require a Technology check at the GM's set DC. A lighter version of Machine Interface capabilities. If you have the Machine Interface Power Set, use that instead."
  },
  {
    "id": "venom-strike",
    "name": "Venom Strike",
    "tier": 2,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "When you hit a creature with an unarmed strike or while grappling it, deliver a venomous payload through claws, fangs, a stinger, or injected toxin as part of that hit. The creature rolls 1d20 + CON against your Power Effect Value. Failure: the creature gains the Poisoned condition until the end of its next Turn. Success: no additional effect. This does not add damage dice - the damage comes from the attack itself. The venom only delivers the condition."
  },
  {
    "id": "astral-projection",
    "name": "Astral Projection",
    "tier": 3,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per day as an Action, project your consciousness out of your body. Your projected form may travel up to Medium range (50-120 ft) from your body. Your body remains Unconscious and is vulnerable while you are projected. Your projected form can observe, speak, and use non-physical powers but cannot interact with physical objects or make physical attacks. The projection lasts for up to one scene or until you choose to return. If your body is killed while you are projected, you return to your body immediately and must make a save. A lighter version of the capability. The Sorcery Power Set's Astral Projection covers greater range and more detailed rules for extended astral travel."
  },
  {
    "id": "power-mimicry",
    "name": "Power Mimicry",
    "tier": 3,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Once per encounter as an Action, copy one Tier 1 Power you have directly observed being used within Close range (25 ft) during this encounter. You may use the copied power once before the end of the scene using your own Governing Ability and Prowess. You cannot copy Core Track steps, Apex powers, powers above Tier 1, or powers from Power Sets that require biological or technological components you do not possess. The copied power uses your Power Effect Value and attack bonus."
  },
  {
    "id": "power-mimicry-upgrade",
    "name": "Power Mimicry Upgrade",
    "tier": 3,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "Power Mimicry",
    "creationCost": 1,
    "text": "Prerequisite: Power Mimicry Your mimicry now extends to Tier 2 powers. Once per encounter you may copy one Tier 2 power observed being used within Close range (25 ft) and use it once before the end of the encounter. Additionally, you may retain one copied Tier 1 power for up to 24 hours after observing it. You may only retain one power this way at a time."
  },
  {
    "id": "true-sight",
    "name": "True Sight",
    "tier": 3,
    "type": "General Utility",
    "action": "Varies",
    "prerequisite": "",
    "creationCost": 1,
    "text": "Perceive the world as it truly is within Close range (25 ft). See invisible creatures, see through mundane and supernatural disguises, perceive illusions for what they are, identify transformed beings in their true form, and detect hidden dimensional distortions and extradimensional spaces. You still require line of sight unless another power removes that restriction. True Sight does not automatically reveal the source or purpose of what you perceive, only its true nature. Chapter 12 - General Utility Powers 36 powers across 3 tiers -> Chapter 15: Combat"
  }
];
