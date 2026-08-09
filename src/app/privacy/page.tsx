import type { Metadata } from "next";
import Link from "next/link";
import { LegalFooter } from "@/components/ui/legal-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Rahul Chanda Photography collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Rahul Chanda Photography",
    description:
      "How Rahul Chanda Photography collects, uses, and protects your personal information.",
    url: absoluteUrl("/privacy"),
  },
};

const sections = [
  {
    h: "Information We Collect",
    body: [
      "When you contact us via the website form, WhatsApp, email, or phone, we collect the details you provide: your name, contact information (email or phone number), the service you are interested in, and the project details you share.",
      "We may also receive technical data automatically, such as browser type, device, and pages visited, via analytics tools.",
    ],
  },
  {
    h: "How We Use Your Information",
    body: [
      "Your information is used solely to respond to your enquiry, prepare quotes, schedule shoots, and deliver photography services.",
      "We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    h: "Data Sharing",
    body: [
      "We share your details only with service providers necessary to operate the business — such as email or messaging platforms — and only to the extent needed to fulfil your request.",
      "We may disclose information where required by law or to protect our legal rights.",
    ],
  },
  {
    h: "Data Retention",
    body: [
      "Enquiry details are retained for as long as needed to complete your project and to maintain business records, after which they are securely deleted.",
    ],
  },
  {
    h: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data at any time by contacting us at rahulchandaphotography@gmail.com.",
    ],
  },
  {
    h: "Contact",
    body: [
      "Rahul Chanda Photography, Dehradun, Uttarakhand, India. Email: rahulchandaphotography@gmail.com · Phone: +91 70789 39475.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      {/* ── Hero ── */}
      <section className="relative px-4 md:px-12 pt-36 md:pt-44 pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9]">
              Privacy{" "}
              <span className="italic text-[#e83b2c]">Policy</span>
            </h1>
            <p className="text-white/40 text-sm mt-4">Last updated: July 2026</p>
          </div>
          <div className="md:pt-4">
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[40ch]">
              Your data stays yours. This page explains what we collect,
              why we collect it, and how we protect it.
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
              Privacy
            </h2>
            <p className="text-sm text-white/40 mt-3 leading-relaxed">
              How we handle your data.
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
            Questions about your data?
          </h2>
          <p className="text-sm text-white/40 mb-8 max-w-[36ch] mx-auto leading-relaxed">
            We&apos;re transparent about everything. Just ask.
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
