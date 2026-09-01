import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ClientProblem from "@/components/sections/redesign/ClientProblem";
import CaseStudies from "@/components/sections/redesign/CaseStudies";
import TheCraft from "@/components/sections/redesign/TheCraft";
import Testimonials from "@/components/sections/redesign/Testimonials";
import CinematicCTA from "@/components/sections/redesign/CinematicCTA";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { 
  generateBreadcrumbSchema, 
  generateReviewSchema,
  generateWebsiteGraphSchema 
} from "@/lib/schemas";

// Dynamic imports for below-the-fold heavy components (reduces initial JS bundle)
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const DesignInMotion = dynamic(() => import("@/components/sections/DesignInMotion"), { ssr: true });
const ServicesShowcase = dynamic(() => import("@/components/sections/redesign/ServicesShowcase"), { ssr: true });
const ServicesGrid = dynamic(() => import("@/components/sections/redesign/ServicesGrid"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/redesign/FAQSection"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/sections/redesign/ContactForm"), { ssr: true });
const CinematicFooter = dynamic(() => import("@/components/ui/motion-footer").then(m => ({ default: m.CinematicFooter })), { ssr: true });

export const metadata: Metadata = {
  // Short meta title; the H1 inside the page still uses the longer form.
  title: "Rahul Chanda Photography | Dehradun, India",
  description:
    "Commercial and product photographer in Dehradun, India. Product, food & beverage, footwear, and brand campaigns shot and retouched in-house.",
  alternates: { canonical: "/" },
  // Home page shares the global optimized OG image (1200×630, /opt/og-image.jpg)
  // — the previous product-serum.webp is a 1024×1024 square that platforms
  // letterbox or crop. All 28 other pages use the global default.
  openGraph: {
    // Match the short meta title so link previews match the browser tab.
    title: "Rahul Chanda Photography | Dehradun, India",
    description:
      "Commercial and product photographer in Dehradun, India. Product, food & beverage, footwear, and brand campaigns shot and retouched in-house.",
    url: absoluteUrl("/"),
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer in Dehradun, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // Match the short meta title.
    title: "Rahul Chanda Photography | Dehradun, India",
    description:
      "Commercial and product photographer in Dehradun, India. Product, food & beverage, footwear, and brand campaigns shot and retouched in-house.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};



// Homepage breadcrumb schema
const breadcrumbs = [
  { label: "Home", url: absoluteUrl("/") },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      "url": absoluteUrl("/"),
      "name": siteConfig.name,
      "description": siteConfig.description,
      "publisher": {
        "@id": absoluteUrl("/#business"),
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      "name": "Rahul Chanda",
      "jobTitle": "Commercial & Product Photographer",
      "url": absoluteUrl("/"),
      "image": absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      "sameAs": [
        siteConfig.contact.instagram,
        siteConfig.contact.googleBusiness,
      ],
      "knowsAbout": [
        "Commercial Photography",
        "Product Photography",
        "Beverage & Splash Photography",
        "Food & Restaurant Photography",
        "Footwear & Fashion Photography",
        "E-commerce Packshots",
        "High-End Photoshop Retouching",
        "Color Science & Color Grading",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.contact.addressLocality,
        "addressRegion": siteConfig.contact.addressRegion,
        "addressCountry": siteConfig.contact.addressCountry,
      },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": absoluteUrl("/#business"),
      "name": siteConfig.name,
      "legalName": "Rahul Chanda Photography",
      "url": absoluteUrl("/"),
      "logo": absoluteUrl("/icon.svg"),
      "image": absoluteUrl(siteConfig.ogImagePath),
      "description":
        "Commercial and product photography studio based in Dehradun, India. Specializing in product, food & beverage, footwear, and advertising campaigns with professional in-house retouching.",
      "telephone": siteConfig.contact.telephone,
      "email": siteConfig.contact.email,
      "priceRange": siteConfig.contact.priceRange,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "24",
        "bestRating": "5",
        "worstRating": "1"
      },
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
      "founder": {
        "@id": absoluteUrl("/#person"),
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.contact.addressLocality,
        "addressRegion": siteConfig.contact.addressRegion,
        "addressCountry": siteConfig.contact.addressCountry,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.contact.latitude,
        "longitude": siteConfig.contact.longitude,
      },
      "areaServed": [
        { "@type": "City", "name": "Dehradun" },
        { "@type": "City", "name": "Mussoorie" },
        { "@type": "City", "name": "Rishikesh" },
        { "@type": "City", "name": "Haridwar" },
        { "@type": "State", "name": "Uttarakhand" },
        { "@type": "AdministrativeArea", "name": "Delhi NCR" },
        { "@type": "Country", "name": "India" },
      ],
      "sameAs": [
        siteConfig.contact.instagram,
        siteConfig.contact.googleBusiness,
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Photography Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Photography",
              "description": "E-commerce packshots, white background cutouts, and creative product hero imagery.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Food & Beverage Photography",
              "description": "Restaurant menu shoots, beverage splash, and cafe atmosphere photography.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Footwear & Fashion Photography",
              "description": "Apparel lookbooks, footwear details, and editorial fashion campaigns.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Advertising Campaigns",
              "description": "Art-directed advertising shoots from concept to final retouched deliverables.",
            },
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      "name": siteConfig.name,
      "url": absoluteUrl("/"),
      "logo": absoluteUrl("/icon.svg"),
      "image": absoluteUrl(siteConfig.ogImagePath),
      "description": siteConfig.description,
      "sameAs": [
        siteConfig.contact.instagram,
        siteConfig.contact.googleBusiness,
        "https://www.behance.net/rahulchandaphotography",
      ],
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "State", "name": "Uttarakhand" },
        { "@type": "AdministrativeArea", "name": "Delhi NCR" },
      ],
      "founder": { "@id": absoluteUrl("/#person") },
    },
    generateBreadcrumbSchema(breadcrumbs),
  ],
};

export default function Home() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <DesignInMotion />
      <ClientProblem />
      <ServicesShowcase />
      <ServicesGrid />
      <CaseStudies />
      <TheCraft />
      <Testimonials />
      <About />
      <FAQSection />
      {/* ===== JOURNAL STRIP — internal links into blog cluster (SEO) ===== */}
      <section aria-label="From the journal" className="relative w-full px-4 md:px-12 py-20 md:py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="h-section leading-tight">
              From the <span className="italic text-[#e83b2c]">journal</span>.
            </h2>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest text-white/50 hover:text-[#e83b2c] transition-colors"
              data-cursor="pointer"
            >
              All articles —
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 mt-10">
            {[
              {
                href: "/blog/ai-photoshop-retouching-techniques",
                title: "New AI retouching techniques in Photoshop: the 2026 workflow",
                tag: "Retouching",
              },
              {
                href: "/blog/why-beverage-splash-photography-is-hard",
                title: "Why beverage splash photography is harder than it looks",
                tag: "Behind the scenes",
              },
              {
                href: "/blog/lighting-patterns-for-product-photography",
                title: "Three lighting patterns every product photographer should master",
                tag: "Technique",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group border-t border-white/10 pt-6 hover:border-t-[#e83b2c]/50 transition-colors duration-300"
                data-cursor="pointer"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#e83b2c]">
                  {post.tag}
                </span>
                <h3 className="font-serif text-lg text-white mt-2 group-hover:text-[#e83b2c] transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CinematicCTA />
      <ContactForm />
      <CinematicFooter />
    </main>
  );
}