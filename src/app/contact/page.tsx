import type { Metadata } from "next";
import ContactForm from "@/components/sections/redesign/ContactForm";
import { siteConfig, absoluteUrl } from "@/lib/site";

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
  return (
    <>
      <ContactForm />

      {/* Contact info — no studio, freelance on-location */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5 bg-[#070707]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
            Get in touch
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Let&apos;s talk about your{" "}
            <span className="italic text-[#e83b2c]">project</span>.
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-[60ch]">
            Based in Dehradun, shooting on location across Uttarakhand and
            beyond. Call, WhatsApp, or fill the form — replies within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`tel:${siteConfig.contact.telephone}`}
              className="inline-flex items-center gap-2 border border-white/15 py-3 px-6 min-h-[48px] rounded-full text-base text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              +91 70789 39475
            </a>
            <a
              href={`https://wa.me/917078939475?text=${encodeURIComponent(
                "Hi Rahul, I'd like to discuss a photography project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 py-3 px-6 min-h-[48px] rounded-full text-base text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              WhatsApp me
            </a>
            <a
              href={siteConfig.contact.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 py-3 px-6 min-h-[48px] rounded-full text-base text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
              data-cursor="pointer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
