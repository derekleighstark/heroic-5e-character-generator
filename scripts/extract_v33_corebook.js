const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, "rules", "HEROIC_5e_v3_3_RAW.md");
const output = path.join(root, "src", "v33-corebook-data.js");

function cleanTitle(value) {
  return String(value || "")
    .replace(/\\/g, "")
    .replace(/\*\*/g, "")
    .replace(/#+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slug(value) {
  return cleanTitle(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";
}

function pushSection(chapter, section) {
  if (!chapter || !section) return;
  section.body = section.body.trim();
  chapter.sections.push(section);
}

const markdown = fs.readFileSync(source, "utf8").replace(/\r\n/g, "\n");
const lines = markdown.split("\n");
const chapters = [];
let currentChapter = null;
let currentSection = null;
let seenMainTitle = false;

for (const line of lines) {
  const heading = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
  if (!heading) {
    if (currentSection) currentSection.body += `${line}\n`;
    continue;
  }

  const level = heading[1].length;
  const title = cleanTitle(heading[2]);

  if (level === 1) {
    if (!seenMainTitle && /^HEROIC 5e$/i.test(title)) {
      seenMainTitle = true;
      continue;
    }
    pushSection(currentChapter, currentSection);
    currentChapter = { id: slug(title), title, sections: [] };
    chapters.push(currentChapter);
    currentSection = { id: slug(`${title}-overview`), level: 2, title: "Overview", body: "" };
    continue;
  }

  if (!currentChapter) {
    currentChapter = { id: "front-matter", title: "Front Matter", sections: [] };
    chapters.push(currentChapter);
  }

  pushSection(currentChapter, currentSection);
  currentSection = { id: slug(`${currentChapter.title}-${title}`), level, title, body: "" };
}

pushSection(currentChapter, currentSection);

const glossary = [];
const glossaryChapter = chapters.find(chapter => chapter.title.toLowerCase() === "glossary");
if (glossaryChapter) {
  const glossaryText = glossaryChapter.sections.map(section => section.body).join("\n");
  for (const match of glossaryText.matchAll(/\*\*([^*]+?)\*\*\s*(?:—|â€”|-)\s*([^\n]+)/g)) {
    glossary.push({ term: cleanTitle(match[1]), definition: match[2].trim() });
  }
}

const data = {
  title: "HEROIC 5e",
  version: "Playtest v3.3",
  sourceFile: path.basename(source),
  generatedAt: new Date().toISOString(),
  chapterCount: chapters.length,
  glossary,
  chapters
};

fs.writeFileSync(
  output,
  `// Generated from rules/HEROIC_5e_v3_3_RAW.md by scripts/extract_v33_corebook.js.\n` +
    `// Do not edit by hand; update the Markdown source and regenerate.\n\n` +
    `export const v33Corebook = Object.freeze(${JSON.stringify(data, null, 2)});\n`,
  "utf8"
);

console.log(`Generated ${path.relative(root, output)} with ${chapters.length} chapters and ${glossary.length} glossary terms.`);
