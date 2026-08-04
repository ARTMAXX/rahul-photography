import type { Metadata } from "next";
import Link from "next/link";
import { LegalFooter } from "@/components/ui/legal-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing photography services provided by Rahul Chanda Photography.",
};

const sections = [
  {
    h: "Services & Estimates",
    body: [
      "Quotes are valid for 14 days from the date of issue. Final pricing is confirmed in writing before any shoot begins. Changes to scope after confirmation may incur additional charges.",
    ],
  },
  {
    h: "Booking & Deposits",
    body: [
      "A booking deposit (typically 50% of the project fee) secures your shoot date. The balance is due before final delivery of images. Deposits are non-refundable for cancellations within 7 days of the scheduled shoot.",
    ],
  },
  {
    h: "Image Licensing",
    body: [
      "Unless otherwise agreed in writing, delivered images are licensed for the specific commercial use described in the project brief. Additional usage, extended durations, or new media require a separate license and fee.",
      "Full copyright and moral rights remain with the photographer. The photographer retains the right to display work in portfolio and promotional materials unless a confidentiality agreement is in place.",
    ],
  },
  {
    h: "Client Responsibilities",
    body: [
      "The client is responsible for providing accurate product details, agreed props, and on-time availability of subjects and locations. Shoot delays caused by the client may extend the timeline or incur additional fees.",
    ],
  },
  {
    h: "Delivery & Revisions",
    body: [
      "Standard delivery is 5–10 business days after the shoot. Minor color corrections are included; major retouching beyond the agreed scope is quoted separately. Two revision rounds are included per project.",
    ],
  },
  {
    h: "Liability",
    body: [
      "To the maximum extent permitted by law, Rahul Chanda Photography's liability is limited to the total fees paid for the specific project.",
    ],
  },
  {
    h: "Contact",
    body: [
      "For any questions about these terms: rahulchandaphotography@gmail.com · +91 70789 39475.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* ── Hero ── */}
      <section className="relative px-4 md:px-12 pt-36 md:pt-44 pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9]">
              Terms of{" "}
              <span className="italic text-[#e83b2c]">Service</span>
            </h1>
            <p className="text-white/40 text-sm mt-4">Last updated: July 2026</p>
          </div>
          <div className="md:pt-4">
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[40ch]">
              Please read these terms carefully before booking a shoot.
              They outline what to expect from both sides.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── Content ── */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">
              Legal
            </h2>
            <p className="text-sm text-white/40 mt-3 leading-relaxed">
              The fine print, kept short.
            </p>
          </div>
          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h3 className="text-sm md:text-base font-semibold text-white mb-3">
                  {i + 1}. {s.h}
                </h3>
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="text-sm text-white/50 leading-relaxed mb-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight leading-tight mb-4">
            Questions about these terms?
          </h2>
          <p className="text-sm text-white/40 mb-8 max-w-[36ch] mx-auto leading-relaxed">
            Reach out anytime — happy to clarify anything.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e83b2c] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#f0523f] transition-colors"
              data-cursor="pointer"
            >
              Contact Rahul
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 border border-[#e83b2c]/30 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#e83b2c]/10 transition-colors"
              data-cursor="pointer"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <LegalFooter />
    </main>
  );
}
