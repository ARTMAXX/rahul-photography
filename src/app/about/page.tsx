import type { Metadata } from "next";
import Image from "next/image";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Rahul Chanda — Commercial Photographer Dehradun",
  description:
    "Rahul Chanda — high-end commercial product photographer based in Dehradun, India. Crafting premium visual identities for brands worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Rahul Chanda — Commercial Photographer in Dehradun",
    description:
      "Rahul Chanda — high-end commercial product photographer based in Dehradun, India. Crafting premium visual identities for brands worldwide.",
    url: absoluteUrl("/about"),
  },
};

const aboutSchema = {
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
          "name": "About",
          "item": absoluteUrl("/about"),
        },
      ],
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      "name": "Rahul Chanda",
      "jobTitle": "Commercial Product Photographer",
      "url": absoluteUrl("/about"),
      "image": absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      "description":
        "Rahul Chanda is a commercial product photographer based in Dehradun, India, specializing in product, beverage splash, food, and advertising photography.",
      "sameAs": [
        siteConfig.contact.instagram,
        siteConfig.contact.googleBusiness,
      ],
      "knowsAbout": [
        "Commercial Photography",
        "Product Photography",
        "Beverage Splash Photography",
        "Food Photography",
        "High-End Retouching",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.contact.addressLocality,
        "addressRegion": siteConfig.contact.addressRegion,
        "addressCountry": siteConfig.contact.addressCountry,
      },
    },
  ],
};

const stats = [
  { n: "6+", l: "Years behind the lens" },
  { n: "120+", l: "Brands & products shot" },
  { n: "2,000+", l: "Images delivered" },
  { n: "24h", l: "Average reply time" },
];

const approach = [
  {
    t: "Precision",
    d: "Every frame is engineered — light, surface, and composition are controlled down to the pixel.",
  },
  {
    t: "Story",
    d: "Product shots should feel like cinema stills. I direct light and mood to give your brand a voice.",
  },
  {
    t: "Partnership",
    d: "You work directly with me — no account managers, no hand-offs. One creative owner from brief to delivery.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
            About
          </div>
          <h1 className="text-[clamp(2.75rem,9vw,7.5rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white mt-6 max-w-[18ch]">
            The photographer behind{" "}
            <span className="italic text-[#e83b2c]">the images</span>.
          </h1>
        </div>
      </section>

      {/* Portrait + intro */}
      <section className="relative w-full px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div className="relative">
            <Image
              src="/opt/about-photo/rahul-chanda-portrait.webp"
              alt="Rahul Chanda, commercial product photographer from Dehradun, in his studio"
              width={1200}
              height={1490}
              quality={80}
              loading="eager"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="w-full h-auto"
              style={{ borderRadius: "420px 0 0 420px" }}
            />
          </div>
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ffffff]/70 font-medium mb-6">
              Dehradun, India
            </p>
            <div className="text-lg md:text-xl text-white/70 leading-relaxed space-y-6 max-w-[60ch]">
              <p>
                My name is Rahul Chanda. I&apos;m a high-end commercial
                product photographer crafting{" "}
                <span className="text-[#e83b2c]">visual identities</span> for
                brands that refuse to look ordinary.
              </p>
              <p>
                My work sits at the intersection of technical precision and
                cinematic emotion — whether it&apos;s the quiet luxury of a
                watch on black glass, the choreography of a beverage splash,
                or the texture of a perfectly styled dish. Every frame is
                engineered to make your product impossible to ignore.
              </p>
              <p>
                Based in Dehradun and shooting across India, I partner with
                e-commerce brands, restaurants, and creative teams to deliver
                imagery that converts viewers into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Background */}
      <section className="relative w-full px-4 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white max-w-[20ch] mb-12">
            The <span className="italic text-[#e83b2c]">journey</span>.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-[60ch]">
              <p>
                I picked up a camera professionally in 2019 after years of studying light,
                colour science, and the way commercial imagery shapes consumer behaviour.
                What started as a fascination with product textures and beverage splash
                physics turned into a full-time studio practice serving brands across
                India.
              </p>
              <p>
                Today, I shoot product packshots, food and beverage imagery, footwear
                campaigns, and brand advertising from my studio in Dehradun, Uttarakhand.
                Every assignment — whether it&apos;s a single hero shot for a D2C startup
                or a 200-SKU catalogue for an established brand — gets the same
                engineering-first approach: calibrated lighting, calibrated colour, and
                retouching that preserves material truth while making the product look
                like the obvious choice.
              </p>
              <p>
                I&apos;ve worked with brands in cosmetics, watches, packaged food, spirits,
                sneakers, and fashion. The common thread is always the same: the product
                has to look worth choosing, and the image has to be technically bulletproof
                enough to work at any scale — from a 400×400 e-commerce thumbnail to a
                12-foot retail banner.
              </p>
            </div>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-[60ch]">
              <p>
                My studio infrastructure is built for precision. I use Calibrite
                ColorChecker targets on every scene, shoot tethered into Capture One
                for real-time feedback, and deliver in multiple formats — uncompressed
                TIFFs for print, colour-managed WebP/AVIF for web, and structured SKU
                naming so your marketing team can ingest assets immediately.
              </p>
              <p>
                Post-production happens entirely in-house. Frequency separation for
                fashion and cosmetics, dodge-and-burn sculpting for product dimensionality,
                and AI-accelerated cleanup for high-volume catalogue work. No outsourcing,
                no quality surprises.
              </p>
              <p>
                When I&apos;m not behind the camera, I&apos;m writing about lighting
                techniques, colour science, and post-production workflows on this blog —
                sharing the exact processes that make commercial imagery work. If you&apos;re
                a fellow photographer or a brand looking to understand the craft, those
                guides are a good place to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Specialties */}
      <section className="relative w-full px-4 md:px-12 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white max-w-[20ch] mb-12">
            What I <span className="italic text-[#e83b2c]">use</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Camera & Lenses",
                items: ["Full-frame mirrorless system", "Macro lenses for extreme close-ups", "Tilt-shift for architectural control"],
              },
              {
                title: "Lighting",
                items: ["High-speed flash sync for liquid freeze", "Colour-calibrated studio strobes", "Translucent backlighting rigs"],
              },
              {
                title: "Colour Management",
                items: ["Calibrite ColorChecker Passport", "Hardware-calibrated monitors", "ICC profile-accurate soft proofing"],
              },
              {
                title: "Post-Production",
                items: ["Capture One tethered shooting", "Photoshop frequency separation", "DaVinci Resolve for video colour"],
              },
              {
                title: "Delivery Formats",
                items: ["16-bit ProPhoto RGB masters", "sRGB WebP/AVIF for web", "CMYK for print production"],
              },
              {
                title: "Specialities",
                items: ["Beverage splash & liquid freeze", "E-commerce packshots at scale", "Food styling & menu photography"],
              },
            ].map((group) => (
              <div key={group.title} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-serif text-white mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                      <span className="text-[#e83b2c] mt-1.5 text-[8px]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative w-full px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-white/10 py-12">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-5xl md:text-6xl font-serif text-[#e83b2c]">
                {s.n}
              </div>
              <div className="text-white/50 text-sm mt-2 uppercase tracking-widest">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="relative w-full px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-serif leading-[0.9] tracking-[-0.03em] text-white max-w-[14ch] mb-16">
            How I <span className="italic text-[#e83b2c]">work</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {approach.map((a, i) => (
              <div key={a.t} className="border-t border-white/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#e83b2c]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-serif text-white mt-3">{a.t}</h3>
                <p className="text-white/50 mt-3 leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-4 md:px-12 pb-28">
        <div className="max-w-[1600px] mx-auto">
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="pointer"
          >
            <span className="italic text-[#e83b2c]">Let&apos;s make something iconic</span>
            <span className="w-10 h-px bg-[#e83b2c]/30 group-hover:bg-[#e83b2c] transition-colors duration-300" />
            <span className="text-[#e83b2c]">&rarr;</span>
          </a>
        </div>
      </section>

      <CinematicFooter />
    </main>
  );
}
