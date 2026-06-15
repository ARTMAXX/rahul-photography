(function() {
  const viewport = {w: window.innerWidth, h: window.innerHeight};
  const scrollY = window.scrollY;
  const section = document.querySelector('#projects');
  const secRect = section ? section.getBoundingClientRect() : null;
  const list = document.querySelector('#projects .showcase__list');
  const listY = list ? list.style.transform : null;
  const listRect = list ? list.getBoundingClientRect() : null;
  const titles = Array.from(document.querySelectorAll('#projects .showcase__item')).map(function(el) {
    const t = el.querySelector('.showcase__item-title');
    return {
      text: t ? t.textContent : '',
      opacity: t ? getComputedStyle(t).opacity : '',
      color: t ? getComputedStyle(t).color : '',
      y: el.style.transform
    };
  });
  const shapes = Array.from(document.querySelectorAll('#projects .showcase__shape')).map(function(el) {
    let bbox;
    try { bbox = el.getBBox(); } catch(e) { bbox = {x:0,y:0,width:0,height:0}; }
    return {d: (el.getAttribute('d') || '').substring(0, 60), opacity: getComputedStyle(el).opacity};
  });
  const navEl = document.querySelector('#projects .showcase__nav');
  const navRect = navEl ? navEl.getBoundingClientRect() : null;
  const counter = document.querySelector('#projects .showcase__counter');
  const preview = document.querySelector('#projects .showcase__preview');
  const previewRect = preview ? preview.getBoundingClientRect() : null;
  return JSON.stringify({
    viewport: viewport,
    scrollY: scrollY,
    section: secRect ? {top: secRect.top, bottom: secRect.bottom, height: secRect.height} : null,
    list: listY,
    listRect: listRect ? {top: listRect.top, height: listRect.height} : null,
    titles: titles,
    shapes: shapes,
    nav: navRect ? {top: navRect.top, right: window.innerWidth - navRect.right, label: navEl.querySelector('.showcase__nav-label') ? navEl.querySelector('.showcase__nav-label').textContent : ''} : null,
    counter: counter ? counter.textContent : null,
    preview: previewRect ? {top: previewRect.top, right: window.innerWidth - previewRect.right, width: previewRect.width, height: previewRect.height} : null
  }, null, 2);
})()
