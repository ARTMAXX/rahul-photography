# Technical SEO Findings

**Date:** 28 August 2026
**Score:** 80/100

---

## CRITICAL: robots.txt Cloudflare Override Blocks AI Crawlers

### Evidence
The live `robots.txt` at `https://rahulchandaphotography.com/robots.txt` contains two conflicting sections:

**Cloudflare-managed block (auto-appended at top):**
```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /
```

**Site's own rules (at bottom):**
```
User-Agent: *
Allow: /
Disallow: /api/
```

### Impact
- GPTBot (ChatGPT), ClaudeBot (Claude), Google-Extended (Gemini), Bytespider (TikTok), CCBot (Common Crawl), Applebot-Extended, meta-externalagent are **all blocked**
- The site's `llms.txt` (excellent, 3000+ chars) is unreachable by these crawlers
- The site's `robots.ts` code (which correctly allows these bots) is overridden at the Cloudflare CDN edge
- AI search visibility is effectively **zero** for the major AI platforms

### Fix
Cloudflare Dashboard → Security → Bots → Configure Bot Management → Disable "AI Scrapers and Crawlers" block rule. Alternatively, create a WAF exception rule that allows these specific User-Agent strings.

---

## HIGH: 4 Blog Posts Missing from Sitemap

### Evidence
Sitemap.xml contains 13 blog post URLs. The codebase contains 17 (12 dynamic in `[slug]/page.tsx` + 5 standalone page files). These 4 are absent from `sitemap.ts`:

| URL | File |
|---|---|
| `/blog/product-photography-small-business-india` | `src/app/blog/product-photography-small-business-india/page.tsx` |
| `/blog/product-photography-lighting-setup` | `src/app/blog/product-photography-lighting-setup/page.tsx` |
| `/blog/how-to-photograph-products-ecommerce` | `src/app/blog/how-to-photograph-products-ecommerce/page.tsx` |
| `/blog/food-photography-restaurants` | `src/app/blog/food-photography-restaurants/page.tsx` |

### Impact
- 4 published blog posts are **orphaned from the sitemap** — Google may not discover them via sitemap submission
- These posts can still be found via internal links, but sitemap is a primary discovery signal

### Fix
Add these entries to the `blogPostsSEO` array in `src/app/sitemap.ts`:
```typescript
{
  url: absoluteUrl("/blog/product-photography-small-business-india"),
  lastModified: new Date("2026-03-01"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
},
// ... etc for all 4
```

---

## MEDIUM: No Custom 404 Page

### Evidence
No `src/app/not-found.tsx` file found. The site uses Next.js default 404.

### Impact
- Lost visitors who hit dead links get no helpful navigation
- No SEO signal (no metadata, no internal links)
- Broken backlinks pass zero value

### Fix
Create `src/app/not-found.tsx` with:
- Descriptive title ("Page Not Found — Rahul Chanda Photography")
- Brief message with links to homepage, services, blog, contact
- Proper metadata export

---

## MEDIUM: CSP Header May Block Legitimate Resources

### Evidence
Content-Security-Policy header:
```
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://analytics.ahrefs.com https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live
```

The `vercel.live` script source may be stale (site uses Cloudflare Workers, not Vercel).

### Impact
Minor — `vercel.live` in CSP is unnecessary but harmless. More importantly, `unsafe-inline` and `unsafe-eval` weaken CSP protection.

### Fix
Remove `https://vercel.live` from CSP. Consider moving to nonce-based CSP for stronger protection.

---

## INFO: Security Headers — Excellent

All major security headers present:
- `Strict-Transport-Security: max-age=15552000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
- Comprehensive CSP
