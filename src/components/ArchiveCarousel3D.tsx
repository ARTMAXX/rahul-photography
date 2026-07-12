'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Loose Sketches',
    category: 'Visual Design',
    image: '/images/project-1.jpg',
    year: '2024'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    image: '/images/project-2.jpg',
    year: '2024'
  },
  {
    id: 3,
    title: 'Motion Graphics',
    category: 'Animation',
    image: '/images/project-3.jpg',
    year: '2023'
  },
  {
    id: 4,
    title: 'UI Exploration',
    category: 'Interface',
    image: '/images/project-4.jpg',
    year: '2023'
  },
  {
    id: 5,
    title: 'Typography Study',
    category: 'Type Design',
    image: '/images/project-5.jpg',
    year: '2024'
  }
];

export default function ArchiveCarousel3D() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.2) % 360);
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const delta = e.clientX - startX;
      setRotation(currentRotation + delta * 0.3);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getCardTransform = (index: number) => {
    const angle = (360 / projects.length) * index + rotation;
    const angleRad = (angle * Math.PI) / 180;

    const radiusX = 450;
    const radiusZ = 300;
    const offsetY = Math.sin(angleRad * 2) * 30;

    const x = Math.sin(angleRad) * radiusX;
    const z = Math.cos(angleRad) * radiusZ;
    const y = offsetY;

    const rotateY = -angle;

    const scale = 1 - (z / radiusZ) * 0.15;
    const opacity = 0.4 + (z / radiusZ) * 0.6;

    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(z)
    };
  };

  return (
    <div className="archive-carousel-3d">
      <div
        ref={containerRef}
        className="carousel-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="carousel-scene">
          {projects.map((project, index) => {
            const style = getCardTransform(index);
            return (
              <div
                key={project.id}
                className="project-card"
                style={style}
              >
                <div className="card-inner">
                  <div className="card-image">
                    <div className="placeholder-image" style={{
                      background: `linear-gradient(135deg,
                        hsl(${index * 72}, 70%, 60%),
                        hsl(${index * 72 + 40}, 60%, 50%))`
                    }} />
                  </div>
                  <div className="card-content">
                    <div className="card-category">{project.category}</div>
                    <h3 className="card-title">{project.title}</h3>
                    <div className="card-year">{project.year}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .archive-carousel-3d {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: grab;
          user-select: none;
        }

        .carousel-container:active {
          cursor: grabbing;
        }

        .carousel-scene {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          perspective: 1200px;
        }

        .project-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 340px;
          height: 440px;
          margin: -220px 0 0 -170px;
          transform-style: preserve-3d;
          transition: opacity 0.3s ease;
          pointer-events: auto;
        }

        .card-inner {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .project-card:hover .card-inner {
          transform: scale(1.02);
        }

        .card-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: 500;
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .card-category {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #999;
        }

        .card-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
          margin: 0;
        }

        .card-year {
          font-size: 14px;
          color: #666;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .archive-carousel-3d {
            height: 500px;
          }

          .project-card {
            width: 280px;
            height: 380px;
            margin: -190px 0 0 -140px;
          }

          .card-image {
            height: 240px;
          }

          .card-title {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
