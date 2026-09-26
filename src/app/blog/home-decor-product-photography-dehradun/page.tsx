import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Decor Product Photography in Dehradun",
  description:
    "How handcrafted home decor is actually shot for e-commerce — shot list, styling, marketplace specs, vertical reels and realistic Dehradun studio pricing.",
  alternates: { canonical: "/blog/home-decor-product-photography-dehradun" },
  keywords:
    "home decor product photography, product photoshoot Dehradun, handicraft product photography India, interior decor photography, decor catalogue shoot",
  openGraph: {
    title: "Home Decor Product Photography in Dehradun (How It's Actually Shot)",
    description:
      "Shot lists, styling rules, marketplace specs, vertical reels and real pricing for handcrafted home decor brands. Written from a working Dehradun studio.",
    url: absoluteUrl("/blog/home-decor-product-photography-dehradun"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Home Decor Product Photography in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Decor Product Photography in Dehradun",
    description:
      "The shot list, the styling rules and the real price for shooting handcrafted decor for e-commerce. From a working Dehradun studio.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const homeDecorSchema = {
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
          "name": "Home Decor Product Photography in Dehradun",
          "item": absoluteUrl("/blog/home-decor-product-photography-dehradun"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "headline": "Home Decor Product Photography in Dehradun (How It's Actually Shot)",
      "description":
        "A working Dehradun studio's guide to shooting handcrafted home decor for e-commerce — shot lists, styling, marketplace compliance, vertical reels and real pricing.",
      image: absoluteUrl(siteConfig.ogImagePath),
      datePublished: "2026-09-25",
      dateModified: "2026-09-25",
      publisher: { "@type": "Organization", "name": "Rahul Chanda Photography" },
      author: {
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
        {
          "@type": "Question",
          name: "How much does home decor product photography cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A styled 20-piece decor catalogue in a regional studio starts around Rs 35,000-50,000, including styling, props and one retouching round per image. Straight white-background packshots for 20 SKUs run cheaper, roughly Rs 18,000-25,000. Vertical social reels are usually quoted per clip, not per day.",
          },
        },
        {
          "@type": "Question",
          name: "Should decor products be shot on white background or in a styled room?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both, for different jobs. Marketplace listing pages require a clean white-background main image. Social, ads and brand pages need the styled room, because a vase floating on pure white tells a customer nothing about scale or how it looks on a shelf. Shoot the compliant frame first, then the styled frame from the same setup.",
          },
        },
        {
          "@type": "Question",
          name: "What image size do decor brands need for Amazon and Shopify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deliver 2000 pixels on the long edge at minimum, sRGB, with the product filling 85 percent of the frame and a pure white RGB 255 background for the main listing image. Keep the full resolution master layered, because both Amazon zoom and Shopify responsive breakpoints pull from the same source.",
          },
        },
        {
          "@type": "Question",
          name: "How many photos does a decor product need to sell online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Six to eight per SKU for a marketplace listing: one compliant white main image, three to four styled angles including a detail close-up, one in-context room frame with a scale reference, and one vertical 9:16 frame for social. Below five, buyers ask questions you could have answered with a photograph.",
          },
        },
        {
          "@type": "Question",
          name: "Do handmade products need to be photographed perfectly straight-on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and over-straightening them is a mistake. A perfectly squared, evenly lit frame of a hand-thrown mug reads as a factory item. Keep the natural asymmetry, correct the colour, and let the craft show, because buyers are paying for that irregularity.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a full studio, or can my home decor shoot be done on location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you have a room that can be cleared and a reliable surface, a light location shoot works and saves the set-build cost. For a full catalogue you still want controlled light and a sweep, because inconsistent background colour across 20 SKUs is what actually gets a listing rejected.",
          },
        },
      ],
    },
  ],
};

export default function HomeDecorProductPhotographyDehradunBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeDecorSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">Service Guide</span>
          <h1 className="h-display">Home Decor Product Photography in Dehradun</h1>
          <p className="t-lede mt-6 mb-8">
            Handcrafted decor is the category where pretty pictures quietly fail to sell. A lamp shot too
            small looks cheap. A vase shot on pure white tells a buyer nothing about scale. Here is the
            shot list, the styling rules and the real number — written from the studio floor, not an
            agency deck.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>September 25, 2026</span>
            <span>&middot;</span>
            <span>12 min read</span>
            <span>&middot;</span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "You need two frames per SKU, not one: a compliant white-background listing image and a styled frame. One can carry a marketplace, neither can carry a brand.",
                "Scale is the whole game in decor. If a customer cannot tell how big the vase is from the photo, the listing gets a return or a low rating.",
                "Handcrafted means handmade. Shoot the variation — glaze streaks, grain, minor asymmetry — or you ship a product that looks like a different batch.",
                "Vertical reels are a separate deliverable, not a free extra. A 9:16 clip of a lamp rotating is a different setup from a 16:9 still.",
                "A styled 20-piece decor catalogue in a regional studio runs ₹35,000-50,000. Straight packshots for 20 SKUs run ₹18,000-25,000.",
              ].map((point, i) => (
                <li
                  key={i}
                  className="text-white/70 text-sm leading-relaxed pl-2 border-l border-white/10"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Decor breaks the rules that work for bottles and shoes</h2>
          <p className="t-body mb-4">
            Most product photography advice assumes the product is small, rigid and roughly rectangular. A
            serum bottle on a seamless white sweep. A sneaker on a clear acrylic riser. Shoot that way and
            the advice is correct.
          </p>
          <p className="t-body mb-4">
            Home decor throws out every assumption. A ceramic vase is tall, hollow and translucent at the
            rim, and its silhouette is read by the eye as a size. A pendant lamp is a light source —
            photograph it unlit and it looks like a plastic ornament. A hand-thrown planter has a lip, a
            foot, and a glaze that runs matte to gloss depending on which way it catches the key. A
            rattan pendant is a lattice, and lattices are brutal: every wire crossing is a specular
            highlight waiting to blow out.
          </p>
          <p className="t-body mb-4">
            Then there is the buying psychology. Nobody wakes up wanting a vase. They wake up wanting a
            shelf that looks less empty. The photograph is doing emotional work as well as cataloguing
            work, and the two need completely different lighting.
          </p>
          <p className="t-body mb-4">
            This is the guide we hand decor clients before the first shoot. Five rules, the shot list we
            actually run, and what it costs in a regional studio rather than a Mumbai one.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">1. Two frames per SKU, and they are not the same shoot</h2>
          <p className="t-body mb-4">
            The most common mistake decor brands make is treating the marketplace listing and the social
            grid as the same job. They are not, and optimising one for the other breaks the other.
          </p>
          <p className="t-body mb-4">
            The marketplace needs a compliant frame: pure white background (RGB 255, not off-white), the
            product filling roughly 85% of the frame, nothing crowding the edges, 2000px on the long edge,
            delivered sRGB. That image will never win an award and it never needs to. Its job is to stay
            legible while someone compares nine listings in a grid at phone size.
          </p>
          <p className="t-body mb-4">
            The styled frame does the selling. Same vase, on a travertine plinth, a rattan throw entering
            frame at the top, a hard afternoon shadow raking across the surface. That is the image that
            makes a thirty-year-old stop scrolling — and it is also the image that gets you a save, a
            share, and a DM asking where you bought it.
          </p>
          <p className="t-body mb-4">
            Shoot both from the same product prep on the same day so the colour is identical. A customer
            who sees a terracotta planter in two different oranges concludes one of them is lying.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">2. Give the buyer a sense of scale, or accept the returns</h2>
          <p className="t-body mb-4">
            Decor is bought against a mental picture of a room. If your listing image is a vase cropped to
            the neck against white, a customer measuring against their own shelf ends up with a 30cm piece
            on a 90cm console.
          </p>
          <p className="t-body mb-4">Three fixes, in order of cost:</p>
          <ul className="text-white/70 space-y-2 mb-6 text-sm">
            <li>&mdash; Include a styled frame with a known object for scale: a book, a hand, a standard cup, a common console table. A single hand in frame is the most efficient scale reference humans have ever used.</li>
            <li>&mdash; Put the dimensions in the frame itself, typeset small in a corner. Not in the listing title, where every platform truncates it.</li>
            <li>&mdash; Never crop a tall piece at the top. The one thing a vase photo must show is the whole silhouette, rim included.</li>
          </ul>
          <p className="t-body mb-4">
            This is also the difference between a 3% and a 9% return rate on fragile goods. Returns on
            handcrafted decor are expensive for you &mdash; the piece is often unsellable once it ships back.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">3. Light lamps like light sources</h2>
          <p className="t-body mb-4">
            A pendant lamp photographed with a standard two-light product setup comes out looking like a
            plastic shell. You have lit the object but not the lamp. The customer wants two things: what
            colour does it glow, and how bright is it over a dining table.
          </p>
          <p className="t-body mb-4">
            That means a dedicated frame with the lamp actually on &mdash; practicals inside the shade, a
            flagged-off strobe at low power through the diffuser, a longer shutter to let the glow sit on
            the surface. Shoot the shade detail separately with the same key you used for the rest of the
            catalogue, so the range still looks like a range.
          </p>
          <p className="t-body mb-4">
            Handpainted shades are their own problem: the paint is matte, the light underneath is a bright
            specular, and the two fight each other in every exposure. Flag the top, light from below, and
            watch your histogram &mdash; clipping the artwork is the fastest way to make three thousand
            rupees of craft look like three hundred of plastic.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">4. Handcrafted means shoot the variation</h2>
          <p className="t-body mb-4">
            A perfect image of a hand-thrown mug is often a small lie. Real work has a throwing line, a
            slightly uneven rim, a glaze that thins across the curve, a knot in the wood. Perfectly
            retouching those away does not upgrade the product &mdash; it makes the delivered piece look
            like a different batch, and it generates the review that says &ldquo;not as pictured.&rdquo;
          </p>
          <p className="t-body mb-4">
            Retouch dust, fingerprints, chips from handling, colour cast and stray fibres. Leave the
            grain, the throwing line, the glaze break and the natural asymmetry. If your brand promise is
            artisan, the pixels should prove it.
          </p>
          <p className="t-body mb-4">
            Practical note: shoot every piece individually even in a &ldquo;set.&rdquo; Handcraft is not
            repeatable, and a two-piece set is really two products with two price tags. Catalogue them
            separately, then photograph them together for the styled frames.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">5. Styling is half the work and half the quote</h2>
          <p className="t-body mb-4">
            Every styled frame in a good decor catalogue contains two or three props that are not the
            product: a plinth, a throw, a book, a sprig. Those props cost money to source, money to clean
            between takes, and hours to move out of the way when the next piece comes in.
          </p>
          <p className="t-body mb-4">
            Ask who supplies them. If the answer is &ldquo;you bring the set,&rdquo; your day rate has just
            tripled in hidden time. A studio with a shelf of plinths, risers, backdrops and surface
            samples is not charging you for them once &mdash; it is charging you once and reusing them
            across thirty sets.
          </p>
          <p className="t-body mb-4">
            The same logic applies to the room. Set builds are the biggest line item that sneaks onto a
            decor invoice, and they are the first thing cut when a client tries to save money. The result
            is a catalogue of products floating in a void &mdash; technically compliant, commercially dead.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">The shot list we actually run for 20 SKUs</h2>
          <p className="t-body mb-6">
            This is a real one-day schedule. If a studio quotes you a day for 20 SKUs and cannot tell you
            roughly how the hours break down, they are going to rush the styled frames.
          </p>
          <div className="space-y-3">
            {[
              { time: "0:00 - 0:45", what: "Intake and prep. Products checked against the SKU list, dusted, fingerprints removed, hardware polished, cords and chains untangled. Nothing is shot before this." },
              { time: "0:45 - 1:15", what: "Light build and white-balance lock. Tethered, calibrated to the first product so the whole catalogue shares one colour reference." },
              { time: "1:15 - 4:30", what: "Compliant white frames, 3 to 4 angles per SKU. This is the block that never gets cut, because it is what the marketplace needs to list at all." },
              { time: "4:30 - 7:30", what: "Styled frames, 2 per SKU, on the plinth set and the room corner. Slowest block of the day, and the one that gets squeezed when a client watches the clock." },
              { time: "7:30 - 8:30", what: "Detail frames: glaze break, weave, joinery, texture macro. One per SKU, used as the pinch-zoom frame on the listing." },
              { time: "8:30 - 9:30", what: "Vertical 9:16 capture for reels - slow turntable, hand entering frame, lamp switched on. Captured at 4K for a clean crop." },
              { time: "9:30 - 10:00", what: "Backup, tethered ingest, contact sheet sent before teardown. You see the day while the set is still standing." },
            ].map((row) => (
              <div key={row.time} className="border border-white/10 p-5 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <span className="text-[#e83b2c] font-serif text-sm whitespace-nowrap sm:w-32 flex-shrink-0">
                  {row.time}
                </span>
                <p className="text-white/70 text-sm leading-relaxed">{row.what}</p>
              </div>
            ))}
          </div>
          <p className="t-body mt-6 mb-4">
            Retouching then runs about a day for 20 SKUs, and it is the part clients most often try to
            skip. A catalogue shot straight off camera looks muddy next to one that has been colour-matched
            across the range.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Vertical reels are a separate deliverable</h2>
          <p className="t-body mb-4">
            A 9:16 clip of a lamp rotating is not a crop of your 16:9 still. It is a different setup:
            motorised turntable, vertical frame, product centred, and enough headroom for the caption and
            the shop button to sit without covering the piece.
          </p>
          <p className="t-body mb-4">
            If your studio quotes reels by the day and bundles them with the stills, ask how many clips are
            included. The honest answer is usually four to six per day. Anything more is a repost of the
            same turntable, and buyers notice by the third scroll.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">What it actually costs in a regional studio</h2>
          <p className="t-body mb-6">
            Dehradun, Chandigarh, Jaipur, Indore and Lucknow studios run 30-50% below Mumbai and Delhi
            rates for equivalent work. The gap is not a discount &mdash; it is overhead. You are paying for
            the studio, not the city.
          </p>
          <div className="space-y-3">
            {[
              { tier: "Packshot only", detail: "20 SKUs, white background, 3 angles each, one retouching round", price: "₹18,000 - ₹25,000" },
              { tier: "Catalogue + styled", detail: "The above plus 2 styled frames and 1 detail macro per SKU, full styling and props included", price: "₹35,000 - ₹50,000" },
              { tier: "Catalogue + reels", detail: "Catalogue package plus 4-6 vertical 9:16 clips, graded for reels", price: "₹48,000 - ₹65,000" },
              { tier: "Launch campaign", detail: "Styled set build, hero campaign frames, 3-day block, 40+ SKUs", price: "₹1,20,000 +" },
            ].map((row) => (
              <div key={row.tier} className="border border-white/10 p-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                <div className="sm:w-48 flex-shrink-0">
                  <h3 className="font-serif text-white text-lg">{row.tier}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">{row.detail}</p>
                <span className="text-[#e83b2c] font-serif whitespace-nowrap">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="t-body mt-6 mb-4">
            What moves the number: material handling. Glass and metal take three times as long to light as
            a ceramic. A set build you do not already own adds a day. Retouching rounds beyond the first
            are charged per image, and they are the line item clients argue about hardest.
          </p>
          <p className="t-body mb-4">
            Get the day rate, the retouching rounds, the file formats, the delivery deadline in working
            days and the usage rights in writing before any advance. Anything left verbal becomes a paid
            extra later.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Before you book anyone, check these</h2>
          <div className="space-y-4">
            {[
              "Do you have a decor catalogue in it — actual sold products, shot the way you would shoot mine? A moody lifestyle reel is not a catalogue.",
              "Can you show me the last 20 delivered images in one client's range, not your five best? Consistency across 20 SKUs is the only real proof.",
              "What is your compliant-frame spec, in writing: background value, frame fill percentage, long-edge pixel count, colour space?",
              "How many styled frames per SKU, and who supplies the props and the set?",
              "Do you photograph lamps lit, or unlit?",
              "What retouching rounds are included, who does them, and how long is delivery after the shoot?",
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#e83b2c] font-serif flex-shrink-0">{idx + 1}.</span>
                <p className="text-white/70">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Full disclosure</h2>
          <p className="t-body mb-4">
            I run a product studio in Dehradun and yes, I would like you to book me. But decor is a
            category where a bad shoot is worse than no shoot &mdash; you burn the product budget twice,
            once on photography and once on the returns. If you take the rules above and someone else in
            town runs them properly, hire them. The clients who come back come back because the file was
            usable on day one, not because the ad was loud.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does home decor product photography cost in India?",
                a: "A styled 20-piece decor catalogue in a regional studio starts around ₹35,000-50,000, including styling, props and one retouching round per image. Straight white-background packshots for 20 SKUs run cheaper, roughly ₹18,000-25,000. Vertical social reels are usually quoted per clip, not per day.",
              },
              {
                q: "Should decor products be shot on white background or in a styled room?",
                a: "Both, for different jobs. Marketplace listing pages require a clean white-background main image. Social, ads and brand pages need the styled room, because a vase floating on pure white tells a customer nothing about scale or how it looks on a shelf. Shoot the compliant frame first, then the styled frame from the same setup.",
              },
              {
                q: "What image size do decor brands need for Amazon and Shopify?",
                a: "Deliver 2000 pixels on the long edge at minimum, sRGB, with the product filling 85 percent of the frame and a pure white RGB 255 background for the main listing image. Keep the full resolution master layered, because both Amazon zoom and Shopify responsive breakpoints pull from the same source.",
              },
              {
                q: "How many photos does a decor product need to sell online?",
                a: "Six to eight per SKU for a marketplace listing: one compliant white main image, three to four styled angles including a detail close-up, one in-context room frame with a scale reference, and one vertical 9:16 frame for social. Below five, buyers ask questions you could have answered with a photograph.",
              },
              {
                q: "Do handmade products need to be photographed perfectly straight-on?",
                a: "No, and over-straightening them is a mistake. A perfectly squared, evenly lit frame of a hand-thrown mug reads as a factory item. Keep the natural asymmetry, correct the colour, and let the craft show. Buyers are paying for the irregularity.",
              },
              {
                q: "Do I need a full studio, or can my home decor shoot be done on location?",
                a: "If you have a room that can be cleared and a reliable surface, a light location shoot works and saves the set-build cost. For a full catalogue you still want controlled light and a sweep — inconsistent background colour across 20 SKUs is what actually gets a listing rejected.",
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
            <h3 className="text-2xl font-serif text-white mb-4">Shoot Your Decor Range This Month</h3>
            <p className="text-white/70 mb-4">
              Send the SKU list and one reference image you like. We will come back with a shot list, a
              per-SKU estimate and a delivery date in writing &mdash; before any advance.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book a Product Photography Session <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}

