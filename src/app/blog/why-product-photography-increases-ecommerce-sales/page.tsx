import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Photography & E-Commerce Sales | Rahul Chanda",
  description:
    "What changes when a brand replaces phone photos with professional product photography: clicks, conversion, returns and ad costs, from a working studio.",
  alternates: { canonical: "/blog/why-product-photography-increases-ecommerce-sales" },
  keywords: "product photography for e-commerce, commercial product photography benefits, product photography increase sales, ecommerce product photos India",
  openGraph: {
    title: "Why Professional Product Photography Increases E-Commerce Sales",
    description:
      "Clicks, conversion, returns, ad costs — what studio-lit photos change on the balance sheet, written from the studio floor.",
    url: absoluteUrl("/blog/why-product-photography-increases-ecommerce-sales"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Professional Product Photography for E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Professional Product Photography Increases E-Commerce Sales",
    description:
      "Clicks, conversion, returns, ad costs — what studio-lit photos change on the balance sheet.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const ecommerceSalesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": absoluteUrl("/blog") },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Why Professional Product Photography Increases E-Commerce Sales",
          "item": absoluteUrl("/blog/why-product-photography-increases-ecommerce-sales"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Why Professional Product Photography Increases E-Commerce Sales",
      "description": "What changes when a brand replaces phone photos with studio-lit product photography — clicks, conversion, returns and ad efficiency, from a commercial photographer.",
      "image": absoluteUrl(siteConfig.ogImagePath),
      "datePublished": "2026-09-12",
      "dateModified": "2026-09-12",
      "publisher": { "@type": "Organization", "name": "Rahul Chanda Photography" },
      "author": {
        "@type": "Person",
        "name": "Rahul Chanda",
        "url": absoluteUrl("/about"),
        "jobTitle": "Commercial Product Photographer",
        "image": absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does professional product photography increase sales?", "acceptedAnswer": { "@type": "Answer", "text": "There is no single honest number. Studios that replace phone photos with controlled, colour-accurate catalogue work commonly see product-page conversion move up by 30-70%, with the biggest jumps on marketplace listings where thumbnails compete side by side. Your category, price point and traffic quality decide where you land in that range." } },
        { "@type": "Question", "name": "Is a professional shoot worth it for a small catalogue?", "acceptedAnswer": { "@type": "Answer", "text": "One clean hero image per SKU beats five weak ones. A basic 20-SKU professional catalogue starts around Rs 20,000 at a regional studio — roughly Rs 1,000 per product, which most branded goods recover with two or three extra unit sales per SKU." } },
        { "@type": "Question", "name": "Can AI-generated product images replace a photoshoot?", "acceptedAnswer": { "@type": "Answer", "text": "AI backgrounds work for some social content, but marketplaces require images of the actual product. Generated imagery that misrepresents the product drives returns and can violate marketplace image policies. AI is useful in the pipeline — cleanup, scaling, variants — not as the source of truth." } },
        { "@type": "Question", "name": "How long does a professional product shoot take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard e-commerce catalogue of 15-25 SKUs shoots in a half-day to one studio day, with retouched, marketplace-ready files delivered in 1-2 weeks including one revision round." } },
      ],
    },
  ],
};

export default function EcommerceSalesPhotographyBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecommerceSalesSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">E-Commerce Guide</span>
          <h1 className="h-display">
            Why Professional Product Photography Increases E-Commerce Sales
          </h1>
          <p className="t-lede mt-6 mb-8">
            What changes on the balance sheet when a brand swaps phone photos for studio-lit ones — clicks, conversion, returns, ad costs. Written from the studio floor, not a marketing deck.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>September 12, 2026</span>
            <span>·</span>
            <span>11 min read</span>
            <span>·</span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "Online, your photo IS the product. The buyer can't touch, smell or test anything — the image carries 100% of the quality signal.",
                "Replacing phone photos with controlled, colour-accurate catalogue work typically moves product-page conversion up 30-70%. The thumbnail decides who even reaches the page.",
                "Colour accuracy is a returns problem, not an aesthetic one. What the buyer sees must match what the courier delivers.",
                "A 20-SKU professional catalogue starts around ₹20,000 at a regional studio — about one week of mediocre ad spend, for assets you'll use for years.",
              ].map((point, i) => (
                <li key={i} className="text-white/70 text-sm leading-relaxed pl-2 border-l border-white/10">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Your product page is a shop with no shopkeeper</h2>
          <p className="t-body mb-4">
            Walk into any shop in Paltan Bazaar and a person picks the product up, turns it around, answers your doubts, talks you past your hesitation. Your product page has none of that. The photograph does every job the shopkeeper used to do — it holds the thing, shows the label, answers "is this genuine", "will it look cheap on my shelf", "can I trust this seller".
          </p>
          <p className="t-body mb-4">
            And here's the part that stings. Most brands spend months perfecting the product and one afternoon on the picture of it. Then the ads run, the clicks arrive, nothing converts, and everyone blames the product. The product didn't fail. The shopkeeper did.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">What buyers actually do: the zoom test</h2>
          <p className="t-body mb-4">
            Open any Amazon listing and pinch-zoom to 100%. Serious buyers do this before paying, and phone photos die right there — soft edges, colour noise, a label that dissolves into grey porridge. Zoom is the closest thing online shopping has to picking a product up. If the image turns to mush, the trust your price and reviews built evaporates in two seconds.
          </p>
          <p className="t-body mb-4">
            A proper studio file survives that zoom. Label text legible. Texture true. Edges clean. That isn't vanity — it's the line between "looks like a brand" and "looks like a reseller working out of a store room".
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The five things professional photography actually fixes</h2>
          <div className="space-y-4">
            {[
              {
                title: "Light",
                body: "One controlled key, deliberate fill. Glass stops looking muddy, food stops looking flat, fabric shows weave instead of noise. Light isn't decoration — it's information.",
              },
              {
                title: "Colour",
                body: "Calibrated capture, calibrated monitor, colour-checked retouch. The maroon that reaches a customer in Mussoorie looks like the maroon that left the studio. This one fix quietly kills your 'product not as described' returns.",
              },
              {
                title: "Consistency",
                body: "Same angle, same exposure, same background across 40 SKUs. Try that with a phone and a window. A catalogue that matches itself reads as a brand; one that doesn't reads as a flea market.",
              },
              {
                title: "Detail",
                body: "Macro crops, texture, scale references. The shots that answer the questions buyers would otherwise type into the Q&A box — or worse, into the returns form.",
              },
              {
                title: "Trust at price",
                body: "Clean framing and a real shadow do something no caption can: they make the price feel fair. A ₹2,499 product photographed like a ₹499 one sells like a ₹499 one.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h4 className="text-lg font-serif text-[#e83b2c] mb-2">— {item.title}</h4>
                <p className="text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Where the sales lift actually comes from</h2>
          <p className="t-body mb-6">
            "Better photos, more sales" is true, but lazy. The lift arrives through four separate doors, and it helps to know which one is leaking in your store:
          </p>
          <div className="space-y-4 mb-6">
            {[
              "Thumbnail click-through. Your listing fights twenty identical competitors on a search page. The cleaner, sharper thumbnail gets the click. Nothing else on your listing is visible at that size.",
              "Page conversion. Once they're on the page, the images carry the whole argument — angle coverage, detail crops, scale. Fewer doubts, more add-to-carts.",
              "Fewer returns. Most 'not as described' returns are photo problems wearing a product costume. The colour that lied, the texture that hid, the size that had no reference. Each return you prevent pays for itself twice over.",
              "Cheaper advertising. The same ₹500 of ad spend converts better when the creative isn't the weak link. Your cost per order falls without touching the bid.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] flex-shrink-0">—</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
          <p className="t-body mb-4">
            Add those doors together and the 30-70% conversion range stops sounding like marketing. It's four leaks getting sealed at once.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The honest bit: where phone photos are still fine</h2>
          <p className="t-body mb-4">
            I make my living from studio shoots, and I'll still tell you this: a WhatsApp catalogue for your regulars, Instagram stories, an internal lookbook — a window, a white chart and a steady hand handle all of that. If your entire channel is 300 loyal customers who already trust you, spend the money on stock, not photography.
          </p>
          <p className="t-body mb-4">
            What a phone cannot do is hold consistency across 40 products under controlled light, or survive a buyer's zoom, or keep maroon from drifting pink between SKU 7 and SKU 8. The moment you're on a marketplace or running paid traffic, you've outgrown it. Know which job you're hiring the photo for.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The maths, in rupees</h2>
          <p className="t-body mb-4">
            A ₹20,000 catalogue shoot for 20 SKUs works out to ₹1,000 per product. For most branded goods that's the margin on two or three units. Each SKU needs to sell two extra units — ever — and the shoot has paid for itself. Everything after that is profit sitting on assets you already own.
          </p>
          <p className="t-body mb-4">
            Compare that with what else costs ₹1,000 per SKU in this business: nothing, really. Packaging design is close. Ad spend never stops. The photographs are the only line item that keeps selling after the invoice is paid.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does professional product photography increase sales?",
                a: "There's no single honest number. Studios that replace phone photos with controlled, colour-accurate catalogue work commonly see product-page conversion move up 30-70%, with the biggest jumps on marketplaces where thumbnails compete side by side. Your category, price point and traffic quality decide where you land.",
              },
              {
                q: "Is a professional shoot worth it for a small catalogue?",
                a: "One clean hero image per SKU beats five weak ones. A basic 20-SKU catalogue starts around ₹20,000 at a regional studio — about ₹1,000 per product. Most branded goods recover that with two or three extra unit sales per SKU.",
              },
              {
                q: "Can AI-generated product images replace a photoshoot?",
                a: "AI backgrounds are fine for some social content, but marketplaces require images of the actual product. Generated imagery that misrepresents what ships drives returns and can breach marketplace image policies. Use AI in the pipeline — cleanup, variants, scaling — not as the source of truth.",
              },
              {
                q: "How long does a professional product shoot take?",
                a: "A standard e-commerce catalogue of 15-25 SKUs shoots in half a day to one studio day. Retouched, marketplace-ready files come back in 1-2 weeks including one revision round.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <h3 className="text-lg font-serif text-white mb-3">{item.q}</h3>
                <p className="text-white/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="border border-white/10 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/5">
              <Image
                src="/opt/about-photo/rahul-chanda-portrait.webp"
                alt="Rahul Chanda, commercial product photographer"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#e83b2c] mb-2">About the author</p>
              <h3 className="text-lg font-serif text-white mb-2">
                <Link href="/about" className="hover:text-[#e83b2c] transition-colors">Rahul Chanda</Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Commercial product photographer based in Dehradun, India. 6+ years shooting product, food &amp; beverage, and advertising campaigns with in-house retouching. Serving brands across Uttarakhand and pan-India.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1 text-xs text-[#e83b2c] hover:text-[#f0523f] mt-3 transition-colors">
                View full profile <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">Ready to Stop Leaking Sales to Better-Lit Competitors?</h3>
            <p className="text-white/70 mb-4">
              We shoot e-commerce catalogues for brands across Dehradun, Uttarakhand and pan-India — marketplace-ready files, in-house retouching, 1-2 week delivery.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Get Professional Product Photography <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}