// Look at every aspect of why .cg-img has 0 width and no transform
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/?v=5', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 5000));

  const result = await page.evaluate(() => {
    const first = document.querySelector('.cg-img');
    const cs = getComputedStyle(first);
    return {
      offsetWidth: first.offsetWidth,
      offsetHeight: first.offsetHeight,
      clientWidth: first.clientWidth,
      clientHeight: first.clientHeight,
      scrollWidth: first.scrollWidth,
      boundingRect: first.getBoundingClientRect(),
      inlineStyle: first.getAttribute('style'),
      cssWidth: cs.width,
      cssHeight: cs.height,
      cssPosition: cs.position,
      cssDisplay: cs.display,
      cssVisibility: cs.visibility,
      cssTransform: cs.transform,
      cssTransformStyle: cs.transformStyle,
      cssOverflow: cs.overflow,
      children: first.children.length,
      childrenTags: Array.from(first.children).map(c => c.tagName + '.' + c.className),
      parentClass: first.parentElement.className,
      parentWidth: getComputedStyle(first.parentElement).width,
      parentHeight: getComputedStyle(first.parentElement).height,
      parentOverflow: getComputedStyle(first.parentElement).overflow,
      grandparentClass: first.parentElement.parentElement.className,
      gpWidth: getComputedStyle(first.parentElement.parentElement).width,
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
