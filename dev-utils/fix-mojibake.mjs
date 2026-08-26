/**
 * fix-mojibake.mjs — repairs double-encoded UTF-8 artifacts ("â€˜"-style)
 * left in source files by an earlier copy/encoding accident.
 * Reads as UTF-8, replaces known mojibake sequences with the intended
 * Unicode characters, writes back as UTF-8 (no BOM change).
 *
 * Usage: node dev-utils/fix-mojibake.mjs
 */
import fs from "node:fs";

const FILES = [
  "src/components/sections/redesign/WorkProof.tsx",
  "src/components/sections/redesign/CaseStudies.tsx",
  "src/app/gallery/page.tsx",
];

// Ordered longest-first so multi-byte prefixes are handled before partials.
const MAP = [
  ["â”€â”€", "────"], // box-drawing double
  ["â”€", "─"],
  ["â€”", "—"], // em dash
  ["â€“", "–"], // en dash
  ["â†’", "→"], // right arrow
  ["Â·", "·"], // middle dot
];

let totalFixes = 0;
for (const rel of FILES) {
  const src = fs.readFileSync(rel, "utf8");
  let out = src;
  let count = 0;
  for (const [bad, good] of MAP) {
    let idx = out.indexOf(bad);
    while (idx !== -1) {
      count++;
      idx = out.indexOf(bad, idx + good.length);
    }
    out = out.split(bad).join(good);
  }
  if (count > 0) {
    fs.writeFileSync(rel, out, "utf8");
    console.log(`${rel}: ${count} sequence(s) repaired`);
    totalFixes += count;
  } else {
    console.log(`${rel}: clean`);
  }
}
console.log(`Done. ${totalFixes} replacements.`);
