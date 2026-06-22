const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const files = ["index.html", "styles.css", "app.js", "cloud-config.js"];
const dirs = ["src", "sample-characters"];

function browserConfig() {
  return `window.__HEROIC_CLOUD_CONFIG__ = Object.freeze(${JSON.stringify({
    url: process.env.SUPABASE_URL || "",
    publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY || "",
    siteUrl: process.env.SITE_URL || process.env.URL || ""
  })});\n`;
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(source, target);
    } else {
      copyFile(source, target);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) copyFile(path.join(root, file), path.join(dist, file));
for (const dir of dirs) copyDir(path.join(root, dir), path.join(dist, dir));
fs.writeFileSync(path.join(dist, "cloud-config.js"), browserConfig(), "utf8");

console.log(`Built HEROIC 5e app to ${dist}`);
