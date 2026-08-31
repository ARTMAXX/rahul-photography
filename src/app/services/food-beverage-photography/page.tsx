import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Food Photographer Dehradun | Restaurant & Beverage Photography",
  description:
    "Food photographer in Dehradun for restaurants, cafes, food brands, and beverage companies. Menu, delivery-app and on-location food photography across Uttarakhand.",
  alternates: { canonical: "/services/food-beverage-photography" },
  openGraph: {
    title: "Food Photographer Dehradun | Restaurant & Beverage Photography",
    description:
      "Food photographer in Dehradun for restaurants, cafes, food brands, and beverage companies. Menu, delivery-app and on-location food photography across Uttarakhand.",
    url: absoluteUrl("/services/food-beverage-photography"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Food Photographer Dehradun \u2014 Restaurant & Beverage Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Photographer Dehradun | Restaurant & Beverage Photography",
    description:
      "Food photographer in Dehradun for restaurants, cafes, food brands, and beverage companies. Menu, delivery-app and on-location food photography across Uttarakhand.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
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
        "Food photographer in Dehradun for restaurants, cafes, food brands, and beverage companies. On-location food photography covering menu photography, delivery-app food imagery, and commercial food and beverage shoots across Uttarakhand.",
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
          "@type": "City",
          "name": "Rishikesh",
        },
        {
          "@type": "City",
          "name": "Haridwar",
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
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/services/food-beverage-photography#faq"),
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide food photography for restaurants in Dehradun?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I shoot food photography for restaurants, cafes, cloud kitchens, and dining brands in Dehradun and across Uttarakhand. Coverage includes menu hero shots, full-menu coverage, social media content, and on-brand imagery for Google Business Profile and Instagram.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you shoot food photography on location in Dehradun?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes \u2014 most food shoots happen on location at your restaurant, cafe, or kitchen. I bring studio lighting, styling props, and backgrounds to your venue, so you do not need a studio. Travel to nearby cities such as Mussoorie, Rishikesh, and Haridwar is included across Uttarakhand.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you photograph menus and delivery-app food images?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I deliver menu photography for print and digital menus, plus app-ready food imagery for Zomato, Swiggy, Magicpin, and other delivery platforms. All images are retouched for app-spec aspect ratios, brightness, and appetite appeal.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide beverage photography for brands and cafes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Beverage photography covers coffee, smoothies, cocktails, juices, and specialty drinks for cafes, bars, and packaged beverage brands. The work includes splash photography, condensation detail, glass product shots, and styled flat-lays for marketing and e-commerce.",
          },
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
          <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[20ch]">
            Food photographer
            <br />
            in <span className="italic text-[#e83b2c]">Dehradun</span> —{" "}
            <span className="italic text-[#e83b2c]">photography</span> that makes food sell.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[60ch] mt-8 leading-relaxed">
            Professional food and beverage photography for restaurants, cafes, menus, delivery apps, and food brands across Dehradun and Uttarakhand.
          </p>
          <p className="text-base md:text-lg text-white/40 max-w-[60ch] mt-4 leading-relaxed">
            I shoot on location in your kitchen, cafe, or venue — bringing studio lighting, food styling, and props to restaurants, cloud kitchens, and beverage brands in the Doon Valley, Mussoorie, Rishikesh, and beyond.
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
          <p className="text-white/50 mt-10 max-w-[60ch] leading-relaxed">
            Based in Dehradun, I work with food, cafe, and restaurant brands across Uttarakhand. See the full local scope on the <Link href="/dehradun" className="text-white underline decoration-[#e83b2c]/60 underline-offset-4 hover:decoration-[#e83b2c] transition-colors">Food &amp; Beverage Photography in Dehradun</Link> page.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="h-section mb-12">
            Food Photography in Dehradun — Common Questions
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "Do you provide food photography for restaurants in Dehradun?",
                a: "Yes. I shoot food photography for restaurants, cafes, cloud kitchens, and dining brands in Dehradun and across Uttarakhand. Coverage includes menu hero shots, full-menu coverage, social media content, and on-brand imagery for Google Business Profile and Instagram.",
              },
              {
                q: "Do you shoot food photography on location in Dehradun?",
                a: "Yes — most food shoots happen on location at your restaurant, cafe, or kitchen. I bring studio lighting, styling props, and backgrounds to your venue, so you do not need a studio. Travel to nearby cities such as Mussoorie, Rishikesh, and Haridwar is included across Uttarakhand.",
              },
              {
                q: "Do you photograph menus and delivery-app food images?",
                a: "Yes. I deliver menu photography for print and digital menus, plus app-ready food imagery for Zomato, Swiggy, Magicpin, and other delivery platforms. All images are retouched for app-spec aspect ratios, brightness, and appetite appeal.",
              },
              {
                q: "Do you provide beverage photography for brands and cafes?",
                a: "Yes. Beverage photography covers coffee, smoothies, cocktails, juices, and specialty drinks for cafes, bars, and packaged beverage brands. The work includes splash photography, condensation detail, glass product shots, and styled flat-lays for marketing and e-commerce.",
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
