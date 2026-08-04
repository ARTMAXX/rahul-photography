"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLHeadingElement>(null);
  const aboutSubRef = useRef<HTMLParagraphElement>(null);
  const aboutVersionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ---------- Word wrapping helper (Luke's setupAboutSection) ----------
    const wrapWords = (el: HTMLElement | null) => {
      if (!el) return;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

      textNodes.forEach((node) => {
        const words = node.textContent?.split(/(\s+)/);
        if (!words) return;
        const frag = document.createDocumentFragment();
        words.forEach((w) => {
          if (/^\s+$/.test(w)) {
            frag.appendChild(document.createTextNode(w));
          } else if (w) {
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = w;
            frag.appendChild(span);
          }
        });
        node.parentNode?.replaceChild(frag, node);
      });
    };

    wrapWords(aboutTextRef.current);
    wrapWords(aboutVersionRef.current);

    // ---------- Collect all elements ----------
    const mainWords = gsap.utils.toArray(
      aboutTextRef.current?.querySelectorAll(".word") ?? []
    ) as HTMLElement[];
    const versionWords = gsap.utils.toArray(
      aboutVersionRef.current?.querySelectorAll(".word") ?? []
    ) as HTMLElement[];
    const photo = imageRef.current?.querySelector(
      ".about-photo"
    ) as HTMLElement | null;

    // ---------- Initial states (Luke's CSS defaults) ----------
    // Photo is VISIBLE from the start with full blur, so the user can see it
    // "blur in" from the hero transition (it enters view at top: 0 of section
    // which is right after the hero, at the same vertical level).
    gsap.set(mainWords, { opacity: 0, filter: "blur(8px)" });
    gsap.set(versionWords, { opacity: 0, filter: "blur(8px)" });
    gsap.set(aboutSubRef.current, { opacity: 0, filter: "blur(12px)" });
    if (photo) gsap.set(photo, { opacity: 1, filter: "blur(20px)" });

    // ---------- SINGLE TIMELINE: main text + photo (gradual, long scroll) ----------
    // Trigger on the SECTION (not the text) so the animation starts the moment
    // the section enters the viewport — the photo (at top: 0 of section) is
    // already at the bottom of the viewport, blurring in from the hero.
    // Range "top 100%" → "top 15%" = 85% of viewport ≈ 798px of scroll.
    // That's a long, gradual range so the photo blur and text reveal happen
    // over many frames (like Luke's flow).
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 15%",
        scrub: true,
      },
    });

    // Photo blur clear — takes the FULL timeline (1.0) so it clears gradually
    // over the entire 798px scroll range. Opacity stays 1 throughout so the
    // photo is always visible (just blurred), matching Luke's flow where the
    // photo is visible from the hero transition onward.
    if (photo) {
      tl.fromTo(
        photo,
        { opacity: 1, filter: "blur(20px)" },
        { opacity: 1, filter: "blur(0px)", ease: "none", duration: 1 },
        0
      );
    }

    // Main text words reveal staggered — starts at 0.5 of the timeline because
    // the H2 (at 45vh below section top) only enters the viewport around 53%
    // through the trigger range. Stagger 0.02, each word 0.2 → 14 words
    // finish at 0.5 + 0.28 + 0.2 = 0.98 of the timeline.
    mainWords.forEach((word, i) => {
      tl.to(
        word,
        { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.2 },
        0.5 + i * 0.02
      );
    });

    // Sub-text reveal (starts at 60% of timeline, finishes at 100%)
    tl.to(
      aboutSubRef.current,
      { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.4 },
      0.6
    );

    // ---------- V3.0 words reveal (separate trigger — V3.0 is at the
    //              bottom of the section and enters view much later) ----------
    versionWords.forEach((word) => {
      gsap.to(word, {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: word,
          start: "top 75%",
          end: "top 60%",
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full text-white min-h-screen"
      style={{ padding: "45vh 4rem 40vh" }}
    >
      {/* ---------- Text column (direct child of section, like Luke's) ---------- */}
      <div ref={textRef} className="relative z-20 w-full md:w-[55%]">
        {/* Wide heading ✦ words animate in via blur reveal */}
        <h2
          ref={aboutTextRef}
          className="text-3xl md:text-5xl font-serif leading-[1.45] tracking-[-0.01em] w-full text-balance"
        >
          As a{" "}
          <span className="italic font-bold">commercial photographer</span>, I
          craft tailor-made visual experiences, blending technical precision and{" "}
          <span className="italic font-bold">emotion</span>.
        </h2>

        {/* Sub-text (30% of section wide, indented 25% from section left) */}
        <p
          ref={aboutSubRef}
          className="text-sm md:text-base font-sans leading-[1.6] tracking-[-0.005em] w-full md:w-[55%] mt-[12vh] md:ml-[45%] text-neutral-300"
        >
          My name is Rahul Chanda. A high-end commercial product photographer
          based in Dehradun, I build high-impact visual identities that connect
          brands with their audience.
        </p>

        {/* INFO link (indented to match sub-text) */}
        <div className="mt-14 md:ml-[45%]">
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest font-bold hover:opacity-70 transition-opacity"
            data-cursor="pointer"
          >
            INFO
          </a>
        </div>
      </div>

      {/* V3.0 right-aligned (spans full section width, positioned at bottom-right
          overlapping with photo ✦ matches Luke's layout) */}
      <div
        ref={aboutVersionRef}
        className="absolute right-[32%] bottom-[22vh] z-20 text-3xl md:text-5xl font-serif leading-[1.45] tracking-[-0.01em] flex items-baseline justify-end gap-2"
      >
        <span className="inline-block">?</span>
        <span>✦ 2026</span>
      </div>

      {/* ---------- Photo (direct child of section, absolute right at top: 0 so it
                    enters the viewport right at the hero?about transition) ---------- */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 z-[5] w-[min(50vw,720px)]"
      >
        <Image
          src="/about me photo/1me.webp"
          alt="Rahul Chanda"
          width={3712}
          height={4608}
          quality={100}
          className="about-photo block w-full h-auto"
          style={{ borderRadius: "420px 0 0 420px" }}
          priority
        />
      </div>
    </section>
  );
}


