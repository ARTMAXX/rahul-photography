// Deep diagnostic: check custom properties, computed transform, and rect
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
  await new Promise((r) => setTimeout(r, 5000));

  // scroll into pin
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  const out = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('.cg-img'));
    const pin = document.querySelector('.cg-pin');
    const pinSpacer = document.querySelector('.pin-spacer');
    return {
      pin: {
        rect: pin.getBoundingClientRect(),
        perspective: getComputedStyle(pin).perspective,
        transformStyle: getComputedStyle(pin).transformStyle,
      },
      pinSpacer: pinSpacer ? {
        rect: pinSpacer.getBoundingClientRect(),
        transform: getComputedStyle(pinSpacer).transform,
        transformStyle: getComputedStyle(pinSpacer).transformStyle,
      } : 'none',
      imgs: imgs.slice(0, 5).map((el) => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          i: el.dataset.index,
          // Custom properties
          x: el.style.getPropertyValue('--x'),
          y: el.style.getPropertyValue('--y'),
          z: el.style.getPropertyValue('--z'),
          ry: el.style.getPropertyValue('--ry'),
          // Computed
          computedTransform: cs.transform,
          rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
        };
      }),
    };
  });
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})();
