import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Choose a Commercial Photographer in Dehradun | Rahul Chanda",
  description:
    "A working Dehradun commercial photographer's honest checklist: portfolios, retouching, e-commerce specs, quote red flags and the six questions to ask before paying an advance.",
  alternates: { canonical: "/blog/how-to-choose-commercial-photographer-dehradun" },
  keywords: "commercial photographer Dehradun, best photographer Uttarakhand, hire product photographer Dehradun, photography studio Dehradun",
  openGraph: {
    title: "How to Choose a Commercial Photographer in Dehradun (Without Getting Burned)",
    description:
      "Portfolios, retouching, e-commerce specs, quote red flags — the checklist I'd use if I were hiring. Written by a Dehradun commercial photographer.",
    url: absoluteUrl("/blog/how-to-choose-commercial-photographer-dehradun"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Choosing a Commercial Photographer in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Commercial Photographer in Dehradun",
    description:
      "The hiring checklist I'd use if I were a brand — from a working Dehradun commercial photographer.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const choosePhotographerSchema = {
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
          "name": "How to Choose a Commercial Photographer in Dehradun",
          "item": absoluteUrl("/blog/how-to-choose-commercial-photographer-dehradun"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "How to Choose a Commercial Photographer in Dehradun (Without Getting Burned)",
      "description": "A working Dehradun commercial photographer's honest hiring checklist — portfolios, retouching pipelines, e-commerce specs, quotes and red flags.",
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
        { "@type": "Question", "name": "What does a commercial photoshoot cost in Dehradun?", "acceptedAnswer": { "@type": "Answer", "text": "A basic 20-SKU e-commerce catalogue starts around Rs 20,000 at a Dehradun studio. Regional studios typically price 30-50% below Delhi or Bangalore for equivalent quality. Complex work — glass, jewellery, campaigns — is quoted per project." } },
        { "@type": "Question", "name": "How do I verify a photographer's portfolio is real?", "acceptedAnswer": { "@type": "Answer", "text": "Ask for the last 20 delivered images from the past six months in your category, not the five curated ones. Check consistency across a single client's catalogue — repeating quality across 30 SKUs is far harder than one beautiful hero frame." } },
        { "@type": "Question", "name": "Should I ship products to a Delhi studio or shoot locally in Dehradun?", "acceptedAnswer": { "@type": "Answer", "text": "Local wins on logistics: no courier risk to your stock, reshoots are a short drive, and you can attend the shoot. The one exception is when a category needs specialised gear a local studio doesn't hold — ask what would be rented for your job and whether that rental is inside the quote." } },
        { "@type": "Question", "name": "What should be included in a photography quote?", "acceptedAnswer": { "@type": "Answer", "text": "Day rate, number of final retouched images per SKU, styling and props, number of retouching rounds, file formats and sizes, delivery deadline, and usage rights (menu, social, marketplace, ads). Anything left verbal tends to become a paid extra later." } },
      ],
    },
  ],
};

export default function ChoosePhotographerDehradunBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(choosePhotographerSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Hiring Guide</span>
          <h1 className="h-display">
            How to Choose a Commercial Photographer in Dehradun (Without Getting Burned)
          </h1>
          <p className="t-lede mt-6 mb-8">
            Ten photographers will quote you this month. Nine will send the same five portfolio shots and a vague "sir, package hai". Here's the checklist I'd use if I were hiring — including the reasons you might not hire me.
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
                "Judge a portfolio by its weakest 20 images, not its best 5. Anyone can curate five.",
                "Ask who retouches. If the answer is 'we send it out', you've found the reason for the 10-day delay.",
                "E-commerce work has hard specs — white background, zoom depth, marketplace crops. A pretty Instagram grid doesn't prove a studio can meet them.",
                "A Dehradun studio should quote 30-50% below Delhi for equivalent work. If the quote matches Delhi, you're paying Delhi prices for nothing Delhi.",
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
          <h2 className="h-section mt-16 mb-6">You're about to spend ₹20,000-₹1,00,000. Read this first.</h2>
          <p className="t-body mb-4">
            Every quote sounds the same at the start. "High-end work, sir. Professional setup. Creative vision." Then the files arrive and the differences show up as colour drift between SKUs, three missing angles you specifically asked for, and the sentence "editing extra hai". The gap between photographers isn't talent — Dehradun has plenty of it. The gap is process.
          </p>
          <p className="t-body mb-4">
            What follows is the exact checklist I'd run if I were a brand owner hiring someone like me. It's written from the other side of the table on purpose.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">1. Judge the portfolio like a buyer, not a fan</h2>
          <p className="t-body mb-4">
            Don't ask "can I see your work" — everyone curates their five best frames from five best shoots. Ask this instead: <em>show me the last 20 images you delivered, from the last six months, in my category.</em>
          </p>
          <p className="t-body mb-4">
            Then look for one specific thing: consistency across a single client's catalogue. Can this photographer repeat — same light, same discipline — across 30 SKUs of shampoo bottles, not just one gorgeous hero? One beautiful frame is luck or taste. Thirty matching frames is a system, and systems are what you're buying.
          </p>
          <p className="t-body mb-4">
            Also check the category. Glass kills amateurs. Fabric kills amateurs. Food kills amateurs differently. If you sell honey and their portfolio is all sneakers, the learning curve is going on your budget.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">2. Ask who actually retouches the files</h2>
          <p className="t-body mb-4">
            This single question sorts the studios from the middlemen. If the photographer retouches in-house, colour decisions stay with the person who made them, revisions happen in a day, and "fix the label reflection" doesn't need a committee. If they send it out, you'll hear "editing 5-7 din me ho jayega" and the files will come back looking like they were processed by someone who has never held your product.
          </p>
          <p className="t-body mb-4">
            Ask to see one before/after pair from their actual pipeline — raw file next to delivered file. A studio that owns its retouching shows this without flinching.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">3. E-commerce specs vs pretty pictures</h2>
          <p className="t-body mb-4">
            A lifestyle shot for Instagram and a marketplace-ready packshot are two different trades that share a camera. Marketplaces have hard requirements: clean white background, correct margins, 1000px-plus on the long edge for zoom, true colour, no prop clutter on the main image. Ask the direct question: <em>"Will I get white-background files at 2000px with margins that survive Amazon's zoom?"</em>
          </p>
          <p className="t-body mb-4">
            If they blink, hesitate, or answer with "we do creative shots also, sir" — you're talking to a wedding photographer doing products on the side. Nothing wrong with weddings. But catalogue discipline is its own muscle.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">4. What the quote should itemise</h2>
          <p className="t-body mb-4">
            A professional quote reads like a grocery list, not a fortune cookie. It should state:
          </p>
          <ul className="text-white/70 space-y-2 mb-6 text-sm">
            <li>— Day rate or per-image rate, and which one applies</li>
            <li>— Number of final retouched images per SKU</li>
            <li>— Styling and props — included, or billed?</li>
            <li>— Number of retouching rounds before it costs extra</li>
            <li>— File formats and sizes (raw? JPEG? web-optimised? print?)</li>
            <li>— Delivery deadline in working days</li>
            <li>— Usage rights: menu, social, marketplace, ads, print</li>
          </ul>
          <p className="t-body mb-4">
            Everything that isn't written down becomes a paid extra later. Every time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">5. The local advantage — and when it backfires</h2>
          <p className="t-body mb-4">
            Shooting in Dehradun instead of couriering your stock to Delhi buys you three things: no courier risk to your inventory, reshoots that are a 20-minute drive instead of a fortnight of logistics, and a chair at the shoot itself. That last one matters more than people expect — a founder watching the shoot catches "that's not our colour" in take one, not in the delivery folder.
          </p>
          <p className="t-body mb-4">
            The honest exception: some categories need gear depth a small city studio may not hold — liquor glass at scale, jewellery macro, big set builds. Ask what they'd rent for your specific job and whether that rental sits inside the quote. A studio that answers this comfortably is a studio that has thought about your job, not just your money.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Red flags — walk away if you hear these</h2>
          <div className="space-y-4">
            {[
              "Portfolio is all moody lifestyle, zero clean packshots. They can't do the boring 80% of commercial work that pays your bills.",
              "'Editing extra' appears after the advance is paid.",
              "No written deliverables — image counts, formats and deadline are all verbal.",
              "They haven't asked a single question about your customer or where the photos will be used. That's not curiosity, that's a shooting contract, not a thinking one.",
              "Delhi-level pricing with no Delhi-level justification in the room.",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] flex-shrink-0">✗</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Six questions to ask before you pay the advance</h2>
          <div className="space-y-4">
            {[
              "Show me the last 20 images you delivered — not the 5 you chose.",
              "Who retouches, and how long does one revision round take?",
              "What exactly is included — styling, props, retouching rounds, file formats?",
              "Which usage rights do I get? Menu, social, marketplace, ads, print?",
              "If a shot fails on set, who pays for the reshoot day?",
              "Can I be present at the shoot?",
            ].map((q, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] font-serif flex-shrink-0">{idx + 1}.</span>
                <p className="text-white/70">{q}</p>
              </div>
            ))}
          </div>
          <p className="t-body mt-6 mb-4">
            The answers separate a studio from a guy with a camera in about ten minutes.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Full disclosure</h2>
          <p className="t-body mb-4">
            I run a commercial studio in Dehradun, and yes — I'd like you to book me. But I'd rather you hired the right photographer than a convenient one. If you run this checklist and someone else in town clears it, hire them. The brands that come back to us come back because the checklist was clean, not because the ad was loud.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What does a commercial photoshoot cost in Dehradun?",
                a: "A basic 20-SKU e-commerce catalogue starts around ₹20,000 at a Dehradun studio. Regional studios typically price 30-50% below Delhi or Bangalore for equivalent quality. Complex work — glass, jewellery, campaigns — is quoted per project.",
              },
              {
                q: "How do I verify a photographer's portfolio is real?",
                a: "Ask for the last 20 delivered images from the past six months in your category, not the five curated ones. Consistency across one client's catalogue is the tell — repeating quality over 30 SKUs is far harder than one beautiful hero frame.",
              },
              {
                q: "Should I ship products to a Delhi studio or shoot locally?",
                a: "Local wins on logistics: no courier risk to your stock, reshoots are a short drive, and you can attend the shoot. The exception is when your category needs specialised gear the local studio doesn't hold — ask what would be rented for your job and whether it's inside the quote.",
              },
              {
                q: "What should be included in a photography quote?",
                a: "Day rate, final retouched images per SKU, styling and props, retouching rounds, file formats and sizes, delivery deadline in working days, and usage rights. Anything left verbal tends to become a paid extra later.",
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
            <h3 className="text-2xl font-serif text-white mb-4">Run the Checklist on Us</h3>
            <p className="text-white/70 mb-4">
              Ask the six questions. See the last 20 delivered files. Meet the retoucher. If we clear the list, book a catalogue or campaign shoot with a studio that answers in writing — 30-50% below Delhi pricing.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book a Commercial Photographer in Dehradun <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}