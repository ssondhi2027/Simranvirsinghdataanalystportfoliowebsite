import {
  AdditiveBlending, AmbientLight, BoxGeometry, BufferAttribute, BufferGeometry, Color, DirectionalLight, Fog,
  GridHelper, InstancedMesh, MeshStandardMaterial, Object3D, PerspectiveCamera, Plane, PointLight, Points,
  PointsMaterial, Raycaster, Scene, Vector2, Vector3, WebGLRenderer,
} from 'three';

const INK = 0x0a0f1e;
const LOW = new Color('#2B5C8A');
const MID = new Color('#57C7E3');
const HIGH = new Color('#F3B54A');
const SPACING = 0.62;
const MIN_H = 0.06;
const BUMP_SIGMA = 1.5;
const BUMP_AMP = 2.6;
const INTRO_S = 2.2; // seconds for the bars to rise out of the floor on load
const SPARKS = 150;
const SPARK_TOP = 7;

export function initHero(reduced) {
  const hero = document.getElementById('hero');
  const canvas = hero.querySelector('.hero__canvas');

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch {
    hero.classList.add('no-webgl');
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(INK, 1);

  const scene = new Scene();
  scene.fog = new Fog(INK, 13, 32);
  const camera = new PerspectiveCamera(42, 1, 0.1, 80);

  scene.add(new AmbientLight(0x9fb4e6, 0.55));
  const key = new DirectionalLight(0xffffff, 1.5);
  key.position.set(-6, 12, 9);
  scene.add(key);
  const amber = new PointLight(0xf3b54a, 14, 0, 1);
  amber.position.set(12, 6, -9);
  scene.add(amber);

  const grid = new GridHelper(70, 70, 0x57c7e3, 0x57c7e3);
  grid.material.transparent = true;
  grid.material.opacity = 0.07;
  grid.position.y = -0.01;
  scene.add(grid);

  const dummy = new Object3D();
  const color = new Color();

  // Sparks drifting up off the bars, cyan near the floor and amber higher up.
  const sparkPos = new Float32Array(SPARKS * 3);
  const sparkCol = new Float32Array(SPARKS * 3);
  const sparkSpeed = new Float32Array(SPARKS);
  for (let i = 0; i < SPARKS; i++) {
    sparkPos[i * 3] = (Math.random() - 0.5) * 44;
    sparkPos[i * 3 + 1] = Math.random() * SPARK_TOP;
    sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 18;
    sparkSpeed[i] = 0.25 + Math.random() * 0.5;
  }
  const sparkGeo = new BufferGeometry();
  sparkGeo.setAttribute('position', new BufferAttribute(sparkPos, 3));
  sparkGeo.setAttribute('color', new BufferAttribute(sparkCol, 3));
  const sparks = new Points(sparkGeo, new PointsMaterial({
    size: 0.09, vertexColors: true, transparent: true, opacity: 0.85, blending: AdditiveBlending, depthWrite: false,
  }));
  scene.add(sparks);
  function stepSparks(t, dt) {
    for (let i = 0; i < SPARKS; i++) {
      let y = sparkPos[i * 3 + 1] + sparkSpeed[i] * dt;
      if (y > SPARK_TOP) y = 0;
      sparkPos[i * 3 + 1] = y;
      sparkPos[i * 3] += Math.sin(t * 0.6 + i) * 0.12 * dt;
      // Fade in off the floor and out at the top.
      const n = y / SPARK_TOP;
      color.lerpColors(MID, HIGH, n).multiplyScalar(Math.sin(n * Math.PI));
      sparkCol[i * 3] = color.r;
      sparkCol[i * 3 + 1] = color.g;
      sparkCol[i * 3 + 2] = color.b;
    }
    sparkGeo.attributes.position.needsUpdate = true;
    sparkGeo.attributes.color.needsUpdate = true;
  }

  const geometry = new BoxGeometry(0.46, 1, 0.46).translate(0, 0.5, 0);
  const material = new MeshStandardMaterial({ roughness: 0.42, metalness: 0.2 });

  let mesh, cols, rows, aimX, positions;
  // Matches the CSS breakpoint where the hero text stacks under the portrait.
  const stacked = window.matchMedia('(max-width: 960px), (max-width: 1100px) and (orientation: portrait)');
  function build() {
    const small = window.innerWidth < 700;
    // Widen the field on wide screens so the terrain still reaches both edges.
    const aspect = hero.clientWidth / hero.clientHeight;
    const nextCols = small ? 26 : Math.round(Math.min(Math.max(46, 46 * aspect / 1.6), 76));
    if (mesh && nextCols === cols) return;
    if (mesh) { scene.remove(mesh); mesh.dispose(); }
    cols = nextCols;
    rows = small ? 20 : 28;
    mesh = new InstancedMesh(geometry, material, cols * rows);
    positions = new Float32Array(cols * rows * 2);
    for (let z = 0, i = 0; z < rows; z++) {
      for (let x = 0; x < cols; x++, i++) {
        positions[i * 2] = (x - (cols - 1) / 2) * SPACING;
        positions[i * 2 + 1] = (z - (rows - 1) / 2) * SPACING;
      }
    }
    scene.add(mesh);
  }

  // Pointer state: target values are set by events, the eased ones drive the scene.
  const ndc = new Vector2();
  const mouse = { x: 0, y: 0, ex: 0, ey: 0 };
  const bump = { x: 0, z: 0, ex: 0, ez: 0, on: 0, strength: 0 };
  const raycaster = new Raycaster();
  const floor = new Plane(new Vector3(0, 1, 0), 0);
  const hit = new Vector3();

  let lastT = 4;
  let introT = reduced ? INTRO_S : 0;
  function frame(t, dt) {
    lastT = t;
    introT = Math.min(introT + dt, INTRO_S);
    const intro = introT / INTRO_S;
    // A bright ridge that sweeps left to right across the field every few seconds.
    const sweep = reduced ? -99 : ((t * 0.14) % 1.5 - 0.25) * cols;
    stepSparks(t, dt);
    const k = reduced ? 1 : 1 - Math.exp(-dt * 6);
    mouse.ex += (mouse.x - mouse.ex) * k;
    mouse.ey += (mouse.y - mouse.ey) * k;
    bump.ex += (bump.x - bump.ex) * k;
    bump.ez += (bump.z - bump.ez) * k;
    bump.strength += (bump.on - bump.strength) * (reduced ? 1 : 1 - Math.exp(-dt * 3));

    const scroll = Math.min(window.scrollY / hero.offsetHeight, 1);
    const orbit = Math.sin(t * 0.07) * 0.22 + mouse.ex * 0.12;
    const dist = 16 + scroll * 5;
    camera.position.set(
      aimX + Math.sin(orbit) * dist,
      9.5 + scroll * 4 - mouse.ey * 0.6,
      Math.cos(orbit) * dist,
    );
    camera.lookAt(aimX, 0, -1.5);

    const twoSigma2 = 2 * BUMP_SIGMA * BUMP_SIGMA;
    for (let z = 0, i = 0; z < rows; z++) {
      for (let x = 0; x < cols; x++, i++) {
        const px = positions[i * 2];
        const pz = positions[i * 2 + 1];
        let h = 0.75
          + 0.5 * Math.sin(x * 0.33 + t * 0.85)
          + 0.42 * Math.sin(z * 0.41 - t * 0.65)
          + 0.32 * Math.sin((x + z) * 0.21 + t * 0.45)
          + (x / cols) * 2.1;
        const ds = x - sweep;
        const pulse = Math.exp(-(ds * ds) / 7);
        h += 0.6 * pulse;
        if (bump.strength > 0.001) {
          const dx = px - bump.ex;
          const dz = pz - bump.ez;
          h += BUMP_AMP * bump.strength * Math.exp(-(dx * dx + dz * dz) / twoSigma2);
        }
        if (intro < 1) {
          // Columns rise in a left-to-right wave, each with an ease-out.
          const rise = Math.min(Math.max(intro * 1.6 - (x / cols) * 0.6, 0), 1);
          h *= 1 - (1 - rise) ** 3;
        }
        h = Math.max(h, MIN_H);
        dummy.position.set(px, 0, pz);
        dummy.scale.set(1, h, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);

        const n = Math.min(h / 4.6 + pulse * 0.16, 1);
        if (n < 0.5) color.lerpColors(LOW, MID, n * 2);
        else color.lerpColors(MID, HIGH, (n - 0.5) * 2);
        mesh.setColorAt(i, color);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    renderer.render(scene, camera);
  }

  function resize() {
    build();
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // Aim left of the field on desktop so the bars sit to the right of the hero text.
    aimX = stacked.matches ? 0 : -4.2 * Math.min(w / 1440, 1.5);
    // Resizing the canvas clears it, so redraw now rather than waiting for the next loop tick.
    frame(lastT, 0);
  }

  function onPointer(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    mouse.x = ndc.x;
    mouse.y = ndc.y;
    raycaster.setFromCamera(ndc, camera);
    if (raycaster.ray.intersectPlane(floor, hit)) {
      bump.x = hit.x;
      bump.z = hit.z;
      bump.on = 1;
    }
    if (reduced) frame(lastT, 0);
  }

  resize();
  window.addEventListener('resize', resize);
  hero.addEventListener('pointermove', onPointer);
  hero.addEventListener('pointerleave', () => {
    bump.on = 0;
    if (reduced) frame(lastT, 0);
  });

  if (reduced) return;

  let running = false;
  let last = 0;
  let raf = 0;
  const loop = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    frame(now / 1000, dt);
    raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !running) {
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    } else if (!entry.isIntersecting && running) {
      running = false;
      cancelAnimationFrame(raf);
    }
  }).observe(hero);
}
