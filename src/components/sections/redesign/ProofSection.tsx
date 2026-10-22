/* ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
   ProofSection — verifiable-stats strip for the homepage.
   Every number here is sourced from the owner's own records:
   - 4.9★ / 24 reviews  → Google Business Profile (CID 2875568559570212542)
   - Est. 2019          → foundingDate on the LocalBusiness schema
   - 20–50 images       → package details stated on /services + /faq
   - 24–48h rush        → delivery terms stated on /faq
   No fabricated counts, no invented client names. The tiles are static
   (server-rendered, zero JS) so they never cause layout shift.
   ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓ */

import { siteConfig } from "@/lib/site";

const stats = [
  {
    value: "4.9/5",
    label: "Average Google rating",
    note: "From 24 client reviews on Google",
  },
  {
    value: "2019",
    label: "Working since",
    note: "Six years of commercial shoots",
  },
  {
    value: "20–50",
    label: "Edited images per product project",
    note: "All retouched in-house",
  },
  {
    value: "24–48 hr",
    label: "Rush delivery available",
    note: "For urgent e-commerce drops",
  },
];

export default function ProofSection() {
  return (
    <section
      aria-label="Studio proof in numbers"
      className="relative w-full bg-[#070707] border-y border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((s) => (
            <div key={s.value} className="border-l-2 border-[#e83b2c]/30 pl-5 md:pl-6">
              <div
                className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none text-white"
              >
                {s.value}
              </div>
              <div
                className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-white/60"
                style={{ fontFamily: "Outfit, system-ui" }}
              >
                {s.label}
              </div>
              <div className="mt-1 text-xs text-white/35">
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Real reviews live on Google — never fabricate them here. */}
        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span
            className="text-xs uppercase tracking-[0.2em] text-white/45"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Client reviews live on
          </span>
          <a
            href={siteConfig.contact.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#f0523f] transition-colors text-sm"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            Google Maps
            <span aria-hidden="true" className="font-serif text-xs text-white/40 group-hover:text-[#e83b2c] transition-colors">
              (4.9★ · 24 reviews)
            </span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
