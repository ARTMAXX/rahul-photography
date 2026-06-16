// Check if transforms are actually applied to the layout (matrix)
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

  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.4);
  });
  await new Promise((r) => setTimeout(r, 800));

  const out = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('.cg-img'));
    return imgs.slice(0, 5).map((el, i) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        i,
        inline_transform: el.style.transform,
        computed_transform: cs.transform,
        computed_transformStyle: cs.transformStyle,
        computed_willChange: cs.willChange,
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      };
    });
  });
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})();
