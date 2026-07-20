"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "@/lib/utils";

interface PostSwiperProps {
  slides: React.ReactNode[];
  className?: string;
  swiperClassName?: string;
  loop?: boolean;
  grabCursor?: boolean;
  onSwiper?: (swiper: any) => void;
}

const PostSwiper = ({
  slides,
  className,
  swiperClassName,
  loop = true,
  grabCursor = true,
  onSwiper,
}: PostSwiperProps) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    // Inject styles dynamically to avoid SSR issues
    if (!styleRef.current) {
      const style = document.createElement("style");
      style.id = "post-swiper-fix";
      style.textContent = `
        .post-swiper .swiper-slide {
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
        }
        .post-swiper .swiper-slide-active {
          z-index: 10 !important;
        }
        .post-swiper .swiper-slide:not(.swiper-slide-active) {
          pointer-events: none !important;
        }
        .post-swiper .swiper-slide:not(.swiper-slide-active) .slide-content {
          opacity: 0 !important;
          transition: opacity 0.4s ease !important;
        }
        .post-swiper .swiper-slide-active .slide-content {
          opacity: 1 !important;
          transition: opacity 0.4s ease !important;
        }
      `;
      document.head.appendChild(style);
      styleRef.current = style;
    }

    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, []);

  return (
    <div className={cn("w-full flex flex-col items-center justify-center", className)}>
      <Swiper
        effect="cards"
        grabCursor={grabCursor}
        loop={loop}
        className={cn("post-swiper w-full max-w-xl h-[500px] md:h-[400px]", swiperClassName)}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 8,
          perSlideRotate: 2,
        }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!flex !items-start !justify-center bg-transparent"
          >
            <div className="slide-content w-full h-full">
              {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostSwiper;
