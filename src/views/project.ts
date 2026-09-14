import type { Project } from '../data/projects';
import { profile } from '../data/profile';

export const renderProjectPage = (project: Project) => `
  <div class="page-shell project-page-shell">
    <header class="site-header">
      <a class="brand" href="/">
        <img class="brand-icon" src="/icon.png" alt="" width="28" height="30" />
        <h1 class="brand-name">OwODarkness</h1>
      </a>
      <a class="header-link" href="/#projects">← projects</a>
    </header>
    <main class="project-main">
      <a class="project-back" href="/#projects">← cd ~/projects</a>
      <section class="project-hero" aria-labelledby="project-title">
        <div>
          <p class="section-label">${project.label}</p>
          <h2 id="project-title">${project.name}</h2>
          <p class="project-summary">${project.summary}</p>
          <div class="project-tags">${project.stack.map((item) => `<span>${item}</span>`).join('')}</div>
          ${project.repository ? `<a class="project-repository" href="${project.repository}" target="_blank" rel="noreferrer">view source <span aria-hidden="true">↗</span></a>` : ''}
        </div>
        <div class="project-hero-frame"><img src="${project.cover}" alt="${project.gallery[0].alt}" /></div>
      </section>
      <section class="project-notes" aria-label="Project notes">
        <p class="detail-command"><span class="prompt">$</span> cat ./notes.md</p>
        ${project.notes.map((note) => `<p>${note}</p>`).join('')}
      </section>
      <section class="project-gallery" aria-label="Project captures">
        <p class="detail-command"><span class="prompt">$</span> ls ./captures/</p>
        <div class="capture-grid">
          ${project.gallery.map((image, index) => `<figure class="capture capture-${index + 1}"><img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" /><figcaption><span>0${index + 1}</span>${image.caption}</figcaption></figure>`).join('')}
        </div>
      </section>
    </main>
    <footer class="site-footer"><span>© 2026 ${profile.name}</span><span class="footer-note">project archive <span aria-hidden="true">✦</span></span></footer>
  </div>`;
