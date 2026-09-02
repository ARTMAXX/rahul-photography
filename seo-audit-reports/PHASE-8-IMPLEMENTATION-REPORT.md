# PHASE 8 + WEEK 1-2 IMPLEMENTATION REPORT

**Date:** September 1, 2026
**Build status:** ✅ PASSING (verified with `npx next build` — 40 static pages generated successfully)
**Total changes:** 19 files modified, 4 new files created

---

## PHASE 8 CHANGES (pre-approved before audit, kept)

These were already in the working tree and align with the audit. They are now part of the same commit.

| File | Change |
|------|--------|
| `src/app/page.tsx` | Removed `aggregateRating` (4.9/24 didn't match real GBP of 4/5.04) |
| `src/app/services/page.tsx` | Service `provider` schema consolidated to `/#business` @id reference |
| `src/app/services/product-photography/page.tsx` | Service `provider` schema consolidated |
| `src/app/services/food-beverage-photography/page.tsx` | Service `provider` schema consolidated |
| `src/app/services/footwear-fashion-photography/page.tsx` | Service `provider` schema consolidated |
| `src/app/services/commercial-campaigns/page.tsx` | Service `provider` consolidated + title updated to "Brand & Advertising Photographer in Dehradun — Commercial Campaigns" |

---

## WEEK 1 QUICK WINS (all safe, evidence-based)

### W1.1: IndexNow API key + verification file route
- **File:** `next.config.ts` — documented INDEXNOW_KEY flow
- **New file:** `src/app/[key]/route.ts` — serves IndexNow verification file at `/{key}.txt`
- **File:** `.env.local.example` — documents `INDEXNOW_KEY` env var
- The site already has a POST endpoint at `/api/indexnow` and `src/lib/indexnow.ts` library. The new `[key]/route.ts` completes the loop: when IndexNow bot verifies, it fetches `https://rahulchandaphotography.com/{key}.txt` to confirm ownership. Without this route, IndexNow submissions would fail verification.
- **Action required:** Set `INDEXNOW_KEY` env var in production (Cloudflare Worker env vars). Generate at https://www.bing.com/indexnow/getkey

### W1.2: Trim 7 long meta descriptions to ≤ 158 chars
- `src/app/blog/[slug]/page.tsx` — trimmed 5 excerpts (generative-ai, ai-photoshop-retouching, beverage-splash, footwear-angles, ai-video-tools)
- `src/app/contact/page.tsx` — trimmed contact description
- `src/app/services/food-beverage-photography/page.tsx` — trimmed food-beverage description

### W1.3: Expand /terms and /privacy titles to 40+ chars
- `/terms`: "Terms of Service" → "Terms of Service — Rahul Chanda Photography" (43 chars)
- `/privacy`: "Privacy Policy" → "Privacy Policy — Rahul Chanda Photography" (41 chars)

### W1.4: Fix x.com / linkedin.com root URLs (Screaming Frog + Ahrefs flagged as 3XX redirects)
- `src/components/ui/motion-footer.tsx`:
  - Removed x.com (no real X profile exists)
  - Replaced `linkedin.com` root with `https://www.linkedin.com/in/rahul-chanda-a9a860269` (per user)
  - Added comment explaining how to re-enable X when account exists

### W1.5: Add FAQPage schema to /dehradun + foundingDate + founder
- `src/app/dehradun/page.tsx`:
  - Added `foundingDate: "2019"` to LocalBusiness
  - Added `founder: { @id: "/#person" }` reference
  - Added LinkedIn to sameAs
  - Added new `faqPageJsonLd` schema (uses existing LOCAL_FAQ data)
  - Added `<script>` tag to render FAQPage schema in `<head>`

### W1.6: Update /privacy meta description
- Expanded from 84 → 142 chars to include "Privacy policy for Rahul Chanda Photography. How we collect, use, store, and protect your personal information across our website and services."

### W1.7: Add foundingDate + founder to homepage LocalBusiness
- `src/app/page.tsx`:
  - Added `foundingDate: "2019"` to LocalBusiness
  - Added LinkedIn URL to all 3 sameAs blocks (Person, LocalBusiness, Organization)
- `src/app/about/page.tsx`: Added LinkedIn to Person sameAs

### W1.8: Create /public/llms.txt + link from layout
- **New file:** `public/llms.txt` — comprehensive AI-crawler summary with services, local pages, contact info
- `src/app/layout.tsx`:
  - Added `<link rel="alternate" type="text/plain" href="/llms.txt">` to `<head>`
  - This signals AI engines that respect the llms.txt convention (newer standard)

---

## WEEK 2 LOCAL SEO + SCHEMA

### W2.1: Add FAQPage schema to 3 service pages
- `/services/product-photography`: Added `productFaqSchema` (4 Q&As) + visible FAQ block in body
- `/services/footwear-fashion-photography`: Added `footwearFaqSchema` (4 Q&As) + visible FAQ block
- `/services/commercial-campaigns`: Added `campaignFaqSchema` (4 Q&As) + visible FAQ block

Each FAQ covers real buyer questions (cost, format, turnaround, color accuracy, usage rights) that complement existing PAA / voice search opportunities.

### W2.2: Add geo meta tags to layout
- `src/app/layout.tsx` `<head>`:
  - `<meta name="geo.region" content="IN-UK" />`
  - `<meta name="geo.placename" content="Dehradun" />`
  - `<meta name="geo.position" content="30.3165;78.0322" />`
  - `<meta name="ICBM" content="30.3165, 78.0322" />`
- These match the LocalBusiness `geo` coordinates in the schema

### W2.3: Add brand new logo to /public/icon.svg
- **New file:** `public/icon.svg` (11,154 bytes) — the user's custom-designed logo
- This file is referenced in 8+ places (layout, schemas, all service page metadata) but didn't exist before
- It now appears as:
  - Browser tab favicon
  - JSON-LD `logo` field in schema markup
  - Google search result logo
  - Social share preview (where supported)
  - PWA icon
- Now also served as static route: `○ /icon.svg` in build output

### W2.4: priceRange already in schema
- The `priceRange: siteConfig.contact.priceRange` is already in homepage and /dehradun LocalBusiness schema. `siteConfig.contact.priceRange = "₹12,000 — ₹2,00,000+"` (per src/lib/site.ts). No change needed.

---

## BONUS FIX: Orphan `/>` token in /faq/page.tsx

- **File:** `src/app/faq/page.tsx:104` — removed a stray `/>` token that was a leftover from a refactor
- This was a **pre-existing build error** that broke `npx next build`. The build now succeeds.
- Without this fix, the project cannot be deployed. The user's directive was "don't leave anything" so this was addressed.

---

## NEW FILES CREATED

| File | Purpose |
|------|---------|
| `public/icon.svg` | Brand logo (11.1KB) — referenced in 8+ places, was missing |
| `public/llms.txt` | AI-crawler summary (LLMs.txt standard) |
| `src/app/[key]/route.ts` | IndexNow verification file (serves `/{key}.txt`) |
| `.env.local.example` | Documents required env vars (INDEXNOW_KEY) |
| `seo-audit-reports/PHASE-10-12-COMPLETE-SEO-GEO-AEO-PLAN.md` | Saved audit report |

---

## DIFF STAT (final)

```
next.config.ts                                     |  13 +++  (IndexNow documentation)
public/icon.svg                                    | +new file
public/llms.txt                                    |  71 +++  (LLMs.txt standard)
.env.local.example                                | +new file
src/app/[key]/route.ts                            | +new file
seo-audit-reports/                                | +new directory
src/app/about/page.tsx                             |   1 +   (LinkedIn sameAs)
src/app/blog/[slug]/page.tsx                       |  12 +--  (5 excerpts trimmed)
src/app/contact/page.tsx                           |   2 +-  (description trimmed)
src/app/dehradun/page.tsx                          |  37 +++  (foundingDate, founder, FAQPage, LinkedIn)
src/app/faq/page.tsx                               |   5 +-  (orphan /> removed - build fix)
src/app/layout.tsx                                 |  15 +++  (geo meta, llms.txt link)
src/app/page.tsx                                   |  12 +--  (foundingDate, LinkedIn sameAs)
src/app/privacy/page.tsx                           |   4 +-  (title + description expanded)
src/app/services/commercial-campaigns/page.tsx     | 111 +++  (FAQPage, body FAQ, title)
src/app/services/food-beverage-photography/page.tsx    |  20 +--  (description trimmed)
src/app/services/footwear-fashion-photography/page.tsx | 105 +++  (FAQPage, body FAQ)
src/app/services/page.tsx                          |  11 +-  (provider @id)
src/app/services/product-photography/page.tsx      | 105 +++  (FAQPage, body FAQ)
src/app/social-landing/page.tsx                    |   8 +-   (pre-existing, untouched by me)
src/app/terms/page.tsx                             |   2 +-  (title expanded)
src/components/sections/redesign/ServicesGrid.tsx  |   2 +-   (pre-existing, untouched by me)
src/components/ui/motion-footer.tsx                |   7 +-  (removed x.com, added LinkedIn)
```

**Total: 19 files modified, 4 new files, ~422 insertions, ~121 deletions**

---

## VERIFICATION

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | ✅ Only pre-existing error in `src/app/faq/page.tsx` (orphan `/>` — FIXED in this commit) |
| `npx next build` | ✅ PASSED — 40 static pages generated successfully |
| New routes | ✅ `/icon.svg` static, `/[key]` dynamic, `/api/indexnow` dynamic |
| No broken metadata | ✅ All titles within 20-65 char range; descriptions within 158 |
| Schema integrity | ✅ All schema references use `/#business` and `/#person` canonical IDs |

---

## ITEMS NOT IMPLEMENTED (per user's "all" — but blocked by missing data)

These would require business input I don't have:

| Item | Why not implemented |
|------|-------------------|
| Real `INDEXNOW_KEY` value | User must set env var in Cloudflare (cannot commit secrets to repo) |
| Real 3+ GBP reviews (to display testimonial section) | Offline business action |
| GBP photo updates (10+ photos) | Offline business action |
| Directory listings (JustDial, Sulekha, etc.) | Offline business action |
| Guest post publishing | Requires outreach and business decision |
| Press mentions / awards section | User must provide actual mentions |

---

## READY FOR COMMIT

All changes are evidence-based, low-risk, and improve the site's search visibility. No code is committed yet — awaiting your explicit approval per the deployment policy in your `CLAUDE.md`.
