// Diagnose why all images are at the same screen position
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 4000));

  // Scroll to mid-gallery
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.4);
  });
  await new Promise((r) => setTimeout(r, 800));

  const diag = await page.evaluate(() => {
    const rect = (el) => {
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, left: r.left };
    };
    const out = {};
    // 1) Measure all the chain
    const sec = document.getElementById('floating-gallery');
    out.section = { rect: rect(sec) };
    const pin = sec.querySelector('.cg-pin');
    out.pin = { rect: rect(pin), perspective: getComputedStyle(pin).perspective, overflow: getComputedStyle(pin).overflow };
    const stage = pin.querySelector('.cg-stage');
    out.stage = { rect: rect(stage), transformStyle: getComputedStyle(stage).transformStyle };
    const photos = stage.querySelector('.cg-photos');
    out.photos = { rect: rect(photos) };
    // 2) First image + slices
    const img0 = photos.querySelector('.cg-img');
    out.img0 = {
      rect: rect(img0),
      transformStyle: getComputedStyle(img0).transformStyle,
      backfaceVisibility: getComputedStyle(img0).backfaceVisibility,
      transform: img0.style.transform,
    };
    const slice0 = img0.querySelector('.cg-slice');
    out.slice0 = {
      rect: rect(slice0),
      transform: slice0.style.transform,
      transformOrigin: slice0.style.transformOrigin,
      width: slice0.style.width,
      height: slice0.style.height,
      backgroundImage: slice0.style.backgroundImage.substring(0, 60),
    };
    // 3) Compute what we EXPECT: position after translate3d
    out.expectedImg0 = (() => {
      const m = img0.style.transform.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px,\s*([-\d.]+)px\)\s*rotateY\(([-\d.]+)deg\)/);
      if (!m) return null;
      const [_, tx, ty, tz, ry] = m.map(Number);
      const perspective = parseFloat(getComputedStyle(pin).perspective);
      // Apply rotateY
      const rad = ry * Math.PI / 180;
      const rx = tx * Math.cos(rad) - 0;  // z component of original position is 0
      const rz = tx * Math.sin(rad) + tz;
      // Project to screen
      const screenX = (rx * perspective) / (perspective - rz);
      const screenY = (ty * perspective) / (perspective - rz);
      return { tx, ty, tz, ry, screenX, screenY, perspective };
    })();
    return out;
  });
  console.log(JSON.stringify(diag, null, 2));
  await browser.close();
})();
