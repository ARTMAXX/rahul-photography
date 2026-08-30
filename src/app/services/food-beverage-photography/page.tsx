import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Food & Beverage Photography",
  description:
    "Professional food and beverage photography for restaurants, menus, food delivery apps (Swiggy, Aomato), and food brands across India. Restaurant food photography, beverage splash styling, and commercial food shoots \u2014 based in Dehradun, available pan-India.",
  alternates: { canonical: "/services/food-beverage-photography" },
  openGraph: {
    title: "Food & Beverage Photography Services | India",
    description:
      "Professional food photography for restaurants, menus, food delivery apps, and beverage brands across India. Commercial food styling and restaurant photography.",
    url: absoluteUrl("/services/food-beverage-photography"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Food & Beverage Photography — Restaurants & Brands India",
      },
    ],
  },
};

const foodPhotographySchema = {
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
          "name": "Food & Beverage Photography",
          "item": absoluteUrl("/services/food-beverage-photography"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/food-beverage-photography#service"),
      "name": "Food & Beverage Photography",
      "description":
        "Professional food and beverage photography for restaurants, delivery apps, menus, and food brands. Specializing in restaurant food photography, beverage styling, and commercial food shoots.",
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
    },
  ],
};

export default function FoodBeveragePhotographyPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(foodPhotographySchema),
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
            Food & Beverage Photography
          </div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white mt-6 max-w-[16ch]">
            Food Photography
            <br />
            that <span className="italic text-[#e83b2c]">increases orders</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-8 leading-relaxed">
            Professional food and beverage photography for restaurants, menus, delivery apps, and food brands. Commercial food styling, beverage shots, and restaurant menu photography in Dehradun.
          </p>
        </div>
      </section>

      {/* Food Photography Impact */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            Why Food Photography Matters for Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                80% of restaurant customers check photos before ordering. A single high-quality food photograph can increase dish orders by 30-50%. Professional food photography isn't optional — it's essential for restaurant growth.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether it's your menu, Aomato, Swiggy, Instagram, or Google Business Profile, every food photo represents your restaurant. Blurry or poorly-lit food photos cost you orders.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Menu Photography</h3>
                <p className="text-white/50">Professional menu shots that make dishes look worth ordering.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Delivery App Photos</h3>
                <p className="text-white/50">Aomato, Swiggy, and app-ready food photography that converts.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Social Media Content</h3>
                <p className="text-white/50">Instagram-ready food photography for restaurant social feeds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Food & Beverage Photography Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Restaurant Menu Photography",
                desc: "Professional menu shoots that make every dish look worth ordering. Complete menu coverage or hero dish photography.",
              },
              {
                title: "Food Photography for Delivery Apps",
                desc: "Aomato, Swiggy, and app-optimized food photography. Consistent lighting, styling, and appetite appeal across all dishes.",
              },
              {
                title: "Beverage Photography",
                desc: "Professional beverage and drink photography. Coffee, smoothies, cocktails, juices, and specialty drinks shot to order.",
              },
              {
                title: "Beverage Splash & Glass Photography",
                desc: "High-end splash photography, condensation detail work, and glass product shots for premium beverage brands.",
              },
              {
                title: "Cafe & Coffee Shop Photography",
                desc: "Lifestyle food photography for cafes. Moody coffee shots, atmosphere, and ready-to-share Instagram content.",
              },
              {
                title: "Food Brand & Product Photography",
                desc: "Commercial food product photography for packaged foods, sauces, condiments, and FMCG brands.",
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
            Food Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Briefing",
                desc: "We discuss menu items, styling preferences, and technical needs. Quick shoot day planning.",
              },
              {
                step: "02",
                title: "Styling & Setup",
                desc: "Professional food styling, lighting setup, and background preparation. Everything ready before shooting.",
              },
              {
                step: "03",
                title: "Shoot Day",
                desc: "Fast, focused shooting of all dishes. Professional food photography lighting and multiple angles per dish.",
              },
              {
                step: "04",
                title: "Retouching & Delivery",
                desc: "Color correction, brightness adjustment, and app-ready exports. All images delivered within 5-7 days.",
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
            Learn More About Food Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/blog/food-photography-restaurants"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Guide</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                Food Photography for Restaurants: How to Photograph Your Menu
              </h3>
              <p className="text-white/50 mt-3">Professional guide to restaurant food photography</p>
            </Link>
            <Link
              href="/blog/beverage-photography-glass-splash"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Technique</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                Beverage Product Photography: Glass, Condensation & Splash
              </h3>
              <p className="text-white/50 mt-3">Advanced beverage photography techniques</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-4 md:px-12 pb-28 pt-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact?service=Food%20%26%20Beverage%20Photography"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="italic text-[#e83b2c]">Book your restaurant food shoot</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]"> —</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
