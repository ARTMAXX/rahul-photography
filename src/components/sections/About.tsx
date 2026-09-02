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
  const aboutTextRef = useRef<HTMLHeadingElement>(null);
  const aboutSubRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
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

    const mainWords = gsap.utils.toArray(
      aboutTextRef.current?.querySelectorAll(".word") ?? []
    ) as HTMLElement[];
    const photo = imageRef.current?.querySelector(
      ".about-photo"
    ) as HTMLElement | null;

    gsap.set(mainWords, { opacity: 0, filter: "blur(8px)" });
    gsap.set(aboutSubRef.current, { opacity: 0, filter: "blur(12px)" });
    if (photo) gsap.set(photo, { opacity: 1, filter: "blur(20px)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "top 15%",
        scrub: true,
      },
    });

    if (photo) {
      tl.fromTo(
        photo,
        { opacity: 1, filter: "blur(20px)" },
        { opacity: 1, filter: "blur(0px)", ease: "none", duration: 1 },
        0
      );
    }

    mainWords.forEach((word, i) => {
      tl.to(
        word,
        { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.2 },
        0.5 + i * 0.02
      );
    });

    tl.to(
      aboutSubRef.current,
      { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.4 },
      0.6
    );
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full text-white"
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[1200px] h-[1200px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(140,28,19,0.6) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-12 py-24 md:py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Text column — left 7/12 on desktop, full width on mobile */}
          <div className="md:col-span-7 order-2 md:order-1">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
              About
            </span>
            <h2
              ref={aboutTextRef}
              className="mt-4 md:mt-6 text-[clamp(1.875rem,4vw,3.5rem)] font-serif leading-[1.25] tracking-[-0.01em] text-balance text-white"
            >
              I don&apos;t just photograph products. I{" "}
              <span className="italic font-bold">make them worth choosing</span>{" "}
              — with technical precision and{" "}
              <span className="italic font-bold">emotion</span>.
            </h2>

            <p
              ref={aboutSubRef}
              className="mt-8 md:mt-10 text-base md:text-lg font-sans leading-[1.7] tracking-[-0.005em] text-white/70 max-w-[60ch]"
            >
              My name is Rahul Chanda. A commercial product photographer based
              in{" "}
              <a
                href="/dehradun"
                className="underline decoration-[#e83b2c]/40 underline-offset-4 hover:decoration-[#e83b2c] transition-colors text-white"
                data-cursor="pointer"
              >
                Dehradun
              </a>
              , I don&apos;t just photograph products — I light, style, and
              retouch every frame until the product looks like the obvious
              choice.
            </p>

            <div className="mt-10 md:mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors"
              >
                INFO
              </a>
              <span
                aria-hidden="true"
                className="text-white/20 text-xs"
              >
                © 2019 — 2026
              </span>
            </div>
          </div>

          {/* Photo column — right 5/12 on desktop, full width on mobile */}
          <div
            ref={imageRef}
            className="md:col-span-5 order-1 md:order-2"
          >
            <Image
              src="/opt/about-photo/rahul-chanda-portrait.webp"
              alt="Rahul Chanda, commercial product photographer from Dehradun, in his studio"
              width={1400}
              height={1738}
              quality={80}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="about-photo block w-full h-auto rounded-[20px] md:rounded-[20px] md:rounded-tl-[420px] md:rounded-bl-[420px] md:rounded-tr-none md:rounded-br-none"
              style={{ maxHeight: "min(80vh, 700px)", width: "auto", margin: "0 auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
