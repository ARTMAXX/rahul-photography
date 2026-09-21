import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import ServiceCta from "@/components/ui/service-cta";
import { absoluteUrl } from "@/lib/site";

// FAQPage schema for AI search engines and voice search (Sept 2026).
// Note: Google retired FAQ rich results in May 2026, but FAQPage schema
// still helps voice search and AI Overview citation.
const footwearFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/services/footwear-photography#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "What angles do you shoot for e-commerce footwear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard e-commerce footwear coverage includes the three-quarter hero, medial profile, lateral profile, top-down, sole detail, and pair shot. For brand campaigns we add lifestyle contexts (in-use) and macro detail shots of stitching, texture, and materials.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer on-model shoe photography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate models, styling, and locations for on-foot campaign work. For catalog jobs we typically shoot off-foot on white for clean marketplace cutouts, and on-foot only where the listing requires a wear shot.",
      },
    },
    {
      "@type": "Question",
      name: "What is the turnaround time for footwear catalog work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard turnaround is 5–7 business days after the shoot. Bulk catalog work of 50–200+ SKUs is delivered in batches so you can start listing while we continue shooting the remaining items.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match the exact colour of the shoe material?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We shoot a Calibrite ColorChecker reference target on every scene, lock white balance against neutral patches, and use colour-managed workflows end to end so leather, suede, mesh, and synthetic finishes in your final files match the actual product.",
      },
    },
  ],
};
export const metadata: Metadata = {
  title: "Footwear & Sneaker Photographer in Dehradun | Rahul Chanda",
  description:
    "Footwear product photographer in Dehradun: white-background sneaker packshots, 6-angle catalog coverage, lifestyle campaigns. In-house retouching.",
  alternates: { canonical: "/services/footwear-photography" },
  openGraph: {
    title: "Footwear Photographer in Dehradun — Shoe & Sneaker Product Photography",
    description:
      "Shoe photography in Dehradun for D2C footwear brands and marketplaces. E-commerce packshots, multi-angle catalog coverage, and brand campaign imagery.",
    url: absoluteUrl("/services/footwear-photography"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/opt/og-image-footwear-fashion.jpg"),
        width: 1200,
        height: 630,
        alt: "Footwear photography — shoe product packshots by Rahul Chanda, Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwear Photographer in Dehradun | Rahul Chanda",
    description:
      "Shoe and sneaker product photography in Dehradun. E-commerce catalog coverage, angles, and brand campaigns.",
    images: [absoluteUrl("/opt/og-image-footwear-fashion.jpg")],
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
          "name": "Footwear Photography",
          "item": absoluteUrl("/services/footwear-photography"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/footwear-photography#service"),
      "name": "Footwear Photography",
      "description":
        "Professional footwear product photography for e-commerce and brands. Studio shoe packshots, multi-angle catalog coverage, sneaker detail macros, and lifestyle campaign imagery.",
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

export default function FootwearPhotographyPage() {
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

      {/* Hero — full-bleed photo, text in the free space left of the shoe */}
      <section className="relative flex min-h-[92vh] w-full items-start justify-start overflow-hidden px-4 pb-16 pt-32 md:px-12 lg:min-h-[100svh] lg:items-center lg:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/best shots/eachHeropages/High-end-shoe-services-footwear-photography.webp"
            alt="High-end shoe packshot — footwear product photography by Rahul Chanda, Dehradun"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_50%]"
          />
          {/* Mobile: top scrim. Desktop: left-side scrim behind text only — shoe stays clean */}
          <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#070707]/85 via-[#070707]/40 to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-[50%] bg-gradient-to-r from-[#070707]/90 via-[#070707]/55 to-transparent lg:block" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070707]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070707] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="max-w-[36rem] text-left">
            <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
              Footwear Photography
            </div>
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-serif leading-[0.95] tracking-[-0.03em] text-white mt-5 max-w-[14ch] text-balance">
              Footwear <span className="italic text-[#e83b2c]">product</span> photography.
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-[52ch] mt-5 leading-relaxed text-balance">
              Studio shoe photography built for e-commerce — white-background
              packshots, consistent multi-angle coverage, and marketplace-compliant
              files for footwear brands and D2C labels.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Footwear Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Shoe Photography — Studio",
                desc: "Clean, white-background shoe photography for e-commerce. Studio packshots for Amazon, Flipkart, Myntra, and Shopify listings.",
              },
              {
                title: "Sneaker Packshots",
                desc: "Crisp sneaker product photography with true-to-material colour on mesh, knit, leather, and synthetic uppers. Hero, profile, and sole angles.",
              },
              {
                title: "Footwear E-commerce Catalog",
                desc: "Marketplace-ready shoe photography at scale. Multiple angles per SKU, consistent lighting across the run, and brand-specific colour grading.",
              },
              {
                title: "Detail & Macro Shots",
                desc: "Close-up detail photography of stitching, laces, eyelets, tread patterns, and material texture — the shots that reduce buyer hesitation and returns.",
              },
              {
                title: "Lifestyle Shoe Photography",
                desc: "In-use footwear imagery on location and in natural contexts. For brand campaigns, social media, and storefront content.",
              },
              {
                title: "On-Foot Campaign Shoots",
                desc: "Model-coordinated on-foot and editorial footwear campaigns, from concept through art direction to final brand-ready imagery.",
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

      {/* What is Footwear Product Photography */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-14">
            What is Footwear <span className="italic text-[#e83b2c]">Product</span> Photography?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Footwear product photography is the studio discipline of shooting shoes, sneakers,
                sandals, and boots as sellable product rather than lifestyle editorial. The image has
                one job: make the buyer confident about shape, material, colour, and finish before the
                shoe is in their hands.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                That means clean backgrounds, consistent angles across every SKU, colour measured
                against a reference target instead of eyeballed, and files that pass marketplace image
                checks the first time. We shoot footwear in-house in Dehradun with colour-managed
                lighting and stock-ready retouching.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Multi-Angle Coverage</h3>
                <p className="text-white/50">Three-quarter hero, medial and lateral profiles, top-down, sole detail, and the pair shot — the standard sequence that lifts conversion and reduces returns.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">True-to-Material Colour</h3>
                <p className="text-white/50">Leather, suede, mesh, knit, and synthetic finishes photographed with a ColorChecker reference so the final file matches the physical shoe.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Marketplace-Ready Files</h3>
                <p className="text-white/50">Amazon, Flipkart, Myntra, and Shopify specs — correct crop, background, and resolution, named and batch-delivered so you can start listing the same week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Footwear Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Product Prep & Shot List",
                desc: "We agree the angle set per SKU, clean and stage the shoes, and set the colour reference so every listing follows the same standard.",
              },
              {
                step: "02",
                title: "Studio Capture",
                desc: "Colour-managed lighting on white or brand background. Bulk catalog runs are shot in batches so large SKU counts stay efficient.",
              },
              {
                step: "03",
                title: "Retouching",
                desc: "Dust, scuffs, and stray threads removed, laces dressed, and colour matched to the reference target — without altering the actual product.",
              },
              {
                step: "04",
                title: "Batch Delivery",
                desc: "High-res masters plus marketplace-sized crops, named to your SKU list and delivered in tranches so you can list as we finish.",
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

      {/* Internal Linking */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            Related Services &amp; Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/services/product-photography"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Parent Service</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                E-commerce Product Photography in Dehradun
              </h3>
              <p className="text-white/50 mt-3">The full product studio — packshots, catalog volume, and marketplace files for every category</p>
            </Link>
            <Link
              href="/blog/footwear-photography-angles"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Guide</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                The Footwear Photography Angle Sequence
              </h3>
              <p className="text-white/50 mt-3">The exact angle set we shoot for e-commerce and brand lookbooks</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="h-section mb-12">
            Footwear Photography — Common Questions
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "What angles do you shoot for e-commerce footwear?",
                a: "Standard e-commerce footwear coverage includes the three-quarter hero, medial profile, lateral profile, top-down, sole detail, and pair shot. For brand campaigns we add lifestyle contexts (in-use) and macro detail shots of stitching, texture, and materials.",
              },
              {
                q: "Do you offer on-model shoe photography?",
                a: "Yes. We coordinate models, styling, and locations for on-foot campaign work. For catalog jobs we typically shoot off-foot on white for clean marketplace cutouts, and on-foot only where the listing requires a wear shot.",
              },
              {
                q: "What is the turnaround time for footwear catalog work?",
                a: "Standard turnaround is 5–7 business days after the shoot. Bulk catalog work of 50–200+ SKUs is delivered in batches so you can start listing while we continue shooting the remaining items.",
              },
              {
                q: "Can you match the exact colour of the shoe material?",
                a: "Yes. We shoot a Calibrite ColorChecker reference target on every scene, lock white balance against neutral patches, and use colour-managed workflows end to end so leather, suede, mesh, and synthetic finishes in your final files match the actual product.",
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
      <ServiceCta
        label="Ready to shoot your footwear catalog?"
        href="/contact?service=Footwear%20Photography"
      />

      <CinematicFooter />
    </main>
  );
}