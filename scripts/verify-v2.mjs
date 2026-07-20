import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(process.cwd(), 'docs', 'design-references', 'final-verify');
mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  
  console.log('Navigating...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Take initial screenshot
  await page.screenshot({ path: join(OUT_DIR, 'v-000-top.png') });
  console.log('Top screenshot taken');
  
  // Find DesignInMotion section by looking for dim-container or Lorem ipsum
  const dimInfo = await page.evaluate(() => {
    const dimContainer = document.querySelector('.dim-container');
    const dimIntro = document.querySelector('.dim-intro');
    const hasLoremIpsum = document.body.textContent?.includes('Lorem ipsum');
    
    // Find all sections
    const allSections = [...document.querySelectorAll('section')];
    const sectionInfo = allSections.map(s => ({
      classes: s.className?.substring(0, 60),
      top: s.getBoundingClientRect().top + window.scrollY,
      height: s.offsetHeight,
      hasDimContainer: !!s.querySelector('.dim-container')
    }));
    
    return {
      hasDimContainer: !!dimContainer,
      hasDimIntro: !!dimIntro,
      hasLoremIpsum,
      dimContainerTop: dimContainer?.getBoundingClientRect().top + window.scrollY,
      dimContainerWidth: dimContainer?.scrollWidth,
      dimContainerHeight: dimContainer?.offsetHeight,
      sections: sectionInfo
    };
  });
  
  console.log('DesignInMotion info:', JSON.stringify(dimInfo, null, 2));
  
  // If DesignInMotion exists, scroll to it and take screenshots
  if (dimInfo.hasDimContainer && dimInfo.dimContainerTop) {
    const startY = Math.max(0, dimInfo.dimContainerTop - 200);
    console.log(`\nScrolling to DesignInMotion at ${startY}px...`);
    
    for (let scrollY = startY; scrollY <= startY + 3000; scrollY += 200) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(400);
      await page.screenshot({ path: join(OUT_DIR, `v-dim-${String(scrollY - startY).padStart(4, '0')}px.png`) });
      console.log(`Screenshot at scroll ${scrollY}px (relative: ${scrollY - startY}px)`);
    }
  } else {
    // Scroll through entire page looking for it
    console.log('\nDesignInMotion not found at expected location. Scanning...');
    for (let scrollY = 0; scrollY <= 8000; scrollY += 500) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(300);
      await page.screenshot({ path: join(OUT_DIR, `v-scan-${String(scrollY).padStart(4, '0')}px.png`) });
      console.log(`Scan at ${scrollY}px`);
    }
  }
  
  if (errors.length > 0) {
    console.log('\nConsole errors:', errors.slice(0, 5));
  } else {
    console.log('\nNo console errors!');
  }
  
  await browser.close();
})();
