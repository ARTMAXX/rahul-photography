# SEO Optimization Roadmap for Rahul Chanda Photography

**Strategic Positioning:** Commercial & Product Photographer, Dehradun
**Primary Keywords:** commercial photographer Dehradun | product photographer Dehradun | food photographer Dehradun
**Goal:** Build topical authority around commercial photography (product, food, beverage, campaigns) — NOT generic "photographer Dehradun"

---

## PHASE 1: Fix Architecture & On-Page SEO (Week 1-2)

### Priority 1: Homepage Optimization

**Current Issues:**
- Title is correct but could emphasize "commercial photographer" more strongly
- H1 uses "product photographer" — good, keep this focus
- Generic marketing language ("tailored to your vision," "made by hand") doesn't add SEO value

**Fixes Required:**

1. **Title Tag** (Current is good, keep as is):
   - `Rahul Chanda — Commercial & Product Photographer in Dehradun, India`

2. **Meta Description** (Make more keyword-focused):
   - **Current:** "Rahul Chanda is a commercial & product photographer in Dehradun, India, delivering high-end product, food & beverage, footwear, and advertising campaigns with in-house retouching."
   - **Updated:** "Commercial & product photographer in Dehradun, India. Specialized in product photography, food & beverage, ecommerce, campaigns, and commercial brand photography with in-house retouching."
   - **Why:** Adds "ecommerce" and "commercial brand photography" keywords naturally

3. **Homepage H1** (Keep current focus):
   - Stays as: "Dehradun-based commercial product photographer"
   - But reinforce with H2s that use exact service terminology

4. **Hero Section Copy** (Update for keyword clarity):
   - Replace generic "Basically, I make images" with:
   - "Commercial & product photographer making products worth choosing for brands worldwide"
   - This keeps the voice but adds keyword clarity

5. **Services Section Terminology:**
   - Ensure every service uses exact keywords:
     - "Product Photography" (not "Every surface...")
     - "Food & Beverage Photography" (not "Styled, lit, and shot...")
     - "Commercial Campaigns" (not vague language)

---

### Priority 2: Create Dedicated Service Pages

Create 4 new service pages under `/services/`:

#### Page 1: `/services/product-photography`

**Target Keywords:**
- Primary: Product Photography, Product Photographer
- Secondary: Commercial Product Photography, E-commerce Product Photography, Product Photography for Brands
- Local: Product Photography Dehradun, Product Photographer Dehradun

**File:** `src/app/services/product-photography/page.tsx`

**Structure:**
```
- Hero/H1: "Product Photography for Brands & E-commerce"
- Section 1: What is product photography (includes search terms naturally)
- Section 2: Product Photography Services We Offer
  ├── E-commerce Product Packshots
  ├── Cosmetics & Skincare Photography
  ├── Watches & Jewellery Photography
  ├── Footwear Photography
  ├── Food & Beverage Products
  └── D2C Product Photography
- Section 3: Why Product Photography Matters (conversion language)
- Section 4: Our Product Photography Process
- Section 5: Testimonials from e-commerce clients
- CTA: "Start Your Product Photography Project"
```

**Metadata:**
```
Title: "Product Photography Services for Brands & E-commerce | Dehradun, India"
Meta: "Professional product photography in Dehradun. E-commerce packshots, commercial product shoots, cosmetics, watches, jewelry, and brand product photography with in-house retouching."
```

**Schema:** Add Service schema + LocalBusiness schema

---

#### Page 2: `/services/food-beverage-photography`

**Target Keywords:**
- Primary: Food & Beverage Photography, Food Photographer
- Secondary: Restaurant Food Photography, Food Photography for Restaurants, Beverage Photography
- Local: Food Photographer Dehradun, Food Photography Dehradun

**Structure:**
```
- Hero: "Food & Beverage Photography for Restaurants & Brands"
- Section 1: Food Photography Services
  ├── Restaurant Menu Photography
  ├── Food Photography for Delivery Apps
  ├── Beverage Photography
  ├── Splash & Glass Photography
  └── Cafe & Coffee Shop Photography
- Section 2: Why Food Photography Matters for Restaurants
- Section 3: Our Food Photography Process (Styling → Lighting → Retouching)
- Section 4: Case studies from restaurant/food clients
- CTA: "Book Your Food Photography Shoot"
```

**Metadata:**
```
Title: "Food & Beverage Photography for Restaurants | Dehradun"
Meta: "Professional food photography for restaurants, menus, and delivery apps. Beverage photography, food styling, and restaurant menu shoots in Dehradun with commercial retouching."
```

---

#### Page 3: `/services/commercial-campaigns`

**Target Keywords:**
- Primary: Commercial Photography, Advertising Photography
- Secondary: Campaign Photography, Brand Photography, Commercial Photographer
- Local: Commercial Photographer Dehradun, Advertising Photographer Dehradun

**Structure:**
```
- Hero: "Commercial Campaign Photography"
- Section 1: What is Commercial Campaign Photography
- Section 2: Campaign Types We Shoot
  ├── Product Campaign Shoots
  ├── Brand Campaign Photography
  ├── Advertising Photography
  ├── Lifestyle Campaign Imagery
  └── Content Creation for Brands
- Section 3: From Concept to Final Delivery
- Section 4: Campaign examples (show actual work)
- CTA: "Plan Your Campaign Shoot"
```

**Metadata:**
```
Title: "Commercial & Advertising Photography for Campaigns | Dehradun"
Meta: "Commercial campaign photography and advertising photography for brands. Art-directed shoots from concept to final retouched deliverables in Dehradun, India."
```

---

#### Page 4: `/services/footwear-fashion-photography`

**Target Keywords:**
- Primary: Footwear Photography, Fashion Photography
- Secondary: Shoe Photography, Fashion Product Photography
- Local: Footwear Photographer Dehradun

**Structure:**
```
- Hero: "Footwear & Fashion Product Photography"
- Section 1: Footwear Photography Specialties
  ├── Shoe Photography (Studio & Lifestyle)
  ├── Footwear E-commerce Photography
  ├── Fashion Lookbook Photography
  └── Apparel Product Photography
- Section 2: Why Quality Footwear Photography Matters
- Section 3: Our Process for Footwear & Fashion
- Section 4: Portfolio showcase (shoe/fashion work)
- CTA: "Photograph Your Footwear Collection"
```

**Metadata:**
```
Title: "Footwear & Fashion Photography for E-commerce & Brands | Dehradun"
Meta: "Professional footwear and fashion photography. Shoe photography, apparel lookbooks, and commercial fashion shoots with studio or on-location production in Dehradun."
```

---

### Priority 3: Optimize /dehradun Page

**Current status:** Already strong, but needs refinement

**Updates needed:**

1. **H1 Change:**
   - Current: "Locations"
   - Updated: "Commercial Photography in Dehradun, Mussoorie & Uttarakhand"

2. **Opening paragraph:**
   - Add keyword clarity: "As a commercial photographer based in Dehradun, I specialize in product photography, food & beverage, commercial campaigns, and brand content creation."

3. **Service listing on Dehradun page:**
   - Keep current services but add internal links to the new `/services/product-photography`, `/services/food-beverage-photography`, etc.

4. **Local coverage section:**
   - Emphasize: "Commercial photographer serving Dehradun, Mussoorie, Rishikesh, Haridwar"

5. **Add schema:**
   - LocalBusiness schema with coordinates
   - AggregateOffer schema listing all services available locally

---

### Priority 4: Fix Internal Linking Structure

**Create these internal link clusters:**

#### Cluster 1: Product Photography
```
Homepage 
  ↓ 
Product Photography service page
  ↓
/blog/product-photography-lighting (when published)
  ↓
/blog/how-to-photograph-products-for-ecommerce (when published)
  ↓
/dehradun (back to local page)
```

#### Cluster 2: Food & Beverage
```
Homepage
  ↓
Food & Beverage service page
  ↓
/blog/food-photography-for-restaurants (when published)
  ↓
/blog/beverage-photography-glass-splash (when published)
  ↓
/dehradun
```

#### Cluster 3: Commercial Campaigns
```
Homepage
  ↓
Commercial Campaigns service page
  ↓
Case studies
  ↓
/dehradun
```

---

### Priority 5: Add Schema Markup

Add to all service pages:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Rahul Chanda Photography",
    "image": "https://rahulchandaphotography.com/opt/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "addressCountry": "India"
    },
    "telephone": "+91 7078939475",
    "url": "https://rahulchandaphotography.com"
  },
  "description": "[Service description with keywords]",
  "areaServed": [
    {
      "@type": "City",
      "name": "Dehradun"
    },
    {
      "@type": "City",
      "name": "Mussoorie"
    },
    {
      "@type": "State",
      "name": "Uttarakhand"
    }
  ]
}
```

---

## PHASE 2: Blog Content Strategy (Month 2)

### Blog Article 1 (Publish Week 3-4): PRIORITY ⭐⭐⭐

**Title:** "Product Photography Lighting: Key Light, Rim Light & Negative Fill"

**Target Keywords:**
- product photography lighting
- product photography lighting setup
- ecommerce product photography lighting
- product lighting setup

**URL:** `/blog/product-photography-lighting-setup`

**Structure:**
- Intro (80 words): "The right lighting is the difference between..."
- Section 1: Key Light (300 words) - with your photo examples
- Section 2: Rim Light (300 words) - with examples
- Section 3: Negative Fill (250 words) - with examples
- Section 4: How to Set Up These Lights (300 words)
- Section 5: Common Lighting Mistakes (200 words)
- Section 6: When to Use Each Setup (250 words)
- Internal Links: Link to Product Photography service page
- CTA: "Need professional product photography? Let's talk."

**Word count:** ~1,700 words

---

### Blog Article 2 (Week 4-5): PRIORITY ⭐⭐⭐

**Title:** "How to Photograph Products for E-commerce: 7-Step Process"

**Target Keywords:**
- how to photograph products
- ecommerce product photography
- product photography for ecommerce
- product photography tips

**URL:** `/blog/how-to-photograph-products-ecommerce`

**Structure:**
- Intro: Your perspective as a working photographer
- Step 01: Background Selection (200 words + image)
- Step 02: Lighting Setup (300 words + image)
- Step 03: Camera Angle & Composition (250 words + image)
- Step 04: Product Positioning & Styling (250 words + image)
- Step 05: Consistency Across Your Catalog (200 words)
- Step 06: Professional Retouching (300 words + image)
- Step 07: Amazon/Shopify-Ready Export (150 words)
- Internal Links: Product Photography service page
- CTA: "Ready for professional product photography?"

**Word count:** ~1,800 words

---

### Blog Article 3 (Week 5-6): PRIORITY ⭐⭐

**Title:** "Food Photography for Restaurants: How to Photograph Your Menu"

**Target Keywords:**
- restaurant food photography
- food photography for restaurants
- restaurant menu photography
- food photographer

**URL:** `/blog/food-photography-restaurants`

**Structure:**
- Intro: "Restaurant photos that actually increase orders"
- Section 1: Why Food Photography Matters (200 words)
- Section 2: Restaurant Photography Lighting (350 words)
- Section 3: Styling Your Dishes (300 words)
- Section 4: Composition & Angles (250 words)
- Section 5: Shooting for Delivery Apps vs Social vs Menus (250 words)
- Section 6: Color Grading Restaurant Photos (200 words)
- Section 7: Timeline & Process (150 words)
- Internal Links: Food & Beverage service page
- CTA: "Book your restaurant photography shoot"

**Word count:** ~1,700 words

---

### Blog Article 4 (Week 7): AUTHORITY ⭐⭐

**Title:** "Beverage Product Photography: Lighting Glass, Condensation & Splash"

**Target Keywords:**
- beverage product photography
- glass product photography
- beverage splash photography
- beverage photography techniques

**URL:** `/blog/beverage-photography-glass-splash`

**Structure:**
- Intro: Reference your existing "Why beverage splash photography is hard" article
- Section 1: Glass Lighting (400 words)
- Section 2: Creating Condensation (300 words)
- Section 3: Splash Photography Technique (350 words)
- Section 4: Color & Reflection Management (250 words)
- Section 5: Post-Production for Beverage (300 words)
- Link to: Your existing "Why beverage splash photography is hard" article
- Internal Links: Food & Beverage service page
- CTA: "Let's shoot your beverage campaign"

**Word count:** ~1,600 words

---

### Blog Article 5 (Week 8): COMMERCIAL FIT ⭐⭐

**Title:** "Product Photography for Small Businesses in India: Getting Started"

**Target Keywords:**
- product photography for small business
- product photography for small business India
- ecommerce photography
- professional product photos

**URL:** `/blog/product-photography-small-business-india`

**Structure:**
- Intro: "Small businesses can compete with big brands through professional product photos"
- Section 1: Why Small Businesses Need Product Photography (250 words)
- Section 2: Common Mistakes Small Businesses Make (300 words)
- Section 3: DIY vs Hiring a Professional (300 words)
- Section 4: What to Expect from a Professional Product Photographer (250 words)
- Section 5: Pricing for Small Businesses (200 words)
- Section 6: How Often to Shoot New Product Photos (200 words)
- Case Study: One of your small business clients (if available)
- Internal Links: Product Photography service page
- CTA: "Let's photograph your products professionally"

**Word count:** ~1,500 words

---

## PHASE 3: Keywords NOT to Chase

❌ "best photographer in Dehradun"
❌ "wedding photographer Dehradun"
❌ "portrait photographer Dehradun"
❌ "photography studio Dehradun"
❌ "photographer near me"

---

## PHASE 3: Google Search Console Integration

**Next Step (After Phase 1-2 complete):**

Export your Google Search Console Performance data (last 3-6 months) as CSV:
- Queries
- Impressions
- Clicks
- Position
- CTR

This will show:
- Which keywords are ALREADY getting impressions (rank #2-#50)
- Which keywords need content support
- Which keywords have poor CTR despite ranking

This becomes your actual keyword gap map based on real Google data.

---

## Implementation Timeline

| Phase | Week | Tasks |
|-------|------|-------|
| **1** | Week 1-2 | Optimize homepage, create 4 service pages, fix /dehradun, add schema |
| **2** | Week 3-8 | Publish 5 blog articles (1 per week) |
| **3** | Week 8+ | Export GSC data, map keyword gaps, plan next content |

---

## Success Metrics (6-12 months)

| Metric | Target |
|--------|--------|
| Ranked Keywords | 50+ (from ~10 today) |
| Top 10 Rankings | 15+ keywords |
| Organic Traffic | 500-1,000/month |
| Position Improvement | Keywords moving from #50 to #5-#20 |

---

## Key Principles to Remember

1. **Architecture is everything.** Dedicated service pages beat keyword-stuffing homepage.
2. **Topical clusters work.** Product Photography → Lighting → E-commerce → Retouching all link together
3. **Long-tail beats short-tail.** "product photographer Dehradun" > "photographer Dehradun"
4. **Blog supports services, not the reverse.** Blog articles drive traffic TO service pages
5. **Real testimonials > keyword testimonials.** Use real names and real results only
6. **GSC data is king.** Strategy without GSC data is educated guessing

---

**Next Action:** Implement Phase 1 (architecture fixes) before publishing any blog content.
