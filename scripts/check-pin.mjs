import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Get all elements with GSAP-related classes
  const info = await page.evaluate(() => {
    const pinSpacer = document.querySelector('.pin-spacer');
    if (!pinSpacer) return { error: 'No pin-spacer' };
    
    return {
      pinSpacerHTML: pinSpacer.innerHTML.substring(0, 1000),
      pinSpacerChildren: [...pinSpacer.children].map(c => ({
        tag: c.tagName,
        classes: c.className,
        id: c.id
      }))
    };
  });
  
  console.log('Pin-spacer info:', JSON.stringify(info, null, 2));
  
  await browser.close();
})();
