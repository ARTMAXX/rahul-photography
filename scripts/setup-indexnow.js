/**
 * Generates a stable IndexNow API key and writes it to:
 *   - public/{key}.txt  (Bing fetches this to verify the key)
 *   - wrangler.toml    (env var, used by the submit route)
 *
 * The key is generated once and stored in a local file so it doesn't
 * change between builds (changing the key resets Bing's tracking state).
 *
 * Bing IndexNow spec: https://www.indexnow.org/
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const KEY_FILE = path.join(PROJECT_ROOT, ".indexnow-key");
const WRANGLER_TOML = path.join(PROJECT_ROOT, "wrangler.toml");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

function generateKey() {
  return crypto.randomBytes(16).toString("hex");
}

function getKey() {
  if (fs.existsSync(KEY_FILE)) {
    const k = fs.readFileSync(KEY_FILE, "utf8").trim();
    if (/^[a-f0-9]{16,128}$/i.test(k)) return k;
  }
  const k = generateKey();
  fs.writeFileSync(KEY_FILE, k + "\n", "utf8");
  return k;
}

function writeKeyFile(key) {
  // 1. Place {key}.txt in public/ so Bing can verify the key
  const target = path.join(PUBLIC_DIR, `${key}.txt`);
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, key, "utf8");
    console.log(`[indexnow] wrote public/${key}.txt`);
  } else {
    console.log(`[indexnow] public/${key}.txt already exists`);
  }
}

function updateWranglerToml(key) {
  // 2. Ensure wrangler.toml has INDEXNOW_KEY = "<key>" as a non-secret env var.
  //    The key is not secret by IndexNow spec — it's published in plain text at /{key}.txt.
  let toml = fs.readFileSync(WRANGLER_TOML, "utf8");
  const line = `INDEXNOW_KEY = "${key}"`;
  if (toml.includes("INDEXNOW_KEY =")) {
    // Replace the existing line (in case the key rotated)
    toml = toml.replace(/INDEXNOW_KEY = "[^"]*"/, line);
    console.log(`[indexnow] updated INDEXNOW_KEY in wrangler.toml`);
  } else {
    // Append into the existing [vars] block, or create one
    if (/^\[vars\][\s\S]*?\n\w/m.test(toml)) {
      toml = toml.replace(/(\[vars\][\s\S]*?)\n(\[\w)/, `$1\n${line}\n$2`);
    } else {
      // No [vars] block — append one before any other [section]
      toml = `[vars]\n${line}\n` + toml;
    }
    console.log(`[indexnow] added INDEXNOW_KEY to wrangler.toml`);
  }
  fs.writeFileSync(WRANGLER_TOML, toml, "utf8");
}

function main() {
  const key = getKey();
  writeKeyFile(key);
  updateWranglerToml(key);
  console.log(`[indexnow] using key ${key.slice(0, 4)}…${key.slice(-4)}`);
}

main();
