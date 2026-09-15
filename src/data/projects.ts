export type Project = {
  id: 'ue-game' | 'kimpeanut-vault' | 'kimpeanut-engine';
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
  {
    id: 'ue-game',
    label: 'unreal engine / action rpg',
    name: '沃土重生 · RFG Demo',
    summary: 'An Unreal Engine action-RPG vertical slice: dragon boss battles, melee and ranged combat, alchemy crafting, and horseback exploration.',
    cover: '/projects/ue-game/menu.jpg',
    route: '/projects/ue-game/',
    stack: ['Unreal Engine 5', 'Blueprint', 'UMG', 'Procedural Terrain'],
    gallery: [
      {
        src: '/projects/ue-game/menu.jpg',
        alt: '沃土重生 main menu',
        caption: 'The main menu opens like an old codex, with sound, resolution, and graphics settings.',
      },
      {
        src: '/projects/ue-game/boss-dragon.jpg',
        alt: '沃土重生 dragon boss battle',
        caption: 'A night duel against the dragon 朔夜 — health, potions, and hotbar HUD in play.',
      },
      {
        src: '/projects/ue-game/bow-combat.png',
        alt: 'Bow combat against a wraith',
        caption: 'Ranged bow combat with stamina, mana, and health tracked as three separate bars.',
      },
      {
        src: '/projects/ue-game/melee-combat.png',
        alt: 'Melee combat with a staff',
        caption: 'Close-quarters staff combat against a wraith enemy.',
      },
      {
        src: '/projects/ue-game/sword-combat.png',
        alt: 'Enchanted sword strike',
        caption: 'An enchanted sword strike trails green light through the training ground.',
      },
      {
        src: '/projects/ue-game/alchemy.jpg',
        alt: 'Alchemy crafting interface',
        caption: 'A step-based alchemy flow: grind, add water, stir, heat — each choice shapes the result.',
      },
      {
        src: '/projects/ue-game/swimming.jpg',
        alt: 'Swimming in an autumn river',
        caption: 'Swimming through a stylized autumn river beneath the waterfalls.',
      },
      {
        src: '/projects/ue-game/horse-riding.png',
        alt: 'Horseback riding',
        caption: 'Horseback traversal for crossing the open world.',
      },
      {
        src: '/projects/ue-game/terrain-plugin.png',
        alt: 'Procedural terrain editor plugin',
        caption: 'A companion editor plugin generates terrain from noise heightmaps with biome masks and spline roads.',
      },
    ],
    notes: [
      'A playable Unreal Engine vertical slice: dragon boss encounter, sword / bow / staff combat, swimming, and horse-mounted travel in a stylized world.',
      'Custom UMG systems drive the HUD, inventory, and an alchemy crafting flow where grinding, water, stirring, and heat combine into recipes.',
      'A companion editor plugin builds the world itself — noise-based heightmaps, biome masks, and spline roads generated directly in the editor.',
    ],
  },
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
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
