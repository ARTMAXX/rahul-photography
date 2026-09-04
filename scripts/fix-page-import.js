// Clean the unused generateReviewSchema import from the homepage.
const fs = require("fs");
const file = "src/app/page.tsx";
let c = fs.readFileSync(file, "utf8");
const re = /import\s*\{\s*generateBreadcrumbSchema\s*,\s*generateReviewSchema\s*,\s*generateWebsiteGraphSchema\s*\}\s*from\s*"@\/lib\/schemas";/;
if (!re.test(c)) throw new Error("import pattern not found");
c = c.replace(re, 'import {\n  generateBreadcrumbSchema,\n  generateWebsiteGraphSchema\n} from "@/lib/schemas";');
fs.writeFileSync(file, c, "utf8");
console.log("import cleaned: true");
