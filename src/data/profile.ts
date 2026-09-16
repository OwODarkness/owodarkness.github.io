import type { Tx } from '../lib/i18n';

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  detail: Tx;
  features: Tx[];
  tags?: string[];
};

export const profile = {
  name: 'OwODarkness',
  email: 'owodarkness@163.com',
  githubUrl: 'https://github.com/owodarkness',
  /** Directory names are shell paths — intentionally left in English. */
  skills: [
    {
      label: 'languages/',
      skills: [
        {
          id: 'cpp',
          name: 'C++',
          detail: {
            zh: '我的主力语言——引擎系统、渲染与工具真正栖身的那一层。',
            en: 'My main language — the layer where engine systems, rendering, and tools actually live.',
          },
          features: [
            { zh: '现代 C++：智能指针、RAII、移动语义、模板', en: 'Modern C++17: smart pointers, RAII, move semantics, templates' },
            { zh: 'STL 容器，以及热路径上的自定义分配器', en: 'STL containers and custom allocation for hot paths' },
            { zh: '用多线程并行处理资产与模拟', en: 'Multithreading for parallel asset and simulation work' },
            { zh: '在 Windows 与 Linux 上构建、调试原生代码', en: 'Building and debugging native code on Windows and Linux' },
          ],
        },
        {
          id: 'lua',
          name: 'Lua',
          detail: {
            zh: '当游戏逻辑需要快速迭代时，我会用的脚本层。',
            en: 'The scripting layer I reach for when game logic needs fast iteration.',
          },
          features: [
            { zh: 'Lua 与 C++ 游戏对象之间的绑定', en: 'Bindings between Lua and C++ game objects' },
            { zh: '数据驱动的玩法配置，改完无需重新编译', en: 'Data-driven gameplay configs editable without recompiles' },
            { zh: '运行时占用极小，适合嵌入工具链', en: 'Small runtime footprint fits embedded tooling' },
          ],
        },
        {
          id: 'python',
          name: 'Python',
          detail: {
            zh: '自动化与研究实验——引擎之外所有事情的胶水。',
            en: 'Automation and research experiments — the glue for everything outside the engine.',
          },
          features: [
            { zh: '研究原型：3D 高斯泼溅实验代码', en: 'Research prototypes: 3D Gaussian Splatting experiment code' },
            { zh: '资产与构建自动化脚本', en: 'Asset and build automation scripts' },
            { zh: '离线数据管线与快速小工具', en: 'Offline data pipelines and quick tooling' },
          ],
        },
      ],
    },
    {
      label: 'engine-tools/',
      skills: [
        {
          id: 'unreal-engine',
          name: 'Unreal Engine',
          detail: {
            zh: '我构建玩家可见系统与编辑器工具的地方——是做完，不只是学过。',
            en: 'Where I build player-facing systems and editor tooling — shipped, not just studied.',
          },
          features: [
            { zh: '用 GAS（Gameplay Ability System）实现技能与效果', en: 'GAS (Gameplay Ability System) for abilities and effects' },
            { zh: '武器、合成与骑乘系统——端到端完成', en: 'Weapon, crafting and riding systems — completed end to end' },
            { zh: '编辑器插件与工具——做过地形生成插件', en: 'Editor plugins and tooling — built a terrain generator plugin' },
          ],
        },
        {
          id: 'cmake',
          name: 'CMake',
          detail: {
            zh: '让我的原生项目在跨平台时依然可移植、且保持清醒。',
            en: 'Keeps my native projects portable and sane across platforms.',
          },
          features: [
            { zh: 'Target、依赖管理与 find_package 工作流', en: 'Targets, dependencies and find_package workflows' },
            { zh: '用 Preset 保证 Windows / Linux 构建可复现', en: 'Presets for repeatable Windows / Linux builds' },
            { zh: '一份源码树同时产出引擎、工具与测试', en: 'One source tree building engine, tools and tests' },
          ],
        },
        {
          id: 'sqlite',
          name: 'SQLite',
          detail: {
            zh: '我默认的本地数据库，用于游戏数据与工具。',
            en: 'My default local database for game data and tools.',
          },
          features: [
            { zh: '哈希名映射，用于快速资产查找', en: 'Hash-name maps for fast asset lookup' },
            { zh: '怪物与道具信息以可查询的表存储', en: 'Monster and item info stored as queryable tables' },
            { zh: '在原型阶段取代手写的二进制格式', en: 'Replaces hand-rolled binary formats in prototypes' },
          ],
        },
      ],
    },
    {
      label: 'graphics/',
      skills: [
        {
          id: 'computer-graphics',
          name: 'Computer Graphics',
          detail: {
            zh: '支撑我引擎工作的那门学科——从数学一路到像素。',
            en: 'The discipline behind my engine work — from math to pixels.',
          },
          features: [
            { zh: '渲染管线：变换、光栅化、着色器', en: 'Rendering pipeline: transforms, rasterization, shaders' },
            { zh: '在 Vulkan 与 OpenGL 上实现的 RHI 抽象层', en: 'RHI abstraction implemented on Vulkan and OpenGL' },
            { zh: '相机、几何与光照数学', en: 'Camera, geometry and lighting math' },
          ],
        },
        {
          id: '3d-reconstruction',
          name: '3D Reconstruction',
          detail: {
            zh: '从真实拍摄中恢复三维结构——我的研究支线。',
            en: 'Recovering 3D structure from real captures — my research side quest.',
          },
          features: [
            { zh: '3D 高斯泼溅研究代码（EnvSample-Free-3DGS）', en: '3D Gaussian Splatting research code (EnvSample-Free-3DGS)' },
            { zh: '从真实场景得到点云与相机几何', en: 'Point clouds and camera geometry from real scenes' },
            { zh: '把医学影像体素转成高质量网格', en: 'Turning medical imaging voxels into high-quality meshes' },
          ],
          tags: ['NeRF', '3DGS'],
        },
      ],
    },
    {
      label: 'systems/',
      skills: [
        {
          id: 'linux',
          name: 'Linux',
          detail: {
            zh: '我做原生开发与系统实验的日常环境。',
            en: 'My daily environment for native development and systems experiments.',
          },
          features: [
            { zh: 'Shell 工作流与 gcc / clang 工具链', en: 'Shell workflows and gcc / clang toolchains' },
            { zh: '原生项目的构建与部署脚本', en: 'Build and deploy scripts for native projects' },
            { zh: '不戴辅助轮的底层实验', en: 'Low-level experimentation without the training wheels' },
          ],
        },
      ],
    },
    {
      label: 'ai-tools/',
      skills: [
        {
          id: 'codex',
          name: 'Codex',
          detail: {
            zh: 'AI 结对编程——加快探索速度，但不交出架构主导权。',
            en: 'AI pair programmer — speeds up exploration without giving up the architectural reins.',
          },
          features: [
            { zh: '新模块的原型与脚手架', en: 'Prototyping and scaffolding new modules' },
            { zh: '大范围重构与评审走查', en: 'Large-surface refactors and review passes' },
          ],
        },
        {
          id: 'claude-code',
          name: 'Claude Code',
          detail: {
            zh: '用智能体把真实代码库从头到尾走一遍。',
            en: 'Agentic coding for working through real codebases end to end.',
          },
          features: [
            { zh: '跨文件的功能实现与重构', en: 'Multi-file feature implementation and refactors' },
            { zh: '代码库导航与文档草稿', en: 'Codebase navigation and documentation drafts' },
          ],
        },
      ],
    },
  ] satisfies SkillGroup[],
} as const;
