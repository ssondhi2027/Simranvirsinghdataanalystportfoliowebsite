import { sphereTags, hotTags, coolTags } from './content.js';

const AUTO = { x: 0.0011, y: 0.0042 };

// Tag cloud on a Fibonacci sphere. Each tag is a real <span> so it stays readable and selectable.
export function initSphere(reduced) {
  const box = document.querySelector('.sphere');
  const list = box.querySelector('[data-mount="sphere"]');
  list.innerHTML = sphereTags.map((t) => {
    const heat = hotTags.includes(t) ? ' is-hot' : coolTags.includes(t) ? ' is-cool' : '';
    return `<li><span class="tag${heat}">${t}</span></li>`;
  }).join('');
  const els = [...list.querySelectorAll('.tag')];

  const n = els.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const base = els.map((_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    return { x: Math.cos(golden * i) * r, y, z: Math.sin(golden * i) * r };
  });

  let radius = 0;
  let rotX = 0.3, rotY = 0;
  let vx = AUTO.x, vy = AUTO.y;
  const resize = () => { radius = Math.min(box.clientWidth, box.clientHeight) * 0.4; };
  resize();
  window.addEventListener('resize', () => { resize(); if (reduced) draw(); });

  function draw() {
    const cx = Math.cos(rotX), sx = Math.sin(rotX), cy = Math.cos(rotY), sy = Math.sin(rotY);
    for (let i = 0; i < n; i++) {
      const p = base[i];
      const x1 = p.x * cy + p.z * sy;
      const z1 = -p.x * sy + p.z * cy;
      const y1 = p.y * cx - z1 * sx;
      const z2 = p.y * sx + z1 * cx;
      const depth = (z2 + 1) / 2; // 0 = back, 1 = front
      const el = els[i];
      el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y1 * radius}px, 0) scale(${0.62 + depth * 0.5})`;
      el.style.opacity = (0.22 + depth * 0.78).toFixed(3);
      el.style.zIndex = Math.round(depth * 100);
    }
  }

  // Drag to spin, with pointer capture so the drag survives leaving the box.
  let drag = null;
  box.addEventListener('pointerdown', (e) => {
    drag = { x: e.clientX, y: e.clientY, t: performance.now() };
    box.setPointerCapture(e.pointerId);
    box.classList.add('is-dragging');
  });
  box.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    rotY += dx * 0.008;
    rotX -= dy * 0.008;
    vy = dx * 0.0016;
    vx = -dy * 0.0016;
    drag.x = e.clientX;
    drag.y = e.clientY;
    if (reduced) draw();
  });
  const end = () => { drag = null; box.classList.remove('is-dragging'); };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);

  draw();
  if (reduced) return;

  let raf = 0;
  const loop = () => {
    if (!drag) {
      // Ease the release velocity back to the auto-rotate speed.
      vx += (AUTO.x - vx) * 0.03;
      vy += (AUTO.y - vy) * 0.03;
      rotX += vx;
      rotY += vy;
    }
    draw();
    raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf);
    if (e.isIntersecting) raf = requestAnimationFrame(loop);
  }).observe(box);
}
