// Check if React re-renders clobber the style
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=6', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  // scroll into pin
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  // Watch for style changes
  const result = await page.evaluate(() => {
    return new Promise((resolve) => {
      const first = document.querySelector('.cg-img');
      const initial = first.getAttribute('style');
      const observations = [{ t: 0, style: initial, transform: getComputedStyle(first).transform }];

      // Set the transform
      first.style.transform = 'translate3d(200px, 0, 0)';
      observations.push({ t: 1, after: 'set', style: first.getAttribute('style'), transform: getComputedStyle(first).transform, rectX: first.getBoundingClientRect().x });

      setTimeout(() => {
        observations.push({ t: 100, style: first.getAttribute('style'), transform: getComputedStyle(first).transform, rectX: first.getBoundingClientRect().x });
      }, 100);

      setTimeout(() => {
        observations.push({ t: 500, style: first.getAttribute('style'), transform: getComputedStyle(first).transform, rectX: first.getBoundingClientRect().x });
        resolve(observations);
      }, 500);
    });
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
