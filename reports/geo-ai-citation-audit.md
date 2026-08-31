# GEO Audit: AI Citation Readiness Report

**Audit Date:** 2026-09-01  
**Total Posts Audited:** 17  
**Average AI Citation Score:** 24/100 (Poor)

## Overall Scores by Post

| Post | AI Citation Score | Rating | AI Overview | Perplexity | ChatGPT |
|------|------------------|--------|-------------|------------|---------|
| ai-commercial-product-photography.md | 31/100 | Poor | 33 | 15 | 41 |
| why-beverage-splash-photography-is-hard.md | 29/100 | Poor | 33 | 15 | 41 |
| ai-video-editing-tools-2026.md | 26/100 | Poor | 31 | 15 | 35 |
| beverage-photography-glass.md | 26/100 | Poor | 31 | 15 | 35 |
| color-science-ecommerce.md | 26/100 | Poor | 31 | 15 | 35 |
| footwear-photography-angles.md | 26/100 | Poor | 31 | 15 | 35 |
| lighting-patterns-for-product-photography.md | 26/100 | Poor | 31 | 15 | 35 |
| beverage-photography-glass-splash.md | 24/100 | Poor | 26 | 15 | 35 |
| food-photography-restaurants.md | 24/100 | Poor | 26 | 15 | 35 |
| ai-photoshop-retouching-techniques.md | 23/100 | Poor | 28 | 15 | 29 |
| ai-color-grading-scene-detection.md | 21/100 | Poor | 26 | 15 | 29 |
| generative-ai-product-backgrounds.md | 20/100 | Poor | 21 | 15 | 29 |
| retouching-101.md | 20/100 | Poor | 21 | 15 | 29 |
| how-to-photograph-products-ecommerce.md | 15/100 | Poor | 16 | 15 | 23 |
| product-photography-lighting-setup.md | 15/100 | Poor | 16 | 15 | 23 |
| product-photography-small-business-india.md | 15/100 | Poor | 16 | 15 | 23 |

## Critical Gaps Across All Posts

### 1. Source Citations: 0/30 (Perplexity)
**Problem:** No external sources cited in any post.  
**Fix:** Add 3-5 authoritative external links per post (camera manufacturers, platform guidelines, industry studies).

### 2. Source Authority: 0/25 (Perplexity)
**Problem:** No tier 1-3 sources linked.  
**Fix:** Link to: Sony/Nikon/Canon specs, Adobe documentation, Shopify/Etsy guides, industry reports.

### 3. Article Schema: 0/15 (AI Overview)
**Problem:** Missing JSON-LD structured data.  
**Fix:** Add BlogPosting schema with author, datePublished, dateModified.

### 4. Reader Usefulness: 0/20 (All platforms)
**Problem:** Content not self-contained; sections don't answer questions independently.  
**Fix:** Add summary boxes, TL;DR sections, and make each H2 section answer a question.

### 5. Entity Definitions: 0/15 (ChatGPT)
**Problem:** Key terms not defined clearly.  
**Fix:** Add definition-style formatting for technical terms (e.g., "什么是快门速度?").

## Platform-Specific Recommendations

### ChatGPT (Average: 31/100)
- Add extractable lists and tables with semantic headers
- Define key terms clearly for entity extraction
- Make sections self-contained for passage extraction

### Perplexity (Average: 15/100)
- **Critical:** Add source citations with URLs
- Link to authoritative sources (camera specs, platform docs)
- Include dated statistics with source attribution

### Google AI Overviews (Average: 27/100)
- Add BlogPosting JSON-LD schema
- Ensure content is crawlable and indexable
- Add featured images with proper alt text

## Priority Action Items

1. **Add external links to all 17 posts** (Impact: +30 points)
   - Link to camera manufacturer specs
   - Link to platform guidelines (Shopify, Etsy)
   - Link to industry reports and studies

2. **Add JSON-LD BlogPosting schema** (Impact: +15 points)
   - Include author, datePublished, dateModified
   - Add BreadcrumbList schema

3. **Add summary boxes to each post** (Impact: +20 points)
   - TL;DR at top of each post
   - Key takeaways at end of each section

4. **Define key terms** (Impact: +15 points)
   - Add definition formatting for technical terms
   - Use consistent entity naming throughout

## Rating Thresholds
- 90-100: Excellent - highly citable by AI systems
- 70-89: Good - citable with minor improvements
- 50-69: Needs Work - significant gaps in citability
- **Below 50: Poor - major restructuring needed** ← All your posts are here

## Next Steps

1. Run `/blog rewrite` on each post to add external sources
2. Run `/blog schema` to add JSON-LD markup
3. Re-run `/blog geo` after fixes to verify improvement
