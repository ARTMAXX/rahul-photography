'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const projects = [
  { id: 1, image: '/best shots/Food photo/food-biriyani.webp', title: 'Biryani Bowl' },
  { id: 2, image: '/best shots/Beverage images/bev-toast.webp', title: 'Toast Drinks' },
  { id: 3, image: '/best shots/Product image/product-headphone.webp', title: 'Headphones' },
  { id: 4, image: '/best shots/Food photo/food-chicken.webp', title: 'Chicken Dish' },
  { id: 5, image: '/best shots/Product image/product-watch-luxury.webp', title: 'Luxury Watch' },
  { id: 6, image: '/best shots/Beverage images/three-iced-drinks.webp', title: 'Iced Drinks' },
  { id: 7, image: '/best shots/mens shoe/shoe-mens-campaign.webp', title: 'Mens Shoes' },
  { id: 8, image: '/best shots/ladies shoe/High-end-shoe.webp', title: 'Ladies Shoes' },
  { id: 9, image: '/best shots/Product image/product-energy-design.webp', title: 'Energy Shot' },
  { id: 10, image: '/best shots/Food photo/food-curry.webp', title: 'Curry' },
];

export default function DesignInMotion() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const designTextRef = useRef<HTMLDivElement>(null);
  const motionTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const dribbbleRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const designText = designTextRef.current;
    const motionText = motionTextRef.current;
    const subtitle = subtitleRef.current;
    const ribbon = ribbonRef.current;
    const bottomText = bottomTextRef.current;
    const dribbble = dribbbleRef.current;

    if (!section || !designText || !motionText || !subtitle || !ribbon || !bottomText || !dribbble) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Calculate scroll progress through the section
    const scrolledPast = -rect.top;
    const totalScrollable = Math.max(1, sectionHeight - viewportHeight);
    const progress = Math.max(0, Math.min(1, scrolledPast / totalScrollable));

    // === PHASE 1: Text slides in from opposite sides (0% - 15%) ===
    const phase1 = Math.min(1, progress / 0.15);
    const ease1 = 1 - Math.pow(1 - phase1, 3); // ease-out cubic

    if (progress <= 0.15) {
      designText.style.transform = `translateX(${-100 + ease1 * 100}%)`;
      designText.style.opacity = `${Math.min(1, ease1 * 1.5)}`;
      
      motionText.style.transform = `translateX(${100 - ease1 * 100}%)`;
      motionText.style.opacity = `${Math.min(1, ease1 * 1.5)}`;
      
      subtitle.style.opacity = `${Math.min(1, Math.max(0, (phase1 - 0.2) * 2.5))}`;
      bottomText.style.opacity = `${Math.min(1, Math.max(0, (phase1 - 0.4) * 2.5))}`;
      dribbble.style.opacity = `${Math.min(1, Math.max(0, (phase1 - 0.4) * 2.5))}`;
    }

    // === PHASE 2: Text exits in opposite directions (15% - 30%) ===
    if (progress > 0.15 && progress <= 0.30) {
      const phase2 = (progress - 0.15) / 0.15;
      const ease2 = phase2 * phase2; // ease-in quadratic

      designText.style.transform = `translateX(${-ease2 * 120}%)`;
      designText.style.opacity = `${1 - ease2}`;
      
      motionText.style.transform = `translateX(${ease2 * 120}%)`;
      motionText.style.opacity = `${1 - ease2}`;
      
      subtitle.style.opacity = `${1 - ease2}`;
      bottomText.style.opacity = `${1 - ease2}`;
      dribbble.style.opacity = `${1 - ease2}`;
    }

    if (progress > 0.30) {
      designText.style.opacity = '0';
      motionText.style.opacity = '0';
      subtitle.style.opacity = '0';
      bottomText.style.opacity = '0';
      dribbble.style.opacity = '0';
    }

    // === PHASE 3: 3D Ribbon rises from below following S-curve (25% - 80%) ===
    if (progress >= 0.25 && progress <= 0.80) {
      const phase3 = (progress - 0.25) / 0.55;
      const ease3 = 1 - Math.pow(1 - phase3, 2); // ease-out quad

      ribbon.style.opacity = `${Math.min(1, phase3 * 3)}`;

      // Global Y offset: entire ribbon moves from +130vh (below) to -30vh (above)
      const globalY = 130 - phase3 * 160;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        const t = index / (projects.length - 1);
        const cardDelay = t * 0.2; // Stagger: later cards start slightly later
        const cardProgress = Math.max(0, Math.min(1, (phase3 - cardDelay) / (1 - cardDelay)));
        const cardEase = 1 - Math.pow(1 - cardProgress, 3); // ease-out cubic

        // S-CURVE SHAPE (local coordinates, relative to ribbon center)
        // t goes from 0 to 1 (card index)
        // Creates an S-curve: left → right → left → right
        const freq = 1.3; // Number of S-cycles
        
        // Local X: S-wave centered at 0
        const localX = Math.sin(t * Math.PI * freq * 2 - Math.PI / 2) * 40; // ±40vw
        
        // Local Y: S-wave centered at 0 (the curve shape)
        const localY = Math.sin(t * Math.PI * freq * 2 + Math.PI / 4) * 20; // ±20vh
        
        // Base horizontal spread
        const baseX = -50 + t * 100; // -50vw to +50vw
        
        // Final positions: global ribbon position + local curve offset
        const xPos = baseX + localX;
        const yPos = globalY + localY * cardEase; // Curve shape appears as ribbon rises

        // 3D Rotations: cards face the viewer along the curve
        // Tangent of the curve at this point
        const twoPiFreq = 2 * Math.PI * freq;
        const dx = 100 + 40 * twoPiFreq * Math.cos(t * Math.PI * freq * 2 - Math.PI / 2);
        const dy = -160 + 20 * twoPiFreq * Math.cos(t * Math.PI * freq * 2 + Math.PI / 4);
        const angle = Math.atan2(dy, dx);
        const rotateY = angle * (180 / Math.PI) * 0.6; // Face tangent direction
        
        // RotateX: slight tilt
        const rotateX = Math.sin(angle) * 10;
        
        // RotateZ: banking into curves
        const rotateZ = Math.sin(t * Math.PI * freq * 2) * 8;

        // Scale: center cards slightly larger
        const scale = 0.65 + Math.sin(t * Math.PI) * 0.4;

        // Apply transform
        card.style.transform = `
          translateX(calc(-50% + ${xPos}vw))
          translateY(${yPos}vh)
          perspective(1200px)
          rotateX(${rotateX * cardEase}deg)
          rotateY(${rotateY * cardEase}deg)
          rotateZ(${rotateZ * cardEase}deg)
          scale(${scale * cardEase})
        `;
        card.style.opacity = `${cardEase}`;
      });
    }

    // Hide ribbon before phase 3
    if (progress < 0.25) {
      ribbon.style.opacity = '0';
      cardRefs.current.forEach((card) => {
        if (card) card.style.opacity = '0';
      });
    }

    // === PHASE 4: Everything exits upward (80% - 100%) ===
    if (progress > 0.80) {
      const phase4 = (progress - 0.80) / 0.20;
      const ease4 = phase4 * phase4; // ease-in quadratic

      ribbon.style.opacity = `${1 - ease4}`;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const t = index / (projects.length - 1);
        
        // Continue the S-curve upward
        const wave1 = Math.sin(t * Math.PI * 1.3 - Math.PI / 2);
        const wave2 = Math.sin(t * Math.PI * 2.6);
        const wave3 = Math.sin(t * Math.PI * 0.65 + Math.PI / 4);
        const horizontalWave = (wave1 * 0.6 + wave2 * 0.25 + wave3 * 0.15) * 45;
        const baseX = -50 + t * 100;
        const xPos = baseX + horizontalWave;

        // Exit upward
        const yPos = -30 - ease4 * 120; // -30vh → -150vh
        
        const rotateY = Math.sin((wave1 * 0.6 + wave2 * 0.25 + wave3 * 0.15) * Math.PI * 1.3) * 35;
        const rotateX = Math.cos(t * Math.PI) * 12 + ease4 * 20;
        const rotateZ = Math.sin(t * Math.PI * 1.5) * 8 + ease4 * 15;
        const scale = (0.65 + Math.sin(t * Math.PI) * 0.4) * (1 - ease4 * 0.4);

        card.style.transform = `
          translateX(calc(-50% + ${xPos}vw))
          translateY(${yPos}vh)
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale})
        `;
        card.style.opacity = `${1 - ease4}`;
      });
    }
  }, []);

  useEffect(() => {
    // Force section height to create scroll space
    const setHeight = () => {
      if (sectionRef.current) {
        const vh = window.innerHeight;
        sectionRef.current.style.height = `${500 * vh}px`;
        sectionRef.current.style.minHeight = `${500 * vh}px`;
      }
    };
    
    // Set immediately and on next tick
    setHeight();
    requestAnimationFrame(setHeight);

    const handleResize = () => setHeight();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ 
        background: '#E5E1D8',
        perspective: '2500px',
        height: '500vh',
        minHeight: '500vh',
      }}
    >
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* Decorative S-curve line in background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.12, stroke: '#2A2A2A' }}
        >
          <path
            d="M -100 750 Q 200 400 500 550 T 900 350 T 1300 500 T 1600 250"
            fill="none"
            strokeWidth="1"
          />
        </svg>

        {/* PHASE 1 & 2: Text Animation */}
        <div
          ref={designTextRef}
          className="absolute z-10 pointer-events-none"
          style={{ 
            top: '10%',
            left: '5%',
            fontSize: 'clamp(60px, 12vw, 180px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#2A2A2A',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 0.9,
            opacity: 0,
            transform: 'translateX(-100%)',
          }}
        >
          DESIGN IN
        </div>

        <div
          ref={motionTextRef}
          className="absolute z-10 pointer-events-none"
          style={{ 
            bottom: '15%',
            right: '5%',
            fontSize: 'clamp(60px, 12vw, 180px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#2A2A2A',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 0.9,
            opacity: 0,
            transform: 'translateX(100%)',
          }}
        >
          MOTION
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="absolute z-10 pointer-events-none"
          style={{ 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          <p style={{ 
            fontSize: 'clamp(9px, 1.1vw, 13px)', 
            letterSpacing: '0.25em', 
            textTransform: 'uppercase',
            color: 'rgba(42, 42, 42, 0.6)',
            fontWeight: 500,
          }}>
            Exploring ideas through<br />daily design practice.
          </p>
        </div>

        {/* Bottom text */}
        <div
          ref={bottomTextRef}
          className="absolute z-10 pointer-events-none"
          style={{ 
            bottom: '32px',
            left: '32px',
            fontSize: 'clamp(9px, 0.9vw, 12px)',
            color: 'rgba(42, 42, 42, 0.5)',
            maxWidth: '260px',
            lineHeight: 1.6,
            opacity: 0,
          }}
        >
          Concepts, explorations, and interface experiments shared openly as part of our creative process.
        </div>

        {/* Dribbble link */}
        <div
          ref={dribbbleRef}
          className="absolute z-10 pointer-events-none"
          style={{ 
            bottom: '32px',
            right: '32px',
            fontSize: 'clamp(9px, 0.9vw, 11px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(42, 42, 42, 0.5)',
            opacity: 0,
          }}
        >
          VIEW ON DRIBBBLE →
        </div>

        {/* PHASE 3 & 4: 3D Film Strip Ribbon */}
        <div
          ref={ribbonRef}
          className="absolute inset-0"
          style={{
            opacity: 0,
            transformStyle: 'preserve-3d',
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="absolute"
              style={{
                width: 'clamp(160px, 14vw, 240px)',
                height: 'clamp(220px, 20vw, 340px)',
                left: '50%',
                top: '50%',
                transformStyle: 'preserve-3d',
                opacity: 0,
                willChange: 'transform, opacity',
              }}
            >
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}