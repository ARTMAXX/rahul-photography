import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about booking, pricing, timelines, revisions, and delivery for commercial photography with Rahul Chanda Photography.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Rahul Chanda Photography",
    description:
      "Answers about booking, pricing, timelines, revisions, and delivery for commercial photography with Rahul Chanda.",
    url: absoluteUrl("/faq"),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of photography do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in product photography, food & beverage photography, fashion & footwear campaigns, and high-end retouching. Each project is tailored to the brand's visual identity.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I book a shoot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reach out via the contact form, WhatsApp, or email with your project details. I'll prepare a custom quote within 24 hours. Once confirmed with a 50% deposit, your shoot date is locked in.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the typical turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard delivery is 5-10 business days after the shoot. Rush delivery (24-48 hours) is available on request for an additional fee.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you travel for shoots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. I'm based in Dehradun and available for shoots across India. Travel logistics and costs are discussed during the quoting stage.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I request revisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide raw or unedited files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raw files are not delivered. Every final image goes through my retouching pipeline to ensure consistency and quality that matches the portfolio standard.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}