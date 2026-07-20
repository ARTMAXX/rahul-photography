import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Find ALL sections and their content
  const pageStructure = await page.evaluate(() => {
    // Get the main element
    const main = document.querySelector('main');
    if (!main) return { error: 'No main' };
    
    // Walk through all children recursively
    function mapElement(el, depth = 0) {
      if (depth > 3) return null;
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        classes: el.className?.toString().substring(0, 60),
        top: rect.top + window.scrollY,
        height: rect.height,
        width: rect.width,
        text: el.textContent?.substring(0, 80)?.trim(),
        childCount: el.children.length,
        children: [...el.children].slice(0, 5).map(c => mapElement(c, depth + 1)).filter(Boolean)
      };
    }
    
    return [...main.children].map(c => mapElement(c, 0)).filter(Boolean);
  });
  
  console.log(JSON.stringify(pageStructure, null, 2));
  
  await browser.close();
})();
