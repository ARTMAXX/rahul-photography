// Scan source files for mojibake sequences (double-encoded UTF-8 artifacts)
const fs = require("fs");
const path = require("path");
const out = [];
const patterns = [
  { name: "double-encoded middle dot (Ã‚Â·)", re: /\u00C3\u0082\u00C2\u00B7|\u00C2\u00B7\u00C2\u00B7/ },
  { name: "literal Ã‚", re: /\u00C3\u0082/ },
  { name: "broken arrow (â\u0080\")", re: /\u00E2\u20AC\u009D|\u00E2\u20AC\u009C/ },
  { name: "literal Ã prefix", re: /\u00C3[\u0080-\u00BF]/ },
];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(tsx?|jsx?|css|scss|md|json)$/.test(f) && !/node_modules/.test(p)) {
      const buf = fs.readFileSync(p);
      // detect mojibake at byte level: C3 82 (Ã) C2 B7 (·) etc.
      const str = buf.toString("utf8");
      const lines = str.split(/\r?\n/);
      lines.forEach((line, i) => {
        for (const { name, re } of patterns) {
          const m = line.match(re);
          if (m) {
            out.push(`${p}:${i + 1} [${name}] ${line.trim().slice(0, 160)}`);
            break;
          }
        }
      });
    }
  }
})("src");
fs.writeFileSync("temp_analysis/mojibake-scan.txt", out.join("\n") || "NO MATCHES");
console.log("matches:", out.length);
