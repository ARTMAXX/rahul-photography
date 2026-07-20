import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(process.cwd(), 'docs', 'design-references', 'test-verify');
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
  
  // Take screenshot at top
  await page.screenshot({ path: join(OUT_DIR, 'final-000-top.png') });
  console.log('Took top screenshot');
  
  // Scroll to find DesignInMotion section
  // First, let's see what sections exist
  const sections = await page.evaluate(() => {
    const allSections = document.querySelectorAll('section, [class*="dim"], [class*="DesignInMotion"]');
    return [...allSections].map(s => ({
      tag: s.tagName,
      classes: s.className?.substring(0, 80),
      top: s.getBoundingClientRect().top + window.scrollY,
      height: s.offsetHeight
    }));
  });
  console.log('Sections:', JSON.stringify(sections, null, 2));
  
  // Scroll to each section and take screenshots
  for (let scrollY = 500; scrollY <= 8000; scrollY += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(300);
    await page.screenshot({ path: join(OUT_DIR, `final-${String(scrollY).padStart(4, '0')}px.png`) });
    console.log(`Screenshot at ${scrollY}px`);
  }
  
  if (errors.length > 0) {
    console.log('\nConsole errors:', errors.slice(0, 10));
  } else {
    console.log('\nNo console errors!');
  }
  
  await browser.close();
})();
