import json
import re
import sys
from pathlib import Path


ABILITIES = ["STR", "DEX", "CON", "FIG", "INT", "WIS", "CHA", "PER"]
SECTION_HEADINGS = ["Core Track", "Combat Powers", "Set-Specific Utility Powers", "Enhancements", "Limitations"]


def normalize(value):
    replacements = {
        "\u2014": " - ", "\u2013": "-", "\u2011": "-", "\u00d7": "x", "\u2192": "->",
        "\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"', "\u2026": "...",
        "\u00b7": " · ",
    }
    value = str(value or "")
    for source, target in replacements.items():
        value = value.replace(source, target)
    value = re.sub(r"\\([+*=\-])", r"\1", value)
    value = value.replace("**", "").replace("*", "")
    return re.sub(r"\s+", " ", value).strip()


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", normalize(value).lower()).strip("-")


def block_text(lines):
    paragraphs = []
    current = ""
    for raw in lines:
        line = raw.strip()
        if not line or line.startswith("| :----"):
            if current:
                paragraphs.append(current)
                current = ""
            continue
        if line.startswith("####") or line.startswith("###"):
            continue
        bullet = re.match(r"^(?:\*|-)\s+(.*)$", line)
        clean = normalize(bullet.group(1) if bullet else line)
        if not clean:
            continue
        if bullet:
            if current:
                paragraphs.append(current)
            paragraphs.append(f"- {clean}")
            current = ""
        elif current:
            current += f" {clean}"
        else:
            current = clean
    if current:
        paragraphs.append(current)
    return "\n".join(paragraphs)


def metadata_from(section):
    metadata = {}
    for line in section:
        match = re.match(r"^\|\s*(?:\*\*)?([^|*]+?)(?:\*\*)?\s*\|\s*(.*?)\s*\|\s*$", line.strip())
        if not match:
            continue
        key = normalize(match.group(1))
        if key in {"Governing Ability", "Associated Conditions", "Default Damage", "Ability Score Bonus", "Limitation Note", "Special Mechanic", "Tactical Role"}:
            metadata[key] = normalize(match.group(2))
    governing = metadata.get("Governing Ability", "")
    options = [ability.lower() for ability in ABILITIES if re.search(rf"\b{ability}\b", governing)]
    return metadata, options


def heading_indexes(section):
    result = {}
    for heading in SECTION_HEADINGS:
        markers = {heading, f"#### {heading}"}
        result[heading] = next((i for i, line in enumerate(section) if line.strip() in markers or (heading == "Core Track" and line.strip().startswith("#### Core Track"))), None)
        if result[heading] is None:
            raise ValueError(f"Missing {heading}")
    return result


def parse_core(name, lines):
    starts = []
    pattern = re.compile(rf"^{re.escape(name)}\s+([1-4])\s*$")
    for index, line in enumerate(lines):
        match = pattern.match(line.strip())
        if match:
            starts.append((index, int(match.group(1))))
    entries = []
    for number, (start, level) in enumerate(starts):
        end = starts[number + 1][0] if number + 1 < len(starts) else len(lines)
        body = block_text(lines[start + 1:end])
        entries.append({
            "id": f"core-{level}", "name": f"{name} {level}", "level": level,
            "tier": 1 if level == 1 else 2 if level == 2 else 3,
            "type": "Apex Passive" if level == 4 else "Passive", "action": "Passive",
            "prerequisite": "" if level == 1 else f"{name} {level - 1}",
            "creationCost": 1 if level == 1 else 2 if level == 2 else 3,
            "text": body,
        })
    return entries


ENTRY = re.compile(
    r"^\*\*(.+?)\*\*\s*[\u2014-]\s*Tier\s+([123])(?:\s+Apex)?\s*\u00b7\s*"
    r"(At-Will|Encounter|Daily|Utility|Passive|Sustained)"
    r"(?:\s*\u00b7\s*(.*?))?\s*$"
)


def parse_entries(lines):
    starts = []
    for index, line in enumerate(lines):
        match = ENTRY.match(line.strip())
        if match:
            starts.append((index, match))
    entries = []
    for number, (start, match) in enumerate(starts):
        end = starts[number + 1][0] if number + 1 < len(starts) else len(lines)
        body_lines = lines[start + 1:end]
        prerequisite = ""
        for line in body_lines:
            clean = normalize(line)
            if clean.startswith("Prerequisite:"):
                prerequisite = clean.removeprefix("Prerequisite:").split(" · Trigger:", 1)[0].strip()
                break
        tier = int(match.group(2))
        power_type = match.group(3)
        entries.append({
            "id": slug(match.group(1)), "name": normalize(match.group(1)), "tier": tier,
            "type": power_type, "action": normalize(match.group(4) or power_type),
            "prerequisite": prerequisite, "creationCost": 1 if power_type == "Utility" else tier,
            "text": block_text(body_lines),
        })
    return entries


def parse_bullets(lines):
    entries = []
    for line in lines:
        match = re.match(r"^\*\s+(?:\*\*)?(.+?):(?:\*\*)?\s*(.*)$", line.strip())
        if match:
            entries.append({"name": normalize(match.group(1)), "text": f"{normalize(match.group(1))}: {normalize(match.group(2))}"})
    return entries


def parse_sets(markdown):
    lines = markdown.splitlines()
    starts = []
    for index, line in enumerate(lines):
        if line.startswith("### ") and any("| Governing Ability" in candidate for candidate in lines[index + 1:index + 12]):
            starts.append((index, normalize(line[4:])))
    result = []
    for number, (start, name) in enumerate(starts):
        if number + 1 < len(starts):
            end = starts[number + 1][0]
        else:
            end = next(
                (
                    index
                    for index in range(start + 1, len(lines))
                    if lines[index].startswith("# ") or lines[index].startswith("### ")
                ),
                len(lines),
            )
        section = lines[start:end]
        try:
            indexes = heading_indexes(section)
        except ValueError as error:
            raise ValueError(f"{name}: {error}") from error
        metadata, ability_options = metadata_from(section[:indexes["Core Track"]])
        table_end = max((i for i, line in enumerate(section[:indexes["Core Track"]]) if line.strip().startswith("|")), default=0)
        governing_heading = next((i for i, line in enumerate(section) if line.strip() == "#### Governing Ability"), indexes["Core Track"])
        description = block_text(section[table_end + 1:governing_heading])
        result.append({
            "id": slug(name), "name": name,
            "governingAbility": metadata.get("Governing Ability", ""), "abilityOptions": ability_options,
            "associatedConditions": metadata.get("Associated Conditions", ""),
            "defaultDamage": metadata.get("Default Damage", ""),
            "abilityScoreBonus": metadata.get("Ability Score Bonus", ""),
            "tacticalRole": metadata.get("Tactical Role", ""),
            "limitationNote": metadata.get("Limitation Note", ""),
            "description": description,
            "coreTrack": parse_core(name, section[indexes["Core Track"] + 1:indexes["Combat Powers"]]),
            "powers": parse_entries(section[indexes["Combat Powers"] + 1:indexes["Set-Specific Utility Powers"]]),
            "utilities": parse_entries(section[indexes["Set-Specific Utility Powers"] + 1:indexes["Enhancements"]]),
            "enhancements": parse_bullets(section[indexes["Enhancements"] + 1:indexes["Limitations"]]),
            "limitations": parse_bullets(section[indexes["Limitations"] + 1:]),
        })
    return result


def load_existing(path):
    source = path.read_text(encoding="utf-8")
    power_marker = "export const powerSetRules = "
    power_start = source.index(power_marker) + len(power_marker)
    power_end = source.index(";\n\nexport const generalUtilityPowers", power_start)
    current_sets = json.loads(source[power_start:power_end])
    framework_marker = "export const powerFramework = "
    framework_start = source.index(framework_marker) + len(framework_marker)
    framework_end = source.index(";\n\nexport const powerSetRules", framework_start)
    framework = json.loads(source[framework_start:framework_end])
    utility_marker = "export const generalUtilityPowers = "
    utility_start = source.index(utility_marker) + len(utility_marker)
    utility_end = source.rindex(";")
    utilities = json.loads(source[utility_start:utility_end])
    return framework, current_sets, utilities


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: extract_power_rules_markdown.py <v3.7 markdown> [output.js]")
    markdown_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("src/power-data.js")
    framework, current_sets, utilities = load_existing(output_path)
    published_sets = parse_sets(markdown_path.read_text(encoding="utf-8"))
    absorption = next((item for item in current_sets if item["id"] == "absorption"), None)
    power_sets = published_sets + ([absorption] if absorption else [])
    if len(published_sets) != 40:
        raise ValueError(f"Expected 40 indexed v3.7 Power Sets, found {len(published_sets)}")
    for power_set in power_sets:
        for group in ["coreTrack", "powers", "utilities", "enhancements", "limitations"]:
            if not power_set[group]:
                raise ValueError(f"{power_set['name']} has no {group}")
    framework["minimumBaseline"] = "Suggested baseline: one Core Track purchase, two At-Will Powers, and one Encounter Power. This is optional guidance, not a requirement."
    framework["attackAndEffect"] = "Basic attacks use 1d20 + delivery modifier + Prowess. Power attacks use 1d20 + delivery modifier + Governing Ability modifier + Prowess. Delivery is FIG for melee, DEX for ranged, INT for mental, and CHA for social. Power Effect Value is 10 + Governing Ability modifier + Prowess."
    framework["campaignRank"] = "Campaign Rank is fixed when the campaign begins and never increases through character advancement."
    framework["damageSources"] = "Damage Sources are Mundane, Technological, Powered, Mystical, Cosmic, and Environmental. Source matters only when a rule specifically references it."
    framework["validTargets"] = "Verbal Powers require hearing; linguistic content has Disadvantage without a shared language; comprehension requires a sapient mind; mind-affecting Powers do not normally affect machines; Telepathy bypasses line of sight but not language; physical sensory projections can be recorded, mind-only illusions cannot."
    content = "// Generated from HEROIC 5e Playtest v3.7 raw Markdown, Chapters 10-12.\n"
    content += "// Run scripts/extract_power_rules_markdown.py to regenerate after a rules update.\n\n"
    content += "export const powerFramework = " + json.dumps(framework, ensure_ascii=True, indent=2) + ";\n\n"
    content += "export const powerSetRules = " + json.dumps(power_sets, ensure_ascii=True, indent=2) + ";\n\n"
    content += "export const generalUtilityPowers = " + json.dumps(utilities, ensure_ascii=True, indent=2) + ";\n"
    with output_path.open("w", encoding="ascii", newline="\n") as output_file:
        output_file.write(content)
    print(f"Generated {output_path} with {len(published_sets)} indexed sets plus {1 if absorption else 0} example set.")


if __name__ == "__main__":
    main()
