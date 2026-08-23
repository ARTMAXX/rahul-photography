"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";

interface WorkItem {
  title: string;
  category: string;
  link: string;
  thumbnail: string;
  alt: string;
  type?: "image" | "video";
}

interface SelectedWorkParallaxProps {
  items?: WorkItem[];
}

export const SelectedWorkParallax = ({
  items = defaultWorks,
}: SelectedWorkParallaxProps) => {
  const firstRow = items.slice(0, 5);
  const secondRow = items.slice(5, 10);
  const thirdRow = items.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#070707]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((work) => (
            <WorkCard work={work} translate={translateX} key={work.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((work) => (
            <WorkCard
              work={work}
              translate={translateXReverse}
              key={work.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((work) => (
            <WorkCard work={work} translate={translateX} key={work.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.9] tracking-[-0.03em]">
        Selected{" "}
        <span className="italic text-[#e83b2c]">Work</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-white/50 leading-relaxed">
        A curated collection of commercial product, food & beverage, footwear,
        and campaign photography for brands across India.
      </p>
    </div>
  );
};

const WorkCard = ({
  work,
  translate,
}: {
  work: WorkItem;
  translate: MotionValue<number>;
}) => {
  const isVideo = work.type === "video";

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/work h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={work.link} className="block group-hover/work:shadow-2xl">
        {isVideo ? (
          <video
            src={work.thumbnail}
            className="object-contain object-center absolute h-full w-full inset-0"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={work.thumbnail}
            alt={work.alt}
            className="object-contain object-center absolute h-full w-full inset-0"
          />
        )}
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/work:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/work:opacity-100 text-white text-lg font-serif">
        {work.title}
      </h2>
    </motion.div>
  );
};

// Curated selection from your best shots folders
const defaultWorks: WorkItem[] = [
  // Row 1
  {
    title: "Luxury Sandal",
    category: "Product Photography",
    link: "/gallery",
    thumbnail: "/best shots/new-images/new-product-luxury -sandel.jpg",
    alt: "Luxury sandal product photography",
    type: "image",
  },
  {
    title: "Premium Heel",
    category: "Footwear Photography",
    link: "/gallery",
    thumbnail: "/best shots/new-images/new-product-heel.jpg",
    alt: "Premium heel footwear photography",
    type: "image",
  },
  {
    title: "Fresh Juice Campaign",
    category: "Beverage Photography",
    link: "/gallery",
    thumbnail: "/best shots/new-images/new-juice-01.jpg",
    alt: "Fresh juice beverage photography",
    type: "image",
  },
  {
    title: "Bold Product Shot",
    category: "Product Photography",
    link: "/gallery",
    thumbnail: "/best shots/new-images/new-product-bold.jpg",
    alt: "Bold product photography",
    type: "image",
  },
  {
    title: "Dynamic Blast",
    category: "Commercial Campaign",
    link: "/gallery",
    thumbnail: "/best shots/new-images/new-product-blast.jpg",
    alt: "Dynamic commercial campaign photography",
    type: "image",
  },
  // Row 2
  {
    title: "Energy Drink Can",
    category: "Product Video",
    link: "/gallery",
    thumbnail: "/best shots/Product image/product-energy-can.mp4",
    alt: "Energy drink product video",
    type: "video",
  },
  {
    title: "Toast & Clink",
    category: "Beverage Photography",
    link: "/gallery",
    thumbnail: "/best shots/Beverage images/bev-toast.webp",
    alt: "Toast clinking glasses photography",
    type: "image",
  },
  {
    title: "Athletic Sneaker",
    category: "Footwear Video",
    link: "/gallery",
    thumbnail: "/best shots/mens shoe/modern-athleti-sneaker.mp4",
    alt: "Athletic sneaker product video",
    type: "video",
  },
  {
    title: "Three Iced Drinks",
    category: "Beverage Photography",
    link: "/gallery",
    thumbnail: "/best shots/Beverage images/three-iced-drinks.webp",
    alt: "Three iced drinks product photography",
    type: "image",
  },
  {
    title: "Biryani Platter",
    category: "Food Photography",
    link: "/gallery",
    thumbnail: "/best shots/Food photo/Biriyani photo.webp",
    alt: "Biryani food photography",
    type: "image",
  },
  // Row 3
  {
    title: "Ladies Shoe",
    category: "Footwear Video",
    link: "/gallery",
    thumbnail: "/best shots/ladies shoe/shoe-ladies-video.mp4",
    alt: "Ladies shoe product video",
    type: "video",
  },
  {
    title: "High-End Ladies Shoe",
    category: "Footwear Photography",
    link: "/gallery",
    thumbnail: "/best shots/ladies shoe/High-end-shoe.webp",
    alt: "High-end ladies shoe photography",
    type: "image",
  },
  {
    title: "Men's Shoe",
    category: "Footwear Video",
    link: "/gallery",
    thumbnail: "/best shots/mens shoe/shoe-mens-video.mp4",
    alt: "Men's shoe product video",
    type: "video",
  },
  {
    title: "Modern Athletic Sneaker",
    category: "Footwear Photography",
    link: "/gallery",
    thumbnail: "/best shots/mens shoe/modern-athletic-sneaker.webp",
    alt: "Modern athletic sneaker photography",
    type: "image",
  },
  {
    title: "Energy Drink Splash",
    category: "Product Photography",
    link: "/gallery",
    thumbnail: "/best shots/Product image/product-energy-shot.webp",
    alt: "Energy drink splash product photography",
    type: "image",
  },
];
