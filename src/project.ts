import './styles/app.css';
import { projects, getProject } from './data/projects';
import { renderProjectPage } from './views/project';
import { mountLangSwitch } from './lib/lang-switch';
import { applyDocumentLocale, getLocale, setLocale, toggleLocale, type Locale } from './lib/i18n';

const root = document.querySelector<HTMLDivElement>('#app');
const projectId = projects.find((project) => window.location.pathname.includes(project.id))?.id;
const project = projectId ? getProject(projectId) : undefined;

if (!root || !project) throw new Error('Missing project page or project data');

let locale: Locale = getLocale();

const render = () => {
  const offset = window.scrollY;
  applyDocumentLocale(locale);
  root.innerHTML = renderProjectPage(project, locale);
  mountLangSwitch(() => {
    locale = toggleLocale(locale);
    setLocale(locale);
    render();
  });
  window.scrollTo({ top: offset });
};

render();
