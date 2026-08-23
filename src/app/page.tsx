import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DesignInMotion from "@/components/sections/DesignInMotion";
import WorkProof from "@/components/sections/redesign/WorkProof";
import ClientProblem from "@/components/sections/redesign/ClientProblem";
import ServicesShowcase from "@/components/sections/redesign/ServicesShowcase";
import CaseStudies from "@/components/sections/redesign/CaseStudies";
import TheCraft from "@/components/sections/redesign/TheCraft";
import Testimonials from "@/components/sections/redesign/Testimonials";
import FAQSection from "@/components/sections/redesign/FAQSection";
import CinematicCTA from "@/components/sections/redesign/CinematicCTA";
import ContactForm from "@/components/sections/redesign/ContactForm";
import { SelectedWorkParallax } from "@/components/ui/selected-work-parallax";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rahul Chanda — Commercial Product Photographer | Dehradun, India",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer",
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rahul Chanda",
  "jobTitle": "Commercial Product Photographer",
  "url": absoluteUrl("/"),
  "sameAs": [siteConfig.contact.instagram, siteConfig.contact.googleBusiness],
  "knowsAbout": [
    "Product Photography",
    "Beverage Splash Photography",
    "Food Photography",
    "Footwear Photography",
    "High-End Retouching",
  ],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": siteConfig.name,
  "image": absoluteUrl("/about%20me%20photo/1me.webp"),
  "description":
    "Rahul Chanda is a commercial product photographer in Dehradun, India, who makes products look worth choosing — product, food & beverage, footwear, and campaign photography, shot and retouched in-house.",
  "@id": absoluteUrl("/"),
  "url": absoluteUrl("/"),
  "telephone": siteConfig.contact.telephone,
  "email": siteConfig.contact.email,
  "priceRange": siteConfig.contact.priceRange,
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
    { "@type": "State", "name": "Uttarakhand" },
    { "@type": "Country", "name": "India" },
  ],
  "sameAs": [siteConfig.contact.instagram, siteConfig.contact.googleBusiness],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Photography" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beverage & Splash Photography" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Food Photography" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fashion & Footwear Photography" } },
    ],
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Hero />
      <WorkProof />
      <DesignInMotion />
      <ClientProblem />
      <ServicesShowcase />
      <CaseStudies />
      <SelectedWorkParallax />
      <TheCraft />
      <Testimonials />
      <About />
      <FAQSection />
      <CinematicCTA />
      <ContactForm />
      <CinematicFooter />
    </main>
  );
}