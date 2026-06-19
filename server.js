const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const portFlag = process.argv.indexOf("--port");
const requestedPort = portFlag >= 0 ? Number(process.argv[portFlag + 1]) : Number(process.env.PORT);
const port = Number.isFinite(requestedPort) && requestedPort > 0 ? requestedPort : 5585;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function send(res, status, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store"
  });
  res.end(body);
}

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const cleanPath = decoded === "/" ? "/index.html" : decoded;
  const candidate = path.resolve(root, `.${cleanPath}`);
  const relative = path.relative(root, candidate);

  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return candidate;
}

const server = http.createServer((req, res) => {
  const requestedFile = resolveFile(req.url || "/");
  if (!requestedFile) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(requestedFile, (statError, stats) => {
    const fileToServe = !statError && stats.isFile()
      ? requestedFile
      : path.join(root, "index.html");

    fs.readFile(fileToServe, (readError, contents) => {
      if (readError) {
        send(res, 404, "Not found");
        return;
      }

      const ext = path.extname(fileToServe).toLowerCase();
      send(res, 200, contents, mimeTypes[ext] || "application/octet-stream");
    });
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`HEROIC 5e character generator running at http://127.0.0.1:${port}`);
});
