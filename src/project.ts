import './styles/app.css';
import { projects, getProject } from './data/projects';
import { renderProjectPage } from './views/project';

const root = document.querySelector<HTMLDivElement>('#app');
const projectId = projects.find((project) => window.location.pathname.includes(project.id))?.id;
const project = projectId ? getProject(projectId) : undefined;

if (!root || !project) throw new Error('Missing project page or project data');

root.innerHTML = renderProjectPage(project);
