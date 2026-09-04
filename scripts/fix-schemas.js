// Remove dead generateReviewSchema (invalid bare AggregateRating), fix the
// misleading FAQPage comment, and repair mojibake comment separators.
const fs = require("fs");
const file = "src/lib/schemas.ts";
let c = fs.readFileSync(file, "utf8");

// 1) Remove the dead generateReviewSchema function block.
const startMarker = "// REVIEW / TESTIMONIAL SCHEMA";
const start = c.indexOf(startMarker);
if (start === -1) throw new Error("review marker not found");
// find the end of the function: the first "\n}\n" after start
const endRel = c.indexOf("\n}\n", start);
if (endRel === -1) throw new Error("function end not found");
const end = endRel + 3;
c = c.slice(0, start) +
  "// REVIEW / TESTIMONIAL SCHEMA — REMOVED (was dead code).\n" +
  "// The old generateReviewSchema() emitted a bare AggregateRating with a\n" +
  "// hardcoded 4.9 — invalid per Google's guidelines (no itemReviewed, and\n" +
  "// self-serving business ratings are ineligible for rich results).\n" +
  "// If reviews markup is ever needed, nest real Review objects (with named\n" +
  "// reviewers matching on-page testimonials) inside the LocalBusiness node.\n" +
  c.slice(end);

// 2) Fix the misleading FAQPage comment.
c = c.replace(
  /\/\/ QA PAGE SCHEMA[^\n]*\n\/\/ Note: FAQ rich results were retired[^\n]*\n\/\/ QAPage is the modern replacement[^\n]*\n/,
  "// QA PAGE SCHEMA  —  For FAQ section\n" +
  "// Note: Google restricts FAQ rich results to gov/health sites (since Aug\n" +
  "// 2023), so this will NOT produce FAQ rich snippets in Google. It is kept\n" +
  "// because Bing/other engines still use it and it documents page structure.\n"
);

// 3) Repair mojibake comment separators ("¢½ = broken ✔) and count fixes.
const before = (c.match(/"\u00A2\u00BD/g) || []).length;
c = c.split('"\u00A2\u00BD').join("\u2713");

fs.writeFileSync(file, c, "utf8");
console.log("removed dead function: true");
console.log("mojibake separators repaired:", before);
console.log("FAQ comment updated:", c.includes("gov/health sites"));
