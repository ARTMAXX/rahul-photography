import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DesignInMotion from "@/components/sections/DesignInMotion";
import ServicesShowcase from "@/components/sections/redesign/ServicesShowcase";
import TheCraft from "@/components/sections/redesign/TheCraft";
import Testimonials from "@/components/sections/redesign/Testimonials";
import CinematicCTA from "@/components/sections/redesign/CinematicCTA";
import ContactForm from "@/components/sections/redesign/ContactForm";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rahul Chanda — Commercial Product Photographer | Dehradun, India",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
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
  "sameAs": [siteConfig.contact.instagram],
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
    "High-end commercial product photography, food photography, beverage splash photography, and footwear photography based in Dehradun, India.",
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
  "openingHours": "Mo-Sa 10:00-19:00",
  "sameAs": [siteConfig.contact.instagram],
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
      <About />
      <DesignInMotion />
      <ServicesShowcase />
      <TheCraft />
      <Testimonials />
      <CinematicCTA />
      <ContactForm />
      <CinematicFooter />
    </main>
  );
}