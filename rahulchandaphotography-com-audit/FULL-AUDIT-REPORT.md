# Comprehensive SEO Audit Report

**Domain:** rahulchandaphotography.com
**Date:** 28 August 2026
**Auditor:** OpenCode SEO Audit
**Business Type:** Commercial & Product Photography Studio (Local Service — Dehradun, Uttarakhand, India)

---

## Executive Summary

### SEO Health Score: **74 / 100**

Rahul Chanda Photography has a **strong technical foundation** — server-side rendered Next.js on Cloudflare with OpenNext, solid security headers, a rich `llms.txt`, and well-structured JSON-LD schemas across most pages. However, a **critical robots.txt conflict** nullifies AI search visibility, **4 blog posts are orphaned from the sitemap**, and the **Gallery page has zero server-rendered SEO metadata**.

### Top 5 Critical Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | robots.txt Cloudflare-managed section blocks GPTBot, ClaudeBot, Google-Extended — contradicts llms.txt | **Critical** |
| 2 | 4 standalone blog posts missing from sitemap.xml | **High** |
| 3 | Gallery page is client-only (`"use client"`) — no metadata export, relies solely on layout.tsx | **High** |
| 4 | Schema: BlogPosting missing `datePublished` / `dateModified` (blog posts) | **High** |
| 5 | Contact page has thin meta description ("Have a project in mind?") | **Medium** |

### Top 5 Quick Wins

| # | Fix | Effort |
|---|-----|--------|
| 1 | Add Cloudflare WAF rule to unblock GPTBot/ClaudeBot/Google-Extended | 5 min |
| 2 | Add 4 missing blog posts to `blogPostsSEO` array in `sitemap.ts` | 15 min |
| 3 | Add `datePublished` + `dateModified` to all BlogPosting schemas | 30 min |
| 4 | Write specific meta description for Contact page | 5 min |
| 5 | Add `BreadcrumbList` schema to service sub-pages | 30 min |

---

## 1. Technical SEO — Score: 80/100

### What Works
- **Server-side rendering**: Next.js with OpenNext on Cloudflare — proper SSR, not SPA
- **Security headers**: HSTS, CSP, X-Frame-Options DENY, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy — all present
- **Cache-Control**: `s-maxage=31536000` — aggressive CDN cache
- **Canonical URLs**: All pages use `absoluteUrl()` helper from `src/lib/site.ts`
- **HTTPS enforced**: HSTS with `includeSubDomains`
- **`llms.txt`**: Full structured llms.txt with navigation, all blog articles, studio details, and content negotiation (`Accept: text/markdown`)

### Findings

#### CRITICAL: robots.txt Conflict — AI Crawlers Blocked

The `robots.txt` has **two conflicting sections**:

**Cloudflare-managed block (top):**
```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

**Site's own rules (bottom):**
```
User-Agent: *
Allow: /
```

**Impact**: GPTBot, ClaudeBot, Google-Extended, Bytespider, CCBot, Applebot-Extended, meta-externalagent are all **blocked from crawling**. This directly contradicts the site's `llms.txt` (which is designed for AI consumption) and the `robots.ts` file in code (which allows all AI bots).

**Root cause**: Cloudflare's "AI Scrapers and Crawlers" managed ruleset is auto-appending `Disallow` rules on top of the site's own robots.txt. The site's `robots.ts` code is correct, but Cloudflare overrides it at the CDN edge.

**Fix**: In Cloudflare Dashboard → Security → Bots → Configure Bot Management, disable the "AI Scrapers" block rule, OR create a Page Rule / WAF exception that unblocks these specific user-agents.

#### HIGH: 4 Blog Posts Missing from Sitemap

The sitemap at `/sitemap.xml` contains **13 blog posts**, but the codebase has **17 blog post URLs** (12 dynamic + 5 standalone). These 4 are missing:

| Missing Post | File |
|---|---|
| `/blog/product-photography-small-business-india` | `src/app/blog/product-photography-small-business-india/page.tsx` |
| `/blog/product-photography-lighting-setup` | `src/app/blog/product-photography-lighting-setup/page.tsx` |
| `/blog/how-to-photograph-products-ecommerce` | `src/app/blog/how-to-photograph-products-ecommerce/page.tsx` |
| `/blog/food-photography-restaurants` | `src/app/blog/food-photography-restaurants/page.tsx` |

**Fix**: Add these 4 URLs to the `blogPostsSEO` array in `src/app/sitemap.ts`.

#### MEDIUM: No 404 Page with Metadata

No custom `not-found.tsx` was found. Default 404 pages lose visitors and provide no SEO signal.

**Fix**: Create `src/app/not-found.tsx` with metadata, a helpful message, and links to key pages.

---

## 2. Content Quality — Score: 76/100

### What Works
- **Blog depth**: 12+ long-form technical articles (300-800 words each), well-structured with h2/h3 hierarchy
- **Service pages**: Comprehensive product photography page (361 lines), food & beverage (283 lines), footwear (215 lines), commercial campaigns (248 lines)
- **Dehradun landing page**: 737 lines of locally-targeted content with neighborhood intel, services, FAQ, and journal integration
- **E-E-A-T signals**: About page with photographer profile, equipment list, studio details, experience stats
- **Legal pages**: Terms of Service (154 lines) and Privacy Policy (150 lines) present and properly linked

### Findings

#### HIGH: Blog Posts Missing `datePublished` / `dateModified`

The BlogPosting schema generated by `generateBlogPostingSchema` in `src/lib/schemas.ts` does **not** include `datePublished` or `dateModified` fields. Google uses these for freshness signals and article snippet display.

**Current schema shape** (from `schemas.ts`):
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "description": "...",
  "author": { "@type": "Person", "name": "..." },
  "image": "...",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." }
}
```

**Missing**: `datePublished`, `dateModified`, `publisher`

**Fix**: Add these fields to the schema generator and pass dates from blog post data.

#### HIGH: Gallery Page — Client-Only, No Server Metadata

`src/app/gallery/page.tsx` is marked `"use client"` (line 1), which means it **cannot export `metadata`**. The metadata is defined in `src/app/gallery/layout.tsx`, which works, but:

- The layout metadata is generic: title "Gallery", description "A curated selection of commercial product, food, and beverage photography..."
- No OpenGraph image specific to the gallery
- No `keywords` metadata
- No internal links to service pages from gallery content

**Fix**: Consider converting gallery to a server component with client-side interactivity via a child component, or ensure the layout metadata is comprehensive.

#### MEDIUM: Terms/Privacy Pages — Thin Content

Both pages have:
- Title: just the page name ("Terms of Service", "Privacy Policy")
- Description: one sentence each
- No structured data (no `WebPage` schema)
- No internal links to related service pages

**Fix**: Add `WebPage` schema, expand descriptions, cross-link to services.

#### MEDIUM: Meta Description Quality

| Page | Current Description | Issue |
|---|---|---|
| Contact | "Have a project in mind?" | Too vague — no keywords |
| FAQ | "Common questions about product photography..." | Good |
| Blog index | Uses BlogSection component — unknown metadata | Needs verification |
| Gallery | "A curated selection of commercial product, food..." | Acceptable but generic |

---

## 3. On-Page SEO — Score: 78/100

### What Works
- **Title pattern**: `%s — Rahul Chanda Photography` — consistent branding
- **H1 tags**: Present and descriptive on all pages
- **Internal linking**: Blog posts link to service pages, services link to blog, Dehradun page integrates journal
- **Keyword targeting**: "Product Photography Dehradun", "Commercial Photographer Dehradun", "Food Photography India" used naturally

### Findings

#### MEDIUM: Missing Breadcrumb Schema on Service Sub-Pages

`generateBreadcrumbSchema` exists in `src/lib/schemas.ts` but is **not applied** to:
- `/services/product-photography`
- `/services/food-beverage-photography`
- `/services/footwear-fashion-photography`
- `/services/commercial-campaigns`

These pages only have `Service` schema — no breadcrumb trail.

**Fix**: Import and render `generateBreadcrumbSchema` on all service sub-pages.

#### MEDIUM: No OpenGraph Article Tags on Blog Posts

Blog post pages don't include `og:type = "article"` with `article:published_time`, `article:modified_time`, `article:author`, `article:section` tags.

**Fix**: Add `openGraph.type = "article"` with temporal metadata to blog post pages.

#### LOW: Image Alt Text Inconsistency

Portfolio images in `feature-showcase.tsx` and `selected-work-parallax.tsx` use `alt` attributes, but some are generic (`alt="Commercial product photography showcase"`) while others are specific. Not all images have descriptive alt text.

**Fix**: Audit all `<img>` tags and ensure alt text is descriptive and keyword-relevant.

---

## 4. Schema & Structured Data — Score: 72/100

### What Works
- **JSON-LD on most pages**: Homepage (LocalBusiness + ProfessionalService + WebSite), Services (Service + QAPage), About (Person), Blog (BlogPosting), Dehradun (LocalBusiness + ProfessionalService + FAQ)
- **QAPage schema** (correctly deprecated FAQPage per Google May 2026 update)
- **AggregateRating + Review** on homepage
- **BreadcrumbList** on homepage and blog
- **ImageGallery** on gallery layout

### Findings

#### HIGH: BlogPosting Missing `datePublished` / `dateModified`

As noted above — critical for Google article rich results.

#### MEDIUM: No `WebSite` Schema with `SearchAction`

Missing sitelinks searchbox potential. Google can display a search box in search results for sites with valid `WebSite` + `SearchAction` schema.

**Fix**: Add to homepage:
```json
{
  "@type": "WebSite",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rahulchandaphotography.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### MEDIUM: No `VideoObject` Schema

The homepage hero features a video (`hero-video.mp4`). Without `VideoObject` schema, Google cannot index it as a video result.

**Fix**: Add `VideoObject` schema referencing the video URL, thumbnail, duration, and description.

#### LOW: No `ImageObject` Schema on Portfolio Images

Gallery and portfolio images lack individual `ImageObject` schema with `caption`, `license`, `creditText`, and `contentUrl`.

---

## 5. Performance — Score: 70/100

### What Works
- **Next.js dynamic imports**: `Hero`, `About`, `Clients`, `Testimonials`, `CTA`, `FAQSection`, `BlogSection` are all lazy-loaded via `dynamic()` with `{ ssr: false }`
- **Video optimization**: Hero video uses `preload="none"`, `muted`, `loop`, `playsInline` — defer loading
- **Font optimization**: `next/font` with `display: swap` for Playfair Display and Outfit
- **LazyVideo component**: Custom lazy loading with `IntersectionObserver`

### Findings

#### HIGH: Hero Video — No `poster` Attribute

The `<video>` tag in `Hero.tsx` has `poster={undefined}` (line 69). This means:
- No placeholder image while video loads
- Potential CLS (Cumulative Layout Shift) when video dimensions resolve
- No fallback for browsers that don't autoplay

**Fix**: Add a `poster` image (WebP, <100KB) showing the hero frame.

#### MEDIUM: No Image Format Optimization

Images in `feature-showcase.tsx` and `selected-work-parallax.tsx` use standard JPEG format. No `<picture>` elements with WebP/AVIF sources.

**Fix**: Use Next.js `<Image>` component with `formats={["image/avif", "image/webp"]}` for automatic format negotiation.

#### MEDIUM: Client-Side Rendering Impact

`gallery/page.tsx` is fully client-rendered. All 32 gallery images load via client JavaScript — potentially delaying LCP and causing layout shifts.

**Fix**: Consider SSR for initial gallery render, or add `loading="lazy"` to all images below the fold.

---

## 6. AI Search Readiness — Score: 65/100

### What Works
- **`llms.txt`**: Comprehensive, well-structured, includes navigation, articles, studio details
- **Content negotiation**: `Accept: text/markdown` support
- **robots.ts code**: Correctly allows GPTBot, ClaudeBot, PerplexityBot, etc.
- **Structured data**: Rich JSON-LD on most pages

### Findings

#### CRITICAL: robots.txt Blocks AI Crawlers (Cloudflare Override)

This is the **single biggest issue** for AI search visibility. Despite having excellent `llms.txt` and correct code-level `robots.ts`, Cloudflare's managed rules block the very crawlers that would consume the `llms.txt`:

| Bot | robots.ts (code) | robots.txt (Cloudflare) | Result |
|---|---|---|---|
| GPTBot | ✅ Allow | ❌ Disallow | **Blocked** |
| ClaudeBot | ✅ Allow | ❌ Disallow | **Blocked** |
| Google-Extended | ✅ Allow | ❌ Disallow | **Blocked** |
| PerplexityBot | ✅ Allow | Not listed | Allowed |
| Bytespider | ✅ Allow | ❌ Disallow | **Blocked** |

**Fix**: Disable Cloudflare's AI bot blocking rules immediately.

#### MEDIUM: No `llms-full.txt`

The site has `llms.txt` but no `llms-full.txt` (the extended version that provides full page content for AI ingestion).

**Fix**: Generate `llms-full.txt` with expanded content from all pages.

---

## 7. Images — Score: 68/100

### Findings

#### HIGH: Inconsistent Alt Text

Portfolio images have varying alt text quality:
- Good: `alt="Premium skincare product flat lay"`
- Generic: `alt="Commercial product photography showcase"`
- Missing context: Some images lack product/brand descriptors

#### MEDIUM: No Lazy Loading on Below-Fold Images

Images in `selected-work-parallax.tsx` and `feature-showcase.tsx` don't use `loading="lazy"` consistently.

#### LOW: No Image Sitemap

No `<image:image>` entries in sitemap.xml. Portfolio images could benefit from image-specific sitemap entries for Google Image Search.

---

## Action Plan

### Phase 1: Critical Fixes (Week 1)

| # | Task | Files | Effort |
|---|------|-------|--------|
| 1 | **Disable Cloudflare AI bot blocking** — unblock GPTBot, ClaudeBot, Google-Extended in Cloudflare Dashboard | Cloudflare Dashboard | 5 min |
| 2 | **Add 4 missing blog posts to sitemap** — update `blogPostsSEO` array | `src/app/sitemap.ts` | 15 min |
| 3 | **Add `datePublished` + `dateModified` to BlogPosting schema** | `src/lib/schemas.ts`, all blog pages | 30 min |
| 4 | **Write specific Contact page meta description** | `src/app/contact/page.tsx` | 5 min |

### Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Task | Files | Effort |
|---|------|-------|--------|
| 5 | **Add Breadcrumb schema to service sub-pages** | 4 service page files | 30 min |
| 6 | **Add `poster` attribute to hero video** | `src/components/sections/Hero.tsx` | 15 min |
| 7 | **Add `og:type = "article"` to blog posts** | `src/app/blog/[slug]/page.tsx` | 20 min |
| 8 | **Convert gallery to SSR + client hybrid** | `src/app/gallery/page.tsx`, new component | 1 hr |
| 9 | **Add `VideoObject` schema to homepage** | `src/app/page.tsx` | 20 min |
| 10 | **Create custom 404 page with metadata** | `src/app/not-found.tsx` | 30 min |

### Phase 3: Content & Authority (Month 2)

| # | Task | Files | Effort |
|---|------|-------|--------|
| 11 | **Add `WebSite` + `SearchAction` schema** | `src/lib/schemas.ts` | 20 min |
| 12 | **Audit and improve all image alt text** | `feature-showcase.tsx`, `selected-work-parallax.tsx`, gallery | 1 hr |
| 13 | **Add `WebPage` schema to Terms/Privacy** | `src/app/terms/page.tsx`, `src/app/privacy/page.tsx` | 20 min |
| 14 | **Generate `llms-full.txt`** | `public/llms-full.txt` | 30 min |
| 15 | **Add `ImageObject` schema to portfolio images** | schemas.ts, gallery, feature-showcase | 1 hr |
| 16 | **Expand Terms/Privacy content with internal links** | terms.tsx, privacy.tsx | 30 min |

### Phase 4: Monitoring & Iteration (Ongoing)

| # | Task | Frequency |
|---|------|-----------|
| 17 | Monitor Google Search Console for crawl errors | Weekly |
| 18 | Track AI search citations (ChatGPT, Perplexity) | Monthly |
| 19 | Re-audit after deploying fixes | After each phase |
| 20 | Update blog content freshness (add dates, refresh) | Monthly |

---

## Appendix: Page-by-Page Schema Inventory

| Page | Schemas Present | Missing |
|---|---|---|
| `/` (Homepage) | LocalBusiness, ProfessionalService, WebSite, AggregateRating, Review, BreadcrumbList | VideoObject, SearchAction |
| `/about` | Person | — |
| `/contact` | ProfessionalService | BreadcrumbList |
| `/gallery` | ImageGallery (layout) | ImageObject per image |
| `/services` | Service, QAPage, BreadcrumbList | — |
| `/services/product-photography` | Service | BreadcrumbList |
| `/services/food-beverage-photography` | Service | BreadcrumbList |
| `/services/footwear-fashion-photography` | Service | BreadcrumbList |
| `/services/commercial-campaigns` | Service | BreadcrumbList |
| `/dehradun` | LocalBusiness, ProfessionalService, FAQ, BreadcrumbList | — |
| `/faq` | QAPage | BreadcrumbList |
| `/blog` | BreadcrumbList | — |
| `/blog/[slug]` | BlogPosting, BreadcrumbList | datePublished, dateModified |
| `/terms` | — | WebPage |
| `/privacy` | — | WebPage |
