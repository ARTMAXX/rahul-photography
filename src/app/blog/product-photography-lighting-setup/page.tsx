import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  // Short meta title; the H1 inside the article still uses the long form.
  title: "Product Photography Lighting Setups",
  description:
    "Professional product photography lighting setups. Learn key light, rim light, and negative fill techniques for e-commerce and commercial work.",
  alternates: { canonical: "/blog/product-photography-lighting-setup" },
  keywords: "product photography lighting, product lighting setup, key light, rim light, negative fill, ecommerce product photography lighting",
  openGraph: {
    // Match the short meta title so link previews match the browser tab.
    title: "Product Photography Lighting Setups",
    description:
      "Master product photography lighting. Learn key light, rim light, and negative fill for professional product shots.",
    url: absoluteUrl("/blog/product-photography-lighting-setup"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Product Photography Lighting — Key Light, Rim Light & Negative Fill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Photography Lighting Setups",
    description:
      "Master product photography lighting. Learn key light, rim light, and negative fill for professional product shots.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const lightingSchema = {
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
          "name": "Product Photography Lighting",
          "item": absoluteUrl("/blog/product-photography-lighting-setup"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Product Photography Lighting: Key Light, Rim Light & Negative Fill",
      "description": "Professional product photography lighting setups for e-commerce and commercial work.",
      "image": absoluteUrl("/opt/og-image.jpg"),
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "publisher": {
        "@type": "Organization",
        "name": "Rahul Chanda Photography",
        "logo": {
          "@type": "ImageObject",
          "url": absoluteUrl("/icon.svg"),
        },
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Chanda",
        "url": absoluteUrl("/about"),
        "jobTitle": "Commercial Product Photographer",
        "image": absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      },
      "mainEntity": {
        "@type": "HowTo",
        "name": "Product Photography Lighting Setups",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Set up key light",
            "text": "Position your main light at 45 degrees to the product.",
          },
          {
            "@type": "HowToStep",
            "name": "Add rim light",
            "text": "Place a secondary light behind or to the side for edge separation.",
          },
          {
            "@type": "HowToStep",
            "name": "Use negative fill",
            "text": "Block ambient light with black reflectors or flags to create contrast.",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a basic product photography lighting setup?", "acceptedAnswer": { "@type": "Answer", "text": "One large diffused key light at about 45 degrees to the product, a white bounce card opposite for shadow fill, and a rim light behind for edge separation. This three-element recipe adapts to almost any product by changing the size and distance of the sources." } },
        { "@type": "Question", "name": "What does negative fill do in a lighting setup?", "acceptedAnswer": { "@type": "Answer", "text": "Negative fill is a black flag or card placed opposite the key light that absorbs stray bounce instead of adding it. It deepens the shadow side of the product, adding the contrast and dimension that separates premium packshots from flat catalog snapshots." } },
        { "@type": "Question", "name": "Should you start with one light or multiple lights?", "acceptedAnswer": { "@type": "Answer", "text": "Start with one light and move it — distance, angle, and modifier size change everything. Add a rim light when the product blends into the background, and gradient scrims or strip boxes only once the key relationship is dialed in." } },
        { "@type": "Question", "name": "Are strobes or LED lights better for product photography?", "acceptedAnswer": { "@type": "Answer", "text": "Color-stable studio strobes win for stills: consistent color temperature across thousands of flashes and more power for clean depth of field. LEDs suit hybrid photo-video shoots. Cheap LEDs drift in color as they heat, which breaks batch consistency." } },
      ],
    },

  ],
};

export default function ProductPhotographyLightingBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lightingSchema),
        }}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Product Photography</span>
          <h1 className="h-display">
            Product Photography Lighting: Key Light, Rim Light & Negative Fill
          </h1>
          <p className="t-lede mt-6 mb-8">
            Master three professional lighting setups that every e-commerce and commercial product photographer needs to know.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>August 25, 2026</span>
            <span>' </span>
            <span>12 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "The key light establishes primary exposure and direction; diffusion scrims wrapped close to the product create smooth, graduated gradients.",
                "Rim lights (strip boxes with grids) placed behind the product separate it from the background with crisp silhouette highlights.",
                "Negative fill (black foam core) absorbs scattered light and deepens side shadows, creating the rich contrast associated with luxury product photography.",
                "Overhead boom lighting clarifies top surfaces, lid contours, and upper packaging typography for e-commerce catalog completeness.",
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
          <h2 className="h-section mt-16 mb-6">Why Lighting Matters in Product Photography</h2>
          <p className="t-body mb-4">
            The difference between amateur and professional product photography is 90% lighting. You can have a premium product, perfect camera settings, and great composition — but without proper lighting, your product photos will look flat, unconvincing, and fail to convert.
          </p>
          <p className="t-body">
            In this guide, I'll break down three professional lighting setups I use for commercial product photography. These aren't theories — they're production-tested techniques I use for e-commerce brands, luxury product shoots, and advertising campaigns.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Setup 01: Key Light (Main Light)</h2>
          <p className="t-body mb-4">
            The key light is your primary light source. It defines the shape, form, and volume of your product.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h3 className="text-xl font-serif text-white mb-3">Position:</h3>
            <p className="text-white/70">45 degrees to the product, elevated 30-45 degrees above the horizontal plane. This creates dimension without harsh shadows.</p>
          </div>
          <p className="t-body mb-4">
            Your key light should be large and soft. Use a softbox (2x3 feet or larger) or diffusion to create flattering shadows that reveal product details without looking overly dramatic.
          </p>
          <p className="t-body">
            For reflective products (watches, cosmetics, jewelry), the key light also creates the primary highlight. Control this highlight carefully — it defines perceived quality and premium perception.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Setup 02: Rim Light (Back Light)</h2>
          <p className="t-body mb-4">
            The rim light is a secondary light that separates your product from the background and creates visual interest.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h3 className="text-xl font-serif text-white mb-3">Position:</h3>
            <p className="text-white/70">Behind or to the side of the product, slightly elevated. Angle it to graze the edges of your product.</p>
          </div>
          <p className="t-body mb-4">
            This light creates edge separation — the visual boundary between your product and background. Without rim light, your product can look flat and merged into the background.
          </p>
          <p className="t-body">
            Use a smaller, harder light source (strip light, Fresnel, or small softbox) to create controlled edge definition. Intensity should be 30-50% of your key light to feel natural.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Setup 03: Negative Fill (Shadow Control)</h2>
          <p className="t-body mb-4">
            Negative fill isn't a light — it's the strategic blocking of ambient light to create contrast and shape.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h3 className="text-xl font-serif text-white mb-3">What It Does:</h3>
            <p className="text-white/70">Blocks light from filling shadows, creating deeper, more defined shadows that reveal product form.</p>
          </div>
          <p className="t-body mb-4">
            Position black flags, black foam board, or black fabric on the opposite side of your key light. This prevents light bounce that would otherwise soften shadows and flatten your product.
          </p>
          <p className="t-body">
            The more aggressive your negative fill, the more dramatic and premium your product will appear. E-commerce packshots need subtle negative fill. Luxury product photography uses more aggressive negative fill to create dramatic, editorial lighting.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Common Lighting Mistakes</h2>
          <div className="space-y-4">
            {[
              {
                mistake: "Flat lighting (no shadows)",
                why: "When you light evenly from all sides, your product looks flat and 2D.",
                fix: "Use negative fill to create depth and shape.",
              },
              {
                mistake: "Shadows too harsh",
                why: "Hard, small lights create sharp shadows that look cheap.",
                fix: "Use larger, softer light sources. Increase key light size.",
              },
              {
                mistake: "Rim light too bright",
                why: "When rim light outshines key light, it confuses the viewer.",
                fix: "Keep rim light 30-50% intensity of key light.",
              },
              {
                mistake: "No edge separation",
                why: "Without rim light, product merges into background.",
                fix: "Always add a subtle rim light behind/to the side.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-[#e83b2c] mb-2">' {item.mistake}</h4>
                <p className="text-white/60 mb-2">
                  <strong>Why:</strong> {item.why}
                </p>
                <p className="text-white/60">
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">When to Use Each Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Packshots",
                lighting: "Soft key light + subtle rim + minimal negative fill",
                reason: "Clean, friendly, conversion-focused",
              },
              {
                title: "Luxury Products",
                lighting: "Controlled key light + strong rim + aggressive negative fill",
                reason: "Dramatic, editorial, premium perception",
              },
              {
                title: "Beverage & Glass",
                lighting: "Precise key light + strategic rim + careful negative fill",
                reason: "Reveals shape, transparency, and detail",
              },
            ].map((setup, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-white mb-3">{setup.title}</h4>
                <p className="text-white/60 text-sm mb-3">
                  <strong>Lighting:</strong> {setup.lighting}
                </p>
                <p className="text-white/60 text-sm">
                  <strong>Why:</strong> {setup.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ — People-Also-Ask targeting */}
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">What is a basic product photography lighting setup?</h3>
              <p className="t-body mt-2">One large diffused key light at about 45 degrees to the product, a white bounce card opposite for shadow fill, and a rim light behind for edge separation. This three-element recipe adapts to almost any product by changing the size and distance of the sources.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">What does negative fill do in a lighting setup?</h3>
              <p className="t-body mt-2">Negative fill is a black flag or card placed opposite the key light that absorbs stray bounce instead of adding it. It deepens the shadow side of the product, adding the contrast and dimension that separates premium packshots from flat catalog snapshots.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">Should you start with one light or multiple lights?</h3>
              <p className="t-body mt-2">Start with one light and move it — distance, angle, and modifier size change everything. Add a rim light when the product blends into the background, and gradient scrims or strip boxes only once the key relationship is dialed in.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">Are strobes or LED lights better for product photography?</h3>
              <p className="t-body mt-2">Color-stable studio strobes win for stills: consistent color temperature across thousands of flashes and more power for clean depth of field. LEDs suit hybrid photo-video shoots. Cheap LEDs drift in color as they heat, which breaks batch consistency.</p>
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

        {/* Internal Link to Service */}
        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Need Professional Product Photography?</h3>
            <p className="text-white/70 mb-6">
              Lighting is just one part of the equation. You also need the right camera, lenses, composition, styling, and retouching. At Rahul Chanda Photography, we handle all of it.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Explore Product Photography Services
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
