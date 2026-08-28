# AI Search Readiness Findings

**Date:** 28 August 2026
**Score:** 65/100

---

## What Works

### `llms.txt` — Comprehensive
Full structured `llms.txt` at `https://rahulchandaphotography.com/llms.txt`:
- Navigation links to all pages
- All 12 blog articles with titles and descriptions
- Key studio details (name, location, phone, specialties, hours)
- Content negotiation support (`Accept: text/markdown`)

### `robots.ts` — Correctly Allows AI Bots
```typescript
// From src/app/robots.ts
const allowBots = ["GPTBot", "ClaudeBot", "PerplexityBot", "Applebot-Extended", ...];
```

The code correctly allows all major AI crawlers.

### Rich Structured Data
JSON-LD schemas on most pages provide structured information that AI systems can parse for context.

---

## CRITICAL: robots.txt Cloudflare Override — AI Crawlers Blocked

### Evidence
The live `robots.txt` has Cloudflare-managed `Disallow` rules for:
- GPTBot → `Disallow: /`
- ClaudeBot → `Disallow: /`
- Google-Extended → `Disallow: /`
- Bytespider → `Disallow: /`
- CCBot → `Disallow: /`
- Applebot-Extended → `Disallow: /`
- meta-externalagent → `Disallow: /`

These **override** the site's own `Allow: /` rule below.

### Impact
| AI Platform | Bot | Status | Can Access llms.txt? |
|---|---|---|---|
| ChatGPT | GPTBot | ❌ Blocked | No |
| Claude | ClaudeBot | ❌ Blocked | No |
| Gemini | Google-Extended | ❌ Blocked | No |
| TikTok | Bytespider | ❌ Blocked | No |
| Common Crawl | CCBot | ❌ Blocked | No |
| Apple Intelligence | Applebot-Extended | ❌ Blocked | No |
| Meta AI | meta-externalagent | ❌ Blocked | No |
| Perplexity | PerplexityBot | ✅ Allowed | Yes |

**Only Perplexity can access the site's AI content.** ChatGPT, Claude, and Gemini — the three largest AI search platforms — are completely blocked.

### Why This Matters
- ChatGPT processes billions of queries/month — all blocked
- Claude powers Anthropic's search — all blocked
- Google AI Overviews (Gemini) — all blocked
- The site's excellent `llms.txt` is wasted — no AI crawler can read it
- The site's correct `robots.ts` code is meaningless — Cloudflare overrides at CDN edge

### Fix
**Immediate** (5 minutes):
1. Log into Cloudflare Dashboard
2. Go to Security → Bots → Configure Bot Management
3. Find the "AI Scrapers and Crawlers" rule
4. Disable it OR add an exception for the specific bots above

**Alternative** (also 5 minutes):
Create a WAF override rule:
```
When: http.user_agent contains "GPTBot" OR "ClaudeBot" OR "Google-Extended"
Then: Allow
```

---

## MEDIUM: No `llms-full.txt`

### Evidence
The site has `llms.txt` (navigation + summaries) but no `llms-full.txt` (extended version with full page content).

### Impact
- AI systems that support `llms-full.txt` (some OpenAI tools, Claude) can get deeper content
- Missing opportunity for comprehensive AI ingestion

### Fix
Generate `public/llms-full.txt` with expanded content from all pages — full service descriptions, blog post summaries, FAQ answers, and studio details.

---

## MEDIUM: Content Negotiation Not Verified

### Evidence
The `llms.txt` states: "Content Negotiation: Supports `Accept: text/markdown` across all routes for AI agents."

This implies the server should return markdown when `Accept: text/markdown` is requested. However, this wasn't verified in the audit.

### Impact
If content negotiation works, AI agents can get clean markdown instead of HTML — significantly better for RAG pipelines. If it doesn't work, the claim in `llms.txt` is misleading.

### Fix
Test with:
```bash
curl -H "Accept: text/markdown" https://rahulchandaphotography.com/
```
Verify markdown response. If not working, implement or remove the claim.

---

## LOW: No Structured Data for AI Consumption

### Evidence
While JSON-LD schemas are present, they're designed for Google's structured data requirements, not specifically for AI ingestion. AI systems increasingly use schema.org data for context, but additional AI-specific signals could help.

### Recommendations
1. Add `sameAs` links to all social profiles in Organization schema
2. Add `knowsAbout` to Person schema (photography specialties)
3. Add `areaServed` with specific city/region data
4. Consider adding `ai.txt` or `agent-card.json` (emerging standards)

---

## Summary: AI Search Score Breakdown

| Signal | Score | Notes |
|---|---|---|
| llms.txt quality | 9/10 | Excellent structure, comprehensive |
| robots.ts code | 9/10 | Correctly allows all AI bots |
| robots.txt (live) | 2/10 | Cloudflare blocks 7 of 8 major AI crawlers |
| Structured data | 7/10 | Rich JSON-LD, but Google-focused |
| Content quality | 8/10 | Strong E-E-A-T, technical depth |
| Content negotiation | 5/10 | Claimed but unverified |
| **Overall** | **65/100** | **Excellent foundation, critical deployment issue** |

The site has done everything right in code — the `llms.txt` is excellent, the `robots.ts` is correct, the structured data is rich. The single deployment-level issue (Cloudflare AI bot blocking) nullifies all of this work. Fixing the Cloudflare rule would immediately boost this score to 85+.
