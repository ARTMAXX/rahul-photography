import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { generateQAPageSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import FAQContent from "./faq-content";

// ——— FAQ Data with Schema Ready ————————————————————————————————————
const faqs = [
  {
    q: "What types of photography do you offer?",
    a: "I specialize in product photography, food & beverage photography, fashion & footwear campaigns, and high-end retouching. Each project is tailored to the brand's visual identity.",
  },
  {
    q: "How do I book a shoot?",
    a: "Reach out via the contact form, WhatsApp, or email with your project details. I'll prepare a custom quote within 24 hours. Once confirmed with a 50% deposit, your shoot date is locked in.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "Standard delivery is 5—10 business days after the shoot. Rush delivery (24—48 hours) is available on request for an additional fee.",
  },
  {
    q: "How many images are included per project?",
    a: "This depends on the scope agreed in the project brief — Product Photography includes 20—50 edited high-res images and Food & Beverage includes 15—30 hero shots. The exact count is defined before the shoot begins.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. I'm based in Dehradun and available for shoots across India. Travel logistics and costs are discussed during the quoting stage.",
  },
  {
    q: "Can I request revisions?",
    a: "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
  },
  {
    q: "Do you provide raw or unedited files?",
    a: "Raw files are not delivered. Every final image goes through my retouching pipeline to ensure consistency and quality that represent the brand.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, UPI, and credit card payments. A 50% deposit secures your date, with the balance due before final delivery.",
  },
  {
    q: "What happens if I need to cancel a booked shoot?",
    a: "Deposits are non-refundable for cancellations made within 7 days of the scheduled shoot date — that production time is reserved exclusively for you.",
  },
  {
    q: "Can you work with tight deadlines?",
    a: "Yes. Rush turnaround (24—48 hours) is available. Contact me directly to discuss your timeline and any additional rush fees.",
  },
  {
    q: "Do you offer package deals or retainers?",
    a: "Yes. Monthly content packages and long-term retainers are available for brands needing consistent photography. Let's discuss your needs.",
  },
  // ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
  // LOCAL UTTARAKHAND QUESTIONS — sourced from real Google autocomplete +
  // "People also ask" data collected 2026-09-11 for the Dehradun/Uttarakhand
  // market (scripts/keyword-research/data/question-plan-2026-09-11.md).
  // ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
  {
    q: "How much does product photography cost in Dehradun?",
    a: "Product photography in Dehradun for small businesses and e-commerce sellers typically starts at ₹10,000 per session (10 SKUs). Scope — packshots, lifestyle scenes, or catalogue sets — moves the final quote. Contact me for a same-day estimate based on your SKU count.",
  },
  {
    q: "Who is the best photographer in Dehradun?",
    a: "The 'best' photographer depends on what you're shooting. For commercial needs — product, food or brand photography — look for a specialist with a portfolio in that exact category. I focus on commercial and product photography for brands across Uttarakhand; my portfolio and Google reviews (5.0) show the work behind that claim.",
  },
  {
    q: "What is the 20-60-20 rule in photography?",
    a: "The 20-60-20 rule is a budgeting guideline: roughly 20% of a project's budget goes to pre-production (briefing, mood boards, styling), 60% to the shoot itself, and 20% to post-production (editing, retouching, delivery). It helps brands allocate realistically instead of under-budgeting post-work.",
  },
  {
    q: "How much does it cost to get a photographer?",
    a: "In Uttarakhand, rates vary widely by type: a portrait or headshot session from ₹4,000, product photography from ₹10,000, food/café from ₹12,000, commercial campaigns from ₹12,000–40,000, and videography rates quoted per project. Always ask what's included — editing, usage rights, number of final images.",
  },
  {
    q: "How many photos for a 2 hour shoot?",
    a: "For a two-hour session expect roughly 100–250 captures, and typically 15–40 professionally edited final images depending on the type of shoot. Product catalogue work delivers more images per hour; directed portraiture produces fewer, higher-polish selects.",
  },
  {
    q: "What are some good places for a photoshoot in Dehradun?",
    a: "Dehradun's top shoot spots include Rajaji National Park outskirts for green backdrops, Forest Research Institute for stately architecture, Sahastradhara for rocky streams, Robber's Cave for cinematic caves, and the mall road/Kandoli area in Mussoorie (45 min away) for mountain scenery. I also arrange studio sets for product and food shoots.",
  },
  {
    q: "How much is a photographer for one day?",
    a: "A full-day commercial photographer in Uttarakhand typically charges ₹15,000–₹40,000 depending on scope, equipment, travel, and post-production included. My day rates are quoted per project after I see your brief — I can confirm exact pricing within 24 hours.",
  },
  {
    q: "How much does a photographer charge for a day?",
    a: "Day rates for photography in the Dehradun/Uttarakhand market run ₹8,000 (single-location event coverage) to ₹40,000+ (multi-location commercial campaigns with assistant, lighting, and retouching). Ask for a written scope before comparing quotes.",
  },
  {
    q: "How much is a photograph photoshoot in Dehradun?",
    a: "A professional photoshoot in Dehradun starts around ₹4,000 for individual headshots and scales with scope: couples/portraits from ₹8,000, product sessions from ₹10,000, and full brand campaigns from ₹15,000. I send a fixed quote before you commit — no hidden fees.",
  },
  {
    q: "What is commercial photography?",
    a: "Commercial photography is imagery created to sell, promote, or represent a business — product packshots, food & beverage shots for menus and ads, brand campaigns, corporate headshots, and e-commerce catalogue images. Unlike portrait or event work, it's brief-driven and optimised for a brand's marketing channels.",
  },
  {
    q: "How much does a videographer charge per day in Uttarakhand?",
    a: "Videography day rates in Uttarakhand typically range ₹8,000–₹25,000 for commercial work (product reels, brand films, café promos), plus optional equipment and post-editing. I quote per project based on the video's use, duration targets, and locations.",
  },
  {
    q: "How much does a food photography shoot cost?",
    a: "Food & beverage shoots in Dehradun/Uttarakhand start at ₹12,000 per session and cover hero shots for menus, social content, and delivery-app listings. Multi-day menu or café rebrand projects are quoted by scope.",
  },
  {
    q: "Where to shoot in Rishikesh or Mussoorie for a brand shoot?",
    a: "Rishikesh offers the Ganges riverside, Laxman Jhula viewpoints, and jungle resorts for lifestyle and wedding content; Mussoorie gives mountain cafés, colonial-era hotels, and Kempty Falls for destination shoots. I travel across Uttarakhand for shoots and handle location permits and logistics.",
  },
  {
    q: "What should I ask a photographer before booking?",
    a: "Always ask: what's the full price and what's excluded, how many edited images are included, who owns the usage rights, what's the delivery timeline, what happens with reshoots, and whether raw files are included. Getting these in writing upfront prevents surprises.",
  },
  {
    q: "How important is lighting in product photography?",
    a: "Lighting is the single biggest factor in product photography — it controls texture, reflections, colour accuracy, and perceived value. Studio-controlled lighting with softboxes and diffusion gives clean, repeatable results that phone or window-light shots can't match. That's why studio-based product photography produces higher-converting images.",
  },
];

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// FAQ PAGE SCHEMA (FAQPage for Google)
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// NOTE: FAQPage rich results were retired by Google on 7 May 2026.
// FAQPage is the correct Schema.org type for FAQ content lists.
const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateBreadcrumbSchema([
      { label: "Home", url: absoluteUrl("/") },
      { label: "FAQ", url: absoluteUrl("/faq") },
    ]),
    generateQAPageSchema(faqs.map((f) => ({ q: f.q, a: f.a }))),
  ],
};

export const metadata: Metadata = {
  title: "FAQ — Commercial Photography by Rahul Chanda",
  description:
    "Common questions about commercial photography services, pricing, turnaround times, and booking process with Rahul Chanda.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Commercial Photography Services",
    description: "Questions answered about product, food & beverage, and commercial photography services.",
    url: absoluteUrl("/faq"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "FAQ — Commercial Photography Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Commercial Photography Dehradun",
    description: "Common questions about pricing, turnaround, and booking with Rahul Chanda Photography.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent faqs={faqs} />
    </main>
  );
}
