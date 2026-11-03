import {
  profile, metrics, projects, skillGroups, timeline, certifications, courses, contact, footer,
} from './content.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const mount = (name, html) => { document.querySelector(`[data-mount="${name}"]`).innerHTML = html; };
const ext = (href, label, cls = '') =>
  `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>`;

export function render() {
  mount('hero', `
    <p class="eyebrow">${esc(profile.role)}</p>
    <h1 id="hero-name" class="hero__name">${esc(profile.first)}<br /><span class="grad">${esc(profile.last)}</span></h1>
    <p class="hero__pitch">${esc(profile.pitch)}</p>
    <div class="btns">
      <a class="btn btn--amber" href="#work">See the work</a>
      ${ext(contact.github, 'GitHub', 'btn')}
      ${ext(contact.linkedin, 'LinkedIn', 'btn')}
    </div>`);

  mount('metrics', metrics.map((m, i) => `
    <div class="metric ${i % 2 ? 'is-amber' : 'is-cyan'}">
      <strong>${esc(m.figure)}</strong>
      <span>${esc(m.label)}</span>
    </div>`).join(''));

  mount('projects', projects.map((p) => `
    <article class="card${p.featured ? ' card--featured' : ''}${p.wide ? ' card--wide' : ''}" data-reveal data-tilt>
      <div class="card__glare" aria-hidden="true"></div>
      ${p.featured ? '<canvas class="card__cube" width="240" height="240" aria-hidden="true"></canvas>' : ''}
      <p class="card__tag">${esc(p.tag)}</p>
      <h3 class="card__title">${esc(p.title)}</h3>
      <p class="card__line">${esc(p.line)}</p>
      <div class="card__figs">${p.figures.map((f, i) => `
        <div class="fig ${i % 2 ? 'is-cyan' : 'is-amber'}"><strong>${esc(f.value)}</strong><span>${esc(f.label)}</span></div>`).join('')}
      </div>
      <ul class="card__stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      <p class="card__links">${p.links.map((l) => ext(l.href, `${l.label} ↗`)).join('')}</p>
    </article>`).join(''));

  mount('skills', skillGroups.map((g) => `
    <div class="skills__row"><dt>${esc(g.name)}</dt><dd>${g.items.map(esc).join(' · ')}</dd></div>`).join(''));

  mount('timeline', timeline.map((t) => `
    <li class="tl">
      <span class="tl__date">${esc(t.date)}</span>
      <div><p class="tl__title">${esc(t.title)}</p><p class="tl__sub">${esc(t.sub)}</p></div>
      <span class="tl__kind ${t.kind === 'Work' ? 'is-amber' : 'is-cyan'}">${esc(t.kind)}</span>
    </li>`).join(''));

  mount('certs', certifications.map((c) => `
    <li class="cert">
      <a href="${esc(c.image)}" target="_blank" rel="noopener" aria-label="${esc(c.name)} certificate, opens full size">
        <span class="cert__img"><img src="${esc(c.image)}" alt="" loading="lazy" decoding="async" /></span>
        <span class="cert__name">${esc(c.name)}</span>
        <span class="cert__meta">${esc(c.issuer)} · ${esc(c.date)}</span>
      </a>
    </li>`).join(''));

  mount('courses', `<span class="courses__h">Also completed</span>${courses.map((c) => `
    <span class="course">${esc(c.name)} <small>${esc(c.issuer)} · ${esc(c.date)}</small></span>`).join('')}`);

  mount('contact', `
    <div class="contact__spin" aria-hidden="true"></div>
    <p class="eyebrow">Open to data analyst and analytics engineer roles</p>
    <h2 id="contact-h" class="contact__h">Let's talk <span>data.</span></h2>
    <div class="contact__email">
      <code class="email">${esc(contact.email)}</code>
      <button class="btn btn--sm" type="button" data-copy>Copy email</button>
      <span class="copy-status" role="status" aria-live="polite"></span>
    </div>
    <div class="btns">
      ${ext(contact.linkedin, 'LinkedIn', 'btn btn--amber')}
      ${ext(contact.github, 'GitHub', 'btn')}
    </div>`);

  mount('footer', `<span>${esc(footer.left)}</span><span class="mono">${esc(footer.right)}</span>`);
}
