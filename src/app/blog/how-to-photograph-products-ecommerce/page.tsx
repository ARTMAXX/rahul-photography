import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Photograph Products for E-commerce: 7-Step Process | Complete Guide",
  description:
    "Complete guide to photographing products for e-commerce. 7-step process from background selection to retouching. Professional e-commerce product photography for Amazon, Shopify, and online stores.",
  alternates: { canonical: "/blog/how-to-photograph-products-ecommerce" },
  keywords: "how to photograph products, ecommerce product photography, product photography for ecommerce, product photos for online store, product photography tips",
  openGraph: {
    title: "How to Photograph Products for E-commerce: Complete 7-Step Guide",
    description:
      "Master e-commerce product photography. Step-by-step process from lighting to retouching.",
    url: absoluteUrl("/blog/how-to-photograph-products-ecommerce"),
    type: "article",
  },
};

const ecommerceSchema = {
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
          "name": "Blog",
          "item": absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How to Photograph Products",
          "item": absoluteUrl("/blog/how-to-photograph-products-ecommerce"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "How to Photograph Products for E-commerce: 7-Step Process",
      "description": "Complete guide to professional e-commerce product photography.",
      "image": absoluteUrl("/opt/og-image.jpg"),
      "datePublished": "2026-08-29",
      "dateModified": "2026-08-29",
      "author": {
        "@type": "Person",
        "name": "Rahul Chanda",
        "url": absoluteUrl("/about"),
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rahul Chanda Photography",
      },
    },
  ],
};

export default function EcommercePhotographyBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecommerceSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">E-commerce Photography</span>
          <h1 className="h-display">
            How to Photograph Products for E-commerce: 7-Step Process
          </h1>
          <p className="t-lede mt-6 mb-8">
            Complete step-by-step guide to professional e-commerce product photography for Amazon, Shopify, and online stores.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>August 29, 2026</span>
            <span>' </span>
            <span>14 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Why Professional Product Photography Matters for E-commerce</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            70% of e-commerce purchasing decisions are influenced by product photography. On Amazon, Flipkart, and Shopify, your product photos are your sales tool. Poor photos mean lost sales. Professional photos mean conversions.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            This guide breaks down the exact 7-step process I use for every e-commerce product shoot "''  from background selection through final retouching. Follow these steps, and your product photos will be marketplace-ready and conversion-optimized.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 01: Background Selection</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Your background sets the tone for how your product is perceived.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
              <h4 className="text-lg font-serif text-white mb-2">White Background (Most Common)</h4>
              <p className="text-white/70">Amazon policy prefers white backgrounds for consistency. Uses infinite white backdrop or white seamless paper. Clean, minimal, product-focused.</p>
            </div>
            <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
              <h4 className="text-lg font-serif text-white mb-2">Lifestyle Background (Premium Brands)</h4>
              <p className="text-white/70">Styled surfaces, textures, or lifestyle contexts. Shows product in use. Better for DTC brands, less for Amazon.</p>
            </div>
            <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
              <h4 className="text-lg font-serif text-white mb-2">Neutral/Gray Background (Alternative)</h4>
              <p className="text-white/70">Soft, professional. Works for luxury products. Easier than pure white to maintain consistency.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 02: Professional Lighting Setup</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Lighting is 90% of product photography quality.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h4 className="text-lg font-serif text-white mb-3">Three-Light Setup (Professional):</h4>
            <ul className="space-y-3 text-white/70">
              <li>'  <strong>Key Light:</strong> Large softbox at 45°, 30-45° elevated. Primary light defining product form.</li>
              <li>'  <strong>Rim Light:</strong> Smaller light behind/to the side. Creates edge separation and depth.</li>
              <li>'  <strong>Fill Light/Reflector:</strong> Soft fill to catch shadows without harshness.</li>
            </ul>
          </div>
          <p className="text-lg text-white/70 leading-relaxed">
            For white backgrounds, ensure your backdrop is evenly lit to stay pure white. Underlit white backgrounds look gray and fail Amazon's white-background requirement.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 03: Camera Angle & Composition</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Multiple angles show different product perspectives and increase trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                angle: "Front View",
                purpose: "Hero shot. Main product face. Primary listing image.",
              },
              {
                angle: "45° Angle",
                purpose: "Shows depth and form. Reveals product shape and dimension.",
              },
              {
                angle: "Top/Detail View",
                purpose: "Shows texture, patterns, or top details. Varies by product.",
              },
            ].map((view, idx) => (
              <div key={idx} className="border border-white/10 p-4">
                <h4 className="text-white font-serif mb-2">{view.angle}</h4>
                <p className="text-white/60 text-sm">{view.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 04: Product Positioning & Styling</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            How you position your product signals quality and intent.
          </p>
          <ul className="space-y-3 text-lg text-white/70 leading-relaxed mb-6">
            <li>'  <strong>Center alignment:</strong> Product centered in frame for clean composition.</li>
            <li>'  <strong>Props & scale:</strong> Show actual size with subtle context (coin, hand, surface).</li>
            <li>'  <strong>Materials:</strong> Feature product materials (metal, glass, fabric) with appropriate lighting.</li>
            <li>'  <strong>Stability:</strong> Ensure product sits naturally. Use fishing line or adhesive if necessary (remove in retouching).</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 05: Consistency Across Your Catalog</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Amazon customers judge all your products together. Inconsistency looks unprofessional.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 mb-6">
            <h4 className="text-white font-serif mb-3">Consistency Rules:</h4>
            <ul className="space-y-2 text-white/70">
              <li> — Same lighting for all products</li>
              <li> — Same background (white, gray, etc.)</li>
              <li> — Same camera angle for similar products</li>
              <li> — Same composition frame for all variants</li>
              <li> — Same file size and resolution</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 06: Professional Retouching</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Retouching transforms good photos into marketplace-ready ones.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Color correction \u2014 white balance, exposure, vibrancy",
              "Background cleanup \u2014 pure white, no shadows or dust",
              "Product enhancement \u2014 brightness, contrast, clarity",
              "Spot removal \u2014 dust, marks, imperfections",
              "Reflection control \u2014 manage highlights on reflective surfaces",
            ].map((task, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] flex-shrink-0">\u2014</span>
                <span className="text-white/70">{task}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 07: Amazon/Shopify-Ready Export</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            File format and size matter for marketplace optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Amazon Requirements</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>'  Format: JPEG or TIFF</li>
                <li>'  Minimum 1600px (long edge)</li>
                <li>'  File size: Under 10MB</li>
                <li>'  Background: 85%+ white</li>
                <li>'  Product occupies 85% of frame</li>
              </ul>
            </div>
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Shopify/DTC Requirements</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>'  Format: JPEG or WebP</li>
                <li>'  Recommended 2400px+</li>
                <li>'  Optimized for web (100-200KB)</li>
                <li>'  Mobile-friendly aspect ratio</li>
                <li>'  Alternative backgrounds acceptable</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Ready for Professional E-commerce Product Photography?</h3>
            <p className="text-white/70 mb-6">
              Following this process manually takes time and technical skills. We handle all 7 steps for e-commerce brands and startups.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book E-commerce Product Photography - —
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
