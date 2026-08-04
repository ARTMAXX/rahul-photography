# SEO Audit Report — rahulchandaphotography.com

**Audited**: 2026-07-29
**Platform**: Next.js 16 (Dev server on localhost:3001)
**Pages**: 16+ (6 main + 8 archive slugs + sitemap + robots)

---

## Metadata Health Dashboard

| Page | Title | Description | OG Image | Canonical | H1 | Status |
|---|---|---|---|---|---|---|
| `/` (Home) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Good |
| `/services` | ✅ | ✅ | ❌ Missing | ✅ | ✅ | ⚠️ Needs OG image |
| `/work` | ✅ | ✅ | ❌ Missing | ✅ | ✅ | ⚠️ Needs OG image |
| `/gallery` | ✅ | ✅ | ✅ | ❌ Wrong (`/` not `/gallery`) | — | ⚠️ Fix canonical |
| `/archive` | ✅ | ✅ | ❌ Missing | ✅ | ✅ | ⚠️ Needs OG image |
| `/contact` | ✅ | ✅ | ❌ Missing | ✅ | ✅ | ⚠️ Needs OG image |
| `/archive/*` (8 slugs) | — | — | — | — | — | ❌ Errors on load |

---

## Issues Found

### 🔴 CRITICAL (2)

| # | Issue | Location | Impact | Fix |
|---|---|---|---|---|
| C1 | **OG image file does not exist** | `public/og-image.jpg` referenced in layout.tsx | Facebook/Twitter/LinkedIn shares show blank card | Create actual `/public/og-image.jpg` or `.png` at 1200x630px |
| C2 | **Use-client pages have no OG image** | services, work, contact, archive pages | Social shares from these pages have no image | Add `ogImage` to each page's `Helmet`/`react-seo` config |

### 🟠 HIGH (3)

| # | Issue | Location | Impact | Fix |
|---|---|---|---|---|
| H1 | **Gallery page canonical URL is wrong** | `/gallery` page canonical points to `/` | Search engines may treat gallery as duplicate of homepage | Fix canonical in gallery layout to `/gallery` |
| H2 | **Archive sub-pages error on navigation** | `/archive/chrono-luxury` etc. return ERR_ABORTED | 8 portfolio campaign pages inaccessible | Investigate and fix client-side routing for archive slugs |
| H3 | **No blog or content marketing** | No `/blog/` section exists | Misses long-tail organic traffic, reduced topical authority | Add blog section with photography/D2C content |

### 🟡 MEDIUM (4)

| # | Issue | Location | Impact | Fix |
|---|---|---|---|---|
| M1 | **No LocalBusiness schema** | Only Person + ProfessionalService used | Local SEO "Dehradun" not explicitly boosted | Add `LocalBusiness` schema with Dehradun address |
| M2 | **Missing target keywords in page copy** | All pages | Doesn't target "commercial photographer Dehradun", "product photography India" strongly enough | Add keyword-optimized subheadings and body text |
| M3 | **Archive sub-pages share generic metadata** | 8 slugs all use same fallback | Reduced CTR from search, no differentiation | Add per-campaign metadata titles/descriptions |
| M4 | **No internal linking between services** | 4 service cards on services page are disconnected | Missed internal link equity flow | Link service names to portfolio campaigns (e.g., "Product Photography" → "/archive/chrono-luxury") |

### 🔵 LOW (5)

| # | Issue | Location | Impact | Fix |
|---|---|---|---|---|
| L1 | **Hero video 404 / cache error** | `main hero shots/hero-video.mp4` | Console error on load, potential UX flicker | Fix video path or add fallback image |
| L2 | **Three.js Clock deprecation** | `THREE.Clock` used but deprecated | Console warnings, potential future breakage | Migrate to `THREE.Timer` |
| L3 | **Only Instagram in social profiles** | `sameAs` only has Instagram | Potential social proof gap | Add LinkedIn, Behance, YouTube if they exist |
| L4 | **No image alt text audit** | Portfolio images may lack descriptive alt text | Reduced accessibility SEO score | Audit images for keyword-rich alt text |
| L5 | **sitemap URLs use same lastmod** | All 14+ URLs have identical lastModified timestamp | Doesn't signal priority/recency differences | Use actual modification dates per page |

---

## Technical SEO Check

| Check | Status | Notes |
|---|---|---|
| robots.txt | ✅ | Proper AI bot rules + explicit allows |
| sitemap.xml | ✅ | 14 URLs, valid XML, correct structure |
| Canonical tags | ⚠️ | Gallery page wrong target |
| Meta descriptions | ✅ | All 6 main pages have unique descriptions |
| JSON-LD Schema | ✅ | Person, ProfessionalService, FAQPage, ImageGallery |
| Open Graph | ⚠️ | 4/7 pages missing og:image |
| Twitter Cards | ✅ | Present via layout.tsx |
| Page speed | ⚠️ | Needs Lighthouse audit for LCP/CLS/INP |
| Mobile responsive | ✅ | Next.js default responsive |
| HTTPS | ✅ | Canonical URLs use HTTPS |
| Heading hierarchy | ✅ | Single h1 per page, proper h2/h3 nesting |

---

## Recommendations Priority

### Do Now (Before Deploy)
1. Create `public/og-image.jpg` (1200×630px)
2. Fix gallery canonical URL to `/gallery`
3. Add OG image to all "use client" pages (services, work, contact, archive)
4. Fix archive slug page loading errors

### This Week
5. Add LocalBusiness schema with Dehradun address
6. Create blog section with 5-10 launch articles
7. Add internal links from services to campaign pages
8. Audit and fix image alt text

### This Month
9. Migrate Three.js Clock → Timer
10. Add LinkedIn/Behance social profiles
11. Differentiate archive slug metadata
12. Fix sitemap lastModified dates to be page-specific
