JSON.stringify({
  viewport: {w: window.innerWidth, h: window.innerHeight},
  svgBox: (() => { const s = document.querySelector('#projects .showcase__shapes'); const r = s.getBoundingClientRect(); return {width: r.width, height: r.height, top: r.top, left: r.left}; })(),
  shape0Box: (() => { const s = document.querySelector('#projects .showcase__shape'); let bb; try { bb = s.getBBox(); } catch(e) { bb = null; } const r = s.getBoundingClientRect(); return {bbox: bb, screen: {width: r.width, height: r.height, top: r.top, left: r.left, x: r.x, y: r.y}, strokeWidth: getComputedStyle(s).strokeWidth, opacity: getComputedStyle(s).opacity}; })(),
  pinSpacer: (() => { const sp = document.querySelector('.pin-spacer'); if (!sp) return null; const r = sp.getBoundingClientRect(); return {height: r.height, top: r.top}; })(),
  pinWrap: (() => { const sec = document.querySelector('#projects'); const r = sec.getBoundingClientRect(); return {width: r.width, height: r.height, top: r.top}; })(),
  listBox: (() => { const l = document.querySelector('#projects .showcase__list'); const r = l.getBoundingClientRect(); return {width: r.width, height: r.height, top: r.top, transform: l.style.transform}; })(),
  firstTitleBox: (() => { const t = document.querySelector('#projects .showcase__item-title'); if (!t) return null; const r = t.getBoundingClientRect(); return {width: r.width, height: r.height, top: r.top, left: r.left, fontSize: getComputedStyle(t).fontSize}; })(),
  shapesOpacity: Array.from(document.querySelectorAll('#projects .showcase__shape')).map(s => getComputedStyle(s).opacity),
  navBox: (() => { const n = document.querySelector('#projects .showcase__nav'); const r = n.getBoundingClientRect(); return {top: r.top, right: window.innerWidth - r.right, width: r.width, height: r.height}; })(),
  counterBox: (() => { const c = document.querySelector('#projects .showcase__counter'); const r = c.getBoundingClientRect(); return {top: r.top, left: r.left, text: c.textContent}; })()
}, null, 2)
