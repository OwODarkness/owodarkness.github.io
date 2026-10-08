import { fixed, type Tx } from '../lib/i18n';

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
  /** A dedicated deep-dive block rendered below the captures. */
  showcase?: {
    command: string;
    label: Tx;
    title: Tx;
    images: Array<{ src: string; alt: string; caption: Tx }>;
  };
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
        caption: { zh: '主编辑器界面', en: 'Scene editor' },
      },
      {
        src: '/projects/kimpeanut-engine/asset-browser.png',
        alt: 'KimPeanut Engine asset browser',
        caption: { zh: '资产浏览器', en: 'Asset browser' },
      },
      {
        src: '/projects/kimpeanut-engine/asset-reference.png',
        alt: 'KimPeanut Engine asset reference viewer',
        caption: { zh: '资产依赖查看器', en: 'Asset reference viewer' },
      },
      {
        src: '/projects/kimpeanut-engine/live2d.png',
        alt: 'KimPeanut Engine Live2D viewer',
        caption: { zh: 'Live2D 查看器', en: 'Live2D viewer' },
        tall: true,
      },
      {
        src: '/projects/kimpeanut-engine/loading.png',
        alt: 'KimPeanut Engine loading screen',
        caption: { zh: '启动画面', en: 'Loading screen' },
      },
      {
        src: '/projects/kimpeanut-engine/terrain.png',
        alt: 'KimPeanut Engine procedural terrain generation with layered noise',
        caption: { zh: '地形生成器', en: 'Terrain generator' },
      },
      {
        src: '/projects/kimpeanut-engine/audio-player.png',
        alt: 'KimPeanut Engine built-in audio player with queue and spectrum',
        caption: { zh: '音频播放器', en: 'Audio player' },
      },
      {
        src: '/projects/kimpeanut-engine/tts.png',
        alt: 'KimPeanut Engine TTS dialog voicing tool',
        caption: { zh: '语音合成工具', en: 'TTS tool' },
      },
      {
        src: '/projects/kimpeanut-engine/terminal.png',
        alt: 'KimPeanut Engine terminal output',
        caption: { zh: '命令行输出', en: 'Terminal output' },
      },
    ],
    notes: [
      {
        zh: 'RHI 把 Vulkan 和 OpenGL 压在底层，上层代码不知道自己跑在哪个后端上。',
        en: 'The RHI keeps Vulkan and OpenGL underneath — code above it never knows which backend it is running on.',
      },
      {
        zh: '编辑器是自己天天在用的那个工具：改场景、翻资产、查依赖、看性能，都在同一个窗口里，不用四五个程序切来切去。',
        en: 'The editor is the tool I actually work in: scene, assets, dependency graph, profiling — one window instead of four.',
      },
      {
        zh: '音频也自己攒了一套：能排队、能看频谱的播放器，外加一个给对话批量配音的 TTS 工具。',
        en: 'Audio got the same treatment: a player with a queue and a spectrum view, plus a TTS tool that voices dialog lines in batch.',
      },
    ],
    showcase: {
      command: 'cat ./gi/README',
      label: { zh: '渲染 / 全局光照', en: 'rendering / global illumination' },
      title: { zh: '全局光照。', en: 'Global illumination.' },
      images: [
        {
          src: '/projects/kimpeanut-engine/sponza.png',
          alt: 'KimPeanut Engine global illumination render of the Sponza atrium',
          caption: fixed('Sponza'),
        },
        {
          src: '/projects/kimpeanut-engine/cornell-box.png',
          alt: 'KimPeanut Engine Cornell box light bounces test',
          caption: fixed('Cornell Box'),
        },
      ],
    },
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
        caption: { zh: '主菜单', en: 'Main menu' },
      },
      {
        src: '/projects/ue-game/boss-dragon.jpg',
        alt: '沃土重生 dragon boss battle',
        caption: { zh: 'BOSS 战', en: 'Boss fight' },
      },
      {
        src: '/projects/ue-game/bow-combat.png',
        alt: 'Bow combat against a wraith',
        caption: { zh: '弓箭射击', en: 'Arrow shot' },
      },
      {
        src: '/projects/ue-game/melee-combat.png',
        alt: 'Melee combat with a staff',
        caption: { zh: '多武器攻击 · 杖', en: 'Multi-weapon attack: staff' },
      },
      {
        src: '/projects/ue-game/sword-combat.png',
        alt: 'Enchanted sword strike',
        caption: { zh: '多武器攻击 · 剑', en: 'Multi-weapon attack: sword' },
      },
      {
        src: '/projects/ue-game/alchemy.jpg',
        alt: 'Alchemy crafting interface',
        caption: { zh: '炼金系统', en: 'Alchemy system' },
      },
      {
        src: '/projects/ue-game/swimming.jpg',
        alt: 'Swimming in an autumn river',
        caption: { zh: '游泳系统', en: 'Swimming' },
      },
      {
        src: '/projects/ue-game/horse-riding.png',
        alt: 'Horseback riding',
        caption: { zh: '骑乘系统', en: 'Ride system' },
      },
      {
        src: '/projects/ue-game/terrain-plugin.png',
        alt: 'Procedural terrain editor plugin',
        caption: { zh: '地形生成器', en: 'Terrain generator' },
      },
    ],
    notes: [
      {
        zh: '一个能玩下来的切片：打龙、换武器、下水、骑马，都在同一个世界里。',
        en: 'A slice you can play through: boss fight, weapon swaps, swimming, riding — one world.',
      },
      {
        zh: 'HUD、背包、炼金都是自己用 UMG 搭的：研磨、加水、搅拌、加热，顺序不同，出来的东西也不一样。',
        en: 'HUD, inventory and alchemy are custom UMG: grind, add water, stir, heat — the order changes what you get.',
      },
      {
        zh: '地形靠编辑器插件生成：噪声高度图配生物群系遮罩，路是样条拉出来的。',
        en: 'Terrain comes from an editor plugin: noise heightmaps with biome masks, roads pulled out as splines.',
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
        caption: { zh: '记录列表', en: 'Records' },
      },
      {
        src: '/projects/kimpeanut-vault/login.jpg',
        alt: 'KimPeanut Vault unlock screen',
        caption: { zh: '解锁界面', en: 'Unlock screen' },
      },
      {
        src: '/projects/kimpeanut-vault/sync.jpg',
        alt: 'KimPeanut Vault sync screen',
        caption: { zh: '同步状态', en: 'Sync status' },
      },
    ],
    notes: [
      {
        zh: '想要的东西很简单：一个放私人记录的地方，不联网，不花哨。',
        en: 'The ask was simple: somewhere to keep private records. Offline, no fuss.',
      },
      {
        zh: '搜索、备份、锁上——都在手边，但不至于摆成一个仪表盘。',
        en: 'Search, backup, lock — all within reach, without turning into a dashboard.',
      },
    ],
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
