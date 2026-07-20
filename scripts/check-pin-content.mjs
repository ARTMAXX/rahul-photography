import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Get the pin-spacer content
  const pinContent = await page.evaluate(() => {
    const pinSpacer = document.querySelector('.pin-spacer');
    if (!pinSpacer) return { error: 'No pin-spacer' };
    
    // Get all text content
    const allText = pinSpacer.textContent;
    
    // Check for DesignInMotion elements
    const hasDimIntro = !!pinSpacer.querySelector('.dim-intro');
    const hasDimContainer = !!pinSpacer.querySelector('.dim-container');
    const hasLoremIpsum = allText.includes('Lorem ipsum');
    
    // Get first 2000 chars of innerHTML
    return {
      hasDimIntro,
      hasDimContainer,
      hasLoremIpsum,
      textPreview: allText.substring(0, 200),
      htmlPreview: pinSpacer.innerHTML.substring(0, 1500)
    };
  });
  
  console.log(JSON.stringify(pinContent, null, 2));
  
  await browser.close();
})();
