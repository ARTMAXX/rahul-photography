"use client";

import React from "react";

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-32 bg-[#070707] text-[#f0f0f0]">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider text-[#e83b2c]">
            6+
          </p>
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
          >
            CREATIVE
            <br />
            PHOTOGRAPHER
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px] text-white/30">
            RAHUL CHANDA
          </p>
          <p className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px] text-white/30">
            RAHUL CHANDA
          </p>
        </div>

        <div className="md:mt-40 mt-16">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base text-white/60">
            I&apos;M AN EXPERIENCED COMMERCIAL PRODUCT PHOTOGRAPHER,
            <br />
            WHO CREATES MEMORABLE VISUAL EXPERIENCES FOR
            <br />
            BRANDS OF ALL SIZES
          </p>
        </div>
      </div>

      {/* Grid pattern background - Light mode */}
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Grid pattern background - Dark mode */}
      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}