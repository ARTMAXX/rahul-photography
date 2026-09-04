/**
 * Single source of truth for blog post publish dates.
 * Consumed by:
 *   - src/app/blog/[slug]/page.tsx  (JSON-LD datePublished / dateModified)
 *   - src/app/sitemap.ts            (lastModified for /blog/<slug> entries)
 *
 * Format: yyyy-mm-dd.
 * If you add a new post, also add its date here.
 */

export const postDates: Record<string, string> = {
  // Standalone blog posts (own page.tsx files in src/app/blog/<slug>/)
  "food-photography-restaurants": "2026-08-30",
  "product-photography-small-business-india": "2026-08-28",
  "product-photography-lighting-setup": "2026-08-25",
  "how-to-photograph-products-ecommerce": "2026-08-22",
  "beverage-photography-glass-splash": "2026-08-20",

  // Dynamic [slug] blog posts
  "ai-photoshop-retouching-techniques": "2026-08-15",
  "ai-commercial-product-photography": "2026-08-05",
  "ai-video-editing-tools-2026": "2026-07-22",
  "why-beverage-splash-photography-is-hard": "2026-06-20",
  "generative-ai-product-backgrounds": "2026-06-10",
  "lighting-patterns-for-product-photography": "2026-05-27",
  "footwear-photography-angles": "2026-04-28",
  "ai-color-grading-scene-detection": "2026-04-15",
  "beverage-photography-glass": "2026-03-24",
  "ai-upscaling-ecommerce": "2026-03-10",
  "color-science-ecommerce": "2026-03-08",
  "retouching-101": "2026-02-06",
};

/**
 * Content-refresh dates (SEO): used for JSON-LD dateModified and sitemap
 * lastModified. Publish dates (above) stay untouched; this map changes when
 * a post is substantively rewritten or expanded.
 */
export const postModified: Record<string, string> = {
  "food-photography-restaurants": "2026-09-04",
  "product-photography-small-business-india": "2026-09-04",
  "product-photography-lighting-setup": "2026-09-04",
  "how-to-photograph-products-ecommerce": "2026-09-04",
  "beverage-photography-glass-splash": "2026-09-04",
  "ai-photoshop-retouching-techniques": "2026-09-04",
  "ai-commercial-product-photography": "2026-09-04",
  "ai-video-editing-tools-2026": "2026-09-04",
  "why-beverage-splash-photography-is-hard": "2026-09-04",
  "generative-ai-product-backgrounds": "2026-09-04",
  "lighting-patterns-for-product-photography": "2026-09-04",
  "footwear-photography-angles": "2026-09-04",
  "ai-color-grading-scene-detection": "2026-09-04",
  "beverage-photography-glass": "2026-09-04",
  "ai-upscaling-ecommerce": "2026-09-04",
  "color-science-ecommerce": "2026-09-04",
  "retouching-101": "2026-09-04",
};

/**
 * Backward-compat alias. Older imports used the name `postISO`.
 * Re-exported here so existing imports keep working.
 */
export const postISO = postDates;
