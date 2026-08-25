export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type Skill = {
  id: string;
  name: string;
  detail: string;
  topics: string[];
};

export const profile = {
  name: 'OwODarkness',
  description: 'Ask the terminal. It knows the tools, systems, and strange worlds I’m working with.',
  githubUrl: 'https://github.com/owodarkness',
  skills: [
    {
      label: 'languages/',
      skills: [
        { id: 'cpp', name: 'C++', detail: 'Performance-focused language work for engine systems, graphics code, and tools.', topics: ['systems', 'performance', 'graphics'] },
        { id: 'lua', name: 'Lua', detail: 'A lightweight scripting language for expressive game logic and fast iteration.', topics: ['scripting', 'gameplay', 'iteration'] },
        { id: 'python', name: 'Python', detail: 'A practical tool for research prototypes, automation, and data workflows.', topics: ['automation', 'research', 'tooling'] },
      ],
    },
    {
      label: 'engine-tools/',
      skills: [
        { id: 'unreal-engine', name: 'Unreal Engine', detail: 'A production-grade engine for building interactive worlds and game systems.', topics: ['engine', 'gameplay', 'world building'] },
        { id: 'cmake', name: 'CMake', detail: 'Build configuration for keeping native codebases portable and maintainable.', topics: ['builds', 'native code', 'tooling'] },
        { id: 'sqlite', name: 'SQLite', detail: 'A compact embedded database for local tools, prototypes, and structured data.', topics: ['data', 'local-first', 'tools'] },
      ],
    },
    {
      label: 'graphics/',
      skills: [
        { id: 'computer-graphics', name: 'Computer Graphics', detail: 'Rendering, geometry, and visual systems that make digital worlds believable.', topics: ['rendering', 'geometry', 'visuals'] },
        { id: '3d-reconstruction', name: '3D Reconstruction', detail: 'Recovering useful 3D structure from visual observations and real-world data.', topics: ['vision', 'geometry', 'reconstruction'] },
      ],
    },
    { label: 'systems/', skills: [{ id: 'linux', name: 'Linux', detail: 'A flexible environment for development, tooling, and systems experimentation.', topics: ['shell', 'development', 'systems'] }] },
    { label: 'ai-tools/', skills: [{ id: 'codex', name: 'Codex', detail: 'An AI coding partner for exploring, implementing, and refining software ideas.', topics: ['coding', 'iteration', 'agents'] }, { id: 'claude-code', name: 'Claude Code', detail: 'An AI-assisted development tool for working through codebases and engineering tasks.', topics: ['coding', 'reasoning', 'tools'] }] },
  ] satisfies SkillGroup[],
} as const;
