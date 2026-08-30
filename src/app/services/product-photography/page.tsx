import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Photography Services | E-commerce, Amazon, Flipkart & Shopify India",
  description:
    "Professional product photography in India for e-commerce, brands, and D2C businesses \u2014 Amazon, Flipkart & Shopify-ready packshots, cosmetics, watches, jewelry, and footwear, with in-house retouching. Based in Dehradun, shoots pan-India.",
  alternates: { canonical: "/services/product-photography" },
  openGraph: {
    title: "Product Photography Services | India \u2014 Amazon, Flipkart & Shopify Ready",
    description:
      "Commercial product photography for e-commerce brands, startups, and established companies across India. Platform-compliant packshots, cosmetics, watches, jewelry, and footwear photography.",
    url: absoluteUrl("/services/product-photography"),
    type: "website",
  },
};

const productPhotographySchema = {
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
          "name": "Product Photography",
          "item": absoluteUrl("/services/product-photography"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/product-photography#service"),
      "name": "Product Photography",
      "description":
        "Professional product photography services for e-commerce, brands, and businesses. Specializing in product packshots, cosmetics, watches, jewelry, footwear, and D2C products.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Rahul Chanda Photography",
        "image": absoluteUrl("/opt/og-image.jpg"),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "addressCountry": "India",
        },
        "telephone": "+917078939475",
        "url": absoluteUrl("/"),
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
        "name": "Product Photography Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Product Photography",
              "description": "Amazon, Flipkart, and marketplace-ready product packshots",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cosmetics & Skincare Photography",
              "description": "High-end beauty and skincare product shots",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Watches & Jewelry Photography",
              "description": "Luxury product macro and detail photography",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "D2C Product Photography",
              "description": "Direct-to-consumer brand product imagery",
            },
          },
        ],
      },
    },
  ],
};

export default function ProductPhotographyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productPhotographySchema),
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
            Product Photography
          </div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white mt-6 max-w-[16ch]">
            Product Photography
            <br />
            for <span className="italic text-[#e83b2c]">e-commerce</span> &
            brands.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-8 leading-relaxed">
            High-end commercial product photography that makes your products worth choosing. From packshots to luxury product detail work, we deliver e-commerce-ready and campaign-grade imagery.
          </p>
        </div>
      </section>

      {/* What is Product Photography */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            What is Professional Product Photography?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Product photography is the discipline of photographing goods for e-commerce, catalogs, advertising, and brand marketing. Unlike lifestyle photography, product photography focuses on showcasing the product itself with precision, clarity, and commercial intent.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                A professional product photographer controls every variable — lighting, composition, background, angle, and retouching — to ensure your products look premium, trustworthy, and worth buying.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">E-commerce Packshots</h3>
                <p className="text-white/50">Clean, consistent product photos for Amazon, Flipkart, Shopify, and other online marketplaces.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Campaign Photography</h3>
                <p className="text-white/50">Art-directed product imagery for advertising, social media, and brand campaigns.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Luxury Product Detail</h3>
                <p className="text-white/50">Macro and high-end product photography for watches, jewelry, cosmetics, and premium goods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Product Photography Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "E-commerce Product Packshots",
                desc: "Marketplace-ready product photography for Amazon, Flipkart, Shopify, and other online stores. White-background cutouts, consistency, and optimized file formats.",
              },
              {
                title: "Cosmetics & Skincare Photography",
                desc: "High-end beauty and skincare product photography. Bottles, jars, serums, and creams photographed with precision lighting and color accuracy.",
              },
              {
                title: "Watches & Jewelry Photography",
                desc: "Luxury product macro and detail photography. Watches, rings, necklaces, and fine jewelry with professional lighting and reflective surface control.",
              },
              {
                title: "Footwear & Apparel Photography",
                desc: "Professional shoe and apparel product photography. Studio shots and lifestyle contexts for e-commerce and campaign use.",
              },
              {
                title: "D2C Product Photography",
                desc: "Direct-to-consumer brand product imagery. From product concept photography to full catalog shoots with consistent styling and color grading.",
              },
              {
                title: "Food & Beverage Products",
                desc: "Product photography for packaged food, beverages, condiments, and FMCG brands. Studio and styled photography with appetite appeal.",
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

      {/* Why Product Photography Matters */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            Why Product Photography Matters for Your Business
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-[#e83b2c] mb-4">Conversion Impact</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  70% of e-commerce purchasing decisions are influenced by product photography. Professional images increase trust, reduce return rates, and directly impact sales.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#e83b2c] mb-4">Brand Perception</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  High-quality product photography signals that your brand cares about quality. Cheap or blurry product photos damage brand credibility.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif text-[#e83b2c] mb-4">Competitive Advantage</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  When your product photos are visibly better than competitors', customers choose you first. Professional photography is a direct competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#e83b2c] mb-4">Marketing Reuse</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  One product shoot generates imagery for websites, social media, print, ads, and campaigns. The ROI multiplies across every marketing channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Product Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Briefing",
                desc: "We discuss your products, goals, style references, and technical requirements (background, props, angles).",
              },
              {
                step: "02",
                title: "Production Day",
                desc: "Professional lighting setup, styling, composition, and shooting. You review selects in real time and provide feedback.",
              },
              {
                step: "03",
                title: "Professional Retouching",
                desc: "Color correction, background cleanup, reflective surface enhancement, and brand-specific color grading.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "High-resolution finals in print and digital formats, with marketplace-optimized versions and usage rights agreed upfront.",
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

      {/* Internal Linking to Blog */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            Learn More About Product Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/blog/product-photography-lighting-setup"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Technique</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                Product Photography Lighting: Key Light, Rim Light & Negative Fill
              </h3>
              <p className="text-white/50 mt-3">Learn professional lighting setups for product photography</p>
            </Link>
            <Link
              href="/blog/how-to-photograph-products-ecommerce"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Guide</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                How to Photograph Products for E-commerce: 7-Step Process
              </h3>
              <p className="text-white/50 mt-3">Complete guide to professional e-commerce product photography</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-4 md:px-12 pb-28 pt-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact?service=Product%20Photography"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="italic text-[#e83b2c]">Ready to photograph your products?</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]"> —</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
