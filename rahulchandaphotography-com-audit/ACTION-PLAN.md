# SEO Action Plan — rahulchandaphotography.com

**Generated:** 28 August 2026
**Health Score:** 74/100
**Business Type:** Commercial & Product Photography Studio (Dehradun, India)

---

## Phase 1: Critical Fixes (Week 1)

### 1.1 Disable Cloudflare AI Bot Blocking
**Priority:** CRITICAL | **Effort:** 5 minutes | **Impact:** +20 AI search score

**Problem**: Cloudflare's managed rules block GPTBot, ClaudeBot, Google-Extended — the three largest AI search platforms.

**Fix**:
1. Log into Cloudflare Dashboard
2. Go to Security → Bots → Configure Bot Management
3. Find the "AI Scrapers and Crawlers" rule
4. Disable it OR add an exception for GPTBot, ClaudeBot, Google-Extended

**Verification**:
```bash
curl -s https://rahulchandaphotography.com/robots.txt | grep -A1 "GPTBot"
# Should show "Allow: /" not "Disallow: /"
```

---

### 1.2 Add 4 Missing Blog Posts to Sitemap
**Priority:** HIGH | **Effort:** 15 minutes | **Impact:** +4 indexed pages

**Problem**: 4 standalone blog posts are not in the sitemap.

**Files to edit**: `src/app/sitemap.ts`

**Add to `blogPostsSEO` array**:
```typescript
{
  url: absoluteUrl("/blog/product-photography-small-business-india"),
  lastModified: new Date("2026-03-01"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
},
{
  url: absoluteUrl("/blog/product-photography-lighting-setup"),
  lastModified: new Date("2026-02-15"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
},
{
  url: absoluteUrl("/blog/how-to-photograph-products-ecommerce"),
  lastModified: new Date("2026-01-20"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
},
{
  url: absoluteUrl("/blog/food-photography-restaurants"),
  lastModified: new Date("2026-03-10"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
},
```

---

### 1.3 Add Date Fields to BlogPosting Schema
**Priority:** HIGH | **Effort:** 30 minutes | **Impact:** Article rich results eligibility

**Files to edit**: `src/lib/schemas.ts`

**Update `generateBlogPostingSchema`** to include:
```typescript
datePublished: date,
dateModified: dateModified || date,
publisher: {
  "@type": "Organization",
  name: "Rahul Chanda Photography",
  logo: { "@type": "ImageObject", url: absoluteUrl("/opt/og-image.jpg") }
}
```

**Also update**: All blog post pages in `src/app/blog/[slug]/page.tsx` to pass dates to the schema generator.

---

### 1.4 Write Contact Page Meta Description
**Priority:** MEDIUM | **Effort:** 5 minutes | **Impact:** Better CTR from search results

**File to edit**: `src/app/contact/page.tsx`

**Current**:
```typescript
description: "Have a project in mind?",
```

**Replace with**:
```typescript
description: "Contact Rahul Chanda for product photography, food photography, and commercial campaign inquiries in Dehradun, India. Get a quote within 24 hours.",
```

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

### 2.1 Add Breadcrumb Schema to Service Sub-Pages
**Priority:** MEDIUM | **Effort:** 30 minutes | **Impact:** Breadcrumb rich results in SERPs

**Files to edit**:
- `src/app/services/product-photography/page.tsx`
- `src/app/services/food-beverage-photography/page.tsx`
- `src/app/services/footwear-fashion-photography/page.tsx`
- `src/app/services/commercial-campaigns/page.tsx`

**Add to each**:
```typescript
import { generateBreadcrumbSchema } from "@/lib/schemas";

// In the component:
const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Page Name", url: "/services/current-page" },
]);

// In the JSON-LD script tag:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
```

---

### 2.2 Add Hero Video Poster Image
**Priority:** HIGH | **Effort:** 15 minutes | **Impact:** Better LCP, no CLS, fallback for no-autoplay

**Files to edit**: `src/components/sections/Hero.tsx`

**Fix**:
1. Extract first frame from `public/opt/hero-video.mp4` as WebP (<100KB)
2. Save as `public/opt/hero-poster.jpg`
3. Update video tag: `<video poster="/opt/hero-poster.jpg" ...>`

---

### 2.3 Add Article Metadata to Blog Posts
**Priority:** MEDIUM | **Effort:** 20 minutes | **Impact:** Article rich results, social sharing

**File to edit**: `src/app/blog/[slug]/page.tsx`

**Add to metadata export**:
```typescript
openGraph: {
  type: "article",
  publishedTime: date,
  modifiedTime: date,
  authors: ["Rahul Chanda"],
  tags: [category],
},
```

---

### 2.4 Create Custom 404 Page
**Priority:** MEDIUM | **Effort:** 30 minutes | **Impact:** Reduced bounce, better UX

**File to create**: `src/app/not-found.tsx`

**Content**:
```typescript
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our photography services, portfolio, or contact us.",
};

export default function NotFound() {
  return (
    <main>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Portfolio</Link>
        <Link href="/blog">Journal</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
```

---

### 2.5 Add VideoObject Schema
**Priority:** MEDIUM | **Effort:** 20 minutes | **Impact:** Video search results

**File to edit**: `src/app/page.tsx`

**Add to schemas array**:
```typescript
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Rahul Chanda Photography — Commercial Product Photography Studio",
  description: "Behind the scenes of commercial product photography at Rahul Chanda Photography studio in Dehradun, India.",
  thumbnailUrl: absoluteUrl("/opt/hero-poster.jpg"),
  contentUrl: absoluteUrl("/opt/hero-video.mp4"),
  embedUrl: absoluteUrl("/"),
  duration: "PT30S",
  uploadDate: "2026-01-01",
}
```

---

## Phase 3: Content & Authority (Month 2)

### 3.1 Add SearchAction Schema
**Priority:** MEDIUM | **Effort:** 20 minutes | **Impact:** Sitelinks searchbox in Google

### 3.2 Audit All Image Alt Text
**Priority:** LOW | **Effort:** 1 hour | **Impact:** Image search visibility, accessibility

### 3.3 Add WebPage Schema to Terms/Privacy
**Priority:** LOW | **Effort:** 20 minutes | **Impact:** Rich results for legal pages

### 3.4 Generate llms-full.txt
**Priority:** LOW | **Effort:** 30 minutes | **Impact:** Deeper AI ingestion

### 3.5 Add ImageObject Schema to Portfolio
**Priority:** LOW | **Effort:** 1 hour | **Impact:** Image search rich captions

### 3.6 Expand Terms/Privacy with Internal Links
**Priority:** LOW | **Effort:** 30 minutes | **Impact:** Internal link equity

---

## Phase 4: Monitoring (Ongoing)

### Weekly
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor indexation status of new blog posts

### Monthly
- [ ] Track AI search citations (ChatGPT, Perplexity, Claude)
- [ ] Re-crawl sitemap and verify all URLs are indexed
- [ ] Check Core Web Vitals in CrUX

### Quarterly
- [ ] Full SEO re-audit
- [ ] Update blog content freshness
- [ ] Review and update llms.txt
