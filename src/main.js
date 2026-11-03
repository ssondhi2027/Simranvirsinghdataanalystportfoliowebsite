import './style.css';
import { render } from './render.js';
import { initTilt } from './tilt.js';
import { initCube } from './cube.js';
import { initSphere } from './sphere.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

render();
// three.js is the heaviest dependency; load it after the page content has rendered.
import('./hero.js')
  .then((m) => m.initHero(reduced))
  .catch(() => document.getElementById('hero').classList.add('no-webgl'));
initTilt(reduced);
initCube(reduced);
initSphere(reduced);
initReveal();
initCopy();

// Sections are fully visible without JS. Only those still below the fold get the tilt-up
// animation, and the class is removed on animationend so it can't fight the card tilt.
function initReveal() {
  if (reduced || !('IntersectionObserver' in window)) return;
  const done = (e) => {
    if (e.target !== e.currentTarget) return; // ignore bubbling child animations
    e.currentTarget.classList.remove('is-revealing');
    e.currentTarget.style.animationDelay = '';
    e.currentTarget.removeEventListener('animationend', done);
  };
  const io = new IntersectionObserver((entries) => {
    let card = 0;
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      io.unobserve(target);
      if (target.matches('.card')) target.style.animationDelay = `${card++ * 90}ms`;
      target.addEventListener('animationend', done);
      target.classList.add('is-revealing');
    }
  }, { rootMargin: '0px 0px -8% 0px' });

  for (const el of document.querySelectorAll('[data-reveal]')) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
    io.observe(el);
  }
}

function initCopy() {
  const btn = document.querySelector('[data-copy]');
  const email = document.querySelector('.email');
  const status = document.querySelector('.copy-status');
  let timer = 0;
  const flash = (text) => {
    btn.textContent = text;
    status.textContent = text;
    clearTimeout(timer);
    timer = setTimeout(() => { btn.textContent = 'Copy email'; status.textContent = ''; }, 1800);
  };
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email.textContent);
      flash('Copied');
    } catch {
      const range = document.createRange();
      range.selectNodeContents(email);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      flash('Selected, press Ctrl+C');
    }
  });
}
