"use client";

import React from "react";
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
  return (
    <div className={cn("w-full flex flex-col items-center justify-center", className)}>
      <Swiper
        effect="cards"
        grabCursor={grabCursor}
        loop={loop}
        className={cn("w-full max-w-xl h-[500px] md:h-[400px]", swiperClassName)}
        modules={[EffectCards]}
        cardsEffect={{ slideShadows: false }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!flex !items-start !justify-center bg-transparent">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostSwiper;
