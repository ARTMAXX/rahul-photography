import { posts } from "@/app/blog/[slug]/page";

export interface MarkdownResponse {
  markdown: string;
  tokens: number;
}

function countTokens(text: string): number {
  // Approximate standard LLM token count (~4 characters per token)
  return Math.ceil(text.length / 4);
}

export function getMarkdownForPath(pathname: string): MarkdownResponse | null {
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // 1. Individual Blog Post: /blog/[slug]
  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = posts.find((p) => p.slug === slug);
    if (post) {
      const lines = [
        `# ${post.title}`,
        "",
        `> **Author:** Rahul Chanda | **Category:** ${post.tag} | **Published:** ${post.date} | **Read Time:** ${post.read}`,
        `> **Canonical URL:** https://rahulchandaphotography.com/blog/${post.slug}`,
        "",
        `## Overview`,
        post.excerpt,
        "",
        ...post.body.map((b) => (b.startsWith("## ") || b.startsWith("### ") ? b : b === "" ? "" : b)),
        "",
        "---",
        "## Commercial Studio Booking",
        "- **Photographer:** Rahul Chanda",
        "- **Location:** Dehradun, Uttarakhand, India (on-location across India)",
        "- **Services:** Commercial Product Photography, Food & Beverage, Footwear & Fashion, Campaign Art Direction, Post-Production & Color Management",
        "- **Website:** https://rahulchandaphotography.com",
        "- **Contact:** https://rahulchandaphotography.com/contact | Phone: +91 70789 39475",
      ];
      const md = lines.join("\n");
      return { markdown: md, tokens: countTokens(md) };
    }
  }

  // 2. Blog Hub: /blog
  if (cleanPath === "/blog") {
    const lines = [
      "# Commercial Photography Journal & Field Notes — Rahul Chanda",
      "",
      "> Technical lighting setups, color science, fluid dynamics, AI post-production workflows, and field guides from commercial photography shoots across Dehradun and regional brand campaigns.",
      "> **Canonical URL:** https://rahulchandaphotography.com/blog",
      "",
      "## Published Articles",
      "",
      ...posts.map(
        (p) =>
          `### [${p.title}](https://rahulchandaphotography.com/blog/${p.slug})\n- **Category:** ${p.tag} | **Published:** ${p.date} | **Read Time:** ${p.read}\n- **Summary:** ${p.excerpt}\n`
      ),
      "---",
      "## Studio Information",
      "- **Website:** https://rahulchandaphotography.com",
      "- **Services:** https://rahulchandaphotography.com/services",
      "- **Dehradun Studio:** https://rahulchandaphotography.com/dehradun",
      "- **Contact:** https://rahulchandaphotography.com/contact | +91 70789 39475",
    ];
    const md = lines.join("\n");
    return { markdown: md, tokens: countTokens(md) };
  }

  // 3. Services: /services
  if (cleanPath === "/services") {
    const md = `# Commercial Photography Services — Rahul Chanda Photography
> Professional commercial, product, food & beverage, footwear, and advertising campaign photography services based in Dehradun, India with in-house post-production.
> **Canonical URL:** https://rahulchandaphotography.com/services

## Service Offerings

### 1. Commercial Product Photography
- **Focus:** E-commerce packshots, Amazon/Shopify catalog listings, hero advertising imagery, high-end cosmetics, luxury watches, electronics, and packaged goods.
- **Key Capabilities:** ColorChecker-calibrated lighting, ghost mannequin/tabletop setups, focus stacking for infinite depth-of-field, non-destructive retouching.

### 2. Food & Beverage Photography
- **Focus:** Restaurant menu visuals, packaged food advertising, cafe branding, beverage splash action, and spirits bottle photography.
- **Key Capabilities:** High-speed flash sync for liquid freeze, custom condensation styling, translucent backlighting, on-location kitchen shoots.

### 3. Fashion & Footwear Photography
- **Focus:** Footwear e-commerce angles, apparel lookbooks, leather goods, and model lifestyle campaigns.
- **Key Capabilities:** Standardized conversion angle sequences, texture-preserving frequency separation, on-location across Uttarakhand.

### 4. Brand Campaign & Commercial Video
- **Focus:** Short-form social video reels, behind-the-scenes brand stories, and 4K commercial campaign assets.
- **Key Capabilities:** Multi-aspect ratio delivery (9:16 vertical, 16:9 widescreen), DaVinci Resolve color consistency, high-speed camera motion.

### 5. Architectural & Interior Photography
- **Focus:** Luxury resorts, boutique hotels, restaurants, cafes, and commercial spaces across Dehradun, Mussoorie, and Rishikesh.
- **Key Capabilities:** Ambient + flash exposure blending, perspective control, interior styling.

## Frequently Asked Questions (FAQ)

- **Turnaround Time:** Standard delivery is 5–10 business days after the shoot. Rush delivery (24–48 hours) is available upon request.
- **Location:** Based in Dehradun, Uttarakhand, India. Available for on-location production pan-India.
- **Deliverables:** Full-resolution uncompressed master files (print-ready) plus web-optimized WebP/JPEG assets formatted strictly by SKU.
- **Usage Rights:** Standard commercial licensing included for digital advertising, website, social, and print collateral.

## Contact & Inquiries
- **Booking & Estimates:** https://rahulchandaphotography.com/contact
- **Direct Phone:** +91 70789 39475
- **Portfolio:** https://rahulchandaphotography.com/gallery`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 4. Local Dehradun Landing Page: /dehradun
  if (cleanPath === "/dehradun") {
    const md = `# Commercial Photographer in Dehradun — Rahul Chanda
> Professional commercial, product, food & beverage, cafe, and brand campaign photographer in Dehradun, Uttarakhand, India.
> **Canonical URL:** https://rahulchandaphotography.com/dehradun

## Regional Coverage & Studio Services
- **Primary Studio Base:** Dehradun, Uttarakhand
- **Neighborhoods Served:** Rajpur Road, Kanwali Road, GMS Road, Ballupur, Sahastradhara Road, Dharampur, Prem Nagar, Race Course, Clock Tower, Paltan Bazaar, Indira Nagar, Vasant Vihar, Doon IT Park, Clement Town, Raipur.
- **Uttarakhand Regional Travel:** Mussoorie, Rishikesh, Haridwar, Haldwani, Roorkee, Nainital, and wider North India.

## Core Commercial Capabilities
1. **Product Photography for E-Commerce & Retail:** Amazon/Flipkart compliance, pure white sweeps, contextual lifestyle staging, in-house retouching.
2. **Food, Restaurant & Cafe Photography:** Menu shoots on-location along Rajpur Road and Dehradun food hubs, styled flat-lays, dynamic pour/splash captures.
3. **Apparel & Footwear Photography:** Clean multi-angle catalog packs, leathercraft detail macros, model lookbooks.
4. **Resort & Hospitality Photography:** Boutique stays and cafes across Mussoorie, Rishikesh, and Dehradun.

## Direct Contact
- **Phone / WhatsApp:** +91 70789 39475
- **Portfolio:** https://rahulchandaphotography.com/gallery
- **Website:** https://rahulchandaphotography.com`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 5. Portfolio Gallery: /gallery
  if (cleanPath === "/gallery") {
    const md = `# Commercial Photography Portfolio & Gallery — Rahul Chanda
> Selected commercial campaign imagery, luxury product packshots, food & beverage styling, and footwear photography.
> **Canonical URL:** https://rahulchandaphotography.com/gallery

## Featured Portfolio Categories
- **Luxury Timepieces & Jewelry:** Controlled specular highlights, dark-field illumination, macro dial details.
- **Cosmetics & Skincare:** Clean pastel sweeps, translucent droplet textures, label typography fidelity.
- **Beverage & Liquid Action:** Frozen splash crowns, backlit amber spirits, condensation-beaded glassware.
- **Culinary & Packaged Foods:** Rich organic color palettes, steam capture, restaurant menu styling.
- **Footwear & Leather Goods:** Conversion-focused 3/4 hero angles, sole tread detail, material grain.

## Client Inquiries
- **Discuss a Shoot:** https://rahulchandaphotography.com/contact | +91 70789 39475`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 6. About Page: /about
  if (cleanPath === "/about") {
    const md = `# About Rahul Chanda — Commercial & Product Photographer
> Dehradun-based commercial photographer with over a decade of experience crafting high-impact visual assets for brands, advertising agencies, and digital commerce.
> **Canonical URL:** https://rahulchandaphotography.com/about

## Philosophy & Craft
Commercial photography is where artistic vision meets commercial precision. Every reflection, gradient, and shadow is crafted with physical lighting modifiers and verified with industry-standard color calibration before post-production begins.

## Studio Infrastructure & Experience
- **Experience:** Over 10 years in commercial photography, advertising campaigns, and studio lighting.
- **Location:** Dehradun, Uttarakhand, India (serving national and international brands).
- **Specialties:** Product packshots, beverage splashes, food styling, fashion footwear, AI-accelerated studio workflows.
- **Post-Production:** Full in-house color management (Calibrite / X-Rite ColorChecker), frequency separation, dodge & burn, and multi-format delivery.

## Connect
- **Contact:** https://rahulchandaphotography.com/contact | +91 70789 39475
- **Services:** https://rahulchandaphotography.com/services`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 7. Contact Page: /contact
  if (cleanPath === "/contact") {
    const md = `# Contact Rahul Chanda Photography — Commercial Studio Booking
> Inquire about commercial product shoots, food & beverage campaigns, e-commerce catalog photography, and brand content creation.
> **Canonical URL:** https://rahulchandaphotography.com/contact

## Studio Contact Details
- **Primary Location:** Dehradun, Uttarakhand, India (available pan-India for on-location productions)
- **Phone / Direct Call:** +91 70789 39475
- **Booking Inquiries:** Direct online booking form available at https://rahulchandaphotography.com/contact
- **Operating Hours:** Monday – Saturday, 09:00 – 19:00 IST

## How to Prepare a Commercial Brief
To receive an accurate estimate and timeline, please include:
1. Product type & total SKU count
2. Target deliverables (e-commerce white background, lifestyle set, social video)
3. Intended usage (Amazon/web, print billboard, packaging)
4. Target deadline & reference moodboard (if available)`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 8. FAQ Page: /faq
  if (cleanPath === "/faq") {
    const md = `# Frequently Asked Questions — Rahul Chanda Photography
> Commercial photography pricing, turnaround timelines, licensing, preparation, and deliverables.
> **Canonical URL:** https://rahulchandaphotography.com/faq

## General Commercial FAQs
- **Q: Where is the studio located?**
  A: The studio is based in Dehradun, Uttarakhand. We also travel with full mobile lighting setups across India for on-location productions.
- **Q: What is the typical delivery timeframe?**
  A: Standard turnaround is 5–10 business days following the shoot. Rush turnaround (24–48 hours) is available upon request.
- **Q: How are files delivered?**
  A: Secure digital cloud delivery with full-resolution 16-bit master files (TIFF/PSD/JPEG) alongside optimized web formats (WebP/sRGB) structured strictly by SKU.
- **Q: Do you provide retouching?**
  A: Yes. All commercial deliverables include color calibration, surface dust cleanup, frequency separation, and contrast sculpting in-house.`;
    return { markdown: md, tokens: countTokens(md) };
  }

  // 9. Homepage: /
  if (cleanPath === "/") {
    const md = `# Rahul Chanda Photography — Commercial & Product Photographer
> Commercial & Product Photographer based in Dehradun, India. Specializing in high-end product packshots, food & beverage styling, footwear catalogs, and brand advertising campaigns.
> **Canonical URL:** https://rahulchandaphotography.com/

## Key Information
- **Lead Photographer:** Rahul Chanda
- **Location:** Dehradun, Uttarakhand, India (serving pan-India)
- **Phone / WhatsApp:** +91 70789 39475
- **Primary Specialization:** Commercial Product, Food & Beverage, Fashion Footwear, Advertising Campaigns

## Site Navigation
- **Services:** [Commercial Photography Services](https://rahulchandaphotography.com/services)
- **Dehradun Studio:** [Commercial Photographer Dehradun](https://rahulchandaphotography.com/dehradun)
- **Portfolio Gallery:** [Featured Work](https://rahulchandaphotography.com/gallery)
- **Journal & Field Notes:** [Photography Blog](https://rahulchandaphotography.com/blog)
- **About:** [Photographer Profile](https://rahulchandaphotography.com/about)
- **Contact:** [Book a Shoot](https://rahulchandaphotography.com/contact)

## Core Services Summary
1. **Product Photography:** E-commerce packshots, cosmetics, watches, Amazon/Shopify listings.
2. **Food & Beverage:** High-speed splash photography, menu styling, bottle lighting.
3. **Footwear & Fashion:** Conversion-tested e-commerce angle sequences.
4. **Brand Video & Motion:** 4K commercial reels, DaVinci Resolve color consistency.

## Machine-Readable Endpoints
- **llms.txt:** https://rahulchandaphotography.com/llms.txt
- **Sitemap:** https://rahulchandaphotography.com/sitemap.xml
- **Robots:** https://rahulchandaphotography.com/robots.txt`;
    return { markdown: md, tokens: countTokens(md) };
  }

  return null;
}
