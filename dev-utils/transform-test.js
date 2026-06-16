// Inline browser test to find why transforms don't apply
(async () => {
  // Run via puppeteer so we can see exact errors
  const puppeteer = require('puppeteer-core');
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  page.on('console', (msg) => console.log('  [page]', msg.text()));
  page.on('pageerror', (err) => console.log('  [err]', err.message));
  await page.goto('http://localhost:3002/?v=4', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  // Scroll into the gallery
  await page.evaluate(() => {
    const sec = document.getElementById('floating-gallery');
    const sp = sec.querySelector('.pin-spacer');
    const r = sp.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + r.top + r.height * 0.5);
  });
  await new Promise((r) => setTimeout(r, 1000));

  const result = await page.evaluate(() => {
    const log = [];
    const imgs = document.querySelectorAll('.cg-img');
    const first = imgs[0];
    log.push('initial rect: ' + JSON.stringify(first.getBoundingClientRect()));

    // Try various transforms
    const tests = [
      ['translate(200px, 0)', 'translate(200px, 0)'],
      ['translate3d(200px, 0, 0)', 'translate3d(200px, 0px, 0px)'],
      ['scale(1.5)', 'scale(1.5)'],
      ['rotate(45deg)', 'rotate(45deg)'],
    ];
    const results = [];
    for (const [name, val] of tests) {
      first.removeAttribute('style');
      first.style.transform = val;
      // Force reflow
      void first.offsetHeight;
      const r = first.getBoundingClientRect();
      results.push({ name, val, x: r.x, y: r.y, w: r.width });
    }

    // Now check: what if we wrap in a new parent and apply transform to the parent
    const parent = document.createElement('div');
    parent.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d;';
    document.querySelector('.cg-photos').appendChild(parent);
    parent.appendChild(first);
    first.style.transform = 'translate3d(200px, 0px, 0px)';
    void first.offsetHeight;
    const wrappedRect = first.getBoundingClientRect();
    results.push({ name: 'wrapped_in_new_parent', x: wrappedRect.x, w: wrappedRect.width });

    // Also try with translateY
    first.style.transform = 'translate3d(0, 200px, 0)';
    void first.offsetHeight;
    const yRect = first.getBoundingClientRect();
    results.push({ name: 'translate_y', x: yRect.x, y: yRect.y, w: yRect.width });

    return results;
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
