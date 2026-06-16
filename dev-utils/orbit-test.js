// Final test: set transform + opacity=1, then screenshot
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=8', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  // Scroll into pin
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  // Set transforms + opacity
  await page.evaluate(() => {
    document.querySelectorAll('.cg-img').forEach((el, i) => {
      const angle = (i / 10) * Math.PI * 2;
      const r = 300;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      el.style.transform = `translate3d(${x}px, 0, ${z}px)`;
      el.style.opacity = '1';
    });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: 'cg-shots/orbit-test.png' });

  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.cg-img')).map((el, i) => ({
      i,
      x: el.getBoundingClientRect().x.toFixed(0),
      y: el.getBoundingClientRect().y.toFixed(0),
      w: el.getBoundingClientRect().width.toFixed(0),
      op: el.style.opacity,
    }));
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
