import type { SkillGroup } from '../data/profile';
import { profile } from '../data/profile';

const renderSkillRow = ({ label, skills }: SkillGroup) => `
  <div class="skill-row">
    <span class="skill-directory">${label}</span>
    <div class="skill-items">${skills.map((skill) => `<button class="skill-button" type="button" data-skill-id="${skill.id}">${skill.name}</button>`).join('')}</div>
  </div>`;

export const renderApp = () => `
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="/" aria-label="OwODarkness home">O<span>W</span>O</a>
      <a class="header-link" href="${profile.githubUrl}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </header>
    <main>
      <section class="hero" aria-labelledby="intro-title">
        <div class="hero-content">
          <p class="kicker"><span class="status-dot" aria-hidden="true"></span> Game developer // 0101</p>
          <h1 id="intro-title">${profile.name}</h1>
          <p class="hero-copy">${profile.description}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#terminal-title">Open terminal <span aria-hidden="true">↓</span></a>
            <a class="text-link" href="${profile.githubUrl}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <section class="hero-command" id="terminal-title" aria-label="Personal command terminal">
          <div class="terminal-bar"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><span>maple@owodarkness:~</span><span>tty01</span></div>
          <div class="hero-command-body">
            <div class="terminal-output" id="terminal-output" aria-live="polite">
              <p class="terminal-muted">personal-world OS v0.1.01 <span class="terminal-ok">online</span></p>
              <p class="terminal-muted">type <span class="terminal-command">help</span> to begin.</p>
              <p><span class="prompt">visitor@owodarkness:~$</span> <span class="terminal-command">where am I?</span></p>
              <p class="terminal-response">You are inside the personal website of <strong>${profile.name}</strong> — a game developer making simulated worlds.</p>
            </div>
            <form class="terminal-form" id="terminal-form">
              <label class="sr-only" for="terminal-input">Ask the personal website a question</label>
              <span class="prompt" aria-hidden="true">visitor@owodarkness:~$</span>
              <input id="terminal-input" name="command" type="text" autocomplete="off" spellcheck="false" placeholder="ask the world..." />
            </form>
            <div class="terminal-readout"><span>DAY 001</span><span>MOOD CURIOUS</span></div>
          </div>
        </section>
      </section>
      <section class="skills-section" aria-labelledby="skills-title">
        <div class="skills-copy" id="skill-overview-copy">
          <p class="section-label">System profile / 02</p>
          <h2 class="skills-title" id="skills-title">The toolkit.</h2>
          <p>Languages, engines, and systems I reach for when building a world.</p>
        </div>
        <aside class="skill-panel" id="skill-overview" aria-label="Technical skills">
          <div class="skill-panel-header"><span>maple@owodarkness:~</span><span class="skill-live">● ONLINE</span></div>
          <div class="skill-markdown">
            <p class="skill-prompt">$ ls ~/skills/</p>
            <div class="skill-ls" aria-label="Skills directory listing">${profile.skills.map(renderSkillRow).join('')}</div>
          </div>
          <div class="skill-footer"><span>EOF</span><span>_</span></div>
        </aside>
        <article class="skill-detail" id="skill-detail" hidden aria-live="polite">
          <div class="terminal-bar"><span class="terminal-lights" aria-hidden="true"><i></i><i></i><i></i></span><span>maple@owodarkness:~</span><span>tty02</span></div>
          <div class="skill-detail-body">
            <button class="back-button" id="skill-back" type="button">← cd ..</button>
            <p class="detail-command"><span class="prompt">$</span> <span id="detail-command"></span></p>
            <p class="section-label" id="detail-category"></p>
            <p class="detail-output" id="detail-description"></p>
            <p class="detail-topics" id="detail-topics"></p>
          </div>
        </article>
      </section>
    </main>
    <footer class="site-footer">
      <span>© 2026 ${profile.name}</span>
      <span class="footer-note">Made with curiosity <span aria-hidden="true">✦</span></span>
    </footer>
  </div>`;
