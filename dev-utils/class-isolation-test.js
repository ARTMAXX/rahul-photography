// Test with a brand new class name to isolate which CSS rule breaks transforms
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=20', { waitUntil: 'domcontentloaded' });
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

    // Inject test CSS that mimics .cg-img but with a different class name
    const style = document.createElement('style');
    style.textContent = `
      .test-img {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate3d(0px, 0px, 0px);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        opacity: 0;
        pointer-events: none;
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);

    // Test 1: NEW class .test-img (identical CSS, just different name)
    const sib = document.createElement('div');
    sib.className = 'test-img';
    sib.style.cssText = 'width:200px;height:134px;';
    sib.style.transform = 'translate3d(300px, 0, 0)';
    sib.style.opacity = '1';
    document.querySelector('.cg-photos').appendChild(sib);
    log.push('test-img class: ' + JSON.stringify(sib.getBoundingClientRect()));

    // Test 2: Try removing properties one by one
    const tests = [
      ['no will-change', 'will-change:auto;'],
      ['no backface-visibility', 'backface-visibility:visible;'],
      ['no transform-style', 'transform-style:flat;'],
      ['no opacity', 'opacity:1;'],
      ['all stripped', 'will-change:auto;backface-visibility:visible;transform-style:flat;'],
    ];
    for (const [name, override] of tests) {
      const d = document.createElement('div');
      d.className = 'test-img';
      d.style.cssText = `width:200px;height:134px;${override}transform:translate3d(300px, 0, 0);`;
      d.style.opacity = '1';
      document.querySelector('.cg-photos').appendChild(d);
      log.push(`${name}: ${JSON.stringify(d.getBoundingClientRect())}`);
    }

    return log;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
