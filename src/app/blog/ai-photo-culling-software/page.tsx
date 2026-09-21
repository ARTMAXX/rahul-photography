import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Photo Culling Software 2026",
  description:
    "AI photo culling software tested on real client work: Aftershoot vs Imagen vs Evoto vs Narrative — cull 2,000 photos in 20 minutes without losing keepers.",
  alternates: { canonical: "/blog/ai-photo-culling-software" },
  keywords: "AI photo culling software, AI culling photographers, Aftershoot vs Imagen, auto cull photos, AI photo culling wedding, Aftershoot review, Imagen AI review, AI photo selection",
  openGraph: {
    title: "AI Photo Culling Software — Cull 2,000 Shots in 20 Minutes",
    description:
      "A working commercial photographer in Dehradun ranks every major AI photo culling tool on real client work. What works, what loses your hero shots, and what to skip.",
    url: absoluteUrl("/blog/ai-photo-culling-software"),
    type: "article",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "AI Photo Culling Software Roundup — Rahul Chanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Photo Culling Software — Cull 2,000 Shots in 20 Minutes",
    description:
      "A working commercial photographer in Dehradun ranks every major AI photo culling tool on real client work.",
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
};

const aiCullingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": absoluteUrl("/blog") },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Photo Culling Software",
          "item": absoluteUrl("/blog/ai-photo-culling-software"),
        },
      ],
    },
    {
      "@type": "BlogPosting",
      headline:
        "AI Photo Culling Software: How Modern Photographers Cull 2,000 Shots in 20 Minutes",
      description:
        "A working commercial photographer in Dehradun ranks every major AI photo culling tool on real client work.",
      image: absoluteUrl("/opt/og-image.jpg"),
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      author: {
        "@type": "Person",
        name: "Rahul Chanda",
        url: absoluteUrl("/about"),
        jobTitle: "Commercial Product Photographer",
        image: absoluteUrl("/opt/about-photo/rahul-chanda-portrait.webp"),
      },
      publisher: { "@type": "Organization", name: "Rahul Chanda Photography" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best AI culling software for photographers in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For wedding and event photographers, Aftershoot is the most accurate AI culler. For portrait and volume studio work, Imagen AI pairs culling with auto-editing in one workflow. For product and commercial work where technical sharpness matters most, Evoto and Narrative both ship strong technical detection. Most working photographers should trial two of these on the same shoot before committing.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is AI photo culling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modern AI culling tools correctly flag 85-95% of technical rejects — closed eyes, motion blur, focus misses — on first pass. Where AI still loses is on subjective decisions: the one great candid moment between two posed frames, the rare expression, the unexpected gesture. The best workflow is AI first pass + photographer override, not AI-only.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI culling software replace a photographer's eye?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can replace the first 70-80% of culling work — the technical rejects that any photographer would also delete. It cannot replace the final 20%: the hero moment, the candid expression, the storytelling frame. The right model is AI-first, human-final, with the photographer reviewing flagged rejects and AI-rejected picks in one focused session.",
          },
        },
        {
          "@type": "Question",
          name: "How much does AI culling software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI culling tools charge per image: Aftershoot is around $0.04-0.10 per image, Imagen AI starts at $0.05 per image, Evoto is subscription-based at $7.99/month, Narrative is around $0.04 per image. For a 2,000-image wedding, expect $80-200 in culling costs — versus 4-6 hours of manual photographer time at $100+/hour billable.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI culling tool is best for wedding photographers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aftershoot is the most widely adopted by wedding photographers in 2026 because it ships the strongest expression and group-keep logic. Imagen AI is a close second for studios that want culling + auto-editing in one step. Both let the photographer override picks before delivery.",
          },
        },
      ],
    },
  ],
};

export default function AICullingSoftwareBlog() {
  return (
    <main className="w-full bg-[#070707] text-[#f0f0f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiCullingSchema),
        }}
      />

      <section className="relative w-full min-h-[60vh] flex flex-col justify-end px-4 md:px-12 pb-20 pt-40">
        <div className="max-w-[900px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#e83b2c]">
            AI & Photography
          </span>
          <h1 className="h-display">
            AI Photo Culling Software: How Modern Photographers Cull 2,000 Shots in 20 Minutes
          </h1>
          <p className="t-lede mt-6 mb-8">
            A working commercial photographer in Dehradun ranks every major AI photo culling tool on real client work. What works, what loses your hero shots, and what to skip.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>September 4, 2026</span>
            <span>' </span>
            <span>13 min read</span>
            <span>' </span>
            <span>By Rahul Chanda</span>
          </div>

          <div className="mt-10 border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-widest text-[#e83b2c] mb-4 font-medium">
              Key Takeaways
            </p>
            <ul className="space-y-2">
              {[
                "AI culling handles 70-80% of technical rejects reliably — closed eyes, motion blur, focus misses. The remaining 20% still demands a photographer's eye for hero moments.",
                "The right workflow is AI-first, human-final. AI flags the rejects; the photographer makes the final keeper decisions in a focused review session.",
                "Aftershoot, Imagen AI, Evoto, and Narrative each serve different photographers. Wedding shooters have a different winner than product shooters.",
                "Culling cost is $80-200 per 2,000 images — versus 4-6 hours of billable photographer time. The ROI math is real.",
              ].map((point, i) => (
                <li
                  key={i}
                  className="text-white/70 text-sm leading-relaxed pl-2 border-l border-white/10"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-4 md:px-12 py-24">
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            The Culling Problem in 2026
          </h2>
          <p className="t-body mb-4">
            Culling — the process of sorting thousands of captures down to the
            final keepers — is the single largest time-sink in modern
            photography. A wedding wedding shooter returns 4,000-8,000 frames
            to a client. A commercial product shooter runs 600-1,500 frames
            per catalog job. A portrait shooter can shoot 800 in a single
            session.
          </p>
          <p className="t-body mb-4">
            At a typical 2-3 seconds per frame for a focused human review, a
            4,000-frame wedding is 2.5-3.5 hours of pure culling time before
            the editing even begins. For a working photographer billing
            ₹8,000-15,000/hour, that is a non-billable cost or a billable
            line item the client is starting to question.
          </p>
          <p className="t-body">
            AI culling tools promise to cut that time by 70-90%. In my Dehradun
            studio, I have run real client shoots through every major tool. This
            is what actually works.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            How AI Photo Culling Actually Works
          </h2>
          <p className="t-body mb-4">
            Before ranking tools, it helps to understand what they are doing
            under the hood, because the differences between tools are mostly
            about which signals they prioritize.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                signal: "Technical Detection",
                desc: "Blur, focus misses, exposure problems, camera shake. Most AI cullers score this very accurately — over 95% match with human judgment on hard technical rejects.",
              },
              {
                signal: "Eye & Expression Detection",
                desc: "Open eyes, smiles, blink detection, group consistency. Strong on Aftershoot and Imagen; weak on Evoto and older tools. Critical for portrait and wedding work.",
              },
              {
                signal: "Composition Scoring",
                desc: "AI scores 'composition quality' based on rule-of-thirds, leading lines, symmetry. The weakest signal — AI consistently misses the candid frame between two posed frames that is the actual hero shot.",
              },
              {
                signal: "Duplicate / Burst Detection",
                desc: "Groups near-identical frames from a burst sequence and keeps the best. Highly reliable across all tools. Where AI shines.",
              },
              {
                signal: "Subject & Face Grouping",
                desc: "Identifies the same person across frames to ensure coverage. Useful for events and group portraits where you need at least one frame of every guest with their eyes open.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-[#e83b2c] pl-6 py-4 bg-white/[0.03]">
                <h4 className="text-white font-serif mb-2">{item.signal}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="t-body">
            Tools that combine technical detection with strong eye/expression
            analysis score highest for portrait and wedding work. Tools that
            prioritize technical detection score highest for product and
            commercial work where expression is not the variable.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            The 6 AI Culling Tools Worth Your Time
          </h2>
          <p className="t-body mb-4">
            Ranked by what I actually use at my Dehradun studio for the
            specific shoot types each tool serves best. Anything not on this
            list did not survive the 18-month test.
          </p>

          <div className="space-y-6 mt-8">
            {[
              {
                rank: "1",
                name: "Aftershoot",
                best: "Wedding, event, portrait photographers shooting 2,000+ frames per job",
                indiaPrice: "$0.04-0.10 per image (pay-as-you-go); $15/month unlimited (Cull subscription)",
                why: "Aftershoot is the most accurate expression-and-eye AI culler in 2026. Its group-keep logic — ensuring you have at least one good frame of every subject with eyes open — is the killer feature for weddings and corporate events. On a 4,000-frame Indian wedding, Aftershoot cut my culling time from 3 hours to 25 minutes. The 5% it loses are the candid hero moments between two technically-correct frames — which is exactly why you still review the AI-rejected picks before final delivery.",
                verdict: "Best overall AI culler for high-volume portrait and event photographers.",
              },
              {
                rank: "2",
                name: "Imagen AI",
                best: "Lightroom Classic photographers who want cull + edit in one pipeline",
                indiaPrice: "From $0.05 per image; subscription plans from $30/month",
                why: "Imagen's edge is workflow integration. You cull and edit in the same Lightroom Classic session. The AI learns your editing style from 3,000+ of your previous edits and applies it on the kept images. For wedding studios delivering 4,000+ finished images per job, Imagen cuts the post-production pipeline in half. Slightly behind Aftershoot on pure expression detection, ahead on edit consistency.",
                verdict: "Best for studios with established editing styles and Lightroom Classic workflows.",
              },
              {
                rank: "3",
                name: "Evoto AI",
                best: "Tethered commercial shoots, on-model e-commerce, fashion catalog",
                indiaPrice: "From $7.99/month per photographer",
                why: "Evoto is the best culler for tethered product and commercial shoots. You see the cull decision live as the images come off the camera. Its technical detection (focus, exposure, color consistency) is excellent. For e-commerce catalog work where you need identical lighting/exposure across 800 frames of the same SKU, Evoto's consistency scoring is unmatched. Weaker on expression and group coverage than Aftershoot.",
                verdict: "Best for tethered commercial and product photography.",
              },
              {
                rank: "4",
                name: "Narrative",
                best: "Storytelling-first culling, narrative-driven galleries",
                indiaPrice: "$0.04 per image",
                why: "Narrative takes a different approach — instead of scoring every frame individually, it ranks sequences of frames for narrative flow. It keeps the strongest frame from each 'moment' in a wedding day, then ranks moments against each other. The output is a tighter, more story-driven gallery. Less popular than Aftershoot, but the philosophy is interesting for editorial wedding work.",
                verdict: "Best for editorial wedding photographers who prioritize narrative over coverage.",
              },
              {
                rank: "5",
                name: "Adobe Lightroom AI Culling (Lightroom 2026)",
                best: "Lightroom loyalists who want a free option bundled with their existing subscription",
                indiaPrice: "Included with Lightroom (₹1,034/month) and Creative Cloud",
                why: "Lightroom's built-in AI culling shipped in 2025 and has improved significantly in 2026. It handles technical detection well, expression detection adequately, and the integration with the rest of Lightroom's workflow is seamless. The catch: it is the slowest of the dedicated AI cullers, and the group-keep logic is still maturing. For a casual Lightroom user who shoots 500 frames per session, it is good enough. For a wedding shooter running 4,000+ frames, Aftershoot is still faster.",
                verdict: "Best free / bundled option. Pro shooters will outgrow it.",
              },
              {
                rank: "6",
                name: "Excire Foto",
                best: "Photo organization, AI-powered search across years of archives",
                indiaPrice: "$99 one-time; Pro $199 one-time",
                why: "Excire is technically an organizer, not a culler, but its AI search is good enough to qualify. It auto-tags people, objects, scenes, and colors across your archive. For photographers with 10+ years of work who need to find 'that beach wedding from 2019 with the bride in the red saree,' Excire is unmatched. It also has a basic cull mode that handles technical rejects adequately.",
                verdict: "Best for archive organization, not for primary shoot culling.",
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="border-l-4 border-[#e83b2c] pl-6 py-5 bg-white/[0.03]"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#e83b2c] font-serif text-2xl">
                    #{tool.rank}
                  </span>
                  <h3 className="text-2xl font-serif text-white">{tool.name}</h3>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                  Best for: {tool.best}
                </p>
                <p className="text-[11px] uppercase tracking-widest text-[#e83b2c]/70 mb-4">
                  India pricing: {tool.indiaPrice}
                </p>
                <p className="text-white/70 leading-relaxed mb-3">
                  {tool.why}
                </p>
                <p className="text-white/80 text-sm italic border-l border-white/20 pl-3">
                  {tool.verdict}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            The Honest Failure Mode: What AI Culling Still Loses
          </h2>
          <p className="t-body mb-4">
            Every AI culler misses the same thing. It is the same thing that
            makes photography art rather than data processing. Before you trust
            any of these tools with a client delivery, internalize this.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                title: "The Candid Hero Frame",
                detail: "Two posed frames in a sequence. AI picks the technically perfect one with eyes open. The photographer picks the third frame between them — the moment when the bride glanced at her mother and laughed. That is the frame the client prints 16x20 and hangs. AI cannot yet detect it.",
              },
              {
                title: "The Expression-No-One-Expected",
                detail: "An unposed, unscripted expression that breaks the formal mood of a portrait session. AI scores it low because it does not match the smiling pattern it was trained on. The photographer keeps it because it is the most honest frame of the day.",
              },
              {
                title: "The Mistake That Works",
                detail: "Motion blur on a dancing couple that was supposed to be tack-sharp. AI rejects it. The photographer keeps it because motion blur on a dance floor is emotion, not error.",
              },
              {
                title: "The Unflinching Subject",
                detail: "A serious expression in a session that was supposed to be all smiles. AI scores it lower than the smiling frames. The photographer keeps it because the serious frame is the one that becomes the cover of the wedding magazine.",
              },
            ].map((fail, idx) => (
              <div
                key={idx}
                className="border-l-4 border-white/20 pl-6 py-4 bg-white/[0.02]"
              >
                <h4 className="text-white font-serif mb-2">{fail.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {fail.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="t-body">
            The right workflow is AI-first, human-final. The AI handles the
            first 70-80% of technical rejects. The photographer makes the
            final keeper decisions in a focused 30-minute review of the AI's
            rejects and weak-confidence picks. This is the workflow the
            top-grossing wedding studios in India now use.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            The AI Culling Workflow at My Dehradun Studio
          </h2>
          <p className="t-body mb-4">
            For a typical 4,000-frame Indian wedding job, here is the actual
            culling pipeline we run, with real time costs.
          </p>
          <div className="space-y-4 mb-6">
            {[
              { stage: "1. Import + initial AI cull", tool: "Aftershoot", time: "18-22 minutes (cloud processing)" },
              { stage: "2. AI-rejected review (override pass)", tool: "Photographer", time: "30-40 minutes" },
              { stage: "3. AI-kept review (filter false positives)", tool: "Photographer", time: "20-30 minutes" },
              { stage: "4. Final keeper list to editing", tool: "Lightroom Classic", time: "5 minutes" },
              { stage: "5. Total culling time", tool: "Combined", time: "~1.5 hours (was 4-5 hours manual)" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-serif">{row.stage}</div>
                <div className="text-white/70 text-sm">{row.tool}</div>
                <div className="text-[#e83b2c] text-sm">{row.time}</div>
              </div>
            ))}
          </div>
          <p className="t-body">
            The output is the same number of keepers (around 600-800 per
            wedding) with the same technical quality. The difference is 3-4
            hours of photographer time recovered per job — time we now spend
            on creative work that actually justifies the rate.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            ROI Math for Indian Photographers
          </h2>
          <p className="t-body mb-4">
            The case for AI culling is not philosophical, it is financial. Run
            the numbers:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { item: "Manual cull — 4,000 frames", value: "4 hours at ₹10,000/hour = ₹40,000 (or non-billable time)" },
              { item: "AI cull (Aftershoot) — 4,000 frames", value: "$0.05/image × 4,000 = $200 = ~₹16,500" },
              { item: "AI override review (photographer)", value: "1 hour at ₹10,000/hour = ₹10,000" },
              { item: "Total AI cost", value: "₹26,500" },
              { item: "Net savings per wedding", value: "₹13,500 per wedding" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-serif text-sm">{row.item}</div>
                <div className="text-[#e83b2c] text-sm">{row.value}</div>
              </div>
            ))}
          </div>
          <p className="t-body">
            For a wedding studio doing 30 weddings a year, that is ₹4 lakh in
            recovered billable time annually. The AI subscription pays for
            itself inside the first 3 weddings.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">
            What I Would Skip in 2026
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "AI Culling Apps Bundled With Camera Brands",
                detail: "Canon, Nikon, and Sony have all shipped in-camera or bundled AI culling. The accuracy is 60-70% — usable for a hobbyist, too unreliable for client delivery. The dedicated tools above run 85-95%.",
              },
              {
                title: "Cloud Culling With No Photographer Override",
                detail: "A few newer tools offer AI-only culling with no review step. The 5-15% error rate is too high for any client-facing delivery. Always keep the photographer override in the loop.",
              },
              {
                title: "Standalone Culling Hardware Boxes",
                detail: "Several Kickstarter-grade hardware boxes have shipped AI culling on local SSD. Throughput is limited, software support ends within a year, and the per-image cost is higher than Aftershoot. Stick to cloud or desktop apps.",
              },
            ].map((warn, idx) => (
              <div key={idx} className="border-l-4 border-white/20 pl-6 py-4 bg-white/[0.02]">
                <h4 className="text-white font-serif mb-2">{warn.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {warn.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Final Verdict</h2>
          <p className="t-body mb-4">
            AI culling is the most under-adopted time-saver in working
            photography in 2026. The tools are mature, the pricing is fair,
            and the ROI math is unambiguous. If you are still culling 4,000
            frames manually, you are losing 3-4 hours per job to work a
            computer should be doing.
          </p>
          <p className="t-body mb-4">
            Start with Aftershoot on your next wedding. Run the AI cull, then
            spend 30 minutes overriding the rejects. Time the difference. You
            will not go back.
          </p>
          <p className="t-body">
            The next frontier is AI-driven editing — Imagen is already there,
            Aftershoot is catching up, and Adobe Lightroom is closing fast.
            That is the next round of recovered time.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="h-section mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                What is the best AI culling software for photographers in
                2026?
              </h3>
              <p className="t-body mt-2">
                For wedding and event photographers, Aftershoot is the most
                accurate AI culler. For portrait and volume studio work,
                Imagen AI pairs culling with auto-editing in one workflow. For
                product and commercial work where technical sharpness matters
                most, Evoto and Narrative both ship strong technical
                detection. Most working photographers should trial two of
                these on the same shoot before committing.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                How accurate is AI photo culling?
              </h3>
              <p className="t-body mt-2">
                Modern AI culling tools correctly flag 85-95% of technical
                rejects — closed eyes, motion blur, focus misses — on first
                pass. Where AI still loses is on subjective decisions: the
                one great candid moment between two posed frames, the rare
                expression, the unexpected gesture. The best workflow is AI
                first pass + photographer override, not AI-only.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                Can AI culling software replace a photographer's eye?
              </h3>
              <p className="t-body mt-2">
                AI can replace the first 70-80% of culling work — the
                technical rejects that any photographer would also delete. It
                cannot replace the final 20%: the hero moment, the candid
                expression, the storytelling frame. The right model is
                AI-first, human-final, with the photographer reviewing flagged
                rejects and AI-rejected picks in one focused session.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                How much does AI culling software cost?
              </h3>
              <p className="t-body mt-2">
                Most AI culling tools charge per image: Aftershoot is around
                $0.04-0.10 per image, Imagen AI starts at $0.05 per image,
                Evoto is subscription-based at $7.99/month, Narrative is
                around $0.04 per image. For a 2,000-image wedding, expect
                $80-200 in culling costs — versus 4-6 hours of manual
                photographer time at ₹8,000-15,000/hour billable.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                Which AI culling tool is best for wedding photographers?
              </h3>
              <p className="t-body mt-2">
                Aftershoot is the most widely adopted by wedding photographers
                in 2026 because it ships the strongest expression and
                group-keep logic. Imagen AI is a close second for studios
                that want culling + auto-editing in one step. Both let the
                photographer override picks before delivery.
              </p>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <div className="flex gap-6 items-start">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 hidden md:block">
              <Image
                src="/opt/about-photo/rahul-chanda-portrait.webp"
                alt="Rahul Chanda, commercial product photographer"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#e83b2c] mb-2">
                About the author
              </p>
              <h3 className="text-lg font-serif text-white mb-2">
                <Link
                  href="/about"
                  className="hover:text-[#e83b2c] transition-colors"
                >
                  Rahul Chanda
                </Link>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Commercial product photographer based in Dehradun, India. 6+
                years shooting product, food & beverage, and advertising
                campaigns with in-house retouching. Serving brands across
                Uttarakhand and pan-India.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs text-[#e83b2c] hover:text-[#f0523f] mt-3 transition-colors"
              >
                View full profile <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-serif text-white mb-4">
              Need a Studio for High-Volume Product Shoots?
            </h3>
            <p className="text-white/70 mb-6">
              We run AI culling in our Dehradun studio for tethered product
              shoots, on-model e-commerce, and high-volume catalog work. The
              workflow lets us deliver 800-image catalog jobs in days, not
              weeks, with the same technical quality your marketplace
              compliance team expects.
            </p>
            <Link
              href="/services/product-photography"
              className="inline-flex items-center gap-2 text-[#e83b2c] hover:text-[#e83b2c]/80 transition-colors"
            >
              Book Product Photography
            </Link>
          </div>
        </section>
      </article>

      <CinematicFooter />
    </main>
  );
}