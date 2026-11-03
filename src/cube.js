// A 4×4×4 lattice of dots spinning in the featured card's corner. Plain 2D canvas projection.
export function initCube(reduced) {
  const canvas = document.querySelector('.card__cube');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio, 2);
  const size = 120;
  canvas.width = canvas.height = size * dpr;
  ctx.scale(dpr, dpr);

  const pts = [];
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      for (let z = 0; z < 4; z++) {
        // The top-front corner (high y, high z) is the "hot" region.
        pts.push({ x: x - 1.5, y: y - 1.5, z: z - 1.5, hot: y >= 2 && z >= 2 });
      }
    }
  }

  const draw = (t) => {
    const a = t * 0.00045;
    const b = 0.5 + Math.sin(t * 0.0003) * 0.18;
    const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
    const proj = pts.map((p) => {
      const x1 = p.x * ca - p.z * sa;
      const z1 = p.x * sa + p.z * ca;
      const y1 = p.y * cb - z1 * sb;
      const z2 = p.y * sb + z1 * cb;
      const s = 4.6 / (6 + z2);
      return { sx: size / 2 + x1 * s * 22, sy: size / 2 - y1 * s * 22, z: z2, s, hot: p.hot };
    }).sort((p, q) => q.z - p.z);

    ctx.clearRect(0, 0, size, size);
    for (const p of proj) {
      const depth = (p.z + 2.6) / 5.2;
      ctx.globalAlpha = 0.95 - depth * 0.65;
      ctx.fillStyle = p.hot ? '#F3B54A' : '#57C7E3';
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 3.2 * p.s, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  if (reduced) { draw(1800); return; }

  let raf = 0;
  const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };
  new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf);
    if (e.isIntersecting) raf = requestAnimationFrame(loop);
  }).observe(canvas);
}
