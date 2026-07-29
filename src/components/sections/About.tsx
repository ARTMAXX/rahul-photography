"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RipplePortrait from "@/components/about/RipplePortrait";

gsap.registerPlugin(ScrollTrigger);

/* About section — luxury editorial spread
 * Massive typography with staggered reveal
 * Sticky B&W portrait with warm glow, film grain, glass border
 * Scroll-triggered count-up stats
 * Services list
 */

function useCountUp(end: number, duration: number = 2, startOnView: boolean = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  const stat1 = useCountUp(10, 2, startCounting);
  const stat2 = useCountUp(200, 2.5, startCounting);
  const stat3 = useCountUp(50, 2, startCounting);

  useGSAP(() => {
    // ============ PORTRAIT REVEAL ============
    if (portraitRef.current) {
      gsap.fromTo(
        portraitRef.current,
        { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top 80%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }

    // ============ HEADING REVEAL — cinematic blur to sharp ============
    if (headingRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1.2,
          },
        })
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, filter: "blur(24px)", rotateX: 12 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            rotateX: 0,
            ease: "power3.out",
          }
        );
    }

    // ============ BIO LINE-BY-LINE ============
    const bioLines = gsap.utils.toArray<HTMLElement>(".bio-line");
    if (bioLines.length) {
      gsap.fromTo(
        bioLines,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: bioLines[0],
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    }

    // ============ SERVICES STAGGER ============
    const services = gsap.utils.toArray<HTMLElement>(".service-item");
    if (services.length) {
      gsap.fromTo(
        services,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: services[0],
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    }

    // ============ STATS TRIGGER ============
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      ScrollTrigger.create({
        trigger: statsSection,
        start: "top 70%",
        onEnter: () => setStartCounting(true),
        once: true,
      });
    }

    // ============ STATS FADE IN ============
    const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
    if (statCards.length) {
      gsap.fromTo(
        statCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          stagger: 0.15,
          scrollTrigger: {
            trigger: statCards[0],
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full z-40"
      style={{ backgroundColor: "#040508" }}
    >
      {/* ============ MAIN LAYOUT ============ */}
      <div
        className="relative w-full mx-auto flex flex-col lg:flex-row"
        style={{
          maxWidth: "var(--max-width)",
          padding: "0 var(--gutter)",
          minHeight: "100vh",
        }}
      >
        {/* ============ LEFT: TYPOGRAPHY STACK ============ */}
        <div
          className="flex-1 flex flex-col justify-center min-w-0"
          style={{
            paddingTop: "clamp(6rem, 15vh, 12rem)",
            paddingBottom: "clamp(4rem, 10vh, 8rem)",
            paddingRight: "clamp(2rem, 5vw, 6rem)",
          }}
        >
          {/* ============ MASSIVE HEADING ============ */}
          <h2
            ref={headingRef}
            className="text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.85] tracking-[-0.03em] text-white max-w-[16ch]"
            style={{ marginBottom: "clamp(2rem, 5vh, 4rem)" }}
          >
            <span className="about-word block">I create</span>
            <span className="about-word block">visuals that</span>
            <span className="about-word block">sell <span className="text-[#c8a84b]">products.</span></span>
          </h2>

          {/* ============ BIO ============ */}
          <div style={{ marginBottom: "clamp(3rem, 6vh, 5rem)" }}>
            <p
              className="bio-line"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.875rem, 1.1vw, 1.0625rem)",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#9c9c9c",
                maxWidth: "42ch",
                marginBottom: "0.75rem",
                textWrap: "pretty",
              }}
            >
              Rahul Chanda is a high-end commercial product photographer based in
              Dehradun, India. Over a decade of precision lighting and intentional
              composition — crafting visuals that connect brands with their audience.
            </p>
          </div>

          {/* ============ SERVICES LIST ============ */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "clamp(1.5rem, 3vh, 2.5rem)",
              marginBottom: "clamp(3rem, 6vh, 5rem)",
            }}
          >
            {[
              "Product Photography",
              "Food Photography",
              "Motion Design",
              "Commercial Campaigns",
            ].map((service) => (
              <div
                key={service}
                className="service-item font-serif text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em] text-[#d8d8d8]"
                style={{
                  padding: "0.625rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {service}
              </div>
            ))}
          </div>

          {/* ============ STATS ============ */}
          <div className="stats-section flex flex-wrap gap-10 md:gap-14">
            <div className="stat-card" ref={stat1.ref}>
              <div
                className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.03em] text-white"
                style={{ marginBottom: "0.5rem" }}
              >
                {stat1.count}+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#434343",
                  lineHeight: 1.4,
                }}
              >
                Years Crafting
                <br />
                Commercial Visuals
              </div>
            </div>
            <div className="stat-card" ref={stat2.ref}>
              <div
                className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.03em] text-white"
                style={{ marginBottom: "0.5rem" }}
              >
                {stat2.count}+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#434343",
                  lineHeight: 1.4,
                }}
              >
                Campaigns
                <br />
                Delivered
              </div>
            </div>
            <div className="stat-card" ref={stat3.ref}>
              <div
                className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.03em] text-white"
                style={{ marginBottom: "0.5rem" }}
              >
                {stat3.count}+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#434343",
                  lineHeight: 1.4,
                }}
              >
                Brands
                <br />
                Served
              </div>
            </div>
          </div>
        </div>

        {/* ============ MOBILE PORTRAIT (visible < lg) ============ */}
        <div className="flex lg:hidden items-center justify-center w-full" style={{ paddingBottom: "3rem" }}>
          <div
            className="relative overflow-hidden w-full max-w-[400px]"
            style={{
              aspectRatio: "3/4",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {/* Warm glow behind portrait */}
            <div
              style={{
                position: "absolute",
                inset: "-20%",
                background:
                  "radial-gradient(ellipse at center, rgba(200,168,75,0.12) 0%, rgba(200,168,75,0.04) 40%, transparent 70%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* Portrait image — WebGL ripple shader */}
            <div className="relative z-[1]" style={{ width: "100%", height: "100%" }}>
              <RipplePortrait
                src="/about me photo/1me.webp"
                alt="Rahul Chanda — commercial product photographer"
                width={3712}
                height={4608}
                className="w-full h-full"
              />
            </div>
            {/* Film grain overlay */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                opacity: 0.08,
                mixBlendMode: "overlay",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />
            {/* Glass edge highlight */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                borderRadius: "12px",
                boxShadow:
                  "inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(255,255,255,0.05)",
              }}
            />
          </div>
        </div>

        {/* ============ RIGHT: STICKY PORTRAIT ============ */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{
            width: "45%",
            position: "sticky",
            top: 0,
            height: "100vh",
            paddingTop: "clamp(4rem, 8vh, 6rem)",
            paddingBottom: "clamp(4rem, 8vh, 6rem)",
          }}
        >
          <div
            ref={portraitRef}
            className="relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              aspectRatio: "3/4",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {/* Warm glow behind portrait */}
            <div
              style={{
                position: "absolute",
                inset: "-20%",
                background:
                  "radial-gradient(ellipse at center, rgba(200,168,75,0.12) 0%, rgba(200,168,75,0.04) 40%, transparent 70%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Portrait image — WebGL ripple shader */}
            <div className="relative z-[1]" style={{ width: "100%", height: "100%" }}>
              <RipplePortrait
                src="/about me photo/1me.webp"
                alt="Rahul Chanda — commercial product photographer"
                width={3712}
                height={4608}
                className="w-full h-full"
              />
            </div>

            {/* Film grain overlay */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                opacity: 0.08,
                mixBlendMode: "overlay",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />

            {/* Glass edge highlight */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                borderRadius: "12px",
                boxShadow:
                  "inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(255,255,255,0.05)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ============ BOTTOM RULE ============ */}
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "var(--max-width)",
          padding: "0 var(--gutter)",
          paddingBottom: "clamp(3rem, 6vh, 5rem)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <div
          className="flex justify-between items-center"
          style={{
            marginTop: "1.5rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.625rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#434343",
          }}
        >
          <span>COMMERCIAL PRODUCT PHOTOGRAPHER</span>
          <span>DEHRADUN, INDIA</span>
        </div>
      </div>
    </section>
  );
}
