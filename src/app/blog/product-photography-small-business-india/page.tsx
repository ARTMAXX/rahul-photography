import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Photography for Small Businesses in India | Getting Started Guide",
  description:
    "Product photography guide for small businesses in India. Learn when to DIY vs hire a professional, pricing, and ROI. Get your products professionally photographed.",
  alternates: { canonical: "/blog/product-photography-small-business-india" },
  keywords: "product photography for small business, product photography for small business India, ecommerce photography, professional product photos, small business photography",
  openGraph: {
    title: "Product Photography for Small Businesses in India: Getting Started",
    description:
      "Complete guide to affordable product photography for small Indian businesses. DIY vs professional, pricing, ROI.",
    url: absoluteUrl("/blog/product-photography-small-business-india"),
    type: "article",
  },
};

const smallBusinessSchema = {
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
          "name": "Product Photography for Small Businesses",
          "item": absoluteUrl("/blog/product-photography-small-business-india"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Product Photography for Small Businesses in India: Getting Started",
      "description": "Guide to professional product photography for small Indian businesses. Affordable options, DIY vs professional, and ROI.",
      "image": absoluteUrl("/opt/og-image.jpg"),
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01",
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

export default function SmallBusinessPhotographyBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(smallBusinessSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Small Business Guide</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-6 mb-6 leading-tight">
            Product Photography for Small Businesses in India: Getting Started
          </h1>
          <p className="text-lg text-white/60 mb-8">
            How small Indian businesses can compete with bigger brands through professional product photography. DIY vs hiring a professional. ROI calculator.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>September 1, 2026</span>
            <span>•</span>
            <span>13 min read</span>
            <span>•</span>
            <span>By Rahul Chanda</span>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">Why Small Businesses Lose Sales Due to Poor Product Photos</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Small businesses on Flipkart, Amazon, Etsy, or their own Shopify stores are losing sales to better-lit competitors every day. Product photography isn't optional — it's your competitive advantage.
          </p>
          <div className="space-y-4 mb-6">
            {[
              "Big brands invest ₹50,000-2,00,000+ on product shoots. Small businesses think they can use phone photos. The result? Customers choose the big brand.",
              "Professional product photos increase conversions by 40-70%. That's not hype — that's verified by e-commerce platforms.",
              "Bad product photos signal low quality. Even if your product is good, bad photos make customers think it's cheap.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] flex-shrink-0">→</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">Common Mistakes Small Businesses Make</h2>
          <div className="space-y-4">
            {[
              {
                mistake: "Phone photos with bad lighting",
                impact: "Blurry, unfocused, colors look wrong. Customers assume quality is poor.",
              },
              {
                mistake: "Inconsistent backgrounds and angles",
                impact: "Product line looks unprofessional. Customers notice the chaos.",
              },
              {
                mistake: "Product sitting on random surfaces",
                impact: "Distracting. Viewer focuses on clutter, not product.",
              },
              {
                mistake: "Poor color accuracy",
                impact: "Customers receive item that looks different from photo. Returns increase.",
              },
              {
                mistake: "No consistency across product variants",
                impact: "Variant photos look like different products. Confuses buyers.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-[#e83b2c] mb-2">❌ {item.mistake}</h4>
                <p className="text-white/70">Impact: {item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">DIY vs Hiring a Professional: The Real Decision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-white/10 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">DIY Product Photography</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-serif mb-2">Pros:</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>• No outside cost (use your phone)</li>
                    <li>• Full control over timing</li>
                    <li>• Learn useful skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-serif mb-2">Cons:</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>• Poor lighting = low quality</li>
                    <li>• Time investment (hours per shoot)</li>
                    <li>• No lighting equipment</li>
                    <li>• Inconsistency across photos</li>
                    <li>• Lost sales due to poor photos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-[#e83b2c]/50 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">Professional Photography</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-serif mb-2">Pros:</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>• Professional lighting & equipment</li>
                    <li>• Consistent quality across all photos</li>
                    <li>• Fast turnaround (1-2 weeks)</li>
                    <li>• 40-70% increase in conversions</li>
                    <li>• Expert retouching included</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-serif mb-2">Cons:</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>• Upfront cost (₹2,000-10,000+)</li>
                    <li>• Less hands-on control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">ROI: Does Professional Photography Pay Off?</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Let's do the math. If you sell ₹1,00,000 of products per month:
          </p>
          <div className="bg-white/5 border border-white/10 p-8 mb-6">
            <div className="space-y-4">
              <div>
                <span className="text-white font-serif">Current (Poor Photos):</span>
                <p className="text-white/70">₹1,00,000/month revenue × 2% conversion = ₹2,00,000 orders</p>
              </div>
              <div>
                <span className="text-white font-serif">After Professional Photography:</span>
                <p className="text-white/70">₹1,00,000/month revenue × 3.5% conversion = ₹3,50,000 orders</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-[#e83b2c] font-serif text-lg">Extra Revenue: ₹1,50,000/month</span>
                <p className="text-white/70 mt-2">
                  Professional shoot cost: ₹5,000-10,000 (one-time)
                  <br />
                  Payback period: Less than 1 week.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">What to Expect from a Professional</h2>
          <div className="space-y-4">
            {[
              {
                stage: "Pre-Shoot Briefing",
                detail: "Discuss your products, goals, budget. Photographer understands your brand positioning.",
              },
              {
                stage: "Production Day",
                detail: "Professional setup with lighting, backgrounds, styling. Multiple angles and variations per product.",
              },
              {
                stage: "Professional Retouching",
                detail: "Color correction, background cleanup, brightness adjustment. All images polished and consistent.",
              },
              {
                stage: "Delivery",
                detail: "High-res files for print, web-optimized versions for e-commerce, marketplace-ready formats.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
                <h4 className="text-white font-serif mb-2">{item.stage}</h4>
                <p className="text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">Pricing for Small Businesses in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                tier: "Budget Shoot",
                price: "₹2,000-5,000",
                includes: "5-10 products, simple white background, basic retouching, 3-5 days delivery",
              },
              {
                tier: "Standard Shoot",
                price: "₹5,000-15,000",
                includes: "15-25 products, multiple backgrounds, professional retouching, consistent quality, 5-7 days",
              },
              {
                tier: "Premium Shoot",
                price: "₹15,000-50,000+",
                includes: "50+ products, lifestyle + studio, art direction, advanced retouching, campaign-ready, 2-3 weeks",
              },
            ].map((tier, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-white mb-2">{tier.tier}</h4>
                <p className="text-2xl font-serif text-[#e83b2c] mb-4">{tier.price}</p>
                <p className="text-white/70 text-sm">{tier.includes}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-white/70 leading-relaxed">
            Cost per product: ₹200-500 for professional photography. Compare to lost sales from bad photos: priceless.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">How Often Should You Shoot New Photos?</h2>
          <div className="space-y-4">
            {[
              {
                scenario: "New Product Launch",
                frequency: "Immediate. Professional photos on day 1 of launch.",
              },
              {
                scenario: "Seasonal Collections",
                frequency: "4x per year (spring, summer, fall, winter) if you follow seasons.",
              },
              {
                scenario: "New Color/Variant Additions",
                frequency: "Within 1-2 weeks of product availability.",
              },
              {
                scenario: "Product Updates/Redesigns",
                frequency: "Immediately when changes are visible to customers.",
              },
              {
                scenario: "Refresh Existing Catalog",
                frequency: "1-2x per year. Old photos get stale. Fresh photos signal active business.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/5">
                <h4 className="text-white font-serif mb-2">{item.scenario}</h4>
                <p className="text-white/70">{item.frequency}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-6">Getting Started: Action Steps</h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                action: "Audit Your Current Photos",
                detail: "Look at your products on Amazon/Flipkart. Are they professional? Or amateur?",
              },
              {
                step: "02",
                action: "Identify Priority Products",
                detail: "Which products generate most revenue? Shoot those first.",
              },
              {
                step: "03",
                action: "Get Budget Approval",
                detail: "Calculate ROI. ₹5,000 spend → ₹50,000+ extra revenue in month 1.",
              },
              {
                step: "04",
                action: "Find a Professional",
                detail: "Look for local photographers with e-commerce/product experience.",
              },
              {
                step: "05",
                action: "Prepare Product Brief",
                detail: "List your products, goals, any style references you like.",
              },
              {
                step: "06",
                action: "Schedule Shoot",
                detail: "Book 1-2 days for a complete catalog shoot.",
              },
              {
                step: "07",
                action: "Update Listings",
                detail: "Replace old photos with new professional ones across all platforms.",
              },
            ].map((item) => (
              <div key={item.step} className="border border-white/10 p-6">
                <div className="flex gap-4">
                  <span className="text-[#e83b2c] font-serif text-lg flex-shrink-0">{item.step}</span>
                  <div>
                    <h4 className="text-white font-serif mb-2">{item.action}</h4>
                    <p className="text-white/70">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Ready to Invest in Professional Product Photography?</h3>
            <p className="text-white/70 mb-4">
              Small businesses in Dehradun and Uttarakhand can get professional product photography without the Delhi/Bangalore price tag. We specialize in e-commerce photography for small businesses.
            </p>
            <p className="text-white/70 mb-6">
              Budget-friendly shoots. Fast turnaround. Marketplace-ready files.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Get Professional Product Photography →
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}
