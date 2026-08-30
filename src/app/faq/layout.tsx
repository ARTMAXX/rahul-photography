import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Commercial Photography Dehradun",
  description:
    "Answers about booking, pricing, timelines, revisions, and delivery for commercial photography with Rahul Chanda in Dehradun, Uttarakhand.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Commercial Photography in Dehradun — Rahul Chanda",
    description:
      "Answers about booking, pricing, timelines, revisions, and delivery for commercial photography with Rahul Chanda.",
    url: absoluteUrl("/faq"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "FAQ — Commercial Photography, Dehradun",
      },
    ],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}