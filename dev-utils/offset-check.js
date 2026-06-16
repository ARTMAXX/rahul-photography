// Test: what's offsetWidth on the broken element?
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=11', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  const result = await page.evaluate(() => {
    const first = document.querySelector('.cg-img');
    const cs = getComputedStyle(first);
    // get the computed width
    return {
      offsetWidth: first.offsetWidth,
      offsetHeight: first.offsetHeight,
      inlineWidth: first.style.width,
      inlineHeight: first.style.height,
      cssWidth: cs.width,
      cssHeight: cs.height,
      cssDisplay: cs.display,
      cssPosition: cs.position,
      cssTransform: cs.transform,
      cssTransformOrigin: cs.transformOrigin,
      cssContain: cs.contain,
      cssWritingMode: cs.writingMode,
      cssDirection: cs.direction,
      cssFilter: cs.filter,
      cssMixBlendMode: cs.mixBlendMode,
      cssIsolation: cs.isolation,
      // Also try the actual size after a forced reflow
      sizeAfterReflow: (() => {
        void first.offsetHeight;
        return { w: first.offsetWidth, h: first.offsetHeight };
      })(),
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
