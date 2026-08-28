# SEO Audit Report — rahulchandaphotography.com
**Date:** August 28, 2026  
**Auditor:** AI SEO Specialist  
**Live Site:** https://rahulchandaphotography.com  
**Platform:** Next.js 16 (Turbopack), Cloudflare Workers (OpenNext)

---

## Executive Summary

The site has strong fundamentals — clean semantic HTML, proper canonical tags, a well-structured sitemap, and solid Open Graph/Twitter Card metadata. However, there are **9 pages returning 404 errors** (new blog posts and service sub-pages that exist locally but were never deployed), **no structured data (JSON-LD) on any page**, and **duplicate OG images** across all routes. These issues directly impact search visibility and click-through rates.

**Overall SEO Score: 58/100**

| Category | Score | Status |
|----------|-------|--------|
| Technical SEO | 62/100 | ⚠️ Issues |
| Content Quality | 70/100 | ✅ Good |
| On-Page SEO | 55/100 | ⚠️ Needs Work |
| Structured Data | 10/100 | 🔴 Critical |
| Performance | 60/100 | ⚠️ Issues |
| AI Readiness | 45/100 | 🔴 Poor |

---

## 🚨 P0 — CRITICAL (Fix Immediately)

### 1. Nine Pages Return 404 — Not Deployed
**Impact:** Critical — 9 pages exist in source code but return HTTP 404 on production.

These pages are **untracked** in git (never committed/pushed/deployed):

| URL | Status |
|-----|--------|
| `/services/product-photography` | 404 |
| `/services/food-beverage-photography` | 404 |
| `/services/commercial-campaigns` | 404 |
| `/services/footwear-fashion-photography` | 404 |
| `/blog/food-photography-restaurants` | 404 |
| `/blog/product-photography-lighting-setup` | 404 |
| `/blog/how-to-photograph-products-ecommerce` | 404 |
| `/blog/beverage-photography-glass-splash` | 404 |
| `/blog/product-photography-small-business-india` | 404 |

**Fix:** Commit, push, and deploy these pages. They must be live to be indexed.

### 2. No Structured Data (JSON-LD) on Any Page
**Impact:** Critical — Zero rich snippets in Google SERPs. Competitors with schema will outrank even with weaker content.

**Missing schemas:**
- `LocalBusiness` — For "product photographer in Dehradun" map pack visibility
- `ProfessionalService` — Service offerings
- `Product` or `Service` — Per-service-page schemas
- `Article` / `BlogPosting` — For blog posts (enables article rich results)
- `FAQPage` — FAQ content exists but isn't schema-marked
- `BreadcrumbList` — Already has breadcrumb component but no JSON-LD
- `Organization` — Brand entity
- `Person` — Rahul Chanda as the photographer

**Fix:** Add JSON-LD schemas to `layout.tsx` (global) and per-page metadata. The project already has `src/lib/schemas.ts` with generators — wire them up.

### 3. Sitemap Missing New Pages
**Impact:** High — Google won't discover the 9 new pages.

Current sitemap has 22 URLs. Missing:
- All 5 new blog posts
- All 4 service sub-pages
- `/dehradun` page (if it's a separate route)

**Fix:** Update the sitemap generator to include all routes. Redeploy.

---

## 🟡 P1 — HIGH (Fix This Week)

### 4. robots.txt Uses Non-Standard Cloudflare Format
**Impact:** Medium — May confuse crawlers.

The robots.txt uses Cloudflare's proprietary "Content Signal" format (`Content-Signal: search=yes,ai-train=no,use=reference`) which is **not a standard robots.txt directive**. Most crawlers only understand `User-agent`, `Allow`, `Disallow`, `Sitemap`.

Standard directives are also present (below the Cloudflare block), so basic crawling works, but the non-standard header at the top may cause issues.

**Fix:** Add standard `User-agent: *` + `Allow: /` at the very top before the Cloudflare block, or ensure the standard block comes first.

### 5. Duplicate OG Image Across All Pages
**Impact:** Medium — All social shares show the same image.

Every page uses `og-image.jpg` — same image for homepage, about, services, gallery, contact, and all blog posts. This means:
- Social shares look identical across pages
- No visual differentiation in link previews
- Missed opportunity for page-specific social engagement

**Fix:** Create unique OG images per page/template (blog posts can use article title + featured image).

### 6. Blog Post Robots Metadata Conflict
**Impact:** Medium — Conflicting signals to crawlers.

Some 404 pages returned `"robots": ["index, follow", "noindex"]` — two contradictory directives. The 404 handler is correctly setting `noindex`, but the blog layout's default metadata (`index, follow`) leaks through first.

**Fix:** Ensure the 404 page metadata completely overrides layout defaults. Check `not-found.tsx` metadata.

### 7. Contact Page Missing Meta Description
**Impact:** Low-Medium — Google will auto-generate a snippet.

The `/contact` page has an empty `metaDescription` in the JSON extraction, though the `<meta name="description">` tag does exist in HTML. Verify the description is properly rendered in the `<head>`.

**Current:** "Start a commercial photography project with Rahul Chanda in Dehradun..."
**Title:** "Contact Rahul Chanda | Commercial Photographer in Dehradun"

These are consistent but verify rendering.

### 8. About Page Thin Content
**Impact:** Medium — Only ~150 words of substantive content.

The `/about` page has:
- 1 short philosophy paragraph
- 1 bullet list of experience
- 1 contact section

For a page targeting "about Rahul Chanda photographer" queries, this is thin. Competitor photographer about pages typically have 500-1000 words with story, philosophy, equipment, published work, and awards.

**Fix:** Expand with narrative content — journey, approach, equipment, notable clients, published work, and philosophy.

---

## 🟢 P2 — MEDIUM (Fix This Month)

### 9. No Internal Linking from Blog Posts to Service Pages
**Impact:** Low-Medium — Missing topical authority signals.

Blog posts like `/blog/retouching-101` link to other blog posts but **don't link to the corresponding service page**. For example, the retouching post should link to `/services` or a relevant service sub-page.

**Fix:** Add contextual internal links from blog content → service pages and vice versa.

### 10. Missing `lastmod` Updates in Sitemap
**Impact:** Low — Google may not recrawl recently updated pages.

All sitemap URLs show `lastmod: 2026-08-28T12:45:35.408Z` — the same timestamp for all 22 URLs. This suggests the sitemap generator uses a single build timestamp rather than actual content modification dates.

**Fix:** Use `git log` or file modification dates for accurate `lastmod` values.

### 11. No hreflang Tags
**Impact:** None for now — site is English-only.

If the site expands to Hindi or other languages in the future, hreflang will be needed. Not urgent.

### 12. Gallery Page Missing Schema
**Impact:** Low — Gallery pages benefit from `ImageGallery` schema.

The gallery page is a portfolio showcase but has no structured data describing the images, their subjects, or photography categories.

**Fix:** Add `ImageGallery` schema with `ImageObject` entries for portfolio pieces.

### 13. Blog Index Page Empty Meta Description
**Impact:** Low — Blog index falls back to site description.

The `/blog` page title is "Blog — Rahul Chanda Photography" but the meta description defaults to the site-wide description rather than a blog-specific one.

**Fix:** Add blog-specific meta: "Photography tips, lighting tutorials, and behind-the-scenes insights from commercial photographer Rahul Chanda."

---

## ✅ What's Working Well

| Element | Status | Notes |
|---------|--------|-------|
| **Title Tags** | ✅ Good | Unique per page, include photographer + location |
| **Canonical Tags** | ✅ Good | All pages have proper canonical URLs |
| **Open Graph Tags** | ✅ Good | Complete OG/Twitter Card setup |
| **Semantic HTML** | ✅ Good | Proper H1 → H2 → H3 hierarchy |
| **Internal Linking** | ✅ Good | Footer, nav, and body links connect pages |
| **Mobile Viewport** | ✅ Good | `width=device-width, initial-scale=1` |
| **Language** | ✅ Good | `lang="en"` set |
| **Author Meta** | ✅ Good | `author: Rahul Chanda` present |
| **Google Verification** | ✅ Good | Site verified in Search Console |
| **Image Optimization** | ✅ Good | Using `next/image` with WebP, `/opt/` directory |
| **Sitemap Structure** | ✅ Good | Proper XML format with priority/changefreq |
| **Security Headers** | ✅ Good | CSP, X-Frame-Options, etc. |
| **404 Page** | ✅ Good | Custom 404 with navigation links |

---

## 📊 Page-by-Page Breakdown

| Page | Status | Title | Meta Desc | H1 | Schema | Notes |
|------|--------|-------|-----------|-----|--------|-------|
| `/` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Strong homepage |
| `/services` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Service hub page |
| `/gallery` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Masonry layout |
| `/about` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Thin content |
| `/contact` | 200 ✅ | ✅ Good | ⚠️ Verify | ✅ 1 H1 | ❌ None | Working form |
| `/blog` | 200 ✅ | ✅ Good | ⚠️ Generic | ✅ 1 H1 | ❌ None | Blog index |
| `/faq` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | FAQ content |
| `/dehradun` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Local landing |
| `/blog/retouching-101` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Good content |
| `/blog/color-science-*` | 200 ✅ | ✅ Good | ✅ Good | ✅ 1 H1 | ❌ None | Good content |
| `/services/product-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/services/food-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/services/commercial-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/services/footwear-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/blog/food-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/blog/product-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/blog/how-to-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |
| `/blog/beverage-*` | 404 🔴 | N/A | N/A | N/A | N/A | Not deployed |

---

## 🤖 AI Readiness Assessment

**Score: 45/100**

| Signal | Status | Notes |
|--------|--------|-------|
| **robots.txt AI directives** | ⚠️ Partial | Blocks AI crawlers (GPTBot, ClaudeBot, etc.) — intentional? |
| **llms.txt** | ❓ Unknown | Not checked — should exist for AI discovery |
| **Content signals** | ⚠️ Non-standard | Cloudflare Content-Signal format |
| **Structured data** | ❌ None | No JSON-LD means AI can't parse entity relationships |
| **Semantic HTML** | ✅ Good | Clean heading hierarchy helps AI comprehension |
| **FAQ schema** | ❌ Missing | FAQ content exists but no FAQPage schema |

**Recommendation:** If you want AI search engines (ChatGPT, Perplexity, Claude) to cite your photography services, you need to either:
1. Allow AI crawlers in robots.txt, OR
2. Add `llms.txt` with structured site information for AI consumption

---

## 🎯 Action Plan

### Week 1 (Critical)
1. **Deploy the 9 missing pages** — git commit, push, build, deploy
2. **Add JSON-LD schemas** — LocalBusiness, Organization, Person, FAQPage, BreadcrumbList
3. **Update sitemap** — Include all new routes

### Week 2 (High)
4. **Fix robots.txt** — Ensure standard directives come first
5. **Create page-specific OG images** — At least for services and blog posts
6. **Expand About page** — Add 400+ words of narrative content

### Week 3 (Medium)
7. **Add Article schema** to all blog posts
8. **Add ImageGallery schema** to gallery page
9. **Add internal links** from blog posts → service pages
10. **Add blog-specific meta description**

### Ongoing
- Monitor Google Search Console for crawl errors
- Track keyword rankings for "product photographer Dehradun" etc.
- Update sitemap lastmod with actual content dates
- Consider allowing AI crawlers if AI search visibility is a goal

---

*Report generated from live crawl data on August 28, 2026.*
