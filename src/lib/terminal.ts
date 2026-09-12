import {
  commandAliases,
  contactEmail,
  githubProfileUrl,
  terminalCommands,
  terminalResponses,
} from '../data/terminal';

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

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g;

const appendFormatted = (output: HTMLElement, text: string, className = '') => {
  const line = document.createElement('p');
  line.className = className;
  let cursor = 0;
  for (const match of text.matchAll(markdownLinkPattern)) {
    const start = match.index ?? 0;
    if (start > cursor) line.append(text.slice(cursor, start));
    line.append(externalLink(match[2], match[1]));
    cursor = start + match[0].length;
  }
  if (cursor < text.length) line.append(text.slice(cursor));
  output.append(line);
  output.scrollTop = output.scrollHeight;
};

const appendContent = (output: HTMLElement, content: (string | Node)[], className = '') => {
  const line = document.createElement('p');
  line.className = className;
  for (const piece of content) line.append(piece);
  output.append(line);
  output.scrollTop = output.scrollHeight;
};

const externalLink = (href: string, text: string) => {
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.textContent = text;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer';
  return anchor;
};

const scrollToSection = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const rollD20 = () => Math.floor(Math.random() * 20) + 1;

export const mountTerminal = () => {
  const form = requiredElement<HTMLFormElement>('#terminal-form');
  const input = requiredElement<HTMLInputElement>('#terminal-input');
  const output = requiredElement<HTMLElement>('#terminal-output');

  const history: string[] = [];
  let historyIndex = -1;

  const runCommand = (rawCommand: string) => {
    const normalised = normaliseCommand(rawCommand);
    if (!normalised) return;

    const trimmed = rawCommand.trim();
    if (history[history.length - 1] !== trimmed) history.push(trimmed);
    historyIndex = -1;

    appendLine(output, `visitor@owodarkness:~$ ${rawCommand}`, 'terminal-command');

    const command = commandAliases[normalised] ?? normalised;

    if (command === 'clear') {
      output.replaceChildren();
      return;
    }

    if (command === 'help') {
      const grid = document.createElement('span');
      grid.className = 'terminal-help-grid';
      for (const hint of terminalCommands) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'terminal-cmd-button';
        button.dataset.cmd = hint.cmd;
        button.title = hint.blurb;
        button.textContent = hint.cmd;
        grid.append(button);
      }
      appendContent(output, ['available commands: ', grid], 'terminal-response');
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

    if (command === 'contact') {
      appendContent(output, [terminalResponses.contact, ' ', externalLink(`mailto:${contactEmail}`, contactEmail)], 'terminal-response');
      return;
    }

    if (command === 'github') {
      appendContent(output, ['Public builds live here: ', externalLink(githubProfileUrl, 'github.com/owodarkness ↗')], 'terminal-response');
      return;
    }

    if (command === 'skills') {
      appendFormatted(output, terminalResponses.skills, 'terminal-response');
      scrollToSection('#skills');
      return;
    }

    const key = command.replace(/\s+/g, '');
    appendFormatted(output, terminalResponses[key] ?? 'command not found. The world is still learning that word. Try `help`.', 'terminal-response');
  };

  output.addEventListener('click', (event) => {
    const trigger = (event.target as HTMLElement).closest<HTMLElement>('[data-cmd]');
    if (!trigger) return;
    runCommand(trigger.dataset.cmd ?? '');
    input.focus();
  });

  const submit = () => {
    runCommand(input.value);
    input.value = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submit();
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      if (history.length === 0) return;
      event.preventDefault();
      historyIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
      return;
    }
    if (event.key === 'ArrowDown') {
      if (historyIndex === -1) return;
      event.preventDefault();
      historyIndex += 1;
      if (historyIndex >= history.length) {
        historyIndex = -1;
        input.value = '';
      } else {
        input.value = history[historyIndex];
      }
      return;
    }
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submit();
  });
};
