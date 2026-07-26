"""Generate the browser corebook dataset from an official HEROIC 5e PDF.

Usage:
  python scripts/extract_pdf_corebook.py path/to/HEROIC_5e.pdf
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import pdfplumber
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "corebook-data.js"
CHAPTER_NUMBERS = (
    "ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN|ELEVEN|TWELVE|"
    "THIRTEEN|FOURTEEN|FIFTEEN|SIXTEEN|SEVENTEEN|EIGHTEEN|NINETEEN|TWENTY"
)


def slug(value: str) -> str:
    clean = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return clean or "section"


def clean_title(value: str) -> str:
    value = re.sub(
        rf"^(CHAPTER (?:{CHAPTER_NUMBERS}))(?=[A-Z])",
        r"\1: ",
        value.strip(),
    )
    return re.sub(r"\s+", " ", value)


def load_existing_glossary() -> list[dict[str, str]]:
    if not OUTPUT.exists():
        return []
    source = OUTPUT.read_text(encoding="utf-8")
    match = re.search(r"Object\.freeze\((\{.*\})\);\s*$", source, re.S)
    if not match:
        return []
    return json.loads(match.group(1)).get("glossary", [])


def top_level_destinations(reader: PdfReader) -> list[tuple[str, int]]:
    result: list[tuple[str, int]] = []
    for item in reader.outline:
        if isinstance(item, list):
            continue
        try:
            result.append((clean_title(item.title), reader.get_destination_page_number(item)))
        except (AttributeError, ValueError):
            continue
    return result


def clean_page_text(text: str, printed_page: int) -> str:
    lines = []
    footer = re.compile(r"HEROIC 5E.*Playtest v\d+(?:\.\d+)+.*\d+\s*$", re.I)
    for line in text.replace("\r", "").splitlines():
        line = line.rstrip()
        if footer.search(line):
            continue
        lines.append(line)
    body = "\n".join(lines).strip()
    return body or f"Page {printed_page} contains primarily visual or tabular material."


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Pass the source HEROIC 5e PDF path.")
    source = Path(sys.argv[1]).resolve()
    if not source.exists():
        raise SystemExit(f"PDF not found: {source}")

    reader = PdfReader(source)
    metadata_title = str((reader.metadata or {}).get("/Title") or "HEROIC 5e")
    version_match = re.search(r"Playtest v\d+(?:\.\d+)+", metadata_title, re.I)
    version = version_match.group(0) if version_match else "Playtest"
    destinations = top_level_destinations(reader)
    if not destinations:
        raise SystemExit("The PDF does not contain a usable chapter outline.")

    with pdfplumber.open(source) as pdf:
        pages = [clean_page_text(page.extract_text(x_tolerance=2, y_tolerance=3) or "", index + 1)
                 for index, page in enumerate(pdf.pages)]

    chapters = []
    for index, (title, start_page) in enumerate(destinations):
        end_page = destinations[index + 1][1] if index + 1 < len(destinations) else len(pages)
        if end_page <= start_page:
            continue
        sections = [
            {
                "id": slug(f"{title}-page-{page_index + 1}"),
                "level": 2,
                "title": f"Page {page_index + 1}",
                "body": pages[page_index],
            }
            for page_index in range(start_page, end_page)
        ]
        chapters.append({"id": slug(title), "title": title, "sections": sections})

    data = {
        "title": "HEROIC 5e",
        "version": version,
        "sourceFile": source.name,
        "generatedAt": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "chapterCount": len(chapters),
        "glossary": load_existing_glossary(),
        "chapters": chapters,
    }
    OUTPUT.write_text(
        f"// Generated from {source.name} by scripts/extract_pdf_corebook.py.\n"
        "// Do not edit by hand; regenerate from the official PDF.\n\n"
        f"export const corebook = Object.freeze({json.dumps(data, indent=2, ensure_ascii=False)});\n",
        encoding="utf-8",
    )
    print(
        f"Generated {OUTPUT.relative_to(ROOT)} with {len(chapters)} chapters, "
        f"{sum(len(chapter['sections']) for chapter in chapters)} page sections, "
        f"and {len(data['glossary'])} glossary terms."
    )


if __name__ == "__main__":
    main()
