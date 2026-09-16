import type { Tx } from '../lib/i18n';

export type Project = {
  id: 'ue-game' | 'kimpeanut-vault' | 'kimpeanut-engine';
  label: Tx;
  name: string;
  summary: Tx;
  cover: string;
  route: string;
  repository?: string;
  stack: string[];
  gallery: Array<{ src: string; alt: string; caption: Tx; tall?: boolean }>;
  notes: Tx[];
};

export const projects: Project[] = [
  {
    id: 'kimpeanut-engine',
    label: { zh: '引擎 / 渲染', en: 'engine / rendering' },
    name: 'KimPeanut Engine',
    summary: {
      zh: '一个 C++ 游戏引擎实验：编辑器工具、渲染诊断，以及可实时编辑的场景管线。',
      en: 'A C++ game-engine experiment: editor tools, rendering diagnostics, and a live scene pipeline.',
    },
    cover: '/projects/kimpeanut-engine/editor-main.png',
    route: '/projects/kimpeanut-engine/',
    repository: 'https://github.com/OwODarkness/KimPeanutEngine',
    stack: ['C++20', 'Vulkan', 'OpenGL', 'CMake'],
    gallery: [
      {
        src: '/projects/kimpeanut-engine/editor-main.png',
        alt: 'KimPeanut Engine scene editor',
        caption: { zh: '整个世界，一屏之内。', en: 'The whole world in one surface.' },
      },
      {
        src: '/projects/kimpeanut-engine/asset-browser.png',
        alt: 'KimPeanut Engine asset browser',
        caption: { zh: '所有资产，一览无余。', en: 'Every asset, one glance.' },
      },
      {
        src: '/projects/kimpeanut-engine/asset-reference.png',
        alt: 'KimPeanut Engine asset reference viewer',
        caption: { zh: '追溯一个关卡依赖了什么。', en: 'Follow what a level depends on.' },
      },
      {
        src: '/projects/kimpeanut-engine/live2d.png',
        alt: 'KimPeanut Engine Live2D viewer',
        caption: { zh: 'Live2D，实时驱动。', en: 'Live2D, driven in real time.' },
        tall: true,
      },
      {
        src: '/projects/kimpeanut-engine/loading.png',
        alt: 'KimPeanut Engine loading screen',
        caption: { zh: '引擎启动中。', en: 'Booting the engine.' },
      },
      {
        src: '/projects/kimpeanut-engine/terminal.png',
        alt: 'KimPeanut Engine terminal output',
        caption: { zh: '底层的命令行。', en: 'The command line underneath.' },
      },
    ],
    notes: [
      {
        zh: '模块化的渲染架构，RHI 与具体 API 解耦，可跑在 Vulkan 与 OpenGL 后端之上。',
        en: 'A modular rendering architecture with an API-neutral RHI over Vulkan and OpenGL backends.',
      },
      {
        zh: '编辑器把场景检视、资产浏览、依赖关系图、诊断与性能分析收进同一条工作流。',
        en: 'The editor brings scene inspection, asset browsing, dependency reference graphs, diagnostics, and profiling into the same working loop.',
      },
    ],
  },
  {
    id: 'ue-game',
    label: { zh: '虚幻引擎 / 动作角色扮演', en: 'unreal engine / action rpg' },
    name: '沃土重生 · RFG Demo',
    summary: {
      zh: '虚幻引擎动作角色扮演垂直切片：巨龙 BOSS 战、近战与远程战斗、炼金合成，以及骑乘探索。',
      en: 'An Unreal Engine action-RPG vertical slice: dragon boss battles, melee and ranged combat, alchemy crafting, and horseback exploration.',
    },
    cover: '/projects/ue-game/menu.jpg',
    route: '/projects/ue-game/',
    stack: ['Unreal Engine 5', 'Blueprint', 'UMG', 'Procedural Terrain'],
    gallery: [
      {
        src: '/projects/ue-game/menu.jpg',
        alt: '沃土重生 main menu',
        caption: { zh: '旅程开始的地方。', en: 'Where the journey starts.' },
      },
      {
        src: '/projects/ue-game/boss-dragon.jpg',
        alt: '沃土重生 dragon boss battle',
        caption: { zh: '巨龙醒来。', en: 'The dragon wakes.' },
      },
      {
        src: '/projects/ue-game/bow-combat.png',
        alt: 'Bow combat against a wraith',
        caption: { zh: '一箭离弦。', en: 'An arrow, loosed.' },
      },
      {
        src: '/projects/ue-game/melee-combat.png',
        alt: 'Melee combat with a staff',
        caption: { zh: '一种武器，一种节奏。', en: 'One weapon, one rhythm.' },
      },
      {
        src: '/projects/ue-game/sword-combat.png',
        alt: 'Enchanted sword strike',
        caption: { zh: '另一种武器，另一种节奏。', en: 'Another weapon, another rhythm.' },
      },
      {
        src: '/projects/ue-game/alchemy.jpg',
        alt: 'Alchemy crafting interface',
        caption: { zh: '研磨、搅拌、熬制。', en: 'Grind, stir, brew.' },
      },
      {
        src: '/projects/ue-game/swimming.jpg',
        alt: 'Swimming in an autumn river',
        caption: { zh: '水有自己的规则。', en: 'The water has its own rules.' },
      },
      {
        src: '/projects/ue-game/horse-riding.png',
        alt: 'Horseback riding',
        caption: { zh: '策马出发。', en: 'Ride out.' },
      },
      {
        src: '/projects/ue-game/terrain-plugin.png',
        alt: 'Procedural terrain editor plugin',
        caption: { zh: '地形，生成完毕。', en: 'Terrain, generated.' },
      },
    ],
    notes: [
      {
        zh: '一个可玩的虚幻引擎垂直切片：巨龙 BOSS 战、刀剑弓杖战斗、游泳与骑马，都在同一个风格化世界里跑通。',
        en: 'A playable Unreal Engine vertical slice: dragon boss encounter, sword / bow / staff combat, swimming, and horse-mounted travel in a stylized world.',
      },
      {
        zh: 'HUD、背包与炼金流程都由自定义 UMG 实现——研磨、加水、搅拌、加热，每一步都会改变结果。',
        en: 'Custom UMG systems drive the HUD, inventory, and an alchemy crafting flow where grinding, water, stirring, and heat combine into recipes.',
      },
      {
        zh: '配套的编辑器插件负责造世界：基于噪声的高度图、生物群系遮罩与样条道路，全部在编辑器内生成。',
        en: 'A companion editor plugin builds the world itself — noise-based heightmaps, biome masks, and spline roads generated directly in the editor.',
      },
    ],
  },
  {
    id: 'kimpeanut-vault',
    label: { zh: '桌面端 / 安全', en: 'desktop / security' },
    name: 'KimPeanut Vault',
    summary: {
      zh: '一个安静的桌面保险箱，让私人记录既安全、又触手可及。',
      en: 'A quiet desktop vault for keeping personal records protected and close at hand.',
    },
    cover: '/projects/kimpeanut-vault/vault-overview.png',
    route: '/projects/kimpeanut-vault/',
    stack: ['Desktop', 'Local-first', 'Encryption'],
    gallery: [
      {
        src: '/projects/kimpeanut-vault/vault-overview.png',
        alt: 'KimPeanut Vault records screen',
        caption: { zh: '以本地加密为核心的专注记录工作区。', en: 'A focused records workspace with local encryption at the center.' },
      },
      {
        src: '/projects/kimpeanut-vault/login.jpg',
        alt: 'KimPeanut Vault unlock screen',
        caption: { zh: '极简而有分量的解锁流程。', en: 'The vault opens with a minimal, intentional unlock flow.' },
      },
      {
        src: '/projects/kimpeanut-vault/sync.jpg',
        alt: 'KimPeanut Vault sync screen',
        caption: { zh: '同步状态就在记录旁边，一目了然。', en: 'Sync status stays legible and close to the records it protects.' },
      },
    ],
    notes: [
      {
        zh: '围绕一个简单的想法构建：私人保险箱应当安静、直接，且完全私密。',
        en: 'Designed around a simple idea: a personal vault should feel calm, direct, and private.',
      },
      {
        zh: '记录、搜索、备份与锁定始终可见，却不会把工作区变成一个仪表盘。',
        en: 'Records, search, backup, and lock controls stay visible without turning the workspace into a dashboard.',
      },
    ],
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
