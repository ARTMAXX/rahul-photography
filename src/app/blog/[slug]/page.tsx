import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CinematicFooter } from "@/components/ui/motion-footer";

const posts = [
  {
    slug: "preparing-for-a-product-shoot",
    title: "How to prepare for a commercial product photoshoot",
    excerpt:
      "A practical checklist for brands — from product prep and props to timelines and usage rights — so your shoot day runs without friction.",
    tag: "Guides",
    date: "July 2026",
    read: "6 min",
    body: [
      "A great commercial photoshoot is won before the shutter is pressed. Here is the checklist I walk brands through ahead of every product day.",
      "First, send clean products. Wipe fingerprints, remove packaging and price tags, and include every SKU, colorway, and size you want on camera. Minor imperfections can be retouched, but broken or scuffed goods cannot always be saved.",
      "Second, gather props with intent. The right background, textured surface, or supporting object can tell your story — but too many props compete with the product. When in doubt, send options and we decide together during discovery.",
      "Third, talk timelines and usage early. Decide before the shoot where the images will live: e-commerce, print, social, or a campaign. This determines formats, retouching depth, and licensing terms, and it avoids surprises at delivery.",
      "Finally, trust the process. A focused shoot day — with clear references and decisions made in advance — is the fastest way to imagery that sells.",
    ],
  },
  {
    slug: "why-beverage-splash-photography-is-hard",
    title: "Why beverage splash photography is harder than it looks",
    excerpt:
      "Timing, viscosity, lighting, and a thousand frames for one perfect moment — what actually goes into that hero splash shot.",
    tag: "Behind the scenes",
    date: "June 2026",
    read: "5 min",
    body: [
      "That single frozen splash — the crown of liquid, the droplets suspended mid-air — is one of the most technically demanding images in commercial photography.",
      "Timing is the obvious challenge. A splash forms, peaks, and collapses in under a tenth of a second. We use high-speed trigger systems, but even then, the window for the perfect crown shape is just a few frames out of every hundred.",
      "Viscosity is the hidden variable. Water, soda, and syrups all behave differently. Thicker liquids hold their shape longer but can look heavy; thinner liquids splash beautifully but collapse fast. The viscosity is tuned per shot, sometimes by blending liquids to get the exact feel.",
      "Lighting makes or breaks the frame. A backlit splash reads as crystal-clear droplets; a hard side light reads as drama. We build the lighting first, then trigger the splash to dance within it.",
      "And then there's the cleanup — dozens of test splashes, wiped surfaces, and careful styling before the hero frames are captured. The result looks effortless precisely because none of it is.",
    ],
  },
  {
    slug: "lighting-patterns-for-product-photography",
    title: "Three lighting patterns every brand shoot should know",
    excerpt:
      "A short field guide to key light, rim light, and negative fill — and how each changes the mood of a product frame.",
    tag: "Technique",
    date: "May 2026",
    read: "4 min",
    body: [
      "Master three lighting patterns and you can build almost any product mood. Here's how I use each one.",
      "Key light is your main light — it establishes the product's form and texture. A large, soft source wraps the subject gently for a premium, approachable look; a small, hard source carves dramatic highlights that scream luxury.",
      "Rim light separates the product from the background. Placed behind and to the side, it draws a bright edge along the silhouette — perfect for dark bottles, matte objects, or any time the product needs to pop off the frame.",
      "Negative fill is the pattern most people forget: subtracting light rather than adding it. Black flags and panels deepen shadows, add contrast, and give an image that expensive, editorial weight.",
      "The craft is in the balance. Start with a key, decide what the rim must reveal, then shape the shadows with negative fill. Three tools, infinite moods.",
    ],
  },
  {
    slug: "food-styling-for-menus",
    title: "The art of food styling for menus",
    excerpt:
      "Learn how prop choice, steam, and sauce placement make dishes look as good on camera as they taste at the table.",
    tag: "Guides",
    date: "May 2026",
    read: "7 min",
    body: [
      "Food photography is 30% camera and 70% styling. The difference between a menu that looks average and one that sells comes down to a handful of styling decisions made before the shutter.",
      "Choose props that serve the dish, not fight it. A rustic ceramic bowl suits a homely curry; a sleek black plate suits a fine-dining plate-up. Textures matter — linen, wood, and marble each change the story the frame tells.",
      "Steam is your secret weapon. A few carefully placed wisps of steam — captured with backlight — make food feel hot, fresh, and alive. The trick is controlling it so it reads clearly without fogging the whole frame.",
      "Sauce placement is where most dishes are won or lost. A precise swoosh or a deliberate drizzle photographs far better than a messy pour. We style, shoot, adjust, and repeat until every element is intentional.",
    ],
  },
  {
    slug: "footwear-photography-angles",
    title: "Shooting footwear: angles that sell",
    excerpt:
      "From the three-quarter hero to the sole detail — which footwear angles actually move units in e-commerce.",
    tag: "Technique",
    date: "April 2026",
    read: "6 min",
    body: [
      "Footwear is one of the most angle-sensitive products in e-commerce. Get the hero angle right and the shoe looks sculptural; get it wrong and it looks like a floppy sock on a table.",
      "The three-quarter view is the classic hero for a reason. It shows the silhouette, the toebox profile, and the side panel in one frame — everything a shopper needs to judge the shape.",
      "Detail shots earn trust. The sole tread, the stitching, the materials where the upper meets the midsole — these close-ups answer the questions that returns departments dread.",
      "Consistency matters more than cleverness. When every colorway sits at the same angle with the same lighting, the catalog reads as one confident collection rather than twelve random photos.",
    ],
  },
  {
    slug: "luxury-watch-campaign",
    title: "Behind the scenes: a luxury watch campaign",
    excerpt:
      "Glass, steel, and controlled reflections — a step-by-step look at lighting a hero product with serious precision.",
    tag: "Behind the scenes",
    date: "April 2026",
    read: "8 min",
    body: [
      "A luxury watch is the most demanding product I photograph. Every polished surface is a mirror waiting to catch the wrong thing — and the wrong reflection is the fastest way to kill a frame.",
      "The lightbox approach comes first: a soft, controlled key light large enough to wrap the case, so the metal reads as smoothly machined rather than harshly specular.",
      "Reflection cards are the real craft. Small white and black cards are positioned centimeter by centimeter around the watch to shape what appears in the bezel and the crystal. It is slow, deliberate work — but it is how steel becomes cinematic.",
      "The final frames are assembled from passes: one for the dial, one for the case, one for the hands. Blending them in retouching gives a perfect result that a single exposure could never deliver.",
    ],
  },
  {
    slug: "beverage-photography-glass",
    title: "Glass, liquid, and light: beverage photography",
    excerpt:
      "How to shoot glass bottles and liquids so they look crystal-clear, premium, and impossible to scroll past.",
    tag: "Technique",
    date: "March 2026",
    read: "5 min",
    body: [
      "Glass bottles are beautiful and infuriating. Every reflection and every smudge shows up at ten times the intensity you expect. Here is how I keep them looking crystal-clear.",
      "Backlight is non-negotiable. Light from behind the bottle makes the liquid glow and the edges of the glass read as clean lines, while the front light is kept soft to avoid hot spots.",
      "Glycerin and water mixtures control the condensation story. Real water evaporates and runs unpredictably; a glycerin mix holds perfect beads of 'condensation' exactly where you want them.",
      "Finally, shoot the bottle empty and fill the liquid in compositing if you need maximum clarity — or shoot it full with a dark background and let the glass do the talking. Both look premium; the choice depends on the brand's mood.",
    ],
  },
  {
    slug: "color-science-ecommerce",
    title: "Color science for e-commerce photography",
    excerpt:
      "Why consistent color matters more than gear — and how to make sure the image you ship matches the product you sell.",
    tag: "Guides",
    date: "March 2026",
    read: "6 min",
    body: [
      "Color consistency is the silent killer of e-commerce photography. A product photographed in two different batches that looks like two different products destroys trust — and drives returns.",
      "It starts with a color target in every setup. Shooting a calibrated reference card in the first frame of each batch gives retouching a fixed anchor to grade everything against.",
      "Lighting must be repeatable. Note the exact power, modifiers, and positions of every light — the same setup in two sessions will drift subtly, and those drifts are what compound into mismatch.",
      "The final piece is a review workflow: every delivered batch is compared against the physical product under standard light before it ships. It is unglamorous, but it is what separates a professional catalog from a random pile of photos.",
    ],
  },
  {
    slug: "dark-vs-white-backgrounds",
    title: "Dark backgrounds vs white: choosing the right look",
    excerpt:
      "A practical guide to when your product belongs on black glass and when it belongs on pure white.",
    tag: "Technique",
    date: "February 2026",
    read: "5 min",
    body: [
      "The background you choose says more about your brand than almost any other single decision. Here is the framework I use.",
      "White backgrounds are for clarity and commerce. They dominate marketplaces because they are neutral, fast-loading, and let the product be the only subject. If your imagery lives on Amazon or a catalog grid, white wins.",
      "Dark backgrounds are for emotion and premium positioning. Black glass, deep charcoal, and charcoal gradients make products feel expensive — the darkness absorbs the world and focuses every highlight on the object.",
      "The rule of thumb: match the background to where the image lives. Marketplace grids want white; brand campaigns, social, and hero imagery want dark. Many of my clients shoot both and use each where it performs.",
    ],
  },
  {
    slug: "retouching-101",
    title: "Retouching 101: what happens after the shoot",
    excerpt:
      "From raw files to finals — the retouching pipeline that turns a good frame into a flawless deliverable.",
    tag: "Guides",
    date: "February 2026",
    read: "7 min",
    body: [
      "The shoot is only half the job. The pipeline that turns raw frames into flawless deliverables is where the polish actually happens.",
      "First comes culling — selecting the strongest frames from hundreds. Every select is judged on focus, composition, and whether the product story is complete.",
      "Then global grading: white balance, exposure, and color consistency across the entire batch so every image in the set feels like one coherent collection.",
      "Detail retouching follows — dust, reflections, seams, and any imperfections that draw the eye away from the product. The goal is invisible: viewers should never think 'nice retouching,' only 'nice product.'",
      "Finally, format delivery: optimized files for web, high-res for print, and a naming structure your team can actually find things in.",
    ],
  },
  {
    slug: "how-to-brief-a-photographer",
    title: "How to brief a photographer (and get better results)",
    excerpt:
      "References, mood, usage, and budget — the five things every good brief contains before the camera ever comes out.",
    tag: "Guides",
    date: "January 2026",
    read: "4 min",
    body: [
      "A good brief is the cheapest upgrade to your photos. You do not need to be a photographer to write one — you need to answer five questions.",
      "What is the product, and what is the hero? Name the SKUs that matter most and the one thing you want viewers to feel first.",
      "Who is this for? E-commerce buyers, luxury shoppers, and restaurant-goers all respond to different visual languages.",
      "Where will the images live? Marketplace, website, social, print — each has format and composition implications.",
      "What mood and references do you love? Three to five reference images communicate more than a paragraph of adjectives.",
      "And the practicals: timeline, usage rights, and budget range. With those five answers, any photographer can hit the ground running — and you will get better work for the same money.",
    ],
  },
  {
    slug: "campaign-photography-process",
    title: "Campaign photography: from concept to delivery",
    excerpt:
      "Discovery, production, and delivery — how a full-scale campaign shoot comes together from first call to final image.",
    tag: "Behind the scenes",
    date: "January 2026",
    read: "8 min",
    body: [
      "A campaign is a different beast from a single product shoot. It is a story told across many frames, and every one of them has to feel like part of the same world.",
      "It starts with discovery: the brand's message, the season, the references, and the deliverables list. From that I build a shot list — a map of every frame the campaign needs, in order of priority.",
      "Production is about momentum. A tight shot list, prepped products, and a clear order of operations mean we spend the day making images, not making decisions.",
      "Delivery is where campaigns are won. Consistent color across every frame, organized files, and a complete set of finals — because a campaign only works when the whole collection hangs together.",
    ],
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? post.title : "Blog",
    description: post ? post.excerpt : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <section className="relative w-full px-4 md:px-12 pt-44 pb-24">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-[#e83b2c] transition-colors"
            data-cursor="pointer"
          >
            <span>←</span> Blog
          </Link>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 mt-10">
            <span className="text-[#e83b2c]">{post.tag}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read} read</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-white mt-6">
            {post.title}
          </h1>
          <p className="text-white/50 text-lg mt-6 leading-relaxed italic">
            {post.excerpt}
          </p>

          <div className="mt-12 space-y-6">
            {post.body.map((p, i) => (
              <p key={i} className="text-white/70 leading-relaxed text-[16px]">
                {p}
              </p>
            ))}
          </div>

          <div className="border-t border-white/10 mt-16 pt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#e83b2c] hover:text-[#f0523f] transition-colors"
              data-cursor="pointer"
            >
              Need a shoot like this? Let&apos;s talk <span>→</span>
            </a>
          </div>
        </div>
      </section>
      <CinematicFooter />
    </main>
  );
}
