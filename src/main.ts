import './styles/app.css';
import { mountSkillExplorer } from './lib/skill-explorer';
import { mountTerminal } from './lib/terminal';
import { renderApp } from './views/app';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('Missing app root');

root.innerHTML = renderApp();
mountTerminal();
mountSkillExplorer();
