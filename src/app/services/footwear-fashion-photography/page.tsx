import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

// FAQPage schema for AI search engines and voice search (Sept 2026).
// Note: Google retired FAQ rich results in May 2026, but FAQPage schema
// still helps voice search and AI Overview citation.
const footwearFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/services/footwear-fashion-photography#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "What angles do you shoot for e-commerce footwear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard e-commerce footwear coverage includes the three-quarter hero, medial profile, lateral profile, top-down, sole detail, and pair shot. For campaign work, we add lifestyle contexts (in-use) and macro detail (stitching, texture, materials).",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer on-model shoe photography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate models, styling, and locations for on-model campaigns. For catalog work, we typically shoot on-foot or off-foot (white-background cutouts) and ghost-mannequin cutouts for apparel.",
      },
    },
    {
      "@type": "Question",
      name: "What is the turnaround time for footwear catalog work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard turnaround is 5–7 business days after the shoot. Bulk catalog work (50–200+ SKUs) is typically delivered in batches so you can start listing while we continue shooting the remaining items.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle colour-critical work for fashion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We shoot a Calibrite ColorChecker reference target on every scene, lock white balance against neutral patches, and use colour-managed workflows end to end so the colours in your final files match the actual product.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Footwear & Fashion Photographer in Dehradun",
  description:
    "Fashion & footwear photographer in Dehradun. E-commerce catalog, lookbooks, and brand campaigns. In-house retouching. Book a shoot.",
  alternates: { canonical: "/services/footwear-fashion-photography" },
  openGraph: {
    title: "Footwear & Fashion Photographer in Dehradun — E-commerce & Brand Campaigns",
    description:
      "Fashion and footwear photography in Dehradun. E-commerce catalog shots, lookbook photography, and brand campaign shoots for D2C and editorial clients.",
    url: absoluteUrl("/services/footwear-fashion-photography"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Footwear & Fashion Photography — E-commerce & Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwear & Fashion Photographer in Dehradun",
    description: "Fashion and footwear photography in Dehradun. Catalog, lookbooks, and brand campaigns.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const footwearPhotographySchema = {
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
          "name": "Services",
          "item": absoluteUrl("/services"),
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Footwear & Fashion Photography",
          "item": absoluteUrl("/services/footwear-fashion-photography"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/footwear-fashion-photography#service"),
      "name": "Footwear & Fashion Photography",
      "description":
        "Professional footwear and fashion photography for e-commerce and brands. Shoe photography, apparel lookbooks, and commercial fashion product shoots.",
      "provider": {
        "@id": absoluteUrl("/#business")
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dehradun",
        },
        {
          "@type": "State",
          "name": "Uttarakhand",
        },
        {
          "@type": "Country",
          "name": "India",
        },
      ],
    },
  ],
};

export default function FootwearFashionPhotographyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(footwearPhotographySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(footwearFaqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            Footwear & Fashion
          </div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white mt-6 max-w-[16ch]">
            Footwear &
            <br />
            <span className="italic text-[#e83b2c]">fashion</span> photography.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-8 leading-relaxed">
            Professional footwear and fashion product photography for e-commerce and brands. Shoe photography, apparel lookbooks, and lifestyle fashion imagery.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Footwear & Fashion Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Shoe Photography \u2014 Studio",
                desc: "Clean, white-background shoe photography for e-commerce. Studio packshots for Amazon, Flipkart, and marketplace listings.",
              },
              {
                title: "Footwear Photography \u2014 Lifestyle",
                desc: "Lifestyle shoe photography in natural contexts. On-location shooting for brand campaigns and social media.",
              },
              {
                title: "Footwear E-commerce Photography",
                desc: "Marketplace-ready shoe photography. Multiple angles, consistent lighting, and brand-specific color grading.",
              },
              {
                title: "Apparel & Fashion Lookbooks",
                desc: "Professional fashion lookbook photography. Complete outfit styling, model coordination, and lifestyle contexts.",
              },
              {
                title: "Fashion Product Photography",
                desc: "High-end apparel product shots. Clothing, accessories, and fashion items for e-commerce and catalogs.",
              },
              {
                title: "Fashion Campaign Shoots",
                desc: "Art-directed fashion campaigns. From concept through production to final brand-ready imagery.",
              },
            ].map((service, idx) => (
              <div key={idx} className="border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors">
                <h3 className="text-xl font-serif text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Footwear & Fashion Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Collection Review",
                desc: "Review your footwear or apparel collection. Prioritize items for shooting and plan shoot days.",
              },
              {
                step: "02",
                title: "Production Setup",
                desc: "Studio or on-location setup. Lighting, styling, and readiness for all items scheduled.",
              },
              {
                step: "03",
                title: "Shoot Day",
                desc: "Fast, focused shooting. Multiple angles and variations for each shoe or fashion item.",
              },
              {
                step: "04",
                title: "Retouching & Delivery",
                desc: "Color correction, background cleanup, and marketplace optimization. All images delivered in 5-7 days.",
              },
            ].map((process) => (
              <div key={process.step} className="border-t border-white/10 pt-6">
                <span className="text-[#e83b2c] text-sm font-medium">{process.step}</span>
                <h3 className="text-xl font-serif text-white mt-4 mb-3">{process.title}</h3>
                <p className="text-white/50 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="h-section mb-12">
            Footwear & Fashion Photography — Common Questions
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "What angles do you shoot for e-commerce footwear?",
                a: "Standard e-commerce footwear coverage includes the three-quarter hero, medial profile, lateral profile, top-down, sole detail, and pair shot. For campaign work, we add lifestyle contexts (in-use) and macro detail (stitching, texture, materials).",
              },
              {
                q: "Do you offer on-model shoe photography?",
                a: "Yes. We coordinate models, styling, and locations for on-model campaigns. For catalog work, we typically shoot on-foot or off-foot (white-background cutouts) and ghost-mannequin cutouts for apparel.",
              },
              {
                q: "What is the turnaround time for footwear catalog work?",
                a: "Standard turnaround is 5–7 business days after the shoot. Bulk catalog work (50–200+ SKUs) is typically delivered in batches so you can start listing while we continue shooting the remaining items.",
              },
              {
                q: "Can you handle colour-critical work for fashion?",
                a: "Yes. We shoot a Calibrite ColorChecker reference target on every scene, lock white balance against neutral patches, and use colour-managed workflows end to end so the colours in your final files match the actual product.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group border-t border-white/10 py-6 last:border-b"
              >
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-white text-lg font-serif">
                  {item.q}
                  <span className="text-[#e83b2c] shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-white/50 mt-4 leading-relaxed max-w-[70ch]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-4 md:px-12 pb-28 pt-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact?service=Footwear%20%26%20Fashion%20Photography"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="italic text-[#e83b2c]">Photograph your footwear collection</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]"> —</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
