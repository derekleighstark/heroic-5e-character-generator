const abilities = [
  ["str", "STR", "Strength"],
  ["dex", "DEX", "Dexterity"],
  ["con", "CON", "Constitution"],
  ["fig", "FIG", "Fighting"],
  ["int", "INT", "Intelligence"],
  ["wis", "WIS", "Wisdom"],
  ["cha", "CHA", "Charisma"],
  ["per", "PER", "Perception"]
];

const ranks = {
  "Street Level": { powerDie: "d8", hpMultiplier: 1, maxPowerSets: 3, maxTier: "Tier 1", startingPicks: 8, powerSlots: 8, maxLimitations: 2, edgeStart: 3 },
  "Mid-Level": { powerDie: "d10", hpMultiplier: 2, maxPowerSets: 5, maxTier: "Tier 2", startingPicks: 10, powerSlots: 10, maxLimitations: 4, edgeStart: 2 },
  "World Class": { powerDie: "d12", hpMultiplier: 3, maxPowerSets: 7, maxTier: "Tier 3", startingPicks: 12, powerSlots: 12, maxLimitations: 6, edgeStart: 1 }
};

const classes = {
  Beacon: { primary: "cha", hitDie: 8, saves: ["cha", "wis"], recovery: 1, features: ["Commanding Presence", "Taunt", "Rally the Human Spirit", "Rally Cry", "Break Them", "Living Legend"] },
  Bruiser: { primary: "str", hitDie: 10, saves: ["str", "con"], recovery: 1, features: ["Heavy Hitter", "Heavy Impact", "Breakthrough", "Devastating Force", "Unstoppable", "Irresistible Force"] },
  Guardian: { primary: "con", hitDie: 12, saves: ["con", "str"], recovery: 2, features: ["Stand Between", "Iron Presence", "Breakthrough Resistance", "Guardian's Mark", "Immovable", "Last One Standing"] },
  Sentinel: { primary: "per", hitDie: 8, saves: ["per", "dex"], recovery: 1, features: ["Threat Assessment", "Reactive Awareness", "Threat Lock", "Decisive Strike", "Read the Room", "Overwatch"] },
  Strategist: { primary: "int", hitDie: 8, saves: ["int", "per"], recovery: 0, features: ["Tactical Analysis", "Tactical Exploitation", "Contingency Planning", "Calculated Pressure", "Expose the Pattern", "Master Plan"] },
  Striker: { primary: "fig", hitDie: 8, saves: ["fig", "dex"], recovery: 0, features: ["Precision Strike", "Exploit Opening", "Combat Read", "Vital Strike", "Killer Instinct", "Perfect Form"] },
  Vanguard: { primary: "dex", hitDie: 8, saves: ["dex", "per"], recovery: 0, features: ["Fluid Motion", "Evasive Strike", "Momentum Shift", "Blitz", "Untouchable", "Apex Predator"] },
  Warden: { primary: "wis", hitDie: 8, saves: ["wis", "con"], recovery: 2, features: ["Inner Fortress", "Force of Will", "Unshakable Ground", "Eye of the Storm", "Turning the Tide", "Transcendent Presence"] }
};

const skills = [
  ["acrobatics", "Acrobatics", "dex"],
  ["athletics", "Athletics", "str"],
  ["culture", "Culture", "int"],
  ["finesse", "Finesse", "dex"],
  ["influence", "Influence", "cha"],
  ["insight", "Insight", "wis"],
  ["intimidation", "Intimidation", "cha"],
  ["investigation", "Investigation", "int"],
  ["medicine", "Medicine", "int"],
  ["notice", "Notice", "per"],
  ["occult", "Occult", "wis"],
  ["science", "Science", "int"],
  ["stealth", "Stealth", "dex"],
  ["streetwise", "Streetwise", "cha"],
  ["survival", "Survival", "wis"],
  ["technology", "Technology", "int"],
  ["vehicles", "Vehicles", "dex"]
];

const origins = {
  "Alien": {
    primary: ["con", "int", "per", "cha"],
    secondary: { con: ["str", "wis", "per"], int: ["per", "wis", "cha"], per: ["int", "wis", "dex"], cha: ["wis", "con", "int"] },
    skills: ["Culture", "Insight", "Notice", "Science", "Survival", "Technology"],
    skillPicks: 1,
    merit: "Strange Biology 1",
    flaw: "Alien Outsider 1",
    talent: "Not From Here",
    traitLabel: "Alien Biological Trait",
    traits: ["Environmental Adaptation", "Unusual Diet", "Natural Camouflage"],
    note: "Once per encounter, reroll a failed Insight, Science, Notice, or Survival check using an alien perspective."
  },
  "Artificial": {
    primary: ["int", "con", "str"],
    secondary: { int: ["con", "per", "str"], con: ["int", "str", "per"], str: ["int", "con", "fig"] },
    skills: ["Investigation", "Science", "Stealth", "Technology", "Vehicles"],
    skillPicks: 1,
    merit: "Synthetic Construction 1",
    flaw: "Constructed Nature 1",
    talent: "Synthetic Edge",
    traitLabel: "Mechanical Advantage",
    traits: ["Integrated Systems", "Modular Repair", "Environmental Hardening"],
    note: "Once per encounter before an attack roll, skill check, or save, gain Advantage through rapid internal calculation."
  },
  "Cosmic": {
    primary: ["cha", "con", "wis"],
    secondary: { cha: ["con", "wis", "per"], con: ["cha", "str", "wis"], wis: ["cha", "per", "int"] },
    skills: ["Science", "Occult", "Notice", "Survival", "Influence"],
    skillPicks: 1,
    merit: "Cosmic Signature 1",
    flaw: "Too Bright to Hide 1",
    talent: "Stellar Endurance",
    traitLabel: "Stellar Endurance Feature",
    traits: ["Vacuum-Touched", "Energy-Born", "Universal Perspective"],
    note: "Choose one Skill and one Specialty tied to the Cosmic concept."
  },
  "Enhanced": {
    primary: ["str", "con", "dex"],
    secondary: { str: ["con", "dex", "per"], con: ["str", "dex", "wis"], dex: ["str", "con", "per"] },
    skills: ["Athletics", "Intimidation", "Science", "Stealth", "Survival"],
    skillPicks: 1,
    merit: "Altered Physiology 1",
    flaw: "Marked by Change 1",
    talent: "Adaptive Biology",
    traitLabel: "Altered Physiology Trait",
    traits: ["Heightened Reflexes", "Enhanced Recovery", "Unusual Senses"],
    note: "Choose one Power Set. Once per encounter when using an At-Will from it, choose Controlled Surge, Instinctive Control, or Biological Push."
  },
  "Gearbound": {
    primary: ["int", "dex", "fig"],
    secondary: { int: ["dex", "per", "fig"], dex: ["int", "per", "fig"], fig: ["int", "dex", "per"] },
    skills: ["Acrobatics", "Investigation", "Science", "Technology", "Vehicles"],
    skillPicks: 1,
    merit: "Gear Access 1",
    flaw: "Gear Dependency 1",
    talent: "Field Systems",
    traitLabel: "Field Systems Mode",
    traits: ["Keep It Running", "Emergency Bypass", "Reroute Power", "Controlled Failure"],
    note: "Once per encounter when gear would fail, make Technology, Science, or Vehicles and choose a Field Systems result."
  },
  "Legacy": {
    primary: ["cha", "fig", "wis"],
    secondary: { cha: ["int", "wis", "fig"], fig: ["cha", "dex", "per"], wis: ["cha", "int", "per"] },
    skills: ["Athletics", "Influence", "Insight", "Investigation", "Streetwise"],
    skillPicks: 1,
    merit: "The Name 1",
    flaw: "The Expectation 1",
    talent: "Inherited Instinct",
    traitLabel: "Legacy Benefit",
    traits: ["Inherited Network", "Famous Symbol", "Mentor's Gift"],
    note: "Once per encounter, add Prowess after seeing a save or skill check tied to the Legacy. If already successful, treat it as a Strong Success."
  },
  "Monster": {
    primary: ["str", "con", "per"],
    secondary: { str: ["con", "per", "wis"], con: ["str", "wis", "cha"], per: ["str", "con", "dex"] },
    skills: ["Athletics", "Intimidation", "Notice", "Stealth", "Survival"],
    skillPicks: 1,
    merit: "Inhuman Body 1",
    flaw: "Feared 1",
    talent: "Apex Predator",
    traitLabel: "Monstrous Physical Trait",
    traits: ["Natural Weapons", "Night Creature", "Terrifying Form", "Strange Anatomy"],
    note: "Choose one Skill and one Specialty tied to the monstrous nature."
  },
  "Mystic": {
    primary: ["wis", "cha", "int"],
    secondary: { wis: ["cha", "int", "per"], cha: ["wis", "int", "con"], int: ["wis", "cha", "per"] },
    skills: ["Insight", "Occult", "Notice", "Influence", "Investigation"],
    skillPicks: 1,
    merit: "Mystic Attunement 1",
    flaw: "Supernatural Burden 1",
    talent: "Ward the Soul",
    traitLabel: "Mystic Practice",
    traits: ["Spellcraft", "Spirit Pact", "Divine Favor", "Bloodline", "Relic-Bound", "Curse-Bearer"],
    note: "Once per encounter, add Prowess to your or an ally's save against fear, charm, possession, curse, psychic intrusion, or mystical manipulation."
  },
  "Trained": {
    primary: ["fig", "dex", "int"],
    secondary: { fig: ["dex", "int", "per", "wis"], dex: ["fig", "int", "per", "cha"], int: ["fig", "dex", "per", "wis"] },
    skills: ["Acrobatics", "Athletics", "Investigation", "Notice", "Stealth", "Streetwise", "Technology", "Vehicles"],
    skillPicks: 2,
    merit: "Prepared Foundation 1",
    flaw: "Only Human 1",
    talent: "Trained to Survive",
    traitLabel: "Prepared Foundation Merit",
    traits: ["Base of Operations", "Connected", "Gear Access", "Legal Authority", "Local Support", "Mentor", "Prepared Cache", "Safehouse Network"],
    note: "Once per encounter, reroll a failed skill check using a Skill you are trained in."
  },
  "Transcendent": {
    primary: ["wis", "cha", "con"],
    secondary: { wis: ["cha", "con", "per"], cha: ["wis", "con", "int"], con: ["wis", "cha", "str"] },
    skills: ["Insight", "Occult", "Notice", "Science", "Influence"],
    skillPicks: 1,
    merit: "Beyond Mortal 1",
    flaw: "Losing Humanity 1",
    talent: "Beyond the Moment",
    traitLabel: "Beyond Mortal Benefit",
    traits: ["Ageless", "Strange Perception", "Death-Touched", "Conceptual Presence"],
    note: "Choose one Skill and one Specialty tied to the transformation."
  }
};

const callings = {
  "Adventurer": ["Take a risky direct approach and complications follow.", "Throw yourself into danger without preparation and change the outcome.", "Refusing caution costs something significant."],
  "Advocate": ["Speak up for someone with less power when it creates friction.", "Defy authority or convenience to protect the vulnerable.", "Risk standing, safety, or a mission for the people you represent."],
  "Avenger": ["Confront a reminder of the wrong you pursue.", "Choose the hard path because justice demands it.", "Pay a real price pursuing justice or vengeance."],
  "Beast Within": ["Your inner nature creates an unforeseen consequence.", "Restrain yourself when losing control would be easier.", "Lose control in a way that causes harm or fallout."],
  "Boy Scout": ["Do the decent thing when cynicism would be easier.", "Choose principle over tactical advantage at a cost.", "Sacrifice something meaningful because it is right."],
  "Champion": ["Publicly stand for a cause when it matters.", "Carry hope or morale for others under pressure.", "Risk yourself or your reputation as the symbol people need."],
  "Defender": ["Put yourself between a threat and someone vulnerable.", "Hold a position alone so others can escape or recover.", "Lose or suffer because you refused to abandon those you protect."],
  "Fame": ["Public attention complicates a scene.", "Choose responsibility over image when people are watching.", "Your public identity costs you something major."],
  "Hotshot": ["Show off or take a bold risk that creates trouble.", "Escalate a dangerous moment to prove you can handle it.", "Your ego or audacity costs something significant."],
  "Human Nature": ["Try to engage with ordinary human emotion in a meaningful scene.", "Choose connection over efficiency at real cost.", "Sacrifice for loyalty, love, or belonging."],
  "Idealist": ["Act on hope when compromise would be easier.", "Refuse a practical but corrosive solution.", "Lose something because you would not surrender the ideal."],
  "Investigator": ["Pursue an uncomfortable truth despite friction.", "Risk safety or trust to uncover what is hidden.", "Expose truth at major personal or social cost."],
  "Journeyman": ["Say the uncomfortable truth because it needs saying.", "Use hard-earned experience to help an ally at cost.", "Keep going through failure because the work matters."],
  "Lone Wolf": ["Refuse help or distance yourself and create a complication.", "Protect others without admitting you need them.", "Your isolation costs you or the team something major."],
  "Mentor": ["Teach or correct someone when it creates tension.", "Put a student's growth over tactical ease.", "Sacrifice for the next generation or a lesson that must endure."],
  "Mercenary": ["Refuse a better payday because it violates your code.", "Break or renegotiate a contract because the situation changed.", "Lose major profit, safety, or reputation to honor your code."],
  "Outsider": ["Your alienation or difference complicates a scene.", "Choose belonging or honesty at real cost.", "Risk rejection or loss to protect people who may never accept you."],
  "Protector": ["Shield someone from danger or consequence.", "Take on a burden so others can survive or heal.", "Suffer defeat, injury, or loss because you protected someone."],
  "Redeemer": ["Face evidence of past harm and do not run.", "Offer mercy or help to someone who mirrors your past.", "Pay a real price trying to make amends."],
  "Role Model": ["Act visibly as the example others need.", "Choose the harder public standard over easy victory.", "Lose something to remain worthy of those who look up to you."],
  "Seeker": ["Pursue a lead, mystery, or answer despite inconvenience.", "Choose discovery over comfort or safety.", "Truth changes or costs something important."],
  "Soldier": ["Follow discipline or mission standards under pressure.", "Put the team or mission before personal ease.", "Accept major cost because duty requires it."],
  "Survivor": ["Keep moving through a moment that echoes past trauma.", "Use survival experience to pull someone else through crisis.", "Face the source or equivalent of what shaped you at personal cost."],
  "Wiseacre": ["Use humor or provocation when silence would be safer.", "Mock danger or authority to protect morale or expose weakness.", "Your mouth costs you something significant but changes the scene."]
};

const talents = ["Actor", "Alert", "Appeal", "Athlete", "Battlefield Leader", "Cold Reader", "Counterguard", "Defensive Fighter", "Durable", "Fast Draw", "Field Commander", "Forensic Expert", "Grappler", "Hard to Kill", "Improvised Fighter", "Inspiring Leader", "Interrogator", "Iron Will", "Jack of All Trades", "Linguist", "Lucky", "Martial Artist", "Marksman", "Master Negotiator", "Master of Combat", "Mobile", "Never Give Up", "Observant", "Pain Tolerance", "Pattern Recognition", "Performer", "Power Control", "Power Focus", "Provocateur", "Psychic Discipline", "Resilient", "Sharpshooter", "Skilled", "Specialist", "Surveillance Specialist", "Takedown Artist", "Team Player", "Tireless", "Tough", "Underwater Combatant", "War Caster", "Weapon Specialist"];

const merits = ["Ally", "Alternate Identity", "Attractive", "Base of Operations", "Cash Flow", "Civic Standing", "Connected", "Danger Aware", "Easy Company", "Eidetic Memory", "Fame", "Fortunate Reputation", "Legal Authority", "Local Support", "Media Favor", "Mentor", "No Public Records", "Patron", "Prepared Cache", "Public Trust", "Restless Sleeper", "Rugged", "Secret Identity", "Sidekick", "Stage Presence", "Strong Resolve", "Team Membership", "Vehicle", "Wary", "Wealth"];

const flaws = ["Absent-Minded", "Action Addict", "Addiction", "Alien Outsider", "Bad Reputation", "Berserk Trigger", "Bully", "Code of Conduct", "Combat Freeze", "Cowardice", "Debt", "Dependent", "Destitute", "Enemy", "Emotional Trigger", "Famous Identity", "Fugitive", "Gear Dependent", "Haunted", "Honest to a Fault", "Hunted", "Infamy", "Marked by Power", "Monstrous Appearance", "Obligation", "Oath", "Overconfident", "Phobia", "Power Instability", "Public Identity", "Reckless", "Responsibility to the Innocent", "Secret Weakness", "Social Outsider", "Vulnerable Reputation", "Weak Support System"];

const powerSets = ["Animal Powers", "Armor Systems", "Cold Control", "Cosmic Power", "Earth Control", "Elasticity", "Electricity Control", "Energy Generation", "Gadgetry", "Illusion", "Fire Control", "Flight", "Light Control", "Machine Interface", "Martial Mastery", "Plant Control", "Phasing", "Precognition", "Reality Control", "Regeneration", "Shadow Control", "Shapechanging", "Size Control", "Sorcery", "Super Agility", "Super Durability", "Super Genius", "Super Presence", "Super Senses", "Super Speed", "Super Strength", "Telekinesis", "Telepathy", "Teleportation", "Trick Archery", "Water Control", "Weather Control"];

const gearCatalog = {
  standard: ["Burner Phone", "Basic First Aid Kit", "Public Transport Ticket", "Basic Clothing", "Street Food / Daily Meals", "Padlock", "Notebook and Pens", "Decent Smartphone", "Basic Toolkit", "Bicycle", "Budget Hotel Room", "Police Scanner", "Handcuffs", "Basic Lockpicks", "Tactical Flashlight", "Prepaid Debit Cards", "Basic Body Camera"],
  weapon: ["Unarmed", "Light Weapon", "Heavy Weapon", "Ranged Weapon", "Improvised Weapon", "Reach Property", "Thrown Property", "Concealable Property", "Armor-Piercing Property", "Nonlethal Property"],
  armor: ["Light Armor", "Heavy Armor", "Powered Armor", "Environmental Suit", "Shield", "Reinforced Costume", "Basic Body Armor", "Custom Tactical Gear Set"],
  gadget: ["Smoke Grenade", "Sensor Drone", "Medical Injector", "Grappling Line", "Signal Jammer", "Specialized Restraints", "EMP Device", "Scanner", "Forensic Kit", "Comms Gear", "Tracking Beacon", "Night Vision Goggles", "Encrypted Satellite Phone", "Basic Surveillance Kit", "Advanced Surveillance Drone", "Professional Security System", "Advanced Medical Equipment"],
  vehicle: ["Motorcycle", "Used Car", "Standard Road Vehicle", "High-Performance Vehicle", "Light Aircraft", "Jet Aircraft", "Speedboat", "Supersonic Aircraft", "Spacecraft", "Armored Vehicle", "Advanced Vehicle", "Private Helicopter", "Private Jet", "Iconic Super-Vehicle"],
  feature: ["Stealth Systems", "Pursuit Systems", "Ejection Systems", "Integrated Communications", "Environmental Sealing", "Enhanced Sensors"],
  invention: ["Downtime Invention", "Kitbashing", "Minor Repairs", "Significant Repairs", "Gear Upgrade", "Alien / Exotic Repair"]
};

const gearRules = {
  "Burner Phone": "Resource Cost 0. Disposable communication gear for temporary contact, false numbers, and low-stakes misdirection.",
  "Basic First Aid Kit": "Resource Cost 0. Standard medical supplies; appropriate for ordinary first aid and Medicine checks.",
  "Public Transport Ticket": "Resource Cost 0. Mundane transportation access.",
  "Basic Clothing": "Resource Cost 0. Ordinary clothing appropriate to the character concept.",
  "Street Food / Daily Meals": "Resource Cost 0. Basic daily meals and incidental food.",
  "Padlock": "Resource Cost 0. Simple physical security hardware.",
  "Notebook and Pens": "Resource Cost 0. Basic investigative, planning, or note-taking supplies.",
  "Decent Smartphone": "Resource Cost 1. Everyday communications, camera, apps, and basic online access.",
  "Basic Toolkit": "Resource Cost 1. General tools for ordinary repairs or practical tasks.",
  "Bicycle": "Resource Cost 1. Simple personal transportation.",
  "Budget Hotel Room": "Resource Cost 1. One night of basic lodging.",
  "Police Scanner": "Resource Cost 1. Monitors emergency radio traffic where legally and technically possible.",
  "Handcuffs": "Resource Cost 1. Professional restraints for subdued or cooperative targets.",
  "Basic Lockpicks": "Resource Cost 1. Tools for Finesse checks involving locks, subject to legal and narrative access.",
  "Tactical Flashlight": "Resource Cost 1. Durable light source useful for search, signaling, and dark environments.",
  "Prepaid Debit Cards": "Resource Cost 1. Small disposable payment reserve.",
  "Basic Body Camera": "Resource Cost 1. Portable recording gear.",
  "Unarmed": "Attack with STR or FIG. Damage is 1 Power Die with no modifier unless a Class feature, Talent, or Power increases it.",
  "Light Weapon": "Knives, batons, collapsible weapons, small firearms, and quick concealable arms. Attack with DEX or FIG. Damage is 1 Power Die. May carry Concealable or Thrown.",
  "Heavy Weapon": "Swords, axes, rifles, shotguns, heavy clubs, and committed two-handed weapons. Melee attacks use STR or FIG; ranged attacks use DEX. Damage is 1 Power Die plus the relevant ability modifier. Not Concealable.",
  "Ranged Weapon": "Bows, crossbows, thrown weapons, firearms, and distance weapons. Attack with DEX against Dodge. Short range has no penalty; Medium range has Disadvantage unless covered by Marksman or Sharpshooter.",
  "Improvised Weapon": "An object used as a weapon, such as a chair, pipe, fire extinguisher, or car door. Damage is 1 Power Die. Special properties apply only when the fiction supports them.",
  "Reach Property": "Weapon can attack into an adjacent Zone without entering it, useful for space control and Opportunity Attacks across Zone boundaries.",
  "Thrown Property": "Weapon can be used as a ranged attack using STR. After being thrown, it must be retrieved or replaced. Range is Close to Short without penalty.",
  "Concealable Property": "Weapon can be hidden without an obvious bulge. Notice or Investigation checks to detect it suffer Disadvantage.",
  "Armor-Piercing Property": "Ignores the flat bonus provided by armor. It does not ignore Resistance from Powers or Class features.",
  "Nonlethal Property": "Designed to incapacitate. A target reduced to 0 HP by this weapon falls Unconscious and makes Grit Saves.",
  "Light Armor": "+2 to Parry/Block or Dodge, chosen when acquired. Does not restrict movement. Can be concealed under loose clothing with a successful Stealth check.",
  "Heavy Armor": "+4 to Parry/Block or Dodge, chosen when acquired. Imposes Disadvantage on Acrobatics and Stealth checks. Not Concealable.",
  "Powered Armor": "+3 to Parry/Block and Dodge, plus +2 to STR-based checks while worn. Built-in features are defined with GM approval. If it is the hero's primary Power Set expression, use Armor Systems instead.",
  "Environmental Suit": "Protective suit for hostile environments. Specific sealing, filtration, or survival limits are defined at acquisition.",
  "Shield": "Defensive gear that should be assigned to Parry/Block, Dodge, or narrative protection with GM approval.",
  "Reinforced Costume": "Costume built with protective materials; usually functions as Light Armor or concept-appropriate protection.",
  "Basic Body Armor": "Resource Cost 2. Practical protective gear; usually modeled as Light Armor or Heavy Armor depending on the fiction.",
  "Custom Tactical Gear Set": "Resource Cost 3. High-end combat kit with tailored protective, utility, and mission-specific components.",
  "Smoke Grenade": "Simple gadget. Creates smoke as an environmental effect; it does not directly replicate a Power.",
  "Sensor Drone": "Limited-use scouting or surveillance gadget. Complex use may require Technology or a relevant Skill check.",
  "Medical Injector": "Limited-use medical gadget for field treatment, stabilization support, or delivering approved substances.",
  "Grappling Line": "Mobility and access gadget for climbing, swinging, anchoring, or crossing gaps when the fiction supports it.",
  "Signal Jammer": "Restricted or specialized gadget for disrupting communications or electronics in a limited area.",
  "Specialized Restraints": "Physical restraints for cooperative or already subdued targets. They do not replicate Telekinetic Bind.",
  "EMP Device": "Prepared or restricted gadget that may disrupt electronics in a limited, GM-approved way. Broad Power-level effects require invention or a Power.",
  "Scanner": "Detection or diagnostic gadget. Complex readings may require Technology, Science, Investigation, or a relevant Specialty.",
  "Forensic Kit": "Investigative kit for collecting evidence, chemical traces, fingerprints, samples, or scene data.",
  "Comms Gear": "Team communications equipment, encrypted or specialized if justified by resources and access.",
  "Tracking Beacon": "Small device used to mark and follow a target, object, or vehicle.",
  "Night Vision Goggles": "Resource Cost 2. See in darkness or low light within the limits of mundane technology.",
  "Encrypted Satellite Phone": "Resource Cost 2. Secure communications where satellite access is available.",
  "Basic Surveillance Kit": "Resource Cost 2. Cameras, microphones, trackers, or similar tools for surveillance scenes.",
  "Advanced Surveillance Drone": "Resource Cost 3. High-end drone platform for scouting, recording, tracking, or remote observation.",
  "Professional Security System": "Resource Cost 3. Fixed security infrastructure for a home, base, business, or protected site.",
  "Advanced Medical Equipment": "Resource Cost 3. Serious medical tools for treatment, diagnosis, or stabilization in appropriate conditions.",
  "Motorcycle": "Resource Cost 2. Usually Speed Rating 1 or 2 and Armor Rating 1, depending on model and scene use.",
  "Used Car": "Resource Cost 2. Standard civilian vehicle; usually Speed Rating 1 and Armor Rating 1.",
  "Standard Road Vehicle": "Speed Rating 1. Moves 1-2 Zones per Turn. Usually Armor Rating 1 with 3 hits.",
  "High-Performance Vehicle": "Speed Rating 2. Moves 2-3 Zones per Turn. Armor Rating depends on build.",
  "Light Aircraft": "Speed Rating 2. Moves 2-3 Zones per Turn in appropriate scenes.",
  "Jet Aircraft": "Speed Rating 3. Moves 3-4 Zones per Turn in chase scenes.",
  "Speedboat": "Resource Cost 3. Speed Rating 3 at full throttle. Armor Rating depends on build.",
  "Supersonic Aircraft": "Speed Rating 4. Effectively unlimited movement within atmosphere for scene framing.",
  "Spacecraft": "Speed Rating 4. Effectively unlimited movement in appropriate space-scale scenes.",
  "Armored Vehicle": "Resource Cost 4. Reinforced or military vehicle, commonly Armor Rating 2 with 5 hits.",
  "Advanced Vehicle": "Heavily armored or advanced vehicle, commonly Armor Rating 3 with 8 hits.",
  "Private Helicopter": "Resource Cost 4. Major vehicle access; use Speed and Armor Ratings appropriate to model.",
  "Private Jet": "Resource Cost 5 for ownership. Major long-range transport with very high resource requirements.",
  "Iconic Super-Vehicle": "Armor Rating 4. 12 hits or more, defined at creation. Requires significant narrative and Merit support.",
  "Stealth Systems": "Vehicle feature. Checks to detect or track the vehicle suffer Disadvantage.",
  "Pursuit Systems": "Vehicle feature. Gain Advantage on Vehicles checks during chases when the system applies.",
  "Ejection Systems": "Vehicle feature. Occupants can exit safely at any speed when the system applies.",
  "Integrated Communications": "Built-in secure or specialized communications suite.",
  "Environmental Sealing": "Built-in protection from hostile atmosphere, pressure, vacuum, toxins, or other defined hazards.",
  "Enhanced Sensors": "Built-in scanners, targeting aids, or detection tools appropriate to the gear or vehicle.",
  "Downtime Invention": "Technology-trained heroes can build planned devices during Downtime. DC 15 for simple utility, DC 20 for complex Encounter-tier effects, DC 25 for cutting-edge or powerful effects.",
  "Kitbashing": "Technology-trained heroes can build improvised field devices from available materials. Simple devices cost a Bonus Action, complex devices an Action, and extremely complex devices a Full Round Action.",
  "Minor Repairs": "Cosmetic damage, depleted power cells, or minor components can be repaired with Technology DC 10 during a Breather.",
  "Significant Repairs": "Structural damage, destroyed components, or major failure require Downtime and a Technology check set by severity.",
  "Gear Upgrade": "Existing gear can be upgraded during Downtime using invention rules. Reduce the DC by 3 when modifying gear the hero already owns and understands.",
  "Alien / Exotic Repair": "Alien or exotic technology may require the alien hero, a specific resource, or Technology DC 25 to repair."
};

const STORAGE_KEY = "heroic5e_sheet";
const ACCESSIBILITY_KEY = "heroic5e_sheet_accessibility";
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

const app = document.querySelector("#app");
const dynamicFields = new Set(["origin", "originPrimaryBonus", "rank", "level", "className", "calling"]);
const steps = [
  { id: "concept", label: "Concept", deck: "Identity, rank, and portrait" },
  { id: "origin", label: "Origin", deck: "Origin bonuses and built-in mechanics" },
  { id: "class", label: "Class", deck: "Class, calling, and Edge triggers" },
  { id: "abilities", label: "Abilities", deck: "Scores, saves, skills, and defenses" },
  { id: "powers", label: "Powers", deck: "Power sets, picks, and limits" },
  { id: "features", label: "Features", deck: "Talents, merits, flaws, and class features" },
  { id: "gear", label: "Gear", deck: "Equipment, costume, and notes" },
  { id: "review", label: "Review", deck: "Export, print, and final sheet" }
];

let activeStep = "concept";
let sheet = loadSheet();
let accessibility = loadAccessibility();

function modifier(score) {
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

function medianHitDie(hitDie) {
  return Math.floor(hitDie / 2) + 1;
}

function originBonusFor(key) {
  let bonus = 0;
  if (sheet.originPrimaryBonus === key) bonus += 2;
  if (sheet.originSecondaryBonus === key) bonus += 1;
  return bonus;
}

function abilityScore(key) {
  return Number(sheet[`${key}Score`] || 10) + originBonusFor(key);
}

function abilityMod(key) {
  return modifier(abilityScore(key));
}

function calc() {
  const level = Math.max(1, Math.min(10, Number(sheet.level || 1)));
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const classInfo = classes[sheet.className] || classes.Bruiser;
  const pro = prowess(level);
  const hitDie = classInfo.hitDie;
  const hp = abilityScore("con") + (hitDie * rank.hpMultiplier) + ((level - 1) * (medianHitDie(hitDie) + abilityMod("con"))) + (sheet.toughTalent ? level * 2 : 0);
  const totalPicks = rank.startingPicks + Math.max(0, level - 1) + Number(sheet.limitations || 0) + Number(sheet.bonusPicks || 0);

  return {
    level,
    prowess: signed(pro),
    prowessRaw: pro,
    hp,
    hitDie: `d${hitDie}`,
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
    powerPicks: totalPicks,
    maxPowerSets: rank.maxPowerSets,
    powerSlots: rank.powerSlots,
    maxTier: rank.maxTier,
    startingPicks: rank.startingPicks,
    maxLimitations: rank.maxLimitations,
    classPrimary: classInfo.primary.toUpperCase(),
    classSaves: classInfo.saves.map(save => save.toUpperCase()).join(", ")
  };
}

function fieldValue(el) {
  if (el.type === "checkbox") return el.checked;
  if (el.type === "number") return Number(el.value || 0);
  return el.value;
}

function setField(el, value) {
  if (el.type === "checkbox") {
    el.checked = Boolean(value);
  } else {
    el.value = value ?? "";
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheet));
}

function addLine(field, value) {
  if (!value) return;
  const lines = String(sheet[field] || "").split("\n").map(line => line.trim()).filter(Boolean);
  if (!lines.includes(value)) lines.push(value);
  sheet[field] = lines.join("\n");
}

function removeOriginLines() {
  const originMerits = Object.values(origins).map(origin => origin.merit);
  const originFlaws = Object.values(origins).map(origin => origin.flaw);
  sheet.merits = String(sheet.merits || "").split("\n").filter(line => !originMerits.includes(line.trim())).join("\n");
  sheet.flaws = String(sheet.flaws || "").split("\n").filter(line => !originFlaws.includes(line.trim())).join("\n");
}

function appendField(field, value) {
  if (!value) return;
  addLine(field, value);
  syncFields();
  recalc();
}

function fillClassFeatures() {
  const info = classes[sheet.className] || classes.Bruiser;
  const level = Number(sheet.level || 1);
  const features = [];
  if (level >= 1) features.push(`Level 1: ${info.features[0]}`, `Level 1: ${info.features[1]}`);
  if (level >= 3) features.push(`Level 3: ${info.features[2]}`);
  if (level >= 5) features.push(`Level 5: ${info.features[3]}`);
  if (level >= 7) features.push(`Level 7: ${info.features[4]}`);
  if (level >= 10) features.push(`Level 10: ${info.features[5]}`);
  sheet.classFeatures = features.join("\n");
}

function fillOrigin() {
  const origin = origins[sheet.origin];
  if (!origin) return;
  removeOriginLines();
  if (!origin.primary.includes(sheet.originPrimaryBonus)) {
    sheet.originPrimaryBonus = origin.primary[0];
  }
  const secondary = origin.secondary[sheet.originPrimaryBonus] || [];
  if (!secondary.includes(sheet.originSecondaryBonus)) {
    sheet.originSecondaryBonus = secondary[0] || "";
  }
  if (!origin.skills.includes(sheet.originSkill1)) sheet.originSkill1 = "";
  if (!origin.skills.includes(sheet.originSkill2)) sheet.originSkill2 = "";
  if (!origin.traits.includes(sheet.originTrait)) sheet.originTrait = "";
  const traitLine = sheet.originTrait ? `Chosen ${origin.traitLabel}: ${sheet.originTrait}` : `Choose ${origin.traitLabel}.`;
  const skillLine = origin.skillPicks > 1 ? `Choose ${origin.skillPicks} Origin Skills.` : "Choose 1 Origin Skill.";
  sheet.originTalent = `${origin.talent}\nBuilt-In Merit: ${origin.merit}\nBuilt-In Flaw: ${origin.flaw}\n${traitLine}\n${skillLine}\n${origin.note}`;
  addLine("merits", origin.merit);
  addLine("flaws", origin.flaw);
  trainOriginSkills();
}

function trainOriginSkills() {
  const origin = origins[sheet.origin];
  if (!origin) return;
  [sheet.originSkill1, sheet.originSkill2].filter(Boolean).forEach(skillName => {
    const skill = skills.find(([, name]) => name === skillName);
    if (skill) sheet[`skill_${skill[0]}_trained`] = true;
  });
}

function fillCallingTriggers() {
  const triggers = callings[sheet.calling];
  if (!triggers) return;
  sheet.minorTrigger = triggers[0];
  sheet.majorTrigger = triggers[1];
  sheet.definingTrigger = triggers[2];
}

function saveAccessibility() {
  localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(accessibility));
}

function applyAccessibility() {
  document.body.dataset.fontSize = accessibility.fontSize || "normal";
  document.body.dataset.dyslexic = accessibility.dyslexic ? "true" : "false";
  document.querySelector("#fontSizeSelect").value = accessibility.fontSize || "normal";
  document.querySelector("#dyslexicToggle").checked = Boolean(accessibility.dyslexic);
  requestAnimationFrame(updateSheetZoomSpace);
}

function updateSheetZoomSpace() {
  const sheetEl = document.querySelector("#sheet");
  if (!sheetEl) return;
  const scale = accessibility.fontSize === "xlarge" ? 1.3 : accessibility.fontSize === "large" ? 1.15 : 1;
  const extraHeight = Math.max(0, sheetEl.offsetHeight * (scale - 1));
  sheetEl.style.marginBottom = `${32 + extraHeight}px`;
}

function exportJson() {
  const payload = {
    type: "HEROIC 5e Character Sheet",
    version: 1,
    exportedAt: new Date().toISOString(),
    sheet
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const hero = sheet.heroName || sheet.realName || "heroic-5e-character";
  link.href = url;
  link.download = `${hero.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "heroic-5e-character"}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = payload.sheet && typeof payload.sheet === "object" ? payload.sheet : payload;
      sheet = { ...defaults, ...imported };
      ensureClassSaves();
      renderPowerSets();
      syncFields();
      wireFields();
      recalc();
    } catch {
      alert("That JSON file could not be imported.");
    }
  };
  reader.readAsText(file);
}

function ensureClassSaves() {
  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (sheet[field] === undefined) sheet[field] = classSaves.includes(key);
  });
}

function renderOptions() {
  document.querySelector("#className").innerHTML = Object.keys(classes).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#originSelect").innerHTML = Object.keys(origins).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#callingSelect").innerHTML = Object.keys(callings).map(name => `<option>${name}</option>`).join("");
  document.querySelector("#powerAbility").innerHTML = abilities
    .map(([key, short, name]) => `<option value="${key}">${short} - ${name}</option>`)
    .join("");
  document.querySelector("#talentPicker").innerHTML = `<option value="">Choose Talent</option>${talents.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#meritPicker").innerHTML = `<option value="">Choose Merit</option>${merits.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#flawPicker").innerHTML = `<option value="">Choose Flaw</option>${flaws.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#weaponGearPicker").innerHTML = `<option value="">Choose Weapon Gear</option>${gearCatalog.weapon.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#armorGearPicker").innerHTML = `<option value="">Choose Armor</option>${gearCatalog.armor.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#gadgetGearPicker").innerHTML = `<option value="">Choose Gadget</option>${gearCatalog.gadget.map(name => `<option>${name}</option>`).join("")}`;
  document.querySelector("#vehicleGearPicker").innerHTML = `<option value="">Choose Vehicle</option>${gearCatalog.vehicle.map(name => `<option>${name}</option>`).join("")}`;
}

function renderAbilities() {
  document.querySelector("#abilityGrid").innerHTML = abilities.map(([key, short, name]) => `
    <div class="ability-row">
      <strong>${short}</strong>
      <label>${name} Base<input type="number" min="1" max="30" data-field="${key}Score"></label>
      <span class="ability-total" data-out="${key}Total"></span>
      <strong data-out="${key}Mod"></strong>
    </div>
  `).join("");
}

function renderTraining() {
  document.querySelector("#skillsTable").innerHTML = skills.map(([key, name, ability]) => `
    <div class="skill-row">
      <input type="checkbox" title="Trained" data-field="skill_${key}_trained">
      <span class="skill-name">${name}</span>
      <span class="skill-ability">${ability.toUpperCase()}</span>
      <span class="skill-total" data-out="skill_${key}_total"></span>
      <input type="checkbox" title="Expertise" data-field="skill_${key}_expert">
    </div>
  `).join("");

  document.querySelector("#savesTable").innerHTML = abilities.map(([key, short, name]) => `
    <div class="save-row">
      <input type="checkbox" title="Trained" data-field="save_${key}_trained">
      <span class="save-name">${short} ${name}</span>
      <span class="save-total" data-out="save_${key}_total"></span>
    </div>
  `).join("");
}

function abilityOption(key) {
  const ability = abilities.find(([value]) => value === key);
  return ability ? `${ability[1]} - ${ability[2]}` : key.toUpperCase();
}

function renderOriginOptions() {
  const origin = origins[sheet.origin] || origins.Enhanced;
  const secondary = origin.secondary[sheet.originPrimaryBonus] || origin.secondary[origin.primary[0]] || [];
  const skillSelect = index => `
    <label>Origin Skill ${index}
      <select data-field="originSkill${index}">
        <option value="">Choose Skill</option>
        ${origin.skills.map(skill => `<option>${skill}</option>`).join("")}
      </select>
    </label>
  `;

  document.querySelector("#originOptions").innerHTML = `
    <h2>Origin Mechanics</h2>
    <div class="origin-grid">
      <label>Primary Bonus (+2)
        <select data-field="originPrimaryBonus">
          ${origin.primary.map(key => `<option value="${key}">${abilityOption(key)}</option>`).join("")}
        </select>
      </label>
      <label>Secondary Bonus (+1)
        <select data-field="originSecondaryBonus">
          ${secondary.map(key => `<option value="${key}">${abilityOption(key)}</option>`).join("")}
        </select>
      </label>
      ${skillSelect(1)}
      ${origin.skillPicks > 1 ? skillSelect(2) : ""}
      <label>${origin.traitLabel}
        <select data-field="originTrait">
          <option value="">Choose Option</option>
          ${origin.traits.map(trait => `<option>${trait}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="origin-note">
      <strong>${origin.talent}</strong>
      <span>${origin.note}</span>
    </div>
  `;
}

function renderPowerSets() {
  const rank = ranks[sheet.rank] || ranks["Mid-Level"];
  const grid = document.querySelector("#powerSetGrid");
  const options = `<option value="">Choose Power Set</option>${powerSets.map(name => `<option>${name}</option>`).join("")}`;
  grid.innerHTML = Array.from({ length: rank.powerSlots }, (_, index) => {
    const number = index + 1;
    return `
      <label class="power-slot">Power Set ${number}
        <select data-field="powerSet${number}Name">${options}</select>
        <textarea data-field="powerSet${number}Notes" placeholder="Core track, branch powers, utility powers, notes"></textarea>
      </label>
    `;
  }).join("");
}

function syncFields() {
  document.querySelectorAll("[data-field]").forEach(el => setField(el, sheet[el.dataset.field]));
}

function renderOutputs() {
  const values = calc();

  document.querySelectorAll("[data-out]").forEach(el => {
    const key = el.dataset.out;
    if (values[key] !== undefined) el.textContent = values[key];
  });

  abilities.forEach(([key]) => {
    document.querySelectorAll(`[data-out="${key}Total"]`).forEach(el => {
      const bonus = originBonusFor(key);
      el.textContent = bonus ? `${abilityScore(key)} (+${bonus})` : `${abilityScore(key)}`;
    });
    document.querySelectorAll(`[data-out="${key}Mod"]`).forEach(el => {
      el.textContent = signed(abilityMod(key));
    });
  });

  skills.forEach(([key, , ability]) => {
    const trained = Boolean(sheet[`skill_${key}_trained`]);
    const expert = Boolean(sheet[`skill_${key}_expert`]);
    const total = abilityMod(ability) + (trained ? values.prowessRaw : 0) + (expert ? values.prowessRaw : 0);
    document.querySelectorAll(`[data-out="skill_${key}_total"]`).forEach(el => {
      el.textContent = signed(total);
    });
  });

  const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
  abilities.forEach(([key]) => {
    const field = `save_${key}_trained`;
    if (sheet[field] === undefined) sheet[field] = classSaves.includes(key);
    const total = abilityMod(key) + (sheet[field] ? values.prowessRaw : 0);
    document.querySelectorAll(`[data-out="save_${key}_total"]`).forEach(el => {
      el.textContent = signed(total);
    });
  });

  const portrait = document.querySelector("#portraitPreview");
  if (sheet.portrait) {
    portrait.style.backgroundImage = `url("${sheet.portrait}")`;
    portrait.textContent = "";
  } else {
    portrait.style.backgroundImage = "";
    portrait.textContent = "Portrait";
  }
}

function recalc() {
  save();
  renderOutputs();
  requestAnimationFrame(updateSheetZoomSpace);
}

function wireFields() {
  document.querySelectorAll("[data-field]").forEach(el => {
    if (el.dataset.wired === "true") return;
    el.dataset.wired = "true";
    el.addEventListener("input", () => {
      sheet[el.dataset.field] = fieldValue(el);
      if (el.dataset.field === "className" || el.dataset.field === "level") {
        const classSaves = (classes[sheet.className] || classes.Bruiser).saves;
        abilities.forEach(([key]) => {
          sheet[`save_${key}_trained`] = classSaves.includes(key);
        });
        fillClassFeatures();
        syncFields();
      }
      if (el.dataset.field === "origin") {
        fillOrigin();
        renderOriginOptions();
        syncFields();
        wireFields();
      }
      if (el.dataset.field === "originPrimaryBonus") {
        const origin = origins[sheet.origin];
        const secondary = origin?.secondary[sheet.originPrimaryBonus] || [];
        if (!secondary.includes(sheet.originSecondaryBonus)) sheet.originSecondaryBonus = secondary[0] || "";
        renderOriginOptions();
        syncFields();
        wireFields();
      }
      if (el.dataset.field === "originSkill1" || el.dataset.field === "originSkill2") trainOriginSkills();
      if (el.dataset.field === "originTrait") fillOrigin();
      if (el.dataset.field === "calling") fillCallingTriggers();
      if (el.dataset.field === "rank") {
        renderPowerSets();
        syncFields();
        wireFields();
      }
      recalc();
    });
  });
}

function wireActions() {
  document.querySelector("#fontSizeSelect").addEventListener("input", event => {
    accessibility.fontSize = event.target.value;
    applyAccessibility();
    saveAccessibility();
  });
  document.querySelector("#dyslexicToggle").addEventListener("change", event => {
    accessibility.dyslexic = event.target.checked;
    applyAccessibility();
    saveAccessibility();
  });

  document.querySelector("#exportBtn").addEventListener("click", exportJson);
  document.querySelector("#importBtn").addEventListener("click", () => document.querySelector("#importFile").click());
  document.querySelector("#importFile").addEventListener("change", event => {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  });

  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#talentPicker").addEventListener("change", event => {
    appendField(sheet.startingTalent ? "talents" : "startingTalent", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#meritPicker").addEventListener("change", event => {
    appendField("merits", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#flawPicker").addEventListener("change", event => {
    appendField("flaws", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#weaponGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#armorGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#gadgetGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#vehicleGearPicker").addEventListener("change", event => {
    appendField("gear", event.target.value);
    event.target.value = "";
  });
  document.querySelector("#clearBtn").addEventListener("click", () => {
    if (!confirm("Clear the saved HEROIC 5e sheet?")) return;
    localStorage.removeItem(STORAGE_KEY);
    sheet = { ...defaults };
    ensureClassSaves();
    fillClassFeatures();
    fillOrigin();
    fillCallingTriggers();
    renderPowerSets();
    syncFields();
    wireFields();
    recalc();
  });

  document.querySelector("#portraitInput").addEventListener("change", event => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      sheet.portrait = reader.result;
      recalc();
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  });
}

renderOptions();
renderAbilities();
renderTraining();
ensureClassSaves();
if (!sheet.classFeatures) fillClassFeatures();
fillOrigin();
if (!sheet.minorTrigger) fillCallingTriggers();
renderOriginOptions();
renderPowerSets();
syncFields();
applyAccessibility();
wireFields();
wireActions();
recalc();
