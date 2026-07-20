import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Find the horizontal scroll section
  const sectionInfo = await page.evaluate(() => {
    // Look for the section with GSAP pin-spacer
    const pinSpacer = document.querySelector('.pin-spacer');
    if (!pinSpacer) return { error: 'No pin-spacer found' };
    
    const section = pinSpacer.querySelector('section');
    if (!section) return { error: 'No section in pin-spacer' };
    
    const container = section.querySelector('div');
    
    return {
      sectionClasses: section.className,
      sectionHTML: section.outerHTML.substring(0, 500),
      containerClasses: container?.className,
      containerChildren: container ? [...container.children].map(c => ({
        tag: c.tagName,
        classes: c.className,
        width: c.offsetWidth
      })) : [],
      pinSpacerHeight: pinSpacer.offsetHeight,
      sectionHeight: section.offsetHeight
    };
  });
  
  console.log('Section info:', JSON.stringify(sectionInfo, null, 2));
  
  await browser.close();
})();
