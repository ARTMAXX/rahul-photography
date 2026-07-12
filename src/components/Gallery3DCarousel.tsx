'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  { src: '/best shots/Food photo/Biriyani photo.webp', alt: 'Biryani dish' },
  { src: '/best shots/Beverage images/bev-iced.webp', alt: 'Iced beverage' },
  { src: '/best shots/Food photo/crispy-chicken.png', alt: 'Crispy chicken' },
  { src: '/best shots/Beverage images/bev-macro.webp', alt: 'Beverage macro' },
  { src: '/best shots/Food photo/food-biriyani.webp', alt: 'Biryani close-up' },
  { src: '/best shots/Beverage images/bev-toast.webp', alt: 'Toast with beverage' },
  { src: '/best shots/ADs/ad-culinary.webp', alt: 'Culinary ad' },
  { src: '/best shots/Beverage images/three-iced-drinks.webp', alt: 'Three iced drinks' },
  { src: '/best shots/ADs/ad-popout.webp', alt: 'Pop-out ad' },
  { src: '/best shots/Beverage images/bev-waiter.webp', alt: 'Waiter serving' },
];

export default function Gallery3DCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      rotation += 0.15;

      const cards = carousel.querySelectorAll('.carousel-card');
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const totalCards = cards.length;

        const angle = ((360 / totalCards) * index + rotation) * (Math.PI / 180);

        const radius = 900;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius - radius;

        const scale = 0.6 + (z + radius) / (radius * 2) * 0.4;
        const opacity = 0.3 + (z + radius) / (radius * 2) * 0.7;

        const rotateY = (angle * 180 / Math.PI) - 90;

        element.style.transform = `
          translate3d(${x}px, 0, ${z}px)
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        element.style.opacity = opacity.toString();
        element.style.zIndex = Math.floor((z + radius) * 10).toString();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={carouselRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: '2000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-card absolute will-change-transform transition-opacity duration-300"
            style={{
              width: '400px',
              height: '500px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="400px"
                quality={90}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right,
              rgba(0,0,0,0.2) 0%,
              transparent 15%,
              transparent 85%,
              rgba(0,0,0,0.2) 100%
            )
          `
        }}
      />
    </div>
  );
}
