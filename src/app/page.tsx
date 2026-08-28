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
  generateQAPageSchema,
  generateReviewSchema,
  generateWebsiteGraphSchema 
} from "@/lib/schemas";

// Dynamic imports for below-the-fold heavy components (reduces initial JS bundle)
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const DesignInMotion = dynamic(() => import("@/components/sections/DesignInMotion"), { ssr: true });
const ServicesShowcase = dynamic(() => import("@/components/sections/redesign/ServicesShowcase"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/redesign/FAQSection"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/sections/redesign/ContactForm"), { ssr: true });
const SelectedWorkParallax = dynamic(() => import("@/components/ui/selected-work-parallax").then(m => ({ default: m.SelectedWorkParallax })), { ssr: true });
const CinematicFooter = dynamic(() => import("@/components/ui/motion-footer").then(m => ({ default: m.CinematicFooter })), { ssr: true });

export const metadata: Metadata = {
  title: "Rahul Chanda — Commercial & Product Photographer in Dehradun, India",
  description:
    "Rahul Chanda is a commercial & product photographer in Dehradun, India, delivering high-end product, food & beverage, footwear, and advertising campaigns with in-house retouching.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Rahul Chanda — Commercial & Product Photographer in Dehradun",
    description:
      "High-end commercial and product photographer based in Dehradun, India. Specializing in product, food & beverage, footwear, and brand advertising campaigns.",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial & Product Photographer in Dehradun",
      },
    ],
  },
};

// FAQ data for QAPage schema
const faqs = [
  {
    q: "What is the typical turnaround time?",
    a: "Standard delivery is 5–10 business days after the shoot. Rush delivery (24–48 hours) is available on request for an additional fee.",
  },
  {
    q: "How many images are included per project?",
    a: "It depends on the scope agreed in the project brief — Product Photography includes 20–50 edited high-res images and Food & Beverage includes 15–30 hero shots. The exact count is defined before the shoot begins.",
  },
  {
    q: "What are the payment terms?",
    a: "A 50% booking deposit secures your date. The remaining balance is due before final image delivery. Payments can be made via bank transfer or UPI.",
  },
  {
    q: "How long are quotes valid for?",
    a: "Written quotes are valid for 14 days from the date of issue. Final pricing is confirmed in writing before any shoot begins.",
  },
  {
    q: "What happens if I need to cancel a booked shoot?",
    a: "Deposits are non-refundable for cancellations made within 7 days of the scheduled shoot date — that production time is reserved exclusively for you.",
  },
  {
    q: "Can I request revisions?",
    a: "Two rounds of revisions are included with every project. Additional revision rounds can be arranged if needed.",
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a: "I work with brands of all sizes — from early-stage startups to established companies. Every project gets the same attention to craft and detail.",
  },
];

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
      "image": absoluteUrl("/opt/about%20me%20photo/1me.webp"),
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
    generateBreadcrumbSchema(breadcrumbs),
    generateQAPageSchema(faqs),
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
      <SelectedWorkParallax />
      <ServicesShowcase />
      <CaseStudies />
      <TheCraft />
      <Testimonials />
      <About />
      <FAQSection />
      {/* ===== JOURNAL STRIP — internal links into blog cluster (SEO) ===== */}
      <section aria-label="From the journal" className="relative w-full px-4 md:px-12 py-20 md:py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              From the <span className="italic text-[#e83b2c]">journal</span>.
            </h2>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest text-white/50 hover:text-[#e83b2c] transition-colors"
              data-cursor="pointer"
            >
              All articles →
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