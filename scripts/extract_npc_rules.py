import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader


HEROIC_ARCHETYPES = [
    "Blaster",
    "Brick",
    "Elemental Master",
    "Gadgeteer",
    "Mage",
    "Martial Artist",
    "Night Stalker",
    "Paragon",
    "Powered Armor",
    "Speedster",
    "Telepath",
    "Transformation",
]

VILLAINOUS_ARCHETYPES = [
    "Crimelord",
    "Dark Sorcerer",
    "Demolisher",
    "Mastermind",
    "Evil Martial Artist",
    "Social Manipulator",
    "Mercenary",
]

DAY_PLAYERS = [
    ("Criminal Element", "Hooligan"),
    ("Criminal Element", "Hit Man"),
    ("Criminal Element", "Muscle / Enforcer"),
    ("Law Enforcement", "Beat Cop"),
    ("Law Enforcement", "Detective"),
    ("Law Enforcement", "SWAT Operative"),
    ("Military", "Soldier"),
    ("Military", "Officer"),
    ("Military", "Ninja / Covert Operative"),
    ("Civilians and Professionals", "Paramedic"),
    ("Civilians and Professionals", "Lawyer"),
    ("Civilians and Professionals", "Scientist"),
    ("Civilians and Professionals", "Businessman / Executive"),
]

CREATURES = [
    ("Large Land Predator", "Lion, Panther, Wolf Pack, Cheetah"),
    ("Large Aquatic Predator", "Shark, Killer Whale"),
    ("Large Ape / Primate", "Gorilla, Ape"),
    ("Swarm", "Bats, Birds, Insects, Rats"),
    ("Prehistoric / Giant Creature", "T-Rex, Ankylosaurus, Brontosaurus, Triceratops, Giant Constrictor"),
]

ABILITY_KEYS = ["str", "dex", "con", "fig", "int", "wis", "cha", "per"]


def normalize(value):
    replacements = {
        "\u2014": " - ",
        "\u2013": "-",
        "\u2011": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2026": "...",
        "\u00d7": "x",
        "\u2192": "->",
        "\u2020": "",
        "\u00b7": "-",
        "\u25cf": "-",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    value = re.sub(r"\n\s*\d{3}\s*(?=\n|$)", "\n", value)
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r" *\n *", "\n", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def extract_chapter(pdf_path):
    reader = PdfReader(pdf_path)
    return normalize("\n".join((reader.pages[index].extract_text() or "") for index in range(402, 456)))


def ability_values(block):
    ability_section = block.split("Ability Scores", 1)[1].split("Power Tier:", 1)[0]
    modifier_groups = re.findall(r"\(([+-]\d+)(?:/([+-]\d+))?\)", ability_section)
    if len(modifier_groups) >= 8:
        values = [armored or base for base, armored in modifier_groups[:8]]
        return {key: int(value) for key, value in zip(ABILITY_KEYS, values)}
    table = re.search(
        r"STR\s+DEX\s+CON\s+FIG\s+INT\s+WIS\s+CHA\s+PER\s*\n"
        r"([+\-\d\s]+)",
        ability_section,
    )
    values = re.findall(r"[+-]\d+", table.group(1)) if table else []
    return {key: int(value) for key, value in zip(ABILITY_KEYS, values[:8])}


def field(block, label, next_labels):
    alternatives = "|".join(re.escape(item) for item in next_labels)
    boundary = rf"(?=(?:\s+|\n)(?:{alternatives}):|\Z)" if alternatives else r"(?=\Z)"
    match = re.search(rf"{re.escape(label)}:\s*(.*?){boundary}", block, re.S)
    return normalize(match.group(1)) if match else ""


def common_entry(name, category, side, block):
    power_tier = re.search(r"Power Tier:\s*([^|\n]+)", block)
    hp = re.search(r"\bHP:\s*([^|\n]+)", block)
    speed = re.search(r"\bSpeed:\s*([^|\n]+)", block)
    tier_bonus = re.search(r"Tier Bonus:\s*([+\-\d]+)", block)
    defenses = re.search(r"Active Defense:\s*(.*?)(?:\s*\|\s*Attack Value:|\n)", block)
    attack = re.search(r"Attack Value:\s*([^|\n]+)", block)
    effect = re.search(r"Effect Value:\s*([^|\n]+)", block)
    minion_tier = re.search(r"(?:^|\n)Tier:\s*([^|\n]+)", block)
    damage = re.search(r"\bDamage:\s*(.*?)(?=\n(?:Equipment|Skills|Special|Notes):|\Z)", block, re.S)
    equipment = re.search(r"\bEquipment:\s*(.*?)(?=\n(?:Skills|Special|Notes):|\Z)", block, re.S)
    special = re.search(r"\bSpecial:\s*(.*?)(?=\n(?:Skills|Notes):|\Z)", block, re.S)
    return {
        "id": slug(f"{category}-{name}"),
        "name": name,
        "category": category,
        "side": side,
        "powerTier": normalize(power_tier.group(1)) if power_tier else "Support Tier",
        "hp": normalize(hp.group(1)) if hp else "",
        "speed": normalize(speed.group(1)) if speed else "",
        "tierBonus": normalize(tier_bonus.group(1)) if tier_bonus else "+1",
        "defenses": normalize(defenses.group(1)) if defenses else "",
        "attackValue": normalize(attack.group(1)) if attack else "",
        "effectValue": normalize(effect.group(1)) if effect else "",
        "minionTier": normalize(minion_tier.group(1)) if minion_tier else "",
        "damage": normalize(damage.group(1)) if damage else "",
        "equipment": normalize(equipment.group(1)) if equipment else "",
        "special": normalize(special.group(1)) if special else "",
        "abilities": ability_values(block),
        "powerSets": field(block, "Power Sets", ["Skills", "Talents", "Merits", "Flaws", "Notes"]),
        "attacks": field(block, "Attacks", ["Skills", "Talents", "Merits", "Flaws", "Notes"]),
        "skills": field(block, "Skills", ["Talents", "Merits", "Flaws", "Notes"]),
        "talents": field(block, "Talents", ["Merits", "Flaws", "Notes"]),
        "merits": field(block, "Merits", ["Flaws", "Notes"]),
        "flaws": field(block, "Flaws", ["Notes"]),
        "notes": field(block, "Notes", []),
        "text": normalize(block),
    }


def block_between(text, heading, following_headings):
    start = text.index(f"\n{heading}\n") + len(heading) + 2
    ends = [text.find(f"\n{item}\n", start) for item in following_headings]
    ends = [value for value in ends if value >= 0]
    return text[start:min(ends) if ends else len(text)]


def parse_archetypes(text):
    headings = [
        f"{tier} Power {name}"
        for name in HEROIC_ARCHETYPES + VILLAINOUS_ARCHETYPES
        for tier in ["Low", "Medium", "High"]
    ]
    headings += HEROIC_ARCHETYPES + VILLAINOUS_ARCHETYPES
    headings += ["VILLAINOUS ARCHETYPES", "DAY PLAYERS"]
    entries = []
    for side, names in [("Heroic", HEROIC_ARCHETYPES), ("Villainous", VILLAINOUS_ARCHETYPES)]:
        for archetype in names:
            for tier in ["Low", "Medium", "High"]:
                heading = f"{tier} Power {archetype}"
                block = block_between(text, heading, [item for item in headings if item != heading])
                entry = common_entry(heading, archetype, side, block)
                entry["rank"] = tier
                entries.append(entry)
    return entries


def parse_named_blocks(text, definitions, final_heading, side):
    headings = [name for _, name in definitions] + sorted({category for category, _ in definitions}) + [final_heading]
    entries = []
    for category, name in definitions:
        block = block_between(text, name, [item for item in headings if item != name])
        entries.append(common_entry(name, category, side, block))
    return entries


def parse_creatures(text):
    headings = [name for name, _ in CREATURES]
    entries = []
    for name, examples in CREATURES:
        block = block_between(text, name, [item for item in headings if item != name])
        entry = common_entry(name, "Animals and Creatures", "Neutral", block)
        entry["examples"] = examples
        entries.append(entry)
    return entries


def write_module(output_path, archetypes, day_players, creatures):
    payloads = {
        "npcArchetypes": archetypes,
        "npcDayPlayers": day_players,
        "npcCreatures": creatures,
    }
    lines = [
        "// Generated from HEROIC 5e v2.4 Chapter Seventeen by scripts/extract_npc_rules.py.",
        "// Re-run the extractor when the source rules change.",
        "",
    ]
    for name, payload in payloads.items():
        lines.append(f"export const {name} = Object.freeze({json.dumps(payload, indent=2, ensure_ascii=True)});")
        lines.append("")
    Path(output_path).write_text("\n".join(lines), encoding="utf-8")


def main():
    if len(sys.argv) != 3:
        raise SystemExit("Usage: extract_npc_rules.py <source.pdf> <output.js>")
    text = extract_chapter(sys.argv[1])
    archetypes = parse_archetypes(text)
    day_players = parse_named_blocks(text, DAY_PLAYERS, "ANIMALS AND CREATURES", "Supporting Cast")
    creatures = parse_creatures(text)
    write_module(sys.argv[2], archetypes, day_players, creatures)
    print(f"Wrote {len(archetypes)} archetypes, {len(day_players)} day players, and {len(creatures)} creatures.")


if __name__ == "__main__":
    main()
