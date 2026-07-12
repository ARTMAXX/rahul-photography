'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
}

export default function AnimatedText({
  text,
  className = '',
  staggerDelay = 0.1,
  duration = 0.6
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.3)',
            transition: `opacity ${duration}s ease-out ${index * staggerDelay}s, transform ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * staggerDelay}s`,
            marginRight: '0.3em'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
