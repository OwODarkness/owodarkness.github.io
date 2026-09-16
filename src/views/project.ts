import type { Locale } from '../lib/i18n';
import { tx } from '../lib/i18n';
import type { Project } from '../data/projects';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { renderLangSwitch } from './app';

export const renderProjectPage = (project: Project, locale: Locale) => `
  <div class="page-shell project-page-shell">
    <header class="site-header">
      <a class="brand" href="/">
        <img class="brand-icon" src="/icon.png" alt="" width="28" height="30" />
        <h1 class="brand-name">OwODarkness</h1>
      </a>
      <nav class="header-nav" aria-label="Back to projects">
        <a class="header-link" href="/#projects">${tx(ui.projectPage.back, locale)}</a>
        ${renderLangSwitch(locale)}
      </nav>
    </header>
    <main class="project-main">
      <a class="project-back" href="/#projects">← cd ~/projects</a>
      <section class="project-hero" aria-labelledby="project-title">
        <div>
          <p class="section-label">${tx(project.label, locale)}</p>
          <h2 id="project-title">${project.name}</h2>
          <p class="project-summary">${tx(project.summary, locale)}</p>
          <div class="project-tags">${project.stack.map((item) => `<span>${item}</span>`).join('')}</div>
          ${project.repository ? `<a class="project-repository" href="${project.repository}" target="_blank" rel="noreferrer">${tx(ui.projectPage.source, locale)} <span aria-hidden="true">↗</span></a>` : ''}
        </div>
        <div class="project-hero-frame"><img src="${project.cover}" alt="${project.gallery[0].alt}" /></div>
      </section>
      <section class="project-notes" aria-label="Project notes">
        <p class="detail-command"><span class="prompt">$</span> cat ./notes.md</p>
        ${project.notes.map((note) => `<p>${tx(note, locale)}</p>`).join('')}
      </section>
      <section class="project-gallery" aria-label="Project captures">
        <p class="detail-command"><span class="prompt">$</span> ls ./captures/</p>
        <div class="capture-grid${project.gallery.some((image) => image.tall) ? ' capture-grid--stacked' : ''}">
          ${project.gallery.map((image, index) => `<figure class="capture capture-${index + 1}${image.tall ? ' capture-tall' : ''}"><img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" /><figcaption><span>0${index + 1}</span>${tx(image.caption, locale)}</figcaption></figure>`).join('')}
        </div>
      </section>
    </main>
    <footer class="site-footer"><span>© 2026 ${profile.name}</span><span class="footer-note">${tx(ui.projectPage.archive, locale)} <span aria-hidden="true">✦</span></span></footer>
  </div>`;
