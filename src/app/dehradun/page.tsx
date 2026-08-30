import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { generateQAPageSchema } from "@/lib/schemas";

// ============================================================================
// METADATA — Targeted for commercial photography intent in Dehradun
// ============================================================================
export const metadata: Metadata = {
  title: "Commercial Photographer in Dehradun, India",
  description:
    "Rahul Chanda — Dehradun-based commercial photographer for product, food & beverage, cafe/restaurant, footwear, and brand campaigns. On-location across Uttarakhand with in-house retouching. Book a shoot: +91 70789 39475.",
  alternates: { canonical: "/dehradun" },
  openGraph: {
    title: "Commercial Photographer Dehradun — Product, Food & Cafe Photography",
    description:
      "Freelance commercial photographer in Dehradun for product, food & beverage, cafe/restaurant, footwear, and brand campaigns. On-location across Uttarakhand. In-house retouching.",
    url: absoluteUrl("/dehradun"),
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Photographer Dehradun — Rahul Chanda",
    description:
      "Product, food, cafe & brand photography in Dehradun. On-location across Uttarakhand.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
  robots: { index: true, follow: true },
};

// ============================================================================
// LOCAL SERVICE AREAS — Specific neighborhoods + nearby cities
// ============================================================================
const SERVICE_AREAS = [
  // Dehradun neighborhoods (high-intent local searches)
  "Rajpur Road",
  "Kanwali & GMS Road",
  "Ballupur & Sahastradhara Road",
  "Dharampur & Prem Nagar",
  "Race Course & Parade Ground",
  "Clock Tower & Paltan Bazaar",
  "Indira Nagar & Vasant Vihar",
  "IT Park & Doon IT Park",
  "Clement Town & Raipur",
  // Uttarakhand cities
  "Mussoorie",
  "Rishikesh",
  "Haridwar",
  "Haldwani",
  "Roorkee",
  // Travel
  "Delhi NCR (scheduled travel)",
];

// ============================================================================
// CORE SERVICES — Optimized for search intent + conversion
// ============================================================================
const LOCAL_SERVICES = [
  {
    id: "product-photography",
    title: "Product Photography",
    slug: "/services#product",
    description:
      "E-commerce catalogues, white-background packshots, lifestyle product imagery, and creative hero shots for Shopify, Amazon, and D2C brands.",
    keywords: [
      "product photography dehradun",
      "ecommerce product photography dehradun",
      "packshot photography dehradun",
      "product photographer dehradun",
    ],
    icon: "📦",
  },
  {
    id: "food-beverage-photography",
    title: "Food & Beverage Photography",
    slug: "/services#food",
    description:
      "Menu photography, restaurant campaigns, beverage splash & glass work, ingredient styling — engineered to make kitchens and bars sell.",
    keywords: [
      "food photographer dehradun",
      "food photography dehradun",
      "beverage photography dehradun",
      "restaurant photography dehradun",
      "cafe photography dehradun",
    ],
    icon: "🍽️",
  },
  {
    id: "cafe-restaurant-photography",
    title: "Cafe & Restaurant Photography",
    slug: "/services#cafe",
    description:
      "Interior & ambience shots, food plating, lifestyle dining moments, barista action, and brand content packages for cafes, bakeries, and restaurants across Dehradun & Mussoorie.",
    keywords: [
      "cafe photographer dehradun",
      "restaurant photographer dehradun",
      "cafe photography dehradun",
      "restaurant photography mussoorie",
      "hospitality photography dehradun",
    ],
    icon: "☕",
  },
  {
    id: "footwear-fashion-photography",
    title: "Footwear & Fashion Photography",
    slug: "/services#footwear",
    description:
      "On-location shoots for footwear labels and apparel brands — detail macros, lifestyle lookbooks, and campaign imagery for brands in the Doon Valley and beyond.",
    keywords: [
      "footwear photographer dehradun",
      "fashion photographer dehradun",
      "footwear photography dehradun",
      "apparel photography dehradun",
    ],
    icon: "👟",
  },
  {
    id: "commercial-campaigns",
    title: "Commercial Campaigns",
    slug: "/services#campaigns",
    description:
      "Art-directed campaign shoots with full production — brief, set design, lighting, talent, retouch, delivery. For brands launching products or seasonal collections.",
    keywords: [
      "commercial photographer dehradun",
      "brand photographer dehradun",
      "advertising photographer dehradun",
      "campaign photography dehradun",
    ],
    icon: "🎬",
  },
  {
    id: "brand-content",
    title: "Brand Content Packages",
    slug: "/services#content",
    description:
      "Rolling libraries of on-brand imagery for social, web, and print — shot economically in monthly/quarterly batches, not expensive one-offs.",
    keywords: [
      "brand content dehradun",
      "social media photography dehradun",
      "content creation dehradun",
    ],
    icon: "📱",
  },
];

// ============================================================================
// NEIGHBORHOOD-SPECIFIC CONTENT — Captures "near me" intent
// ============================================================================
const NEIGHBORHOOD_INTEL = [
  {
    area: "Rajpur Road",
    context:
      "Premium retail, cafes, and lifestyle brands — ideal for high-end product, food, and interior shoots.",
    landmarks: "The Four Points, Cafe 37, Doon's Kitchen, premium boutiques",
  },
  {
    area: "IT Park / Doon IT Park",
    context:
      "D2C brands, SaaS companies, and startup offices needing product and team content.",
    landmarks: "Startup incubators, co-working spaces, tech offices",
  },
  {
    area: "Mussoorie",
    context:
      "Heritage hotels, hill-top cafes, and destination restaurants — lifestyle and hospitality photography.",
    landmarks: "The Savoy, Rokeby Manor, Char Dukan, Mall Road cafes",
  },
  {
    area: "Rishikesh / Haridwar",
    context:
      "Wellness brands, yoga studios, riverside cafes, and spiritual tourism hospitality.",
    landmarks: "Parmarth Niketan, riverside cafes, ashram cafes, wellness retreats",
  },
];

// ============================================================================
// LOCAL FAQ — Mirrors actual client questions + keyword-rich answers
// ============================================================================
const LOCAL_FAQ = [
  {
    q: "Do you travel outside Dehradun for shoots?",
    a: "Yes. Based in Dehradun, I shoot on location across Uttarakhand — Mussoorie, Rishikesh, Haridwar, Haldwani — as well as Delhi NCR when travel is planned in. Travel fees apply for multi-day or distant locations.",
  },
  {
    q: "Where do shoots take place?",
    a: "Shoots happen at your location — your cafe, restaurant, office, store, home, warehouse, or any venue that fits the brief. I bring all professional lighting, backgrounds, and equipment to you. No studio rental needed.",
  },
  {
    q: "Do you shoot e-commerce catalogue volumes for Dehradun brands?",
    a: "Yes. Batch catalogue work is a core part of my workflow — 20 to 200+ SKUs with consistent lighting, naming conventions, and retouch so your product pages look uniform across Shopify, Amazon, and your own site.",
  },
  {
    q: "Can you shoot at my cafe or restaurant during business hours?",
    a: "Absolutely. I work around your service hours — early morning before opening, between lunch/dinner, or after close. For food shoots, we typically need 2–3 hours during a quiet window. I coordinate with your kitchen team directly.",
  },
  {
    q: "How do I book a shoot in Dehradun?",
    a: "Call +91 70789 39475 or send a WhatsApp message. Enquiries are answered within 24 hours. We'll discuss your brief, timeline, location, and get you a clear quote with deliverables and usage rights.",
  },
  {
    q: "Do you work with marketing agencies in Dehradun?",
    a: "Yes. I regularly partner with Dehradun and Delhi NCR agencies for campaign production, providing photography and retouching as a white-label or credited vendor.",
  },
];

// ============================================================================
// SCHEMA MARKUP — ProfessionalService + LocalBusiness + Service + FAQPage
// ============================================================================
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": absoluteUrl("/dehradun#localbusiness"),
  name: siteConfig.name,
  alternateName: "Rahul Chanda Photography",
  url: absoluteUrl("/dehradun"),
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl(siteConfig.ogImagePath),
  description:
    "Commercial photographer in Dehradun specializing in product, food & beverage, cafe/restaurant, footwear, and brand campaign photography. On-location service across Uttarakhand with in-house retouching.",
  telephone: siteConfig.contact.telephone,
  email: siteConfig.contact.email,
  priceRange: siteConfig.contact.priceRange,
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.latitude,
    longitude: siteConfig.contact.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Dehradun" },
    { "@type": "City", name: "Mussoorie" },
    { "@type": "City", name: "Rishikesh" },
    { "@type": "City", name: "Haridwar" },
    { "@type": "State", name: "Uttarakhand" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: absoluteUrl("/contact"),
    telephone: siteConfig.contact.telephone,
    availableLanguage: ["English", "Hindi"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  },
  sameAs: [
    siteConfig.contact.instagram,
    siteConfig.contact.googleBusiness,
    "https://www.behance.net/rahulchandaphotography",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Photography Services in Dehradun",
    itemListElement: LOCAL_SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.name,
          "@id": absoluteUrl("/dehradun#localbusiness"),
        },
        areaServed: {
          "@type": "City",
          name: "Dehradun",
        },
        serviceType: s.title,
      },
    })),
  },
};



// Breadcrumb schema for the page hierarchy
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dehradun Commercial Photographer",
      item: absoluteUrl("/dehradun"),
    },
  ],
};

// Person schema for the photographer (E-E-A-T)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chanda",
  alternateName: "Rahul Chanda Photography",
  jobTitle: "Commercial Product Photographer",
  url: absoluteUrl("/"),
  image: absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
  sameAs: [
    siteConfig.contact.instagram,
    siteConfig.contact.googleBusiness,
    "https://www.behance.net/rahulchandaphotography",
  ],
  knowsAbout: [
    "Product Photography",
    "Food Photography",
    "Beverage Photography",
    "Footwear Photography",
    "Commercial Photography",
    "High-End Retouching",
    "Brand Content Creation",
  ],
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    "@id": absoluteUrl("/dehradun#localbusiness"),
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  },
};

// ============================================================================
// COMPONENT
// ============================================================================
export default function DehradunPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* ===== STRUCTURED DATA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            Dehradun · On-Location · Uttarakhand
          </div>
          <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[20ch]">
            Commercial
            <br />
            photographer in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[65ch] mt-8 leading-relaxed">
            Rahul Chanda — freelance commercial photographer for <strong className="text-white">product</strong>,
            <strong className="text-white">food & beverage</strong>, <strong className="text-white">cafe & restaurant</strong>,
            <strong className="text-white">footwear</strong>, and <strong className="text-white">brand campaigns</strong>.
            Based in Dehradun, shooting on location across Uttarakhand with professional retouching.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#e83b2c] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#d63426] transition-colors duration-300"
              data-cursor="pointer"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`tel:${siteConfig.contact.telephone}`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
              data-cursor="pointer"
            >
              Call +91 70789 39475
            </a>
            <a
              href={`https://wa.me/917078939475?text=${encodeURIComponent(
                "Hi Rahul, I need a commercial photographer in Dehradun for product/food/cafe photography."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 py-2.5 px-5 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              WhatsApp me
            </a>
          </div>
        </div>
      </section>

      {/* ===== ON-LOCATION SERVICE ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            On-Location Service
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[30ch]">
            Professional shoots,
            <br />
            <span className="italic text-[#e83b2c]">wherever you are in Dehradun</span>.
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-[65ch]">
            No studio needed. I bring professional strobes, continuous lights, modifiers, backgrounds, and
            grip equipment to your location — whether it's a cafe on Rajpur Road, a restaurant in Mussoorie,
            a footwear factory in Sahastradhara, or your home kitchen in Rishikesh.
          </p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60">
            {[
              "✓ Full lighting kit (strobes, continuous, modifiers)",
              "✓ White/coloured seamless backgrounds",
              "✓ Tethered shooting — you approve selects live",
              "✓ Food styling kit & beverage props available",
              "✓ In-house retouching & colour grading included",
              "✓ Print + web delivery with usage rights",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="text-[#e83b2c] shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href={`tel:${siteConfig.contact.telephone}`}
              className="inline-flex items-center gap-2 border border-white/15 py-2.5 px-5 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              +91 70789 39475
            </a>
            <a
              href={`https://wa.me/917078939475?text=${encodeURIComponent(
                "Hi Rahul, I run a brand in Dehradun and want to discuss a shoot."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 py-2.5 px-5 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              WhatsApp me
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Deep-linked to services page ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Services in Dehradun
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[25ch]">
            What brands book in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-14">
            {LOCAL_SERVICES.map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="group border-t border-white/10 pt-6 hover:border-t-[#e83b2c]/50 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-serif text-white group-hover:text-[#e83b2c] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/50 mt-3 leading-relaxed text-sm">{s.description}</p>
                <span className="inline-block mt-4 text-xs text-[#e83b2c]/80 font-medium uppercase tracking-wide">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOOD INTEL — Hyper-local relevance ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Local Knowledge
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Where I <span className="italic text-[#e83b2c]">shoot</span> in Dehradun.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {NEIGHBORHOOD_INTEL.map((n) => (
              <div key={n.area} className="border border-white/10 p-6 rounded-xl hover:border-white/20 transition-colors duration-300">
                <h3 className="text-lg font-serif text-white flex items-center gap-2">
                  <span className="text-[#e83b2c]">📍</span>
                  {n.area}
                </h3>
                <p className="text-white/50 mt-3 text-sm leading-relaxed">{n.context}</p>
                <p className="text-white/30 mt-2 text-xs">Near: {n.landmarks}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="border border-white/15 py-2 px-4 rounded-full text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors duration-300"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-white/50 mt-8 max-w-[65ch] leading-relaxed">
            Based in Dehradun, I shoot on location across the Doon Valley, Mussoorie, Rishikesh, and Haridwar.
            For clients outside Uttarakhand, Delhi NCR travel is routinely scheduled — ask for a production plan.
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              n: "01",
              t: "Discovery",
              d: "Brief, references and art direction settle how your product should feel — scope, timeline, and investment estimate within a day.",
            },
            {
              n: "02",
              t: "Production",
              d: "A focused on-location shoot — I bring all lighting, styling, and art direction to your space or any venue that fits the brief.",
            },
            {
              n: "03",
              t: "Post",
              d: "Finals are selected, colour-graded and retouched in-house to match your brand's exact tone and palette.",
            },
            {
              n: "04",
              t: "Delivery",
              d: "High-res finals in print and digital formats, web-optimised — with licensing and usage rights agreed upfront.",
            },
          ].map((s) => (
            <div key={s.n} className="border-t border-white/10 pt-6">
              <span className="text-[#e83b2c] text-sm font-medium">{s.n}</span>
              <h3 className="text-2xl font-serif text-white mt-3">{s.t}</h3>
              <p className="text-white/50 mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LOCAL FAQ ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Local Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Booking a shoot in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h2>
          <div className="mt-12 space-y-0">
            {LOCAL_FAQ.map((item) => (
              <details
                key={item.q}
                className="group border-t border-white/10 py-6 last:border-b"
              >
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-white text-lg font-serif">
                  {item.q}
                  <span className="text-[#e83b2c] shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-white/50 mt-4 leading-relaxed max-w-[65ch]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FROM THE JOURNAL — internal links into blog cluster (SEO) ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            From the Journal
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[30ch]">
            How the work gets{" "}
            <span className="italic text-[#e83b2c]">made</span>.
          </h2>
          <p className="text-white/50 mt-6 max-w-[65ch] leading-relaxed">
            Field notes from real commercial shoots — the technique and
            judgment behind every delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-12">
            {[
              {
                href: "/blog/why-beverage-splash-photography-is-hard",
                title: "Why beverage splash photography is harder than it looks",
                desc: "Timing, viscosity, lighting — what goes into that hero splash frame.",
              },
              {
                href: "/blog/beverage-photography-glass",
                title: "Glass, liquid, and light: photographing premium beverages",
                desc: "Backlight, glycerin condensation, and controlled reflections.",
              },
              {
                href: "/blog/lighting-patterns-for-product-photography",
                title: "Three lighting patterns every product shoot needs",
                desc: "Key light, rim light, and negative fill — build any product mood.",
              },
              {
                href: "/blog/retouching-101",
                title: "Retouching 101: from raw files to deliverables",
                desc: "The four-stage pipeline behind every consistent delivery.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group border-t border-white/10 py-6 hover:border-t-[#e83b2c]/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-serif text-white group-hover:text-[#e83b2c] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/50 mt-2 text-sm leading-relaxed">
                  {post.desc}
                  <span className="inline-block ml-3 text-[#e83b2c]/80 text-xs uppercase tracking-wide">
                    Read →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEW GENERATION CTA — Soft prompt for GBP ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5 bg-gradient-to-b from-transparent via-[#e83b2c]/5 to-transparent">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Worked Together?
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Leave a <span className="italic text-[#e83b2c]">Google review</span>.
          </h2>
          <p className="text-white/50 mt-6 max-w-[50ch] mx-auto leading-relaxed">
            Honest reviews help other Dehradun brands find the right photographer.
            If we worked together, a quick note about your project type and experience means a lot.
          </p>
          <a
            href={siteConfig.contact.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-white/5 border border-white/15 py-3 px-8 rounded-full text-sm text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-300"
            data-cursor="pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#e83b2c]">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 12l2 2 4-4" />
            </svg>
            Review on Google Maps
          </a>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="relative w-full px-4 md:px-12 pb-28 pt-8">
        <div className="max-w-[1600px] mx-auto">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="pointer"
          >
            <span className="italic text-[#e83b2c]">
              Let&apos;s plan your shoot in Dehradun
            </span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]">→</span>
          </Link>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}