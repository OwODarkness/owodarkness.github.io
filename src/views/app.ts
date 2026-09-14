import type { SkillGroup } from '../data/profile';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { games } from '../data/library';
import { contactEmail, terminalResponses } from '../data/terminal';

const renderSkillRow = ({ label, skills }: SkillGroup) => `
  <div class="skill-row">
    <span class="skill-directory">${label}</span>
    <div class="skill-items">${skills.map((skill) => `<button class="skill-button" type="button" data-skill-id="${skill.id}">${skill.name}</button>`).join('')}</div>
  </div>`;

const emphasiseName = (text: string) => text.replace(profile.name, `<strong>${profile.name}</strong>`);

const renderProjectCard = (project: (typeof projects)[number], index: number) => `
  <a class="project-card" href="${project.route}">
    <div class="project-card-spine"><span>OWNED</span><span>0${index + 1}</span></div>
    <div class="project-card-image"><img src="${project.cover}" alt="${project.name} project capture" loading="lazy" /><span class="project-card-scan" aria-hidden="true"></span></div>
    <div class="project-card-content">
      <p class="project-card-index"><span>PROJECT DISC</span>${project.label}</p>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="project-card-footer"><span class="project-card-link">open case file <span aria-hidden="true">↗</span></span><span class="project-card-rating" aria-label="Personal project">◈</span></div>
    </div>
  </a>`;

export const renderApp = () => `
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="/">
        <img class="brand-icon" src="/icon.png" alt="" width="28" height="30" />
        <h1 class="brand-name">OwODarkness</h1>
      </a>
      <nav class="header-nav" aria-label="Contact and profile">
        <a class="header-link header-mail" href="mailto:${profile.email}"><span class="mail-full">${profile.email}</span><span class="mail-short">Email</span></a>
        <a class="header-link" href="${profile.githubUrl}" target="_blank" rel="noreferrer">GitHub <span class="link-arrow" aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main>
      <div class="hero">
        <p class="kicker">Game developer // 0101</p>
        <section class="hero-command" id="terminal-title" aria-label="Personal command terminal">
          <div class="terminal-bar"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><span>visitor@owodarkness:~</span><span>tty01</span></div>
          <div class="hero-command-body">
            <div class="terminal-output" id="terminal-output" aria-live="polite">
              <p class="terminal-muted">personal-world OS v0.1.01 <span class="terminal-ok">online</span></p>
              <p class="terminal-muted">type <span class="terminal-command">help</span> to begin.</p>
              <p><span class="prompt">visitor@owodarkness:~$</span> <span class="terminal-command">who are you</span></p>
              <p class="terminal-response">${terminalResponses.whoareyou}</p>
              <p><span class="prompt">visitor@owodarkness:~$</span> <span class="terminal-command">where am I?</span></p>
              <p class="terminal-response">${emphasiseName(terminalResponses.whereami)}</p>
              <p><span class="prompt">visitor@owodarkness:~$</span> <span class="terminal-command">contact</span></p>
              <p class="terminal-response">${terminalResponses.contact} <a href="mailto:${contactEmail}">${contactEmail}</a></p>
            </div>
            <form class="terminal-form" id="terminal-form">
              <label class="sr-only" for="terminal-input">Ask the personal website a question</label>
              <span class="prompt" aria-hidden="true">visitor@owodarkness:~$</span>
              <input id="terminal-input" name="command" type="text" autocomplete="off" spellcheck="false" placeholder="ask the world..." />
            </form>
          </div>
        </section>
      </div>
      <section class="skills-section" id="skills" aria-labelledby="skills-title">
        <div class="skills-copy" id="skill-overview-copy">
          <p class="section-label">System profile / 02</p>
          <h2 class="skills-title" id="skills-title">The toolkit.</h2>
          <p>Languages, engines, and systems I reach for when building a world.</p>
        </div>
        <aside class="skill-panel" id="skill-overview" aria-label="Technical skills">
          <div class="skill-panel-header"><span>visitor@owodarkness:~</span><span class="skill-live">● ONLINE</span></div>
          <div class="skill-markdown">
            <p class="skill-prompt">$ ls ~/skills/</p>
            <div class="skill-ls" aria-label="Skills directory listing">${profile.skills.map(renderSkillRow).join('')}</div>
          </div>
          <div class="skill-footer"><span>EOF</span><span>_</span></div>
        </aside>
        <article class="skill-detail" id="skill-detail" hidden aria-live="polite">
          <div class="terminal-bar"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><span>visitor@owodarkness:~</span><span>tty02</span></div>
          <div class="skill-detail-body">
            <button class="back-button" id="skill-back" type="button">← cd ..</button>
            <p class="detail-command"><span class="prompt">$</span> <span id="detail-command"></span></p>
            <p class="section-label" id="detail-category"></p>
            <p class="detail-output" id="detail-description"></p>
            <ul class="detail-features" id="detail-features"></ul>
            <div class="detail-tags" id="detail-tags" hidden></div>
          </div>
        </article>
      </section>
      <section class="projects-section" id="projects" aria-labelledby="projects-title">
        <div class="projects-copy">
          <p class="section-label">Selected work / 03</p>
          <h2 class="projects-title" id="projects-title">Case files.</h2>
          <p>Small systems, real interfaces, and the captured moments behind them.</p>
        </div>
        <div class="projects-grid">
          ${projects.map(renderProjectCard).join('')}
        </div>
      </section>
      <section class="library-section" id="library" aria-labelledby="library-title">
        <div class="library-copy">
          <p class="section-label">Reference shelf / 04</p>
          <h2 class="library-title" id="library-title">The library.</h2>
          <p>Games I’ve put serious hours into — played, finished. This is the shelf.</p>
        </div>
        <aside class="skill-panel library-panel" aria-label="Games played">
          <div class="skill-panel-header"><span>visitor@owodarkness:~</span><span class="skill-live">● PLAYED</span></div>
          <div id="library-overview">
            <p class="skill-prompt">$ ls ~/library/</p>
            <ul class="library-list">
              ${games.map((game) => `<li><button class="library-item" type="button" data-game-id="${game.id}">${game.name} <span lang="zh">(${game.zh})</span></button></li>`).join('')}
            </ul>
          </div>
          <article class="library-detail" id="library-detail" hidden aria-live="polite">
            <button class="back-button" id="library-back" type="button">← cd ..</button>
            <p class="detail-command"><span class="prompt">$</span> <span id="game-command"></span></p>
            <p class="game-name" id="game-name"></p>
            <p class="game-hours" id="game-hours"></p>
            <p class="game-line"><span class="prompt">feel ›</span> <span id="game-feel"></span></p>
            <p class="game-line"><span class="prompt">lesson ›</span> <span id="game-lesson"></span></p>
          </article>
          <div class="skill-footer"><span>EOF</span><span>_</span></div>
        </aside>
      </section>
    </main>
    <footer class="site-footer">
      <span>© 2026 ${profile.name}</span>
      <span class="footer-note">Made with curiosity <span aria-hidden="true">✦</span></span>
    </footer>
  </div>`;
