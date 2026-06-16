// Try different ways to apply transform
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=12', { waitUntil: 'domcontentloaded' });
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

    // Test: set transform via setAttribute
    first.setAttribute('style', 'width:201.6px;height:134.4px;opacity:1;transform:translate3d(300px, 0, 0);');
    log.push('setAttribute: ' + JSON.stringify(first.getBoundingClientRect()));

    // Test: set via style.cssText
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;transform:translate3d(400px, 0, 0);';
    log.push('style.cssText: ' + JSON.stringify(first.getBoundingClientRect()));

    // Test: set via class swap
    first.removeAttribute('style');
    first.classList.add('test-translate');
    log.push('class with .test-translate: ' + JSON.stringify(first.getBoundingClientRect()));

    // Test: set via inline transformStyle to flat
    first.classList.remove('test-translate');
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;transform-style:flat;transform:translate3d(500px, 0, 0);';
    log.push('transform-style:flat + transform: ' + JSON.stringify(first.getBoundingClientRect()));

    // Test: NO transform-style, just transform
    first.style.cssText = 'width:201.6px;height:134.4px;opacity:1;transform-style:flat;transform:translate(600px, 0);';
    log.push('flat + 2D translate: ' + JSON.stringify(first.getBoundingClientRect()));

    return log;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
