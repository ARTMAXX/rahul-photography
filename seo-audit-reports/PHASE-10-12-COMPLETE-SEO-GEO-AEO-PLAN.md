# Rahul Chanda Photography — Complete SEO + GEO + AEO Audit & Strategic Plan

**Generated:** September 1, 2026
**Domain:** https://rahulchandaphotography.com
**Hosting:** Cloudflare Workers via OpenNext (Next.js)

---

## EXECUTIVE SUMMARY

### Honest Current State (from actual data)

| Metric | Real Value | Source |
|--------|-----------|--------|
| Indexable pages | 22 | Screaming Frog |
| Real organic clicks (3 months) | 7 | Google Search Console |
| Real organic impressions (3 months) | 98 | GSC |
| Average search position | 27.6 (page 3) | GSC |
| Indexed in Google | 17 pages confirmed | GSC |
| Backlinks | 0 | Ahrefs |
| Referring domains | 0 | Ahrefs |
| Schema markup | Valid (0 errors), 0 rich results generated | Screaming Frog |
| CLS (real-user) | 1 (Poor — target < 0.1) | Cloudflare Observatory |
| LCP | 2112ms (Good) | Cloudflare |
| INP | 184ms (Good) | Cloudflare |
| Title tag issues | 2 too short (/terms, /privacy), 7 meta descriptions too long | Screaming Frog |
| IndexNow submissions | 0 (16 changes pending) | Ahrefs |
| GBP reviews | 4 reviews, 5.04 rating | User-provided |
| AI crawler activity (24h) | 215 requests, 9.24 MB video downloaded (Meta) | Cloudflare |
| GA4 conversions tracked | 0 (no key events configured) | GA4 |
| GA4 organic traffic | 0 (100% Direct — likely tracking install timing) | GA4 |
| 4xx errors at Cloudflare edge (24h) | 189 (mostly bot probes) | Cloudflare |
| 5xx errors at Cloudflare edge (24h) | 546 (origin shows 0 — all at edge) | Cloudflare |
| Real 5xx server errors | ~36 across multiple pages | Cloudflare |

### Phase 8 Uncommitted Changes (in working tree)

1. `src/app/page.tsx` — `aggregateRating` removed (was 4.9/24, GBP actually shows 4/5.04)
2. `src/app/services/page.tsx` — `provider` schema consolidated to `/#business` reference
3. `src/app/services/product-photography/page.tsx` — `provider` schema consolidated
4. `src/app/services/food-beverage-photography/page.tsx` — `provider` schema consolidated
5. `src/app/services/footwear-fashion-photography/page.tsx` — `provider` schema consolidated
6. `src/app/services/commercial-campaigns/page.tsx` — `provider` schema consolidated + title updated to "Brand & Advertising Photographer in Dehradun — Commercial Campaigns"

**Plus 5 pre-existing uncommitted changes** (not made by this audit):
- `next.config.ts`
- `src/app/blog/[slug]/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/social-landing/page.tsx`
- `src/components/sections/redesign/ServicesGrid.tsx`

---

## DATA SOURCES (all cross-referenced)

1. **Google Search Console export** (Aug 13 - Sep 1, 3 months) — actual organic performance
2. **Screaming Frog crawl** (Sep 1 2026, full technical audit)
3. **Ahrefs Site Audit** (Sep 1 2026, live) — 0 errors, 20 warnings, 44 notices
4. **Ahrefs CSV exports** (Aug 30 2026) — 46 pages crawled in detail
5. **Ahrefs CSV exports** (Sep 1 2026) — latest crawl
6. **Cloudflare Observatory** — real-user CWV
7. **Cloudflare AI Crawler Control** (24h) — 215 AI requests
8. **Cloudflare Error monitoring** (24h) — 4xx/5xx breakdown
9. **Cloudflare cache traffic CSV** (23h) — bandwidth patterns
10. **GA4 Reports** (Aug 4-31 2026) — user behavior
11. **Codebase source files** (read in earlier phases)
12. **GBP data** (4 reviews, 5.04) — user-provided

---

## PHASE 10: SEO PLAN

### Honest Assessment

You DO have organic search presence. The "you don't rank" narrative was overstated in earlier phases.

**What you have:**
- 7 organic clicks in 3 months (real, not just bot)
- 17 pages receiving Google impressions
- Homepage at average position 8.95 (page 1, position 9)
- /dehradun at position 5.36 (page 1, position 5)
- /contact at position 5.67
- India gets 7 clicks, 65 impressions
- "photographer in dehradun" at position 38 (page 4, closest to PAA eligibility)

**What you don't have:**
- ANY backlinks (0 referring domains) — biggest gap
- IndexNow configured (16 changes pending)
- Conversion tracking (0 GA4 key events)
- Rich results in Google (0 features generating)
- Strong geo signals (no geo meta tags)

### PILLAR 1: Indexing & Discovery

| # | Action | Risk | Status |
|---|--------|------|--------|
| S1 | Add IndexNow API key to `next.config.ts` | LOW | 🟢 SAFE |
| S2 | Verify sitemap includes all 22 indexable pages | LOW | 🟢 SAFE |
| S3 | Submit updated sitemap to GSC | LOW | 🟢 SAFE |
| S4 | Request indexing for /dehradun, /services/*, top 5 blog posts via GSC URL Inspection | LOW | 🟢 SAFE |
| S5 | Add geo.region, geo.placename, geo.position meta tags to layout.tsx | LOW | 🟡 NEEDS APPROVAL |

### PILLAR 2: On-Page SEO

#### A. Title Tag Optimization

**Current state (from Screaming Frog):**

| Page | Title | Length | Status |
|------|-------|--------|--------|
| /terms | Terms of Service | 16 | ⚠️ Too short |
| /privacy | Privacy Policy | 14 | ⚠️ Too short |
| All other titles | 26-62 chars | OK | OK |

| # | Action | Risk |
|---|--------|------|
| S6 | Update /terms title: "Terms of Service — Rahul Chanda Photography" | LOW |
| S7 | Update /privacy title: "Privacy Policy — Rahul Chanda Photography" | LOW |

#### B. Meta Description Optimization

**Current state (4+ pages > 158 chars):**

| Page | Length | Action |
|------|--------|--------|
| /blog/ai-photoshop-retouching-techniques | 186 | Trim to ≤ 158 |
| /blog/why-beverage-splash-photography-is-hard | 171 | Trim to ≤ 158 |
| /blog/ai-video-editing-tools-2026 | 185 | Trim to ≤ 158 |
| /blog/footwear-photography-angles | 169 | Trim to ≤ 158 |
| /blog/generative-ai-product-backgrounds | 159 | Trim to 158 |
| /contact | 160 | Trim to 158 |
| /services/food-beverage-photography | 162 | Trim to 158 |
| /privacy | 84 | Expand to 100-140 |
| /terms | 74 | Acceptable for legal |

| # | Action | Risk |
|---|--------|------|
| S8 | Trim 7 long meta descriptions | LOW |
| S9 | Expand /privacy meta description | LOW |

#### C. Schema Markup Enhancement (Rich Results opportunity)

| Page | Current Schema | Missing Rich Result | How to Add |
|------|----------------|---------------------|------------|
| /blog/* (12 posts) | BlogPosting | FAQ, HowTo | Add FAQPage or HowTo to deep posts |
| /gallery | (need to verify) | ImageObject + ItemList | Add gallery schema |
| /services/* | Service + Offer | AggregateRating (only if real reviews) | Wait for 5+ GBP reviews |
| / | LocalBusiness | Review (when reviews exist) | Wait for GBP |
| /dehradun | LocalBusiness | FAQ (already have FAQ block) | Add FAQPage schema |

| # | Action | Risk |
|---|--------|------|
| S10 | Add FAQPage schema to /dehradun (FAQ block exists in body) | LOW |
| S11 | Add HowTo schema to /blog/lighting-patterns-for-product-photography | MEDIUM |
| S12 | Add ImageObject + ItemList schema to /gallery | LOW |

#### D. Readability

3 service pages have Flesch < 30 ("Very Hard"). This is INTENTIONAL for B2B professional services. NO ACTION.

### PILLAR 3: Off-Page SEO (Backlinks — #1 gap)

**You have 0 backlinks. This is the single biggest competitive disadvantage vs CK Studio (1,000+ JustDial, hundreds of citations).**

#### A. Directory Citations

| Directory | Priority |
|-----------|----------|
| JustDial | 🟢 |
| Sulekha | 🟢 |
| Bing Places | 🟢 |
| Behance | 🟢 (you have profile) |
| Facebook Business | 🟢 |
| LinkedIn Company | 🟢 (if real profile) |
| IndiaMART | 🟡 |
| Yelp | 🟡 |
| Apple Maps | 🟡 |
| Bark.com | 🟡 |

| # | Action | Risk |
|---|--------|------|
| S13 | Create profiles on 8+ directories | LOW (data entry) |

#### B. Niche Directories

PhotoFocused.com, ShootQ Pro Directory, FindAPhotographer.co

| # | Action | Risk |
|---|--------|------|
| S14 | Submit to 3-5 photography-specific directories | LOW |

#### C. Guest Posts / PR

| Target | Effort |
|--------|--------|
| India design blogs (YourStory, Design Pataki) | Medium |
| Photography blogs (PetaPixel, DIYPhotography) | High |
| Local Uttarakhand business blogs | Low |
| Local Dehradun publications (Amar Ujala, Dainik Jagran digital) | Medium |

| # | Action | Risk |
|---|--------|------|
| S15 | Publish 1 guest post per month | LOW |

#### D. Linkable Asset Strategy

| Asset Type | Effort |
|------------|--------|
| "Complete Guide to Amazon Product Photography 2026" (whitepaper) | Medium |
| Free downloadable "Product Photography Brief Template" | Low |
| Original data: "What Top 100 Dehradun Brands Spend on Photography" | High |
| YouTube tutorials | Medium |
| Free Lightroom preset pack | Low |

| # | Action | Risk |
|---|--------|------|
| S16 | Create 1 linkable asset in next 90 days | LOW |

### PILLAR 4: Local SEO (Dehradun geographic relevance)

#### A. Google Business Profile

| # | Action | Risk |
|---|--------|------|
| S17 | Add 5+ more GBP reviews (request from past clients) | N/A (offline) |
| S18 | Add 10+ GBP photos | N/A (offline) |
| S19 | Add GBP Q&A entries | N/A (offline) |
| S20 | Verify GBP categories (primary: Commercial Photographer) | N/A (offline) |
| S21 | Set GBP service area radius (Dehradun + 50km) | N/A (offline) |

#### B. Local Landing Page Enhancement

| # | Action | Risk |
|---|--------|------|
| S22 | Expand /dehradun deep-dive sections to 8-10 neighborhoods (only if you actually serve them) | LOW-MEDIUM |

#### C. Local Schema Markup

| # | Action | Risk |
|---|--------|------|
| S23 | Add `foundingDate` to LocalBusiness schema (e.g., "2019") | LOW |
| S24 | Add `founder` Person reference to LocalBusiness on /dehradun | LOW |
| S25 | Add `priceRange` to LocalBusiness schema (currently set in siteConfig as "₹12,000 — ₹2,00,000+") | LOW |

### PILLAR 5: Performance & Technical

| Issue | Status | Action |
|-------|--------|--------|
| LCP 2112ms | Good | None |
| INP 184ms | Good | None |
| **CLS 1 (Poor)** | Action needed | Investigate GSAP + Framer Motion |
| TTFB 1381ms | Good | Polish at Cloudflare edge could improve |

**CLS = 1 likely contributors:**
- Hero GSAP pin animation (`Hero.tsx:33-86`)
- Framer Motion `InView` with stagger (`gallery/page.tsx:120-160`)
- Possible image loading without explicit dimensions

| # | Action | Risk |
|---|--------|------|
| S26 | Add explicit width/height to all `<img>` and `<Image>` components | MEDIUM |
| S27 | Investigate CLS contributors via DevTools trace | N/A (research) |

### SEO Priority Matrix

| Tier | Action | Risk |
|------|--------|------|
| P0 | Add IndexNow API key | LOW |
| P0 | Trim 7 long meta descriptions | LOW |
| P0 | Add 8+ directory citations | LOW |
| P0 | GBP: 5+ more reviews, 10+ photos, categories | N/A |
| P1 | Fix x.com / linkedin.com root URLs | LOW |
| P1 | Add FAQPage schema to /dehradun | LOW |
| P1 | Expand /terms and /privacy titles | LOW |
| P1 | Submit URL Inspection requests in GSC | LOW |
| P2 | Add HowTo schema to /blog/lighting-patterns | MEDIUM |
| P2 | Add ImageObject + ItemList to /gallery | LOW |
| P2 | Add geo meta tags to layout | LOW |
| P2 | Add explicit image dimensions for CLS | MEDIUM |
| P3 | Local landing page expansion (8-10 neighborhoods) | MEDIUM |
| P3 | 1 guest post per month | LOW |
| P3 | 1 linkable asset per quarter | LOW |
| P3 | Local SEO directories (photography-specific) | LOW |

---

## PHASE 11: GEO (Generative Engine Optimization) PLAN

### What is GEO

GEO = Generative Engine Optimization = optimizing for AI search engines (ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Copilot, Meta AI).

### AI Crawler Activity (Last 24h)

| AI Engine | Crawled? | Requests | Trend |
|-----------|----------|----------|-------|
| Google (Googlebot) | Yes | 83 | ↑315% |
| OpenAI (ChatGPT-User) | Yes | 25 | ↑73% |
| Anthropic (ClaudeBot) | Yes | 12 | ↑20% |
| Meta (Meta-ExternalAgent) | Yes | 40 | 9.24 MB video |
| Microsoft (BingBot) | Yes | 17 | ↑20% |
| Baidu | Yes | 7 | ↑22% |
| Apple (Applebot) | No | 0 | — |
| Perplexity (PerplexityBot) | No | 0 | — |

**Your Content-Signal header:** `ai-train=yes, search=yes, ai-input=yes` (enables all)

### GEO Pillar 1: Cite-Worthy Content

| # | Action | Risk |
|---|--------|------|
| G1 | Add 3-5 specific statistics to /dehradun (years, brands served, repeat client %) | MEDIUM (data must be true) |
| G2 | Add "Last updated: [date]" to body of each blog post | LOW |
| G3 | Add specific named clients to /about (with permission) | MEDIUM (legal) |
| G4 | Add equipment list with model numbers (already in /about) | ✅ Done |
| G5 | Add "Frequently cited facts" block on /about | LOW |

### GEO Pillar 2: Entity Clarity

| # | Action | Risk |
|---|--------|------|
| G6 | Add sameAs links to: Wikipedia/Wikidata, Crunchbase, About.me, directories | LOW |
| G7 | Add `foundingDate` to LocalBusiness schema (e.g., "2019") | LOW |
| G8 | Add `founder` Person reference (already in /, not in /dehradun) | LOW |
| G9 | Verify Person schema on /about is complete | LOW |

### GEO Pillar 3: Perplexity Optimization

| # | Action | Risk |
|---|--------|------|
| G10 | Submit to Perplexity's index (no formal process; structured data + clear authorship helps) | N/A |
| G11 | Create `/public/llms.txt` with service+area summary | LOW |
| G12 | Add `<link rel="alternate" type="text/plain" href="/llms.txt" />` to `<head>` | LOW |

### GEO Pillar 4: AI Crawler Management

| # | Action | Risk |
|---|--------|------|
| G13 | Keep current `Content-Signal: ai-train=yes` policy | N/A |
| G14 | Monitor which AI crawlers are most active | N/A |

### GEO Priority Matrix

| Tier | Action | Risk |
|------|--------|------|
| P0 | Add 3-5 specific statistics to /dehradun | MEDIUM |
| P0 | Add `foundingDate` + `founder` ref to LocalBusiness | LOW |
| P1 | Add "Last updated" date to blog posts | LOW |
| P1 | Create /llms.txt file | LOW |
| P2 | Add sameAs to Person schema | LOW |
| P2 | Add named clients to /about (with permission) | MEDIUM |
| P3 | Add `knowsAbout` deep list to Person schema | LOW |

---

## PHASE 12: AEO (Answer Engine Optimization) PLAN

### What is AEO

AEO = optimizing for Google Featured Snippets, People Also Ask, Google AI Overviews, Voice Search, Knowledge panels.

### Current State

- FAQPage schema on /faq (12 questions), /services/food-beverage-photography (4 questions)
- FAQ block in body on /dehradun (6 questions, no schema)

### AEO Pillar 1: Question-Targeted Content

| Target Query | PAA Trigger | Recommended Action |
|--------------|-------------|---------------------|
| "How much does product photography cost in India?" | Common | Add cost section to /services/product-photography |
| "What is included in commercial photography?" | Common | Add "What we deliver" section |
| "How long does a commercial photo shoot take?" | Common | Add timeline section |
| "How to choose a commercial photographer in Dehradun?" | Local | Add "How to choose" to /dehradun |
| "Why hire a local Dehradun photographer?" | Local | Add benefits section |
| "What does commercial photography cost?" | Common | Add to /services |

| # | Action | Risk |
|---|--------|------|
| A1 | Add "How much does X cost in Dehradun" section to /services/product-photography | LOW |
| A2 | Add "How to choose a photographer" section to /dehradun | LOW |
| A3 | Add "What we deliver" timeline section to 4 service pages | LOW |

### AEO Pillar 2: FAQ Schema Expansion

| Page | Current FAQ | Recommended |
|------|-------------|-------------|
| /services/product-photography | None | Add 4-6 FAQs |
| /services/footwear-fashion-photography | None | Add 4-6 FAQs |
| /services/commercial-campaigns | None | Add 4-6 FAQs |
| /dehradun | Body (no schema) | Convert to FAQPage schema |
| /about | None | Add 3-4 FAQs |
| /blog (each post) | None | Add 2-3 FAQs per post |

| # | Action | Risk |
|---|--------|------|
| A4 | Add FAQPage schema to /dehradun (convert existing body FAQ) | LOW |
| A5 | Add FAQPage schema to /services/product-photography | LOW |
| A6 | Add FAQPage schema to /services/footwear-fashion-photography | LOW |
| A7 | Add FAQPage schema to /services/commercial-campaigns | LOW |
| A8 | Add 2-3 FAQs to each top 5 blog post | MEDIUM |

### AEO Pillar 3: Voice Search

| # | Action | Risk |
|---|--------|------|
| A9 | Add FAQ block + schema to homepage | LOW |
| A10 | Conversational H1 variant on /dehradun | MEDIUM |

### AEO Pillar 4: Google AI Overview Eligibility

**Current E-E-A-T signals:**
- ✅ Author bio on all blog posts (with link to /about)
- ✅ Equipment list in /about
- ✅ Specific equipment (Calibrite, Capture One)
- ✅ Local Dehradun focus
- ⚠️ AggregateRating removed (Phase 8) — no review signal currently
- ❌ No press mentions / awards / publications
- ❌ No "as featured in"

| # | Action | Risk |
|---|--------|------|
| A11 | Add "Featured in" section to /about (if any) | LOW |
| A12 | Add awards/recognition to /about (if any) | LOW |
| A13 | Continue producing original-content blog posts | N/A |

### AEO Priority Matrix

| Tier | Action | Risk |
|------|--------|------|
| P0 | Add FAQPage schema to /dehradun | LOW |
| P0 | Add "How much does X cost" sections to service pages | LOW |
| P1 | Add FAQPage schema to 3 remaining service pages | LOW |
| P1 | Add 2-3 FAQs to each top 5 blog posts | MEDIUM |
| P2 | Add FAQ block + schema to homepage | LOW |
| P2 | Conversational H1 variant on /dehradun | MEDIUM |
| P3 | Add publications/awards section to /about | LOW |

---

## PHASE 13: CONSOLIDATED ACTION PLAN

### Total Action List

- Phase 8 changes (uncommitted): 4
- P0 (highest priority): 8 actions
- P1 (high priority): 13 actions
- P2 (medium priority): 14 actions
- P3 (optional/long-term): 12 actions
- **Total: 51 actions across all tiers**

### Week 1: Quick wins (all LOW risk, HIGH confidence)

| # | Action | Time | Risk |
|---|--------|------|------|
| W1.1 | Add IndexNow API key to `next.config.ts` | 10 min | LOW |
| W1.2 | Trim 7 long meta descriptions to ≤ 158 chars | 30 min | LOW |
| W1.3 | Expand /terms and /privacy titles to 40+ chars | 10 min | LOW |
| W1.4 | Fix x.com / linkedin.com root URLs in `motion-footer.tsx` | 15 min | LOW |
| W1.5 | Add FAQPage schema to /dehradun (convert body FAQ) | 30 min | LOW |
| W1.6 | Update /privacy meta description to 100-140 chars | 5 min | LOW |
| W1.7 | Add foundingDate + founder ref to LocalBusiness schema | 15 min | LOW |
| W1.8 | Create /public/llms.txt | 30 min | LOW |

### Week 2: Local SEO + Schema (LOW-MEDIUM risk)

| # | Action | Time | Risk |
|---|--------|------|------|
| W2.1 | Add FAQPage schema to 3 service pages | 1 hour | LOW |
| W2.2 | Add geo meta tags to layout.tsx | 15 min | LOW |
| W2.3 | Add explicit width/height to images for CLS | 2-3 hours | MEDIUM |
| W2.4 | Add priceRange to LocalBusiness schema | 5 min | LOW |
| W2.5 | Add `<link rel="alternate" href="/llms.txt">` to layout | 5 min | LOW |

### Week 3: Backlinks (offline, business decision)

| # | Action | Time | Risk |
|---|--------|------|------|
| W3.1 | List profile on 5+ directories | 1-2 hours | LOW |
| W3.2 | GBP: Q&A seed | 30 min | LOW |
| W3.3 | Identify 3 photography blogs for guest post outreach | 1 hour | LOW |

### Month 2: Content + Linkable Asset

| # | Action | Time | Risk |
|---|--------|------|------|
| M2.1 | Create 1 linkable asset | 1-2 days | LOW |
| M2.2 | Publish 1 guest post | 1 week lead | LOW |
| M2.3 | Add 2-3 FAQs to each top 5 blog post | 3 hours | MEDIUM |
| M2.4 | Add HowTo schema to /blog/lighting-patterns | 30 min | MEDIUM |
| M2.5 | Add ImageObject + ItemList schema to /gallery | 1 hour | LOW |
| M2.6 | Add specific statistics to /dehradun | 1 hour | MEDIUM |

### Month 3+: Long-term (continuous)

| # | Action | Frequency |
|---|--------|-----------|
| Q1 | 1 guest post per month | Monthly |
| Q2 | 1 linkable asset per quarter | Quarterly |
| Q3 | Continue 1-2 blog posts per month | Monthly |
| Q4 | Update old blog posts | Quarterly |
| Q5 | Local SEO expansion (8-10 neighborhoods) | One-time |
| Q6 | Monitor GBP for new reviews | Ongoing |

---

## RISK-ADJUSTED FINAL RECOMMENDATION

### 🟢 SAFE TO IMPLEMENT NOW (No approval needed)

| # | Action |
|---|--------|
| 1 | Commit Phase 8 changes (4 uncommitted files) |
| 2 | Add IndexNow API key |
| 3 | Trim 7 long meta descriptions |
| 4 | Expand /terms and /privacy titles |
| 5 | Fix x.com / linkedin.com root URLs |
| 6 | Add FAQPage schema to /dehradun |
| 7 | Add foundingDate + founder to LocalBusiness |
| 8 | Add priceRange to LocalBusiness |
| 9 | Create /public/llms.txt |
| 10 | Update /privacy meta description |
| 11 | Submit URL Inspection requests in GSC |
| 12 | Add FAQPage schema to 3 service pages |
| 13 | Add geo meta tags to layout |

### 🟡 NEEDS APPROVAL (Business/Positioning decisions)

| # | Action | Why |
|---|--------|-----|
| 14 | Create profiles on 8+ directories | Time investment |
| 15 | Add named clients to /about | Privacy/legal |
| 16 | Add "How much does X cost" sections | Pricing is business strategy |
| 17 | Add 2-3 FAQs to each top 5 blog posts | Content decisions |
| 18 | Create linkable asset | Time + content effort |
| 19 | 1 guest post per month | Time investment |
| 20 | Conversational H1 variant test on /dehradun | Changes visible copy |
| 21 | Add HowTo schema to /blog/lighting-patterns | Content decision |
| 22 | GBP review + photo campaign | Business decision |
| 23 | Deeper local neighborhood content | Content decision |

### 🔴 DO NOT IMPLEMENT

- Create 24 state pages (doorway-page risk)
- Create city pages for Delhi/Mumbai/Bangalore (no service evidence)
- Match CK Studio's word count
- Add Hindi/Devanagari (no demand evidence)
- Add wedding photography
- Remove /dehradun
- Add AggregateRating until 5+ real GBP reviews
- Refactor Hero GSAP for CLS without DevTools trace
- Change all titles to match a keyword template
- Copy competitor pricing structure

---

## END OF REPORT
