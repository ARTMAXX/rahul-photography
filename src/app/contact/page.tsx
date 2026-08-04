import type { Metadata } from "next";
import ContactForm from "@/components/sections/redesign/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a photography project with Rahul Chanda. Enquire about product, food & beverage, footwear, and campaign shoots — replies within 24 hours.",
};

export default function ContactPage() {
  return <ContactForm />;
}
