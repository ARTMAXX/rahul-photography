import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import ServiceCta from "@/components/ui/service-cta";
import { absoluteUrl } from "@/lib/site";

// FAQPage schema for AI search engines and voice search (Sept 2026).
// Note: Google retired FAQ rich results in May 2026, but FAQPage schema
// still helps voice search and AI Overview citation.
const fashionFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/services/fashion-photography#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does fashion photography cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fashion photography in India starts at ₹30,000 for a half-day lookbook or editorial session with one model and one styling direction. Full-day on-model campaigns with multiple looks, talent coordination, and location production are quoted per project based on scope, crew, and deliverables.",
      },
    },
    {
      "@type": "Question",
      name: "Do you arrange models and styling for fashion shoots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate models through trusted agencies in Delhi NCR and Dehradun, and provide creative direction, mood boards, and styling guidance. You can also bring your own talent — we work with either setup.",
      },
    },
    {
      "@type": "Question",
      name: "Do you shoot fashion lookbooks on location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We shoot on location across Dehradun, Mussoorie, Rishikesh, and Delhi NCR — heritage buildings, forest trails, cafés, and urban backdrops all work well for lookbooks and editorial campaigns. Studio setups can be arranged for apparel e-commerce work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between fashion photography and footwear product photography?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Footwear product photography focuses on the product itself — packshots, detail macros, and marketplace-ready catalog images on clean backgrounds. Fashion photography is story-led: on-model imagery, lookbooks, and editorial campaigns where styling, location, and mood carry the brand narrative. We offer both as separate dedicated services.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Fashion Photographer in Dehradun | Lookbook & Editorial",
  description:
    "Fashion photographer in Dehradun for apparel brands & boutiques: on-model lookbooks, editorial campaigns, e-commerce imagery. In-house retouching.",
  alternates: { canonical: "/services/fashion-photography" },
  openGraph: {
    title: "Fashion Photographer in Dehradun — Lookbooks, On-Model & Editorial",
    description:
      "Fashion photography in Dehradun for apparel brands, boutiques, and D2C labels. On-model lookbooks, editorial campaigns, and apparel e-commerce imagery with creative direction.",
    url: absoluteUrl("/services/fashion-photography"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/best shots/eachHeropages/lifestyle-fashion-services-fashion-photography.webp"),
        width: 1200,
        height: 630,
        alt: "Fashion photography — on-model editorial imagery by Rahul Chanda, Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Photographer in Dehradun | Rahul Chanda",
    description: "Fashion photographer in Dehradun. On-model lookbooks, editorial campaigns, apparel e-commerce imagery, in-house retouching.",
    images: [absoluteUrl("/best shots/eachHeropages/lifestyle-fashion-services-fashion-photography.webp")],
  },
};


const fashionPhotographySchema = {
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
          "name": "Fashion Photography",
          "item": absoluteUrl("/services/fashion-photography"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/fashion-photography#service"),
      "name": "Fashion Photography",
      "description":
        "Fashion photographer in Dehradun, India. On-model lookbooks, editorial campaigns, apparel e-commerce imagery, and brand story shoots for apparel brands, boutiques, and D2C fashion labels — with creative direction, model coordination, and in-house retouching.",
      "provider": {
        "@id": absoluteUrl("/#business")
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dehradun",
        },
        {
          "@type": "City",
          "name": "Mussoorie",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fashion Photography Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fashion Lookbook Photography",
              "description": "Seasonal lookbooks shot on location or in studio with consistent styling and lighting",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Editorial Fashion Campaigns",
              "description": "Art-directed, story-led on-model imagery for brand campaigns and publications",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Apparel E-commerce Photography",
              "description": "On-model and ghost-mannequin apparel shots for Shopify, Myntra, and brand webstores",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boutique & Designer Brand Shoots",
              "description": "Brand story and collection imagery for boutiques, designers, and D2C fashion labels",
            },
          },
        ],
      },
    },
  ],
};


export default function FashionPhotographyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fashionPhotographySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fashionFaqSchema),
        }}
      />

      {/* Hero — full-bleed photo, text in the free space left of the subject */}
      <section className="relative flex min-h-[92vh] w-full items-start justify-start overflow-hidden px-4 pb-16 pt-32 md:px-12 lg:min-h-[100svh] lg:items-center lg:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/best shots/eachHeropages/lifestyle-fashion-services-fashion-photography.webp"
            alt="On-model fashion lookbook photography — fashion photography by Rahul Chanda, Dehradun"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[40%_50%]"
          />
          {/* Mobile: top scrim. Desktop: left-side scrim behind text only — subject stays clean */}
          <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#070707]/85 via-[#070707]/40 to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-[#070707]/90 via-[#070707]/55 to-transparent lg:block" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070707]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070707] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="max-w-[36rem] text-left">
            <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
              Fashion Photography
            </div>
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-serif leading-[0.95] tracking-[-0.03em] text-white mt-5 max-w-[12ch] text-balance">
              Fashion
              <br />
              Photography in <span className="italic text-[#e83b2c]">Dehradun</span>.
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-[52ch] mt-5 leading-relaxed text-balance">
              Fashion photographer for apparel brands, boutiques, and D2C labels — on-model lookbooks, editorial campaigns, and collection imagery shot across Dehradun, Mussoorie &amp; Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* What is Fashion Photography */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            What is Professional Fashion Photography?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Fashion photography is story-led imagery built around clothing, accessories, and the people who wear them. Unlike catalog packshots, fashion photography uses styling, location, light, and mood to make a collection feel like a world your customer wants to enter.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                A professional fashion photographer directs every element — model, pose, wardrobe, location, and grade — so your lookbook or campaign reads with a single, coherent brand voice from the first frame to the last.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">On-Model Lookbooks</h3>
                <p className="text-white/50">Seasonal collections shot with consistent lighting, styling, and posing — ready for your webstore, WhatsApp catalog, and press kit.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Editorial Campaigns</h3>
                <p className="text-white/50">Art-directed, story-led imagery for brand campaigns, social launches, and publications — concept to retouch handled in-house.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Apparel E-commerce</h3>
                <p className="text-white/50">On-model and ghost-mannequin apparel shots formatted for Myntra, Shopify, and your own store — consistent crops across every SKU.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Fashion Photography Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Lookbook Shoots",
                desc: "Full-collection lookbooks for boutiques, designers, and D2C labels — 30 to 80+ styled frames per session with creative direction and styling guidance included.",
              },
              {
                title: "Editorial & Campaign Imagery",
                desc: "Story-led fashion campaigns for launches and brand building. Mood boards, location scouting, model coordination, and art direction handled end to end.",
              },
              {
                title: "Apparel E-commerce Catalog",
                desc: "Marketplace-ready on-model apparel photography with consistent crops, backgrounds, and file specs for Myntra, Shopify, Amazon Fashion, and your webstore.",
              },
              {
                title: "Boutique & Designer Brand Stories",
                desc: "Ongoing imagery for boutiques and designers across Dehradun & Mussoorie — collection launches, behind-the-atelier content, and seasonal brand shoots.",
              },
            ].map((cat) => (
              <div key={cat.title} className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-serif text-white mb-4">{cat.title}</h3>
                <p className="text-white/50 leading-relaxed max-w-[60ch]">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Fashion Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Creative Direction",
                desc: "We build a mood board together — references, styling direction, locations, and model casting — so the shoot has one clear visual story.",
              },
              {
                step: "02",
                title: "Shoot Day",
                desc: "On location or in studio: professional lighting, styling checks between looks, and live selects so you approve frames as we shoot.",
              },
              {
                step: "03",
                title: "Retouching & Grade",
                desc: "Skin and fabric retouch kept natural, color graded to your brand palette, with consistent tones across the full set.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "High-res campaign masters plus webstore- and social-optimized crops. Usage rights agreed upfront — no surprises later.",
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
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Service</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                E-commerce Product Photography
              </h3>
              <p className="text-white/50 mt-3">Apparel, accessory, and product packshots plus marketplace-ready catalog coverage</p>
            </Link>
            <Link
              href="/services/footwear-photography"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Service</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                Footwear Product Photography
              </h3>
              <p className="text-white/50 mt-3">Marketplace-ready footwear packshots, detail macros, and multi-angle catalog work</p>
            </Link>
            <Link
              href="/blog/how-to-choose-commercial-photographer-dehradun"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Guide</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                How to Choose a Commercial Photographer in Dehradun
              </h3>
              <p className="text-white/50 mt-3">What to check before booking a fashion or product shoot</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="h-section mb-12">
            Fashion Photography — Common Questions
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "How much does fashion photography cost in India?",
                a: "Fashion photography in India starts at ₹30,000 for a half-day lookbook or editorial session with one model and one styling direction. Full-day on-model campaigns with multiple looks, talent coordination, and location production are quoted per project based on scope, crew, and deliverables.",
              },
              {
                q: "Do you arrange models and styling for fashion shoots?",
                a: "Yes. We coordinate models through trusted agencies in Delhi NCR and Dehradun, and provide creative direction, mood boards, and styling guidance. You can also bring your own talent — we work with either setup.",
              },
              {
                q: "Do you shoot fashion lookbooks on location?",
                a: "Yes. We shoot on location across Dehradun, Mussoorie, Rishikesh, and Delhi NCR — heritage buildings, forest trails, cafés, and urban backdrops all work well for lookbooks and editorial campaigns. Studio setups can be arranged for apparel e-commerce work.",
              },
              {
                q: "What is the difference between fashion photography and footwear product photography?",
                a: "Footwear product photography focuses on the product itself — packshots, detail macros, and marketplace-ready catalog images on clean backgrounds. Fashion photography is story-led: on-model imagery, lookbooks, and editorial campaigns where styling, location, and mood carry the brand narrative. We offer both as separate dedicated services.",
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
        label="Ready to shoot your collection?"
        href="/contact?service=Fashion%20Photography"
      />

      <CinematicFooter />
    </main>
  );
}

