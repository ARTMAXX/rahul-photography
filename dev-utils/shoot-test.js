// Take a screenshot after applying a hardcoded transform, and see if the image moves
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=7', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  // Scroll into pin
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  // Set a clear transform on every .cg-img, alternating directions
  await page.evaluate(() => {
    document.querySelectorAll('.cg-img').forEach((el, i) => {
      const x = (i - 4.5) * 200;
      el.style.transform = `translate3d(${x}px, 0, 100px)`;
    });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: 'cg-shots/test-3d.png' });

  // Also dump the rects
  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.cg-img')).map((el, i) => ({
      i,
      x: el.getBoundingClientRect().x,
      y: el.getBoundingClientRect().y,
      w: el.getBoundingClientRect().width,
      transform: el.style.transform,
    }));
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
