import json, re, sys
from pathlib import Path
from pypdf import PdfReader

ABILITIES = ["str", "dex", "con", "fig", "int", "wis", "cha", "per"]
HEADING = re.compile(r"The\s+([A-Z][A-Za-z /-]+?)\s*[—-]\s*(Street Level|Mid-Level|World Class)")

def clean(text):
    swaps = {"—": " - ", "–": "-", "‑": "-", "’": "'", "“": '"', "”": '"', "●": "-"}
    for a, b in swaps.items(): text = text.replace(a, b)
    text = re.sub(r"\n\s*\d{3}\s*(?=\n)", "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r" *\n *", "\n", text)
    return re.sub(r"\n{3,}", "\n\n", text).strip()

def field(block, pattern, default=""):
    m = re.search(pattern, block, re.S | re.I)
    return clean(m.group(1)) if m else default

def section(block, name, following):
    boundary = "|".join(re.escape(x) for x in following)
    return field(block, rf"(?:^|\n){re.escape(name)}\s*\n(.*?)(?=\n(?:{boundary})\b|\Z)")

def main():
    if len(sys.argv) != 3: raise SystemExit("Usage: extract_ready_templates.py <book.pdf> <output.js>")
    reader = PdfReader(sys.argv[1])
    text = "\n".join((p.extract_text() or "") for p in reader.pages[456:532])
    matches = list(HEADING.finditer(text))
    out = []
    for i, match in enumerate(matches):
        block = clean(text[match.start():matches[i + 1].start() if i + 1 < len(matches) else len(text)])
        ability_part = field(block, r"Ability Scores\s*(.*?)(?=Origin \([^\n]+\) applies|Active Defense)")
        pairs = re.findall(r"(-?\d+)\s*/\s*[+-]\d+", ability_part)
        abilities = {key: int(value) for key, value in zip(ABILITIES, pairs[:8])}
        summary = re.search(r"Class:\s*([^|\n]+)\s*\|\s*Origin:\s*([^|\n]+).*?Speed:\s*([^|\n]+).*?HP:\s*(\d+).*?PRO:\s*\+?(\d+).*?Starting Edge:\s*(\d+).*?Save Training:\s*([^\n]+)", block, re.S)
        ev = re.search(r"Effect Value \(([A-Z]+)\).*?=\s*(\d+)", block)
        calling = field(block, r"Calling\s*[-—]\s*([^\n]+)")
        out.append({
            "name": f"The {match.group(1).strip()} - {match.group(2)}",
            "archetype": match.group(1).strip(), "rank": match.group(2), "level": 1,
            "className": clean(summary.group(1)) if summary else "Bruiser",
            "origin": clean(summary.group(2)) if summary else "",
            "speed": clean(summary.group(3)) if summary else "30 ft",
            "hp": int(summary.group(4)) if summary else 10,
            "prowess": int(summary.group(5)) if summary else 2,
            "edge": int(summary.group(6)) if summary else 3,
            "saveTraining": clean(summary.group(7)) if summary else "",
            "powerAbility": ev.group(1).lower() if ev else "str",
            "effectValue": int(ev.group(2)) if ev else 10,
            "abilities": abilities, "calling": calling,
            "powerSets": section(block, "Power Sets", ["Powers", "Class Features", "Skills"]),
            "powers": section(block, "Powers", ["Class Features", "Skills", "Talents"]),
            "classFeatures": section(block, "Class Features *(Level 1 only)", ["Skills", "Talents", "Calling"]),
            "skills": section(block, "Skills", ["Talents", "Calling", "Merits & Flaws"]),
            "talents": section(block, "Talents *(Level 1 - two total)", ["Calling", "Merits & Flaws"]),
            "merits": field(block, r"Merits:\s*(.*?)(?=\nFlaws:|\Z)"),
            "flaws": field(block, r"Flaws:\s*(.*?)(?=\nPlaying this hero:|\Z)"),
            "description": field(block, re.escape(match.group(0)) + r"\s*(.*?)(?=\nClass:)"),
            "playing": field(block, r"Playing this hero:\s*(.*)$"),
            "text": block
        })
    Path(sys.argv[2]).write_text("// Generated from Heroic 5e v2.4 Chapter Eighteen.\nexport const readyTemplates = Object.freeze(" + json.dumps(out, indent=2, ensure_ascii=True) + ");\n", encoding="utf-8")
    print(f"Wrote {len(out)} ready-to-play templates")

if __name__ == "__main__": main()
