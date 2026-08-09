import type { Metadata } from "next";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Photographer in Dehradun",
  description:
    "Commercial product, food & beverage, footwear, and campaign photography for brands in Dehradun and across Uttarakhand. Shot in a dedicated Kanwali studio with in-house retouching.",
  alternates: { canonical: "/dehradun" },
  openGraph: {
    title: "Commercial Photography in Dehradun — Kanwali Studio",
    description:
      "Commercial product, food & beverage, footwear, and campaign photography for brands in Dehradun and across Uttarakhand, India.",
    url: absoluteUrl("/dehradun"),
  },
};

const STUDIO_ADDRESS = [
  "GMS Rd, near EPF Office, Vyomprasth",
  "Kanwali, Dehradun, Uttarakhand 248001",
];

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
    d: "Studio and on-location shoots for footwear labels and apparel brands based in the Doon Valley and beyond.",
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
    a: "Yes. The studio is based in Kanwali, Dehradun, and shoots happen at the studio or on location across Uttarakhand — Mussoorie, Rishikesh, Haridwar — as well as Delhi NCR when travel is planned in.",
  },
  {
    q: "Can I see the studio before booking?",
    a: "Absolutely. The studio is at GMS Rd, near EPF Office, Vyomprasth, Kanwali, Dehradun 248001. Call +91 70789 39475 to fix a visit or a camera test before committing to a project.",
  },
  {
    q: "Do you shoot e-commerce catalogue volumes?",
    a: "Yes. Batch catalogue work is a core part of the studio — 20 to 200+ SKUs with consistent lighting, standards, and retouch so your product pages look uniform.",
  },
  {
    q: "When is the studio open?",
    a: "Studio hours are 9:00 AM to 5:00 PM, all days of the week. Enquiries are answered within 24 hours.",
  },
];

// LocalBusiness schema — mirrors the Google Business Profile NAP exactly.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/dehradun#localbusiness"),
  name: siteConfig.name,
  url: absoluteUrl("/dehradun"),
  image: absoluteUrl(siteConfig.ogImagePath),
  telephone: siteConfig.contact.telephone,
  email: siteConfig.contact.email,
  priceRange: siteConfig.contact.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    postalCode: siteConfig.contact.postalCode,
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.latitude,
    longitude: siteConfig.contact.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
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
            Dehradun · Kanwali Studio
          </div>
          <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[18ch]">
            Commercial photography,
            <br />
            shot in{" "}
            <span className="italic text-[#e83b2c]">Dehradun</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[60ch] mt-8 leading-relaxed">
            A professional studio in Kanwali for brands across Uttarakhand —
            product, food &amp; beverage, footwear, campaign, and brand content —
            with retouching done in-house. No travel overhead, no outsourcing.
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
              href={siteConfig.contact.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
              data-cursor="pointer"
            >
              Find the studio on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Studio + map + NAP */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
              The Studio
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
              A dedicated shoot space,
              <br />
              <span className="italic text-[#e83b2c]">ten minutes</span> from
              GMS Road.
            </h2>
            <p className="text-white/50 mt-6 leading-relaxed max-w-[55ch]">
              Built for brands that can&apos;t afford to lose a production day.
              The Kanwali studio runs controlled lighting, cyc-friendly
              sets, food and beverage rigs, and a retouching desk — so the
              deliverables that arrive on your desk are already finished.
            </p>
            <address className="not-italic mt-8 space-y-1 border-l border-white/10 pl-6">
              <p className="text-white/70 font-medium">
                {siteConfig.name}
              </p>
              {STUDIO_ADDRESS.map((line) => (
                <p key={line} className="text-white/50">
                  {line}
                </p>
              ))}
              <p className="text-white/50 pt-3">
                <span className="text-white/70">Hours</span> · Mon–Sun, 9:00 AM
                – 5:00 PM
              </p>
            </address>
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
                WhatsApp the studio
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Rahul Chanda Photography studio — Kanwali, Dehradun"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "Rahul Chanda Photography, GMS Rd, near EPF Office, Vyomprasth, Kanwali, Dehradun 248001"
              )}&z=15&output=embed`}
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) hue-rotate(180deg) contrast(0.9)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            What brands book from a{" "}
            <span className="italic text-[#e83b2c]">Dehradun studio</span>.
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
            Where we <span className="italic text-[#e83b2c]">shoot</span>.
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
            Studio work is based in Kanwali; location shoots are planned around
            the season across the Doon Valley, Mussoorie, Rishikesh, and
            Haridwar. For clients outside Uttarakhand, Delhi NCR travel is
            routinely scheduled — ask for a production plan.
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
              d: "A focused production at the Kanwali studio or on location — lighting, styling, and art direction handled end to end.",
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