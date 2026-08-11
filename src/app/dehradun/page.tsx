import type { Metadata } from "next";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Photographer in Dehradun",
  description:
    "Freelance commercial product, food & beverage, footwear, and campaign photography for brands in Dehradun and across Uttarakhand. On-location shoots with professional retouching.",
  alternates: { canonical: "/dehradun" },
  openGraph: {
    title: "Commercial Photography in Dehradun — Rahul Chanda",
    description:
      "Freelance commercial product, food & beverage, footwear, and campaign photography for brands in Dehradun and across Uttarakhand, India.",
    url: absoluteUrl("/dehradun"),
  },
};

// "Where we shoot" — coverage areas around Dehradun and Uttarakhand.
const SERVICE_AREAS = [
  "Kanwali & GMS Road",
  "Rajpur Road",
  "Ballupur & Sahastradhara",
  "Dharampur & Prem Nagar",
  "Mussoorie",
  "Rishikesh",
  "Haridwar",
  "Haldwani",
  "Delhi NCR (travel)",
];

const LOCAL_SERVICES = [
  {
    t: "Product Photography",
    d: "E-commerce catalogues, packshots, cutouts, and lifestyle-first product imagery for Shopify and Amazon-ready brands.",
  },
  {
    t: "Food & Beverage",
    d: "Menu photography, restaurant campaigns, and beverage splash work engineered to make kitchens and bars sell.",
  },
  {
    t: "Footwear & Fashion",
    d: "On-location shoots for footwear labels and apparel brands based in the Doon Valley and beyond.",
  },
  {
    t: "Commercial Campaigns",
    d: "Art-directed campaign shoots with a full production workflow — brief, sets, lighting, retouch, delivery.",
  },
  {
    t: "Brand Content Creation",
    d: "A rolling library of on-brand imagery for social and web — shot economically in batches, not one-offs.",
  },
  {
    t: "Architectural & Interiors",
    d: "Hospitality and residential interior photography for hotels, cafes, and projects across Uttarakhand.",
  },
];

const LOCAL_FAQ = [
  {
    q: "Do you travel outside Dehradun for shoots?",
    a: "Yes. Based in Dehradun, I shoot on location across Uttarakhand — Mussoorie, Rishikesh, Haridwar — as well as Delhi NCR when travel is planned in.",
  },
  {
    q: "Where do shoots take place?",
    a: "Shoots happen at your location — your office, store, restaurant, home, or any venue that fits the brief. I bring all professional lighting and equipment to you.",
  },
  {
    q: "Do you shoot e-commerce catalogue volumes?",
    a: "Yes. Batch catalogue work is a core part of my workflow — 20 to 200+ SKUs with consistent lighting, standards, and retouch so your product pages look uniform.",
  },
  {
    q: "How do I book a shoot?",
    a: "Call +91 70789 39475 or send a WhatsApp message. Enquiries are answered within 24 hours. We'll discuss your brief, timeline, and get you a clear quote.",
  },
];

// LocalBusiness schema — uses city-level address since this is a freelance on-location service.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": absoluteUrl("/dehradun#localbusiness"),
  name: siteConfig.name,
  url: absoluteUrl("/dehradun"),
  image: absoluteUrl(siteConfig.ogImagePath),
  telephone: siteConfig.contact.telephone,
  email: siteConfig.contact.email,
  priceRange: siteConfig.contact.priceRange,
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
  sameAs: [
    siteConfig.contact.instagram,
    siteConfig.contact.googleBusiness,
    "https://www.behance.net/rahulchandaphotography",
  ],
};

export default function DehradunPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            Dehradun · On-Location
          </div>
          <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[18ch]">
            Commercial photography,
            <br />
            shot in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[60ch] mt-8 leading-relaxed">
            A freelance commercial photographer based in Dehradun — product,
            food &amp; beverage, footwear, campaign, and brand content — with
            professional retouching. I come to your location with full gear.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#e83b2c] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#d63426] transition-colors duration-300"
              data-cursor="pointer"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.telephone}`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
              data-cursor="pointer"
            >
              Call +91 70789 39475
            </a>
          </div>
        </div>
      </section>

      {/* About — On-Location Service */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            On-Location Service
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[30ch]">
            Professional shoots,
            <br />
            <span className="italic text-[#e83b2c]">wherever you are</span>.
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-[60ch]">
            No studio needed. I bring professional lighting, backgrounds, and
            all equipment to your office, store, restaurant, home, or any
            location that fits the brief. The result is the same — polished,
            production-ready imagery with retouching done in-house.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
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

      {/* What brands book from Dehradun */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-[20ch]">
            What brands book in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-14">
            {LOCAL_SERVICES.map((s) => (
              <div key={s.t} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-serif text-white">{s.t}</h3>
                <p className="text-white/50 mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we shoot */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Coverage
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Where I <span className="italic text-[#e83b2c]">shoot</span>.
          </h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="border border-white/15 py-2 px-5 rounded-full text-sm text-white/60"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-white/50 mt-10 max-w-[60ch] leading-relaxed">
            Based in Dehradun, I shoot on location across the Doon Valley,
            Mussoorie, Rishikesh, and Haridwar. For clients outside Uttarakhand,
            Delhi NCR travel is routinely scheduled — ask for a production plan.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              t: "Enquiry & quote",
              d: "Tell us about the product, the volume, and the deadline. You get a clear scope, timeline, and investment estimate within a day.",
            },
            {
              n: "02",
              t: "Shoot day",
              d: "A focused on-location production — I bring all lighting, styling, and art direction to your space or any venue that fits the brief.",
            },
            {
              n: "03",
              t: "Retouch & delivery",
              d: "Finals are retouched and color-graded in-house, delivered in print + digital formats with licensing agreed upfront.",
            },
          ].map((s) => (
            <div key={s.n} className="border-t border-white/10 pt-6">
              <span className="text-[#e83b2c] text-sm font-medium">
                {s.n}
              </span>
              <h3 className="text-2xl font-serif text-white mt-3">{s.t}</h3>
              <p className="text-white/50 mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-28 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Local questions
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

      {/* CTA band */}
      <section className="relative w-full px-4 md:px-12 pb-28 pt-8">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="pointer"
          >
            <span className="italic text-[#e83b2c]">
              Let&apos;s plan your shoot in Dehradun
            </span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]">→</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
