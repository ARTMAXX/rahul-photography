"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Scroll3DGrid.css";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────────
   IMAGE POOL — rotated from your existing /public/best shots/
   6 grids; each grid references a different (or repeated) photo set.
   ────────────────────────────────────────────────────────────────── */
const IMG_POOLS: string[][] = [
  // grid 1 — products (large pool, 48 items)
  [
    "/best shots/Product image/product-watch-luxury.webp",
    "/best shots/Product image/product-watch-dark.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/Product image/product-molton-brown.webp",
    "/best shots/Product image/product-hairspray.webp",
    "/best shots/Product image/product-serum.webp",
    "/best shots/Product image/product-bodywash.webp",
    "/best shots/Product image/product-energy-shot.webp",
    "/best shots/Product image/product-energy-design.webp",
    "/best shots/new-images/new-product-blast.jpg",
    "/best shots/new-images/new-product-bold.jpg",
    "/best shots/new-images/new-product-heel.jpg",
    "/best shots/new-images/new-product-luxury -sandel.jpg",
    "/best shots/ADs/ad-popout.webp",
    "/best shots/ADs/ad-culinary.webp",
    "/best shots/ladies shoe/High-end-shoe.webp",
    "/best shots/ladies shoe/shoe-ladies-detail.webp",
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/ladies shoe/shoe-ladies-lifestyle.webp",
    "/best shots/ladies shoe/shoe-ladies-mule.webp",
    "/best shots/ladies shoe/shoe-ladies-sandal.webp",
    "/best shots/ladies shoe/shoe-ladies-slipon.webp",
    "/best shots/ladies shoe/shoe-ladies-mule-detail.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/mens shoe/shoe-mens-duo.webp",
    "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    "/best shots/mens shoe/shoe-mens-white.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Food photo/food-biriyani.webp",
    "/best shots/Food photo/food-chicken.webp",
    "/best shots/Food photo/food-cream.webp",
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/Food photo/food-curry.webp",
    "/best shots/Food photo/food-dish.webp",
    "/best shots/Food photo/food-mutton.webp",
    "/best shots/Food photo/food-buffet.webp",
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/Beverage images/bev-toast.webp",
    "/best shots/Beverage images/bev-waiter.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/new-images/new-juice-01.jpg",
    "/best shots/new-images/new-food-biriyani.png",
    "/best shots/new-images/new-food-ultra.png",
    "/best shots/Product image/headphone-jbl.png",
    "/best shots/Product image/luxury-watch.png",
  ],
  // grid 2
  [
    "/best shots/new-images/new-product-blast.jpg",
    "/best shots/ladies shoe/High-end-shoe.webp",
    "/best shots/Product image/product-watch-luxury.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/Food photo/food-biriyani.webp",
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/new-images/new-product-bold.jpg",
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/ADs/ad-culinary.webp",
    "/best shots/Product image/product-molton-brown.webp",
    "/best shots/ladies shoe/shoe-ladies-detail.webp",
    "/best shots/Food photo/food-chicken.webp",
    "/best shots/mens shoe/shoe-mens-duo.webp",
    "/best shots/new-images/new-juice-01.jpg",
    "/best shots/Product image/product-energy-design.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/new-images/new-product-heel.jpg",
    "/best shots/Food photo/food-buffet.webp",
    "/best shots/Product image/product-serum.webp",
    "/best shots/ladies shoe/shoe-ladies-lifestyle.webp",
  ],
  // grid 3
  [
    "/best shots/Product image/product-hairspray.webp",
    "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    "/best shots/Food photo/food-dish.webp",
    "/best shots/Beverage images/bev-toast.webp",
    "/best shots/ladies shoe/shoe-ladies-sandal.webp",
    "/best shots/new-images/new-product-luxury -sandel.jpg",
    "/best shots/Product image/product-bodywash.webp",
    "/best shots/Food photo/food-curry.webp",
    "/best shots/ADs/ad-popout.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Beverage images/bev-waiter.webp",
    "/best shots/ladies shoe/shoe-ladies-slipon.webp",
    "/best shots/Food photo/food-mutton.webp",
    "/best shots/Product image/product-energy-shot.webp",
    "/best shots/new-images/new-product-bold.jpg",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/Food photo/food-cream.webp",
    "/best shots/mens shoe/shoe-mens-white.webp",
    "/best shots/Product image/product-watch-dark.webp",
    "/best shots/ladies shoe/shoe-ladies-mule-detail.webp",
    "/best shots/new-images/new-food-ultra.png",
    "/best shots/Food photo/food-biriyani.webp",
  ],
  // grid 4
  [
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/Product image/product-watch-dark.webp",
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/ladies shoe/shoe-ladies-detail.webp",
    "/best shots/Food photo/food-chicken.webp",
    "/best shots/mens shoe/shoe-mens-duo.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/ADs/ad-culinary.webp",
    "/best shots/Product image/product-molton-brown.webp",
    "/best shots/ladies shoe/shoe-ladies-lifestyle.webp",
    "/best shots/Food photo/food-buffet.webp",
    "/best shots/Product image/product-serum.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/Product image/product-energy-design.webp",
    "/best shots/ladies shoe/shoe-ladies-mule.webp",
    "/best shots/Food photo/food-dish.webp",
    "/best shots/Beverage images/bev-toast.webp",
    "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    "/best shots/new-images/new-product-blast.jpg",
    "/best shots/Product image/product-hairspray.webp",
  ],
  // grid 5 (smaller pool — type5 splits by rows)
  [
    "/best shots/Product image/product-watch-luxury.webp",
    "/best shots/ladies shoe/High-end-shoe.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/Food photo/food-biriyani.webp",
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/ADs/ad-culinary.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/new-images/new-product-blast.jpg",
    "/best shots/Product image/product-molton-brown.webp",
    "/best shots/ladies shoe/shoe-ladies-detail.webp",
    "/best shots/Food photo/food-chicken.webp",
    "/best shots/mens shoe/shoe-mens-duo.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/Product image/product-serum.webp",
  ],
  // grid 6
  [
    "/best shots/ladies shoe/shoe-ladies-heels.webp",
    "/best shots/Product image/product-watch-dark.webp",
    "/best shots/Food photo/food-cream-macro.webp",
    "/best shots/mens shoe/modern-athletic-sneaker.webp",
    "/best shots/Beverage images/three-iced-drinks.webp",
    "/best shots/ladies shoe/shoe-ladies-lifestyle.webp",
    "/best shots/Product image/product-headphone.webp",
    "/best shots/Food photo/food-buffet.webp",
    "/best shots/Beverage images/bev-macro.webp",
    "/best shots/mens shoe/shoe-mens-campaign.webp",
    "/best shots/Product image/product-molton-brown.webp",
    "/best shots/ladies shoe/shoe-ladies-detail.webp",
    "/best shots/ADs/ad-popout.webp",
    "/best shots/Food photo/food-chicken.webp",
    "/best shots/Beverage images/bev-iced.webp",
    "/best shots/Product image/product-watch-luxury.webp",
    "/best shots/mens shoe/shoe-mens-lifestyle.webp",
    "/best shots/new-images/new-juice-01.jpg",
    "/best shots/Product image/product-energy-shot.webp",
    "/best shots/Beverage images/bev-toast.webp",
    "/best shots/Food photo/food-dish.webp",
  ],
];

const TITLES: { text: string; placement: "" | "--top" | "--bottom" | "--left top" | "--right" | "--left" | "--right top" | "--left bottom" | "--right bottom" }[] = [
  { text: "Fleeting moments,\nexistence's dance.",          placement: "--right top" },
  { text: "Impermanence\nguides life's river.",          placement: "" },
  { text: "Embrace now,\ntomorrow may fade.",            placement: "--left bottom" },
  { text: "Now unfolds\neternity's grace.",              placement: "--right" },
  { text: "An infinite universe\nof moments unfolding",  placement: "" },
  { text: "Seasons shift,\nmoments flow.",                placement: "" },
];

const VARIANT_NAMES = ["type1", "type2", "type3", "type4", "type5", "type6"] as const;
type Variant = (typeof VARIANT_NAMES)[number];

/* ──────────────────────────────────────────────────────────────────
   Helper ported from Codrops utils.js — builds rows / columns
   subsets of a grid for staggered animations (type5 uses it).
   ────────────────────────────────────────────────────────────────── */
function makeGrid(elements: HTMLElement[]) {
  let bounds: DOMRect[] = elements.map((el) => el.getBoundingClientRect());

  const refresh = () => {
    bounds = elements.map((el) => el.getBoundingClientRect());
  };

  const getSubset = (
    axis: "left" | "top",
    dimension: "width" | "height",
    alternating?: "even" | "odd",
    merge = false,
  ): HTMLElement[][] => {
    const subsets: Record<number, HTMLElement[]> = {};
    const onlyEven = alternating === "even";
    bounds.forEach((b, i) => {
      const position = Math.round((b as any)[axis] + (b as any)[dimension] / 2);
      const subset = subsets[position] || (subsets[position] = []);
      subset.push(elements[i]);
    });
    let arr: HTMLElement[][] = Object.values(subsets);
    if (onlyEven || alternating === "odd") {
      arr = arr.filter((_, i) => !(i % 2) === onlyEven);
    }
    if (merge) return arr.flat();
    return arr;
  };

  return {
    refresh,
    rows: (alternating?: "even" | "odd", merge = false) =>
      getSubset("top", "height", alternating, merge),
    columns: (alternating?: "even" | "odd", merge = false) =>
      getSubset("left", "width", alternating, merge),
  };
}

/* ──────────────────────────────────────────────────────────────────
   Apply a single grid's animation (faithful port of Codrops main.js
   applyAnimation(grid, animationType) for type1–type6).
   ────────────────────────────────────────────────────────────────── */
function applyAnimation(grid: HTMLElement, animationType: Variant) {
  const gridWrap = grid.querySelector<HTMLElement>(".s3d-grid-wrap");
  const gridItems = grid.querySelectorAll<HTMLElement>(".s3d-grid-item");
  if (!gridWrap || gridItems.length === 0) return;

  const itemsArr = Array.from(gridItems);
  const itemsInner = itemsArr
    .map((i) => i.querySelector<HTMLElement>(".s3d-grid-item__inner"))
    .filter((x): x is HTMLElement => !!x);

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: gridWrap,
      start: "top bottom+=5%",
      end: "bottom top-=5%",
      scrub: true,
    },
  });

  switch (animationType) {
    case "type1":
      grid.style.setProperty("--s3d-perspective", "1000px");
      grid.style.setProperty("--s3d-grid-inner-scale", "0.5");
      timeline
        .set(gridWrap, { rotationY: 25 })
        .set(gridItems, {
          z: () => gsap.utils.random(-1600, 200),
        })
        .fromTo(
          gridItems,
          { xPercent: () => gsap.utils.random(-1000, -500) },
          { xPercent: () => gsap.utils.random(500, 1000) },
          0,
        )
        .fromTo(itemsInner, { scale: 2 }, { scale: 0.5 }, 0);
      break;

    case "type2":
      grid.style.setProperty("--s3d-grid-width", "160%");
      grid.style.setProperty("--s3d-perspective", "2000px");
      grid.style.setProperty("--s3d-grid-inner-scale", "0.5");
      grid.style.setProperty("--s3d-grid-item-ratio", "0.8");
      grid.style.setProperty("--s3d-grid-columns", "6");
      grid.style.setProperty("--s3d-grid-gap", "14vw");
      timeline
        .set(gridWrap, { rotationX: 20 })
        .set(gridItems, { z: () => gsap.utils.random(-3000, -1000) })
        .fromTo(
          gridItems,
          {
            yPercent: () => gsap.utils.random(100, 1000),
            rotationY: -45,
            filter: "brightness(200%)",
          },
          {
            ease: "power2",
            yPercent: () => gsap.utils.random(-1000, -100),
            rotationY: 45,
            filter: "brightness(0%)",
          },
          0,
        )
        .fromTo(
          gridWrap,
          { rotationZ: -5 },
          { rotationX: -20, rotationZ: 10, scale: 1.2 },
          0,
        )
        .fromTo(itemsInner, { scale: 2 }, { scale: 0.5 }, 0);
      break;

    case "type3":
      grid.style.setProperty("--s3d-grid-width", "105%");
      grid.style.setProperty("--s3d-grid-columns", "8");
      grid.style.setProperty("--s3d-perspective", "1500px");
      grid.style.setProperty("--s3d-grid-inner-scale", "0.5");
      timeline
        .set(gridItems, {
          transformOrigin: "50% 0%",
          z: () => gsap.utils.random(-5000, -2000),
          rotationX: () => gsap.utils.random(-65, -25),
          filter: "brightness(0%)",
        })
        .to(
          gridItems,
          {
            xPercent: () => gsap.utils.random(-150, 150),
            yPercent: () => gsap.utils.random(-300, 300),
            rotationX: 0,
            filter: "brightness(200%)",
          },
          0,
        )
        .to(gridWrap, { z: 6500 }, 0)
        .fromTo(itemsInner, { scale: 2 }, { scale: 0.5 }, 0);
      break;

    case "type4":
      grid.style.setProperty("--s3d-grid-width", "50%");
      grid.style.setProperty("--s3d-perspective", "3000px");
      grid.style.setProperty("--s3d-grid-item-ratio", "0.8");
      grid.style.setProperty("--s3d-grid-columns", "3");
      grid.style.setProperty("--s3d-grid-gap", "1vw");
      timeline
        .set(gridWrap, {
          transformOrigin: "0% 50%",
          rotationY: 30,
          xPercent: -75,
        })
        .set(gridItems, { transformOrigin: "50% 0%" })
        .to(
          gridItems,
          { duration: 0.5, ease: "power2", z: 500, stagger: 0.04 },
          0,
        )
        .to(
          gridItems,
          { duration: 0.5, ease: "power2.in", z: 0, stagger: 0.04 },
          0.5,
        )
        .fromTo(
          gridItems,
          { rotationX: -70, filter: "brightness(120%)" },
          {
            duration: 1,
            rotationX: 70,
            filter: "brightness(0%)",
            stagger: 0.04,
          },
          0,
        );
      break;

    case "type5": {
      grid.style.setProperty("--s3d-grid-width", "120%");
      grid.style.setProperty("--s3d-grid-columns", "8");
      grid.style.setProperty("--s3d-grid-gap", "0");
      const gridObj = makeGrid(itemsArr);
      timeline
        .set(gridWrap, { rotationX: 50 })
        .to(gridWrap, { rotationX: 30 })
        .fromTo(
          gridItems,
          { filter: "brightness(0%)" },
          { filter: "brightness(100%)" },
          0,
        )
        .to(
          gridObj.rows("even"),
          { xPercent: -100, ease: "power1" },
          0,
        )
        .to(gridObj.rows("odd"), { xPercent: 100, ease: "power1" }, 0)
        .addLabel("rowsEnd", ">-=0.15")
        .to(
          gridItems,
          { ease: "power1", yPercent: () => gsap.utils.random(-100, 200) },
          "rowsEnd",
        );
      break;
    }

    case "type6":
      grid.style.setProperty("--s3d-perspective", "2500px");
      grid.style.setProperty("--s3d-grid-width", "100%");
      grid.style.setProperty("--s3d-grid-gap", "6");
      grid.style.setProperty("--s3d-grid-columns", "3");
      grid.style.setProperty("--s3d-grid-item-ratio", "1");
      timeline.fromTo(
        gridItems,
        {
          transformOrigin: "50% 200%",
          rotationX: 0,
          yPercent: 400,
        },
        {
          yPercent: 0,
          rotationY: 360,
          opacity: 0.2,
          scale: 0.8,
          stagger: 0.03,
        },
      );
      break;
  }
}

/* ──────────────────────────────────────────────────────────────────
   Preload all images referenced by the grid items before kicking
   off the animations (avoids flash / wrong layout mid-anim).
   ────────────────────────────────────────────────────────────────── */
function preload(srcs: string[]): Promise<void> {
  return new Promise((resolve) => {
    let remaining = srcs.length;
    if (remaining === 0) return resolve();
    srcs.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (--remaining <= 0) resolve();
      };
      img.src = src;
    });
  });
}

export default function Scroll3DGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const allImages = IMG_POOLS.flat();
      // Preload then trigger animations.
      preload(allImages).then(() => {
        const grids = wrapper.querySelectorAll<HTMLElement>(".s3d-grid");
        grids.forEach((grid, i) =>
          applyAnimation(grid, VARIANT_NAMES[i % VARIANT_NAMES.length]),
        );

        // Also refresh on resize so type5's row detection recalculates.
        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);
        // Return a teardown that @gsap/react will call automatically.
        return () => window.removeEventListener("resize", onResize);
      });
    },
    { scope: wrapperRef },
  );

  return (
    <section
      ref={wrapperRef}
      className="s3d-wrap"
      aria-label="On-scroll 3D grid animations"
    >
      {/* Section intro */}
      <header className="s3d-intro">
        <span className="s3d-eyebrow">05 / Perspective Grids</span>
        <h2 className="s3d-heading">
          On-scroll <em className="not-italic font-bold">perspective</em> grid
          animations.
        </h2>
        <span className="s3d-sub">Scroll moderately to fully experience</span>
      </header>

      {/* 6 grids, cyclic animation type */}
      {IMG_POOLS.map((pool, idx) => (
        <div className="s3d-content" key={`s3d-grid-${idx}`}>
          <div className={`s3d-grid s3d-grid--${idx + 1}`}>
            <div className="s3d-grid-wrap">
              {pool.map((src, i) => (
                <div className="s3d-grid-item" key={`${idx}-${i}`}>
                  <div
                    className="s3d-grid-item__inner"
                    style={{ backgroundImage: `url(${src})` }}
                    role="img"
                    aria-label={`Portfolio image ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <h3 className={`s3d-title s3d-title${TITLES[idx].placement}`}>
            {TITLES[idx].text.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h3>
        </div>
      ))}

      {/* Outro */}
      <div className="s3d-outro">
        <span className="s3d-outro__rule" />
        <p className="s3d-outro__title">Six perspectives. One archive.</p>
        <span className="s3d-outro__sub">
          Inspired by Codrops — On-Scroll 3D Grid Animations
        </span>
      </div>
    </section>
  );
}
