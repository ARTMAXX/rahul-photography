"use client";
import { motion } from "motion/react";

/* ════════════════════════════════════════════════════════════════════
   CinematicCTA – "Bring your stories to life" emotional band
   BTS studio footage as a visual anchor behind the call to action
   ════════════════════════════════════════════════════════════════════ */

const WHATSAPP_NUMBER = "917078939475";
const EMAIL = "rahulchandaphotography@gmail.com";

export default function CinematicCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Studio footage anchor */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25"
          src="/cinematic-assets/photographer-studio.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#070707]/60 to-[#070707]" />
        <div className="absolute inset-0 bg-[#ffffff]/[0.04] mix-blend-screen" />
        {/* Solid bottom edge so the next section (contact video) can't bleed up */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#070707]" />
      </div>

      {/* Copper streak accents */}
      <div className="absolute left-1/2 top-0 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8c1c13]/50 to-transparent" />
      <div className="absolute left-1/2 bottom-0 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8c1c13]/30 to-transparent" />

      <div className="relative z-10 mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Director's-cue framing */}
          <div className="inline-flex items-center gap-3 border border-[#e83b2c]/20 bg-black/30 backdrop-blur px-5 py-2 rounded-full text-white/60 text-xs uppercase tracking-[0.3em]">
            <span className="text-[#e83b2c]">●</span> Ready when you are
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-serif tracking-tight text-white leading-[1.05]">
            Have a product
            <br />
            <span className="text-[#e83b2c] italic">worth showing?</span>
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-white/45 text-sm md:text-base leading-relaxed" style={{ fontFamily: "Outfit, system-ui" }}>
            Tell me about your product and I&apos;ll show you what it can look like —
            commercial photography and visual content, shot, graded and retouched so it
            finally looks <em className="not-italic text-[#e83b2c]">worth choosing</em>.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}?subject=Shoot%20Enquiry`}
              className="group inline-flex items-center gap-2 bg-[#e83b2c] text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full hover:bg-[#f0523f] transition-colors shadow-[0_10px_40px_-10px_rgba(232,59,44,0.5)]"
            >
              Start a project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi Rahul, I have a product worth showing. Let's talk."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#e83b2c]/40 text-white px-8 py-4 rounded-full text-sm md:text-base font-medium backdrop-blur hover:bg-[#e83b2c]/10 transition-colors"
            >
              Chat with Rahul
            </a>
          </div>

          <p className="mt-10 text-white/25 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "Outfit, system-ui" }}>
            Typically replies within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
