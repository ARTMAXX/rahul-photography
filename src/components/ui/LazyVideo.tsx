"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { useIsMobile } from "@/lib/hooks";

interface LazyVideoProps {
  /** Video file (mp4). */
  src: string;
  /** Poster frame (webp)  —  also THE rendering on mobile. */
  poster: string;
  className?: string;
  style?: CSSProperties;
  /**
   * Desktop preload strategy. Use "auto" only for above-the-fold video
   * (hero); everything else should stay "metadata".
   */
  preload?: "auto" | "metadata" | "none";
  /** Alt text used for the mobile poster image. */
  alt?: string;
  /** Mark decorative (backdrop videos). */
  decorative?: boolean;
}

/**
 * LazyVideo  —  viewport-gated background/inline video.
 *
 * - Mobile (<768px): renders ONLY the poster image. No video element is
 *   created at all  —  saves data, battery, and decode work on phones while
 *   keeping the same visual composition.
 * - Desktop: renders the video but plays it only while intersecting the
 *   viewport; pauses (and releases decode) when scrolled away or when the
 *   tab is hidden.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  style,
  preload = "metadata",
  alt = "",
  decorative = false,
}: LazyVideoProps) {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;

    let isVisible = false;
    let isTabVisible = !document.hidden;

    const sync = () => {
      if (isVisible && isTabVisible) {
        video.play().catch(() => {
          /* autoplay policies  —  stay paused silently */
        });
      } else {
        video.pause();
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 }
    );
    io.observe(video);

    const onVisibility = () => {
      isTabVisible = !document.hidden;
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    };
  }, [isMobile, src]);

  /* "" Mobile: premium static frame, zero video cost "" */
  if (isMobile) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt={decorative ? "decorative background" : alt}
        aria-hidden={decorative || undefined}
        className={`${className} select-none`}
        style={style}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );
  }

  /* "" Desktop: real video, IO-gated playback "" */
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      className={className}
      style={style}
      aria-hidden={decorative || undefined}
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
