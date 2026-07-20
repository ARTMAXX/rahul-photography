import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(process.cwd(), 'docs', 'design-references', 'test-verify');
mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Listen for console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  
  console.log('Navigating to localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Take initial screenshot
  console.log('Taking initial screenshot...');
  await page.screenshot({ path: join(OUT_DIR, 'verify-000-initial.png'), fullPage: false });
  
  // Get page height
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Page height: ${pageHeight}px`);
  
  // Scroll in small increments and capture
  const scrollStep = 150;
  const maxScrolls = 25;
  
  for (let i = 1; i <= maxScrolls; i++) {
    const scrollY = i * scrollStep;
    if (scrollY > pageHeight - 900) break;
    
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(400);
    
    const filename = `verify-${String(i).padStart(3, '0')}-${scrollY}px.png`;
    await page.screenshot({ path: join(OUT_DIR, filename), fullPage: false });
    console.log(`Screenshot ${i}: ${filename}`);
  }
  
  // Check for GSAP pin-spacer
  const hasPinSpacer = await page.evaluate(() => {
    const pinSpacer = document.querySelector('.pin-spacer');
    const dimSection = document.querySelector('.dim-section');
    const dimContainer = document.querySelector('.dim-container');
    return {
      hasPinSpacer: !!pinSpacer,
      pinSpacerHeight: pinSpacer?.offsetHeight,
      hasDimSection: !!dimSection,
      hasDimContainer: !!dimContainer,
      containerWidth: dimContainer?.scrollWidth,
      containerTransform: dimContainer ? getComputedStyle(dimContainer).transform : null
    };
  });
  
  console.log('\nGSAP Pin-Spacer check:', JSON.stringify(hasPinSpacer, null, 2));
  
  if (errors.length > 0) {
    console.log('\nConsole errors:', errors);
  } else {
    console.log('\nNo console errors!');
  }
  
  await browser.close();
  console.log('\nDone!');
})();
