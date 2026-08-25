import { commandAliases, terminalHelp, terminalResponses } from '../data/terminal';

const requiredElement = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing terminal element: ${selector}`);
  return element;
};

const normaliseCommand = (value: string) => value
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9 ]/g, '')
  .replace(/\s+/g, ' ');

const appendLine = (output: HTMLElement, text: string, className = '') => {
  const line = document.createElement('p');
  line.className = className;
  line.textContent = text;
  output.append(line);
  output.scrollTop = output.scrollHeight;
};

const rollD20 = () => Math.floor(Math.random() * 20) + 1;

export const mountTerminal = () => {
  const form = requiredElement<HTMLFormElement>('#terminal-form');
  const input = requiredElement<HTMLInputElement>('#terminal-input');
  const output = requiredElement<HTMLElement>('#terminal-output');

  const runCommand = (rawCommand: string) => {
    const command = normaliseCommand(rawCommand);
    if (!command) return;

    appendLine(output, `visitor@owodarkness:~$ ${rawCommand}`, 'terminal-command');

    if (command === 'clear') {
      output.replaceChildren();
      return;
    }

    if (command === 'help') {
      appendLine(output, terminalHelp, 'terminal-response');
      return;
    }

    if (command === 'roll' || command === 'roll d20' || command === 'roll a d20') {
      const roll = rollD20();
      const result = roll === 20
        ? 'critical success — the world opens a secret door.'
        : roll === 1
          ? 'critical miss — a tiny goblin laughs.'
          : `you rolled ${roll}/20 — the story continues.`;
      appendLine(output, result, 'terminal-response');
      return;
    }

    const key = commandAliases[command] ?? command.replace(/\s+/g, '');
    appendLine(output, terminalResponses[key] ?? 'command not found. The world is still learning that word. Try `help`.', 'terminal-response');
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = '';
  });

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    runCommand(input.value);
    input.value = '';
  });
};
