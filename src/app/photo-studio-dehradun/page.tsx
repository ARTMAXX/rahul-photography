import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import GbpMapEmbed from "@/components/ui/gbp-map-embed";
import { siteConfig, absoluteUrl } from "@/lib/site";
import ServiceCta from "@/components/ui/service-cta";

// ============================================================================
// METADATA — targets the "photo studio / photography studio dehradun" cluster
// (distinct intent from /dehradun, which targets "commercial photographer")
// ============================================================================
export const metadata: Metadata = {
  title: "Photo Studio in Dehradun | Product & Commercial Shoots",
  description:
    "Photo studio in Dehradun for product, food, footwear & brand shoots — professional lighting, in-house retouching. On-location across Uttarakhand; enquiries answered within 24h.",
  alternates: { canonical: "/photo-studio-dehradun" },
  openGraph: {
    title: "Photo Studio in Dehradun — Product, Food & Brand Shoots",
    description:
      "Purpose-built commercial photography studio in Dehradun. Professional lighting, tethered shooting, in-house retouching. On-location shoots across Uttarakhand.",
    url: absoluteUrl("/photo-studio-dehradun"),
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: absoluteUrl("/opt/og-image-homepage.jpg"),
        width: 1200,
        height: 630,
        alt: "Photo studio in Dehradun — Rahul Chanda Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Studio in Dehradun — Rahul Chanda",
    description:
      "Product, food, footwear & brand shoots from a commercial photography studio in Dehradun.",
    images: [absoluteUrl("/opt/og-image-homepage.jpg")],
  },
  robots: { index: false, follow: false },
  // Freshness signal — og:updated_time via top-level `other` (Next rejects
  // modifiedTime on og:type=website). Refresh ONLY on genuine content
  // revisions; do not churn this date on deploys.
  other: {
    "og:updated_time": "2026-10-22T09:30:00.000Z",
  },
};

// ============================================================================
// DATA — everything sourced from verified site facts (site.ts, GBP records)
// ============================================================================
const STUDIO_FAQ = [
  {
    q: "Where is the photo studio in Dehradun located?",
    a: "Rahul Chanda Photography is based in Dehradun, Uttarakhand. The studio works by appointment only — call +91 70789 39475 or send a WhatsApp message to fix a date, and directions will be shared once your slot is confirmed.",
  },
  {
    q: "What kinds of shoots happen in the studio?",
    a: "Commercial shoots only: e-commerce product and catalogue work, footwear, food & beverage styling, lookbook and fashion sets, and brand campaign productions. Every session is driven by your brief — the lighting setup, backgrounds, and styling are built around what your product needs to sell.",
  },
  {
    q: "How much does a studio shoot cost in Dehradun?",
    a: "Quotes are briefed per project and typically start around ₹12,000, scaling with shot volume, styling complexity, and usage rights. Every quote includes professional lighting, art direction, in-house retouching, and licensing — so you know the full cost before the shoot day.",
  },
  {
    q: "Do you shoot on location instead of the studio?",
    a: "Yes. Cafes, kitchens, showrooms, and factory floors across Dehradun, Mussoorie, Rishikesh, and Haridwar are regular shoot locations — the full lighting kit travels. Delhi NCR trips are routinely scheduled for campaign work.",
  },
  {
    q: "What is the turnaround time for a studio shoot?",
    a: "Selected frames are colour-graded and retouched in-house before delivery, with timelines agreed in the quote. Rush turnaround in 24–48 hours is possible when scheduled in advance.",
  },
  {
    q: "Can I visit the studio before booking a shoot?",
    a: "Yes. Book a slot by phone or WhatsApp and you're welcome to walk through your product, samples, and brief in person before the shoot date is locked.",
  },
];

const STUDIO_CAPABILITIES = [
  "Professional lighting — strobes, continuous heads, modifiers, and grip",
  "White, coloured, and textured shooting backgrounds for e-commerce standards",
  "Tethered capture — you approve selects live on screen before we wrap",
  "Food styling kit, beverage glassware, and product props from the studio shelves",
  "Colour grading and high-end retouching done in-house by the photographer",
  "Print and web-ready finals delivered with clear usage rights",
];

const BOOKABLE_SHOOTS = [
  {
    title: "E-commerce Product Shoots",
    slug: "/services/product-photography",
    description:
      "Catalogue packshots, white-background sets, and lifestyle detail work built to marketplace specs — Shopify, Amazon, and D2C ready.",
    icon: "📦",
  },
  {
    title: "Footwear & Apparel Studio Days",
    slug: "/services/footwear-photography",
    description:
      "Packshots, macro detail frames, and styled sets for shoe and apparel collections, all under controlled studio light.",
    icon: "👟",
  },
  {
    title: "Food & Beverage Sets",
    slug: "/services/food-beverage-photography",
    description:
      "Menu hero shots, glass and splash work, and ingredient styling with the studio's food kit and prop library.",
    icon: "🍽️",
  },
  {
    title: "Fashion Lookbooks",
    slug: "/services/fashion-photography",
    description:
      "On-model lookbook and editorial sets against seamless backgrounds — boutique and collection campaigns.",
    icon: "👗",
  },
  {
    title: "Brand Campaigns",
    slug: "/services/commercial-campaigns",
    description:
      "Full-production campaign shoots with set design, art direction, and delivered to a launch calendar.",
    icon: "🎬",
  },
];

// ============================================================================
// SCHEMA — merges into the canonical /#business entity from the homepage,
// so no competing LocalBusiness node is created.
// ============================================================================
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": absoluteUrl("/#business"),
  name: siteConfig.name,
  url: absoluteUrl("/photo-studio-dehradun"),
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl("/opt/og-image-homepage.jpg"),
  description:
    "Photo studio in Dehradun for commercial product, footwear, food & beverage, fashion, and brand campaign shoots. Professional lighting, tethered capture, in-house retouching, and on-location service across Uttarakhand.",
  telephone: siteConfig.contact.telephone,
  email: siteConfig.contact.email,
  priceRange: siteConfig.contact.priceRange,
  foundingDate: "2019",
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
    siteConfig.contact.behance,
    siteConfig.contact.linkedin,
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/photo-studio-dehradun#faq"),
  dateModified: "2026-10-22",
  mainEntity: STUDIO_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

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
      name: "Photo Studio in Dehradun",
      item: absoluteUrl("/photo-studio-dehradun"),
    },
  ],
};

// ============================================================================
// COMPONENT
// ============================================================================
export default function PhotoStudioPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
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
            Photo Studio · Dehradun · By Appointment
          </div>
          <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[20ch]">
            Photo studio in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span> for shoots
            that sell.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[65ch] mt-8 leading-relaxed">
            This is not a passport-photo counter. It is a{" "}
            <strong className="text-white">commercial photography studio</strong>{" "}
            built for <strong className="text-white">product</strong>,{" "}
            <strong className="text-white">food &amp; beverage</strong>,{" "}
            <strong className="text-white">footwear</strong>,{" "}
            <strong className="text-white">fashion</strong>, and{" "}
            <strong className="text-white">brand campaign</strong> shoots — with
            in-house retouching and clear usage rights.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#e83b2c] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#d63426] transition-colors duration-300"
              data-cursor="pointer"
            >
              Book the studio
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
                "Hi Rahul, I'm looking for a photo studio in Dehradun for a product/commercial shoot."
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

      {/* ===== INSIDE THE STUDIO ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Inside the Studio
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[30ch]">
            Booked briefs, not empty{" "}
            <span className="italic text-[#e83b2c]">hours</span>.
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-[65ch]">
            Studio bookings here are brief-led production days. You're not renting
            a room and bringing your own lights — you get the photographer, the
            lighting, the styling guidance, and the retouching as one package,
            quoted upfront.
          </p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/60">
            {STUDIO_CAPABILITIES.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="text-[#e83b2c] shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== WHAT YOU CAN BOOK — deep-links to service pages ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Shoots You Can Book
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[25ch]">
            Built around the{" "}
            <span className="italic text-[#e83b2c]">brief</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-14">
            {BOOKABLE_SHOOTS.map((s) => (
              <Link
                key={s.slug}
                href={s.slug}
                className="group border-t border-white/10 pt-6 hover:border-t-[#e83b2c]/50 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-serif text-white group-hover:text-[#e83b2c] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/50 mt-3 leading-relaxed text-sm">
                  {s.description}
                </p>
                <span className="inline-block mt-4 text-xs text-[#e83b2c]/80 font-medium uppercase tracking-wide">
                  View details →
                </span>
              </Link>
            ))}
            <Link
              href="/contact?service=Something+else"
              className="group border-t border-white/10 pt-6 hover:border-t-[#e83b2c]/50 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-serif text-white group-hover:text-[#e83b2c] transition-colors duration-300">
                Something Else
              </h3>
              <p className="text-white/50 mt-3 leading-relaxed text-sm">
                Architectural sets, portraits, mixed productions — describe the
                brief and a plan comes back within 24 hours.
              </p>
              <span className="inline-block mt-4 text-xs text-[#e83b2c]/80 font-medium uppercase tracking-wide">
                Send a brief →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATION — vs generic "photo studio" searches ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Why This Studio
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Most search results for a{" "}
            <span className="italic text-[#e83b2c]">photo studio</span> in
            Dehradun are print shops.
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed">
            Search "photo studio Dehradun" and you'll mostly find passport counters,
            lamination desks, and frame shops. That's fine for documents — not for
            a brand that needs its flagship product to look premium in a
            marketplace listing and on a cafe menu.
          </p>
          <p className="text-white/50 mt-4 leading-relaxed">
            This studio exists for one job: making products, food, footwear, and
            fashion sell. Everything — the lighting inventory, the tethered
            approve-on-screen workflow, the retouching pipeline — is set up
            around commercial deliverables, not quick prints.
          </p>
          <p className="text-white/50 mt-4 leading-relaxed">
            Still choosing between an in-studio and an on-location shoot?{" "}
            <Link href="/dehradun" className="text-[#e83b2c]/80 underline decoration-white/20 hover:text-[#e83b2c] hover:decoration-[#e83b2c]/60 transition-colors">
              See how on-location shoots work across Dehradun
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              n: "01",
              t: "Brief & Quote",
              d: "Send the product list, references, and deadline. A scoped quote with deliverables, styling, and usage rights comes back within 24 hours.",
            },
            {
              n: "02",
              t: "Studio Day",
              d: "Lighting, backgrounds, and props are set for your brief. Tethered shooting means you watch the frames build and approve selects live.",
            },
            {
              n: "03",
              t: "Retouch",
              d: "Chosen frames are graded and retouched in-house — consistent tone across the whole catalogue — no outsourced-look discrepancies.",
            },
            {
              n: "04",
              t: "Deliver",
              d: "Print and web-ready files with the agreed licensing. Rush 24–48h turnaround is possible when scheduled in advance.",
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

      {/* ===== STUDIO FAQ ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Studio Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Booking the{" "}
            <span className="italic text-[#e83b2c]">studio</span>.
          </h2>
          <div className="mt-12 space-y-0">
            {STUDIO_FAQ.map((item) => (
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

      {/* ===== FROM THE BLOG — internal links into blog cluster ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            From the Blog
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[30ch]">
            What a studio day{" "}
            <span className="italic text-[#e83b2c]">actually</span> involves.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-12">
            {[
              {
                href: "/blog/why-beverage-splash-photography-is-hard",
                title: "Why beverage splash photography is harder than it looks",
                desc: "Timing, viscosity, lighting — what goes into that hero splash frame.",
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
              {
                href: "/blog/beverage-photography-glass-splash",
                title: "Glass, liquid, and light: photographing premium beverages",
                desc: "Backlight, glycerin condensation, and controlled reflections.",
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

      {/* ===== GBP MAP EMBED — directions + local trust ===== */}
      <section className="relative w-full px-4 md:px-12 pb-24 md:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <GbpMapEmbed />
        </div>
      </section>

      {/* ===== REVIEW GENERATION CTA ===== */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5 bg-gradient-to-b from-transparent via-[#e83b2c]/5 to-transparent">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Worked Together?
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Leave a <span className="italic text-[#e83b2c]">Google review</span>.
          </h2>
          <p className="text-white/50 mt-6 max-w-[50ch] mx-auto leading-relaxed">
            If your product was shot here, a quick review helps other Dehradun
            brands find the studio.
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
      <ServiceCta
        label="Reserve a studio day"
        href="/contact"
        sectionClassName="relative w-full px-4 md:px-12 pb-28 pt-8"
      />

      <CinematicFooter />
    </main>
  );
}
