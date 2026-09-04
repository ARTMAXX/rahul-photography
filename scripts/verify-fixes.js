// Final verification of all SEO fixes.
const fs = require("fs");
const read = (f) => fs.readFileSync(f, "utf8");

const s = read("src/lib/schemas.ts");
console.log("1. dead generateReviewSchema function removed:", !/export function generateReviewSchema/.test(s));
console.log("   AggregateRating literal removed:", !/"@type": "AggregateRating"/.test(s));
console.log("   FAQ comment corrected:", s.includes("gov/health sites"));
console.log("   mojibake separators repaired:", !s.includes('"\u00A2\u00BD'));

const p = read("src/app/page.tsx");
console.log("2. page.tsx dead import removed:", !p.includes("generateReviewSchema"));

const r = read("src/app/robots.ts");
console.log("3. robots.ts allows /_next/static:", r.includes('"/_next/data/"') && !r.includes('"/_next/"'));

const t = read("src/lib/site.ts");
const m = t.match(/title: "([^"]+)"/);
console.log("4. default title:", JSON.stringify(m && m[1]), "=> chars:", m && m[1].length);

// full-project mojibake rescan (all suspicious latin-1 confusables)
let bad = 0;
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const path = d + "/" + f;
    const st = fs.statSync(path);
    if (st.isDirectory()) walk(path);
    else if (/\.(tsx?|jsx?)$/.test(f)) {
      const lines = read(path).split(/\r?\n/);
      lines.forEach((l, i) => {
        const weird = [...l].filter((ch) => {
          const q = ch.codePointAt(0);
          return (q >= 0x80 && q <= 0x9f) || (q >= 0xc0 && q <= 0xff && q !== 0xd7) || q === 0xa2;
        });
        if (weird.length) { bad++; console.log("   STILL CORRUPT:", path + ":" + (i + 1)); }
      });
    }
  }
})("src");
console.log("5. full src/ mojibake rescan clean:", bad === 0);
