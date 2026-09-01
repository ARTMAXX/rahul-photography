import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

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
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Rahul Chanda Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Rahul Chanda Photography",
    description: "How Rahul Chanda Photography collects, uses, and protects your personal information.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": absoluteUrl("/privacy"),
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/privacy#webpage"),
      "url": absoluteUrl("/privacy"),
      "name": "Privacy Policy",
      "description":
        "How Rahul Chanda Photography collects, uses, and protects your personal information.",
      "isPartOf": {
        "@type": "WebSite",
        "name": siteConfig.name,
        "url": absoluteUrl("/"),
      },
      "inLanguage": "en-IN",
    },
  ],
};

const sections = [
  {
    h: "Disclaimer",
    body: [
      "This Privacy Policy is a draft and is not legal advice. It is provided for transparency with current and prospective clients. Please review it with a qualified lawyer before relying on it for compliance purposes.",
    ],
  },
  {
    h: "Data Controller",
    body: [
      "Rahul Chanda, trading as Rahul Chanda Photography, is the data controller for personal information collected through this website. We are based in Dehradun, Uttarakhand, India. You can reach us at rahulchandaphotography@gmail.com or +91 70789 39475.",
      "For purposes of the Digital Personal Data Protection Act 2023, you can contact our grievance officer at the same email address; we aim to acknowledge grievance communications within 7 days and resolve them within 30 days, as required by the Act.",
    ],
  },
  {
    h: "What We Collect",
    body: [
      "When you contact us through the website form, WhatsApp, email, or phone, we collect the details you provide: your name, contact information (email or phone), the service you are interested in, and the project details you share.",
      "We also receive technical data automatically when you browse the site, via third-party analytics tools described below. This includes browser type, device, pages visited, referrer, and (for some sessions) interactions recorded for usability analysis.",
    ],
  },
  {
    h: "Why We Collect It and Legal Basis",
    body: [
      "We process your enquiry data on the legal basis of taking steps at your request prior to entering into a contract (Section 7(g) of the Digital Personal Data Protection Act 2023). This means: responding to your enquiry, preparing a quote, scheduling a shoot, and delivering the photography service you have requested.",
      "We process technical and analytics data on the legal basis of consent. By continuing to use this site, you consent to the processing described in this policy. You may withdraw consent at any time by emailing us; we will honour your request within 30 days.",
    ],
  },
  {
    h: "Third-Party Processors",
    body: [
      "We use a small number of trusted third-party services to operate this site. Each has its own privacy practices:",
      "Microsoft Clarity (USA) — session recording and heatmaps for usability research. Captures anonymised mouse movements, scroll depth, and click patterns. Default retention 30 days. See Microsoft's privacy policy for full details.",
      "Ahrefs Web Analytics (USA) — anonymous, cookieless page-view analytics. No personal data is collected; all data is aggregated. See Ahrefs' privacy policy.",
      "Google Search Console (USA) — search-performance and indexing data. See Google's privacy policy.",
      "Cloudflare (USA / EU) — hosting, content delivery, and DDoS protection. Cloudflare may process request metadata (IP address, user agent, requested URL) as part of serving the site. See Cloudflare's privacy policy.",
    ],
  },
  {
    h: "Cookies and Similar Technologies",
    body: [
      "This site does not set any first-party cookies. Some of the third-party tools listed above (notably Microsoft Clarity) may set their own cookies or use similar identifiers. We do not use advertising cookies and we do not perform cross-site tracking.",
    ],
  },
  {
    h: "Data Retention",
    body: [
      "Enquiry data: retained for the lifetime of our engagement with you, plus 7 years for Indian tax and corporate record-keeping requirements, then permanently deleted.",
      "Project files (deliverable images, RAW files, working files): retained for 12 months after final delivery, then permanently deleted. After 12 months, recovery is not possible. See our Terms of Service for details.",
      "Analytics data: retained per the third-party processor's own retention policy, summarised above.",
    ],
  },
  {
    h: "Your Rights Under the DPDP Act 2023",
    body: [
      "You have the right to: (a) access a copy of the personal data we hold about you; (b) request correction of inaccurate or incomplete data; (c) request erasure of data where we no longer have a legal basis to retain it; (d) lodge a grievance with us and have it resolved; and (e) complain to the Data Protection Board of India if you believe your rights have been infringed.",
      "To exercise any of these rights, email rahulchandaphotography@gmail.com. We will acknowledge your request within 7 days and respond substantively within 30 days, as required by the Act.",
    ],
  },
  {
    h: "Children's Data",
    body: [
      "This site is intended for adult commercial enquirers. We do not knowingly collect personal data from anyone under 18. If you believe a child has submitted data through this site, please contact us and we will delete it.",
    ],
  },
  {
    h: "International Data Transfers",
    body: [
      "Some of our third-party processors are headquartered in the United States. By using this site, you understand that your data may be transferred to and processed in the United States. We rely on each processor's own compliance with applicable data-protection law, including Standard Contractual Clauses or equivalent safeguards where required.",
    ],
  },
  {
    h: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Material changes will be announced via a notice on the homepage for at least 30 days. The 'Last updated' date below reflects the most recent change.",
    ],
  },
  {
    h: "Contact",
    body: [
      "Rahul Chanda Photography, Dehradun, Uttarakhand, India. Email: rahulchandaphotography@gmail.com. Phone: +91 70789 39475.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      {/* // Hero // */}
      <section className="relative px-4 md:px-12 pt-36 md:pt-44 pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 className="h-display">
              Privacy <span className="h-accent">Policy</span>
            </h1>
            <p className="text-white/40 text-sm mt-4">Last updated: August 2026</p>
          </div>
          <div className="md:pt-4">
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[40ch]">
              Your data stays yours. This page explains what we collect,
              why we collect it, and how we protect it.
            </p>
          </div>
        </div>
      </section>

      {/* // Divider // */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="h-px bg-white/10" />
      </div>

      {/* // Content // */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div>
            <h2 className="h-section mt-12">
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

      {/* // CTA // */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="h-section mt-12 mb-6">
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

      <CinematicFooter />
    </main>
  );
}
