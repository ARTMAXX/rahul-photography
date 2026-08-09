import type { Metadata } from "next";
import ContactForm from "@/components/sections/redesign/ContactForm";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Photographer in Dehradun",
  description:
    "Start a photography project with Rahul Chanda. Enquire about product, food & beverage, footwear, and campaign shoots — replies within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Rahul Chanda — Photographer in Dehradun",
    description:
      "Start a photography project with Rahul Chanda. Enquire about product, beverage, footwear, and campaign shoots — replies within 24 hours.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
