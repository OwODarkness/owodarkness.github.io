import './styles/app.css';
import { mountLibraryExplorer } from './lib/library-explorer';
import { mountSkillExplorer } from './lib/skill-explorer';
import { mountTerminal } from './lib/terminal';
import { mountLangSwitch } from './lib/lang-switch';
import { applyDocumentLocale, getLocale, setLocale, toggleLocale, type Locale } from './lib/i18n';
import { renderApp } from './views/app';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('Missing app root');

let locale: Locale = getLocale();

const render = () => {
  const offset = window.scrollY;
  applyDocumentLocale(locale);
  root.innerHTML = renderApp(locale);
  mountTerminal();
  mountSkillExplorer(locale);
  mountLibraryExplorer(locale);
  mountLangSwitch(() => {
    locale = toggleLocale(locale);
    setLocale(locale);
    render();
  });
  window.scrollTo({ top: offset });
};

render();
