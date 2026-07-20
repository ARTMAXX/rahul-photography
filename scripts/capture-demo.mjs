import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const URL = 'https://blog.olivierlarose.com/demos/horizontal-section';
const OUT_DIR = join(process.cwd(), 'docs', 'design-references');
const RESEARCH_DIR = join(process.cwd(), 'docs', 'research', 'blog.olivierlarose.com');

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(RESEARCH_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Navigating to demo site...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000); // Wait for animations to settle
  
  // Take initial screenshot
  console.log('Taking initial screenshot...');
  await page.screenshot({ path: join(OUT_DIR, 'scroll-000-initial.png'), fullPage: false });
  
  // Get page dimensions
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewportHeight = 900;
  console.log(`Page height: ${pageHeight}px`);
  
  // Scroll in small increments (200px each) and take screenshots
  const scrollStep = 200;
  const totalScrolls = Math.ceil((pageHeight - viewportHeight) / scrollStep);
  console.log(`Will take ${totalScrolls} scroll screenshots...`);
  
  for (let i = 1; i <= Math.min(totalScrolls, 40); i++) {
    const scrollY = i * scrollStep;
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(300); // Wait for scroll animations
    
    const filename = `scroll-${String(i).padStart(3, '0')}-${scrollY}px.png`;
    await page.screenshot({ path: join(OUT_DIR, filename), fullPage: false });
    console.log(`Screenshot ${i}/${Math.min(totalScrolls, 40)}: ${filename}`);
  }
  
  // Now extract all CSS, fonts, and behavior data
  console.log('\nExtracting page data...');
  
  const pageData = await page.evaluate(() => {
    // Extract fonts
    const fonts = new Set();
    document.querySelectorAll('*').forEach(el => {
      const ff = getComputedStyle(el).fontFamily;
      if (ff) fonts.add(ff);
    });
    
    // Extract colors
    const colors = new Set();
    document.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.color && cs.color !== 'rgba(0, 0, 0, 0)') colors.add(cs.color);
      if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') colors.add(cs.backgroundColor);
    });
    
    // Extract all images
    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      parentClasses: img.parentElement?.className,
      position: getComputedStyle(img).position,
      objectFit: getComputedStyle(img).objectFit
    }));
    
    // Extract main structure
    const mainEl = document.querySelector('main');
    const sections = mainEl ? [...mainEl.children].map((child, i) => ({
      index: i,
      tag: child.tagName,
      classes: child.className,
      childCount: child.children.length,
      height: child.offsetHeight,
      width: child.offsetWidth
    })) : [];
    
    // Check for smooth scroll libraries
    const hasLenis = !!document.querySelector('.lenis');
    const hasLocomotiveScroll = !!document.querySelector('[data-scroll-container]');
    
    return {
      title: document.title,
      fonts: [...fonts],
      colors: [...colors],
      images,
      sections,
      hasLenis,
      hasLocomotiveScroll,
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className
    };
  });
  
  writeFileSync(join(RESEARCH_DIR, 'page-data.json'), JSON.stringify(pageData, null, 2));
  console.log('Saved page-data.json');
  
  // Extract detailed CSS for the horizontal scroll section (container2)
  const sectionCSS = await page.evaluate(() => {
    const container2 = document.querySelector('[class*="container2"]');
    if (!container2) return { error: 'container2 not found' };
    
    function extractElement(el, depth = 0) {
      if (depth > 5) return null;
      const cs = getComputedStyle(el);
      const props = [
        'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
        'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
        'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
        'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
        'position', 'top', 'right', 'bottom', 'left',
        'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing',
        'color', 'backgroundColor', 'background',
        'borderRadius', 'border', 'overflow', 'overflowX', 'overflowY',
        'opacity', 'transform', 'transition', 'cursor', 'objectFit',
        'whiteSpace', 'textOverflow', 'zIndex', 'flexShrink', 'flexGrow'
      ];
      
      const styles = {};
      props.forEach(p => {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') {
          styles[p] = v;
        }
      });
      
      return {
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 5).join(' '),
        text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 200) : null,
        styles,
        images: el.tagName === 'IMG' ? { src: el.src, alt: el.alt } : null,
        childCount: el.children.length,
        children: [...el.children].slice(0, 15).map(c => extractElement(c, depth + 1)).filter(Boolean)
      };
    }
    
    return extractElement(container2);
  });
  
  writeFileSync(join(RESEARCH_DIR, 'section-css.json'), JSON.stringify(sectionCSS, null, 2));
  console.log('Saved section-css.json');
  
  // Extract the GSAP animation code behavior
  const animationBehavior = await page.evaluate(() => {
    // Check for GSAP
    const hasGSAP = typeof window.gsap !== 'undefined' || typeof window.ScrollTrigger !== 'undefined';
    
    // Check for Lenis
    const lenisEl = document.querySelector('.lenis');
    
    // Get container2 scroll width
    const container2 = document.querySelector('[class*="container2"]');
    const container2Info = container2 ? {
      scrollWidth: container2.scrollWidth,
      clientWidth: container2.clientWidth,
      offsetWidth: container2.offsetWidth,
      childCount: container2.children.length,
      childrenWidths: [...container2.children].map(c => ({
        classes: c.className?.toString().split(' ')[0],
        offsetWidth: c.offsetWidth,
        offsetHeight: c.offsetHeight
      }))
    } : null;
    
    return {
      hasGSAP,
      hasLenis: !!lenisEl,
      container2: container2Info,
      scrollHeight: document.documentElement.scrollHeight,
      innerWidth: window.innerWidth
    };
  });
  
  writeFileSync(join(RESEARCH_DIR, 'animation-behavior.json'), JSON.stringify(animationBehavior, null, 2));
  console.log('Saved animation-behavior.json');
  
  // Take a full-page screenshot
  console.log('Taking full-page screenshot...');
  await page.screenshot({ path: join(OUT_DIR, 'full-page.png'), fullPage: true });
  
  await browser.close();
  console.log('\nDone! Screenshots saved to docs/design-references/');
})();
