"use client";

import TileScrollGrid, {
    TileGridSection,
    TileAsset,
} from "./TileScrollGrid";

const images: TileAsset[] = [
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        alt: "Mountain landscape",
        caption: "Alpine Summit",
        category: "Nature",
    },
    {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        alt: "Misty forest",
        caption: "Forest Mist",
        category: "Nature",
    },
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        alt: "Sunrise valley",
        caption: "Morning Light",
        category: "Nature",
    },
    {
        src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
        alt: "Ancient tree",
        caption: "Ancient Roots",
        category: "Nature",
    },
    {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        alt: "Starry mountain",
        caption: "Star Peak",
        category: "Nature",
    },
    {
        src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
        alt: "Woman portrait",
        caption: "Ethereal Gaze",
        category: "Portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        alt: "Fashion portrait",
        caption: "Modern Elegance",
        category: "Portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
        alt: "Artistic portrait",
        caption: "Studio Art",
        category: "Portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
        alt: "Natural beauty",
        caption: "Natural Glow",
        category: "Portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        alt: "Man portrait",
        caption: "Classic Style",
        category: "Portrait",
    },
];

const sections: TileGridSection[] = [
    {
        id: "portfolio-1",
        variant: "tiles--rotated",
        rows: [
            {
                images: [...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5)],
                speed: 3,
            },
            {
                images: [...images.slice(5, 10), ...images.slice(5, 10), ...images.slice(5, 10), ...images.slice(5, 10)],
                speed: -3,
            },
            {
                images: [...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5)],
                speed: 2.5,
            },
            {
                images: [...images.slice(5, 10), ...images.slice(5, 10), ...images.slice(5, 10), ...images.slice(5, 10)],
                speed: -2.5,
            },
            {
                images: [...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5), ...images.slice(0, 5)],
                speed: 3.5,
            },
        ],
    },
];

export default function PortfolioArchive() {
    return (
        <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden">
            {/* Title Overlay */}
            <div className="tiles__title tiles__title--alt">
                <span>Portfolio</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />
            <TileScrollGrid sections={sections} />
        </section>
    );
}
