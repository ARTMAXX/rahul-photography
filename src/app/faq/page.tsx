import type { Metadata } from "next";
import Script from "next/script";
import { absoluteUrl } from "@/lib/site";
import FAQContent from "./faq-content";

// ─── FAQ Data with Schema Ready ────────────────────────────────────
const faqs = [
  {
    q: "What types of photography do you offer?",
    a: "I specialize in product photography, food & beverage photography, fashion & footwear campaigns, and high-end retouching. Each project is tailored to the brand's visual identity.",
  },
  {
    q: "How do I book a shoot?",
    a: "Reach out via the contact form, WhatsApp, or email with your project details. I'll prepare a custom quote within 24 hours. Once confirmed with a 50% deposit, your shoot date is locked in.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "Standard delivery is 5–10 business days after the shoot. Rush delivery (24–48 hours) is available on request for an additional fee.",
  },
  {
    q: "How many images are included per project?",
    a: "This depends on the scope agreed in the project brief — Product Photography includes 20–50 edited high-res images and Food & Beverage includes 15–30 hero shots. The exact count is defined before the shoot begins.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. I'm based in Dehradun and available for shoots across India. Travel logistics and costs are discussed during the quoting stage.",
  },
  {
    q: "Can I request revisions?",
    a: "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
  },
  {
    q: "Do you provide raw or unedited files?",
    a: "Raw files are not delivered. Every final image goes through my retouching pipeline to ensure consistency and quality that represent the brand.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, UPI, and credit card payments. A 50% deposit secures your date, with the balance due before final delivery.",
  },
  {
    q: "What happens if I need to cancel a booked shoot?",
    a: "Deposits are non-refundable for cancellations made within 7 days of the scheduled shoot date — that production time is reserved exclusively for you.",
  },
  {
    q: "Can you work with tight deadlines?",
    a: "Yes. Rush turnaround (24–48 hours) is available. Contact me directly to discuss your timeline and any additional rush fees.",
  },
  {
    q: "Do you offer package deals or retainers?",
    a: "Yes. Monthly content packages and long-term retainers are available for brands needing consistent photography. Let's discuss your needs.",
  },
];

// ═══════════════════════════════════════════════════════════════════
// FAQ PAGE SCHEMA (QAPage for Google)
// ═══════════════════════════════════════════════════════════════════
const faqSchema = {
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
          "name": "FAQ",
          "item": absoluteUrl("/faq"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/faq"),
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ — Commercial Photography by Rahul Chanda",
  description:
    "Common questions about commercial photography services, pricing, turnaround times, and booking process with Rahul Chanda.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Commercial Photography Services",
    description: "Questions answered about product, food & beverage, and commercial photography services.",
    url: absoluteUrl("/faq"),
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <FAQContent faqs={faqs} />
    </main>
  );
}
