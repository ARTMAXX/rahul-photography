// Quick CSS experiment
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=10', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1500));

  // Create a clean test div
  const result = await page.evaluate(() => {
    const log = [];
    // Get the first .cg-img
    const first = document.querySelector('.cg-img');
    log.push('first.parent: ' + first.parentElement.className);

    // Save original
    const origStyle = first.getAttribute('style');

    // Test 1: empty transform, just opacity
    first.removeAttribute('style');
    first.style.opacity = '1';
    first.style.transform = 'translate(300px, 0)';
    log.push('test1 (translate only): ' + JSON.stringify(first.getBoundingClientRect()));

    // Test 2: translate3d
    first.removeAttribute('style');
    first.style.opacity = '1';
    first.style.transform = 'translate3d(300px, 0, 0)';
    log.push('test2 (translate3d): ' + JSON.stringify(first.getBoundingClientRect()));

    // Test 3: same but add preserve-3d
    first.style.transformStyle = 'preserve-3d';
    first.style.transform = 'translate3d(300px, 0, 0)';
    log.push('test3 (preserve-3d + translate3d): ' + JSON.stringify(first.getBoundingClientRect()));

    // Test 4: create a sibling div WITHOUT class
    const sib = document.createElement('div');
    sib.style.cssText = 'position:absolute;left:0;top:0;width:200px;height:134px;background:red;';
    sib.style.transform = 'translate3d(300px, 0, 0)';
    first.parentElement.appendChild(sib);
    log.push('test4 (sibling, no class, no preserve-3d): ' + JSON.stringify(sib.getBoundingClientRect()));

    // Test 5: sibling WITH class
    const sib2 = document.createElement('div');
    sib2.className = 'cg-img';
    sib2.style.cssText = 'position:absolute;left:0;top:0;width:200px;height:134px;';
    sib2.style.transform = 'translate3d(300px, 0, 0)';
    first.parentElement.appendChild(sib2);
    log.push('test5 (sibling with cg-img class): ' + JSON.stringify(sib2.getBoundingClientRect()));

    // restore
    first.setAttribute('style', origStyle || '');
    return log;
  });
  console.log(result.join('\n'));
  await browser.close();
})();
