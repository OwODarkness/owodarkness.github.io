export type Project = {
  id: 'kimpeanut-vault' | 'kimpeanut-engine';
  label: string;
  name: string;
  summary: string;
  cover: string;
  route: string;
  repository?: string;
  stack: string[];
  gallery: Array<{ src: string; alt: string; caption: string }>;
  notes: string[];
};

export const projects: Project[] = [
  {
    id: 'kimpeanut-vault',
    label: 'desktop / security',
    name: 'KimPeanut Vault',
    summary: 'A quiet desktop vault for keeping personal records protected and close at hand.',
    cover: '/projects/kimpeanut-vault/vault-overview.png',
    route: '/projects/kimpeanut-vault/',
    stack: ['Desktop', 'Local-first', 'Encryption'],
    gallery: [
      {
        src: '/projects/kimpeanut-vault/vault-overview.png',
        alt: 'KimPeanut Vault records screen',
        caption: 'A focused records workspace with local encryption at the center.',
      },
      {
        src: '/projects/kimpeanut-vault/login.jpg',
        alt: 'KimPeanut Vault unlock screen',
        caption: 'The vault opens with a minimal, intentional unlock flow.',
      },
      {
        src: '/projects/kimpeanut-vault/sync.jpg',
        alt: 'KimPeanut Vault sync screen',
        caption: 'Sync status stays legible and close to the records it protects.',
      },
    ],
    notes: [
      'Designed around a simple idea: a personal vault should feel calm, direct, and private.',
      'Records, search, backup, and lock controls stay visible without turning the workspace into a dashboard.',
    ],
  },
  {
    id: 'kimpeanut-engine',
    label: 'engine / rendering',
    name: 'KimPeanut Engine',
    summary: 'A C++ game-engine experiment: editor tools, rendering diagnostics, and a live scene pipeline.',
    cover: '/projects/kimpeanut-engine/editor-main.png',
    route: '/projects/kimpeanut-engine/',
    repository: 'https://github.com/OwODarkness/KimPeanutEngine',
    stack: ['C++17', 'Vulkan', 'OpenGL', 'CMake'],
    gallery: [
      {
        src: '/projects/kimpeanut-engine/editor-main.png',
        alt: 'KimPeanut Engine scene editor',
        caption: 'Scene viewport, actor inspection, diagnostics, and performance profiling in one editor surface.',
      },
      {
        src: '/projects/kimpeanut-engine/asset-browser.png',
        alt: 'KimPeanut Engine asset browser',
        caption: 'Browsing engine assets without leaving the editor.',
      },
      {
        src: '/projects/kimpeanut-engine/live2d.png',
        alt: 'KimPeanut Engine rendering view',
        caption: 'A live rendering view for scene and material iteration.',
      },
      {
        src: '/projects/kimpeanut-engine/loading.png',
        alt: 'KimPeanut Engine loading screen',
        caption: 'The engine boot sequence.',
      },
      {
        src: '/projects/kimpeanut-engine/terminal.png',
        alt: 'KimPeanut Engine terminal output',
        caption: 'The command-line side of the engine workflow.',
      },
    ],
    notes: [
      'A modular rendering architecture with an API-neutral RHI over Vulkan and OpenGL backends.',
      'The editor brings scene inspection, asset browsing, diagnostics, and profiling into the same working loop.',
    ],
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
