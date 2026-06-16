// Quick screenshot helper — captures the gallery at multiple scroll
// positions so I can see the motion without manual scrolling.
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, 'cg-shots');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: [
      '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--hide-scrollbars',
      // Override headless Chrome's default prefers-reduced-motion: reduce
      // so we see the real orbit animation.
      '--force-prefers-reduced-motion=no-preference',
      '--force-color-profile=srgb',
    ],
    defaultViewport: { width: 1440, height: 900 },
  });
  try {
    const page = await browser.newPage();
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    // give Lenis + GSAP + image preloading time to bootstrap
    await new Promise((r) => setTimeout(r, 4000));

    // Find the gallery's section + its pin's scroll range
    const range = await page.evaluate(() => {
      const sec = document.getElementById('floating-gallery');
      const rect = sec.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const pinSpacer = sec.querySelector('.pin-spacer') || sec;
      const psRect = pinSpacer.getBoundingClientRect();
      const pinTop = window.scrollY + psRect.top;
      const pinHeight = psRect.height; // includes the 500vh scroll range
      return { top, pinTop, pinHeight };
    });
    console.log('range', range);

    // Capture at: start, 25%, 40%, 50%, 60%, 75%, end of the pin
    const stops = [0, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1.0];
    for (let i = 0; i < stops.length; i++) {
      const y = range.pinTop + range.pinHeight * stops[i] - 0; // pin handles it
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await new Promise((r) => setTimeout(r, 600));
      const file = path.join(OUT, `cg-${String(i).padStart(2, '0')}-p${Math.round(stops[i] * 100)}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log('  saved', file);
    }
  } catch (e) {
    console.error('FAILED:', e.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
