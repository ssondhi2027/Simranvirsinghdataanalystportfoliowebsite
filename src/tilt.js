const MAX = 12;

// Pointer-driven 3D tilt for project cards. Mouse only; touch keeps native scroll.
export function initTilt(reduced) {
  if (reduced) return;
  for (const card of document.querySelectorAll('[data-tilt]')) {
    let raf = 0;
    card.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.classList.add('is-tilting');
        card.style.setProperty('--rx', `${(0.5 - y) * 2 * MAX}deg`);
        card.style.setProperty('--ry', `${(x - 0.5) * 2 * MAX}deg`);
        card.style.setProperty('--gx', `${x * 100}%`);
        card.style.setProperty('--gy', `${y * 100}%`);
      });
    });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }
}
