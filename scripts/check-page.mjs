import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Get all main sections on the page
  const pageInfo = await page.evaluate(() => {
    const main = document.querySelector('main') || document.querySelector('#__next');
    if (!main) return { error: 'No main element' };
    
    // Get all direct children
    const sections = [...main.querySelectorAll(':scope > div, :scope > section')].map((el, i) => ({
      index: i,
      tag: el.tagName,
      classes: el.className?.substring(0, 100),
      height: el.offsetHeight,
      width: el.offsetWidth,
      childCount: el.children.length
    }));
    
    // Find the horizontal scroll section by looking for GSAP transform
    const allDivs = document.querySelectorAll('div');
    let horizontalSection = null;
    for (const div of allDivs) {
      const transform = getComputedStyle(div).transform;
      if (transform && transform !== 'none' && transform.includes('matrix')) {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
          if (Math.abs(values[4]) > 100) { // Large translateX
            horizontalSection = {
              tag: div.tagName,
              classes: div.className?.substring(0, 100),
              transform: transform,
              translateX: values[4],
              width: div.scrollWidth,
              childCount: div.children.length
            };
            break;
          }
        }
      }
    }
    
    return { sections, horizontalSection };
  });
  
  console.log('Page info:', JSON.stringify(pageInfo, null, 2));
  
  await browser.close();
})();
