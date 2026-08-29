import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Food Photography for Restaurants: How to Photograph Your Menu | Complete Guide",
  description:
    "Professional food photography guide for restaurants. Learn how to photograph menu items for restaurants, delivery apps, and social media. Restaurant food photography that increases orders.",
  alternates: { canonical: "/blog/food-photography-restaurants" },
  keywords: "restaurant food photography, food photography for restaurants, restaurant menu photography, food photographer, how to photograph food",
  openGraph: {
    title: "Food Photography for Restaurants: Complete Menu Photography Guide",
    description:
      "Professional restaurant food photography guide. Photograph your menu, Zomato, Swiggy, and social media content.",
    url: absoluteUrl("/blog/food-photography-restaurants"),
    type: "article",
  },
};

const foodRestaurantSchema = {
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
          "name": "Food Photography for Restaurants",
          "item": absoluteUrl("/blog/food-photography-restaurants"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Food Photography for Restaurants: How to Photograph Your Menu",
      "description": "Professional restaurant food photography guide for menus, delivery apps, and social media.",
      "image": absoluteUrl("/opt/og-image.jpg"),
      "datePublished": "2026-08-30",
      "dateModified": "2026-08-30",
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

export default function FoodRestaurantPhotographyBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(foodRestaurantSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Restaurant Photography</span>
          <h1 className="h-display">
            Food Photography for Restaurants: How to Photograph Your Menu
          </h1>
          <p className="t-lede mt-6 mb-8">
            Professional guide to restaurant food photography for menus, delivery apps, and social media that actually increases orders.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>August 30, 2026</span>
            <span>' </span>
            <span>16 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Why Food Photography Matters for Restaurants</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            80% of customers check photos before ordering at a restaurant. On Zomato, Swiggy, Google, and Instagram, your food photos are your sales tool. A single professional food photo can increase dish orders by 30-50%. Bad food photos cost you orders.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            This guide breaks down exactly how to photograph your restaurant's food — from menu shots to delivery app photos to social media content.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Restaurant Photography Lighting</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Proper lighting is the foundation of professional food photography.
          </p>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5 mb-6">
            <h4 className="text-lg font-serif text-white mb-3">Key Light Setup for Food:</h4>
            <ul className="space-y-2 text-white/70">
              <li>'  <strong>Position:</strong> 45° angle, slightly elevated above the dish</li>
              <li>'  <strong>Softness:</strong> Use diffusion (softbox, translucent panel) to avoid harsh shadows</li>
              <li>'  <strong>Intensity:</strong> Bright enough to reveal texture and color without blown highlights</li>
              <li>'  <strong>Direction:</strong> Side-lit or 45° creates dimension. Avoid flat overhead lighting.</li>
            </ul>
          </div>
          <div className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
            <h4 className="text-lg font-serif text-white mb-3">Fill Light & Rim Light:</h4>
            <p className="text-white/70">Add a soft fill light opposite your key to catch shadows. Add a subtle rim light behind or to the side to separate the dish from the background and create visual interest.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Food Styling for Restaurant Photography</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            How you present the food determines how appetizing it looks.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Plating & Presentation",
                detail: "Plate exactly as served. Show the actual restaurant plating. Don't add fake elements.",
              },
              {
                title: "Garnish & Color",
                detail: "Fresh garnish, vibrant colors, appealing contrast. Remove wilted or discolored elements.",
              },
              {
                title: "Moisture & Shine",
                detail: "Freshly-cooked food looks better. Spray vegetables with water for freshness. Gloss for sauces.",
              },
              {
                title: "Props & Context",
                detail: "Minimal props. Maybe a fork, glass, or napkin. Focus on the food, not decoration.",
              },
              {
                title: "Portions & Authenticity",
                detail: "Show true portion sizes. No food substitutes or AI trickery. Real dishes only.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
                <h4 className="text-white font-serif mb-2">{item.title}</h4>
                <p className="text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Composition & Camera Angles</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Different angles serve different purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                angle: "45° Angle",
                use: "Most common. Shows depth, texture, and form. Best for single dishes.",
              },
              {
                angle: "Overhead (Flat Lay)",
                use: "Shows full composition. Good for platters, bowls, or multiple items.",
              },
              {
                angle: "Side View",
                use: "Shows layers and height. Perfect for burgers, stacked dishes, tall presentations.",
              },
            ].map((view, idx) => (
              <div key={idx} className="border border-white/10 p-4">
                <h4 className="text-white font-serif mb-2">{view.angle}</h4>
                <p className="text-white/70 text-sm">{view.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Shooting for Multiple Platforms</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            One shoot, multiple uses. Tailor photos to each platform.
          </p>
          <div className="space-y-4">
            {[
              {
                platform: "Menu Photography",
                spec: "Clean, well-lit, professional. Shows exactly what the customer will receive.",
              },
              {
                platform: "Zomato/Swiggy",
                spec: "Appetizing, well-lit, accurately portioned. App users judge by photo quality.",
              },
              {
                platform: "Instagram/Social Media",
                spec: "Artistic, lifestyle context optional. Should be scroll-stopping and shareable.",
              },
              {
                platform: "Google Business Profile",
                spec: "Professional, well-lit, authentic. Google prioritizes real restaurant photos.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
                <h4 className="text-white font-serif mb-2">{item.platform}</h4>
                <p className="text-white/70">{item.spec}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Color Grading Restaurant Photos</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Color correction makes food look fresh and appetizing.
          </p>
          <ul className="space-y-3 text-lg text-white/70 leading-relaxed">
            <li>'  <strong>Warm tones:</strong> Slightly warm color temperature (3500-4500K) makes food look cozy</li>
            <li>'  <strong>Saturation:</strong> Increase saturation slightly to make colors pop (but stay realistic)</li>
            <li>'  <strong>Whites:</strong> Pure white backgrounds or plates stand out</li>
            <li>'  <strong>Contrast:</strong> Increase contrast to make food details pop</li>
            <li>'  <strong>Avoid:</strong> Don't over-process. Food should look real, not AI-generated</li>
          </ul>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Need Professional Restaurant Food Photography?</h3>
            <p className="text-white/70 mb-6">
              Professional food photography takes lighting, styling, timing, and retouching expertise. We handle complete menu shoots for restaurants in Dehradun.
            </p>
            <Link
              href="/services/food-beverage-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book Restaurant Food Photography ®
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
