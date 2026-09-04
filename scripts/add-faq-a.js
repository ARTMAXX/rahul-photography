// Add FAQ section + FAQPage JSON-LD to 3 standalone blog posts.
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
    file: "src/app/blog/food-photography-restaurants/page.tsx",
    faqs: [
      ["How much does restaurant food photography cost in India?",
       "Menu shoots typically range from Rs 15,000 for a small cafe set to Rs 60,000+ for full multi-page menus with drinks. Many studios quote per dish for delivery-app packages, so you only pay for what you list."],
      ["How do you photograph food for Zomato and Swiggy listings?",
       "Delivery-app dishes need a clean, bright, consistent look: same plate family, a 45-degree or top-down angle, visible garnish and steam, and crops that survive mobile thumbnail size. Consistency across the menu reads as professionalism and lifts order rates."],
      ["What equipment do you need for restaurant food photography?",
       "A 50mm or macro lens, one large diffused light source (a window with a diffusion panel works), white and black bounce cards, and a tripod. The craft is in styling and timing — shooting within seconds of plating while steam and gloss are alive."],
      ["How often should a restaurant update its food photos?",
       "Whenever the menu changes, seasonally, or at minimum yearly. Listings and menus with fresh, professional photos consistently earn higher click-through and order rates than years-old smartphone images."],
    ],
  },
  {
    file: "src/app/blog/beverage-photography-glass-splash/page.tsx",
    faqs: [
      ["How do you photograph a beverage bottle professionally?",
       "Glass is lit through its edges and reflections, never directly: strip boxes behind and beside the bottle draw clean contour lines, a diffused backlight passes through the liquid for color glow, and black flags in front of the camera absorb stray reflections."],
      ["Are splash photographs a single shot or composited?",
       "Most commercial splash images are multi-plate composites: a hero frame of the bottle perfectly lit, separate high-speed splash passes, and a post-production blend. It is the standard studio approach — a single capture rarely nails bottle, splash, and droplets at once."],
      ["What is the fake condensation trick for beverage photography?",
       "A glycerin-and-water mix spritzed in fine droplets holds beading shape for hours under hot studio lights, where real condensation melts in minutes. It reads as genuine chill in the final image and is standard practice in beverage advertising."],
      ["What background works best for beverage photography?",
       "Dark backgrounds with bright contour edges for premium spirits and luxury positioning; bright, fresh backgrounds with water droplets and fruit for juices and mixers. The lighting geometry changes with the choice — edges lit bright on dark, shaped dark on white."],
    ],
  },
  {
    file: "src/app/blog/how-to-photograph-products-ecommerce/page.tsx",
    faqs: [
      ["How do I photograph products for e-commerce at home?",
       "One window with diffusion, a white sweep or large white card, and your phone on a tripod will beat most DIY attempts. Lock exposure and white balance, keep the product filling about 85% of the frame, and shoot every SKU from the same height and distance."],
      ["What is the best lighting setup for product photos?",
       "One large, diffused key light at roughly 45 degrees, a white bounce card opposite for shadow fill, and — if the surface is reflective — a second small light for a rim edge. Avoid mixing daylight with tungsten room light; mixed color temperature is the #1 DIY mistake."],
      ["What size and format should e-commerce product images be?",
       "Amazon: at least 1600px on the longest edge for zoom, pure white main image, JPEG under 10MB. Flipkart: 1000x1000px minimum. Shopify/DTC: 2048x2048px square, WebP or JPEG optimized to 100-200KB for fast mobile loads."],
      ["Should a small brand DIY product photos or hire a professional?",
       "DIY works for early validation with this guide's process. Hire a professional when you hit marketplace scale, need consistent catalogs of 20+ SKUs, or the product's premium perception depends on image quality — the conversion and return-rate math usually pays for the shoot."],
    ],
  },
];

for (const { file, faqs } of jobs) {
  let c = fs.readFileSync(file, "utf8");
  if (c.includes("FAQPage")) { console.log("skip (already has FAQ):", file); continue; }
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
