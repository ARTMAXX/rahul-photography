"use client";

import { motion } from "motion/react";

/* "¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½
   ClientProblem  —  "YOUR PRODUCT IS GOOD. DOES IT LOOK GOOD ENOUGH?"
   The desire/relevance beat: name the client's real pain in big type,
   then offer the way out.
   "¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½ */

export default function ClientProblem() {
  return (
    <section className="relative w-full py-28 md:py-44 px-6 md:px-12 overflow-hidden bg-[#070707]">
      {/* Center copper glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1500px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          The Problem
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-8 text-[clamp(2.2rem,6.5vw,6rem)] font-serif leading-[1.02] tracking-[-0.02em] text-white"
        >
          Your product is good.
          <br />
          <span className="text-[#e83b2c] italic">
            Does it look good enough?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-8 md:mt-10 mx-auto max-w-[52ch] text-white/55 text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "Outfit, system-ui" }}
        >
          Online, nobody tastes, touches or tries your product. They look at a
          photo  —  and in about a second they decide whether it&apos;s worth their
          money. If your visuals look ordinary, you lose the sale before the
          comparison even starts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#f0523f] transition-colors text-sm uppercase tracking-[0.2em]"
            style={{ fontFamily: "Outfit, system-ui" }}
          >
            See how good products get photographed
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}