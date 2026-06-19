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
  powerSets,
  gearCatalog
} = Function(`${rulesPrefix}; return { abilities, ranks, classes, skills, origins, callings, talents, merits, flaws, powerSets, gearCatalog };`)();

const STORAGE_KEY = "heroic5e_generator_sheet";
const ACCESSIBILITY_KEY = "heroic5e_generator_accessibility";
const LIBRARY_KEY = "heroic5e_generator_library";
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
  ["side", "Choose a Side", "Heroic or unaligned"],
  ["calling", "Choose a Calling", "Calling and Edge triggers"],
  ["hitPoints", "Calculate Hit Points", "HP, Hit Die, Recovery, and Prowess"],
  ["skills", "Skills & Specialties", "Trained skills, expertise, and specialties"],
  ["meritsFlaws", "Merits & Flaws", "Advantages, complications, and origin traits"],
  ["powers", "Powers & Limitations", "Power sets, picks, and limitations"],
  ["talent", "Choose a Talent", "Starting and additional talents"],
  ["defenses", "Active Defenses & Saves", "Defenses, saves, and attacks"],
  ["edge", "Record Edge", "Starting Edge, cap, and triggers"],
  ["gear", "Choose Gear", "Gear, enhancements, costume, and notes"],
  ["identity", "Finalize Identity", "Name, identity, portrait, export, and print"],
  ["characterSheet", "Character Sheet", "Review, print, and export the finished sheet"]
];

const app = document.querySelector("#app");
let activeStep = "concept";
let sheet = load(STORAGE_KEY, defaults);
let accessibility = load(ACCESSIBILITY_KEY, { zoom: "normal", dyslexic: false });
let sampleCharacters = [];
let sampleStatus = "";

function load(key, fallback) {
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(key) || "{}") };
  } catch {
    return { ...fallback };
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
}

function saveAccess() {
  localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(accessibility));
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

function abilityScore(key) {
  return Number(sheet[`${key}Score`] || 10) + originBonus(key);
}

function abilityMod(key) {
  return mod(abilityScore(key));
}

function calc() {
  const level = Math.max(1, Math.min(10, Number(sheet.level || 1)));
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const classInfo = classes[sheet.className] || classes.Bruiser;
  const pro = prowess(level);
  const conMod = abilityMod("con");
  const hp = classInfo.hitDie + abilityScore("con") + ((level - 1) * (hitAverage(classInfo.hitDie) + conMod)) + (sheet.toughTalent ? level * 2 : 0);
  const limitationPicks = Math.min(Number(sheet.limitations || 0), rank.maxLimitations);
  return {
    level,
    pro,
    prowess: signed(pro),
    hp,
    hitDie: `d${classInfo.hitDie}`,
    powerDie: rank.powerDie,
    classEV: 10 + abilityMod(classInfo.primary) + pro,
    powerEV: 10 + abilityMod(sheet.powerAbility || "str") + pro,
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

function additionalSkillFields() {
  return ["skillPick1", "skillPick2", "skillPick3", "skillPick4"];
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
    .slice(0, 4);

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
      <div class="brand"><strong>HEROIC 5e</strong><span>Character Generator</span></div>
      <div class="topbar-tools">
        <label>Zoom<select data-access="zoom">
          <option value="normal" ${selected(accessibility.zoom, "normal")}>100%</option>
          <option value="large" ${selected(accessibility.zoom, "large")}>115%</option>
          <option value="xlarge" ${selected(accessibility.zoom, "xlarge")}>130%</option>
        </select></label>
        <label class="check-control"><input type="checkbox" data-access="dyslexic" ${checked(accessibility.dyslexic)}> Dyslexic Font</label>
        <button type="button" data-action="save-character">Save Character</button>
        <button type="button" data-action="open-library">Load Character</button>
        <button type="button" data-action="export-json">Export JSON</button>
        <button type="button" data-action="import-json">Import JSON</button>
        <button type="button" data-action="print">Print Sheet</button>
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
  `;
  applyAccess();
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
  document.querySelector(".builder-panel").innerHTML = `
    <header class="builder-header">
      <div><p>Step ${index + 1} of ${steps.length}</p><h1>${label}</h1></div>
      <div class="builder-nav">
        <button type="button" data-action="back" ${index === 0 ? "disabled" : ""}>Back</button>
        <button type="button" data-action="next" ${index === steps.length - 1 ? "disabled" : ""}>Next</button>
      </div>
    </header>
    ${renderStep(activeStep)}
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
  return renderCharacterSheet();
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
  return `
    <div class="form-grid two">
      ${select("side", "Side", ["Heroic", "Unaligned"])}
    </div>
    <div class="rule-card"><h2>${html(sheet.side || "Choose a Side")}</h2><p>Record whether this character is currently Heroic or Unaligned. This appears on the final character sheet identity block.</p></div>
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
  const pickedCount = additionalSkillPicks().length;
  const specialtyCreditCount = duplicateSpecialtyCredits();
  const specialtyCount = lines(sheet.specialties).length;
  const specialtySkill = sheet.specialtySkill || trainedSkillNames()[0] || skills[0][1];
  const examples = specialtyExamplesFor(specialtySkill);
  return `
    <div class="rule-card">
      <h2>Skills & Specialties Rules</h2>
      <p>Origin Skills are trained automatically. Choose 4 additional Skills from the full list. If an additional pick repeats a Skill already trained by Origin, record a narrow Specialty for that Skill instead.</p>
      <p>Training adds Prowess. Expertise adds double Prowess instead of single Prowess. A Specialty grants Advantage when its narrow focus directly applies; if Advantage already applies, add Prowess as an additional bonus.</p>
    </div>
    <div class="form-grid two">
      <section class="rule-card">
        <h2>Origin Skills</h2>
        ${originSkills.length ? rulesList(originSkills.map(name => `${name} - trained from Origin`)) : `<p class="empty">Choose Origin Skills in Step 3.</p>`}
      </section>
      <section class="rule-card">
        <h2>Additional Skills</h2>
        <p>${pickedCount} of 4 selected. Duplicate trained picks create Specialty opportunities.</p>
        <div class="skill-picker-grid">
          ${picks.map((field, index) => `<label>Additional Skill ${index + 1}<select data-field="${field}">${skillSelectOptions(sheet[field])}</select></label>`).join("")}
        </div>
      </section>
    </div>
    <div class="form-grid two">
      <section><h2>Skill Totals</h2><div class="check-grid skill-total-grid">
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
    <div class="form-grid two">${textarea("originTalent", "Origin Mechanics", 8)}${textarea("merits", "Merits", 8)}${textarea("flaws", "Flaws", 8)}</div>
  `;
}

function renderPowers() {
  const values = calc();
  return `
    <div class="mechanic-grid">
      <div><span>Power Die</span><strong>${values.powerDie}</strong></div><div><span>Power EV</span><strong>${values.powerEV}</strong></div><div><span>Picks</span><strong>${values.powerPicks}</strong></div><div><span>Max Sets</span><strong>${values.maxPowerSets}</strong></div><div><span>Max Tier</span><strong>${values.maxTier}</strong></div><div><span>Limit Cap</span><strong>${values.maxLimitations}</strong></div>
    </div>
    <div class="form-grid three">${input("limitations", "Limitations Used", "number", `min="0" max="${values.maxLimitations}"`)}${input("bonusPicks", "Bonus Picks", "number", 'min="0"')}${select("powerAbility", "Power Ability", abilities.map(([key, short, name]) => [key, `${short} - ${name}`]))}</div>
    <div class="power-builder">${Array.from({ length: values.powerSlots }, (_, index) => {
      const number = index + 1;
      return `<div class="power-card">${select(`powerSet${number}`, `Power Set ${number}`, powerSets, "Choose Power Set")}${textarea(`powerSet${number}Notes`, "At-Wills / Tier Notes", 4)}</div>`;
    }).join("")}</div>
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
      <label>Weapon Gear<select data-add-field="gear">${options(gearCatalog.weapon, "", "Choose")}</select></label>
      <label>Armor<select data-add-field="gear">${options(gearCatalog.armor, "", "Choose")}</select></label>
      <label>Gadget<select data-add-field="gear">${options(gearCatalog.gadget, "", "Choose")}</select></label>
      <label>Vehicle<select data-add-field="gear">${options(gearCatalog.vehicle, "", "Choose")}</select></label>
    </div>
    <div class="form-grid two">${textarea("gear", "Gear", 7)}${textarea("enhancements", "Enhancements", 6)}${textarea("limitationsText", "Limitations", 6)}${textarea("sessionNotes", "Session Notes", 7)}</div>
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
    <div class="export-card"><button type="button" data-action="export-json">Export JSON</button><button type="button" data-action="import-json">Import JSON</button><button type="button" data-action="print">Print / Save PDF</button></div>
  `;
}

function chosenPowers() {
  const values = calc();
  return Array.from({ length: values.powerSlots }, (_, index) => {
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

function renderCharacterSheet() {
  return `
    <div class="sheet-actions"><strong>Character Sheet</strong><button type="button" data-action="clear">Clear</button></div>
    <div id="sheet">${renderSheetMarkup()}</div>
  `;
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
      <section class="sheet-section"><h2>Powers</h2><div class="sheet-powers">${(powers.length ? powers : [{ name: "Power Set", notes: "Choose at least one Power Set." }]).map(power => `<div><strong>${html(power.name || "Power Set")}</strong><p>${html(power.notes || "")}</p></div>`).join("")}</div></section>
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

function applyAccess() {
  document.body.dataset.zoom = accessibility.zoom || "normal";
  document.body.dataset.dyslexic = accessibility.dyslexic ? "true" : "false";
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

app.addEventListener("input", event => {
  const el = event.target.closest("[data-field]");
  if (!el) return;
  updateField(el.dataset.field, fieldValue(el));
  renderSheet();
  renderProgress();
});

app.addEventListener("change", event => {
  const field = event.target.closest("[data-field]");
  const add = event.target.closest("[data-add-field]");
  const access = event.target.closest("[data-access]");

  if (field) {
    updateField(field.dataset.field, fieldValue(field));
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (add && add.value) {
    addLine(add.dataset.addField, add.value);
    add.value = "";
    save();
    renderBuilder();
    renderSheet();
    renderProgress();
  }

  if (access) {
    accessibility[access.dataset.access] = access.type === "checkbox" ? access.checked : access.value;
    saveAccess();
    applyAccess();
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
  if (action === "import-json") document.querySelector("#importFile").click();
  if (action === "print") {
    activeStep = "characterSheet";
    renderBuilder();
    setTimeout(() => window.print(), 0);
  }
  if (action === "clear" && confirm("Clear this HEROIC 5e character?")) {
    sheet = { ...defaults };
    initialize(true);
    renderBuilder();
    renderSheet();
    renderProgress();
  }
});

initialize();
renderApp();
