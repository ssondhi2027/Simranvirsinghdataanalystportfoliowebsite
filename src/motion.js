// Scroll- and pointer-driven polish: nav progress, section spy, metric count-up,
// label scramble, timeline trace and a cursor spotlight.

const clamp = (v, lo = 0, hi = 1) => Math.min(Math.max(v, lo), hi);

export function initMotion(reduced) {
  initScroll();
  initSpy();
  if (reduced) return;
  initCount();
  initScramble();
  initSpotlight();
}

// One rAF-throttled scroll handler drives the nav progress bar and the timeline trace.
// Both follow the scroll position directly, so they stay on under reduced motion.
function initScroll() {
  const bar = document.querySelector('.nav__progress');
  const tl = document.querySelector('.timeline');
  const items = [...tl.children];
  let queued = false;
  const update = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--p', max > 0 ? clamp(window.scrollY / max) : 0);
    const mark = window.innerHeight * 0.62;
    const r = tl.getBoundingClientRect();
    tl.style.setProperty('--tl', clamp((mark - r.top) / r.height));
    for (const li of items) li.classList.toggle('is-on', li.getBoundingClientRect().top + 34 < mark);
  };
  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

// Marks the nav link of the section crossing the middle of the screen.
function initSpy() {
  if (!('IntersectionObserver' in window)) return;
  const links = new Map();
  for (const a of document.querySelectorAll('.nav nav a')) links.set(a.getAttribute('href').slice(1), a);
  const io = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      const a = links.get(target.id);
      if (isIntersecting) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  for (const id of links.keys()) {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  }
}

// Metric figures tick up from zero the first time they scroll into view.
function initCount() {
  const io = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      io.unobserve(target);
      const final = target.textContent;
      const m = final.match(/^(\D*)(\d+(?:\.(\d+))?)(.*)$/);
      if (!m) continue;
      const [, pre, num, dec = '', post] = m;
      const end = parseFloat(num);
      const start = performance.now();
      const tick = (now) => {
        const p = clamp((now - start) / 1500);
        if (p === 1) { target.textContent = final; return; }
        target.textContent = pre + (end * (1 - (1 - p) ** 3)).toFixed(dec.length) + post;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, { threshold: 0.6 });
  for (const el of document.querySelectorAll('.metric strong')) io.observe(el);
}

// Mono eyebrow labels resolve out of random glyphs, left to right.
function initScramble() {
  const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/%';
  const io = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      io.unobserve(target);
      const final = target.textContent;
      const start = performance.now();
      const tick = (now) => {
        const p = clamp((now - start) / 800);
        if (p === 1) { target.textContent = final; return; }
        const locked = Math.floor(p * final.length);
        let out = '';
        for (let i = 0; i < final.length; i++) {
          const c = final[i];
          out += i < locked || !/[a-z0-9]/i.test(c) ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        target.textContent = out;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, { threshold: 1 });
  for (const el of document.querySelectorAll('.eyebrow')) io.observe(el);
}

// A soft light that follows the mouse across the whole page.
function initSpotlight() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const spot = document.createElement('div');
  spot.className = 'spot';
  spot.setAttribute('aria-hidden', 'true');
  document.body.append(spot);
  let x = 0, y = 0, raf = 0;
  window.addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      spot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      spot.classList.add('is-on');
    });
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => spot.classList.remove('is-on'));
}
