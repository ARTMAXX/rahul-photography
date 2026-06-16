// Try removing will-change: transform
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=14', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  const result = await page.evaluate(() => {
    const log = [];
    const first = document.querySelector('.cg-img');

    // Add an inline style that overrides will-change
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;will-change:auto;transform:translate3d(300px, 0, 0);transform-style:flat;';
    log.push('overrode will-change to auto: ' + JSON.stringify(first.getBoundingClientRect()));

    // Remove transform-style: preserve-3d
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;transform:translate3d(400px, 0, 0);transform-style:flat;backface-visibility:visible;';
    log.push('flat, visible, no will-change: ' + JSON.stringify(first.getBoundingClientRect()));

    // Without any preserve-3d anywhere on .cg-img
    first.classList.remove('cg-img');
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;position:absolute;left:0;top:0;transform:translate3d(500px, 0, 0);';
    log.push('no cg-img class at all: ' + JSON.stringify(first.getBoundingClientRect()));

    return log;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
