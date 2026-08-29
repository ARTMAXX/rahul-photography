'use client';

import { useEffect, useState } from 'react';
import CinematicCylinder from './CinematicCylinder';
import MobileBentoGrid from './MobileBentoGrid';

/* "¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½
   DesignInMotion  —  Desktop: 3D Cylinder Carousel
                     Mobile:  Dark Bento Grid
   "¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½"¢½ */
export default function DesignInMotion() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return <MobileBentoGrid />;
  }

  return <CinematicCylinder />;
}
