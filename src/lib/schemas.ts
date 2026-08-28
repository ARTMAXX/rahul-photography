/**
 * Comprehensive JSON-LD Schema Markup Library
 * All schema types needed for complete SEO coverage
 */

import { siteConfig, absoluteUrl } from './site';

// ════════════════════════════════════════════════════════════════════
// BREADCRUMB SCHEMA — For all pages
// ════════════════════════════════════════════════════════════════════
export function generateBreadcrumbSchema(breadcrumbs: { label: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": crumb.url,
    })),
  };
}

// ════════════════════════════════════════════════════════════════════
// REVIEW / TESTIMONIAL SCHEMA — For testimonials section
// ════════════════════════════════════════════════════════════════════
export function generateReviewSchema(
  testimonials: Array<{
    text: string;
    name: string;
    role: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": testimonials.length,
    "reviewCount": testimonials.length,
  };
}

// Individual review objects
export function generateIndividualReviews(
  testimonials: Array<{
    text: string;
    name: string;
    role: string;
  }>
) {
  return testimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name,
      "jobTitle": testimonial.role.split(",")[0], // Extract job title
    },
    "reviewBody": testimonial.text,
    "datePublished": new Date().toISOString().split('T')[0],
  }));
}

// ════════════════════════════════════════════════════════════════════
// IMAGE OBJECT SCHEMA — For portfolio/product images
// ════════════════════════════════════════════════════════════════════
export function generateImageSchema(
  imageUrl: string,
  imageAlt: string,
  imageWidth?: number,
  imageHeight?: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": imageUrl,
    "name": imageAlt,
    "description": imageAlt,
    ...(imageWidth && imageHeight && {
      "width": imageWidth,
      "height": imageHeight,
    }),
  };
}

// ════════════════════════════════════════════════════════════════════
// QA PAGE SCHEMA — For FAQ section (replaced deprecated FAQPage)
// Note: FAQ rich results were retired May 7, 2026 by Google
// QAPage is the modern replacement for genuine Q&A content
// ════════════════════════════════════════════════════════════════════
export function generateQAPageSchema(
  faqs: Array<{
    q: string;
    a: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

// ════════════════════════════════════════════════════════════════════
// SERVICE SCHEMA — For services pages
// ════════════════════════════════════════════════════════════════════
export function generateServiceSchema(
  serviceName: string,
  description: string,
  priceRange?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": absoluteUrl("/#business"),
    },
    ...(priceRange && { "priceRange": priceRange }),
  };
}

// ════════════════════════════════════════════════════════════════════
// ARTICLE / BLOG POST SCHEMA — For blog pages
// ════════════════════════════════════════════════════════════════════
export function generateBlogPostSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  imageUrl: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": "Rahul Chanda",
      "url": absoluteUrl("/about"),
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl("/icon.svg"),
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${slug}`),
    },
  };
}

// ════════════════════════════════════════════════════════════════════
// ORGANIZATION / LOCAL BUSINESS SCHEMA — For homepage
// ════════════════════════════════════════════════════════════════════
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": absoluteUrl("/#business"),
    "name": siteConfig.name,
    "legalName": "Rahul Chanda Photography",
    "url": absoluteUrl("/"),
    "logo": absoluteUrl("/icon.svg"),
    "image": absoluteUrl(siteConfig.ogImagePath),
    "description": siteConfig.description,
    "telephone": siteConfig.contact.telephone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dehradun",
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
    "priceRange": siteConfig.contact.priceRange,
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
  };
}

// ════════════════════════════════════════════════════════════════════
// PERSON SCHEMA — For founder/photographer
// ════════════════════════════════════════════════════════════════════
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
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
  };
}

// ════════════════════════════════════════════════════════════════════
// COMBINED GRAPH SCHEMA — For complex multi-entity pages
// ════════════════════════════════════════════════════════════════════
export function generateWebsiteGraphSchema() {
  return {
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
      generateOrganizationSchema(),
      generatePersonSchema(),
    ],
  };
}
