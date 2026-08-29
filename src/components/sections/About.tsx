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

    const mainWords = gsap.utils.toArray(
      aboutTextRef.current?.querySelectorAll(".word") ?? []
    ) as HTMLElement[];
    const versionWords = gsap.utils.toArray(
      aboutVersionRef.current?.querySelectorAll(".word") ?? []
    ) as HTMLElement[];
    const photo = imageRef.current?.querySelector(
      ".about-photo"
    ) as HTMLElement | null;

    gsap.set(mainWords, { opacity: 0, filter: "blur(8px)" });
    gsap.set(versionWords, { opacity: 0, filter: "blur(8px)" });
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

      {/* "¢½"¢½"¢½"¢½"¢½"¢½ Content wrapper "¢½"¢½"¢½"¢½"¢½"¢½ */}
      <div
        className="relative z-10 w-full"
        style={{ padding: "30vh 1.5rem 20vh" }}
      >
        {/* Photo  —  top of about section */}
        <div
          ref={imageRef}
          className="mb-8 w-[55%] max-w-[260px] md:absolute md:right-0 md:top-0 md:w-[min(50vw,720px)] md:max-w-none md:mb-0"
        >
          <Image
            src="/opt/about-photo/rahul-chanda-portrait.webp"
            alt="Rahul Chanda, commercial product photographer from Dehradun, in his studio"
            width={1400}
            height={1738}
            quality={80}
            sizes="(max-width: 768px) 55vw, (max-width: 1280px) 40vw, 720px"
            className="about-photo block w-full h-auto rounded-[20px] md:rounded-none md:rounded-l-[420px]"
          />
        </div>

        {/* Text column */}
        <div
          ref={textRef}
          className="relative z-20 w-full md:w-[55%]"
        >
          <h2
            ref={aboutTextRef}
            className="text-[26px] md:text-5xl font-serif leading-[1.35] md:leading-[1.45] tracking-[-0.01em] w-full text-balance"
          >
            I don&apos;t just photograph products. I 
            <span className="italic font-bold">make them worth choosing</span> 
             —  with technical precision and 
            <span className="italic font-bold">emotion</span>.          </h2>

          <p
            ref={aboutSubRef}
            className="text-sm md:text-base font-sans leading-[1.7] md:leading-[1.6] tracking-[-0.005em] text-neutral-400 md:text-neutral-300 mt-8 md:mt-[12vh] md:w-[55%] md:ml-[45%]"
          >
            My name is Rahul Chanda. A commercial product photographer
            based in 
            <a
              href="/dehradun"
              className="underline decoration-[#e83b2c]/40 underline-offset-4 hover:decoration-[#e83b2c] transition-colors"
              data-cursor="pointer"
            >
              Dehradun
            </a>
            , I don&apos;t just photograph products  —  I light, style, and retouch
            every frame until the product looks like the obvious choice.
          </p>

          <div className="mt-10 md:mt-14 md:ml-[45%]">
            <a
              href="#contact"
              className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-widest font-bold text-white/50 md:text-white hover:text-white transition-colors"
            >
              INFO
            </a>
          </div>
        </div>

        {/* Version tag  —  desktop only */}
        <div
          ref={aboutVersionRef}
          className="hidden md:flex absolute right-[32%] bottom-[22vh] z-20 text-5xl font-serif leading-[1.45] tracking-[-0.01em] items-baseline justify-end gap-2"
        >
          <span className="inline-block">?</span>
          <span>Å“Â¦ 2026</span>
        </div>
      </div>
    </section>
  );
}
