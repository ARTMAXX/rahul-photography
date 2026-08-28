# Schema & Structured Data Findings

**Date:** 28 August 2026
**Score:** 72/100

---

## Current Schema Inventory

| Page | Schema Types | Quality |
|---|---|---|
| `/` (Homepage) | LocalBusiness, ProfessionalService, WebSite, AggregateRating, Review, BreadcrumbList | ✅ Good |
| `/about` | Person | ✅ Good |
| `/contact` | ProfessionalService | ⚠️ Missing BreadcrumbList |
| `/gallery` | ImageGallery (layout) | ⚠️ Missing ImageObject |
| `/services` | Service, QAPage, BreadcrumbList | ✅ Good |
| `/services/product-photography` | Service | ⚠️ Missing BreadcrumbList |
| `/services/food-beverage-photography` | Service | ⚠️ Missing BreadcrumbList |
| `/services/footwear-fashion-photography` | Service | ⚠️ Missing BreadcrumbList |
| `/services/commercial-campaigns` | Service | ⚠️ Missing BreadcrumbList |
| `/dehradun` | LocalBusiness, ProfessionalService, FAQ, BreadcrumbList | ✅ Good |
| `/faq` | QAPage | ⚠️ Missing BreadcrumbList |
| `/blog` | BreadcrumbList | ✅ Minimal OK |
| `/blog/[slug]` | BlogPosting, BreadcrumbList | ⚠️ Missing datePublished |
| `/terms` | None | ❌ Missing WebPage |
| `/privacy` | None | ❌ Missing WebPage |

---

## HIGH: BlogPosting Missing Date Fields

### Evidence
`src/lib/schemas.ts` — `generateBlogPostingSchema()` does not include:
- `datePublished`
- `dateModified`
- `publisher`

Google's article rich results require `datePublished`. Without it, articles cannot appear in Top Stories, article carousels, or date-stamped snippets.

### Recommendation
```typescript
export function generateBlogPostingSchema({
  title, description, url, image, author, datePublished, dateModified
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    author: { "@type": "Person", name: author || "Rahul Chanda" },
    publisher: {
      "@type": "Organization",
      name: "Rahul Chanda Photography",
      logo: { "@type": "ImageObject", url: absoluteUrl("/opt/og-image.jpg") }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified || datePublished,
  };
}
```

---

## MEDIUM: Missing `WebSite` + `SearchAction`

### Evidence
The homepage has `WebSite` schema but lacks `potentialAction.SearchAction`.

### Impact
Google can display a sitelinks search box in search results when `WebSite` + `SearchAction` are present. This is a free SERP feature for branded queries.

### Recommendation
Add to homepage schema:
```json
{
  "@type": "WebSite",
  "url": "https://rahulchandaphotography.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rahulchandaphotography.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## MEDIUM: Missing `VideoObject` for Hero Video

### Evidence
Homepage hero includes `<video>` with `hero-video.mp4` but no `VideoObject` schema.

### Impact
- Video cannot appear in Google Video search results
- No video rich snippet potential
- Missed opportunity for video carousel inclusion

### Recommendation
```json
{
  "@type": "VideoObject",
  "name": "Rahul Chanda Photography — Commercial Product Photography Studio",
  "description": "...",
  "thumbnailUrl": "/opt/hero-poster.jpg",
  "contentUrl": "/opt/hero-video.mp4",
  "embedUrl": "https://rahulchandaphotography.com",
  "duration": "PT30S"
}
```

---

## MEDIUM: No Breadcrumb Schema on Service Sub-Pages

### Evidence
`generateBreadcrumbSchema` exists in `schemas.ts` and is used on homepage and blog. But the 4 service sub-pages only have `Service` schema — no breadcrumb trail.

### Impact
- Service pages won't display breadcrumb navigation in Google search results
- Reduces SERP real estate and click-through rates

### Recommendation
Add to each service sub-page:
```typescript
import { generateBreadcrumbSchema } from "@/lib/schemas";

// In the page component:
const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Product Photography", url: "/services/product-photography" },
]);
```

---

## LOW: No `ImageObject` Schema on Portfolio Images

### Evidence
Gallery images and portfolio items in `feature-showcase.tsx` and `selected-work-parallax.tsx` lack individual `ImageObject` schema.

### Impact
- Images cannot appear in Google Image Search with rich captions
- No license/credit metadata for image attribution

### Recommendation
For high-value portfolio images, add:
```json
{
  "@type": "ImageObject",
  "contentUrl": "...",
  "license": "https://rahulchandaphotography.com/terms",
  "creditText": "Rahul Chanda Photography",
  "caption": "Premium skincare product flat lay — commercial photography for brand advertising",
  "creator": { "@type": "Person", "name": "Rahul Chanda" }
}
```

---

## INFO: QAPage Correctly Used (Not FAQPage)

Google deprecated `FAQPage` schema in May 2026. The site correctly uses `QAPage` for FAQ content, which is the recommended replacement. Good forward-thinking implementation.
