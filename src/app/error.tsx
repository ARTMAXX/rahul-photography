"use client";

/**
 * Root error boundary. Shown when a runtime error is thrown during rendering
 * or data fetching. Reuses the visual language of not-found.tsx but with a
 * "Try again" button. The error message is logged to the console but not
 * surfaced to users.
 */
import Link from "next/link";
import { useEffect } from "react";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[rahulchandaphotography.com] Runtime error:", error);
  }, [error]);

  return (
    <main className="w-full min-h-screen bg-[#070707] text-[#f0f0f0] flex flex-col justify-between">
      <section className="relative flex-1 flex flex-col justify-center items-center px-6 md:px-12 pt-36 pb-20 max-w-[1200px] mx-auto text-center">
        {/* Ambient glow — same as not-found.tsx */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,59,44,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex border border-[#e83b2c]/20 py-1 px-4 rounded-full text-xs text-[#e83b2c] uppercase tracking-widest mb-6">
            Something went wrong
          </div>
          <h1 className="h-display mb-6">
            Frame <span className="italic text-[#e83b2c]">out of focus</span>.
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-[50ch] mx-auto leading-relaxed mb-10">
            An unexpected error occurred. The team has been notified. Please
            try again, or head back to the homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 bg-[#e83b2c] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#d63426] transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-7 py-3.5 rounded-full hover:text-white hover:border-white/30 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <CinematicFooter />
    </main>
  );
}
