import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Food Photography Pricing in India: ₹20,000 Explained | Rahul Chanda",
  description:
    "Exactly what a ₹20,000 food photography shoot covers — dishes, styling, retouching, revisions, usage rights — what it doesn't, and when you should spend more. No 'depends on requirements'.",
  alternates: { canonical: "/blog/food-photography-pricing-india-what-you-get-20000" },
  keywords: "food photography cost India, culinary photography pricing, food photography price, restaurant photography Dehradun, food shoot budget India",
  openGraph: {
    title: "Food Photography Pricing in India: What You Get for ₹20,000",
    description:
      "A ₹20,000 food shoot broken down line by line — dishes, styling, retouching, rights. Written by a working food photographer, not an agency deck.",
    url: absoluteUrl("/blog/food-photography-pricing-india-what-you-get-20000"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Food Photography Pricing in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Photography Pricing in India: ₹20,000 Explained",
    description:
      "Exactly what a ₹20,000 food shoot covers, what it doesn't, and when to spend more.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const foodPricingSchema = {
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
          "name": "Food Photography Pricing in India: What You Get for ₹20,000",
          "item": absoluteUrl("/blog/food-photography-pricing-india-what-you-get-20000"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Food Photography Pricing in India: What You Get for ₹20,000",
      "description": "A transparent breakdown of what a Rs 20,000 food photography shoot covers in India — dishes, styling, retouching, revisions and usage rights.",
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
        { "@type": "Question", "name": "How much does food photography cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day on-location food shoot covering 12-15 dishes with styling, retouching and one revision round starts around Rs 20,000 at regional studios (Dehradun, Jaipur, Indore). Delhi and Bangalore agencies quote Rs 45,000-60,000 for the same plate count. Large campaigns with art direction run well beyond that." } },
        { "@type": "Question", "name": "How many dishes can be shot in a half-day food shoot?", "acceptedAnswer": { "@type": "Answer", "text": "12-15 dishes is realistic with kitchen coordination — roughly 20-25 minutes per dish including light restyling. Hero dishes with full prop styling take closer to 40 minutes each, which is why a quote that promises 30 styled dishes in half a day should make you suspicious." } },
        { "@type": "Question", "name": "Do food photographers charge per dish or per day?", "acceptedAnswer": { "@type": "Answer", "text": "Both models exist. Per-dish pricing is fair for small menus; day-rate pricing favours larger shoots. When comparing quotes, normalise to rupees per final retouched image — that single number exposes which quote includes styling and retouching and which hides it." } },
        { "@type": "Question", "name": "Who owns the photos — can I use them on Zomato and Instagram?", "acceptedAnswer": { "@type": "Answer", "text": "A standard food shoot includes usage across your menu, delivery apps, website and social media. Exclusive rights, broadcast, print hoardings and third-party licensing are separately priced. Get the usage list written into the quote, not promised on the phone." } },
      ],
    },
  ],
};

export default function FoodPricingIndiaBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(foodPricingSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Pricing, Explained</span>
          <h1 className="h-display">
            Food Photography Pricing in India: What You Get for ₹20,000
          </h1>
          <p className="t-lede mt-6 mb-8">
            Every restaurant owner asks the same question and gets the same dance: "sir, depends on requirements." Here's the straight version — exactly what a ₹20,000 food shoot covers at our Dehradun studio, what it doesn't, and when you should spend more.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>September 12, 2026</span>
            <span>·</span>
            <span>12 min read</span>
            <span>·</span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "₹20,000 at a regional studio buys a half-day on-location shoot: up to 15 dishes, 2-3 fully styled hero frames, retouching, one revision round, files in about 10 working days.",
                "The same shoot from a Delhi agency typically starts at ₹45,000-60,000. You're paying for their office rent, not their lighting.",
                "Menu and delivery-app shots are volume work. Hero and packaging shots are craft work. Budget for both, separately.",
                "If a quote doesn't state dish count, retouched-final count and revision rounds, it isn't a quote — it's a fishing expedition.",
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
          <h2 className="h-section mt-16 mb-6">Nobody in this industry prints a price list. So here's mine.</h2>
          <p className="t-body mb-4">
            Ask five food photographers what a shoot costs and you'll get five variations of "it depends". It does depend — but hiding behind that phrase mostly protects the photographer, not your budget. You can't plan a restaurant launch, a menu refresh or a Zomato push against "it depends".
          </p>
          <p className="t-body mb-4">
            So this post uses our studio's actual ₹20,000 tier as the worked example. The numbers won't be identical at every studio in India, but the shape of the breakdown will teach you how to read any quote you're handed.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The ₹20,000 shoot, line by line</h2>
          <div className="space-y-4 mb-6">
            {[
              {
                item: "Half-day shoot, on location",
                detail: "Your kitchen, cafe or venue — or at our Dehradun studio if logistics are easier. Four focused hours with lighting set up and torn down around your service hours.",
                cost: "~₹8,000",
              },
              {
                item: "Up to 15 dishes",
                detail: "Roughly 20-25 minutes per plate including light restyling. Kitchen coordination matters more than speed — staggered plating beats 15 cold dishes in a queue.",
                cost: "included",
              },
              {
                item: "2-3 fully styled hero dishes",
                detail: "The frames that carry your Zomato cover, Instagram grid and print menu. Full prop styling, garnish prep, composition work — closer to 40 minutes each.",
                cost: "~₹5,000 (styling & props)",
              },
              {
                item: "Retouching & crop sets",
                detail: "Colour-true retouch, plus crops delivered for menu, Zomato/Swiggy, Instagram and web. Steam, gloss and texture kept honest — nothing painted in that isn't on the plate.",
                cost: "~₹5,000",
              },
              {
                item: "One revision round + 10 working day delivery",
                detail: "You mark, we fix, files final. Rush delivery inside 72 hours is available and priced separately.",
                cost: "included",
              },
            ].map((row, idx) => (
              <div key={idx} className="border border-white/10 p-6">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h4 className="text-lg font-serif text-white">{row.item}</h4>
                  <span className="text-[#e83b2c] text-sm font-medium flex-shrink-0">{row.cost}</span>
                </div>
                <p className="text-white/70">{row.detail}</p>
              </div>
            ))}
          </div>
          <p className="t-body mb-4">
            Do the division and a ₹20,000 shoot lands near ₹1,300 per finished, retouched, multi-crop dish image. Check any other quote against that number and you'll know within a minute whether you're being served or skimmed.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">What ₹20,000 does NOT buy</h2>
          <p className="t-body mb-6">
            Just as important — the things that turn this tier into a different project entirely:
          </p>
          <div className="space-y-4">
            {[
              "Video and reels. Short-form video needs a different crew, different lighting and a different day. Quoted separately, always.",
              "Models, hands and branded merch builds. A hand reaching for a glass doubles the styling time. Worth it — but not at this tier's price.",
              "Travel beyond roughly 40 km from Dehradun. Mussoorie, Rishikesh and Haridwar shoots carry a travel line item. It's honest math, not a surcharge.",
              "Unlimited revisions. One round is included because one round is what 95% of clients use. Round two bills at half-day rate.",
              "Exclusive or broad rights. Menu, delivery apps, website and social are included. TV, print hoardings and third-party licensing are separate line items.",
              "Rush delivery. Inside 72 hours means someone's calendar gets rearranged. Fair to both sides that this costs extra.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] flex-shrink-0">—</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">When ₹20,000 is the wrong budget</h2>
          <p className="t-body mb-4">
            This tier is built for menu photography, delivery-app listings and social content — the volume work that keeps a restaurant's feed alive. It is the wrong tool for:
          </p>
          <p className="t-body mb-4">
            Packaging labels (needs a controlled studio, not your dining room). Brand campaigns with art direction (needs a concept, not a menu). A 40-dish full-menu marathon (needs a full day and a bigger crew). A festive campaign spread over two days and two locations. Those are per-project quotes starting around ₹40,000 — and a studio that pretends the ₹20,000 tier can stretch to cover them is setting both of you up for a bad month.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Why agencies quote 2-3x for the same plate</h2>
          <p className="t-body mb-4">
            A Delhi agency's ₹55,000 food quote usually decomposes like this: agency margin, production coordinator, the photographer's fee, and the actual shoot. You'll get competent work from that chain. But the chain itself doesn't touch your butter chicken.
          </p>
          <p className="t-body mb-4">
            Booking the studio direct removes the middle layers — same 8 hours, same lights, same retouching discipline, without the coordination tax. The plate, as they say, does not know who billed you. Where agencies genuinely earn their cut is multi-city rollouts and brand book enforcement — if that's your job, pay them. If you run one restaurant in Dehradun, it isn't.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">How to compare two quotes without getting fooled</h2>
          <p className="t-body mb-6">
            Three normalisations, five minutes, and any two quotes become comparable:
          </p>
          <div className="space-y-4">
            {[
              "Rupees per final retouched image. This single number exposes which quote quietly includes styling and retouching and which one adds them back as 'extras'.",
              "Per-dish vs day-rate. Per-dish pricing is fair for small menus; day rates favour bigger shoots. A ₹2,500/dish quote on 8 dishes is a worse deal than a ₹20,000 half-day — do the arithmetic both ways.",
              "Revisions and rights in writing. Two quotes that differ by ₹5,000 usually differ by one excluded revision round and a missing usage clause. Cheap until the invoice.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] font-serif flex-shrink-0">{idx + 1}.</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The DIY option, honestly</h2>
          <p className="t-body mb-4">
            For daily Instagram content, a window, a white plate and your phone will do fine — post away. DIY starts failing at exactly three points: mixed tungsten-and-daylight dining rooms (no phone white-balance survives that), anything with steam or glass or dark gravy (lighting problems, not camera problems), and print — a menu photographed on a phone falls apart the moment it hits 300 dpi.
          </p>
          <p className="t-body mb-4">
            The mix that works for most restaurants: DIY for stories and daily posts, professional for the menu, delivery listings and the grid. Your Zomato thumbnail is doing sales work every single day. That's not where to save ₹20,000.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does food photography cost in India?",
                a: "A half-day on-location shoot covering 12-15 dishes with styling, retouching and one revision round starts around ₹20,000 at regional studios (Dehradun, Jaipur, Indore). Delhi and Bangalore agencies quote ₹45,000-60,000 for the same plate count. Campaigns with art direction run well beyond that.",
              },
              {
                q: "How many dishes can be shot in a half-day?",
                a: "12-15 is realistic with kitchen coordination — roughly 20-25 minutes per dish including light restyling. Fully styled hero dishes take closer to 40 minutes each. A quote promising 30 styled dishes in half a day should make you suspicious.",
              },
              {
                q: "Do food photographers charge per dish or per day?",
                a: "Both models exist. Per-dish is fair for small menus, day rates favour larger shoots. Normalise any quote to rupees per final retouched image — that number exposes what's genuinely included.",
              },
              {
                q: "Who owns the photos? Can I use them on Zomato and Instagram?",
                a: "A standard shoot includes usage across your menu, delivery apps, website and social. Exclusive rights, broadcast, print hoardings and third-party licensing are separately priced. Get the usage list written into the quote.",
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
            <h3 className="text-2xl font-serif text-white mb-4">Want This Quote for Your Menu?</h3>
            <p className="text-white/70 mb-4">
              Half-day food shoots across Dehradun, Mussoorie and the Doon Valley — up to 15 dishes, styled heroes, retouched and delivered in 10 working days. The ₹20,000 tier, in writing.
            </p>
            <Link
              href="/services/food-beverage-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book a Food Photography Shoot <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}