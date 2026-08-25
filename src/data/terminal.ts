export const terminalHelp = 'Try: whoami · where am I? · look · abilities · roll d20 · status · clear';

export const terminalResponses: Record<string, string> = {
  whoami: 'OwODarkness. Game developer, world-builder, and collector of strange systems.',
  whereami: 'You are in a small corner of the internet: a personal website, currently orbiting a living-world prototype.',
  look: 'A dark room. A warm terminal glow. A world waiting for rules. Somewhere, an entity has just noticed you.',
  abilities: 'Passive: curiosity.\nActive: simulation design, systems thinking, and turning 0101 into a place worth exploring.',
  status: 'HP 100/100 · XP 0101 · ALIGNMENT: CHAOTIC CREATIVE · QUEST: MAKE WORLDS FEEL ALIVE',
};

export const commandAliases: Record<string, string> = {
  'where am i': 'whereami',
  'who are you': 'whoami',
  'what can you do': 'abilities',
};
