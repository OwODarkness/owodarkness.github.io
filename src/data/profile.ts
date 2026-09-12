export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  detail: string;
  features: string[];
  tags?: string[];
};

export type Project = {
  id: string;
  name: string;
  path: string;
  detail: string;
  tech: string[];
  url: string;
};

export const profile = {
  name: 'OwODarkness',
  email: 'owodarkness@163.com',
  githubUrl: 'https://github.com/owodarkness',
  projects: [
    {
      id: 'kimpeanut-engine',
      name: 'KimPeanut Engine',
      path: 'kimpeanut-engine/',
      detail: 'Experimental 3D game engine written in C++17 — an API-neutral RHI running on Vulkan and OpenGL backends, with a modern rendering architecture and a modular asset pipeline.',
      tech: ['C++17', 'Vulkan', 'OpenGL', 'CMake'],
      url: 'https://github.com/OwODarkness/KimPeanutEngine',
    },
    {
      id: 'fertile-ground',
      name: 'Return of the Fertile Ground',
      path: 'fertile-ground/',
      detail: 'Third-person, low-poly style game demo built with Unreal Engine — world building and gameplay systems implemented in C++.',
      tech: ['Unreal Engine', 'C++', 'Game demo'],
      url: 'https://github.com/OwODarkness/Return-of-The-Fertile-Ground',
    },
    {
      id: 'pangolin',
      name: 'PangolinProject',
      path: 'pangolin/',
      detail: 'Terrain generator plugin for Unreal Engine — procedural landscapes exported as external meshes or native actors inside the editor.',
      tech: ['Unreal Engine', 'C++', 'Procedural tools'],
      url: 'https://github.com/OwODarkness/PangolinProject',
    },
    {
      id: 'envsample-3dgs',
      name: 'EnvSample-Free-3DGS',
      path: 'envsample-3dgs/',
      detail: 'Official code release for EnvSample-Free-3DGS — environment sampling experiments built on 3D Gaussian Splatting.',
      tech: ['Python', '3DGS', '3D reconstruction'],
      url: 'https://github.com/OwODarkness/EnvSample_Free_3DGS',
    },
    {
      id: 'kimpeanut-llm',
      name: 'KimPeanut LLM',
      path: 'kimpeanut-llm/',
      detail: 'Lightweight, modular bridge for local LLM inference — a clean, reusable C++ API layer over llama.cpp without heavy dependencies.',
      tech: ['C++', 'llama.cpp', 'CMake'],
      url: 'https://github.com/OwODarkness/KimPeanutLLM',
    },
    {
      id: 'this-site',
      name: 'This website',
      path: 'this-website/',
      detail: 'The terminal you are reading — modular TypeScript on Vite, no framework, no runtime dependencies.',
      tech: ['TypeScript', 'Vite'],
      url: 'https://github.com/OwODarkness/owodarkness.github.io',
    },
  ] satisfies Project[],
  skills: [
    {
      label: 'languages/',
      skills: [
        {
          id: 'cpp',
          name: 'C++',
          detail: 'My main language — the layer where engine systems, rendering, and tools actually live.',
          features: [
            'Modern C++17: smart pointers, RAII, move semantics, templates',
            'STL containers and custom allocation for hot paths',
            'Multithreading for parallel asset and simulation work',
            'Building and debugging native code on Windows and Linux',
          ],
        },
        {
          id: 'lua',
          name: 'Lua',
          detail: 'The scripting layer I reach for when game logic needs fast iteration.',
          features: [
            'Bindings between Lua and C++ game objects',
            'Data-driven gameplay configs editable without recompiles',
            'Small runtime footprint fits embedded tooling',
          ],
        },
        {
          id: 'python',
          name: 'Python',
          detail: 'Automation and research experiments — the glue for everything outside the engine.',
          features: [
            'Research prototypes: 3D Gaussian Splatting experiment code',
            'Asset and build automation scripts',
            'Offline data pipelines and quick tooling',
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
          detail: 'Where I build player-facing systems and editor tooling — shipped, not just studied.',
          features: [
            'GAS (Gameplay Ability System) for abilities and effects',
            'Weapon, crafting and riding systems — completed end to end',
            'Editor plugins and tooling — built a terrain generator plugin',
          ],
        },
        {
          id: 'cmake',
          name: 'CMake',
          detail: 'Keeps my native projects portable and sane across platforms.',
          features: [
            'Targets, dependencies and find_package workflows',
            'Presets for repeatable Windows / Linux builds',
            'One source tree building engine, tools and tests',
          ],
        },
        {
          id: 'sqlite',
          name: 'SQLite',
          detail: 'My default local database for game data and tools.',
          features: [
            'Hash-name maps for fast asset lookup',
            'Monster and item info stored as queryable tables',
            'Replaces hand-rolled binary formats in prototypes',
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
          detail: 'The discipline behind my engine work — from math to pixels.',
          features: [
            'Rendering pipeline: transforms, rasterization, shaders',
            'RHI abstraction implemented on Vulkan and OpenGL',
            'Camera, geometry and lighting math',
          ],
        },
        {
          id: '3d-reconstruction',
          name: '3D Reconstruction',
          detail: 'Recovering 3D structure from real captures — my research side quest.',
          features: [
            '3D Gaussian Splatting research code (EnvSample-Free-3DGS)',
            'Point clouds and camera geometry from real scenes',
            'Turning medical imaging voxels into high-quality meshes',
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
          detail: 'My daily environment for native development and systems experiments.',
          features: [
            'Shell workflows and gcc / clang toolchains',
            'Build and deploy scripts for native projects',
            'Low-level experimentation without the training wheels',
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
          detail: 'AI pair programmer — speeds up exploration without giving up the architectural reins.',
          features: [
            'Prototyping and scaffolding new modules',
            'Large-surface refactors and review passes',
          ],
        },
        {
          id: 'claude-code',
          name: 'Claude Code',
          detail: 'Agentic coding for working through real codebases end to end.',
          features: [
            'Multi-file feature implementation and refactors',
            'Codebase navigation and documentation drafts',
          ],
        },
      ],
    },
  ] satisfies SkillGroup[],
} as const;
