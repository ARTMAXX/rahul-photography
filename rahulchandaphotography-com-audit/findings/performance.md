# Performance Findings

**Date:** 28 August 2026
**Score:** 70/100

---

## What Works

### Dynamic Imports — Excellent Code Splitting
All major sections are lazy-loaded via `next/dynamic` with `{ ssr: false }`:
```typescript
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Clients = dynamic(() => import("@/components/sections/Clients"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"), { ssr: false });
```

This means the initial HTML payload is small — only the nav renders server-side. All below-fold content loads on demand.

### Font Optimization
```typescript
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","700"], display: "swap", variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap", variable: "--font-outfit" });
```
- `next/font` auto-inlines font CSS
- `display: swap` prevents FOIT
- Two weights of Playfair, five of Outfit — reasonable

### Video Lazy Loading
Hero video uses:
- `preload="none"` — doesn't load until play
- `muted`, `loop`, `playsInline` — autoplay-friendly
- Custom `LazyVideo` component with `IntersectionObserver`

---

## Findings

### HIGH: Hero Video Missing `poster` Attribute

**File**: `src/components/sections/Hero.tsx` line 69
```tsx
<video poster={undefined} ...>
```

**Impact**:
- No placeholder image while video loads — blank frame until first frame renders
- Potential CLS when video dimensions resolve
- No fallback for browsers that block autoplay
- Poor LCP for the hero section

**Fix**: Add a poster image:
```tsx
<video poster="/opt/hero-poster.jpg" ...>
```
Generate a 1200×675 WebP poster from the first frame of the video (<100KB).

---

### MEDIUM: No Modern Image Formats (WebP/AVIF)

**Evidence**: Images in `feature-showcase.tsx` and `selected-work-parallax.tsx` use standard `<img>` tags with `.jpg` sources. No `<picture>` elements or Next.js `<Image>` component with format negotiation.

**Impact**:
- WebP is 25-35% smaller than JPEG at equivalent quality
- AVIF is 50% smaller than JPEG
- Direct impact on LCP and total page weight

**Fix**: Use Next.js `<Image>` component:
```tsx
import Image from "next/image";
<Image src="/images/..." alt="..." width={800} height={600} formats={["image/avif", "image/webp"]} />
```

---

### MEDIUM: Gallery Client-Side Rendering Impact

**File**: `src/app/gallery/page.tsx`
- Line 1: `"use client"` — entire page is client-rendered
- 32 images loaded via client JavaScript
- No server-rendered `<img>` tags in initial HTML

**Impact**:
- Googlebot sees empty HTML on initial render (client-side only)
- All images compete for bandwidth after JS loads
- No `<img>` tags in SSR HTML = no image indexing

**Fix**: Convert to SSR + client hybrid:
1. Server-render the first 6 images as `<img>` tags
2. Client-load the remaining 26 via IntersectionObserver
3. Or use Next.js `<Image>` with `priority` for first 3 images

---

### MEDIUM: Inconsistent Lazy Loading

**Evidence**:
- Hero video: `preload="none"` ✅
- Gallery images: no `loading="lazy"` attribute ❌
- `feature-showcase.tsx` images: no `loading="lazy"` ❌
- `selected-work-parallax.tsx`: some images use `loading="lazy"` via the component, some don't

**Impact**: Below-fold images may load eagerly, competing with above-fold resources.

**Fix**: Add `loading="lazy"` to all below-fold images. Add `priority` to above-fold images (first 2-3 visible images).

---

### LOW: Excessive `data-cursor="pointer"` Attributes

**Evidence**: Nearly every interactive element has `data-cursor="pointer"` — buttons, links, images, navigation items. This is a custom cursor effect that adds DOM overhead.

**Impact**: Minor — no performance impact, but adds visual noise to DOM.

---

### INFO: Cache Headers — Aggressive CDN

```
Cache-Control: s-maxage=31536000
```

Cloudflare CDN caches HTML for 1 year. This is fine for static pages but may cause stale content issues for blog posts with date-sensitive information. The `x-nextjs-cache: MISS` and `x-nextjs-prerender: 1` headers indicate proper ISR configuration.

**Recommendation**: Verify that `revalidate` is set appropriately in `page.tsx` `generateStaticParams` or route segment configs.
