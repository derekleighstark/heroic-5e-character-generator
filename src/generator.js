import { generalUtilityPowers, powerFramework, powerSetRules } from "./power-data.js";

const rulesSource = await fetch("/app.js").then(response => response.text());
const rulesPrefix = rulesSource.slice(0, rulesSource.indexOf("const STORAGE_KEY"));
const {
  abilities,
  ranks,
  classes,
  skills,
  origins,
  callings,
  talents,
  merits,
  flaws,
  gearCatalog,
  gearRules
} = Function(`${rulesPrefix}; return { abilities, ranks, classes, skills, origins, callings, talents, merits, flaws, gearCatalog, gearRules };`)();

const powerSets = powerSetRules.map(powerSet => powerSet.name);
const powerSetByName = Object.fromEntries(powerSetRules.map(powerSet => [powerSet.name, powerSet]));

const STORAGE_KEY = "heroic5e_generator_sheet";
const LIBRARY_KEY = "heroic5e_generator_library";
const THEME_KEY = "heroic5e_generator_theme";
const themes = [
  ["classic", "Heroic Classic"],
  ["four-color", "Four-Color"],
  ["tactical", "Modern Tactical"]
];
const abilityArrays = {
  "Street Level": [16, 15, 14, 13, 12, 11, 10, 8],
  "Mid-Level": [18, 16, 15, 14, 13, 12, 10, 8],
  "World Class": [20, 18, 16, 15, 14, 12, 10, 8]
};
const specialtyExamples = {
  Acrobatics: ["Aerial Maneuvers", "Parkour", "Tightrope and Balance", "Evasive Movement", "Controlled Falls"],
  Athletics: ["Climbing", "Swimming", "Grappling", "Feats of Strength", "Endurance Running"],
  Culture: ["Alien Civilizations", "Earth History", "Criminal Organizations", "Religious Traditions", "Political Institutions"],
  Finesse: ["Lockpicking", "Pickpocketing", "Concealment", "Safecracking"],
  Influence: ["Public Speaking", "Negotiation", "Media Relations", "Leadership", "Diplomacy"],
  Insight: ["Detecting Lies", "Reading Crowds", "Emotional Assessment", "Psychological Profiling"],
  Intimidation: ["Interrogation", "Fearsome Presence", "Written Threats", "Crowd Control"],
  Investigation: ["Forensics", "Crime Scene Analysis", "Research", "Pattern Analysis", "Surveillance"],
  Medicine: ["Trauma Surgery", "Poison and Toxicology", "Field Stabilization", "Diagnosis"],
  Notice: ["Ambush Detection", "Surveillance", "Lip Reading", "Tracking by Sound"],
  Occult: ["Demonology", "Prophecy", "Spirit Communication", "Ritual Magic", "Dimensional Lore"],
  Science: ["Physics", "Chemistry", "Genetics", "Xenobiology", "Engineering Theory"],
  Stealth: ["Urban Infiltration", "Wilderness Concealment", "Tailing Targets", "Silent Movement"],
  Streetwise: ["Gang Culture", "Black Market Access", "Criminal Contacts", "Urban Navigation"],
  Survival: ["Tracking", "Wilderness Navigation", "Harsh Environment Endurance", "Scavenging"],
  Technology: ["Hacking", "Power Armor", "Security Systems", "Cybernetics", "Electronics Repair"],
  Vehicles: ["Motorcycles", "Jets", "Cars and Trucks", "Watercraft", "Helicopters"]
};
const sideRules = {
  Heroic: {
    summary: "Heroic characters protect, save, defend, inspire, and act for others. They are in this for the people who cannot protect themselves; when they show up, the goal is that things go better for someone other than themselves.",
    callings: "Heroic characters choose from Callings marked Heroic in the Chapter 5 catalog. Those Callings emphasize protection, sacrifice, duty, compassion, justice, and the pressure that comes from genuinely caring about the outcome.",
    reputation: "When a Heroic reputation exists, it tends to produce trust, relief, and the emotional weight of someone arriving who is on your side."
  },
  Unaligned: {
    summary: "Unaligned characters operate according to their own logic: personal code, professional ethics, loyalty, survival, curiosity, self-interest, profit, or a private moral framework that does not map cleanly onto heroic idealism.",
    callings: "Unaligned characters are not villains. They have access to the full Calling catalog, including Callings that reflect more personal, self-interested, morally complicated, or privately driven motivations.",
    reputation: "An Unaligned reputation does not carry a clear moral promise in either direction. How the world reads it depends on the character's specific Merits, history, and who is doing the reading."
  },
  Villainous: {
    summary: "Villainous characters move the world toward domination, exploitation, destruction, coercion, or selfish power. Their goals and methods place them in opposition to heroes and the people heroes protect.",
    callings: "Villainous is included for GM-created NPCs and antagonists. It is not a supported player-character Side in the core rules.",
    reputation: "A Villainous reputation creates fear, distrust, hostility, or obedience. Even when an antagonist is admired, the world reads their presence through the harm they cause or threaten."
  }
};
const glossaryTerms = [
  ["Ability Score", "One of the eight core character numbers: Strength, Dexterity, Constitution, Fighting, Intelligence, Wisdom, Charisma, and Perception."],
  ["Ability Modifier", "The bonus or penalty derived from an Ability Score. Abbreviations such as STR, DEX, CON, FIG, INT, WIS, CHA, and PER refer to modifiers."],
  ["Action", "The main thing a character does on their turn, such as attacking, using many powers, or taking a major tactical action."],
  ["Active Defense", "A player-facing defense roll made when a hero is attacked. Heroes roll defenses instead of enemies rolling attacks."],
  ["Advantage", "Roll two d20s and use the higher result."],
  ["Attack Value", "A static enemy attack number that a hero rolls Active Defense against."],
  ["At-Will Power", "A power option that can be used repeatedly without spending an encounter or daily use."],
  ["Bonus Action", "A smaller extra action available on a turn when a feature, power, or rule allows it."],
  ["Breather", "A short recovery pause between scenes or encounters where recovery rules may apply."],
  ["Burnout", "A strain track used when a hero pushes powers beyond normal limits, especially through Power Stunts or Emulation."],
  ["Calling", "The emotional engine beneath the mask. Callings define what earns Edge and what pressures the hero's story."],
  ["Campaign Rank", "The scale of the campaign: Street Level, Mid-Level, or World Class. Rank affects arrays, power limits, and starting assumptions."],
  ["Class", "The hero's combat and action chassis, defining primary ability, Hit Die, saves, recovery, and class features."],
  ["Condition", "A status effect such as Shaken, Dazed, Prone, Restrained, Slowed, Stunned, Blinded, Frightened, Charmed, Poisoned, or Frozen."],
  ["Daily Power", "A powerful power option generally usable once per day or major narrative cycle."],
  ["Defense Value", "A static defensive number used for NPCs and enemies when heroes roll against them."],
  ["Disadvantage", "Roll two d20s and use the lower result."],
  ["Edge", "A narrative resource earned through Calling triggers and spent to push heroic moments."],
  ["Effect Value", "A static number generated by a power or feature, usually 10 plus a relevant modifier plus Prowess."],
  ["Encounter Power", "A power option with limited use during an encounter."],
  ["Expertise", "Advanced Skill training. Expertise uses double Prowess instead of single Prowess for that Skill."],
  ["Failure", "A roll result that does not meet the target number or value."],
  ["Flaw", "A complication or drawback that creates story pressure and can generate Edge when invoked."],
  ["Gear", "Equipment, weapons, armor, gadgets, vehicles, and other tools a hero records and uses."],
  ["Hit Die", "The die associated with a class for durability and recovery."],
  ["Hit Points", "A hero's capacity to stay in the fight before being taken out or forced into serious consequences."],
  ["Limitation", "A meaningful restriction on a Power Set or power expression that grants additional Power Picks."],
  ["Merit", "A beneficial background, reputation, support, or trait that gives social, narrative, or mechanical advantage."],
  ["Origin", "The source and nature of a hero's extraordinary capabilities, including origin bonuses and built-in mechanics."],
  ["Power Pick", "A build currency used to buy Power Sets, tracks, powers, and related options."],
  ["Power Set", "A themed collection of powers such as Telepathy, Armor Systems, Super Strength, or Fire Control."],
  ["Prowess", "A level-based heroic competency bonus added to trained skills, saves, attacks, powers, and many class features."],
  ["Reaction", "A response taken outside a character's normal action timing when a trigger allows it."],
  ["Recovery", "A class-based resource used to recover Hit Points or power through certain class mechanics."],
  ["Side", "A declaration of narrative position: Heroic or Unaligned for player characters, with Villainous defined for GM NPC use."],
  ["Skill", "A broad trained competency such as Investigation, Technology, Insight, or Athletics."],
  ["Specialty", "A narrow focus inside a Skill, recorded as Skill (Focus), that grants Advantage when directly applicable."],
  ["Strong Success", "A success that beats the target by enough to trigger enhanced effects, when a rule defines them."],
  ["Talent", "A discrete heroic capability or training option chosen during character creation or advancement."],
  ["Temporary HP", "Extra hit points that absorb damage before normal HP and usually do not stack unless a rule says otherwise."],
  ["Tier", "A power scale within Power Sets, often limited by Campaign Rank."],
  ["Trained", "A Skill, save, or competency that adds Prowess to the roll."],
  ["Utility Power", "A non-attack power used for movement, sensing, protection, problem solving, or narrative effect."]
];
const originTraitRules = {
  "Environmental Adaptation": "Gain Advantage on saves against one chosen environment: cold, heat, low oxygen, pressure, radiation, or low gravity.",
  "Unusual Diet": "You can safely consume substances toxic to humans and go significantly longer without food, water, or sleep without mechanical penalty.",
  "Natural Camouflage": "Gain Advantage on Stealth checks in environments matching your homeworld's terrain type.",
  "Integrated Systems": "Once per encounter, gain Advantage on a Technology or Science check by directly interfacing with a compatible system.",
  "Modular Repair": "During a Breather, you may restore additional HP equal to your Prowess through self-maintenance rather than rest.",
  "Environmental Hardening": "Gain Advantage on saves against environmental hazards: extreme temperature, pressure, vacuum, radiation, or electrical surge.",
  "Vacuum-Touched": "You can hold your breath for 10 x Prowess minutes and gain Advantage on saves against vacuum, pressure, and radiation hazards.",
  "Energy-Born": "Choose Fire, Lightning, Radiant, Cold, or Cosmic. Once per encounter, reduce incoming damage of that type by your Prowess + CON.",
  "Universal Perspective": "Once per encounter, gain Advantage on a Wisdom, Science, Occult, or Notice check involving cosmic scale, alien phenomena, or dimensional danger.",
  "Heightened Reflexes": "Gain Advantage on Initiative rolls once per encounter.",
  "Enhanced Recovery": "Once per Breather, when you spend Hit Dice, reroll one die and use the better result.",
  "Unusual Senses": "Gain Advantage on Notice checks tied to one chosen sense: sight, hearing, smell, touch, or an exotic sense appropriate to the concept.",
  "Keep It Running": "The gear continues functioning until the end of the encounter.",
  "Emergency Bypass": "Ignore Disadvantage caused by gear damage or interference for one turn.",
  "Reroute Power": "Regain use of one spent Encounter Power tied to the gear, but gain 1 Burnout.",
  "Controlled Failure": "The gear fails, but you prevent collateral damage, injury to allies, or loss of critical data.",
  "Inherited Network": "You begin with Connected 1, representing allies, informants, and institutional relationships inherited from the Legacy.",
  "Famous Symbol": "You begin with Public Trust 1 among people who recognize the Legacy's symbol or name.",
  "Mentor's Gift": "You begin with Mentor 1, representing someone with deep knowledge of the Legacy who remains available to you.",
  "Natural Weapons": "Your unarmed strikes deal slashing, piercing, or bludgeoning damage as appropriate to your form.",
  "Night Creature": "Gain darkvision or Advantage on Notice checks made in darkness or near-darkness.",
  "Terrifying Form": "Gain Advantage on Intimidation checks when your appearance is a relevant factor in the scene.",
  "Strange Anatomy": "Gain Advantage on saves against poison, disease, or effects that target mundane human biology.",
  "Spellcraft": "Your magic is learned technique. Use this practice to frame occult study, ritual work, spell formulae, and trained magical problem solving.",
  "Spirit Pact": "Your power comes through a bargain, bond, or relationship with spirits or unseen beings. The pact can create obligations and attention.",
  "Divine Favor": "Your supernatural connection is sacred, blessed, or chosen. Use this practice when faith, devotion, or a patron power defines the magic.",
  "Bloodline": "Your supernatural nature is inherited. The magic is part of who you are, not only what you know.",
  "Relic-Bound": "Your practice is tied to an object, relic, weapon, symbol, or vessel that focuses the supernatural connection.",
  "Curse-Bearer": "Your power is bound to a curse. It may protect, empower, tempt, or mark you, but it is never merely cosmetic.",
  "Base of Operations": "You begin with Base of Operations 1. It does not count against your starting Merit allowance.",
  "Connected": "You begin with Connected 1. It does not count against your starting Merit allowance.",
  "Gear Access": "You begin with Gear Access 1. It does not count against your starting Merit allowance.",
  "Legal Authority": "You begin with Legal Authority 1. It does not count against your starting Merit allowance.",
  "Local Support": "You begin with Local Support 1. It does not count against your starting Merit allowance.",
  "Mentor": "You begin with Mentor 1. It does not count against your starting Merit allowance.",
  "Prepared Cache": "You begin with Prepared Cache 1. It does not count against your starting Merit allowance.",
  "Safehouse Network": "You begin with a safehouse network treated as an appropriate Prepared Foundation Merit.",
  "Ageless": "You do not age normally and gain Advantage on saves against mundane aging effects.",
  "Strange Perception": "Gain Advantage on Notice or Insight checks involving supernatural, cosmic, psychic, or dimensional anomalies.",
  "Death-Touched": "Gain Advantage on Grit Saves or saves against instant-death effects.",
  "Conceptual Presence": "Gain Advantage on Influence or Intimidation checks when your otherworldly nature is obvious and directly relevant to the situation."
};
const classText = {
  Beacon: "Beacons shape people. Leadership, inspiration, intimidation, morale, emotional influence, and force of personality define them. They are emotional gravity: their method is influence over the emotional state of everyone around them, ally and enemy alike.",
  Bruiser: "Bruisers solve problems through force. They weaponize impact itself, turning every environment into a battlefield and every engagement into a contest of momentum they intend to win.",
  Guardian: "Guardians endure and protect. They absorb punishment, place themselves between danger and the people who cannot protect themselves, and transform defense into battlefield influence.",
  Sentinel: "Sentinels notice what others cannot: danger, patterns, tells, trajectories, and the half-second before an attack lands. They read the fight in advance and make enemy mistakes costly.",
  Strategist: "Strategists win by knowing more than the enemy. They study the battlefield, identify vulnerabilities, and convert information into advantage for themselves and their allies.",
  Striker: "Strikers treat combat as disciplined art: the right technique at the right moment against the right target. They hit smarter than everyone else.",
  Vanguard: "Vanguards survive by never being where the attack lands. Motion, repositioning, and momentum control are their method.",
  Warden: "Wardens master themselves first. Inner strength, spiritual resilience, emotional discipline, and mental endurance let them carry calm into chaos."
};
const classFeatureRules = {
  "Commanding Presence": "While conscious and perceived by allies within Medium range, those allies have Advantage on saves against Shaken and Frightened. When you make an Influence or Intimidation check, add WIS in addition to CHA.",
  "Taunt": "Once per Turn as a Bonus Action, roll 1d20 + CHA + Prowess against one creature's Social Value. On a success, it has Disadvantage attacking anyone but you until your next Turn; stronger successes also impose Shaken or Frightened.",
  "Rally the Human Spirit": "Once per Turn, after a heroic social or morale trigger, spend a Bonus Action to grant an ally temporary HP, Advantage on a save, extra movement, or removal of Shaken.",
  "Rally Cry": "Once per encounter as an Action, every ally who can perceive you gains temporary HP, ends one Condition of their choice, and may move up to half speed without provoking.",
  "Break Them": "When you successfully Taunt or apply Shaken/Frightened through a Beacon feature or Power, spend a Bonus Action to roll against nearby enemies and spread Shaken.",
  "Living Legend": "Once per encounter after a damaging hit, spend a Bonus Action to empower allies and pressure enemies based on your attack's degree of success.",
  "Heavy Hitter": "When you hit with an attack or Power that deals damage, add STR to the damage roll. This applies to all damage types and attack forms.",
  "Heavy Impact": "Once per encounter after a damaging hit, spend a Bonus Action and roll STR + Prowess against the target's STR Save Value to push, knock Prone, or Daze the target.",
  "Breakthrough": "Choose one damage type. Your attacks and Powers ignore Resistance to that type. Against other reductions, reduce Resistance or flat reduction by your Prowess.",
  "Devastating Force": "Once per encounter after a damaging hit, spend a Bonus Action before damage to maximize damage dice and splash half damage to nearby creatures your attack roll also beats.",
  "Unstoppable": "When reduced to half HP or below, gain temporary HP equal to STR at the start of each Turn and Advantage on all saves for the rest of the encounter.",
  "Irresistible Force": "Your Breakthrough damage treats Immunity as Resistance. Once per encounter, Chain Strike lets you make additional attacks equal to Prowess with decreasing damage.",
  "Stand Between": "When an ally within Short range is hit by an attack you can perceive, use your Reaction to intercept. The ally takes no damage and you take the full damage.",
  "Iron Presence": "Allies within Short range have Advantage on saves against fear, Shaken, and forced movement. Once per Turn as a Bonus Action, an ally may spend Recovery as a free action.",
  "Breakthrough Resistance": "Choose one damage type. You have Resistance to it, and when Stand Between intercepts that type, you take the minimum possible damage.",
  "Guardian's Mark": "Once per encounter, mark a creature until your next Turn. It has Disadvantage attacking others, and if it does, you may move and Stand Between with the same Reaction.",
  "Immovable": "You cannot be moved, knocked Prone, or Restrained against your will unless the effect deals more than half your current HP. You are immune to Shaken and reduce intercepted damage by CON.",
  "Last One Standing": "Once per encounter when reduced to 25% HP or below, gain temporary HP equal to CON x Prowess, use Stand Between freely until your next Turn, and mark creatures that damage you.",
  "Threat Assessment": "Before initiative, learn the highest HP creature, highest Attack Value creature, and whether any creature has hidden objectives or special instructions. Gain Advantage detecting hidden threats.",
  "Reactive Awareness": "Gain Advantage on Initiative and cannot be surprised while conscious. Once per encounter, use a Reaction to move toward or attack an enemy that attacks an ally or moves within Short range.",
  "Threat Lock": "As a Bonus Action, designate one creature. You gain Advantage attacking it, know its position, and can react if it attacks someone else.",
  "Decisive Strike": "Once per encounter as an Action, attack your Threat Lock target. On a hit, deal maximum damage and roll PER + Prowess to impose Prone and/or Slowed.",
  "Read the Room": "At the start of each Turn, know visible creatures' HP status and remaining Encounter Power uses. Once per Turn after hitting a wounded target, impose Dazed, Slowed, or force an item drop.",
  "Overwatch": "Once per encounter as an Action, trade your Turn for five special Reactions before your next Turn, covering ally defenses, movement, attacks, and battlefield control.",
  "Tactical Analysis": "As a Bonus Action, analyze a creature to learn tactically relevant information and mark it for the encounter. You may maintain analyzed creatures up to INT.",
  "Tactical Exploitation": "Once per Turn, when you or an ally acts against an analyzed creature, spend a Bonus Action to exploit the analysis for Advantage or a tactical benefit.",
  "Contingency Planning": "Once per encounter, reveal a prepared contingency that changes positioning, supplies a plausible tool, protects an ally, or counters a complication with GM approval.",
  "Calculated Pressure": "Use analysis and tactical timing to pressure enemies, creating openings and imposing consequences through INT-based class effects.",
  "Expose the Pattern": "Once per encounter, reveal the enemy's pattern and turn it against them, granting allies stronger offensive or defensive positioning.",
  "Master Plan": "Once per encounter, trigger a major tactical plan as a Reaction or Full Round Action, applying one large battlefield effect such as refreshing ally resources or collapsing enemy coordination.",
  "Precision Strike": "When you hit with an attack or Power that deals damage, add FIG to the damage roll. This applies to all attack types and damage forms.",
  "Exploit Opening": "Once per Turn after hitting a vulnerable, conditioned, damaged, or Advantage-granting target, spend a Bonus Action to add a Power Die and potentially Daze the target.",
  "Combat Read": "At the start of each Turn, choose a creature and learn resistance, conditions, and HP state. Spend a Bonus Action before your first attack to gain Advantage against it.",
  "Vital Strike": "Once per encounter after hitting a target suffering two or more Conditions, spend a Bonus Action to maximize damage dice. If reduced to 0 HP, make a follow-up attack at Disadvantage.",
  "Killer Instinct": "You always know when visible creatures are below half HP. Against them, deal extra Prowess damage and improve Exploit Opening and critical-hit pressure.",
  "Perfect Form": "Once per encounter as an Action, make one FIG attack against the highest Defense among creatures within Close range, damaging the primary target and partially affecting others.",
  "Fluid Motion": "Standing, climbing, and difficult terrain do not slow you normally. Gain Advantage escaping restraint. If you move 15 feet before attacking, the attack has Advantage.",
  "Evasive Strike": "Once per Turn after a damaging hit, spend a Bonus Action to move up to 15 feet without provoking Opportunity Attacks.",
  "Momentum Shift": "When damaged by an attack, use a Reaction to move up to your speed without provoking. If you end 15 feet away, your next attack before next Turn has Advantage.",
  "Blitz": "Once per encounter as an Action, move up to twice your speed in a line without provoking. Creatures you pass through test defense or take Power Die + DEX damage and fall Prone.",
  "Untouchable": "When targeted by an attack you can perceive, use a Reaction to impose Disadvantage. If it hits, take half damage; if it misses, you may move 15 feet.",
  "Apex Predator": "Gain Advantage against creatures that have not acted or are Prone, Restrained, or Dazed. Strong Success lets you move, and once per encounter you may mark a target with mutual pressure.",
  "Inner Fortress": "Gain Advantage on saves against Shaken, Frightened, Dazed, and Charmed. Once per encounter, reroll a failed save. Steady On or Second Wind grants extra temporary HP.",
  "Force of Will": "Once per Turn, when a creature targets you or an ally with Shaken, Frightened, Dazed, or Charmed, spend a Bonus Action to roll WIS + Prowess and turn pressure back on it.",
  "Unshakable Ground": "You cannot be surprised while conscious. Once per encounter, when an ally within Short range fails a save against key mental conditions, use a Reaction to let them reroll.",
  "Eye of the Storm": "Once per encounter as a Bonus Action, you and allies within Short range become immune to Shaken, Frightened, Dazed, and Charmed for Prowess Turns.",
  "Turning the Tide": "When you save against key mental conditions, spend a Bonus Action to turn the effect back against its source. Force of Will can also be used more freely.",
  "Transcendent Presence": "Once per encounter, roll WIS + Prowess against nearby enemies' WIS Save Values, frightening or shaking them, ending one ally Condition, and making Eye of the Storm persist."
};
const meritRules = {
  "Ally": "Rating 1-3. You have a loyal NPC ally controlled by the GM. Once per session you may call on them for assistance; the rating determines whether the aid is a minor favor, capable backup, or major campaign-level support.",
  "Alternate Identity": "Rating 1-2. You possess a convincing additional identity with documents, history, digital footprint, and social cover. Attempts to connect it to your real identity suffer Disadvantage.",
  "Attractive": "Rating 1. Gain Advantage on Influence checks where physical appeal, style, charm, glamour, or presentation reasonably matters.",
  "Base of Operations": "Rating 1-3. You have a secure place to operate. During a Breather there you may spend Recovery without limit and access stored equipment; higher ratings add security, facilities, and support advantages.",
  "Cash Flow": "Rating 1-3. You have reliable income or assets. Gain Advantage when liquid money, bribes, lifestyle, or purchasing access matters within the rating's scope.",
  "Civic Standing": "Rating 1-3. You hold a recognized position in society. Gain Advantage on Influence checks with institutions, officials, or communities that recognize your standing.",
  "Connected": "Rating 1-3. Choose a social sphere. Gain Advantage seeking information, introductions, rumors, favors, or access within that sphere. May be taken multiple times.",
  "Danger Aware": "Rating 1. Gain Advantage on Notice checks to detect danger, ambushes, surveillance, hidden enemies, suspicious behavior, or imminent threats.",
  "Easy Company": "Rating 1. People tend to enjoy being around you. Gain Advantage on Influence checks to make a friendly impression, calm ordinary tension, or win casual goodwill.",
  "Eidetic Memory": "Rating 1. You accurately recall anything you deliberately studied, read, witnessed, or memorized. Under pressure, gain Advantage on Intelligence checks to remember those details.",
  "Fame": "Rating 1-3. You are publicly known. Gain Advantage where fame helps and suffer Disadvantage passing unnoticed among people likely to recognize you.",
  "Fortunate Reputation": "Rating 1. Once per session, when your reputation for good fortune could influence a social scene, gain Advantage on an Influence check or grant an ally Advantage on a morale-related check.",
  "Legal Authority": "Rating 1-3. You possess recognized legal authority. Gain Advantage with law enforcement, government agencies, and legal institutions at the appropriate level.",
  "Local Support": "Rating 1-3. A community or local group supports you. Gain Advantage when seeking shelter, rumors, help, or protection from that community.",
  "Media Favor": "Rating 1-2. Media channels tend to portray you positively. Once per session, gain Advantage on Influence checks tied to coverage; Rating 2 hinders attempts to frame or discredit you.",
  "Mentor": "Rating 1-3. You have a teacher, senior hero, expert, guide, or advisor. Once per session you may consult them for knowledge, planning, or stronger arc-level support at higher ratings.",
  "No Public Records": "Rating 1. Your civilian identity has no normal paper trail. Attempts to identify, locate, or research you through official channels suffer Disadvantage.",
  "Patron": "Rating 1-3. A wealthy individual, agency, order, office, embassy, or similar patron supports you. Once per session you may call on them for resources, favors, or intervention.",
  "Prepared Cache": "Rating 1. Once per session you may declare that you previously stored a plausible mundane item, disguise, tool, medical kit, document, or emergency supply nearby.",
  "Public Trust": "Rating 1-3. You are known for doing the right thing. Gain Advantage on Influence checks with civilians, responders, officials, or communities that respect your reputation.",
  "Restless Sleeper": "Rating 1. You sleep lightly and wake easily. You do not suffer Disadvantage on Notice checks for being asleep when a threat approaches within a reasonable distance.",
  "Rugged": "Rating 1. Gain Advantage on Constitution checks against exposure, hunger, thirst, lack of sleep, long travel, or mundane fatigue.",
  "Secret Identity": "Rating 1-2. Your heroic and civilian lives are separated. Attempts to connect them suffer Disadvantage unless the investigator has strong direct evidence.",
  "Sidekick": "Rating 1-2. You have a junior heroic assistant or trainee controlled by the GM. Once per encounter they may take a limited action; Rating 2 allows one Tier 1 Power or trained Skill.",
  "Stage Presence": "Rating 1. Gain Advantage on Influence checks involving speeches, interviews, rallies, ceremonies, public appearances, or dramatic entrances.",
  "Strong Resolve": "Rating 1. Gain Advantage on saves against coercion, interrogation, humiliation, despair, and attempts to break your will through non-powered pressure.",
  "Team Membership": "Rating 1-3. You belong to a recognized team or organization. Once per session you may call on them for support, with higher ratings allowing broader coordinated help.",
  "Vehicle": "Rating 1-3. You possess a notable vehicle. When using it in pursuit, combat, or high-speed situations, gain Advantage on Vehicles checks; higher ratings add special defenses or iconic capabilities.",
  "Wary": "Rating 1. Gain Advantage on Insight checks to detect lies, scams, manipulation, false friendliness, or suspicious motives.",
  "Wealth": "Rating 1-3. You possess significant personal resources. Gain Advantage where financial access, purchasing power, or economic leverage matters within the rating's scope."
};
const flawRules = {
  "Absent-Minded": "Rating 1. Under stress you forget names, appointments, clues, items, or obvious details. When invoked, roll INT against EV 15 or forget, misplace, or confuse the detail.",
  "Action Addict": "Rating 1. Waiting, bureaucracy, planning, stakeouts, and inactivity make you restless. When patience is required, roll WIS against EV 15 or push for action or suffer Disadvantage on patience-based checks.",
  "Addiction": "Rating 1-3. Define a substance, behavior, or power source. When stressed, injured, isolated, or tempted, roll CON or WIS against the rating DC or suffer relapse pressure, Disadvantage, or complications.",
  "Alien Outsider": "Rating 1-2. You misunderstand local customs, law, humor, emotional expectations, or social norms. Suffer Disadvantage on social checks when cultural context matters unless guided.",
  "Bad Reputation": "Rating 1-3. People distrust, fear, mock, or resent you. Suffer Disadvantage on Influence checks with people aware of the reputation unless you directly address it.",
  "Berserk Trigger": "Rating 1-3. Define a rage trigger. When exposed, roll WIS against the rating DC or you must attack, pursue, threaten, or confront the source until you save or are steadied.",
  "Bully": "Rating 1. You cannot stand perceived weakness. When confronted with it, roll WIS against EV 15 or insult, pressure, challenge, or provoke the target.",
  "Code of Conduct": "Rating 1-3. Define a strict code. To violate it, roll WIS against the rating DC. On a failure you cannot bring yourself to violate it.",
  "Combat Freeze": "Rating 2. When ambushed, surprised by violence, or entering sudden combat, roll WIS against EV 20 or become Dazed until the end of your first Turn.",
  "Cowardice": "Rating 1-2. Direct danger shakes you. When exposed to overwhelming odds or lethal threat, roll WIS against the rating DC or retreat, seek cover, or suffer Disadvantage on attacks.",
  "Debt": "Rating 1-3. You owe money, favors, property, secrets, or service. Once per session the GM may invoke it to impose Disadvantage or, at Rating 3, call in the debt as a scene.",
  "Dependent": "Rating 1-3. Someone relies on you. Once per session the GM may place them in a situation requiring attention; Rating 3 can force WIS saves to prioritize anything else.",
  "Destitute": "Rating 1-2. You lack stable money, housing, or basic resources. Suffer Disadvantage on checks requiring money, status, or stable access unless helped.",
  "Enemy": "Rating 1-3. A specific enemy wants to harm, expose, defeat, corrupt, or destroy you. Once per session the GM may introduce them or their agents as a complication.",
  "Emotional Trigger": "Rating 1-2. A specific subject, person, symbol, event, or memory destabilizes you. When confronted, roll WIS or become Shaken or act impulsively.",
  "Famous Identity": "Rating 1-2. You are too recognizable. Suffer Disadvantage to pass unnoticed in public unless disguised or concealed; Rating 2 draws frequent press, fan, and enemy attention.",
  "Fugitive": "Rating 2-3. Authorities seek you. Official channels, open travel, or public resources require a roll against EV 20 or 25 or draw attention/blockage.",
  "Gear Dependent": "Rating 1-3. Your heroic capability depends on gear. When it is damaged, stolen, or unavailable, suffer Disadvantage on checks that rely on it; higher ratings are more severe.",
  "Haunted": "Rating 1-3. Trauma, guilt, ghosts, visions, psychic scars, or memories follow you. When invoked, roll WIS or become Shaken, distracted, or suffer relevant Disadvantage.",
  "Honest to a Fault": "Rating 1. You struggle to lie or mislead. Suffer Disadvantage on Influence checks involving direct lies or deliberate misdirection.",
  "Hunted": "Rating 2-3. Someone is actively tracking you. Once per session the GM may introduce surveillance, an ambush, a trap, or a resource being cut off.",
  "Infamy": "Rating 1-3. You are publicly associated with villainy, disaster, scandal, or fear. Suffer Disadvantage on public trust checks and attract hostile attention.",
  "Marked by Power": "Rating 1-2. Your nature can be detected by certain groups, senses, technologies, rituals, or entities. Attempts to hide from those methods suffer Disadvantage.",
  "Monstrous Appearance": "Rating 1-2. Your appearance frightens or alienates ordinary people. Suffer Disadvantage socially where fear/prejudice matters, but gain Advantage on relevant Intimidation.",
  "Obligation": "Rating 1-3. You owe regular duty to a person, agency, family, faith, job, team, organization, or community. Ignoring it creates Disadvantage or can suspend related support.",
  "Oath": "Rating 1-3. You are bound by a promise, vow, charge, pledge, or covenant. To violate it, roll WIS against the rating DC; violation can still create fallout.",
  "Overconfident": "Rating 1. You underestimate danger. When warned or offered caution, roll WIS against EV 15 or choose the bold approach, exposing yourself or weakening your first defense.",
  "Phobia": "Rating 1-3. Define a fear. When exposed, roll WIS against the rating DC or become Shaken or Frightened until removed or steadied.",
  "Power Instability": "Rating 1-3. Your powers surge, misfire, or create collateral problems. When invoked, roll a relevant Attribute or suffer collateral damage, Overloaded, Shaken, or an unintended effect.",
  "Public Identity": "Rating 2 fixed. Your civilian identity is known. Enemies, media, police, fans, civilians, and institutions can locate and pressure your ordinary life.",
  "Reckless": "Rating 1. When a direct heroic risk presents itself, roll WIS against EV 15 to choose caution. On failure, you charge in or prioritize action over safety.",
  "Responsibility to the Innocent": "Rating 1-3. You cannot ignore civilian danger. When civilians are endangered and another goal competes, roll WIS against the rating DC to prioritize the other goal.",
  "Secret Weakness": "Rating 1-3. Define a vulnerability. When exposed, suffer Disadvantage on relevant saves and checks; higher ratings can suspend Merits or become campaign-relevant.",
  "Social Outsider": "Rating 1. You lack normal cultural access. Suffer Disadvantage on etiquette, bureaucracy, formal social assumptions, or institutional navigation unless assisted.",
  "Vulnerable Reputation": "Rating 1-2. Public trust in you is fragile. When framed, criticized, or scandalized, suffer Disadvantage on public Influence until actively repaired.",
  "Weak Support System": "Rating 1. You lack reliable anchors. During Downtime recovery from trauma, scandal, or serious stress, suffer Disadvantage unless another hero or NPC helps."
};
Object.assign(meritRules, {
  "Altered Physiology": "Origin Merit. Your body or mind has been permanently changed beyond ordinary human limits. This supports the chosen Enhanced trait and can justify biological advantages, unusual resilience, or nonstandard physical responses.",
  "Beyond Mortal": "Origin Merit. Your existence has moved beyond normal mortal limits. This supports the chosen Transcendent benefit and may justify resistance to age, death, metaphysical pressure, or ordinary assumptions about identity.",
  "Cosmic Signature": "Origin Merit. Your power leaves a recognizable cosmic imprint. This supports the chosen Cosmic feature and can justify insight into stellar, dimensional, or universal phenomena.",
  "Gear Access": "Rating 1. You have reliable access to tools, maintenance parts, storage, charging infrastructure, workshop space, or supply channels needed to support heroic equipment.",
  "Inhuman Body": "Origin Merit. Your body is visibly or functionally outside ordinary human norms. This supports the chosen Monster trait and can justify natural weapons, unusual anatomy, night adaptation, or frightening presence.",
  "Mystic Attunement": "Origin Merit. You are attuned to supernatural forces, spirits, curses, relics, or magical practice. This supports the chosen Mystic practice and can justify interaction with unseen powers.",
  "Prepared Foundation": "Origin Merit. Choose one prepared foundation such as Base of Operations, Connected, Gear Access, Legal Authority, Local Support, Mentor, Prepared Cache, or Safehouse Network. It does not count against your starting Merit allowance.",
  "Strange Biology": "Origin Merit. Your species or biology functions differently from ordinary humans. Choose an alien biological trait; that trait defines the specific mechanical benefit.",
  "Synthetic Construction": "Origin Merit. You are built, not born. This supports the chosen Artificial trait and can justify interface, repair, hardening, or other constructed-body advantages.",
  "The Name": "Origin Merit. You carry a mantle, family name, symbol, or legacy with history. This supports the chosen Legacy benefit and can grant inherited contacts, public trust, or mentor support."
});
Object.assign(flawRules, {
  "Constructed Nature": "Origin Flaw. Your artificial nature can create limits, vulnerabilities, maintenance needs, social friction, or situations where normal biology-based solutions do not apply.",
  "Feared": "Origin Flaw. Your monstrous nature or reputation frightens ordinary people. When it actively complicates a scene rather than serving as background, the GM may invoke it and award 1 Edge.",
  "Gear Dependency": "Origin Flaw. Your heroic work depends on gear, armor, weapons, vehicles, relics, or devices that can be damaged, stolen, disabled, jammed, hacked, lost, or separated from you.",
  "Losing Humanity": "Origin Flaw. Your changing nature creates alienation, temptation, collateral risk, emotional distance, or metaphysical danger. When that pressure matters, the GM may invoke it and award 1 Edge.",
  "Marked by Change": "Origin Flaw. Your altered nature can be detected, studied, feared, or used against you. Medical, scientific, or technological investigation may reveal what happened to you.",
  "Only Human": "Origin Flaw. Unless Powers say otherwise, your body remains fundamentally mortal. Exhaustion, injury, aging, hunger, thirst, and ordinary physical limits can still create pressure.",
  "Supernatural Burden": "Origin Flaw. Your connection to the unseen world attracts attention from spirits, demons, cults, curses, entities, or forces that want something from you.",
  "The Expectation": "Origin Flaw. Your Legacy creates pressure. Allies, enemies, institutions, or the public measure you against the name, mantle, symbol, or history you carry.",
  "Too Bright to Hide": "Origin Flaw. Your cosmic signature is difficult to conceal. Attempts to track or identify that signature gain Advantage when the tracker has appropriate means."
});
const talentRules = {
  "Actor": "Social. Gain Advantage on Influence and Finesse checks to impersonate, disguise your voice, mimic behavior, or perform under observation. After studying a person for at least one minute, casual observers have Disadvantage to detect your mimicry.",
  "Alert": "Investigation, Combat. Gain Advantage on Initiative rolls and cannot be surprised while conscious unless an effect bypasses mundane awareness. Also gain Advantage on Notice checks to detect ambushes, hidden enemies, or imminent danger.",
  "Appeal": "Social. Gain Advantage on Influence checks to charm, persuade, or attract positive attention. Once per scene, after succeeding, you may give one ally Advantage on their next social check involving the same target or group.",
  "Athlete": "Mobility. Standing from Prone costs no movement and climbing costs no additional movement. Once per Turn on Athletics or Acrobatics checks involving running, jumping, climbing, swimming, or controlled movement, add Prowess if untrained or gain Advantage if trained.",
  "Battlefield Leader": "Leadership. Once per encounter when Initiative is rolled, choose allies up to your CHA or INT within 60 feet who can perceive you; each may move 10 feet without provoking. Allies following your spoken tactical direction gain Advantage on one related check before their next Turn ends.",
  "Cold Reader": "Social, Investigation. After speaking with or observing a creature for at least one minute, gain Advantage on your next Insight, Influence, or Intimidation check against it. On success, learn its emotional state, immediate desire, obvious fear, or best social leverage.",
  "Counterguard": "Combat. When a hostile creature within your reach willingly moves away, you may make an Opportunity Attack even if it Disengages. If you hit, its Speed becomes 0 until the end of the current Turn.",
  "Defensive Fighter": "Combat. When you take the Dodge action, you may also move up to 10 feet without provoking. Once per encounter when an attack misses you, grant one adjacent ally temporary HP equal to your Prowess.",
  "Durable": "Resilience. During a Breather, when you spend Recovery, treat any die roll lower than your CON plus Prowess as that result. Once per encounter, ignore Shaken from injury.",
  "Fast Draw": "Combat. Draw, stow, ready, or switch one weapon or handheld device as part of any attack or Reaction. Once per encounter when Initiative is rolled, immediately draw a weapon or device and move 10 feet.",
  "Field Commander": "Leadership. As a Bonus Action, choose one ally within 60 feet who can hear you. That ally may move 10 feet or stand from Prone as a free action. Uses per encounter equal to Prowess, with no ally benefiting more than once per Turn.",
  "Forensic Expert": "Investigation. Gain Advantage on Investigation and Medicine checks involving crime scenes, evidence, wounds, cause of death, ballistic traces, chemical residue, or staged scenes. After 10 minutes examining a scene, ask the GM one direct question about what most likely happened.",
  "Grappler": "Combat. Gain Advantage on checks to grapple, maintain a grapple, escape a grapple, or shove a creature you are grappling. Once per Turn after successfully grappling, reduce the target's Speed by an additional 10 feet until the grapple ends.",
  "Hard to Kill": "Resilience. Gain Advantage on Grit Saves. Once per day when you fail a Grit Save, treat it as a success. On a natural 20 Grit Save, gain temporary HP equal to Prowess when you return to consciousness.",
  "Improvised Fighter": "Combat. Treat improvised weapons as normal weapons. Once per Turn after hitting with an improvised weapon or environmental attack, push 5 feet, knock over a small object/cover, break fragile terrain/barriers, or impose Shaken until the target's next Turn ends.",
  "Inspiring Leader": "Leadership. Once per Breather after speaking for at least one minute, choose creatures up to CHA + Prowess who can hear and understand you; each gains temporary HP equal to Level + CHA. Once per encounter as a Bonus Action, grant one ally within 60 feet temporary HP equal to Prowess + CHA.",
  "Interrogator": "Social. Gain Advantage on Intimidation and Insight during interrogation, questioning, or pressure conversations. Once per scene, when a creature lies and you succeed on Insight, ask whether the lie protects a person, place, object, motive, or fear.",
  "Iron Will": "Resilience. Gain Advantage on saves against Frightened, Charmed, Shaken, intimidation, emotional manipulation, and despair. Once per encounter after failing one of those saves, choose to succeed instead but become Shaken until your next Turn ends.",
  "Jack of All Trades": "General. When you make an untrained Skill check, add half your Prowess, rounded down. This does not apply to attack rolls or saves.",
  "Linguist": "General. Learn three additional languages. Gain Advantage on checks to decode unfamiliar languages, recognize dialects, identify coded speech, or communicate basic ideas across a language barrier using improvised signals and context.",
  "Lucky": "General. Once per session after rolling a d20, reroll it and use either result. You may also use this after an attack roll against you, forcing the attacker to reroll and using whichever result you choose.",
  "Martial Artist": "Combat. Your unarmed damage die becomes d6, or d8 if both hands are free. Add FIG to unarmed damage in addition to STR. Once per Turn after hitting unarmed, attempt to shove, trip, or disarm as a Bonus Action.",
  "Marksman": "Combat. Choose one ranged weapon group. Attacks with that group ignore half cover. Once per Turn, reroll one damage die from a successful attack using that group and take the higher result.",
  "Master Negotiator": "Social. Gain Advantage on Influence checks to negotiate, bargain, de-escalate, mediate, or broker terms. Once per scene before violence begins, force one tense or hostile NPC to pause long enough for one clear sentence or offer unless mindless or committed to immediate violence.",
  "Master of Combat": "Combat. Once per encounter when you make an attack roll, reroll one die and use the higher result. Also gain Advantage on checks to identify fighting styles, predict an opponent's next move in combat, or analyze combat techniques.",
  "Mobile": "Mobility. Speed increases by 10 feet. When you move at least 15 feet before a melee attack or damaging Power use, that target cannot make Opportunity Attacks against you until the end of your Turn. Vanguards with Fluid Motion gain only the Speed increase.",
  "Never Give Up": "Leadership, Resilience. Once per encounter, when an ally within 60 feet you can perceive would be reduced to 0 HP, use your Reaction to let them remain at 1 HP instead. That ally becomes Shaken until their next Turn ends.",
  "Observant": "Investigation. Gain Advantage on passive and active Notice and Investigation checks involving small details, hidden clues, concealed objects, surveillance setups, or reading lips. If you can see a creature's mouth and know the language, you can understand speech unless obscured or encoded.",
  "Pain Tolerance": "Resilience. Gain Advantage on saves against Dazed, Stunned from physical injury, torture, pain, or shock. Once per encounter, ignore one Shaken, Dazed, or Prone effect caused by damage.",
  "Pattern Recognition": "Investigation. Once per scene after observing a creature, system, crime scene, battle pattern, or social situation for at least one round, make Investigation, Insight, Notice, Science, or Technology with Advantage to identify a weakness, repeated behavior, hidden structure, or likely next move.",
  "Performer": "Social. Choose one performance form. Gain Advantage on Influence checks using it. Once per scene when performing for a crowd, shift the crowd's mood one step toward calm, excitement, fear, sympathy, distraction, or awe if the situation allows.",
  "Power Control": "Power Support. Choose one Power Set. Once per encounter, when you would cause collateral damage, lose control, or suffer Disadvantage from unstable use of that Power Set, ignore that complication. May be selected multiple times for different Power Sets.",
  "Power Focus": "Power Support. Choose one At-Will Power. Once per encounter, gain Advantage on an attack roll with it or impose Disadvantage on one target's save against it. May be selected multiple times for different At-Will Powers.",
  "Provocateur": "Social, Combat. Once per encounter as a Bonus Action, choose one hostile creature within 60 feet that can hear or understand you. Roll CHA + Prowess against Social Value; on success, it has Disadvantage on its next attack against anyone but you before its next Turn ends.",
  "Psychic Discipline": "Mystic, Mental. Gain Advantage on INT, WIS, and CHA saves against psychic intrusion, mind reading, emotional control, mental domination, and psychic damage. Once per encounter after succeeding, identify the direction or emotional signature of the source if in range.",
  "Resilient": "Resilience. Choose one Ability Score save. Gain training in that save. If already trained, once per encounter reroll a failed save with that Ability Score and take the higher result.",
  "Sharpshooter": "Combat. Ranged attacks ignore half cover and long range does not impose Disadvantage if you can clearly perceive the target. Once per Turn before a ranged attack, accept Disadvantage; on hit, add one additional Power Die to damage.",
  "Skilled": "General. Gain training in two Skills. Alternatively, gain training in one Skill and one Specialty tied to a Skill you already have.",
  "Specialist": "General. Choose one Skill Specialty. When it applies, gain Advantage. If you already had Advantage from another source, add Prowess to the roll instead. May be selected multiple times for different Specialties.",
  "Surveillance Specialist": "Investigation, Technical. Gain Advantage on Notice and Technology checks involving cameras, sensors, listening devices, stakeouts, tracking signals, or overwatch. Once per encounter, if combat begins from a prepared observation position, one ally gains Advantage on Initiative.",
  "Takedown Artist": "Combat. When you hit a creature that is Prone, Grappled, Restrained, Dazed, or Shaken, add Prowess to damage. Once per encounter after reducing a target to 0 HP, move 10 feet or shove one adjacent target as a free action.",
  "Team Player": "Leadership. When you Help an ally, that ally also gains temporary HP equal to Prowess. Once per encounter when an ally within 30 feet misses while benefiting from your Help, they may reroll one damage die or attack die tied to that action and take the higher result.",
  "Tireless": "Resilience. Gain Advantage on saves against exhaustion, forced marches, environmental fatigue, and Burnout recovery checks. During a Breather, automatically remove Shaken from yourself without spending a resource.",
  "Tough": "Resilience. Maximum HP increases by 2 per character Level, retroactively. Once per encounter, when reduced below half maximum HP, gain temporary HP equal to Prowess.",
  "Underwater Combatant": "Combat, Mobility. You do not suffer Disadvantage on attack rolls, Athletics, or Acrobatics due to being underwater. Gain Advantage to swim, fight currents, escape underwater grapples, or maneuver submerged. Does not grant water breathing.",
  "War Caster": "Mystic, Mental. Gain Advantage on saves to maintain Sustained Powers after taking damage. When a hostile creature provokes an Opportunity Attack, you may use a Power instead of a basic attack if range and action type allow.",
  "Weapon Specialist": "Combat. Choose one specific weapon or weapon group. Once per Turn, when you hit with it, add Prowess to damage. This does not stack with class features that already add Prowess to the same damage roll."
};
const defaults = {
  rank: "Mid-Level",
  level: 1,
  origin: "Enhanced",
  className: "Bruiser",
  calling: "Protector",
  powerAbility: "str",
  limitations: 0,
  bonusPicks: 0,
  strScore: 18,
  dexScore: 16,
  conScore: 15,
  figScore: 14,
  intScore: 13,
  wisScore: 12,
  chaScore: 10,
  perScore: 8
};

const steps = [
  ["concept", "Create the Concept", "Hero idea, campaign rank, and notes"],
  ["abilities", "Assign Ability Scores", "Set the eight core ability scores"],
  ["origin", "Choose an Origin", "Origin bonuses and built-in mechanics"],
  ["class", "Choose a Class", "Class chassis and class features"],
  ["side", "Choose a Side", "Heroic, Unaligned, or GM-only Villainous"],
  ["calling", "Choose a Calling", "Calling and Edge triggers"],
  ["hitPoints", "Calculate Hit Points", "HP, Hit Die, Recovery, and Prowess"],
  ["skills", "Skills & Specialties", "Trained skills, expertise, and specialties"],
  ["meritsFlaws", "Merits & Flaws", "Advantages, complications, and origin traits"],
  ["powers", "Powers & Limitations", "Power sets, picks, and limitations"],
  ["talent", "Choose a Talent", "Starting and additional talents"],
  ["defenses", "Active Defenses & Saves", "Defenses, saves, and attacks"],
  ["edge", "Record Edge", "Starting Edge, cap, and triggers"],
  ["gear", "Choose Gear", "Gear, enhancements, costume, and notes"],
  ["identity", "Finalize Identity", "Name, identity, portrait, and final notes"]
];

const stepArtwork = {
  concept: ["Hero Concept", "Portrait, silhouette, or team introduction"],
  abilities: ["Raw Potential", "A hero demonstrating exceptional ability"],
  origin: ["Origin Story", "Transformation, legacy, or first awakening"],
  class: ["Hero in Action", "The character's defining combat role"],
  side: ["A Line Drawn", "A public choice between duty and personal code"],
  calling: ["The Call", "The motive that keeps the hero moving"],
  hitPoints: ["Stand Your Ground", "Endurance under impossible pressure"],
  skills: ["Training Montage", "Expertise, investigation, or practiced technique"],
  meritsFlaws: ["Strengths & Scars", "A defining advantage paired with a complication"],
  powers: ["Power Unleashed", "The hero's signature superhuman display"],
  talent: ["Defining Talent", "A practiced edge beyond raw power"],
  defenses: ["Hold the Line", "A dodge, parry, block, or forceful resistance"],
  edge: ["Turning Point", "The dramatic moment when conviction takes over"],
  gear: ["Tools of the Trade", "Costume, weapon, vehicle, or iconic equipment"],
  identity: ["Behind the Mask", "Final character portrait or civilian identity"]
};

const app = document.querySelector("#app");
let activeStep = "concept";
let sheet = { ...defaults };
let activeTheme = localStorage.getItem(THEME_KEY) || "classic";
let sampleCharacters = [];
let sampleStatus = "";
let activeCompendiumSection = "glossary";
let diceRollMode = "normal";
let diceRollHistory = [];
let powerChoiceCatalogCache;
let powerChoiceMapCache;

function applyTheme(theme) {
  activeTheme = themes.some(([id]) => id === theme) ? theme : "classic";
  document.documentElement.dataset.theme = activeTheme;
  localStorage.setItem(THEME_KEY, activeTheme);
}

applyTheme(activeTheme);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
}

function loadLibrary() {
  try {
    const library = JSON.parse(localStorage.getItem(LIBRARY_KEY) || "[]");
    return Array.isArray(library) ? library : [];
  } catch {
    return [];
  }
}

function saveLibrary(library) {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
}

function characterName() {
  return sheet.heroName || sheet.realName || "Unnamed Hero";
}

function characterId(name) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "character"}-${Date.now()}`;
}

function cloneSheet(value) {
  return JSON.parse(JSON.stringify(value));
}

function rankAbilityArray(rank = sheet.rank) {
  return abilityArrays[rank] || abilityArrays["Mid-Level"];
}

function normalizeAbilityScores() {
  const array = [...rankAbilityArray()];
  const used = new Set();

  for (const [key] of abilities) {
    const field = `${key}Score`;
    const value = Number(sheet[field]);
    if (array.includes(value) && !used.has(value)) {
      sheet[field] = value;
      used.add(value);
    } else {
      sheet[field] = "";
    }
  }

  const remaining = array.filter(value => !used.has(value));
  for (const [key] of abilities) {
    const field = `${key}Score`;
    if (!sheet[field]) sheet[field] = remaining.shift();
  }
}

function abilityArrayOptions(key) {
  const current = Number(sheet[`${key}Score`]);

  return rankAbilityArray()
    .map(value => `<option value="${value}" ${selected(current, value)}>${value}</option>`)
    .join("");
}

function abilityArrayStatus() {
  const array = rankAbilityArray();
  const assigned = abilities.map(([key]) => Number(sheet[`${key}Score`])).filter(Boolean);
  const unique = new Set(assigned);
  const complete = assigned.length === array.length && unique.size === array.length && assigned.every(value => array.includes(value));
  return complete ? "All array values assigned once." : "Assign each value from the campaign rank array exactly once.";
}

function initialsFor(name) {
  return String(name || "?")
    .split(/\s+/)
    .map(part => part[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("")
    .toUpperCase() || "?";
}

function mod(score) {
  return Math.floor((Number(score || 10) - 10) / 2);
}

function signed(value) {
  const number = Number(value || 0);
  return number >= 0 ? `+${number}` : `${number}`;
}

function prowess(level) {
  const value = Number(level || 1);
  if (value >= 10) return 5;
  if (value >= 7) return 4;
  if (value >= 4) return 3;
  return 2;
}

function hitAverage(hitDie) {
  return Math.floor(hitDie / 2) + 1;
}

function originBonus(key) {
  return (sheet.originPrimaryBonus === key ? 2 : 0) + (sheet.originSecondaryBonus === key ? 1 : 0);
}

function powerAbilityScoreBonus(key) {
  return selectedPowerSets().reduce((total, powerSet) => {
    if (!/^\+1\b/.test(powerSet.abilityScoreBonus || "") || powerSetAbility(powerSet) !== key) return total;
    return total + purchasedCoreLevel(powerSet);
  }, 0);
}

function abilityScore(key) {
  return Number(sheet[`${key}Score`] || 10) + originBonus(key) + powerAbilityScoreBonus(key);
}

function abilityMod(key) {
  return mod(abilityScore(key));
}

function ensurePowerState() {
  if (!Array.isArray(sheet.powerPurchases)) sheet.powerPurchases = [];
  if (!sheet.powerSetAbilities || typeof sheet.powerSetAbilities !== "object" || Array.isArray(sheet.powerSetAbilities)) {
    sheet.powerSetAbilities = {};
  }
}

function powerChoiceId(setId, group, itemId) {
  return `${setId}::${group}::${itemId}`;
}

function powerRuleId(name) {
  return String(name || "power").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function selectedPowerSetNames() {
  return Array.from({ length: 12 }, (_, index) => sheet[`powerSet${index + 1}`]).filter(Boolean).filter((name, index, items) => items.indexOf(name) === index);
}

function selectedPowerSets() {
  return selectedPowerSetNames().map(name => powerSetByName[name]).filter(Boolean);
}

function powerSetSlotCount() {
  const values = calc();
  let lastUsed = 0;
  for (let index = 1; index <= 12; index += 1) {
    if (sheet[`powerSet${index}`]) lastUsed = index;
  }
  return Math.max(values.maxPowerSets, lastUsed);
}

function powerTierLimit() {
  const rankLimit = sheet.rank === "Street Level" ? 1 : sheet.rank === "Mid-Level" ? 2 : 3;
  if (Number(sheet.level || 1) < 5) return rankLimit;
  return Math.min(3, rankLimit + (rankLimit < 3 ? 1 : 0));
}

function powerSetAbility(powerSet) {
  const options = powerSet?.abilityOptions || [];
  const stored = sheet.powerSetAbilities?.[powerSet?.id];
  if (options.includes(stored)) return stored;
  if (selectedPowerSets()[0]?.id === powerSet?.id && options.includes(sheet.powerAbility)) return sheet.powerAbility;
  return options[0] || "str";
}

function powerChoiceCatalog() {
  if (powerChoiceCatalogCache) return powerChoiceCatalogCache;
  const choices = [];
  powerSetRules.forEach(powerSet => {
    powerSet.coreTrack.forEach(item => choices.push({ ...item, setId: powerSet.id, setName: powerSet.name, group: "core" }));
    powerSet.powers.forEach(item => choices.push({ ...item, setId: powerSet.id, setName: powerSet.name, group: "power" }));
    powerSet.utilities.forEach(item => choices.push({ ...item, setId: powerSet.id, setName: powerSet.name, group: "utility" }));
    powerSet.enhancements.forEach((item, index) => choices.push({ ...item, id: item.id || `enhancement-${index + 1}`, setId: powerSet.id, setName: powerSet.name, group: "enhancement", tier: 1, type: "Enhancement", action: "Passive", creationCost: .5 }));
    powerSet.limitations.forEach((item, index) => choices.push({ ...item, id: item.id || `limitation-${index + 1}`, setId: powerSet.id, setName: powerSet.name, group: "limitation", tier: 1, type: "Limitation", action: "Varies", creationCost: 0 }));
  });
  generalUtilityPowers.forEach(item => choices.push({ ...item, setId: "general-utility", setName: "General Utility", group: "general" }));
  powerFramework.genericEnhancements.forEach(item => choices.push({ ...item, id: powerRuleId(item.name), setId: "general-enhancement", setName: "General Enhancement", group: "enhancement", tier: 1, type: "Enhancement", action: "Passive", creationCost: .5 }));
  powerFramework.genericLimitations.forEach(item => choices.push({ ...item, id: powerRuleId(item.name), setId: "general-limitation", setName: "General Limitation", group: "limitation", tier: 1, type: "Limitation", action: "Varies", creationCost: 0 }));
  powerChoiceCatalogCache = choices.map(choice => ({ ...choice, choiceId: powerChoiceId(choice.setId, choice.group, choice.id) }));
  return powerChoiceCatalogCache;
}

function powerChoiceMap() {
  if (!powerChoiceMapCache) powerChoiceMapCache = new Map(powerChoiceCatalog().map(choice => [choice.choiceId, choice]));
  return powerChoiceMapCache;
}

function selectedPowerChoices() {
  ensurePowerState();
  const catalog = powerChoiceMap();
  return sheet.powerPurchases.map(id => catalog.get(id)).filter(Boolean);
}

function selectedPowerChoiceIds() {
  ensurePowerState();
  return new Set(sheet.powerPurchases);
}

function selectedPowerLimitations() {
  return selectedPowerChoices().filter(choice => choice.group === "limitation");
}

function powerLimitationCount() {
  return Math.max(selectedPowerLimitations().length, Number(sheet.limitations || 0));
}

function purchasedCoreLevel(powerSet) {
  return selectedPowerChoices()
    .filter(choice => choice.setId === powerSet.id && choice.group === "core")
    .reduce((highest, choice) => Math.max(highest, choice.level), 0);
}

function prerequisiteMet(choice) {
  if (choice.group === "limitation") return selectedPowerLimitations().length < calc().maxLimitations;
  if (choice.setId === "general-enhancement") return selectedPowerSets().length > 0;
  if (choice.group === "general") {
    if (!choice.prerequisite) return true;
    return selectedPowerChoices().some(item => item.name === choice.prerequisite);
  }
  const powerSet = powerSetRules.find(item => item.id === choice.setId);
  if (!powerSet || !selectedPowerSetNames().includes(powerSet.name)) return false;
  if (choice.group === "core") return choice.level === 1 || purchasedCoreLevel(powerSet) >= choice.level - 1;
  const prerequisite = choice.prerequisite || `${powerSet.name} 1`;
  const requiredCore = Number((prerequisite.match(new RegExp(`${powerSet.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} ([1-4])`)) || [])[1] || 1);
  if (purchasedCoreLevel(powerSet) < requiredCore) return false;
  const namedPrerequisites = prerequisite.split(/\u00b7/).map(value => value.trim()).filter(value => value && !value.includes(powerSet.name));
  const setPurchases = [...powerSet.powers, ...powerSet.utilities];
  return namedPrerequisites.every(requirement => {
    const requiredPurchase = setPurchases.find(item => new RegExp(`^${item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\b|$)`, "i").test(requirement));
    return !requiredPurchase || selectedPowerChoices().some(item => item.name === requiredPurchase.name && item.setId === powerSet.id);
  });
}

function powerChoiceAvailable(choice) {
  if (choice.group !== "limitation" && Number(choice.tier || 1) > powerTierLimit()) return false;
  return prerequisiteMet(choice);
}

function prunePowerPurchases() {
  ensurePowerState();
  const selectedSetIds = new Set(selectedPowerSets().map(powerSet => powerSet.id));
  const validIds = new Set(powerChoiceCatalog().filter(choice => choice.setId.startsWith("general-") || selectedSetIds.has(choice.setId)).map(choice => choice.choiceId));
  sheet.powerPurchases = sheet.powerPurchases.filter(id => validIds.has(id));
}

function pruneUnmetPowerPrerequisites() {
  let changed = true;
  while (changed) {
    changed = false;
    const catalog = powerChoiceMap();
    const next = sheet.powerPurchases.filter(id => {
      const choice = catalog.get(id);
      if (!choice || choice.group === "limitation") return Boolean(choice);
      const keep = Number(choice.tier || 1) <= powerTierLimit() && prerequisiteMet(choice);
      if (!keep) changed = true;
      return keep;
    });
    sheet.powerPurchases = next;
  }
}

function togglePowerChoice(id) {
  ensurePowerState();
  const catalog = powerChoiceMap();
  const choice = catalog.get(id);
  if (!choice) return;
  const selected = sheet.powerPurchases.includes(id);
  if (selected) {
    sheet.powerPurchases = sheet.powerPurchases.filter(item => item !== id);
    pruneUnmetPowerPrerequisites();
  } else if (powerChoiceAvailable(choice)) {
    sheet.powerPurchases.push(id);
  }
  sheet.limitations = selectedPowerLimitations().length;
  save();
}

function powerBudget() {
  const values = calc();
  const choices = selectedPowerChoices().filter(choice => choice.group !== "limitation" && choice.group !== "enhancement");
  const enhancementsBySet = selectedPowerChoices().filter(choice => choice.group === "enhancement").reduce((groups, choice) => groups.set(choice.setId, [...(groups.get(choice.setId) || []), choice]), new Map());
  const enhancementUnits = Array.from(enhancementsBySet.entries()).flatMap(([setId, items]) => Array.from({ length: Math.ceil(items.length / 2) }, (_, index) => ({ choiceId: `${setId}::enhancement-pair::${index + 1}`, name: `${items[0].setName} Enhancements ${index + 1}`, creationCost: 1 })));
  const purchases = [...choices, ...enhancementUnits];
  const coreBaseline = choices.filter(choice => choice.group === "core").sort((a, b) => a.creationCost - b.creationCost)[0];
  const atWillBaseline = choices.filter(choice => choice.type === "At-Will").sort((a, b) => a.creationCost - b.creationCost).slice(0, 2);
  const encounterBaseline = choices.filter(choice => choice.type === "Encounter").sort((a, b) => a.creationCost - b.creationCost)[0];
  const baselinePurchases = [coreBaseline, ...atWillBaseline, encounterBaseline].filter(Boolean).filter((choice, index, items) => items.findIndex(item => item.choiceId === choice.choiceId) === index);
  const baselineIds = new Set(baselinePurchases.map(choice => choice.choiceId));
  const remainingPurchases = purchases.filter(choice => !baselineIds.has(choice.choiceId)).sort((a, b) => Number(b.creationCost || 1) - Number(a.creationCost || 1));
  const advancementAvailable = Math.max(0, values.level - 1);
  const advancementUsed = Math.min(advancementAvailable, remainingPurchases.length);
  const startingPurchases = [...baselinePurchases, ...remainingPurchases.slice(advancementUsed)];
  const startingSpent = startingPurchases.reduce((total, choice) => total + Number(choice.creationCost || 1), 0);
  const limitations = powerLimitationCount();
  const startingAvailable = values.startingPicks + limitations + Number(sheet.bonusPicks || 0);
  const enhancements = selectedPowerChoices().filter(choice => choice.group === "enhancement").length;
  const atWills = selectedPowerChoices().filter(choice => choice.type === "At-Will").length;
  const encounters = selectedPowerChoices().filter(choice => choice.type === "Encounter").length;
  const cores = selectedPowerChoices().filter(choice => choice.group === "core").length;
  const setCount = selectedPowerSetNames().length;
  const warnings = [];
  if (setCount > values.maxPowerSets) warnings.push(`Power Set cap exceeded: ${setCount}/${values.maxPowerSets}.`);
  if (startingSpent > startingAvailable) warnings.push(`Starting Power Picks exceeded by ${startingSpent - startingAvailable}.`);
  if (cores < 1) warnings.push("Choose at least one Core Track purchase.");
  if (atWills < 2) warnings.push(`Choose at least two At-Will Powers (${atWills}/2).`);
  if (encounters < 1) warnings.push("Choose at least one Encounter Power.");
  if (enhancements % 2 !== 0) warnings.push("Starting Enhancements are purchased in pairs; choose one more Enhancement.");
  if (limitations > values.maxLimitations) warnings.push(`Limitation cap exceeded: ${limitations}/${values.maxLimitations}.`);
  const unavailableSelected = selectedPowerChoices().filter(choice => choice.group !== "limitation" && (Number(choice.tier || 1) > powerTierLimit() || !prerequisiteMet(choice)));
  if (unavailableSelected.length) warnings.push(`${unavailableSelected.length} selected Power purchase${unavailableSelected.length === 1 ? " is" : "s are"} above current Tier access or missing a prerequisite.`);
  return {
    startingAvailable,
    startingSpent,
    startingRemaining: startingAvailable - startingSpent,
    advancementAvailable,
    advancementUsed,
    advancementRemaining: advancementAvailable - advancementUsed,
    limitations,
    atWills,
    encounters,
    cores,
    setCount,
    enhancements,
    warnings,
  };
}

function calc() {
  const level = Math.max(1, Math.min(10, Number(sheet.level || 1)));
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const classInfo = classes[sheet.className] || classes.Bruiser;
  const pro = prowess(level);
  const conMod = abilityMod("con");
  const primaryPowerSet = selectedPowerSets()[0];
  const primaryPowerAbility = primaryPowerSet ? powerSetAbility(primaryPowerSet) : (sheet.powerAbility || "str");
  const hp = classInfo.hitDie + abilityScore("con") + ((level - 1) * (hitAverage(classInfo.hitDie) + conMod)) + (sheet.toughTalent ? level * 2 : 0);
  const limitationPicks = Math.min(powerLimitationCount(), rank.maxLimitations);
  return {
    level,
    pro,
    prowess: signed(pro),
    hp,
    hitDie: `d${classInfo.hitDie}`,
    powerDie: rank.powerDie,
    classEV: 10 + abilityMod(classInfo.primary) + pro,
    powerEV: 10 + abilityMod(primaryPowerAbility) + pro,
    edgeStart: rank.edgeStart,
    edgeCap: level + pro,
    recovery: signed(classInfo.recovery),
    initiative: signed(abilityMod("dex") + abilityMod("per")),
    parry: signed(abilityMod("fig") + abilityMod("per") + pro),
    dodge: signed(abilityMod("dex") + abilityMod("per") + pro),
    willpower: signed(abilityMod("wis") + abilityMod("per") + pro),
    socialDefense: signed(abilityMod("cha") + abilityMod("int") + pro),
    meleeAttack: signed(abilityMod("fig") + pro),
    rangedAttack: signed(abilityMod("dex") + pro),
    mentalAttack: signed(abilityMod("int") + pro),
    socialAttack: signed(abilityMod("cha") + pro),
    powerPicks: rank.startingPicks + Math.max(0, level - 1) + limitationPicks + Number(sheet.bonusPicks || 0),
    maxPowerSets: rank.maxPowerSets,
    powerSlots: Math.max(8, rank.powerSlots),
    maxTier: rank.maxTier,
    startingPicks: rank.startingPicks,
    maxLimitations: rank.maxLimitations,
    classPrimary: classInfo.primary.toUpperCase(),
    classSaves: classInfo.saves.map(save => save.toUpperCase()).join(", ")
  };
}

function html(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function selected(value, option) {
  return value === option ? "selected" : "";
}

function checked(value) {
  return value ? "checked" : "";
}

function options(items, value = "", blank = "Choose") {
  return `<option value="">${blank}</option>${items.map(item => {
    const optionValue = Array.isArray(item) ? item[0] : item;
    const label = Array.isArray(item) ? item[1] : item;
    return `<option value="${html(optionValue)}" ${selected(value, optionValue)}>${html(label)}</option>`;
  }).join("")}`;
}

function lines(value) {
  return String(value || "").split("\n").map(line => line.trim()).filter(Boolean);
}

function addLine(field, value) {
  if (!value) return;
  const current = lines(sheet[field]);
  if (!current.includes(value)) current.push(value);
  sheet[field] = current.join("\n");
}

function removeLine(field, value) {
  sheet[field] = lines(sheet[field]).filter(line => line !== value).join("\n");
}

function namedRule(name, rules) {
  return rules[name] ? `${name}: ${rules[name]}` : name;
}

function gearLine(name) {
  return gearRules[name] ? `${name}: ${gearRules[name]}` : name;
}

function removableGearCards(field) {
  const items = lines(sheet[field]);
  if (!items.length) return `<p class="empty">No selections yet.</p>`;

  return `<div class="selection-card-grid">${items.map(item => {
    const separator = item.indexOf(": ");
    const name = separator >= 0 ? item.slice(0, separator) : item;
    const description = separator >= 0 ? item.slice(separator + 2) : gearRules[name] || "Custom gear entry.";
    return `
      <article class="selection-card">
        <div>
          <h3>${html(name)}</h3>
          <p>${html(description)}</p>
        </div>
        <button type="button" data-action="remove-line" data-field="${field}" data-value="${html(item)}">Remove</button>
      </article>
    `;
  }).join("")}</div>`;
}

function ratedRule(name, rules) {
  const base = name.replace(/\s+\d+$/, "");
  return rules[base] ? `${name}: ${rules[base]}` : name;
}

function expandedRuleLines(value, rules) {
  return lines(value).map(line => {
    const clean = line.replace(/:.*$/, "").trim();
    const base = baseRuleName(clean);
    return rules[base] ? `${clean}: ${rules[base]}` : line;
  });
}

function rulesList(items) {
  return items.length ? `<ul>${items.map(item => `<li>${html(item)}</li>`).join("")}</ul>` : `<p class="empty">-</p>`;
}

function baseRuleName(name) {
  return String(name || "").replace(/\s+\d+$/, "").replace(/:.*$/, "").trim();
}

function choicePreview(name, rules, emptyText) {
  if (!name) return `<p>${html(emptyText)}</p>`;
  const base = baseRuleName(name);
  return `<p><strong>${html(name)}</strong></p><p>${html(rules[base] || rules[name] || "No rules text has been added for this option yet.")}</p>`;
}

function removableRuleCards(field, rules, locked = []) {
  const lockedSet = new Set(locked);
  const items = lines(sheet[field]);
  if (!items.length) return `<p class="empty">-</p>`;

  return `<div class="selection-card-grid">${items.map(item => {
    const base = baseRuleName(item);
    const isLocked = lockedSet.has(item);
    return `
      <article class="selection-card">
        <div>
          <h3>${html(item)}</h3>
          <p>${html(rules[base] || rules[item] || "No rules text has been added for this option yet.")}</p>
        </div>
        ${isLocked ? `<span class="lock-pill">Origin</span>` : `<button type="button" data-action="remove-line" data-field="${field}" data-value="${html(item)}">Remove</button>`}
      </article>
    `;
  }).join("")}</div>`;
}

function removeOriginLines() {
  const originMerits = Object.values(origins).map(origin => origin.merit);
  const originFlaws = Object.values(origins).map(origin => origin.flaw);
  sheet.merits = lines(sheet.merits).filter(line => !originMerits.includes(line)).join("\n");
  sheet.flaws = lines(sheet.flaws).filter(line => !originFlaws.includes(line)).join("\n");
}

function skillNameToKey(name) {
  const skill = skills.find(([, skillName]) => skillName === name);
  return skill ? skill[0] : "";
}

function selectedOriginSkills() {
  return [sheet.originSkill1, sheet.originSkill2].filter(Boolean);
}

function hasTalent(name) {
  return [sheet.startingTalent, sheet.talents].some(value => lines(value).some(line => line.replace(/:.*$/, "").trim() === name));
}

function additionalSkillPickCount() {
  return 4 + (hasTalent("Skilled") ? 2 : 0);
}

function additionalSkillFields() {
  return Array.from({ length: additionalSkillPickCount() }, (_, index) => `skillPick${index + 1}`);
}

function additionalSkillPicks() {
  return additionalSkillFields().map(field => sheet[field]).filter(Boolean);
}

function migrateAdditionalSkillPicks() {
  if (additionalSkillPicks().length) return;
  const originSet = new Set(selectedOriginSkills());
  const previousTraining = skills
    .filter(([key, name]) => sheet[`skill_${key}_trained`] && !originSet.has(name))
    .map(([, name]) => name)
    .slice(0, additionalSkillPickCount());

  additionalSkillFields().forEach((field, index) => {
    if (previousTraining[index]) sheet[field] = previousTraining[index];
  });
}

function duplicateSpecialtyCredits() {
  const originSet = new Set(selectedOriginSkills());
  const trained = new Set(originSet);
  let credits = 0;

  additionalSkillPicks().forEach(name => {
    if (trained.has(name) || originSet.has(name)) {
      credits += 1;
    } else {
      trained.add(name);
    }
  });

  return credits;
}

function syncSkillTraining() {
  const trained = new Set(selectedOriginSkills());
  additionalSkillPicks().forEach(name => {
    if (!trained.has(name)) trained.add(name);
  });

  skills.forEach(([key, name]) => {
    sheet[`skill_${key}_trained`] = trained.has(name);
  });
}

function skillSelectOptions(currentValue) {
  const allSkills = skills.map(([, name]) => name);
  return options(allSkills, currentValue || "", "Choose Skill");
}

function trainedSkillNames() {
  return skills.filter(([key]) => sheet[`skill_${key}_trained`]).map(([, name]) => name);
}

function specialtyExamplesFor(skillName) {
  return specialtyExamples[skillName] || [];
}

function specialtyCards() {
  const items = lines(sheet.specialties);
  if (!items.length) return `<p class="empty">No Specialties selected.</p>`;
  return `<div class="selection-card-grid">${items.map(item => `
    <article class="selection-card">
      <div>
        <h3>${html(item)}</h3>
        <p>When this narrow focus directly applies, roll with Advantage. If Advantage already applies and the Skill is trained, add Prowess as an additional bonus instead.</p>
      </div>
      <button type="button" data-action="remove-line" data-field="specialties" data-value="${html(item)}">Remove</button>
    </article>
  `).join("")}</div>`;
}

function skillBonus(key, ability, values) {
  const trained = Boolean(sheet[`skill_${key}_trained`]);
  const expert = trained && Boolean(sheet[`skill_${key}_expert`]);
  return abilityMod(ability) + (trained ? values.pro * (expert ? 2 : 1) : 0);
}

function ensureOrigin() {
  if (!origins[sheet.origin]) sheet.origin = "Enhanced";
  const origin = origins[sheet.origin];
  if (!origin.primary.includes(sheet.originPrimaryBonus)) sheet.originPrimaryBonus = origin.primary[0];
  const secondary = origin.secondary[sheet.originPrimaryBonus] || [];
  if (!secondary.includes(sheet.originSecondaryBonus)) sheet.originSecondaryBonus = secondary[0] || "";
  if (!origin.skills.includes(sheet.originSkill1)) sheet.originSkill1 = "";
  if (origin.skillPicks < 2 || !origin.skills.includes(sheet.originSkill2)) sheet.originSkill2 = "";
  if (!origin.traits.includes(sheet.originTrait)) sheet.originTrait = "";
}

function fillOrigin() {
  ensureOrigin();
  const origin = origins[sheet.origin];
  removeOriginLines();
  const traitLine = sheet.originTrait ? `Chosen ${origin.traitLabel}: ${namedRule(sheet.originTrait, originTraitRules)}` : `Choose ${origin.traitLabel}.`;
  const skillLine = origin.skillPicks > 1 ? `Choose ${origin.skillPicks} Origin Skills.` : "Choose 1 Origin Skill.";
  sheet.originTalent = `${origin.talent}\nBuilt-In Merit: ${ratedRule(origin.merit, meritRules)}\nBuilt-In Flaw: ${ratedRule(origin.flaw, flawRules)}\n${traitLine}\n${skillLine}\n${origin.note}`;
  addLine("merits", origin.merit);
  addLine("flaws", origin.flaw);
  [sheet.originSkill1, sheet.originSkill2].filter(Boolean).forEach(skillName => {
    const skill = skills.find(([, name]) => name === skillName);
    if (skill) sheet[`skill_${skill[0]}_trained`] = true;
  });
  migrateAdditionalSkillPicks();
  syncSkillTraining();
}

function fillClassFeatures() {
  const info = classes[sheet.className] || classes.Bruiser;
  const level = Number(sheet.level || 1);
  const features = [];
  const featureLine = (levelLabel, name) => `${levelLabel}: ${name} - ${classFeatureRules[name] || "See class feature text."}`;
  if (level >= 1) features.push(featureLine("Level 1", info.features[0]), featureLine("Level 1", info.features[1]));
  if (level >= 3) features.push(featureLine("Level 3", info.features[2]));
  if (level >= 5) features.push(featureLine("Level 5", info.features[3]));
  if (level >= 7) features.push(featureLine("Level 7", info.features[4]));
  if (level >= 10) features.push(featureLine("Level 10", info.features[5]));
  sheet.classFeatures = features.join("\n");
}

function fillCalling() {
  const triggers = callings[sheet.calling];
  if (!triggers) return;
  sheet.minorTrigger = triggers[0];
  sheet.majorTrigger = triggers[1];
  sheet.definingTrigger = triggers[2];
}

function ensureClassSaves(reset = false) {
  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (reset || sheet[field] === undefined) sheet[field] = classSaves.includes(key);
  });
}

function initialize(reset = false) {
  ensurePowerState();
  normalizeAbilityScores();
  ensureOrigin();
  ensureClassSaves(reset);
  fillOrigin();
  if (reset || !sheet.classFeatures || !sheet.classFeatures.includes(" - ")) fillClassFeatures();
  if (reset || !sheet.minorTrigger) fillCalling();
  save();
}

function input(field, label, type = "text", attrs = "") {
  const value = type === "number" ? Number(sheet[field] || 0) : html(sheet[field] || "");
  return `<label>${label}<input type="${type}" data-field="${field}" value="${value}" ${attrs}></label>`;
}

function textarea(field, label, rows = 4) {
  return `<label>${label}<textarea data-field="${field}" rows="${rows}">${html(sheet[field] || "")}</textarea></label>`;
}

function select(field, label, list, blank = "Choose") {
  return `<label>${label}<select data-field="${field}">${options(list, sheet[field], blank)}</select></label>`;
}

function currentStepIndex() {
  return steps.findIndex(([id]) => id === activeStep);
}

function completion() {
  const tests = [
    Boolean(sheet.heroName),
    Boolean(sheet.origin && sheet.originTrait && sheet.originPrimaryBonus && sheet.originSecondaryBonus),
    Boolean(sheet.className && sheet.calling),
    abilities.every(([key]) => Number(sheet[`${key}Score`] || 0) > 0),
    chosenPowers().length > 0,
    Boolean(sheet.startingTalent || sheet.talents),
    Boolean(sheet.gear || sheet.costume),
    Boolean(sheet.concept || sheet.backstory)
  ];
  return Math.round((tests.filter(Boolean).length / tests.length) * 100);
}

function renderApp() {
  app.innerHTML = `
    <header class="app-topbar">
      <div class="brand">
        <div class="brand-title"><strong>HEROIC 5e</strong><span>Character Generator</span></div>
        <div class="brand-actions">
          <button type="button" class="brand-reference" data-action="open-compendium">Compendium</button>
          <button type="button" class="brand-reference" data-action="open-sheet-preview">Preview Sheet</button>
          <button type="button" class="brand-reference" data-action="open-dice-roller">Dice Roller</button>
          <label class="theme-switcher"><span>Style</span><select id="themeSwitcher" aria-label="Site style">${themes.map(([id, label]) => `<option value="${id}" ${selected(activeTheme, id)}>${label}</option>`).join("")}</select></label>
        </div>
      </div>
      <div class="topbar-tools">
        <button type="button" data-action="new-character">New Character</button>
        <button type="button" data-action="save-character">Save Character</button>
        <button type="button" data-action="open-library">Load Character</button>
        <button type="button" data-action="export-json">Export JSON</button>
        <button type="button" data-action="import-json">Import JSON</button>
        <button type="button" data-action="export-pdf">Export to PDF</button>
        <input id="importFile" type="file" accept="application/json,.json" hidden>
      </div>
    </header>
    <main class="generator-shell">
      <aside class="step-rail">
        <div class="progress-card"><span>Completion</span><strong data-progress-text></strong><div class="progress-track"><i data-progress-bar></i></div></div>
        <nav class="step-list"></nav>
      </aside>
      <section class="builder-panel"></section>
    </main>
    <section class="json-drawer" data-json-drawer hidden>
      <div class="json-panel">
        <header>
          <div>
            <strong>Character JSON</strong>
            <span data-json-filename></span>
          </div>
          <button type="button" data-action="close-json">Close</button>
        </header>
        <textarea data-json-output spellcheck="false"></textarea>
        <div class="json-actions">
          <button type="button" data-action="copy-json">Copy JSON</button>
          <button type="button" data-action="download-json">Download JSON</button>
        </div>
      </div>
    </section>
    <section class="library-drawer" data-library-drawer hidden>
      <div class="library-panel">
        <header>
          <div>
            <strong>Saved Characters</strong>
            <span data-library-count></span>
          </div>
          <button type="button" data-action="close-library">Close</button>
        </header>
        <div class="library-list" data-library-list></div>
      </div>
    </section>
    <section class="compendium-drawer" data-compendium-drawer hidden>
      <div class="compendium-panel">
        <header>
          <div>
            <strong>HEROIC 5e Compendium</strong>
            <span>Core reference built from generator rules data</span>
          </div>
          <button type="button" data-action="close-compendium">Close</button>
        </header>
        <div class="compendium-tabs" data-compendium-tabs></div>
        <div class="compendium-content" data-compendium-content></div>
      </div>
    </section>
    <section class="sheet-preview-drawer" data-sheet-preview-drawer hidden>
      <div class="sheet-preview-panel">
        <header>
          <div>
            <strong>Character Sheet Preview</strong>
            <span>Live sheet view</span>
          </div>
          <div class="sheet-preview-actions">
            <button type="button" data-action="export-pdf">Export to PDF</button>
            <button type="button" data-action="close-sheet-preview">Close</button>
          </div>
        </header>
        <div class="sheet-preview-content" data-sheet-preview-content></div>
      </div>
    </section>
    <section class="dice-drawer" data-dice-drawer hidden>
      <div class="dice-panel">
        <header>
          <div>
            <strong>Dice Roller</strong>
            <span data-dice-character></span>
          </div>
          <button type="button" data-action="close-dice-roller">Close</button>
        </header>
        <div class="dice-toolbar">
          <div class="dice-mode" aria-label="Roll mode">
            <button type="button" data-action="dice-mode" data-mode="normal">Normal</button>
            <button type="button" data-action="dice-mode" data-mode="advantage">Advantage</button>
            <button type="button" data-action="dice-mode" data-mode="disadvantage">Disadvantage</button>
          </div>
          <div class="quick-dice" aria-label="Quick dice">
            ${[4, 6, 8, 10, 12, 20, 100].map(sides => `<button type="button" data-action="roll-dice" data-roll-label="d${sides}" data-roll-dice="1d${sides}" data-roll-modifier="0">d${sides}</button>`).join("")}
          </div>
        </div>
        <div class="dice-workspace">
          <div class="dice-content" data-dice-content></div>
          <aside class="dice-history-panel">
            <div class="dice-history-header"><h2>Roll History</h2><button type="button" data-action="clear-dice-history">Clear</button></div>
            <div class="dice-latest" data-dice-latest></div>
            <div class="dice-history" data-dice-history></div>
          </aside>
        </div>
      </div>
    </section>
  `;
  renderBuilder();
  renderProgress();
}

function renderProgress() {
  const value = completion();
  document.querySelector("[data-progress-text]").textContent = `${value}%`;
  document.querySelector("[data-progress-bar]").style.width = `${value}%`;
  document.querySelector(".step-list").innerHTML = steps.map(([id, label], index) => `
    <button type="button" data-action="step" data-step="${id}" class="${id === activeStep ? "active" : ""}">
      <span>${index + 1}</span><strong>${label}</strong>
    </button>
  `).join("");
}

function renderBuilder() {
  const index = currentStepIndex();
  const [, label] = steps[index] || steps[0];
  const [artTitle, artPrompt] = stepArtwork[activeStep] || [label, "Character artwork"];
  document.querySelector(".builder-panel").innerHTML = `
    <header class="builder-header">
      <div><p>Step ${index + 1} of ${steps.length}</p><h1>${label}</h1></div>
      <div class="builder-nav">
        <button type="button" data-action="back" ${index === 0 ? "disabled" : ""}>Back</button>
        <button type="button" data-action="next" ${index === steps.length - 1 ? "disabled" : ""}>Next</button>
      </div>
    </header>
    <div class="builder-workspace">
      <section class="builder-step-content">${renderStep(activeStep)}</section>
      <aside class="step-art" data-art-step="${activeStep}">
        <div class="step-art-canvas" role="img" aria-label="Artwork placeholder for ${html(artTitle)}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <i></i>
        </div>
        <footer><span>Artwork Placeholder</span><strong>${html(artTitle)}</strong><small>${html(artPrompt)}</small></footer>
      </aside>
    </div>
  `;
  renderProgress();
}

function renderStep(id) {
  if (id === "concept") return renderConcept();
  if (id === "abilities") return renderAbilityScores();
  if (id === "origin") return renderOrigin();
  if (id === "class") return renderClass();
  if (id === "side") return renderSide();
  if (id === "calling") return renderCalling();
  if (id === "hitPoints") return renderHitPoints();
  if (id === "skills") return renderSkills();
  if (id === "meritsFlaws") return renderMeritsFlaws();
  if (id === "powers") return renderPowers();
  if (id === "talent") return renderTalent();
  if (id === "defenses") return renderDefenses();
  if (id === "edge") return renderEdge();
  if (id === "gear") return renderGear();
  if (id === "identity") return renderIdentity();
  return renderConcept();
}

function renderConcept() {
  return `
    <div class="form-grid three">
      ${select("rank", "Campaign Rank", Object.keys(ranks))}
      ${input("level", "Level", "number", 'min="1" max="10"')}
    </div>
    <div class="form-grid two">${textarea("concept", "Concept", 8)}${textarea("backstory", "Backstory", 8)}</div>
  `;
}

function renderAbilityScores() {
  return `
    <div class="ability-builder">
      ${abilities.map(([key, , name]) => `
        <div class="ability-card">
          <div class="ability-card-title"><span>${name}</span></div>
          <div class="ability-card-row">
            <label><small>Score</small><select data-field="${key}Score">${abilityArrayOptions(key)}</select></label>
            <span><small>Total</small>${abilityScore(key)}</span>
            <em><small>Mod</small>${signed(abilityMod(key))}</em>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="rule-card"><h2>${html(sheet.rank)} Array</h2><p>${rankAbilityArray().join(", ")}. ${abilityArrayStatus()}</p></div>
    <div class="rule-card"><h2>Origin Bonuses Included</h2><p>Displayed totals include the selected Origin's +2 and +1 ability bonuses. Choose the Origin in Step 3 to change those bonuses.</p></div>
  `;
}

function renderOrigin() {
  const origin = origins[sheet.origin] || origins.Enhanced;
  const secondary = origin.secondary[sheet.originPrimaryBonus] || origin.secondary[origin.primary[0]] || [];
  const traitText = sheet.originTrait ? originTraitRules[sheet.originTrait] : "Choose a trait to see its rules text here.";
  const builtInRules = [
    `Merit - ${ratedRule(origin.merit, meritRules)}`,
    `Flaw - ${ratedRule(origin.flaw, flawRules)}`
  ];
  return `
    <div class="form-grid three">
      ${select("origin", "Origin", Object.keys(origins))}
      ${select("originPrimaryBonus", "+2 Ability", origin.primary.map(key => [key, key.toUpperCase()]))}
      ${select("originSecondaryBonus", "+1 Ability", secondary.map(key => [key, key.toUpperCase()]))}
      ${select("originTrait", origin.traitLabel, origin.traits)}
      ${select("originSkill1", "Origin Skill 1", origin.skills)}
      ${origin.skillPicks > 1 ? select("originSkill2", "Origin Skill 2", origin.skills) : "<div></div>"}
    </div>
    <div class="rule-card"><h2>${html(origin.talent)}</h2><div class="pill-row"><span>Merit: ${html(origin.merit)}</span><span>Flaw: ${html(origin.flaw)}</span></div><p>${html(origin.note)}</p></div>
    <div class="rule-card"><h2>Built-In Merit & Flaw</h2>${rulesList(builtInRules)}</div>
    <div class="rule-card"><h2>${html(sheet.originTrait || origin.traitLabel)}</h2><p>${html(traitText)}</p></div>
  `;
}

function renderClass() {
  const info = classes[sheet.className] || classes.Bruiser;
  const visibleFeatures = lines(sheet.classFeatures);
  return `
    <div class="form-grid two">
      ${select("className", "Class", Object.keys(classes))}
      ${select("powerAbility", "Power Ability", abilities.map(([key, short, name]) => [key, `${short} - ${name}`]))}
    </div>
    <div class="mechanic-grid">
      <div><span>Primary</span><strong>${info.primary.toUpperCase()}</strong></div>
      <div><span>Hit Die</span><strong>d${info.hitDie}</strong></div>
      <div><span>Saves</span><strong>${info.saves.map(save => save.toUpperCase()).join(", ")}</strong></div>
      <div><span>Recovery</span><strong>${signed(info.recovery)}</strong></div>
    </div>
    <div class="rule-card"><h2>${html(sheet.className || "Class")}</h2><p>${html(classText[sheet.className] || "")}</p></div>
    <div class="rule-card"><h2>Class Feature Rules</h2>${rulesList(visibleFeatures)}</div>
  `;
}

function renderSide() {
  const side = sideRules[sheet.side] || sideRules.Heroic;
  const isVillainous = sheet.side === "Villainous";
  return `
    <div class="side-builder">
      <div class="side-picker">
        ${select("side", "Side", ["Heroic", "Unaligned", "Villainous"])}
        <p>A Side declares the broad direction of the character's actions and shapes how the world reads their reputation. It is not alignment or a moral cage.</p>
      </div>
      <article class="side-detail-card${isVillainous ? " is-restricted" : ""}">
        <header>
          <div><span>Selected Side</span><h2>${html(sheet.side || "Heroic")}</h2></div>
          <strong>${isVillainous ? "GM / NPC Only" : "Player Character"}</strong>
        </header>
        <p>${html(side.summary)}</p>
        <p>${html(side.callings)}</p>
        <p>${html(side.reputation)}</p>
      </article>
    </div>
  `;
}

function renderCalling() {
  const triggers = callings[sheet.calling] || [];
  return `
    <div class="form-grid two">
      ${select("calling", "Calling", Object.keys(callings))}
    </div>
    <div class="form-grid three">
      ${textarea("minorTrigger", "Minor Trigger - 1 Edge", 5)}
      ${textarea("majorTrigger", "Major Trigger - 2 Edge", 5)}
      ${textarea("definingTrigger", "Defining Trigger - 3 Edge", 5)}
    </div>
    <div class="rule-card"><h2>${html(sheet.calling || "Calling")}</h2><p>${html(triggers.join(" "))}</p></div>
  `;
}

function renderHitPoints() {
  const values = calc();
  return `
    <div class="mechanic-grid">
      <div><span>Hit Points</span><strong>${values.hp}</strong></div><div><span>Hit Die</span><strong>${values.hitDie}</strong></div><div><span>Prowess</span><strong>${values.prowess}</strong></div><div><span>Recovery</span><strong>${values.recovery}</strong></div><div><span>CON Total</span><strong>${abilityScore("con")}</strong></div><div><span>CON Mod</span><strong>${signed(abilityMod("con"))}</strong></div>
    </div>
    <label class="wide-check"><input type="checkbox" data-field="toughTalent" ${checked(sheet.toughTalent)}> Tough talent HP bonus</label>
  `;
}

function renderSkills() {
  const values = calc();
  syncSkillTraining();
  const originSkills = selectedOriginSkills();
  const originSet = new Set(originSkills);
  const picks = additionalSkillFields();
  const pickLimit = additionalSkillPickCount();
  const pickedCount = additionalSkillPicks().length;
  const specialtyCreditCount = duplicateSpecialtyCredits();
  const specialtyCount = lines(sheet.specialties).length;
  const specialtySkill = sheet.specialtySkill || trainedSkillNames()[0] || skills[0][1];
  const examples = specialtyExamplesFor(specialtySkill);
  return `
    <div class="rule-card">
      <h2>Skills & Specialties Rules</h2>
      <p>Origin Skills are trained automatically. Choose ${pickLimit} additional Skills from the full list${hasTalent("Skilled") ? " including 2 bonus picks from Skilled" : ""}. If an additional pick repeats a Skill already trained by Origin, record a narrow Specialty for that Skill instead.</p>
      <p>Training adds Prowess. Expertise adds double Prowess instead of single Prowess. A Specialty grants Advantage when its narrow focus directly applies; if Advantage already applies, add Prowess as an additional bonus.</p>
    </div>
    <div class="form-grid two">
      <section class="rule-card">
        <h2>Origin Skills</h2>
        ${originSkills.length ? rulesList(originSkills.map(name => `${name} - trained from Origin`)) : `<p class="empty">Choose Origin Skills in Step 3.</p>`}
      </section>
      <section class="rule-card">
        <h2>Additional Skills</h2>
        <p>${pickedCount} of ${pickLimit} selected. Duplicate trained picks create Specialty opportunities.</p>
        <div class="skill-picker-grid">
          ${picks.map((field, index) => `<label>Additional Skill ${index + 1}<select data-field="${field}">${skillSelectOptions(sheet[field])}</select></label>`).join("")}
        </div>
      </section>
    </div>
    <div class="form-grid two">
      <section>
        <div class="rule-card skill-legend">
          <h2>Skill Total Key</h2>
          <p><strong>Source</strong> shows whether the Skill is Untrained, trained by Origin, or trained by one of the additional picks.</p>
          <p><strong>Right checkbox</strong> marks Expertise. Expertise is only available on trained Skills and uses double Prowess.</p>
          <p><strong>Specialties</strong> are recorded as focused cards, such as Technology (Power Armor). They grant Advantage when the focus directly applies.</p>
        </div>
        <h2>Skill Totals</h2><div class="check-grid skill-total-grid">
        ${skills.map(([key, name, ability]) => {
          const trained = Boolean(sheet[`skill_${key}_trained`]);
          const expert = trained && Boolean(sheet[`skill_${key}_expert`]);
          const source = originSet.has(name) ? "Origin" : additionalSkillPicks().includes(name) ? "Additional" : "Untrained";
          const total = skillBonus(key, ability, values);
          return `<label class="check-row skill-row ${trained ? "trained" : ""}"><span class="skill-source">${html(source)}</span><span>${name} <small>${ability.toUpperCase()}</small></span><strong>${signed(total)}</strong><input type="checkbox" title="Expertise" data-field="skill_${key}_expert" ${checked(expert)} ${trained ? "" : "disabled"}></label>`;
        }).join("")}
      </div></section>
      <section class="choice-preview-panel">
        <div class="rule-card">
          <h2>Specialty Builder</h2>
          <p>${specialtyCreditCount} Specialty ${specialtyCreditCount === 1 ? "opportunity" : "opportunities"} from repeated Skill picks. ${specialtyCount} recorded.</p>
          <label>Skill<select data-field="specialtySkill">${options(skills.map(([, name]) => name), specialtySkill, "Choose Skill")}</select></label>
          <label>Focused Specialty<input type="text" data-field="specialtyFocus" value="${html(sheet.specialtyFocus || "")}" placeholder="${html(examples[0] || "Focused expertise")}"></label>
          <button type="button" data-action="add-specialty">Add Specialty</button>
        </div>
        <div class="rule-card">
          <h2>${html(specialtySkill)} Examples</h2>
          ${rulesList(examples)}
        </div>
        <div class="rule-card">
          <h2>Selected Specialties</h2>
          ${specialtyCards()}
        </div>
        ${textarea("proficiencies", "Languages", 6)}
      </section>
    </div>
  `;
}

function renderMeritsFlaws() {
  const origin = origins[sheet.origin] || origins.Enhanced;
  return `
    <div class="form-grid two">
      <section class="choice-preview-panel">
        <label>Merit Picker<select data-field="meritPreview">${options(merits, sheet.meritPreview || "", "Choose Merit")}</select></label>
        <div class="rule-card"><h2>Merit Preview</h2>${choicePreview(sheet.meritPreview, meritRules, "Choose a Merit to preview its rules text.")}</div>
        <button type="button" data-action="add-preview" data-source="meritPreview" data-field="merits">Add Merit</button>
      </section>
      <section class="choice-preview-panel">
        <label>Flaw Picker<select data-field="flawPreview">${options(flaws, sheet.flawPreview || "", "Choose Flaw")}</select></label>
        <div class="rule-card"><h2>Flaw Preview</h2>${choicePreview(sheet.flawPreview, flawRules, "Choose a Flaw to preview its rules text.")}</div>
        <button type="button" data-action="add-preview" data-source="flawPreview" data-field="flaws">Add Flaw</button>
      </section>
    </div>
    <div class="form-grid two">
      <div class="rule-card"><h2>Selected Merits</h2>${removableRuleCards("merits", meritRules, [origin.merit])}</div>
      <div class="rule-card"><h2>Selected Flaws</h2>${removableRuleCards("flaws", flawRules, [origin.flaw])}</div>
    </div>
  `;
}

function powerSetSelectOptions(field) {
  const selectedSets = new Set(selectedPowerSetNames());
  const current = sheet[field] || "";
  return `<option value="">Choose Power Set</option>${powerSets.map(name => `<option value="${html(name)}" ${selected(current, name)} ${selectedSets.has(name) && current !== name ? "disabled" : ""}>${html(name)}</option>`).join("")}`;
}

function multilineHtml(value) {
  return html(value || "").replaceAll("\n", "<br>");
}

function powerChoiceCard(choice) {
  const selectedIds = selectedPowerChoiceIds();
  const isSelected = selectedIds.has(choice.choiceId);
  const available = isSelected || powerChoiceAvailable(choice);
  const costLabel = choice.group === "limitation" ? "+1 Pick" : choice.group === "enhancement" ? "2 for 1 Pick" : `${choice.creationCost} Pick${choice.creationCost === 1 ? "" : "s"}`;
  return `
    <article class="power-choice-card ${isSelected ? "selected" : ""} ${available ? "" : "unavailable"}">
      <header>
        <div><h4>${html(choice.name)}</h4><div class="power-tags"><span>Tier ${choice.tier || 1}</span><span>${html(choice.type)}</span><span>${html(choice.action || "No Action")}</span><span>${costLabel}</span></div></div>
        <button type="button" data-action="toggle-power-choice" data-power-choice="${html(choice.choiceId)}" ${available ? "" : "disabled"}>${isSelected ? "Remove" : "Add"}</button>
      </header>
      ${choice.prerequisite ? `<small><strong>Prerequisite:</strong> ${html(choice.prerequisite)}</small>` : ""}
      <p>${multilineHtml(choice.text)}</p>
    </article>
  `;
}

function powerChoiceSection(title, choices, open = false) {
  return `
    <details class="power-choice-section" ${open ? "open" : ""}>
      <summary><span>${html(title)}</span><strong>${choices.filter(choice => selectedPowerChoiceIds().has(choice.choiceId)).length}/${choices.length}</strong></summary>
      <div class="power-choice-list">${choices.map(powerChoiceCard).join("")}</div>
    </details>
  `;
}

function renderPowerSetBuilder(powerSet) {
  const ability = powerSetAbility(powerSet);
  const selectedCount = selectedPowerChoices().filter(choice => choice.setId === powerSet.id).length;
  const slotIndex = Array.from({ length: 12 }, (_, index) => index + 1).find(index => sheet[`powerSet${index}`] === powerSet.name);
  const fixedAbility = powerSet.abilityOptions.length === 1;
  const abilityControl = fixedAbility
    ? `<div class="power-fixed-ability"><span>Governing Ability</span><strong>${ability.toUpperCase()}</strong></div>`
    : `<label>Governing Ability<select data-power-set-ability="${powerSet.id}">${options(powerSet.abilityOptions.map(key => [key, abilities.find(([abilityKey]) => abilityKey === key)?.[2] || key.toUpperCase()]), ability, "Choose")}</select></label>`;
  const coreChoices = powerSet.coreTrack.map(item => ({ ...item, setId: powerSet.id, setName: powerSet.name, group: "core", choiceId: powerChoiceId(powerSet.id, "core", item.id) }));
  const branchChoices = powerSet.powers.map(item => ({ ...item, setId: powerSet.id, setName: powerSet.name, group: "power", choiceId: powerChoiceId(powerSet.id, "power", item.id) }));
  const utilityChoices = powerSet.utilities.map(item => ({ ...item, setId: powerSet.id, setName: powerSet.name, group: "utility", choiceId: powerChoiceId(powerSet.id, "utility", item.id) }));
  const enhancementChoices = powerSet.enhancements.map((item, index) => ({ ...item, id: item.id || `enhancement-${index + 1}`, setId: powerSet.id, setName: powerSet.name, group: "enhancement", tier: 1, type: "Enhancement", action: "Passive", creationCost: .5, choiceId: powerChoiceId(powerSet.id, "enhancement", item.id || `enhancement-${index + 1}`) }));
  const limitationChoices = powerSet.limitations.map((item, index) => ({ ...item, id: item.id || `limitation-${index + 1}`, setId: powerSet.id, setName: powerSet.name, group: "limitation", tier: 1, type: "Limitation", action: "Varies", creationCost: 0, choiceId: powerChoiceId(powerSet.id, "limitation", item.id || `limitation-${index + 1}`) }));
  return `
    <details class="power-set-builder" ${selectedCount ? "open" : ""}>
      <summary><div><span>Power Set</span><strong>${html(powerSet.name)}</strong></div><em>${selectedCount} selected</em></summary>
      <div class="power-set-overview">
        <div><p>${html(powerSet.description)}</p><div class="pill-row"><span>${html(powerSet.associatedConditions || "No associated conditions")}</span><span>${html(powerSet.defaultDamage || "See individual powers")}</span></div></div>
        ${abilityControl}
      </div>
      ${powerChoiceSection("Core Track", coreChoices, true)}
      ${powerChoiceSection("Combat & Branch Powers", branchChoices)}
      ${powerChoiceSection("Set-Specific Utilities", utilityChoices)}
      ${powerChoiceSection("Enhancements", enhancementChoices)}
      ${powerChoiceSection("Limitations", limitationChoices)}
      ${slotIndex ? textarea(`powerSet${slotIndex}Notes`, `${powerSet.name} Notes`, 4) : ""}
    </details>
  `;
}

function renderPowers() {
  const values = calc();
  ensurePowerState();
  const budget = powerBudget();
  const slots = powerSetSlotCount();
  const selectedSets = selectedPowerSets();
  const utilityGroups = [1, 2, 3].map(tier => generalUtilityPowers.filter(item => item.tier === tier).map(item => ({ ...item, setId: "general-utility", setName: "General Utility", group: "general", choiceId: powerChoiceId("general-utility", "general", item.id) })));
  const genericLimitations = powerFramework.genericLimitations.map(item => ({ ...item, id: powerRuleId(item.name), setId: "general-limitation", setName: "General Limitation", group: "limitation", tier: 1, type: "Limitation", action: "Varies", creationCost: 0, choiceId: powerChoiceId("general-limitation", "limitation", powerRuleId(item.name)) }));
  const genericEnhancements = powerFramework.genericEnhancements.map(item => ({ ...item, id: powerRuleId(item.name), setId: "general-enhancement", setName: "General Enhancement", group: "enhancement", tier: 1, type: "Enhancement", action: "Passive", creationCost: .5, choiceId: powerChoiceId("general-enhancement", "enhancement", powerRuleId(item.name)) }));
  return `
    <div class="mechanic-grid power-budget-grid">
      <div><span>Power Die</span><strong>${values.powerDie}</strong></div><div><span>Power EV</span><strong>${values.powerEV}</strong></div><div><span>Starting Picks</span><strong>${budget.startingSpent}/${budget.startingAvailable}</strong></div><div><span>Advancement</span><strong>${budget.advancementUsed}/${budget.advancementAvailable}</strong></div><div><span>Power Sets</span><strong>${budget.setCount}/${values.maxPowerSets}</strong></div><div><span>Tier Access</span><strong>${powerTierLimit()}</strong></div>
    </div>
    <section class="power-audit ${budget.warnings.length ? "warning" : "complete"}">
      <div><strong>${budget.warnings.length ? "Power Build Needs Attention" : "Power Build Complete"}</strong><span>${powerFramework.minimumBaseline}</span></div>
      <div class="pill-row"><span>Core ${budget.cores}</span><span>At-Will ${budget.atWills}/2</span><span>Encounter ${budget.encounters}/1</span><span>Limitations ${budget.limitations}/${values.maxLimitations}</span><span>Enhancements ${budget.enhancements}</span></div>
      ${budget.warnings.length ? `<ul>${budget.warnings.map(warning => `<li>${html(warning)}</li>`).join("")}</ul>` : ""}
    </section>
    <div class="form-grid two">${input("bonusPicks", "Other Bonus Power Picks", "number", 'min="0"')}<div class="rule-card"><h2>Power Pick Rules</h2><p>${html(powerFramework.advancement)}</p><p>${html(powerFramework.limitations)}</p></div></div>
    <h2 class="power-builder-heading">Choose Power Sets</h2>
    <div class="form-grid three power-set-selectors">${Array.from({ length: slots }, (_, index) => {
      const number = index + 1;
      return `<label>Power Set ${number}${number > values.maxPowerSets ? " (Over Cap)" : ""}<select data-field="powerSet${number}">${powerSetSelectOptions(`powerSet${number}`)}</select></label>`;
    }).join("")}</div>
    <div class="power-set-stack">${selectedSets.length ? selectedSets.map(renderPowerSetBuilder).join("") : `<div class="rule-card"><h2>Select a Power Set</h2><p>Choose a set above to browse its Core Track, At-Wills, Encounter and Daily Powers, Utilities, Enhancements, and Limitations.</p></div>`}</div>
    <details class="power-set-builder general-utilities">
      <summary><div><span>Standalone Powers</span><strong>General Utility Powers</strong></div><em>${selectedPowerChoices().filter(choice => choice.group === "general").length} selected</em></summary>
      <div class="power-set-overview"><p>General Utilities are minor standalone capabilities. They cost 1 Power Pick each and do not replace the stronger version inside a dedicated Power Set.</p></div>
      ${utilityGroups.map((choices, index) => powerChoiceSection(`Tier ${index + 1} General Utilities`, choices, index === 0)).join("")}
    </details>
    <details class="power-set-builder general-utilities">
      <summary><div><span>Power Restrictions</span><strong>General Limitations</strong></div><em>${selectedPowerChoices().filter(choice => choice.setId === "general-limitation").length} selected</em></summary>
      <div class="power-set-overview"><p>Each Limitation grants 1 additional starting Power Pick and must directly constrain a Power or Power Set in play. Campaign Rank limits how many may be taken.</p></div>
      ${powerChoiceSection("General Limitations", genericLimitations, true)}
    </details>
    <details class="power-set-builder general-utilities">
      <summary><div><span>Power Refinements</span><strong>General Enhancements</strong></div><em>${selectedPowerChoices().filter(choice => choice.setId === "general-enhancement").length} selected</em></summary>
      <div class="power-set-overview"><p>One Power Pick buys two Enhancements. Apply each selected Enhancement to a specific owned power and record that target in the character's Power notes.</p></div>
      ${powerChoiceSection("General Enhancements", genericEnhancements, true)}
    </details>
  `;
}

function renderTalent() {
  return `
    <div class="form-grid two">
      <section class="choice-preview-panel">
        <label>Talent Picker<select data-field="talentPreview">${options(talents, sheet.talentPreview || "", "Choose Talent")}</select></label>
        <div class="rule-card"><h2>Talent Preview</h2>${choicePreview(sheet.talentPreview, talentRules, "Choose a Talent to preview its rules text.")}</div>
        <button type="button" data-action="add-preview" data-source="talentPreview" data-field="talents">Add Talent</button>
      </section>
      <div class="rule-card"><h2>Selected Talents</h2>${removableRuleCards("talents", talentRules)}</div>
    </div>
    <div class="form-grid two">${textarea("startingTalent", "Starting Talent", 7)}${textarea("talents", "Additional Talents", 7)}</div>
  `;
}

function renderDefenses() {
  const values = calc();
  const compactStat = (label, value) => `<div><span>${label}</span><strong>${value}</strong></div>`;
  return `
    <div class="compact-stat-grid defense-stat-grid">
      ${compactStat("Parry / Block", values.parry)}
      ${compactStat("Dodge", values.dodge)}
      ${compactStat("Willpower", values.willpower)}
      ${compactStat("Social", values.socialDefense)}
      ${compactStat("Initiative", values.initiative)}
      ${compactStat("Class EV", values.classEV)}
    </div>
    <div class="defense-layout">
      <section><h2>Saves</h2><div class="check-grid compact">
        ${abilities.map(([key, short]) => {
          const total = abilityMod(key) + (sheet[`save_${key}_trained`] ? values.pro : 0);
          return `<label class="check-row"><input type="checkbox" data-field="save_${key}_trained" ${checked(sheet[`save_${key}_trained`])}><span>${short} Save</span><strong>${signed(total)}</strong></label>`;
        }).join("")}
      </div></section>
      <section><h2>Attacks</h2><div class="compact-stat-grid attack-stat-grid">
        ${compactStat("Melee", values.meleeAttack)}
        ${compactStat("Ranged", values.rangedAttack)}
        ${compactStat("Mental", values.mentalAttack)}
        ${compactStat("Social", values.socialAttack)}
      </div></section>
    </div>
  `;
}

function renderEdge() {
  const values = calc();
  return `
    <div class="mechanic-grid">
      <div><span>Starting Edge</span><strong>${values.edgeStart}</strong></div><div><span>Edge Cap</span><strong>${values.edgeCap}</strong></div><div><span>Prowess</span><strong>${values.prowess}</strong></div>
    </div>
    <div class="form-grid three">${textarea("minorTrigger", "Minor - 1 Edge", 5)}${textarea("majorTrigger", "Major - 2 Edge", 5)}${textarea("definingTrigger", "Defining - 3 Edge", 5)}</div>
  `;
}

function renderGear() {
  return `
    <div class="form-grid four">
      <label>Standard Gear<select data-add-field="gear" data-add-rules="gear">${options(gearCatalog.standard, "", "Choose")}</select></label>
      <label>Weapons & Properties<select data-add-field="gear" data-add-rules="gear">${options(gearCatalog.weapon, "", "Choose")}</select></label>
      <label>Armor<select data-add-field="gear" data-add-rules="gear">${options(gearCatalog.armor, "", "Choose")}</select></label>
      <label>Gadgets<select data-add-field="gear" data-add-rules="gear">${options(gearCatalog.gadget, "", "Choose")}</select></label>
      <label>Vehicles<select data-add-field="gear" data-add-rules="gear">${options(gearCatalog.vehicle, "", "Choose")}</select></label>
      <label>Vehicle Features<select data-add-field="enhancements" data-add-rules="gear">${options(gearCatalog.feature, "", "Choose")}</select></label>
      <label>Invention & Repair<select data-add-field="enhancements" data-add-rules="gear">${options(gearCatalog.invention, "", "Choose")}</select></label>
    </div>
    <div class="rule-card"><h2>Gear Rules</h2><p>Standard equipment covers reasonable carried items. Weapons use broad categories instead of exact weapon stat blocks. Armor adds a flat bonus after an Active Defense roll. Gadgets create specific fictional effects rather than replacing Power Sets. Vehicles use Speed Rating, Armor Rating, hits, and special features.</p></div>
    <div class="gear-selection-grid">
      <section><h2>Selected Gear</h2>${removableGearCards("gear")}</section>
      <section><h2>Selected Features & Upgrades</h2>${removableGearCards("enhancements")}</section>
    </div>
    <div class="form-grid two">${textarea("gear", "Gear List (Editable)", 7)}${textarea("enhancements", "Features & Upgrades (Editable)", 6)}${textarea("limitationsText", "Limitations", 6)}${textarea("sessionNotes", "Session Notes", 7)}</div>
  `;
}

function renderIdentity() {
  const values = calc();
  return `
    <div class="form-grid three">${input("heroName", "Hero Name")}${input("realName", "Real Name")}${select("identity", "Identity", ["Secret", "Public", "Not Public"])}</div>
    <div class="builder-split">
      <div>${textarea("costume", "Costume / Symbol", 7)}<div class="rule-card"><h2>${html(sheet.heroName || "Unnamed Hero")}</h2><p>${html([sheet.origin, sheet.className, sheet.calling].filter(Boolean).join(" - "))}</p><div class="pill-row"><span>Level ${values.level}</span><span>${html(sheet.rank)}</span><span>${values.hp} HP</span><span>${values.powerPicks} Picks</span></div></div></div>
      <div class="portrait-uploader"><div class="portrait-preview" style="${sheet.portrait ? `background-image:url(${sheet.portrait})` : ""}">${sheet.portrait ? "" : "Portrait"}</div><label>Portrait Image<input id="portraitInput" type="file" accept="image/*"></label></div>
    </div>
  `;
}

function chosenPowers() {
  const purchased = selectedPowerChoices();
  if (purchased.length) {
    return purchased.map(choice => ({
      name: choice.name,
      notes: `${choice.setName} - ${choice.type}${choice.tier ? ` - Tier ${choice.tier}` : ""}\n${choice.text}`,
      group: choice.group,
    }));
  }
  return Array.from({ length: 12 }, (_, index) => {
    const number = index + 1;
    return { name: sheet[`powerSet${number}`], notes: sheet[`powerSet${number}Notes`] };
  }).filter(power => power.name || power.notes);
}

function sheetLine(label, value) {
  return `<div><span>${label}</span><strong>${html(value || "-")}</strong></div>`;
}

function bigStat(label, value) {
  return `<div class="big-stat"><span>${label}</span><strong>${html(value)}</strong></div>`;
}

function listBlock(items) {
  const clean = items.flatMap(item => lines(item)).filter(Boolean);
  if (!clean.length) return `<p class="empty">-</p>`;
  return `<ul>${clean.map(item => `<li>${html(item)}</li>`).join("")}</ul>`;
}

function renderSheet() {
  const target = document.querySelector("#sheet");
  if (target) target.innerHTML = renderSheetMarkup();
}

function renderSheetMarkup() {
  const values = calc();
  const origin = origins[sheet.origin] || origins.Enhanced;
  const powers = chosenPowers();
  return `
    <article class="sheet-page">
      <header class="sheet-title"><p>HEROIC 5e</p><h1>${html(sheet.heroName || "Character Sheet")}</h1></header>
      <section class="sheet-hero-grid"><div class="identity-block">${sheetLine("Real Name", sheet.realName)}${sheetLine("Identity", sheet.identity)}${sheetLine("Origin", sheet.origin)}${sheetLine("Class", sheet.className)}${sheetLine("Calling", sheet.calling)}${sheetLine("Rank / Level", `${sheet.rank || ""} / ${values.level}`)}</div><div class="portrait-box" style="${sheet.portrait ? `background-image:url(${sheet.portrait})` : ""}">${sheet.portrait ? "" : "Portrait"}</div><div class="core-block">${bigStat("HP", values.hp)}${bigStat("PRO", values.prowess)}${bigStat("Hit Die", values.hitDie)}${bigStat("Power Die", values.powerDie)}${bigStat("Edge", `${values.edgeStart}/${values.edgeCap}`)}${bigStat("Recovery", values.recovery)}</div></section>
      <section class="sheet-section"><h2>Abilities</h2><div class="sheet-abilities">${abilities.map(([key, short]) => `<div><span>${short}</span><strong>${abilityScore(key)}</strong><em>${signed(abilityMod(key))}</em></div>`).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section"><h2>Combat</h2><div class="sheet-stats">${bigStat("Initiative", values.initiative)}${bigStat("Class EV", values.classEV)}${bigStat("Power EV", values.powerEV)}${bigStat("Primary", values.classPrimary)}${bigStat("Melee", values.meleeAttack)}${bigStat("Ranged", values.rangedAttack)}${bigStat("Mental", values.mentalAttack)}${bigStat("Social", values.socialAttack)}</div></div><div class="sheet-section"><h2>Defenses</h2><div class="sheet-stats">${bigStat("Parry / Block", values.parry)}${bigStat("Dodge", values.dodge)}${bigStat("Willpower", values.willpower)}${bigStat("Social", values.socialDefense)}</div></div></section>
      <section class="sheet-section"><h2>Skills</h2><div class="sheet-skills">${skills.map(([key, name, ability]) => {
        const total = skillBonus(key, ability, values);
        return `<div><span>${name}</span><em>${ability.toUpperCase()}</em><strong>${signed(total)}</strong></div>`;
      }).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Origin</h2>${listBlock([origin.talent, `Merit: ${origin.merit}`, `Flaw: ${origin.flaw}`, sheet.originTrait ? `${origin.traitLabel}: ${namedRule(sheet.originTrait, originTraitRules)}` : "", sheet.originSkill1, sheet.originSkill2, origin.note])}</div><div class="sheet-section text-list"><h2>Concept</h2>${listBlock([sheet.concept, sheet.specialties, sheet.proficiencies])}</div></section>
    </article>
    <article class="sheet-page">
      <header class="sheet-title"><p>Features and Powers</p><h1>${html(sheet.heroName || "Character")}</h1></header>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Class Features</h2>${listBlock(lines(sheet.classFeatures))}</div><div class="sheet-section text-list"><h2>Edge Triggers</h2>${listBlock([`Minor: ${sheet.minorTrigger || ""}`, `Major: ${sheet.majorTrigger || ""}`, `Defining: ${sheet.definingTrigger || ""}`])}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Talents and Merits</h2>${listBlock([...expandedRuleLines([sheet.startingTalent, sheet.talents].join("\n"), talentRules), ...expandedRuleLines(sheet.merits, meritRules)])}</div><div class="sheet-section text-list"><h2>Flaws</h2>${listBlock(expandedRuleLines(sheet.flaws, flawRules))}</div></section>
      <section class="sheet-section"><h2>Powers - ${html(selectedPowerSetNames().join(", ") || "Power Sets")}</h2>${selectedPowerSets().length ? `<div class="sheet-stats power-effect-values">${selectedPowerSets().map(powerSet => bigStat(`${powerSet.name} EV`, 10 + abilityMod(powerSetAbility(powerSet)) + values.pro)).join("")}</div>` : ""}<div class="sheet-powers">${(powers.length ? powers : [{ name: "Power Set", notes: "Choose at least one Power Set." }]).map(power => `<div><strong>${html(power.name || "Power Set")}</strong><p>${multilineHtml(power.notes || "")}</p></div>`).join("")}</div></section>
      <section class="sheet-row"><div class="sheet-section text-list"><h2>Gear</h2>${listBlock([...lines(sheet.gear), ...lines(sheet.enhancements), ...lines(sheet.limitationsText), sheet.costume])}</div><div class="sheet-section text-list"><h2>Backstory / Notes</h2>${listBlock([sheet.backstory, sheet.sessionNotes])}</div></section>
    </article>
  `;
}

function updateField(field, value) {
  if (field.endsWith("Score")) {
    const previous = Number(sheet[field]);
    value = Number(value);
    const duplicateAbility = abilities.find(([key]) => `${key}Score` !== field && Number(sheet[`${key}Score`]) === value);
    if (duplicateAbility && rankAbilityArray().includes(previous)) sheet[`${duplicateAbility[0]}Score`] = previous;
  }
  sheet[field] = value;
  if (field === "rank") normalizeAbilityScores();
  if (/^powerSet\d+$/.test(field)) {
    prunePowerPurchases();
    pruneUnmetPowerPrerequisites();
  }
  if (["origin", "originPrimaryBonus", "originSecondaryBonus", "originTrait", "originSkill1", "originSkill2"].includes(field)) fillOrigin();
  if (additionalSkillFields().includes(field)) syncSkillTraining();
  if (field === "className") {
    ensureClassSaves(true);
    fillClassFeatures();
  }
  if (field === "level") fillClassFeatures();
  if (field === "calling") fillCalling();
  save();
}

function fieldValue(el) {
  if (el.type === "checkbox") return el.checked;
  if (el.type === "number") return Number(el.value || 0);
  return el.value;
}

function exportPayload() {
  return {
    type: "HEROIC 5e Character Generator",
    version: 2,
    exportedAt: new Date().toISOString(),
    sheet
  };
}

function exportFilename() {
  const hero = sheet.heroName || sheet.realName || "heroic-5e-character";
  return `${hero.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "heroic-5e-character"}.json`;
}

function exportText() {
  return JSON.stringify(exportPayload(), null, 2);
}

function downloadJson() {
  const blob = new Blob([exportText()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = exportFilename();
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showExportJson() {
  const drawer = document.querySelector("[data-json-drawer]");
  const output = document.querySelector("[data-json-output]");
  document.querySelector("[data-json-filename]").textContent = exportFilename();
  output.value = exportText();
  drawer.hidden = false;
  output.focus();
  output.select();
  downloadJson();
}

function exportJson() {
  showExportJson();
}

async function copyJson() {
  const output = document.querySelector("[data-json-output]");
  output.focus();
  output.select();
  try {
    await navigator.clipboard.writeText(output.value);
  } catch {
    document.execCommand("copy");
  }
}

function saveCharacterToLibrary() {
  const currentName = characterName();
  const name = prompt("Save character as:", currentName);
  if (!name) return;

  const record = makeCharacterRecord(name);
  saveRecordLocal(record);
  openLibrary();
}

function makeCharacterRecord(name) {
  const library = loadLibrary();
  const existing = library.find(character => character.name.toLowerCase() === name.toLowerCase());
  const now = new Date().toISOString();
  return {
    id: existing ? existing.id : characterId(name),
    name,
    heroName: sheet.heroName || "",
    realName: sheet.realName || "",
    origin: sheet.origin || "",
    className: sheet.className || "",
    calling: sheet.calling || "",
    rank: sheet.rank || "",
    level: Number(sheet.level || 1),
    portrait: sheet.portrait || "",
    updatedAt: now,
    createdAt: existing ? existing.createdAt : now,
    sheet: cloneSheet(sheet)
  };
}

function saveRecordLocal(record) {
  const library = loadLibrary();
  const existing = library.find(character => character.id === record.id);
  const nextLibrary = existing
    ? library.map(character => character.id === existing.id ? record : character)
    : [record, ...library];
  saveLibrary(nextLibrary);
}

async function loadSamples() {
  try {
    const response = await fetch("/sample-characters/manifest.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load samples (${response.status})`);
    const payload = await response.json();
    sampleCharacters = Array.isArray(payload.samples) ? payload.samples : [];
    sampleStatus = "";
  } catch (error) {
    sampleCharacters = [];
    sampleStatus = error.message;
  }
}

async function openLibrary() {
  const drawer = document.querySelector("[data-library-drawer]");
  drawer.hidden = false;
  await loadSamples();
  renderLibrary();
}

function closeLibrary() {
  document.querySelector("[data-library-drawer]").hidden = true;
}

function compendiumSections() {
  return [
    ["glossary", "Glossary"],
    ["overview", "Overview"],
    ["origins", "Origins"],
    ["classes", "Classes"],
    ["skills", "Skills"],
    ["callings", "Callings"],
    ["talents", "Talents"],
    ["merits", "Merits"],
    ["flaws", "Flaws"],
    ["powers", "Powers"],
    ["gear", "Gear"]
  ];
}

function openCompendium() {
  document.querySelector("[data-compendium-drawer]").hidden = false;
  renderCompendium();
}

function closeCompendium() {
  document.querySelector("[data-compendium-drawer]").hidden = true;
}

function openSheetPreview() {
  const drawer = document.querySelector("[data-sheet-preview-drawer]");
  const content = document.querySelector("[data-sheet-preview-content]");
  content.innerHTML = `<div id="sheet">${renderSheetMarkup()}</div>`;
  drawer.hidden = false;
}

function closeSheetPreview() {
  document.querySelector("[data-sheet-preview-drawer]").hidden = true;
}

function rollActionCard(label, dice, modifier = 0, detail = "") {
  return `
    <button type="button" class="dice-action-card" data-action="roll-dice" data-roll-label="${html(label)}" data-roll-dice="${html(dice)}" data-roll-modifier="${Number(modifier || 0)}">
      <span>${html(label)}</span>
      ${detail ? `<small>${html(detail)}</small>` : ""}
      <strong>${html(dice)}${Number(modifier || 0) ? ` ${signed(modifier)}` : ""}</strong>
    </button>
  `;
}

function diceActionGroup(title, actions) {
  return `<section class="dice-group"><h2>${html(title)}</h2><div class="dice-action-grid">${actions.join("")}</div></section>`;
}

function diceRollerMarkup() {
  const values = calc();
  const abilityRolls = abilities.map(([key, , name]) => rollActionCard(name, "1d20", abilityMod(key), `Ability ${abilityScore(key)}`));
  const skillRolls = skills.map(([key, name, ability]) => {
    const trained = Boolean(sheet[`skill_${key}_trained`]);
    const expert = trained && Boolean(sheet[`skill_${key}_expert`]);
    const detail = expert ? `${ability.toUpperCase()} - Expertise` : trained ? `${ability.toUpperCase()} - Trained` : `${ability.toUpperCase()} - Untrained`;
    return rollActionCard(name, "1d20", skillBonus(key, ability, values), detail);
  });
  const saveRolls = abilities.map(([key, short, name]) => {
    const trained = Boolean(sheet[`save_${key}_trained`]);
    const modifier = abilityMod(key) + (trained ? values.pro : 0);
    return rollActionCard(`${name} Save`, "1d20", modifier, trained ? `${short} - Trained` : short);
  });
  const defenseRolls = [
    ["Initiative", abilityMod("dex") + abilityMod("per")],
    ["Parry / Block", abilityMod("fig") + abilityMod("per") + values.pro],
    ["Dodge", abilityMod("dex") + abilityMod("per") + values.pro],
    ["Willpower", abilityMod("wis") + abilityMod("per") + values.pro],
    ["Social Defense", abilityMod("cha") + abilityMod("int") + values.pro]
  ].map(([label, modifier]) => rollActionCard(label, "1d20", modifier, "Active Defense"));
  const attackRolls = [
    ["Melee Attack", abilityMod("fig") + values.pro, "FIG + Prowess"],
    ["Ranged Attack", abilityMod("dex") + values.pro, "DEX + Prowess"],
    ["Mental Attack", abilityMod("int") + values.pro, "INT + Prowess"],
    ["Social Attack", abilityMod("cha") + values.pro, "CHA + Prowess"]
  ].map(([label, modifier, detail]) => rollActionCard(label, "1d20", modifier, detail));
  const purchasedPowerAttacks = selectedPowerChoices().filter(choice => /Attack:\s*1d20/i.test(choice.text || "")).map(choice => {
    const explicit = (choice.text.match(/Attack:\s*1d20\s*\+\s*(STR|DEX|CON|FIG|INT|WIS|CHA|PER)/i) || [])[1]?.toLowerCase();
    const powerSet = powerSetRules.find(item => item.id === choice.setId);
    const ability = explicit || powerSetAbility(powerSet);
    return rollActionCard(choice.name, "1d20", abilityMod(ability) + values.pro, `${choice.setName} - ${ability.toUpperCase()} + Prowess`);
  });
  const powerNames = selectedPowerSetNames();
  const powerRolls = [1, 2, 3, 4].map(count => rollActionCard(`${count} Power ${count === 1 ? "Die" : "Dice"}`, `${count}${values.powerDie}`, 0, powerNames.join(", ") || "Power damage / effect"));
  const recoveryRolls = [
    rollActionCard("Hit Die", `1${values.hitDie}`, 0, "Recovery roll"),
    rollActionCard("Power Die", `1${values.powerDie}`, 0, "Single power die")
  ];

  return [
    diceActionGroup("Abilities", abilityRolls),
    diceActionGroup("Skills", skillRolls),
    diceActionGroup("Saves", saveRolls),
    diceActionGroup("Active Defenses", defenseRolls),
    diceActionGroup("Attacks", [...attackRolls, ...purchasedPowerAttacks]),
    diceActionGroup("Powers & Damage", powerRolls),
    diceActionGroup("Recovery & Utility", recoveryRolls)
  ].join("");
}

function renderDiceHistory() {
  const latest = document.querySelector("[data-dice-latest]");
  const history = document.querySelector("[data-dice-history]");
  if (!latest || !history) return;
  const [current] = diceRollHistory;
  latest.innerHTML = current ? `
    <span>${html(current.label)}</span>
    <strong>${current.total}</strong>
    <small>${html(current.summary)}</small>
  ` : `<p>Choose a roll to begin.</p>`;
  history.innerHTML = diceRollHistory.length ? diceRollHistory.map((roll, index) => `
    <article class="dice-history-item ${index === 0 ? "latest" : ""}">
      <div><strong>${html(roll.label)}</strong><small>${html(roll.summary)}</small></div>
      <span>${roll.total}</span>
    </article>
  `).join("") : `<p class="empty">No rolls yet.</p>`;
}

function renderDiceRoller() {
  const content = document.querySelector("[data-dice-content]");
  if (!content) return;
  document.querySelector("[data-dice-character]").textContent = `${characterName()} - Level ${calc().level} ${sheet.rank}`;
  content.innerHTML = diceRollerMarkup();
  document.querySelectorAll("[data-action='dice-mode']").forEach(button => button.classList.toggle("active", button.dataset.mode === diceRollMode));
  renderDiceHistory();
}

function openDiceRoller() {
  document.querySelector("[data-dice-drawer]").hidden = false;
  renderDiceRoller();
}

function closeDiceRoller() {
  document.querySelector("[data-dice-drawer]").hidden = true;
}

function randomDie(sides) {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return (values[0] % sides) + 1;
}

function performDiceRoll(label, notation, modifier = 0) {
  const match = /^(\d+)d(\d+)$/i.exec(String(notation || ""));
  if (!match) return;
  const count = Math.max(1, Math.min(20, Number(match[1])));
  const sides = Math.max(2, Math.min(1000, Number(match[2])));
  const numericModifier = Number(modifier || 0);
  let dice = Array.from({ length: count }, () => randomDie(sides));
  let kept = dice;
  let modeLabel = "";

  if (count === 1 && sides === 20 && diceRollMode !== "normal") {
    dice = [dice[0], randomDie(20)];
    kept = [diceRollMode === "advantage" ? Math.max(...dice) : Math.min(...dice)];
    modeLabel = diceRollMode === "advantage" ? "Advantage" : "Disadvantage";
  }

  const subtotal = kept.reduce((total, value) => total + value, 0);
  const total = subtotal + numericModifier;
  const diceText = dice.length > 1 ? `[${dice.join(", ")}]${kept.length === 1 ? ` keep ${kept[0]}` : ""}` : `${dice[0]}`;
  const modifierText = numericModifier ? ` ${signed(numericModifier)}` : "";
  const summary = `${notation}: ${diceText}${modifierText}${modeLabel ? ` (${modeLabel})` : ""}`;
  diceRollHistory.unshift({ label, total, summary });
  diceRollHistory = diceRollHistory.slice(0, 30);
  renderDiceHistory();
}

function clearSheetPrintMode() {
  document.body.classList.remove("sheet-print-mode");
}

function compendiumCard(title, body, meta = "") {
  return `
    <article class="compendium-card">
      ${meta ? `<span>${html(meta)}</span>` : ""}
      <h3>${html(title)}</h3>
      <p>${html(body || "Reference text has not been added yet.")}</p>
    </article>
  `;
}

function compendiumList(items) {
  return `<div class="compendium-grid">${items.join("")}</div>`;
}

function compendiumPowerEntry(item, meta = "") {
  return `
    <article class="compendium-card power-reference-card">
      <span>${html(meta || `${item.type}${item.tier ? ` - Tier ${item.tier}` : ""}`)}</span>
      <h3>${html(item.name)}</h3>
      ${item.prerequisite ? `<small><strong>Prerequisite:</strong> ${html(item.prerequisite)}</small>` : ""}
      <p>${multilineHtml(item.text)}</p>
    </article>
  `;
}

function compendiumPowerSet(powerSet) {
  return `
    <details class="compendium-power-set">
      <summary><div><span>Power Set</span><strong>${html(powerSet.name)}</strong></div><em>${powerSet.coreTrack.length + powerSet.powers.length + powerSet.utilities.length} powers</em></summary>
      <div class="compendium-power-overview">
        <p>${html(powerSet.description)}</p>
        <div class="pill-row"><span>${html(powerSet.governingAbility)}</span><span>${html(powerSet.associatedConditions)}</span><span>${html(powerSet.defaultDamage)}</span></div>
      </div>
      <h3>Core Track</h3>${compendiumList(powerSet.coreTrack.map(item => compendiumPowerEntry(item, `${item.type} - Tier ${item.tier}`)))}
      <h3>Combat & Branch Powers</h3>${compendiumList(powerSet.powers.map(item => compendiumPowerEntry(item)))}
      <h3>Set-Specific Utilities</h3>${compendiumList(powerSet.utilities.map(item => compendiumPowerEntry(item)))}
      <h3>Enhancements</h3>${compendiumList(powerSet.enhancements.map(item => compendiumCard(item.name, item.text, "Enhancement")))}
      <h3>Limitations</h3>${compendiumList(powerSet.limitations.map(item => compendiumCard(item.name, item.text, "Limitation")))}
    </details>
  `;
}

function renderPowerCompendium() {
  return `
    <div class="compendium-hero"><h2>Powers</h2><p>${html(powerFramework.minimumBaseline)} ${html(powerFramework.advancement)}</p></div>
    <div class="compendium-grid power-framework-grid">
      ${Object.entries(powerFramework.creationCosts).map(([name, cost]) => compendiumCard(name, `${cost} Power Pick${cost === 1 ? "" : "s"} at character creation.`, "Power Economy")).join("")}
      ${compendiumCard("Power Dice", powerFramework.powerDice, "Core Rule")}
      ${compendiumCard("Limitations", powerFramework.limitations, "Core Rule")}
      ${compendiumCard("Core Tracks", powerFramework.coreTracks, "Core Rule")}
      ${compendiumCard("Attack Roll vs. Effect Value", powerFramework.attackAndEffect, "Core Rule")}
      ${compendiumCard("Tier Access", powerFramework.tierAccess, "Campaign Rank")}
      ${compendiumCard("Enhancements", powerFramework.enhancementRules, "Power Economy")}
      ${compendiumCard("Power Stunts", powerFramework.powerStunts, "Edge")}
      ${compendiumCard("Power Stunt: Emulation", powerFramework.emulation, "Edge & Burnout")}
      ${compendiumCard("Powers and Gear", powerFramework.powersAndGear, "Core Rule")}
    </div>
    <h2 class="compendium-section-title">Power Types</h2>
    <div class="compendium-grid">${powerFramework.powerTypes.map(item => compendiumCard(item.name, item.text, "Power Type")).join("")}</div>
    <h2 class="compendium-section-title">General Limitations</h2>
    <div class="compendium-grid">${powerFramework.genericLimitations.map(item => compendiumCard(item.name, item.text, "Limitation")).join("")}</div>
    <h2 class="compendium-section-title">General Enhancements</h2>
    <div class="compendium-grid">${powerFramework.genericEnhancements.map(item => compendiumCard(item.name, item.text, "Enhancement")).join("")}</div>
    <h2 class="compendium-section-title">Creating New Power Sets</h2>
    <div class="compendium-grid">${compendiumCard("Design Process", powerFramework.newPowerSetDesign, "GM Reference")}${compendiumCard(powerFramework.examplePowerSet.name, `${powerFramework.examplePowerSet.governingAbility}: ${powerFramework.examplePowerSet.text}`, "Example Power Set")}</div>
    <h2 class="compendium-section-title">37 Power Sets</h2>
    <div class="compendium-power-stack">${powerSetRules.map(compendiumPowerSet).join("")}</div>
    <h2 class="compendium-section-title">36 General Utility Powers</h2>
    <div class="compendium-grid">${generalUtilityPowers.map(item => compendiumPowerEntry(item)).join("")}</div>
  `;
}

function renderCompendium() {
  document.querySelector("[data-compendium-tabs]").innerHTML = compendiumSections().map(([id, label]) => `
    <button type="button" data-action="compendium-section" data-section="${id}" class="${id === activeCompendiumSection ? "active" : ""}">${label}</button>
  `).join("");
  document.querySelector("[data-compendium-content]").innerHTML = renderCompendiumSection(activeCompendiumSection);
}

function renderCompendiumSection(id) {
  if (id === "glossary") return compendiumList(glossaryTerms.map(([term, definition]) => compendiumCard(term, definition, "Glossary")));
  if (id === "origins") return compendiumList(Object.entries(origins).map(([name, origin]) => compendiumCard(name, [
    `Primary bonuses: ${origin.primary.map(key => key.toUpperCase()).join(", ")}.`,
    `Skills: ${origin.skills.join(", ")}. Choose ${origin.skillPicks}.`,
    `Talent: ${origin.talent}. Merit: ${origin.merit}. Flaw: ${origin.flaw}.`,
    `${origin.traitLabel}: ${origin.traits.join(", ")}.`,
    origin.note
  ].join(" "), "Origin")));
  if (id === "classes") return compendiumList(Object.entries(classes).map(([name, info]) => compendiumCard(name, [
    classText[name],
    `Primary: ${info.primary.toUpperCase()}. Hit Die: d${info.hitDie}. Saves: ${info.saves.map(key => key.toUpperCase()).join(", ")}. Recovery: ${signed(info.recovery)}.`,
    `Features: ${info.features.map(feature => `${feature} (${classFeatureRules[feature] || "See rules"})`).join(" ")}`
  ].join(" "), "Class")));
  if (id === "skills") return compendiumList(skills.map(([key, name, ability]) => compendiumCard(name, `Ability: ${ability.toUpperCase()}. Example Specialties: ${(specialtyExamples[name] || []).join(", ")}. Trained heroes add Prowess; Expertise uses double Prowess. Specialties grant Advantage when the narrow focus applies.`, "Skill")));
  if (id === "callings") return compendiumList(Object.entries(callings).map(([name, triggers]) => compendiumCard(name, [`Minor: ${triggers[0]}`, `Major: ${triggers[1]}`, `Defining: ${triggers[2]}`].join(" "), "Calling")));
  if (id === "talents") return compendiumList(talents.map(name => compendiumCard(name, talentRules[name], "Talent")));
  if (id === "merits") return compendiumList(merits.map(name => compendiumCard(name, meritRules[name], "Merit")));
  if (id === "flaws") return compendiumList(flaws.map(name => compendiumCard(name, flawRules[name], "Flaw")));
  if (id === "powers") return renderPowerCompendium();
  if (id === "gear") return compendiumList(Object.entries(gearCatalog).flatMap(([type, items]) => items.map(name => compendiumCard(name, gearRules[name] || `Gear category: ${type}.`, type))));
  return `
    <div class="compendium-hero">
      <h2>HEROIC 5e Core Reference</h2>
      <p>This Compendium presents the generator's current rules data as a table reference styled like the character builder. It is not a full replacement for the book yet; it grows as more full rule text is entered.</p>
    </div>
    <div class="compendium-grid">
      ${compendiumCard("Character Creation", "Use the fifteen creation steps plus the final Character Sheet review to build a complete HEROIC 5e character.", "Core")}
      ${compendiumCard("Sides", `${sideRules.Heroic.summary} ${sideRules.Unaligned.summary}`, "Narrative")}
      ${compendiumCard("Ability Arrays", Object.entries(abilityArrays).map(([rank, array]) => `${rank}: ${array.join(", ")}`).join(" "), "Mechanics")}
      ${compendiumCard("Skills and Specialties", "Origin Skills are automatic. Characters choose additional trained Skills, and repeated trained picks can become narrow Specialties.", "Mechanics")}
    </div>
  `;
}

function renderLibrary() {
  const library = loadLibrary().sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  const list = document.querySelector("[data-library-list]");
  document.querySelector("[data-library-count]").textContent = `${library.length} saved, ${sampleCharacters.length} samples`;

  if (!library.length && !sampleCharacters.length) {
    list.innerHTML = `<div class="library-empty">No saved characters yet.</div>`;
    return;
  }

  list.innerHTML = `
    ${sampleCharacters.length ? `<h3>Sample Characters</h3>${sampleCharacters.map(character => libraryItem(character, "sample")).join("")}` : ""}
    ${sampleStatus ? `<div class="library-empty">${html(sampleStatus)}</div>` : ""}
    ${library.length ? `<h3>Your Saved Characters</h3>${library.map(character => libraryItem(character, "local")).join("")}` : ""}
  `;
}

function libraryItem(character, source = "local") {
  const portrait = character.portrait || character.sheet?.portrait || "";
  const name = character.name || character.heroName || character.sheet?.heroName || "Unnamed Hero";
  return `
    <article class="library-item">
      <div class="library-portrait" style="${portrait ? `background-image:url(${portrait})` : ""}">${portrait ? "" : initialsFor(name)}</div>
      <div>
        <strong>${html(name)}</strong>
        <span>${html([character.origin, character.className, character.calling].filter(Boolean).join(" - ") || "No build details")}</span>
        <small>Level ${html(character.level || 1)} ${html(character.rank || "")} - Saved ${html(new Date(character.updatedAt).toLocaleString())}</small>
      </div>
      <div class="library-item-actions">
        <button type="button" data-action="${source === "sample" ? "load-sample" : "load-character"}" data-character-id="${html(character.id)}">Load</button>
        ${source === "sample" ? "" : `<button type="button" data-action="delete-character" data-character-id="${html(character.id)}">Delete</button>`}
      </div>
    </article>
  `;
}

function loadCharacter(id) {
  const library = loadLibrary();
  const record = library.find(character => character.id === id);
  if (!record) return;
  sheet = { ...defaults, ...record.sheet };
  diceRollHistory = [];
  initialize(true);
  closeLibrary();
  renderBuilder();
  renderSheet();
  renderProgress();
}

async function loadSampleCharacter(id) {
  const sample = sampleCharacters.find(character => character.id === id);
  if (!sample) return;

  try {
    const response = await fetch(`/sample-characters/${encodeURIComponent(sample.file)}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load sample (${response.status})`);
    const payload = await response.json();
    sheet = { ...defaults, ...(payload.sheet || payload) };
    diceRollHistory = [];
    initialize(true);
    closeLibrary();
    renderBuilder();
    renderSheet();
    renderProgress();
  } catch (error) {
    sampleStatus = error.message;
    renderLibrary();
  }
}

function deleteCharacter(id) {
  const library = loadLibrary();
  const record = library.find(character => character.id === id);
  if (!record || !confirm(`Delete saved character "${record.name}"?`)) return;
  saveLibrary(library.filter(character => character.id !== id));
  renderLibrary();
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = payload.sheet && typeof payload.sheet === "object" ? payload.sheet : payload;
      sheet = { ...defaults, ...imported };
      diceRollHistory = [];
      initialize(true);
      renderBuilder();
      renderSheet();
      renderProgress();
    } catch {
      alert("That JSON file could not be imported.");
    }
  };
  reader.readAsText(file);
}

function newCharacter() {
  if (!confirm("Start a new HEROIC 5e character? Current unsaved changes will be cleared.")) return;
  sheet = { ...defaults };
  diceRollHistory = [];
  activeStep = "concept";
  initialize(true);
  renderBuilder();
  renderSheet();
  renderProgress();
}

function exportPdf() {
  openSheetPreview();
  document.body.classList.add("sheet-print-mode");
  setTimeout(() => window.print(), 0);
}

window.addEventListener("afterprint", clearSheetPrintMode);

app.addEventListener("input", event => {
  const el = event.target.closest("[data-field]");
  if (!el) return;
  updateField(el.dataset.field, fieldValue(el));
  renderSheet();
  renderProgress();
});

app.addEventListener("change", event => {
  if (event.target.id === "themeSwitcher") {
    applyTheme(event.target.value);
    return;
  }

  const field = event.target.closest("[data-field]");
  const add = event.target.closest("[data-add-field]");
  const setAbility = event.target.closest("[data-power-set-ability]");

  if (field) {
    updateField(field.dataset.field, fieldValue(field));
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (add && add.value) {
    addLine(add.dataset.addField, add.dataset.addRules === "gear" ? gearLine(add.value) : add.value);
    add.value = "";
    save();
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (setAbility) {
    ensurePowerState();
    sheet.powerSetAbilities[setAbility.dataset.powerSetAbility] = setAbility.value;
    if (selectedPowerSets()[0]?.id === setAbility.dataset.powerSetAbility) sheet.powerAbility = setAbility.value;
    save();
    renderBuilder();
    renderSheet();
  }

  if (event.target.id === "portraitInput") {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      sheet.portrait = reader.result;
      save();
      renderBuilder();
      renderSheet();
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  if (event.target.id === "importFile") {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  }
});

app.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const index = currentStepIndex();
  if (action === "step") activeStep = button.dataset.step;
  if (action === "next") activeStep = steps[Math.min(steps.length - 1, index + 1)][0];
  if (action === "back") activeStep = steps[Math.max(0, index - 1)][0];
  if (["step", "next", "back"].includes(action)) renderBuilder();
  if (action === "export-json") exportJson();
  if (action === "download-json") downloadJson();
  if (action === "copy-json") copyJson();
  if (action === "close-json") document.querySelector("[data-json-drawer]").hidden = true;
  if (action === "new-character") newCharacter();
  if (action === "open-compendium") openCompendium();
  if (action === "close-compendium") closeCompendium();
  if (action === "open-sheet-preview") openSheetPreview();
  if (action === "close-sheet-preview") closeSheetPreview();
  if (action === "open-dice-roller") openDiceRoller();
  if (action === "close-dice-roller") closeDiceRoller();
  if (action === "dice-mode") {
    diceRollMode = button.dataset.mode;
    renderDiceRoller();
  }
  if (action === "roll-dice") performDiceRoll(button.dataset.rollLabel, button.dataset.rollDice, button.dataset.rollModifier);
  if (action === "clear-dice-history") {
    diceRollHistory = [];
    renderDiceHistory();
  }
  if (action === "compendium-section") {
    activeCompendiumSection = button.dataset.section;
    renderCompendium();
  }
  if (action === "save-character") saveCharacterToLibrary();
  if (action === "open-library") openLibrary();
  if (action === "close-library") closeLibrary();
  if (action === "load-character") loadCharacter(button.dataset.characterId);
  if (action === "load-sample") loadSampleCharacter(button.dataset.characterId);
  if (action === "delete-character") deleteCharacter(button.dataset.characterId);
  if (action === "add-preview") {
    const value = sheet[button.dataset.source];
    if (value) {
      addLine(button.dataset.field, value);
      save();
      renderBuilder();
      renderSheet();
      renderProgress();
    }
  }
  if (action === "add-specialty") {
    const skillName = sheet.specialtySkill || trainedSkillNames()[0] || skills[0][1];
    const focus = String(sheet.specialtyFocus || "").trim();
    if (skillName && focus) {
      addLine("specialties", `${skillName} (${focus})`);
      sheet.specialtyFocus = "";
      save();
      renderBuilder();
      renderSheet();
      renderProgress();
    }
  }
  if (action === "remove-line") {
    removeLine(button.dataset.field, button.dataset.value);
    save();
    renderBuilder();
    renderSheet();
    renderProgress();
  }
  if (action === "toggle-power-choice") {
    togglePowerChoice(button.dataset.powerChoice);
    renderBuilder();
    renderSheet();
    renderProgress();
  }
  if (action === "import-json") document.querySelector("#importFile").click();
  if (action === "export-pdf") exportPdf();
});

initialize();
renderApp();
