// Add FAQ to remaining 2 standalone posts + fix beverage schema bugs.
const fs = require("fs");

const FAQ_SECTION = (faqs) =>
  `        {/* FAQ — People-Also-Ask targeting */}\n` +
  `        <section className="mb-16">\n` +
  `          <h2 className="h-section mt-16 mb-6">Frequently Asked Questions</h2>\n` +
  `          <div className="space-y-8">\n` +
  faqs.map(([q, a]) =>
    `            <div>\n              <h3 className="font-serif text-lg text-white leading-snug">${q}</h3>\n              <p className="t-body mt-2">${a}</p>\n            </div>\n`
  ).join("") +
  `          </div>\n        </section>\n\n`;

const FAQ_SCHEMA = (faqs) =>
  `    {\n      "@type": "FAQPage",\n      "mainEntity": [\n` +
  faqs.map(([q, a]) =>
    `        { "@type": "Question", "name": "${q}", "acceptedAnswer": { "@type": "Answer", "text": "${a}" } },\n`
  ).join("") +
  `      ],\n    },\n`;

const jobs = [
  {
    file: "src/app/blog/product-photography-lighting-setup/page.tsx",
    faqs: [
      ["What is a basic product photography lighting setup?",
       "One large diffused key light at about 45 degrees to the product, a white bounce card opposite for shadow fill, and a rim light behind for edge separation. This three-element recipe adapts to almost any product by changing the size and distance of the sources."],
      ["What does negative fill do in a lighting setup?",
       "Negative fill is a black flag or card placed opposite the key light that absorbs stray bounce instead of adding it. It deepens the shadow side of the product, adding the contrast and dimension that separates premium packshots from flat catalog snapshots."],
      ["Should you start with one light or multiple lights?",
       "Start with one light and move it — distance, angle, and modifier size change everything. Add a rim light when the product blends into the background, and gradient scrims or strip boxes only once the key relationship is dialed in."],
      ["Are strobes or LED lights better for product photography?",
       "Color-stable studio strobes win for stills: consistent color temperature across thousands of flashes and more power for clean depth of field. LEDs suit hybrid photo-video shoots. Cheap LEDs drift in color as they heat, which breaks batch consistency."],
    ],
  },
  {
    file: "src/app/blog/product-photography-small-business-india/page.tsx",
    faqs: [
      ["How much does product photography cost for a small business in India?",
       "A basic 20-SKU catalog typically starts around Rs 20,000, with larger catalogs and campaign work quoted per project. Regional studios (Dehradun, Jaipur, Indore) usually price 30-50% below Delhi or Bangalore for equivalent quality."],
      ["Is professional product photography worth it for a small brand?",
       "If you sell online, your photos are the entire store experience. Better images lift conversion, reduce 'looks different in person' returns, and can be reused across the website, marketplaces, social, and ads — one shoot feeds every channel."],
      ["Can I photograph my products myself with a phone?",
       "Yes, for early-stage testing: a window, white sweep, and tripod get you usable images. The limits show at scale — color consistency across SKUs, reflective surfaces, and marketplace zoom standards are where professional studios earn their fee."],
      ["How many photos do I need per product?",
       "Six to eight: hero, both profiles, top-down, detail macro, scale reference, and one lifestyle frame. Complete angle coverage is directly linked to higher conversion and lower return rates in e-commerce data."],
    ],
  },
];

for (const { file, faqs } of jobs) {
  let c = fs.readFileSync(file, "utf8");
  if (c.includes("FAQPage")) { console.log("skip:", file); continue; }
  const anchor = "        {/* About the Author */}";
  if (!c.includes(anchor)) throw new Error("anchor missing in " + file);
  c = c.replace(anchor, FAQ_SECTION(faqs) + anchor);
  const graphEnd = "\n  ],\n};";
  const idx = c.indexOf(graphEnd);
  if (idx === -1) throw new Error("graph end missing in " + file);
  c = c.slice(0, idx) + "\n" + FAQ_SCHEMA(faqs) + c.slice(idx);
  fs.writeFileSync(file, c, "utf8");
  console.log("FAQ added:", file);
}

// Fix beverage post JSON-LD bugs: duplicate "author" key + stray quote separators.
const bev = "src/app/blog/beverage-photography-glass-splash/page.tsx";
let b = fs.readFileSync(bev, "utf8");
const dupAuthor = `      "author": {\n        "@type": "Person",\n        "name": "Rahul Chanda",\n        "url": absoluteUrl("/about"),\n      },\n`;
if (b.includes(dupAuthor)) {
  b = b.replace(dupAuthor, "");
  console.log("beverage: duplicate author removed");
}
const stray = b.match(/<span>' <\/span>/g);
if (stray) {
  b = b.split("<span>' </span>").join("<span>&middot;</span>");
  console.log("beverage: fixed", stray.length, "stray separator(s)");
}
fs.writeFileSync(bev, b, "utf8");
