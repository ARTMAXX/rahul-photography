/**
 * GBP map embed — Google Business Profile map iframe.
 *
 * Loads the live Google Maps listing (pin + name + 5.0★ rating) via the
 * Maps CID from siteConfig.contact.googleBusiness. Google cross-checks
 * the website against the Business Profile — displaying the Maps profile
 * on /contact and /dehradun is a local-trust signal for map-pack ranking,
 * and gives visitors one-tap directions.
 *
 * Notes:
 * - `loading="lazy"` keeps it off the LCP path (zero impact on Lighthouse).
 * - Requires `frame-src` allowing https://maps.google.com in next.config.ts
 *   (added 2026-09-10); frame-ancestors 'none' is unchanged so we still
 *   refuse to be framed by other sites.
 */
export default function GbpMapEmbed() {
  return (
    <div>
      {/* Wrapper styled like the site&apos;s info sections */}
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
        <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
          Find me on the map
        </div>
        <div className="text-white/40 text-sm">
          Dehradun · Mussoorie · Rishikesh · Haridwar · Delhi NCR
        </div>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        <iframe
          src="https://maps.google.com/maps?cid=2875568559570212542&output=embed&hl=en"
          title="Rahul Chanda Photography on Google Maps — Dehradun commercial photographer"
          className="block w-full h-[320px] md:h-[420px] border-0 grayscale-[35%] contrast-[1.05] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-white/40 text-sm mt-4 leading-relaxed">
        On-location commercial photographer — I bring the studio to your cafe,
        restaurant, office or warehouse. Tap the map for the full Google
        listing with reviews and directions.
      </p>
    </div>
  );
}
