"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import LazyVideo from "@/components/ui/LazyVideo";

/* ════════════════════════════════════════════════════════════════════
   TheCraft – Behind-the-scenes "how the editing works" section
   Framed editing UI with live BTS footage + process steps
   ════════════════════════════════════════════════════════════════════ */

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Brief, references and art direction settle exactly how your product should feel — before a frame is shot.",
  },
  {
    num: "02",
    title: "Production",
    desc: "Every frame is lit deliberately — glass, liquid, metal and fabric each get their own treatment on set.",
  },
  {
    num: "03",
    title: "Post",
    desc: "The strongest angles are selected, colour-graded to your brand's palette, then retouched to the pixel.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Consistent, high-res finals in print and digital formats — with licensing and usage rights agreed upfront.",
  },
];

export default function TheCraft() {
  const frameRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#070707]" id="the-craft">
      {/* Ambient white glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#e83b2c]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-[#8c1c13]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: headline + steps ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c]/70 uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e83b2c] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e83b2c]" />
                </span>
                The Craft
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mt-6 text-white">
                Every frame, <span className="text-[#e83b2c] italic">made by hand.</span>
              </h2>

              <p className="mt-5 text-white/40 text-sm md:text-base leading-relaxed max-w-md" style={{ fontFamily: "Outfit, system-ui" }}>
                From the moment the shutter clicks to the final export, each image passes through a considered
                pipeline — the same one behind every campaign in the portfolio.
              </p>
            </motion.div>

            {/* Process steps */}
            <div className="mt-10 space-y-0 divide-y divide-white/[0.06]">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex gap-6 py-5 group"
                >
                  <span className="text-[#e83b2c] text-sm font-mono pt-0.5 tabular-nums">{step.num}</span>
                  <div>
                    <h3 className="text-white font-semibold tracking-tight text-base md:text-lg group-hover:text-[#ffffff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/35 text-sm mt-1 leading-relaxed" style={{ fontFamily: "Outfit, system-ui" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: framed editing UI with BTS video ── */}
          <motion.div
            ref={frameRef}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Glow behind frame */}
            <div className="absolute -inset-6 bg-[#ffffff]/[0.07] blur-3xl rounded-[40px] pointer-events-none" />

            {/* App-window frame */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 overflow-hidden shadow-2xl shadow-black/60 backdrop-blur-sm">
              {/* Window title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="h-3 w-3 rounded-full bg-[#e83b2c]/80" />
                <span className="h-3 w-3 rounded-full bg-[#ffffff]/80" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="ml-3 text-[11px] text-white/30 tracking-wide font-mono">final_edit_04.psd — retouch session</span>
                <span className="ml-auto text-[10px] text-white/25 font-mono tracking-widest uppercase border border-white/10 rounded-full px-2.5 py-0.5">Rec ●</span>
              </div>

              {/* Video area */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <LazyVideo
                  src="/opt/cinematic-assets/editing-video.mp4"
                  poster="/opt/cinematic-assets/editing-video-poster.webp"
                  className="w-full h-full object-cover"
                  alt="Behind-the-scenes retouching session in Photoshop"
                />
                {/* Screen-grade overlay so it reads as "the work" */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#070707]/70 via-transparent to-[#ffffff]/10 mix-blend-multiply" />
                <div className="absolute inset-0 border-[3px] border-white/[0.04] rounded-none" />

                {/* Retouch HUD chips */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  <span className="text-[10px] font-mono bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-[#e83b2c]/20 text-[#e83b2c]">HSL · +18</span>
                  <span className="text-[10px] font-mono bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/10 text-white/70">Mask · Layer 9</span>
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/10 text-white/50">
                  100% · sRGB
                </div>

                {/* Bottom timeline strip (film-reel detail) */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-black/70 backdrop-blur-md border-t border-white/[0.08] flex items-center px-4 gap-3 pointer-events-none">
                  <span className="text-[10px] text-white/40 font-mono shrink-0">00:00:12</span>
                  <div className="flex-1 h-[3px] rounded-full bg-white/10 relative">
                    <div className="absolute left-0 top-0 h-full w-[38%] bg-[#e83b2c]/80 rounded-full" />
                    <span className="absolute top-1/2 -translate-y-1/2 left-[38%] h-2.5 w-2.5 rounded-full bg-[#e83b2c]" />
                  </div>
                  <span className="text-[10px] text-white/40 font-mono shrink-0">00:00:32</span>
                </div>
              </div>
            </div>

            {/* Floating caption card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#0d0d0d]/95 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 shadow-xl shadow-black/50 flex items-center gap-4">
              <div className="text-[#e83b2c] text-2xl leading-none">✦</div>
              <div>
                <p className="text-white text-sm font-semibold tracking-tight">High-end retouching included</p>
                <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "Outfit, system-ui" }}>Every deliverable, pixel-perfect.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
