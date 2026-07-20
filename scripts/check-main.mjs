import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Get the full HTML structure of main
  const mainHTML = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return 'No main found';
    
    // Get direct children with their outerHTML (truncated)
    return [...main.children].map((child, i) => {
      const html = child.outerHTML;
      return `[${i}] <${child.tagName} class="${child.className?.substring(0, 80)}">\n  outerHTML length: ${html.length}\n  first 300 chars: ${html.substring(0, 300)}`;
    }).join('\n\n');
  });
  
  console.log(mainHTML);
  
  await browser.close();
})();
