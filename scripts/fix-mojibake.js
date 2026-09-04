// Fix double-encoded (mojibake) characters. Node writes UTF-8 (no BOM).
const fs = require("fs");

const fixes = [
  // user-visible: Ã‚Â· -> ·  (case-study category labels)
  { file: "src/components/sections/redesign/CaseStudies.tsx", from: "\u00C3\u201A\u00C2\u00B7", to: "\u00B7" },
  // user-visible: corrupted arrow -> →  (Explore service CTA)
  { file: "src/components/sections/redesign/ServicesGrid.tsx", from: "\u00E2\u0022\u00A0\u0027", to: "\u2192" },
  // comment separators: ÃÆ—Ã‚½ (broken ✔) -> ✓
  { file: "src/components/sections/redesign/CaseStudies.tsx", from: "\u00C3\u0192\u2014\u00C3\u201A\u00BD", to: "\u2713", global: true },
  { file: "src/app/faq/faq-content.tsx", from: "\u00C3\u0192\u2014\u00C3\u201A\u00BD", to: "\u2713", global: true },
  // comment: corrupted â… -> →
  { file: "src/components/sections/redesign/ServicesShowcase.tsx", from: "\u00E2\u2026", to: "\u2192", global: true },
  // comment: corrupted quotes " ' -> →  (challenge → work → result)
  { file: "src/components/sections/redesign/CaseStudies.tsx", from: "\u0022\u00A0\u0027", to: "\u2192", global: true },
  // comment: Ã‚§ -> §
  { file: "src/middleware.ts", from: "\u00C3\u201A\u00C2\u00A7", to: "\u00A7" },
  // comment separators: â"¢ (broken ✓) -> ✓
  { file: "src/app/faq/page.tsx", from: "\u00E2\u0022\u00A2", to: "\u2713", global: true },
  { file: "src/components/sections/redesign/FAQSection.tsx", from: "\u00E2\u0022\u00A2", to: "\u2713", global: true },
  // comment: corrupted arrow "°Ë† -> →
  { file: "src/components/ui/motion-footer.tsx", from: "\u0022\u00B0\u00CB\u2020", to: "\u2192" },
];

const byFile = new Map();
for (const f of fixes) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}

for (const [file, list] of byFile) {
  let content = fs.readFileSync(file, "utf8");
  for (const { from, to, global: all } of list) {
    let count = 0;
    while (content.includes(from)) {
      content = all ? content.split(from).join(to) : content.replace(from, to);
      count++;
      if (count > 500) break;
    }
    if (count) console.log(`${file}: replaced ${JSON.stringify(from)} x${all ? "all" : 1} (${count} pass${count > 1 ? "es" : ""})`);
  }
  fs.writeFileSync(file, content, "utf8");
}
console.log("done");
