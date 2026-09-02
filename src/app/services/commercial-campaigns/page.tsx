import type { Metadata } from "next";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

// FAQPage schema for AI search engines and voice search (Sept 2026).
// Note: Google retired FAQ rich results in May 2026, but FAQPage schema
// still helps voice search and AI Overview citation.
const campaignFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/services/commercial-campaigns#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a commercial campaign shoot include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial campaign shoot includes concept development, moodboards and shot lists, talent and location coordination, full production lighting and styling, multi-day capture as needed, and post-production retouching with deliverables sized for your media (print, OOH, social, digital).",
      },
    },
    {
      "@type": "Question",
      name: "How much does brand campaign photography cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brand campaign pricing is custom — it depends on concept, talent, locations, and deliverables. Single-day brand shoots in Dehradun start at ₹40,000; multi-day campaign productions with talent and locations are quoted per project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle usage rights and licensing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Usage rights are agreed upfront in the brief and reflected in the deliverables package. We license imagery for specific channels (web, social, OOH, print) and time periods based on your media plan.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a commercial campaign take from concept to delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical turnaround: 1 week for concept and pre-production, 1–3 shoot days, 1–2 weeks for post-production. Multi-channel campaigns may run longer. Rush timelines are available on request.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Brand & Advertising Photographer in Dehradun — Commercial Campaigns",
  description:
    "Art-directed commercial campaign photography in Dehradun. Brand launches, billboards, and digital ads. Concept to delivery. Book a shoot.",
  alternates: { canonical: "/services/commercial-campaigns" },
  openGraph: {
    title: "Commercial Campaign Photography in Dehradun — Brand Launches & Digital Ads",
    description:
      "Commercial campaign photography and advertising photography in Dehradun. Art-directed shoots from concept to final retouched deliverables.",
    url: absoluteUrl("/services/commercial-campaigns"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Commercial & Advertising Photography — Campaign Shoots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Advertising & Commercial Photographer in Dehradun",
    description: "Art-directed commercial campaign photography in Dehradun. Brand launches, billboards, digital ads.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const commercialPhotographySchema = {
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
          "name": "Commercial Campaigns",
          "item": absoluteUrl("/services/commercial-campaigns"),
        },
      ],
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/services/commercial-campaigns#service"),
      "name": "Commercial Campaign Photography",
      "description":
        "Professional commercial and advertising photography for brand campaigns. Art-directed shoots from concept to final retouched deliverables.",
      "provider": {
        "@id": absoluteUrl("/#business")
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dehradun",
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

export default function CommercialCampaignsPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(commercialPhotographySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(campaignFaqSchema),
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
            Commercial Campaigns
          </div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white mt-6 max-w-[16ch]">
            Commercial
            <br />
            <span className="italic text-[#e83b2c]">campaign</span> photography.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-[55ch] mt-8 leading-relaxed">
            Art-directed advertising photography for brand campaigns. From concept to final delivery, every frame is crafted to sell your product, tell your story, and stand out.
          </p>
        </div>
      </section>

      {/* What is Commercial Photography */}
      <section className="relative w-full px-4 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            What is Commercial Campaign Photography?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Commercial advertising photography is the art of creating images that sell. It goes beyond product photography — it tells your brand's story, captures lifestyle context, and creates emotional connection with your audience.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                From concept through production to final retouching, every element is controlled to deliver campaign-grade imagery ready for print, digital, social, and advertising media.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Product Campaign Shoots</h3>
                <p className="text-white/50">Hero imagery that becomes your brand's visual identity across all media.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Lifestyle Campaign Photography</h3>
                <p className="text-white/50">Emotional, story-driven imagery that connects product to customer lifestyle.</p>
              </div>
              <div className="border-l-2 border-[#e83b2c] pl-6">
                <h3 className="text-xl font-serif text-white mb-2">Advertising Photography</h3>
                <p className="text-white/50">Print, social, and digital advertising imagery optimized for conversion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Types of Commercial Campaigns We Shoot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Product Campaign Launches",
                desc: "Hero imagery for new product launches. Campaign-grade photography that becomes your brand identity and advertising asset.",
              },
              {
                title: "Brand Campaign Photography",
                desc: "Lifestyle and story-driven imagery that positions your brand. From concept through creative execution to final delivery.",
              },
              {
                title: "Seasonal & Promotional Campaigns",
                desc: "Time-sensitive campaign photography for seasonal launches, promotions, and holiday campaigns.",
              },
              {
                title: "Advertising Photography",
                desc: "Print, social, and digital advertising imagery. Optimized for conversion across Google Ads, Facebook, Instagram, and other platforms.",
              },
              {
                title: "Lifestyle & Content Photography",
                desc: "Day-in-the-life content, brand storytelling, and lifestyle imagery for social media and marketing.",
              },
              {
                title: "Brand & Event Coverage",
                desc: "Commercial photography for brand events, launches, store openings, and corporate functions.",
              },
            ].map((campaign, idx) => (
              <div key={idx} className="border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors">
                <h3 className="text-xl font-serif text-white mb-3">{campaign.title}</h3>
                <p className="text-white/60 leading-relaxed">{campaign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Process */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-16">
            Campaign Photography Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Creative Brief",
                desc: "Deep discussion of your campaign goals, target audience, brand positioning, and creative direction.",
              },
              {
                step: "02",
                title: "Creative Planning",
                desc: "Mood boards, shot lists, styling direction, and location scouting. Everything planned before production.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Full-day or multi-day shoots with professional lighting, styling, and art direction. Campaign-grade execution.",
              },
              {
                step: "04",
                title: "Post-Production",
                desc: "Professional retouching, color grading, and brand-specific finishing. Delivery in all required formats.",
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

      {/* Blog Links */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="h-section mb-12">
            Learn More About Commercial Production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/blog/ai-video-editing-tools-2026"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">AI & Video</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                AI Video Editing for Commercial Campaigns
              </h3>
              <p className="text-white/50 mt-3">Production tools and workflows for brand content</p>
            </Link>
            <Link
              href="/blog/ai-color-grading-scene-detection"
              className="group border border-white/10 p-8 hover:border-[#e83b2c]/50 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#e83b2c]">AI & Video</span>
              <h3 className="text-xl font-serif text-white mt-3 group-hover:text-[#e83b2c] transition-colors">
                AI Color Grading & Scene Detection
              </h3>
              <p className="text-white/50 mt-3">Post-production consistency for commercial video</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-4 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="h-section mb-12">
            Commercial Campaigns — Common Questions
          </h2>
          <div className="space-y-0">
            {[
              {
                q: "What does a commercial campaign shoot include?",
                a: "A commercial campaign shoot includes concept development, moodboards and shot lists, talent and location coordination, full production lighting and styling, multi-day capture as needed, and post-production retouching with deliverables sized for your media (print, OOH, social, digital).",
              },
              {
                q: "How much does brand campaign photography cost?",
                a: "Brand campaign pricing is custom — it depends on concept, talent, locations, and deliverables. Single-day brand shoots in Dehradun start at ₹40,000; multi-day campaign productions with talent and locations are quoted per project.",
              },
              {
                q: "Do you handle usage rights and licensing?",
                a: "Yes. Usage rights are agreed upfront in the brief and reflected in the deliverables package. We license imagery for specific channels (web, social, OOH, print) and time periods based on your media plan.",
              },
              {
                q: "How long does a commercial campaign take from concept to delivery?",
                a: "Typical turnaround: 1 week for concept and pre-production, 1–3 shoot days, 1–2 weeks for post-production. Multi-channel campaigns may run longer. Rush timelines are available on request.",
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
            href="/contact?service=Commercial%20Campaigns"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="italic text-[#e83b2c]">Plan your campaign shoot</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]">—®</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
