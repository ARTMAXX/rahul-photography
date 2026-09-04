// Remove duplicate bare "author" key (before "publisher") from 4 standalone
// blog schema graphs — the richer author block (jobTitle + image) is kept.
const fs = require("fs");
const files = [
  "src/app/blog/food-photography-restaurants/page.tsx",
  "src/app/blog/how-to-photograph-products-ecommerce/page.tsx",
  "src/app/blog/product-photography-lighting-setup/page.tsx",
  "src/app/blog/product-photography-small-business-india/page.tsx",
];
const re = /"author": \{[^{}]*\},\n(\s*)"publisher"/;
for (const f of files) {
  let c = fs.readFileSync(f, "utf8");
  const had = /"author"/.test(c);
  const count = (c.match(/"author": \{/g) || []).length;
  if (count !== 2) { console.log("UNEXPECTED author count in", f, ":", count); continue; }
  c = c.replace(re, '"publisher"');
  fs.writeFileSync(f, c, "utf8");
  console.log("deduped author:", f, "| before:", had);
}
