/**
 * Root loading state. Shown while a route segment is being prepared.
 * Mirrors the dark editorial styling of the rest of the site so users
 * don't see a blank white screen on slow connections.
 */
export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="w-full min-h-screen bg-[#070707] text-[#f0f0f0] flex flex-col"
    >
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-12 pt-44 pb-24">
        {/* Hero skeleton */}
        <div className="h-[60vh] w-full rounded-2xl bg-white/[0.04] animate-pulse" />

        {/* Section skeleton 1 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 rounded-xl bg-white/[0.04] animate-pulse" />
          <div className="h-64 rounded-xl bg-white/[0.04] animate-pulse" />
        </div>

        {/* Section skeleton 2 */}
        <div className="mt-16 h-32 w-full rounded-xl bg-white/[0.04] animate-pulse" />
      </div>
      <span className="sr-only">Loading…</span>
    </main>
  );
}
