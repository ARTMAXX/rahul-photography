// Dumps element positions + computed styles for the gallery at
// multiple scroll stops so I can verify the layout numerically.
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, 'cg-debug.json');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--hide-scrollbars'],
    defaultViewport: { width: 1440, height: 900 },
  });
  try {
    const page = await browser.newPage();
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 4000));

    const range = await page.evaluate(() => {
      const sec = document.getElementById('floating-gallery');
      const pinSpacer = sec.querySelector('.pin-spacer');
      const psRect = pinSpacer.getBoundingClientRect();
      const pinTop = window.scrollY + psRect.top;
      return { pinTop, pinHeight: psRect.height };
    });

    const stops = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8];
    const report = [];
    for (const s of stops) {
      const y = range.pinTop + range.pinHeight * s;
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await new Promise((r) => setTimeout(r, 600));
      const data = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('.cg-img'));
        const visible = imgs
          .filter((el) => parseFloat(el.style.opacity) > 0.01)
          .map((el) => {
            const r = el.getBoundingClientRect();
            return {
              i: el.dataset.index,
              op: el.style.opacity,
              z: el.style.zIndex,
              // The actual SCREEN position
              screen: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
              // The TRANSFORM matrix (parsed roughly)
              tr: el.style.transform,
            };
          });
        const phrase = document.querySelector('.cg-phrase');
        const phRect = phrase.getBoundingClientRect();
        const wordCount = phrase.querySelectorAll('.fg-word').length;
        const visibleWords = Array.from(phrase.querySelectorAll('.fg-word')).filter(
          (w) => parseFloat(w.style.opacity || '0') > 0.5
        ).length;
        return {
          visibleCount: visible.length,
          visible: visible,
          phrase: {
            op: phrase.style.opacity,
            tr: phrase.style.transform,
            screen: { x: Math.round(phRect.x), y: Math.round(phRect.y), w: Math.round(phRect.width), h: Math.round(phRect.height) },
            words: wordCount,
            visibleWords: visibleWords,
          },
        };
      });
      report.push({ progress: s, scrollY: y, ...data });
    }
    fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
    console.log('Report saved to', OUT);
    console.log(JSON.stringify(report, null, 2));
  } catch (e) {
    console.error('FAILED:', e.message);
  } finally {
    await browser.close();
  }
})();
