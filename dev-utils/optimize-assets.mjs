/**
 * optimize-assets.mjs — One-shot media optimization pipeline.
 *
 * Generates optimized derivatives into public/opt/ WITHOUT touching the
 * original masters in public/. Component code is updated separately to
 * reference the /opt/... paths.
 *
 * Usage: node dev-utils/optimize-assets.mjs [--images-only|--videos-only]
 */
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public");
const OUT = path.join(PUB, "opt");
const FFMPEG = path.join(ROOT, "node_modules", "ffmpeg-static", "ffmpeg.exe");

const args = process.argv.slice(2);
const IMAGES_ONLY = args.includes("--images-only");
const VIDEOS_ONLY = args.includes("--videos-only");

/** Ensure output dir exists */
function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

/** Convert an image to WebP at a max width. Returns [outPath, bytes]. */
async function toWebp(srcRel, maxW, quality, outName) {
  const src = path.join(PUB, srcRel);
  if (!fs.existsSync(src)) {
    console.warn(`  !! missing: ${srcRel}`);
    return null;
  }
  const base = outName || path.basename(srcRel).replace(/\.(png|jpe?g|webp)$/i, "");
  const dest = path.join(OUT, path.dirname(srcRel), `${base}.webp`);
  ensureDir(dest);
  const img = sharp(src).rotate(); // respect EXIF
  const meta = await img.metadata();
  const w = Math.min(meta.width, maxW);
  await img
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(dest);
  const bytes = fs.statSync(dest).size;
  console.log(
    `  ${path.relative(PUB, dest).padEnd(64)} ${(bytes / 1024).toFixed(0).padStart(6)} KB  (${meta.width}x${meta.height} -> w${w})`
  );
  return dest;
}

/** Extract a poster frame from a video as WebP. */
function videoPoster(videoRel, maxW = 1280, quality = 72) {
  const src = path.join(PUB, videoRel);
  if (!fs.existsSync(src)) {
    console.warn(`  !! missing video: ${videoRel}`);
    return;
  }
  const base = path.basename(videoRel).replace(/\.mp4$/i, "");
  const tmpPng = path.join(OUT, "tmp", `${base}.png`);
  ensureDir(tmpPng);
  // Seek 0.6s in, grab one frame, scale down
  try {
    execFileSync(FFMPEG, [
      "-y", "-loglevel", "error",
      "-ss", "0.6", "-i", src,
      "-frames:v", "1",
      "-vf", `scale='min(${maxW},iw)':-2`,
      tmpPng,
    ]);
    const dest = path.join(OUT, path.dirname(videoRel), `${base}-poster.webp`);
    ensureDir(dest);
    return sharp(tmpPng)
      .webp({ quality, effort: 4 })
      .toFile(dest)
      .then(() => {
        fs.rmSync(tmpPng, { force: true });
        const kb = (fs.statSync(dest).size / 1024).toFixed(0);
        console.log(`  ${path.relative(PUB, dest).padEnd(64)} ${kb.padStart(6)} KB  poster`);
      });
  } catch (e) {
    console.error(`  !! poster failed for ${videoRel}: ${e.message}`);
  }
}

/** Probe video dimensions by parsing `ffmpeg -i` stderr (no ffprobe available). */
function probeVideo(src) {
  try {
    execFileSync(FFMPEG, ["-i", src], { stdio: ["ignore", "ignore", "pipe"] });
  } catch (e) {
    const errText = e.stderr ? e.stderr.toString() : "";
    const m = errText.match(/Stream #.*Video:.*?, (\d{2,5})x(\d{2,5})/);
    if (m) return { width: parseInt(m[1], 10), height: parseInt(m[2], 10) };
  }
  return { width: 0, height: 0 };
}

/** Re-encode a video: H.264 CRF, scaled (no upscaling), no audio, faststart. */
function reencodeVideo(videoRel, maxW, crf = 27) {
  const src = path.join(PUB, videoRel);
  if (!fs.existsSync(src)) {
    console.warn(`  !! missing video: ${videoRel}`);
    return;
  }
  const dest = path.join(OUT, videoRel.replace(/\.mp4$/i, ".mp4"));
  ensureDir(dest);
  const before = fs.statSync(src).size;
  const { width } = probeVideo(src);
  const targetW = width > 0 ? Math.min(maxW, width) : maxW;
  try {
    execFileSync(FFMPEG, [
      "-y", "-loglevel", "error",
      "-i", src,
      "-vf", `scale=${targetW}:-2`,
      "-c:v", "libx264",
      "-preset", "slow",
      "-crf", String(crf),
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      "-an", // mute — every video on this site is muted anyway
      dest,
    ]);
    const after = fs.statSync(dest).size;
    console.log(
      `  ${path.relative(PUB, dest).padEnd(64)} ${(after / 1048576).toFixed(2).padStart(6)} MB  (was ${(before / 1048576).toFixed(2)} MB, ${width}x? -> w${targetW})`
    );
  } catch (e) {
    console.error(`  !! video failed for ${videoRel}: ${e.message.split("\n")[0]}`);
  }
}

/* ──────────────────────────────────────────────────────────────── */

const CYLINDER_IMAGES = [
  "best shots/Product image/product-headphone.webp",
  "best shots/Product image/product-watch-luxury.webp",
  "best shots/Product image/product-bodywash.webp",
  "best shots/Product image/product-serum.webp",
  "best shots/Product image/product-molton-brown.webp",
  "best shots/Beverage images/bev-iced.webp",
  "best shots/Beverage images/bev-macro.webp",
  "best shots/Food photo/food-biriyani.webp",
  "best shots/Food photo/food-chicken.webp",
  "best shots/mens shoe/shoe-mens-campaign.webp",
  "best shots/ladies shoe/High-end-shoe.webp",
  "best shots/ADs/ad-culinary.webp",
];

const PARALLAX_JPGS = [
  "best shots/new-images/new-product-luxury -sandel.jpg",
  "best shots/new-images/new-product-heel.jpg",
  "best shots/new-images/new-juice-01.jpg",
  "best shots/new-images/new-product-bold.jpg",
  "best shots/new-images/new-product-blast.jpg",
];

const PARALLAX_VIDEOS = [
  "best shots/Product image/product-energy-can.mp4",
  "best shots/Product image/modern-athleti-sneaker.mp4", // NOTE: actually lives in Product image/, not mens shoe/
  "best shots/ladies shoe/shoe-ladies-video.mp4",
  "best shots/mens shoe/shoe-mens-video.mp4",
];

const BG_VIDEOS = [
  "main hero shots/hero-video.mp4",
  "cinematic-assets/photographer-studio.mp4",
  "cinematic-assets/editing-video.mp4",
  "cinematic-assets/bts-watch.mp4",
];

const GALLERY_PNGS = [
  "best shots/Beverage images/beverage-macro.png",
  "best shots/Beverage images/iced-drinks.png",
];

/**
 * Gallery + parallax references that had no /opt derivative.
 * Sources are the (already-webp) masters in public/best shots — we lighten
 * them into public/opt at display-appropriate width so no page ever ships
 * a 700KB image for a 390px-wide slot.
 */
const LIGHTEN_WEBPS = [
  // Gallery — Product
  ["best shots/Product image/product-hairspray.webp", 1200, 74],
  ["best shots/Product image/product-watch-dark.webp", 1200, 74],
  ["best shots/Product image/headphone-jbl.webp", 1200, 74],
  ["best shots/Product image/energy-drink-design.webp", 1200, 74],
  ["best shots/Product image/product-energy-shot.webp", 1200, 74],
  // Gallery — Food & Beverage
  ["best shots/Food photo/food-buffet.webp", 1400, 74],
  ["best shots/Food photo/food-cream-macro.webp", 1200, 74],
  ["best shots/Food photo/food-curry.webp", 1200, 74],
  ["best shots/Food photo/food-mutton.webp", 1200, 74],
  ["best shots/Beverage images/bev-toast.webp", 1200, 74],
  ["best shots/Beverage images/three-iced-drinks.webp", 1400, 74],
  // Gallery — Footwear
  ["best shots/ladies shoe/shoe-ladies-heels.webp", 1200, 74],
  ["best shots/ladies shoe/shoe-ladies-mule.webp", 1200, 74],
  ["best shots/mens shoe/shoe-mens-white.webp", 1200, 74],
  ["best shots/mens shoe/shoe-mens-duo.webp", 1200, 74],
  ["best shots/mens shoe/modern-athletic-sneaker.webp", 1400, 74],
  // Gallery — Campaigns
  ["best shots/ADs/ad-popout.webp", 1200, 74],
  // Parallax extras (SelectedWorkParallax)
  ["best shots/Food photo/Biriyani photo.webp", 1100, 76],
];

async function main() {
  fs.mkdirSync(path.join(OUT, "tmp"), { recursive: true });
  const t0 = Date.now();

  if (!VIDEOS_ONLY) {
    console.log("\n── IMAGES ──────────────────────────────────────────────");
    console.log("Mobile hero (LCP):");
    await toWebp("hero-mobile.png", 900, 80);

    console.log("Desktop hero poster:");
    await toWebp("main hero shots/main hero landing page.png", 1600, 74);

    console.log("Parallax thumbnails (JPG -> WebP):");
    for (const j of PARALLAX_JPGS) await toWebp(j, 1100, 76);

    console.log("Gallery oversized PNGs:");
    for (const p of GALLERY_PNGS) await toWebp(p, 1400, 76);

    console.log("Lighten remaining gallery/parallax webps into /opt:");
    for (const [rel, w, q] of LIGHTEN_WEBPS) await toWebp(rel, w, q);

    console.log("Cylinder atlas sources (re-encode lighter):");
    for (const c of CYLINDER_IMAGES) await toWebp(c, 1024, 70);

    console.log("About portrait (already webp, lighten):");
    await toWebp("about me photo/1me.webp", 1400, 78);

    console.log("OG image:");
    {
      const src = path.join(PUB, "og-image.png");
      const dest = path.join(OUT, "og-image.jpg");
      await sharp(src).jpeg({ quality: 84, mozjpeg: true }).toFile(dest);
      console.log(`  opt/og-image.jpg ${(fs.statSync(dest).size / 1024).toFixed(0)} KB`);
    }
  }

  if (!IMAGES_ONLY) {
    console.log("\n── VIDEO POSTERS ───────────────────────────────────────");
    for (const v of [...PARALLAX_VIDEOS, ...BG_VIDEOS]) {
      await videoPoster(v);
    }

    console.log("\n── VIDEO RE-ENCODES ────────────────────────────────────");
    console.log("Hero video (desktop LCP adjacent):");
    reencodeVideo("main hero shots/hero-video.mp4", 1600, 26);

    console.log("Background loops:");
    reencodeVideo("cinematic-assets/photographer-studio.mp4", 1280, 28);
    reencodeVideo("cinematic-assets/editing-video.mp4", 1280, 28);
    reencodeVideo("cinematic-assets/bts-watch.mp4", 1280, 28);

    console.log("Parallax card videos (displayed at 480px):");
    for (const v of PARALLAX_VIDEOS) reencodeVideo(v, 960, 27);
  }

  console.log(`\nDone in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
