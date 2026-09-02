import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Rahul Chanda Photography",
  description:
    "Terms governing photography services provided by Rahul Chanda Photography.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Rahul Chanda Photography",
    description:
      "Terms governing photography services provided by Rahul Chanda Photography.",
    url: absoluteUrl("/terms"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Terms of Service — Rahul Chanda Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Rahul Chanda Photography",
    description: "Terms governing photography services provided by Rahul Chanda Photography.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const termsSchema = {
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
          "name": "Terms of Service",
          "item": absoluteUrl("/terms"),
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/terms#webpage"),
      "url": absoluteUrl("/terms"),
      "name": "Terms of Service",
      "description":
        "Terms governing photography services provided by Rahul Chanda Photography.",
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
      "These Terms of Service are a draft and are not legal advice. They are provided to set clear expectations between Rahul Chanda Photography and our clients. Please review them with a qualified lawyer before relying on them in a commercial engagement.",
    ],
  },
  {
    h: "Parties and Acceptance",
    body: [
      "These terms govern photography services provided by Rahul Chanda, trading as Rahul Chanda Photography ('the Photographer'). 'The Client' is the individual or entity booking a shoot. Acceptance is by either (a) written agreement (email counts) referencing these terms, or (b) payment of the booking deposit.",
    ],
  },
  {
    h: "Services and Estimates",
    body: [
      "Written quotes are valid for 14 days from the date of issue. Final scope, deliverables, and fees are confirmed in writing before any shoot begins. Changes to scope after confirmation may incur additional charges at the Photographer's then-current rate.",
    ],
  },
  {
    h: "Booking, Deposits, and Kill Fees",
    body: [
      "A booking deposit of typically 50% of the project fee secures the shoot date. The balance is due before final delivery of the images.",
      "If the Client cancels within 7 days of the scheduled shoot, the deposit is non-refundable. If the Photographer cancels, the deposit is returned in full and the Photographer will, at the Client's option, either reschedule at no charge or help source an alternative photographer at comparable rates.",
      "Reschedules requested within 7 days of the shoot incur a 25% rebooking fee, deducted from the deposit.",
    ],
  },
  {
    h: "Late Payment",
    body: [
      "Balances unpaid 14 days after the date of invoice accrue interest at the rate of 1.5% per month (or the maximum permitted by applicable law, whichever is lower). Final masters are not delivered until the balance is cleared in full.",
    ],
  },
  {
    h: "Image Licensing",
    body: [
      "Unless otherwise agreed in writing, delivered images are licensed for the specific commercial use described in the project brief, on a non-exclusive, worldwide, perpetual basis. Extended territory, longer duration, exclusivity, sub-licensing, resale, or use in new media require a separate license and fee.",
      "Editorial use, internal use, and agency portfolio use are not included in the default commercial license and must be agreed separately.",
    ],
  },
  {
    h: "Copyright and IP",
    body: [
      "The Photographer retains full copyright and moral rights in all images. The Client retains the licence described above but does not acquire the underlying copyright.",
      "The Client warrants that any client-supplied material (product designs, packaging artwork, location signage, model likeness) does not infringe any third-party intellectual property rights. The Client indemnifies the Photographer against any IP claim arising from client-supplied material.",
    ],
  },
  {
    h: "Client Responsibilities",
    body: [
      "The Client is responsible for: (a) providing accurate product details and agreed props; (b) on-time availability of subjects and locations on the shoot day; (c) securing signed model releases for any identifiable person in the imagery; (d) securing signed property releases for any recognisable private location; and (e) any permits required for commercial photography in regulated spaces (heritage sites, airports, malls, government property).",
      "Shoot delays caused by the Client may extend the timeline or incur additional fees at the Photographer's then-current rate.",
    ],
  },
  {
    h: "Delivery and Revisions",
    body: [
      "Standard delivery is 5–10 business days after the shoot date. 'Minor color corrections' (white balance, exposure, basic contrast, and crop adjustments) are included in the project fee. 'Major retouching' (compositing, generative background replacement, body reshaping, label redesign, product recreation, and any other work that materially alters the captured image) is quoted separately.",
      "Two rounds of revisions are included per project. Further revisions are billed at an hourly rate as stated in the quote.",
    ],
  },
  {
    h: "RAW and Source Files",
    body: [
      "RAW files, working Photoshop files, and project archives are not delivered by default. They are retained by the Photographer for 12 months after final delivery and then permanently deleted. After 12 months, recovery is not possible.",
      "Clients who require RAW or working files may purchase an archive handover for a fee stated in the quote.",
    ],
  },
  {
    h: "Confidentiality",
    body: [
      "Both parties keep project details, unreleased imagery, and client identity confidential by default. The Photographer may display the work in portfolio and promotional materials unless (a) the Client requests confidentiality in writing, or (b) a separate non-disclosure agreement is in place.",
    ],
  },
  {
    h: "Force Majeure",
    body: [
      "Neither party is liable for failure to perform due to events outside reasonable control, including natural disaster, government action, pandemic, transport failure, or studio damage. In such cases, the Photographer will offer the Client the choice between rescheduling at no charge or a full refund of the deposit.",
    ],
  },
  {
    h: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, the Photographer's total liability for any claim arising from a specific project is limited to the total fees paid for that project. Neither party is liable for indirect, consequential, incidental, special, or punitive damages, including lost profits, lost business opportunity, or loss of goodwill.",
    ],
  },
  {
    h: "Indemnification",
    body: [
      "Each party indemnifies the other against third-party claims arising from its own breach of these terms or its own negligent or wilful misconduct.",
    ],
  },
  {
    h: "Governing Law and Disputes",
    body: [
      "These terms are governed by the laws of India. The parties submit to the exclusive jurisdiction of the competent courts in Dehradun, Uttarakhand, India.",
      "Before commencing any formal dispute proceedings, the parties will attempt in good faith to resolve the dispute through direct negotiation for a period of at least 30 days.",
    ],
  },
  {
    h: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Material changes will be notified by email to active clients and announced on the homepage for at least 30 days. The 'Last updated' date below reflects the most recent change.",
    ],
  },
  {
    h: "Contact",
    body: [
      "Rahul Chanda Photography, Dehradun, Uttarakhand, India. Email: rahulchandaphotography@gmail.com. Phone: +91 70789 39475.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      {/* // Hero // */}
      <section className="relative px-4 md:px-12 pt-36 md:pt-44 pb-16 md:pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 className="h-display">
              Terms of
              <span className="h-accent">Service</span>
            </h1>
            <p className="text-white/40 text-sm mt-4">Last updated: August 2026</p>
          </div>
          <div className="md:pt-4">
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[40ch]">
              Please read these terms carefully before booking a shoot.
              They outline what to expect from both sides.
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

      {/* // CTA // */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="h-section mt-12 mb-6">
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

      <CinematicFooter />
    </main>
  );
}
