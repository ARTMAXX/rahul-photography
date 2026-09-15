import Link from "next/link";

/**
 * Shared end-of-page CTA used on service pages and the Dehradun page.
 *
 * Affordance fix (Sep 2026): the old version was plain italic text with a
 * thin dash-arrow — users didn't realise it was clickable, and several
 * pages had mojibake arrows (— / —®). Now: animated underline + a circled
 * arrow that fills with brand red on hover, so the target is obvious.
 */
export default function ServiceCta({
  label,
  href,
  sectionClassName = "relative w-full px-4 md:px-12 pb-28 pt-24 border-t border-white/10",
}: {
  label: string;
  href: string;
  sectionClassName?: string;
}) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-[1600px] mx-auto">
        <Link
          href={href}
          className="group inline-flex flex-wrap items-center gap-5 md:gap-7"
          data-cursor="pointer"
        >
          <span className="text-2xl md:text-4xl font-serif italic text-[#e83b2c] underline decoration-[#e83b2c]/40 decoration-2 underline-offset-8 transition-colors duration-300 group-hover:decoration-[#e83b2c]">
            {label}
          </span>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full border border-[#e83b2c]/50 text-[#e83b2c] transition-all duration-300 group-hover:border-[#e83b2c] group-hover:bg-[#e83b2c] group-hover:text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="13 5 20 12 13 19" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
