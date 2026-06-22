import json
import re
import sys
from pathlib import Path

import pdfplumber


POWER_SETS = [
    "Animal Powers", "Armor Systems", "Cold Control", "Cosmic Power", "Earth Control",
    "Elasticity", "Electricity Control", "Energy Generation", "Gadgetry", "Illusion",
    "Fire Control", "Flight", "Light Control", "Machine Interface", "Martial Mastery",
    "Plant Control", "Phasing", "Precognition", "Reality Control", "Regeneration",
    "Shadow Control", "Shapechanging", "Size Control", "Sorcery", "Super Agility",
    "Super Durability", "Super Genius", "Super Presence", "Super Senses", "Super Speed",
    "Super Strength", "Telekinesis", "Telepathy", "Teleportation", "Trick Archery",
    "Water Control", "Weather Control",
]

GENERAL_UTILITIES = {
    1: [
        "Adhesive Grip", "Animal Empathy", "Aquatic Adaptation", "Camouflage", "Echolocation",
        "Emergency Shield", "Environmental Adaptation", "Gliding", "Healing Touch", "Invisibility",
        "Low-Light Vision", "Psychic Resistance", "Quick Recovery", "Spirit Speech", "Stabilize",
        "Super Jump", "Telepathic Whisper", "Thermal Vision", "Toxin Resistance", "Universal Translator",
    ],
    2: [
        "Adrenaline Surge", "Aura of Fear", "Bio-Electric Shock", "Burrowing", "Dimensional Pocket",
        "Object Reading", "Phase Shift", "Photographic Reflexes", "Poison Immunity", "Super Speed Utility",
        "Technopathy", "Venom Strike",
    ],
    3: ["Astral Projection", "Power Mimicry", "Power Mimicry Upgrade", "True Sight"],
}

META_KEYS = [
    "Governing Ability", "Associated Conditions", "Default Damage", "Ability Score Bonus",
    "Limitation Note", "Tactical Role",
]

POWER_HEADING = re.compile(
    r"^(.*?)(Tier\s+([123])(?:\s+Apex)?\s*\u00b7\s*"
    r"(At-Will|Encounter|Daily|Utility|Passive|Reaction|Sustained)"
    r"(?:\s*\u00b7\s*(.*))?)$"
)


def normalize(value):
    replacements = {
        "\u2014": " - ", "\u2013": "-", "\u2011": "-", "\u00d7": "x", "\u2192": "->",
        "\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"', "\u2026": "...",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return re.sub(r"\s+", " ", value).strip()


def usable_lines(lines):
    clean = []
    for raw in lines:
        line = raw.strip()
        if not line or re.fullmatch(r"\d+", line) or line.startswith("--- PDF PAGE"):
            continue
        if line.startswith("HEROIC 5e v2.4") or line.startswith("Chapter 11 -"):
            continue
        clean.append(normalize(line))
    return clean


def block_text(lines):
    paragraphs = []
    current = ""
    for line in usable_lines(lines):
        bullet = line.startswith("\u25cf")
        if bullet:
            if current:
                paragraphs.append(current)
            current = "- " + line.lstrip("\u25cf").strip()
        elif line.startswith("Prerequisite:") or line.endswith(":"):
            if current:
                paragraphs.append(current)
            current = line
        elif current:
            current += " " + line
        else:
            current = line
    if current:
        paragraphs.append(current)
    return "\n".join(paragraphs)


def bullet_entries(lines):
    entries = []
    current = ""
    for line in usable_lines(lines):
        if line.startswith("\u25cf"):
            if current:
                entries.append(current)
            current = line.lstrip("\u25cf").strip()
        elif current:
            current += " " + line
    if current:
        entries.append(current)
    return [
        {
            "name": entry.split(":", 1)[0].strip(),
            "text": entry,
        }
        for entry in entries
    ]


def parse_typed_entries(lines):
    headings = []
    for index, line in enumerate(lines):
        match = POWER_HEADING.match(line.strip())
        if match and match.group(1).strip():
            headings.append((index, match))

    entries = []
    for number, (start, match) in enumerate(headings):
        end = headings[number + 1][0] if number + 1 < len(headings) else len(lines)
        body_lines = lines[start + 1:end]
        body = block_text(body_lines)
        prerequisite_line = next((normalize(line) for line in body_lines if line.strip().startswith("Prerequisite:")), "")
        prerequisite = prerequisite_line.removeprefix("Prerequisite:").split("\u00b7 Trigger:", 1)[0].strip()
        tier = int(match.group(3))
        power_type = match.group(4)
        entries.append({
            "id": slug(match.group(1)),
            "name": normalize(match.group(1)),
            "tier": tier,
            "type": power_type,
            "action": normalize(match.group(5) or power_type),
            "prerequisite": prerequisite,
            "creationCost": 1 if power_type == "Utility" else tier,
            "text": body,
        })
    return entries


def parse_core_track(set_name, lines):
    starts = []
    pattern = re.compile(rf"^{re.escape(set_name)} ([1-4])$")
    for index, line in enumerate(lines):
        match = pattern.match(line.strip())
        if match:
            starts.append((index, int(match.group(1))))
    entries = []
    for number, (start, level) in enumerate(starts):
        end = starts[number + 1][0] if number + 1 < len(starts) else len(lines)
        body_lines = lines[start + 1:end]
        tier_line = normalize(body_lines[0]) if body_lines else ""
        entries.append({
            "id": f"core-{level}",
            "name": f"{set_name} {level}",
            "level": level,
            "tier": 1 if level == 1 else 2 if level == 2 else 3,
            "type": "Apex Passive" if level == 4 else "Passive",
            "action": "Passive",
            "prerequisite": "" if level == 1 else f"{set_name} {level - 1}",
            "creationCost": 1 if level == 1 else 2 if level == 2 else 3,
            "text": block_text([tier_line] + body_lines[1:]),
        })
    return entries


def parse_metadata(set_name, lines, core_index):
    prose_start = next(
        (i for i, line in enumerate(lines[:core_index]) if f"{set_name} is the Power Set" in line),
        core_index,
    )
    meta_lines = lines[1:prose_start]
    metadata = {}
    current_key = None
    for line in usable_lines(meta_lines):
        found = next((key for key in META_KEYS if line.startswith(key)), None)
        if found:
            current_key = found
            metadata[found] = line[len(found):].strip()
        elif current_key:
            metadata[current_key] += " " + line
    governing = metadata.get("Governing Ability", "")
    abilities = []
    for key in ["STR", "DEX", "CON", "FIG", "INT", "WIS", "CHA", "PER"]:
        if re.search(rf"\b{key}\b", governing) and key.lower() not in abilities:
            abilities.append(key.lower())
    return metadata, block_text(lines[prose_start:core_index]), abilities


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", normalize(value).lower()).strip("-")


def extract_pdf_lines(pdf_path):
    lines = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in range(151, 324):
            text = pdf.pages[page_num - 1].extract_text() or ""
            lines.append(f"--- PDF PAGE {page_num} ---")
            lines.extend(text.splitlines())
    return lines


def find_set_starts(lines):
    starts = []
    for name in POWER_SETS:
        candidates = []
        for index, line in enumerate(lines):
            if line.strip().startswith("Governing Ability"):
                window = [i for i in range(max(0, index - 12), index) if lines[i].strip() == name]
                if window:
                    candidates.append(window[-1])
        if not candidates:
            raise ValueError(f"Could not find Power Set start for {name}")
        starts.append((candidates[0], name))
    return sorted(starts)


def parse_power_sets(lines):
    starts = find_set_starts(lines)
    chapter_twelve = next(i for i, line in enumerate(lines) if "Chapter Twelve" in line)
    result = []
    for number, (start, name) in enumerate(starts):
        end = starts[number + 1][0] if number + 1 < len(starts) else chapter_twelve
        section = lines[start:end]
        indexes = {}
        for heading in ["Core Track", "Combat Powers", "Set-Specific Utility Powers", "Enhancements", "Limitations"]:
            try:
                indexes[heading] = next(
                    i for i, line in enumerate(section)
                    if (line.strip().startswith(heading) if heading == "Core Track" else line.strip() == heading)
                )
            except StopIteration as error:
                raise ValueError(f"{name}: missing section heading {heading}") from error
        metadata, description, ability_options = parse_metadata(name, section, indexes["Core Track"])
        core = parse_core_track(name, section[indexes["Core Track"] + 1:indexes["Combat Powers"]])
        powers = parse_typed_entries(section[indexes["Combat Powers"] + 1:indexes["Set-Specific Utility Powers"]])
        utilities = parse_typed_entries(section[indexes["Set-Specific Utility Powers"] + 1:indexes["Enhancements"]])
        limitations_end = next(
            (i for i in range(indexes["Limitations"] + 1, len(section)) if section[i].strip() == "Creating New Power Sets"),
            len(section),
        )
        result.append({
            "id": slug(name),
            "name": name,
            "governingAbility": metadata.get("Governing Ability", ""),
            "abilityOptions": ability_options,
            "associatedConditions": metadata.get("Associated Conditions", ""),
            "defaultDamage": metadata.get("Default Damage", ""),
            "abilityScoreBonus": metadata.get("Ability Score Bonus", ""),
            "tacticalRole": metadata.get("Tactical Role", ""),
            "limitationNote": metadata.get("Limitation Note", ""),
            "description": description,
            "coreTrack": core,
            "powers": powers,
            "utilities": utilities,
            "enhancements": bullet_entries(section[indexes["Enhancements"] + 1:indexes["Limitations"]]),
            "limitations": bullet_entries(section[indexes["Limitations"] + 1:limitations_end]),
        })
    return result


def parse_general_utilities(lines):
    result = []
    for tier, names in GENERAL_UTILITIES.items():
        marker = next(i for i, line in enumerate(lines) if line.startswith(f"Tier {tier} General Utilities Available"))
        end_marker = next(
            (i for i in range(marker + 1, len(lines)) if lines[i].startswith(f"Tier {tier + 1} General Utilities Available")),
            len(lines),
        )
        section = lines[marker + 1:end_marker]
        starts = []
        cursor = 0
        for name in names:
            index = next(i for i in range(cursor, len(section)) if section[i].strip() == name)
            starts.append((index, name))
            cursor = index + 1
        for number, (start, name) in enumerate(starts):
            end = starts[number + 1][0] if number + 1 < len(starts) else len(section)
            body_lines = section[start + 1:end]
            body = block_text(body_lines)
            prerequisite_line = next((normalize(line) for line in body_lines if line.strip().startswith("Prerequisite:")), "")
            prerequisite = prerequisite_line.removeprefix("Prerequisite:").strip()
            result.append({
                "id": slug(name), "name": name, "tier": tier, "type": "General Utility",
                "action": "Varies", "prerequisite": prerequisite, "creationCost": 1, "text": body,
            })
    return result


def audit(power_sets, utilities):
    errors = []
    if len(power_sets) != 37:
        errors.append(f"Expected 37 Power Sets, found {len(power_sets)}")
    if len(utilities) != 36:
        errors.append(f"Expected 36 General Utilities, found {len(utilities)}")
    for power_set in power_sets:
        if len(power_set["coreTrack"]) != 4:
            errors.append(f'{power_set["name"]}: expected 4 Core Track entries, found {len(power_set["coreTrack"])}')
        if not power_set["powers"]:
            errors.append(f'{power_set["name"]}: no Combat Powers found')
        if not power_set["utilities"]:
            errors.append(f'{power_set["name"]}: no set utilities found')
        if not power_set["enhancements"]:
            errors.append(f'{power_set["name"]}: no Enhancements found')
        if not power_set["limitations"]:
            errors.append(f'{power_set["name"]}: no Limitations found')
    if errors:
        raise ValueError("\n".join(errors))


def write_module(output_path, power_sets, utilities):
    framework = {
        "creationCosts": {
            "Core Track 1": 1, "Core Track 2": 2, "Core Track 3": 3, "Core Track 4": 3,
            "Tier 1 Branch": 1, "Tier 2 Branch": 2, "Tier 3 Branch": 3,
            "Utility": 1, "Two Enhancements": 1,
        },
        "minimumBaseline": "At least one Core Track purchase, two At-Will Powers, and one Encounter Power.",
        "advancement": "Levels 2-10 grant one Power Pick each. Advancement purchases cost 1 Pick regardless of Tier. Odd-level Refinement picks stay within owned sets; even-level Expansion picks may add sets or Core Track steps.",
        "powerDice": "Power Die size is set by Campaign Rank. Individual entries specify the number of Power Dice.",
        "limitations": "Each Limitation grants 1 additional starting Power Pick, up to the Campaign Rank limit, and must directly constrain a Power or Power Set.",
        "coreTracks": "Core Track steps are purchased in order. Core 1 establishes the set and Tier 1 access; Core 2 expands scale and Tier 2 access; Core 3 provides World Class expression and Tier 3 access; Core 4 is the Apex capstone.",
        "powerTypes": [
            {"name": "At-Will", "text": "Available every Turn without limit."},
            {"name": "Encounter", "text": "Usable once per encounter and refreshes when the encounter ends."},
            {"name": "Daily", "text": "Usable once per day safely and refreshes during Downtime. Pushing beyond safe use costs 2 Edge and 1 Burnout."},
            {"name": "Utility", "text": "Noncombat movement, sensory, survival, communication, investigation, or support capability. Available freely unless its entry says otherwise."},
            {"name": "Passive", "text": "Always active, requiring no action or declaration."},
            {"name": "Sustained", "text": "Maintained with a Bonus Action at the start of each Turn. Only one Sustained Power may be active at a time, and it ends if the hero is Stunned, Incapacitated, or Unconscious."},
        ],
        "attackAndEffect": "Power attack rolls use the delivery ability plus Prowess: FIG for melee, DEX for ranged, INT for mental, and CHA for social. Power Effect Value is 10 + the Power Set's Governing Ability modifier + Prowess.",
        "tierAccess": "Street Level begins with Tier 1 and may buy Tier 2 from Level 5 through play. Mid-Level begins with Tier 2 and may buy Tier 3 from Level 5 through play. World Class begins with Tier 3 access. Power Die size always remains tied to Campaign Rank.",
        "enhancementRules": "One Power Pick buys two Enhancements. Common improvements include Range, Targeting, Protection, Duration, Precision, Concealment, Action Economy, and narrow Reliability. Enhancements cannot exceed Campaign Rank, remove a Limitation, or turn a Utility into a Branch Power.",
        "genericEnhancements": [
            {"name": "Range", "text": "Extend a power's effective range by one range band."},
            {"name": "Targeting", "text": "Allow a power to affect one additional adjacent target."},
            {"name": "Protection", "text": "Extend a defensive power to cover an ally within Close range."},
            {"name": "Duration", "text": "Extend a Utility from one minute to one scene, or from one scene to one encounter."},
            {"name": "Precision", "text": "Use a normally destructive power nonlethally without changing its mechanical effect."},
            {"name": "Concealment", "text": "Mask or mute a normally obvious power signature from casual observation."},
            {"name": "Action Economy", "text": "Activate a Utility as a Bonus Action instead of an Action."},
            {"name": "Reliability", "text": "Gain Advantage on a power attack in one narrow circumstance defined when selected."},
        ],
        "genericLimitations": [
            {"name": "Gear Dependent", "text": "Powers require removable gear or a focus and are lost when it is taken."},
            {"name": "Transformation Required", "text": "Powers function only in a defined altered form."},
            {"name": "Environmental Weakness", "text": "Powers weaken or fail in a specific common environment."},
            {"name": "Vulnerability", "text": "A defined force bypasses defenses, deals extra harm, or grants attackers Advantage."},
            {"name": "Uncontrolled", "text": "Powers may cause instability or collateral effects under stress."},
            {"name": "Exhausting", "text": "Defined uses beyond the baseline risk Burnout."},
            {"name": "Obvious Manifestation", "text": "Active powers cannot be concealed and identify the hero immediately."},
            {"name": "Emotional Trigger", "text": "Powers require a precisely defined emotional state or weaken without it."},
            {"name": "Recharge Requirement", "text": "Powers require a specific input such as sunlight, electricity, rest, fuel, or a material."},
        ],
        "powerStunts": "Spend 1 Edge to improvise a weaker, shorter, riskier, or more conditional use within an owned Power Set's theme. A Stunt never becomes a permanent free power; repeated desired capability should be purchased during advancement.",
        "emulation": "Spend 2 Edge and a Full Turn, once per day, to use one unpurchased Branch Power from an owned set at or below current Tier access. Resolve it at full printed effect, then make 1d20 + Governing Ability modifier + Prowess at Disadvantage vs. DC 20. Success gains 2 Burnout; failure sets Burnout to 5. Emulation is blocked at Burnout 5.",
        "powersAndGear": "Gear that creates superhuman capability is built as a Power Set. Ordinary access and equipment remain Gear or Merits. Gear-sourced Power Sets normally use both the Gear Dependent Limitation and the matching Flaw.",
        "newPowerSetDesign": "Define one clear concept and Governing Ability, build a four-step Core Track, then create 2-4 At-Wills, 2-4 Encounter Powers, 1-2 Daily or Apex Powers, 2-4 Utilities, 4-6 Enhancement pairs, and 2-4 optional Limitations. Use the campaign Power Die and require GM approval and playtesting.",
        "examplePowerSet": {
            "name": "Absorption",
            "governingAbility": "CON",
            "text": "A design example for absorbing physical impacts, energy, matter, or exotic effects and converting them into protection, healing, stored force, or redirected attacks. Its example Core Track expands absorbed damage types and stored energy; sample powers include Absorb & Redirect, Fortified Shell, Energy Conversion, Kinetic Burst, and Total Absorption; Utilities include Matter Conversion, Power Leech, and Adaptive Resilience. This entry demonstrates the custom Power Set process and is not part of the indexed 37-set catalog.",
        },
    }
    content = "// Generated from HEROIC 5e v2.4 Playtest Edition, Chapters 10-12.\n"
    content += "// Run scripts/extract_power_rules.py to regenerate after a rules update.\n\n"
    content += "export const powerFramework = " + json.dumps(framework, ensure_ascii=True, indent=2) + ";\n\n"
    content += "export const powerSetRules = " + json.dumps(power_sets, ensure_ascii=True, indent=2) + ";\n\n"
    content += "export const generalUtilityPowers = " + json.dumps(utilities, ensure_ascii=True, indent=2) + ";\n"
    output_path.write_text(content, encoding="ascii")


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: extract_power_rules.py <source.pdf> [output.js]")
    pdf_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("src/power-data.js")
    lines = extract_pdf_lines(pdf_path)
    power_sets = parse_power_sets(lines)
    utilities = parse_general_utilities(lines)
    audit(power_sets, utilities)
    write_module(output_path, power_sets, utilities)
    print(f"Generated {output_path} with {len(power_sets)} Power Sets, "
          f"{sum(len(item['powers']) for item in power_sets)} Combat Powers, "
          f"{sum(len(item['utilities']) for item in power_sets)} Set Utilities, and "
          f"{len(utilities)} General Utilities.")


if __name__ == "__main__":
    main()
