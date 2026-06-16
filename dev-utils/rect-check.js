// Check rects at multiple scroll positions — verifies the 3D orbit
// is actually moving images to different screen positions
const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--hide-scrollbars', '--force-prefers-reduced-motion=no-preference'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=3', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  const stops = [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9];
  const out = [];
  for (const s of stops) {
    await page.evaluate((ss) => {
      const sec = document.getElementById('floating-gallery');
      if (!sec) return;
      const sp = sec.querySelector('.pin-spacer') || sec;
      const r = sp.getBoundingClientRect();
      const target = window.scrollY + r.top + r.height * ss;
      window.scrollTo(0, target);
    }, s);
    await new Promise((r) => setTimeout(r, 800));
    const data = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('.cg-img'));
      const rects = imgs
        .map((el) => {
          const r = el.getBoundingClientRect();
          const op = parseFloat(el.style.opacity || '0');
          return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), op };
        })
        .filter((r) => r.op > 0.1);
      return {
        visibleCount: rects.length,
        rects,
        spreadX: rects.length > 0 ? Math.max(...rects.map((r) => r.x)) - Math.min(...rects.map((r) => r.x)) : 0,
        spreadY: rects.length > 0 ? Math.max(...rects.map((r) => r.y)) - Math.min(...rects.map((r) => r.y)) : 0,
      };
    });
    out.push({ progress: s, ...data });
  }
  fs.writeFileSync('rect-check.json', JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})();
