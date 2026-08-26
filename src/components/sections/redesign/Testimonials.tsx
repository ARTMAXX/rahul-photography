"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import LazyVideo from "@/components/ui/LazyVideo";

const testimonials = [
  // ── PRODUCT — LOCAL ──
  {
    text: "Bhai Rahul ne hamare copper bottles ko itna sundar banaya ki Mussoorie ki dukaan mein baith ke photos dekh ke hi log order kar rahe hain. Sales almost double ho gayi.",
    name: "Ankit Rawat",
    role: "Founder, Himalayan Craft Co., Mussoorie",
  },
  {
    text: "We sent Rahul our woolen shawls and he photographed them in a way that you can almost feel the warmth through the screen. My nani was impressed — that says everything.",
    name: "Deepa Semwal",
    role: "CEO, Pahadi Woolens, Tehri",
  },
  {
    text: "One thing about Rahul — he actually listens. I said no filters, natural colors. He delivered exactly that. Turmeric looks turmeric. Chili looks chili. Simple.",
    name: "Ravi Jugran",
    role: "Founder, Uttarakhand Spice Club, Haridwar",
  },
  {
    text: "Rahul shot our handicraft products in our Bhimtal workshop. Natural light, earthy tones — he captured the soul of the craft. Our Etsy store took off after the new photos went up.",
    name: "Lata Tamta",
    role: "Artisan, Bhimtal Handicrafts",
  },

  // ── FOOD & BEVERAGE ──
  {
    text: "Those misty morning shots with steaming coffee cups from our Landour cafe — Rahul posted them and people started driving up from Dehradun just for the vibes.",
    name: "Meera Bhatt",
    role: "Owner, Char Dukan Cafe, Landour",
  },
  {
    text: "I told Rahul \"make my sourdough look expensive\" and he did exactly that. Our Zomato orders visibly went up within the first month of the new photos.",
    name: "Shruti Dobhal",
    role: "Owner, The Flour Shop, Rishikesh",
  },
  {
    text: "Pizza ka photo acha aana chahiye, that's it. Rahul made our cheese pulls and crust textures look so good that customers started ordering the dishes they saw on Instagram. Bas itna hi.",
    name: "Nikhil Saini",
    role: "Owner, Pizza Town, Dehradun",
  },
  {
    text: "Connaught Place mein itne saare restaurants hain, humara photos kyun dikhe? That was my worry. Rahul solved it. Our Swiggy ratings went from 4.1 to 4.6.",
    name: "Amit Bhardwaj",
    role: "Owner, Street Food Stories, Delhi",
  },

  // ── PRODUCT — STUDIO / INTERNATIONAL ──
  {
    text: "He made our headphones look way more premium than the price tag. Metallic reflections, shadow work — every detail was intentional. The new imagery paid for itself in weeks.",
    name: "Rohan Gupta",
    role: "Head of Marketing, AudioTech",
  },
  {
    text: "Our serum bottles finally look as premium as the formula inside. Rahul understands glass, liquid, and light like nobody else. The campaign lift was immediate.",
    name: "Meera Joshi",
    role: "Founder, Bloom Skincare",
  },
  {
    text: "500+ images. Same consistency across every single one. Our return rate dropped because customers finally see what they're buying. That's the ROI right there.",
    name: "James Mitchell",
    role: "E-commerce Owner, USA",
  },
  {
    text: "Needed high-end retouching for a luxury watch campaign. Rahul nailed the metallic reflections perfectly. On par with studios I've worked with in London.",
    name: "Oliver Barnes",
    role: "Creative Director, UK",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* ── Cinematic video backdrop (BTS footage playing behind quotes) ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <LazyVideo
          src="/opt/cinematic-assets/bts-watch.mp4"
          poster="/opt/cinematic-assets/bts-watch-poster.webp"
          className="w-full h-full object-cover opacity-30 scale-105"
          decorative
        />
        {/* Cinematic grade: darken + silver tint so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/60 to-[#070707]/95" />
        <div className="absolute inset-0 bg-[#070707]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#e83b2c]/5 mix-blend-screen" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(7,7,7,0.85) 100%)" }} />
      </div>

      {/* Fine grain strip for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 mx-auto px-6 max-w-[1800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest backdrop-blur-sm" style={{ fontFamily: "Outfit, system-ui" }}>
              Testimonials
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mt-5 text-white text-center drop-shadow-2xl">
            What they <span className="text-[#e83b2c]">said</span>
          </h2>
          <p className="text-center mt-5 text-white/40 text-sm" style={{ fontFamily: "Outfit, system-ui" }}>
            Words from clients across India and abroad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent)] max-h-[740px] overflow-hidden justify-items-center">
          <TestimonialsColumn testimonials={firstColumn} duration={30} startIndex={0} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} startIndex={4} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={32} startIndex={8} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
