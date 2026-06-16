// Test with no position: absolute - just a basic div with transform
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=13', { waitUntil: 'domcontentloaded' });
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

    // Reset all styles
    first.removeAttribute('style');
    // Just transform, no positioning
    first.style.transform = 'translate3d(500px, 0, 0)';
    first.style.width = '200px';
    first.style.height = '134px';
    first.style.opacity = '1';
    log.push('no-position transform: ' + JSON.stringify(first.getBoundingClientRect()));

    // Now add position: absolute
    first.style.position = 'absolute';
    log.push('with absolute transform: ' + JSON.stringify(first.getBoundingClientRect()));

    // Force reflow with offsetHeight
    void first.offsetHeight;
    log.push('after reflow: ' + JSON.stringify(first.getBoundingClientRect()));

    // Test on a fresh div completely outside the gallery
    const fresh = document.createElement('div');
    fresh.style.cssText = 'width:200px;height:100px;background:red;position:absolute;top:200px;left:200px;z-index:9999;';
    fresh.style.transform = 'translate3d(500px, 0, 0)';
    document.body.appendChild(fresh);
    log.push('fresh div transform: ' + JSON.stringify(fresh.getBoundingClientRect()));

    return log;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
