# Content Quality Findings

**Date:** 28 August 2026
**Score:** 76/100

---

## HIGH: BlogPosting Schema Missing `datePublished` / `dateModified`

### Evidence
`src/lib/schemas.ts` — `generateBlogPostingSchema()` returns:
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "description": "...",
  "author": { "@type": "Person", "name": "Rahul Chanda" },
  "image": "...",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." }
}
```

**Missing fields**: `datePublished`, `dateModified`, `publisher`

Google requires `datePublished` for article rich results and uses `dateModified` for freshness signals. Without these, blog posts cannot appear in "Top Stories" or article carousels.

### Impact
- Blog posts cannot appear in Google article rich results
- Freshness signals are weakened — older posts may rank lower
- Article snippets may lack date display, reducing CTR

### Fix
Add to `generateBlogPostingSchema`:
```typescript
datePublished: date, // ISO 8601
dateModified: date,  // ISO 8601
publisher: {
  "@type": "Organization",
  "name": "Rahul Chanda Photography",
  "logo": { "@type": "ImageObject", "url": absoluteUrl("/opt/og-image.jpg") }
}
```

---

## HIGH: Gallery Page — Client-Only, Limited Metadata

### Evidence
`src/app/gallery/page.tsx` line 1: `"use client"`

This prevents exporting `metadata` from the page component. Metadata is handled by `src/app/gallery/layout.tsx`, which provides:
- Title: "Gallery — Rahul Chanda Photography"
- Description: "A curated selection of commercial product, food, and beverage photography..."

### Issues
- Description is generic — doesn't include specific keywords ("Dehradun", "product photography studio")
- No OpenGraph image specific to gallery
- No `keywords` metadata
- All 32 images load via client JS — potential LCP impact
- No internal links to service pages from gallery content

### Fix
1. Enhance `gallery/layout.tsx` metadata with location + specific keywords
2. Add OpenGraph image (`/og-gallery.jpg` or use main OG image)
3. Consider SSR hybrid: server-render first 6 images, client-load rest

---

## MEDIUM: Contact Page Thin Description

### Evidence
`src/app/contact/page.tsx`:
```typescript
description: "Have a project in mind?",
```

### Impact
- Only 5 words — below Google's recommended 120-160 characters
- No keywords ("product photography inquiry", "Dehradun", "booking")
- Google may generate its own snippet, which could be less compelling

### Fix
```typescript
description: "Contact Rahul Chanda for product photography, food photography, and commercial campaign inquiries in Dehradun, India. Get a quote within 24 hours."
```

---

## MEDIUM: Terms/Privacy Pages — Thin Content, No Schema

### Evidence
Both pages:
- Have only 6 content sections each (~300 words total)
- No structured data (no `WebPage` schema)
- No internal links to service pages
- Title tags are generic ("Terms of Service", "Privacy Policy")

### Impact
- Missed opportunity for `WebPage` schema rich results
- No internal link equity flowing to service/blog pages
- Thin content may be flagged by Google's quality raters

### Fix
1. Add `WebPage` schema with `dateModified`
2. Add related links section at bottom (link to relevant services)
3. Expand descriptions to include business context

---

## MEDIUM: FAQ Content Not Fully Leveraged

### Evidence
`src/app/faq/page.tsx` renders FAQContent component, but the QAPage schema uses hardcoded Q&A pairs that may not match the rendered content exactly. The Dehradun page has its own separate FAQ section with different questions.

### Impact
- Potential mismatch between schema and visible content (Google may penalize)
- Duplicate FAQ content across pages without cross-referencing

### Fix
1. Ensure QAPage schema in `faq/page.tsx` exactly matches rendered content
2. Dehradun page FAQ should reference/cross-link to main FAQ page

---

## INFO: Blog Content Quality — Strong

Blog posts are well-written, technical, and demonstrate genuine expertise:
- `retouching-101`: 769 words, step-by-step pipeline, specific tools mentioned
- `ai-commercial-product-photography`: 727 words, nuanced argument for physical photography
- `lighting-patterns-for-product-photography`: 755 words, technical detail (key lights, scrims, negative fill)
- All posts use proper h2/h3 hierarchy
- Internal links to service pages present in most posts

E-E-A-T signals are strong — the author clearly has hands-on commercial photography experience.
