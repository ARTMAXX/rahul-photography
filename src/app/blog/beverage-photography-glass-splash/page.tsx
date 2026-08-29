import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beverage Product Photography: Glass, Condensation & Splash | Complete Guide",
  description:
    "Professional beverage photography guide. Learn glass product photography, condensation techniques, splash photography, and beverage lighting for product shoots and campaigns.",
  alternates: { canonical: "/blog/beverage-photography-glass-splash" },
  keywords: "beverage product photography, glass product photography, beverage splash photography, beverage photography techniques, glass bottle lighting",
  openGraph: {
    title: "Beverage Product Photography: Glass, Condensation & Splash",
    description: "Master beverage photography. Learn glass lighting, condensation, and splash techniques.",
    url: absoluteUrl("/blog/beverage-photography-glass-splash"),
    type: "article",
  },
};

const beverageSchema = {
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
          "name": "Beverage Photography",
          "item": absoluteUrl("/blog/beverage-photography-glass-splash"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Beverage Product Photography: Glass, Condensation & Splash",
      "description": "Professional beverage photography guide for glass products, condensation, and splash techniques.",
      "image": absoluteUrl("/opt/og-image.jpg"),
      "datePublished": "2026-08-31",
      "dateModified": "2026-08-31",
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

export default function BeveragePhotographyBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(beverageSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Beverage Photography</span>
          <h1 className="h-display">
            Beverage Product Photography: Glass, Condensation & Splash
          </h1>
          <p className="t-lede mt-6 mb-8">
            Advanced guide to professional beverage photography. Master glass lighting, condensation effects, and splash photography for commercial work.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>August 31, 2026</span>
            <span>' </span>
            <span>15 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Why Beverage Photography is Uniquely Challenging</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Beverage photography is one of the hardest product photography disciplines. Unlike solid products, beverages have three unique challenges:
          </p>
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-[#e83b2c] pl-6 py-3 bg-white/5">
              <strong className="text-white">Transparency:</strong> <span className="text-white/70">Glass is transparent. Light passes through, creating complex reflections and highlights.</span>
            </div>
            <div className="border-l-4 border-[#e83b2c] pl-6 py-3 bg-white/5">
              <strong className="text-white">Reflections:</strong> <span className="text-white/70">Even small light sources create unwanted reflections in glass surfaces.</span>
            </div>
            <div className="border-l-4 border-[#e83b2c] pl-6 py-3 bg-white/5">
              <strong className="text-white">Condensation:</strong> <span className="text-white/70">Condensation droplets are fleeting. Timing is critical.</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Glass Lighting: The Foundation</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Lighting glass beverages requires precision and control.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h4 className="text-lg font-serif text-white mb-3">Backlighting for Glass Beverages:</h4>
            <p className="text-white/70 mb-3">Place a bright light behind the glass to illuminate the beverage liquid and create transparency. This creates:
            </p>
            <ul className="space-y-2 text-white/70 ml-4">
              <li>'  Visible liquid color (for teas, juices, sodas)</li>
              <li>'  Edge separation from background</li>
              <li>'  Glow effect that shows freshness</li>
            </ul>
          </div>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
            <h4 className="text-lg font-serif text-white mb-3">Side/Key Light for Glass Shape:</h4>
            <p className="text-white/70">Position a secondary light at 45° to reveal the glass bottle/cup shape and create highlights. Use diffusion to avoid harsh reflections.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Creating Realistic Condensation</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Condensation signals a cold, fresh drink. It's essential for beverage photography appeal.
          </p>
          <div className="space-y-4">
            {[
              {
                method: "Real Condensation (Best)",
                steps: "Chill the glass in freezer 2-3 hours. Place in room-temperature environment. Condensation forms naturally over 5-10 minutes. Shoot quickly before droplets evaporate.",
              },
              {
                method: "Water Spray Method",
                steps: "Spray cold water on glass with fine mister. Creates immediate condensation effect. Lasts 20-30 minutes before evaporating.",
              },
              {
                method: "Glycerin Drops (Professional)",
                steps: "Place glycerin drops on glass. They don't evaporate. Mix glycerin with water for realistic droplet effect. Removes easily in post-production.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-white mb-3">{item.method}</h4>
                <p className="text-white/70">{item.steps}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Beverage Splash Photography</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Splash photography requires timing, technique, and many attempts.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h4 className="text-lg font-serif text-white mb-3">Setup for Splash:</h4>
            <ul className="space-y-2 text-white/70">
              <li>'  High-speed flash (1/500-1/1000s shutter) to freeze motion</li>
              <li>'  Clean background (white or dark, depending on beverage)</li>
              <li>'  Protective barriers (plastic sheets to contain splashing liquid)</li>
              <li>'  Camera positioned to capture peak splash moment</li>
              <li>'  Multiple attempts (spray bottles, drop methods, hand tosses)</li>
            </ul>
          </div>
          <p className="text-lg text-white/70 leading-relaxed">
            Expect 50+ attempts for one usable splash shot. Timing the peak splash moment is everything. Professional splash photography requires patience and technical mastery.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Managing Reflections & Highlights</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Unwanted reflections kill beverage shots. Precise control prevents them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Creating Controlled Highlights</h4>
              <p className="text-white/70 text-sm">Place small light sources strategically to create attractive highlights on glass. These highlights signal premium quality and product appeal.</p>
            </div>
            <div className="border border-white/10 p-6">
              <h4 className="text-white font-serif mb-3">Blocking Unwanted Reflections</h4>
              <p className="text-white/70 text-sm">Use black flags and gobos to block unwanted light sources that create confusing reflections in glass.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Post-Production for Beverage Photography</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Retouching is essential for beverage shots.
          </p>
          <ul className="space-y-3 text-lg text-white/70 leading-relaxed">
            <li>'  <strong>Color correction:</strong> Bring out beverage liquid color. Increase vibrancy and saturation</li>
            <li>'  <strong>Condensation enhancement:</strong> Sharpen and brighten real condensation droplets</li>
            <li>'  <strong>Highlight control:</strong> Reduce harsh highlights, enhance subtle ones</li>
            <li>'  <strong>Background cleanup:</strong> Remove unwanted reflections or dust</li>
            <li>'  <strong>Bubble/foam enhancement:</strong> For carbonated beverages, enhance bubble detail</li>
          </ul>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Need Professional Beverage Photography?</h3>
            <p className="text-white/70 mb-6">
              Beverage photography requires specialized lighting, technique, and equipment. We handle complete beverage and splash photography shoots.
            </p>
            <Link
              href="/services/food-beverage-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book Beverage Photography ®
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
