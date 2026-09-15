import { siteConfig } from "@/lib/site";

/**
 * Festive Catalog Early-Bird offer banner — companion to the Google Business
 * Profile Offer post ("Festive Catalog Early-Bird: 10 Extra SKU Shots Free").
 * GBP "Link to redeem offer" points to https://rahulchandaphotography.com/services#festive-offer
 *
 * OFFER WINDOW: 15 Sep 2026 → 15 Oct 2026.
 * REMINDER: remove (or replace) this banner after 15 Oct 2026.
 */
export default function OfferBanner() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.telephone.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(
    "Hi Rahul, I want to claim the Festive Catalog Early-Bird offer (10 extra SKU shots free on a 30+ SKU package)."
  )}`;

  return (
    <section
      id="festive-offer"
      aria-label="Festive Catalog Early-Bird offer"
      className="relative w-full px-4 md:px-12 py-10 md:py-12 bg-[#070707]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#e83b2c]/30 bg-white/[0.03] px-6 py-8 md:px-10 md:py-10">
          {/* Ambient glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(232,59,44,0.6) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <div className="inline-flex border border-[#e83b2c]/40 py-1 px-3 rounded-full text-[11px] text-[#e83b2c] uppercase tracking-widest mb-4">
                Limited festive offer · ends 15 Oct
              </div>
              <h2 className="h-section leading-tight">
                Festive Catalog Early-Bird —{" "}
                <span className="italic text-[#e83b2c]">
                  10 extra SKU shots free
                </span>
                .
              </h2>
              <p className="text-white/50 mt-3 max-w-[60ch] leading-relaxed">
                Book any 30+ SKU e-commerce catalogue package before Oct 15 and
                get 10 additional SKU shots FREE — white-background packshots,
                lifestyle &amp; hero imagery, in-house retouching, delivered
                before Nov 1, ready for your Diwali campaigns.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3 md:min-w-[220px]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#e83b2c] px-8 py-3 text-sm font-medium text-white hover:bg-[#c93225] transition-colors"
              >
                Claim on WhatsApp
              </a>
              <span className="text-xs text-white/40 text-center">
                Limited slots per week
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
