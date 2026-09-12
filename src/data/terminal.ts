import { profile } from './profile';

export type TerminalCommandHint = {
  cmd: string;
  blurb: string;
};

export const terminalCommands: TerminalCommandHint[] = [
  { cmd: 'who are you', blurb: 'who built this' },
  { cmd: 'bio', blurb: 'the longer answer' },
  { cmd: 'projects', blurb: 'what I have built' },
  { cmd: 'contact', blurb: 'reach me' },
  { cmd: 'abilities', blurb: 'what I do' },
  { cmd: 'skills', blurb: 'the toolkit' },
  { cmd: 'look', blurb: 'look around' },
  { cmd: 'status', blurb: 'character sheet' },
  { cmd: 'roll d20', blurb: 'luck check' },
  { cmd: 'clear', blurb: 'wipe the screen' },
];

export const terminalResponses: Record<string, string> = {
  whoami: 'A curious visitor — welcome aboard. The one who built this place answers to `who are you`.',
  whoareyou: 'OwODarkness. Game developer, world-builder, and collector of strange systems.',
  bio: 'Hi, I’m OwODarkness. I build game systems at two depths: gameplay in Unreal Engine, and my own game engine in C++17 — [KimPeanut Engine ↗](https://github.com/OwODarkness/KimPeanutEngine).\n\nThe engine runs an API-neutral RHI on Vulkan and OpenGL, a modular asset pipeline, a modern rendering architecture, and Live2D / TTS integrations as plugins.\n\nI like crossing into whatever the world needs next, too: 3D reconstruction research, AI-assisted tooling.\n\nCurrently looking for game client roles where making worlds feel alive is the actual job.',
  whereami: `You are inside the personal website of ${profile.name} — a game developer making simulated worlds.`,
  look: 'A dark room. A warm terminal glow. A world waiting for rules. Somewhere, an entity has just noticed you.',
  abilities: 'Passive: curiosity.\nActive: simulation design, systems thinking, and turning 0101 into a place worth exploring.',
  status: 'HP 100/100 · XP 0101 · ALIGNMENT: CHAOTIC CREATIVE · QUEST: MAKE WORLDS FEEL ALIVE',
  skills: 'Opening ~/skills/ — the toolkit is just below.',
  contact: 'Channel open:',
};

export const contactEmail = profile.email;
export const githubProfileUrl = profile.githubUrl;

export const commandAliases: Record<string, string> = {
  'who is this': 'whoareyou',
  'who is owodarkness': 'whoareyou',
  'what can you do': 'abilities',
  'about': 'bio',
  'intro': 'bio',
  'projects': 'github',
  'ls': 'github',
  'ls projects': 'github',
  'list projects': 'github',
  'repos': 'github',
  'email': 'contact',
  'mail': 'contact',
  'contact me': 'contact',
  'reach you': 'contact',
  'resume': 'contact',
  'cv': 'contact',
  'repo': 'github',
  'github profile': 'github',
};
