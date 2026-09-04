import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  // Short meta title; the H1 inside the article still uses the long form.
  title: "How to Photograph Products for E-commerce",
  description:
    "7-step process for photographing products for e-commerce: lighting, background, retouching. For Amazon, Shopify, and online stores.",
  alternates: { canonical: "/blog/how-to-photograph-products-ecommerce" },
  keywords: "how to photograph products, ecommerce product photography, product photography for ecommerce, product photos for online store, product photography tips",
  openGraph: {
    // Match the short meta title so link previews match the browser tab.
    title: "How to Photograph Products for E-commerce",
    description:
      "Master e-commerce product photography. Step-by-step process from lighting to retouching.",
    url: absoluteUrl("/blog/how-to-photograph-products-ecommerce"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "E-commerce Product Photography — 7-Step Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Photograph Products for E-commerce",
    description:
      "Master e-commerce product photography. Step-by-step process from lighting to retouching.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
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
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "publisher": {
        "@type": "Organization",
        "name": "Rahul Chanda Photography",
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Chanda",
        "url": absoluteUrl("/about"),
        "jobTitle": "Commercial Product Photographer",
        "image": absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How do I photograph products for e-commerce at home?", "acceptedAnswer": { "@type": "Answer", "text": "One window with diffusion, a white sweep or large white card, and your phone on a tripod will beat most DIY attempts. Lock exposure and white balance, keep the product filling about 85% of the frame, and shoot every SKU from the same height and distance." } },
        { "@type": "Question", "name": "What is the best lighting setup for product photos?", "acceptedAnswer": { "@type": "Answer", "text": "One large, diffused key light at roughly 45 degrees, a white bounce card opposite for shadow fill, and — if the surface is reflective — a second small light for a rim edge. Avoid mixing daylight with tungsten room light; mixed color temperature is the #1 DIY mistake." } },
        { "@type": "Question", "name": "What size and format should e-commerce product images be?", "acceptedAnswer": { "@type": "Answer", "text": "Amazon: at least 1600px on the longest edge for zoom, pure white main image, JPEG under 10MB. Flipkart: 1000x1000px minimum. Shopify/DTC: 2048x2048px square, WebP or JPEG optimized to 100-200KB for fast mobile loads." } },
        { "@type": "Question", "name": "Should a small brand DIY product photos or hire a professional?", "acceptedAnswer": { "@type": "Answer", "text": "DIY works for early validation with this guide's process. Hire a professional when you hit marketplace scale, need consistent catalogs of 20+ SKUs, or the product's premium perception depends on image quality — the conversion and return-rate math usually pays for the shoot." } },
      ],
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
            <span>August 22, 2026</span>
            <span>' </span>
            <span>14 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "70% of e-commerce purchasing decisions are driven by product photography — professional imagery directly increases conversion rates.",
                "Use a pure white or light grey sweep background with edge lighting to separate the product and keep focus on the item.",
                "Shoot at your marketplace's required resolution (Amazon: 1000px+ on longest edge) in RAW or high-quality JPEG.",
                "Apply consistent color calibration with a ColorChecker target to ensure all product images share identical white balance and tonal curves.",
              ].map((point, i) => (
                <li key={i} className="text-white/70 text-sm leading-relaxed pl-2 border-l border-white/10">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Why Professional Product Photography Matters for E-commerce</h2>
          <p className="t-body mb-4">
            70% of e-commerce purchasing decisions are influenced by product photography. On Amazon, Flipkart, and Shopify, your product photos are your sales tool. Poor photos mean lost sales. Professional photos mean conversions.
          </p>
          <p className="t-body">
            This guide breaks down the exact 7-step process I use for every e-commerce product shoot "'— from background selection through final retouching. Follow these steps, and your product photos will be marketplace-ready and conversion-optimized.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 01: Background Selection</h2>
          <p className="t-body mb-4">
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
          <p className="t-body mb-4">
            Lighting is 90% of product photography quality.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h4 className="text-lg font-serif text-white mb-3">Three-Light Setup (Professional):</h4>
            <ul className="space-y-3 text-white/70">
              <li>— <strong>Key Light:</strong> Large softbox at 45°, 30-45° elevated. Primary light defining product form.</li>
              <li>— <strong>Rim Light:</strong> Smaller light behind/to the side. Creates edge separation and depth.</li>
              <li>— <strong>Fill Light/Reflector:</strong> Soft fill to catch shadows without harshness.</li>
            </ul>
          </div>
          <p className="t-body">
            For white backgrounds, ensure your backdrop is evenly lit to stay pure white. Underlit white backgrounds look gray and fail Amazon's white-background requirement.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 03: Camera Angle & Composition</h2>
          <p className="t-body mb-4">
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
          <p className="t-body mb-4">
            How you position your product signals quality and intent.
          </p>
          <ul className="space-y-3 t-body mb-6">
            <li>— <strong>Center alignment:</strong> Product centered in frame for clean composition.</li>
            <li>— <strong>Props & scale:</strong> Show actual size with subtle context (coin, hand, surface).</li>
            <li>— <strong>Materials:</strong> Feature product materials (metal, glass, fabric) with appropriate lighting.</li>
            <li>— <strong>Stability:</strong> Ensure product sits naturally. Use fishing line or adhesive if necessary (remove in retouching).</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Step 05: Consistency Across Your Catalog</h2>
          <p className="t-body mb-4">
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
          <p className="t-body mb-4">
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
          <p className="t-body mb-4">
            File format and size matter for marketplace optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Amazon Requirements</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>— Format: JPEG or TIFF</li>
                <li>— Minimum 1600px (long edge)</li>
                <li>— File size: Under 10MB</li>
                <li>— Background: 85%+ white</li>
                <li>— Product occupies 85% of frame</li>
              </ul>
            </div>
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Shopify/DTC Requirements</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>— Format: JPEG or WebP</li>
                <li>— Recommended 2400px+</li>
                <li>— Optimized for web (100-200KB)</li>
                <li>— Mobile-friendly aspect ratio</li>
                <li>— Alternative backgrounds acceptable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ — People-Also-Ask targeting */}
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">How do I photograph products for e-commerce at home?</h3>
              <p className="t-body mt-2">One window with diffusion, a white sweep or large white card, and your phone on a tripod will beat most DIY attempts. Lock exposure and white balance, keep the product filling about 85% of the frame, and shoot every SKU from the same height and distance.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">What is the best lighting setup for product photos?</h3>
              <p className="t-body mt-2">One large, diffused key light at roughly 45 degrees, a white bounce card opposite for shadow fill, and — if the surface is reflective — a second small light for a rim edge. Avoid mixing daylight with tungsten room light; mixed color temperature is the #1 DIY mistake.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">What size and format should e-commerce product images be?</h3>
              <p className="t-body mt-2">Amazon: at least 1600px on the longest edge for zoom, pure white main image, JPEG under 10MB. Flipkart: 1000x1000px minimum. Shopify/DTC: 2048x2048px square, WebP or JPEG optimized to 100-200KB for fast mobile loads.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">Should a small brand DIY product photos or hire a professional?</h3>
              <p className="t-body mt-2">DIY works for early validation with this guide's process. Hire a professional when you hit marketplace scale, need consistent catalogs of 20+ SKUs, or the product's premium perception depends on image quality — the conversion and return-rate math usually pays for the shoot.</p>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <div className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 hidden md:block">
              <Image
                src="/opt/about-photo/rahul-chanda-portrait.webp"
                alt="Rahul Chanda, commercial product photographer"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#e83b2c] mb-2">About the author</p>
              <h3 className="text-lg font-serif text-white mb-2">
                <Link href="/about" className="hover:text-[#e83b2c] transition-colors">Rahul Chanda</Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Commercial product photographer based in Dehradun, India. 6+ years shooting product, food & beverage, and advertising campaigns with in-house retouching. Serving brands across Uttarakhand and pan-India.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1 text-xs text-[#e83b2c] hover:text-[#f0523f] mt-3 transition-colors">
                View full profile <span>&rarr;</span>
              </Link>
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
              Book E-commerce Product Photography
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
