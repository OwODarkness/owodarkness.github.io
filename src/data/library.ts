export type Game = {
  id: string;
  name: string;
  zh: string;
  hours: number;
  feel: string;
  lesson: string;
};

export const games: Game[] = [
  {
    id: 'baldurs-gate-3',
    name: 'Baldur’s Gate 3',
    zh: '博德之门3',
    hours: 319,
    feel: 'Real freedom — almost every encounter has several honest solutions, and the world reacts to the strange ones instead of ignoring them.',
    lesson: 'That freedom is built from countless small details agreeing with each other: dialogue flags, physics, AI states. Detail work is what player agency is made of.',
  },
  {
    id: 'monster-hunter-world',
    name: 'Monster Hunter: World',
    zh: '怪物猎人：世界',
    hours: 117,
    feel: 'Every hunt is a living boss fight — monsters clash with each other, terrain matters, and preparation is part of the combat.',
    lesson: 'Commitment makes combat feel heavy and real: long animations and recovery windows turn every hit into a decision.',
  },
  {
    id: 'elden-ring',
    name: 'Elden Ring',
    zh: '艾尔登法环',
    hours: 216,
    feel: 'A world that trusts the player — no markers, no checklist, and somehow I never got lost in 216 hours.',
    lesson: 'Curiosity is a better navigation system than any quest log; level design can guide without ever saying “go here”.',
  },
  {
    id: 'the-witcher-3',
    name: 'The Witcher 3',
    zh: '巫师3',
    hours: 134,
    feel: 'Side quests with real moral weight — even a random contract ends in a choice that sits with you.',
    lesson: 'Quest writing is what makes an open world feel authored instead of generated.',
  },
  {
    id: 'black-myth-wukong',
    name: 'Black Myth: Wukong',
    zh: '黑神话：悟空',
    hours: 86,
    feel: 'A boss-rush action game where every chapter is an art drop — Journey to the West rendered like a blockbuster.',
    lesson: 'A focused combat loop, strong art direction and cultural confidence can carry a debut studio a very long way.',
  },
  {
    id: 'kingdom-come-deliverance-2',
    name: 'Kingdom Come: Deliverance 2',
    zh: '天国拯救2',
    hours: 97,
    feel: 'Simulation-first immersion — you level skills by doing them, NPCs keep their own routines, and the world owes you nothing.',
    lesson: 'Systems that keep running without the player create stories no scriptwriter could place by hand.',
  },
  {
    id: 'dont-starve',
    name: 'Don’t Starve Together',
    zh: '饥荒联机版',
    hours: 110,
    feel: 'A hand-drawn world quietly hostile to you — hunger, night and sanity all pull at once.',
    lesson: 'Interlocking survival systems generate emergent tension better than any scripted scare.',
  },
  {
    id: 'stardew-valley',
    name: 'Stardew Valley',
    zh: '星露谷物语',
    hours: 161,
    feel: 'The coziest loop ever built — farm, fish, mine, befriend, repeat, and somehow it never goes stale.',
    lesson: 'Scope discipline and one consistent core loop beat raw content volume — and one person can ship it.',
  },
  {
    id: 'red-dead-redemption-2',
    name: 'Red Dead Redemption 2',
    zh: '荒野大镖客2',
    hours: 194,
    feel: 'A world dense enough to feel inhabited — NPCs live their own lives whether you watch or not.',
    lesson: 'Believability is a budget: spend it on animation and world detail and the fantasy sells itself.',
  },
];
