# COMPREHENSIVE SEO AUDIT REPORT
## rahulchandaphotography.com
### Date: August 28, 2026

---

## TABLE OF CONTENTS
1. [Executive Summary](#executive-summary)
2. [Keyword Map](#keyword-map)
3. [Page-by-Page Audit](#page-by-page-audit)
4. [Image SEO Audit](#image-seo-audit)
5. [Technical SEO Audit](#technical-seo-audit)
6. [Structured Data Audit](#structured-data-audit)
7. [Internal Linking Audit](#internal-linking-audit)
8. [Action Plan](#action-plan)

---

## EXECUTIVE SUMMARY

**Overall SEO Score: 62/100**

| Category | Score | Status |
|----------|-------|--------|
| Page SEO (titles, H1s, metas) | 65/100 | ⚠️ Issues |
| Image SEO | 40/100 | 🔴 Critical |
| Technical SEO | 70/100 | ✅ Good (after recent fixes) |
| Structured Data | 45/100 | ⚠️ Partial |
| Internal Linking | 55/100 | ⚠️ Gaps |
| Content/Keyword Targeting | 60/100 | ⚠️ Needs work |
| Local SEO | 75/100 | ✅ Good |
| Social/OG | 50/100 | ⚠️ Generic images |
| Performance | 65/100 | ⚠️ Image issues |
| Accessibility | 50/100 | ⚠️ Missing alt text |

### Critical Issues Found
1. **Homepage has NO H1 tag** — Hero uses `<strong>` instead
2. **32 gallery images use raw `<img>` with no width/height** — causes CLS
3. **12 WebGL cylinder images have ZERO alt text** — invisible to search engines
4. **9 pages returning 404** — not deployed (fixed in previous session, pending deploy)
5. **Collection Surfer uses 16 Unsplash stock photos** — not Rahul's work
6. **Blog section images use raw `<img>`** — no next/image optimization
7. **No structured data on homepage, gallery, blog index, contact, FAQ**
8. **OG image is generic across all pages** — no page-specific social previews

---

## KEYWORD MAP

### Homepage
| Field | Value |
|-------|-------|
| **Primary Keyword** | commercial photographer Dehradun |
| **Secondary Keywords** | product photographer India, commercial photography Dehradun, advertising photographer |
| **Search Intent** | Hire now / Brand awareness |
| **Current Title** | Rahul Chanda — Commercial & Product Photographer in Dehradun, India ✅ |
| **Current H1** | MISSING (no H1 tag) 🔴 |
| **Current Meta** | Good ✅ |

### /services
| Field | Value |
|-------|-------|
| **Primary Keyword** | commercial photography services Dehradun |
| **Secondary Keywords** | product photography services, food photography services, footwear photography |
| **Search Intent** | Service evaluation |
| **Current Title** | Commercial Photography Services Dehradun | Product, Food & Brand ✅ |
| **Current H1** | "Tailored to your vision." — NOT keyword-targeted ⚠️ |
| **Current Meta** | Good ✅ |

### /services/product-photography
| Field | Value |
|-------|-------|
| **Primary Keyword** | product photography Dehradun |
| **Secondary Keywords** | ecommerce product photography, product photographer, packshot photography |
| **Search Intent** | Service-specific hire |
| **Status** | 404 — NOT DEPLOYED 🔴 |

### /services/food-beverage-photography
| Field | Value |
|-------|-------|
| **Primary Keyword** | food photographer Dehradun |
| **Secondary Keywords** | food photography services, beverage photography, restaurant photography |
| **Search Intent** | Service-specific hire |
| **Status** | 404 — NOT DEPLOYED 🔴 |

### /services/footwear-fashion-photography
| Field | Value |
|-------|-------|
| **Primary Keyword** | footwear photography India |
| **Secondary Keywords** | shoe photography, fashion photography, ecommerce footwear |
| **Search Intent** | Service-specific hire |
| **Status** | 404 — NOT DEPLOYED 🔴 |

### /services/commercial-campaigns
| Field | Value |
|-------|-------|
| **Primary Keyword** | commercial campaign photography India |
| **Secondary Keywords** | advertising photography, brand photography, campaign photographer |
| **Search Intent** | Service-specific hire |
| **Status** | 404 — NOT DEPLOYED 🔴 |

### /gallery
| Field | Value |
|-------|-------|
| **Primary Keyword** | product photography portfolio India |
| **Secondary Keywords** | commercial photography work, photography gallery, portfolio |
| **Search Intent** | Portfolio evaluation |
| **Current Title** | Photography Portfolio — Commercial Photographer in Dehradun ✅ |
| **Current H1** | "Gallery" — minimal ⚠️ |
| **Current Meta** | Good ✅ |

### /about
| Field | Value |
|-------|-------|
| **Primary Keyword** | Rahul Chanda photographer |
| **Secondary Keywords** | commercial photographer Dehradun, about photographer |
| **Search Intent** | Trust/credential evaluation |
| **Current Title** | About Rahul Chanda — Commercial Photographer Dehradun ✅ |
| **Current H1** | "The photographer behind the images." — creative but not keyword-targeted ⚠️ |
| **Current Meta** | Good ✅ |

### /contact
| Field | Value |
|-------|-------|
| **Primary Keyword** | contact photographer Dehradun |
| **Secondary Keywords** | book photographer, photography inquiry, photography quote |
| **Search Intent** | Conversion |
| **Current Title** | Contact Rahul Chanda | Commercial Photographer in Dehradun ✅ |
| **Current H1** | "Ready to make your product worth choosing?" — good CTA ⚠️ |
| **Current Meta** | Good ✅ |

### /dehradun
| Field | Value |
|-------|-------|
| **Primary Keyword** | commercial photographer Dehradun |
| **Secondary Keywords** | product photographer Dehradun, food photographer Dehradun, Dehradun photography |
| **Search Intent** | Local search / hire |
| **Current Title** | Commercial Photographer Dehradun | Product, Food & Cafe Photography ✅ |
| **Current H1** | "Commercial photographer in Dehradun." ✅ |
| **Current Meta** | Excellent — includes phone number ✅ |

### /faq
| Field | Value |
|-------|-------|
| **Primary Keyword** | photography FAQ Dehradun |
| **Secondary Keywords** | photography pricing, photography booking, photography questions |
| **Search Intent** | Pre-hire research |
| **Current Title** | Frequently Asked Questions | Commercial Photography Dehradun ✅ |
| **Current H1** | "Everything you need to know." — generic ⚠️ |
| **Current Meta** | Good ✅ |

### /blog
| Field | Value |
|-------|-------|
| **Primary Keyword** | commercial photography blog |
| **Secondary Keywords** | photography tips, photography guides, photography techniques |
| **Search Intent** | Informational / authority building |
| **Current Title** | Commercial Photography Blog & Field Notes | Rahul Chanda ✅ |
| **Current H1** | "Field notes on commercial photography." — creative ⚠️ |
| **Current Meta** | Good ✅ |

### Blog Posts (12 dynamic + 5 standalone)
| Post | Primary Keyword | Status |
|------|----------------|--------|
| retouching-101 | photo retouching process | ✅ Live |
| color-science-ecommerce | color accuracy ecommerce photography | ✅ Live |
| ai-photoshop-retouching-techniques | AI retouching Photoshop | ✅ Live |
| ai-commercial-product-photography | AI product photography | ✅ Live |
| ai-video-editing-tools-2026 | AI video editing tools | ✅ Live |
| why-beverage-splash-photography-is-hard | beverage splash photography | ✅ Live |
| generative-ai-product-backgrounds | AI product backgrounds | ✅ Live |
| lighting-patterns-for-product-photography | product photography lighting | ✅ Live |
| footwear-photography-angles | footwear photography angles | ✅ Live |
| ai-color-grading-scene-detection | AI color grading | ✅ Live |
| beverage-photography-glass | beverage photography glass | ✅ Live |
| ai-upscaling-ecommerce | AI upscaling ecommerce | ✅ Live |
| food-photography-restaurants | food photography restaurants | ❌ 404 |
| product-photography-lighting-setup | product photography lighting setup | ❌ 404 |
| how-to-photograph-products-ecommerce | ecommerce product photography | ❌ 404 |
| beverage-photography-glass-splash | beverage glass splash photography | ❌ 404 |
| product-photography-small-business-india | product photography small business | ❌ 404 |

---

## PAGE-BY-PAGE AUDIT

### HOMEPAGE — `/`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | "Rahul Chanda — Commercial & Product Photographer in Dehradun, India" |
| H1 | 🔴 MISSING | No H1 tag. Hero uses `<strong>` for "Rahul Chanda" |
| H2 structure | ⚠️ Excessive | 14 H2 tags — too many, dilutes hierarchy |
| Meta description | ✅ Good | Descriptive, includes services + location |
| Canonical | ✅ Correct | Points to `/` |
| Robots | ✅ index, follow | |
| Schema | ❌ Missing | No Organization/LocalBusiness JSON-LD |
| OG image | ⚠️ Generic | Same image as every other page |
| Images | ⚠️ Mixed | Hero uses next/image ✅, cylinder uses raw JS Image() ❌ |
| Internal links | ✅ Good | Links to services, blog, gallery, contact |

### `/services`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ⚠️ Weak | "Tailored to your vision." — not keyword-targeted |
| Meta description | ✅ Good | |
| Canonical | ✅ Correct | |
| Schema | ⚠️ Partial | Has QAPage but uses non-standard "PhotographyBusiness" type |
| Images | ⚠️ Generic | Uses image1.jpg through image6.jpg — generic filenames |
| Internal links | ⚠️ Weak | Only links to /faq and /contact, not to service sub-pages |

### `/gallery`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ⚠️ Weak | "Gallery" — too minimal |
| Meta description | ✅ Good | |
| Canonical | ✅ Correct | |
| Schema | ❌ Missing | No ImageGallery schema |
| Images | 🔴 Critical | 32 images use raw `<img>` with no width/height — CLS |
| Internal links | ❌ Weak | Only mailto link — no internal links |

### `/about`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ⚠️ Creative | "The photographer behind the images." — not keyword-targeted |
| Content | ⚠️ Thin | ~320 words (was ~170, expanded in previous session) |
| Schema | ✅ Good | Person + BreadcrumbList |
| Images | ⚠️ Filename | `1me.webp` is non-descriptive |

### `/contact`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ✅ Good | "Ready to make your product worth choosing?" — CTA-focused |
| Meta description | ✅ Good | |
| Schema | ✅ Good | ContactPage + BreadcrumbList |
| Images | N/A | No images |

### `/dehradun`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Excellent | Includes primary keyword + services |
| H1 | ✅ Excellent | "Commercial photographer in Dehradun." |
| Content | ✅ Rich | 1,788 words — comprehensive local landing page |
| Schema | ✅ Good | LocalBusiness + FAQPage + Person + BreadcrumbList |
| Internal links | ✅ Good | Links to services, blog posts, Google Maps |

### `/faq`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ⚠️ Generic | "Everything you need to know." |
| Schema | ✅ Good | QAPage |
| Content | ⚠️ Thin | Only FAQ, no supporting content |

### `/blog`
| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ Good | |
| H1 | ⚠️ Creative | "Field notes on commercial photography." |
| Schema | ⚠️ Partial | BreadcrumbList only — no Blog schema |
| Images | ⚠️ Raw img | Blog cards use `<LazyImage>` (raw `<img>`) |

### Blog Posts (dynamic [slug])
| Check | Status | Notes |
|-------|--------|-------|
| Title tags | ✅ Good | Unique per post |
| H1 | ✅ Good | Matches title |
| Schema | ✅ Good | BlogPosting + BreadcrumbList |
| Internal links | ✅ Good | Related reading section |
| Images | ❌ None | Blog posts have NO images — text only |

---

## IMAGE SEO AUDIT

### Critical Image Issues

| # | Issue | Severity | Component | Impact |
|---|-------|----------|-----------|--------|
| 1 | 12 WebGL cylinder images have NO alt text | 🔴 P0 | CinematicCylinder.tsx | Invisible to search engines |
| 2 | 32 gallery images use raw `<img>` with no width/height | 🔴 P0 | gallery/page.tsx, gallery-grid-block-shadcnui.tsx | CLS, no format optimization |
| 3 | 16 Collection Surfer default images are Unsplash stock | 🔴 P0 | collection-surfer.tsx | Brand trust damage |
| 4 | 13 Feature Showcase images use raw `<img>` | 🔴 P0 | feature-showcase.tsx | CLS, no optimization |
| 5 | 12 blog card images use raw `<img>` | 🟡 P1 | blog-section.tsx | No width/height |
| 6 | Video file rendered as `<img>` tag | 🟡 P1 | feature-showcase.tsx | Silent failure |
| 7 | Filename `1me.webp` is non-descriptive | 🟡 P1 | About.tsx, about/page.tsx | Missed keyword |
| 8 | Filename typo `new-product-luxury -sandel.webp` | 🟡 P1 | selected-work-parallax.tsx | Possible 404 |
| 9 | Filename `Biriyani photo.webp` has space | 🟡 P1 | selected-work-parallax.tsx | URL encoding |
| 10 | 4 PNG files should be WebP | 🟢 P2 | feature-showcase.tsx | Larger file sizes |
| 11 | Directory names contain spaces | 🟢 P2 | Multiple files | URL encoding issues |
| 12 | MobileBentoGrid alt text repetitive pattern | 🟢 P2 | MobileBentoGrid.tsx | Slight keyword stuffing |

### Image Format Analysis

| Format | Count | Status |
|--------|-------|--------|
| WebP | ~80 images | ✅ Good — modern format |
| PNG | 4 images | ⚠️ Should convert to WebP |
| JPEG | 1 (OG image) | ✅ Acceptable for OG |
| External Unsplash JPG | 16 | 🔴 Stock photos — not Rahul's work |

### Image Loading Strategy Analysis

| Component | Strategy | Assessment |
|-----------|----------|------------|
| Hero mobile | `priority` + `fill` | ✅ Correct for LCP |
| Hero desktop video | `preload="auto"` | ✅ Correct |
| About portrait | `priority` + `eager` | ✅ Correct for above-fold |
| CaseStudies | First `eager`, rest `lazy` | ✅ Correct |
| SelectedWorkParallax | All `lazy` | ✅ Correct (below fold) |
| Gallery images | All `lazy` | ✅ Correct |
| Blog cards | `lazy` + `fetchPriority="low"` | ✅ Correct |
| WebGL cylinder | All loaded on mount | ❌ Should lazy-load |
| Collection Surfer | No lazy loading | ❌ Should lazy-load |

---

## TECHNICAL SEO AUDIT

### Sitemap
| Check | Status | Notes |
|-------|--------|-------|
| Format | ✅ Valid XML | |
| URLs included | ✅ 31 URLs | After recent fix adding 9 new pages |
| lastmod | ⚠️ Dynamic | Uses `new Date()` for core pages — always today |
| Priority | ✅ Reasonable | Homepage 1.0, services 0.9, blog 0.6 |
| Blog dates | ✅ Accurate | Uses actual publication dates |

### Robots.txt
| Check | Status | Notes |
|-------|--------|-------|
| Format | ✅ Valid | Generated by robots.ts |
| AI crawlers | ✅ Allowed | GPTBot, ClaudeBot, PerplexityBot, etc. |
| Aggressive bots | ✅ Blocked | SemrushBot, AhrefsBot, MJ12bot |
| Disallow rules | ✅ Good | /api/, /_next/, /opt/ |
| Sitemap reference | ✅ Present | |

### Canonical URLs
| Page | Canonical | Status |
|------|-----------|--------|
| / | https://rahulchandaphotography.com/ | ✅ |
| /about | https://rahulchandaphotography.com/about | ✅ |
| /services | https://rahulchandaphotography.com/services | ✅ |
| /gallery | https://rahulchandaphotography.com/gallery | ✅ |
| /contact | https://rahulchandaphotography.com/contact | ✅ |
| /dehradun | https://rahulchandaphotography.com/dehradun | ✅ |
| /faq | https://rahulchandaphotography.com/faq | ✅ |
| /blog | https://rahulchandaphotography.com/blog | ✅ |

### 404 Pages
| URL | Status | Notes |
|-----|--------|-------|
| /services/product-photography | ❌ 404 | Not deployed — code exists locally |
| /services/food-beverage-photography | ❌ 404 | Not deployed |
| /services/footwear-fashion-photography | ❌ 404 | Not deployed |
| /services/commercial-campaigns | ❌ 404 | Not deployed |
| /blog/food-photography-restaurants | ❌ 404 | Not deployed |
| /blog/product-photography-lighting-setup | ❌ 404 | Not deployed |
| /blog/how-to-photograph-products-ecommerce | ❌ 404 | Not deployed |
| /blog/beverage-photography-glass-splash | ❌ 404 | Not deployed |
| /blog/product-photography-small-business-india | ❌ 404 | Not deployed |

---

## STRUCTURED DATA AUDIT

| Page | Schema Type | Status |
|------|-------------|--------|
| Homepage | ❌ None | Missing Organization/LocalBusiness |
| /services | ⚠️ "PhotographyBusiness" | Non-standard type — should be ProfessionalService |
| /gallery | ❌ None | Missing ImageGallery |
| /about | ✅ Person + BreadcrumbList | Good |
| /contact | ✅ ContactPage + BreadcrumbList | Good |
| /dehradun | ✅ LocalBusiness + QAPage + Person + BreadcrumbList | Excellent |
| /faq | ✅ QAPage + BreadcrumbList | Good |
| /blog | ⚠️ BreadcrumbList only | Missing Blog schema |
| Blog posts | ✅ BlogPosting + BreadcrumbList | Good |

---

## INTERNAL LINKING AUDIT

### Current Link Structure
```
Homepage
├── /services (linked)
├── /dehradun (linked)
├── /gallery (linked)
├── /about (linked)
├── /contact (linked)
├── /blog (linked)
├── /faq (linked)
└── Blog posts (4 linked)

/services
├── /faq (linked)
├── /contact (linked)
└── Service sub-pages (NOT linked — 404)

/gallery
└── mailto only (NO internal links)

/about
├── /contact (linked)
└── /services (linked)

/dehradun
├── /contact (linked)
├── /services#* (linked)
└── Blog posts (4 linked)

/blog
└── 12 blog post URLs (linked)

Blog posts
├── /blog (linked)
├── /gallery (linked)
├── /contact (linked)
├── /services (linked)
└── Related posts (linked)
```

### Missing Internal Links
| From | To | Priority |
|------|----|----------|
| Homepage | Service sub-pages | High (but pages are 404) |
| /services | Service sub-pages | High (but pages are 404) |
| /gallery | /services, /contact | High |
| Blog posts | Service sub-pages | Medium |
| Service sub-pages | Blog posts | Medium |
| /faq | /services, /contact | Low |

---

## ACTION PLAN

### P0 — Critical (Deploy Immediately)
1. **Deploy 9 missing pages** — commit, push, build, deploy
2. **Add H1 to homepage** — semantic heading for "Rahul Chanda"
3. **Fix gallery images** — convert raw `<img>` to next/image with width/height
4. **Add alt text to WebGL cylinder images** — at minimum via ARIA labels

### P1 — High (This Week)
5. **Add Organization/LocalBusiness schema to homepage**
6. **Add ImageGallery schema to /gallery**
7. **Fix Collection Surfer** — remove Unsplash stock photos, use Rahul's work
8. **Fix blog section images** — convert to next/image
9. **Fix filename issues** — typos, spaces, non-descriptive names
10. **Add internal links from /gallery to /services and /contact**

### P2 — Medium (This Month)
11. **Create page-specific OG images** — at least for services and blog
12. **Improve H1 tags** — make them keyword-targeted while keeping creative tone
13. **Convert 4 PNG files to WebP**
14. **Add Blog schema to /blog index**
15. **Add images to blog posts** — currently text-only

### P3 — Low (When Possible)
16. **Fix directory names** — replace spaces with hyphens
17. **Add lazy loading to WebGL cylinder images**
18. **Reduce H2 count on homepage** — consolidate where possible
19. **Add hreflang** — not needed yet (English only)

---

*Report generated from live crawl + source code analysis on August 28, 2026.*
