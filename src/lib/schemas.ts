/**
 * Comprehensive JSON-LD Schema Markup Library
 * All schema types needed for complete SEO coverage
 */

import { siteConfig, absoluteUrl } from './site';

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// BREADCRUMB SCHEMA  —  For all pages
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
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

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// REVIEW / TESTIMONIAL SCHEMA — REMOVED (was dead code).
// The old generateReviewSchema() emitted a bare AggregateRating with a
// hardcoded 4.9 — invalid per Google's guidelines (no itemReviewed, and
// self-serving business ratings are ineligible for rich results).
// If reviews markup is ever needed, nest real Review objects (with named
// reviewers matching on-page testimonials) inside the LocalBusiness node.

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// QA PAGE SCHEMA  —  For FAQ section
// Note: Google restricts FAQ rich results to gov/health sites (since Aug
// 2023), so this will NOT produce FAQ rich snippets in Google. It is kept
// because Bing/other engines still use it and it documents page structure.
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
export function generateQAPageSchema(
  faqs: Array<{
    q: string;
    a: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// ARTICLE / BLOG POST SCHEMA  —  For blog pages
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
export function generateBlogPostSchema(
  post: { title: string; excerpt: string; slug: string },
  datePublished: string,
  imageUrl: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
    },
    "datePublished": datePublished,
    // Real refresh date when provided (SEO freshness signal) — falls back
    // to the publish date for posts never substantively updated.
    "dateModified": dateModified ?? datePublished,
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
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// ORGANIZATION / LOCAL BUSINESS SCHEMA  —  For homepage
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
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

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// PERSON SCHEMA  —  For founder/photographer
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
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

// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
// COMBINED GRAPH SCHEMA  —  For complex multi-entity pages
// ✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
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
