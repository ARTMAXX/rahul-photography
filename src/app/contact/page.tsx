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

const MAP_QUERY = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Rahul Chanda Photography, GMS Rd, near EPF Office, Vyomprasth, Kanwali, Dehradun 248001"
)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <ContactForm />

      {/* Studio location — NAP block matching the Google Business Profile */}
      <section className="relative w-full px-4 md:px-12 py-24 md:py-32 border-t border-white/5 bg-[#070707]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
              Visit the studio
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
              Find us in{" "}
              <span className="italic text-[#e83b2c]">Kanwali</span>.
            </h2>
            <address className="not-italic mt-8 space-y-1 border-l border-white/10 pl-6">
              <p className="text-white/70 font-medium">{siteConfig.name}</p>
              <p className="text-white/50">
                GMS Rd, near EPF Office, Vyomprasth, Kanwali
              </p>
              <p className="text-white/50">Dehradun, Uttarakhand 248001</p>
              <p className="text-white/50 pt-3">
                <span className="text-white/70">Hours</span> · Mon–Sun, 9:00 AM
                – 5:00 PM
              </p>
            </address>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={siteConfig.contact.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e83b2c] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d63426] transition-colors duration-300"
                data-cursor="pointer"
              >
                View on Google Maps
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={`https://wa.me/917078939475?text=${encodeURIComponent(
                  "Hi Rahul, I'd like to visit the studio in Kanwali."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 py-3 px-6 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300"
                data-cursor="pointer"
              >
                Book a studio visit
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Rahul Chanda Photography — Kanwali, Dehradun on Google Maps"
              src={MAP_QUERY}
              className="absolute inset-0 w-full h-full"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) hue-rotate(180deg) contrast(0.9)",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}