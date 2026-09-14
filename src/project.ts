import './styles/app.css';
import { getProject } from './data/projects';
import { renderProjectPage } from './views/project';

const root = document.querySelector<HTMLDivElement>('#app');
const projectId = window.location.pathname.includes('kimpeanut-engine') ? 'kimpeanut-engine' : 'kimpeanut-vault';
const project = getProject(projectId);

if (!root || !project) throw new Error('Missing project page or project data');

root.innerHTML = renderProjectPage(project);
