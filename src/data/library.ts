import type { Tx } from '../lib/i18n';

export type Game = {
  id: string;
  name: string;
  zh: string;
  hours: number;
  feel: Tx;
  lesson: Tx;
};

export const games: Game[] = [
  {
    id: 'baldurs-gate-3',
    name: 'Baldur’s Gate 3',
    zh: '博德之门3',
    hours: 319,
    feel: {
      zh: '真正的自由——几乎每场遭遇都有几条说得通的解法，世界会回应那些奇怪的选择，而不是假装没发生。',
      en: 'Real freedom — almost every encounter has several honest solutions, and the world reacts to the strange ones instead of ignoring them.',
    },
    lesson: {
      zh: '这份自由来自无数细节彼此咬合：对话标记、物理、AI 状态。所谓玩家能动性，其实就是细节的总和。',
      en: 'That freedom is built from countless small details agreeing with each other: dialogue flags, physics, AI states. Detail work is what player agency is made of.',
    },
  },
  {
    id: 'monster-hunter-world',
    name: 'Monster Hunter: World',
    zh: '怪物猎人：世界',
    hours: 117,
    feel: {
      zh: '每一次狩猎都是活的 BOSS 战——怪物之间会互相争斗，地形会参与战斗，而准备本身就是战斗的一部分。',
      en: 'Every hunt is a living boss fight — monsters clash with each other, terrain matters, and preparation is part of the combat.',
    },
    lesson: {
      zh: '「承诺感」让战斗变得沉甸甸：长动作与收招窗口，把每一次出手都变成一次决定。',
      en: 'Commitment makes combat feel heavy and real: long animations and recovery windows turn every hit into a decision.',
    },
  },
  {
    id: 'elden-ring',
    name: 'Elden Ring',
    zh: '艾尔登法环',
    hours: 216,
    feel: {
      zh: '一个信任玩家的世界——没有标记，没有清单，216 小时里我却从未真正迷路。',
      en: 'A world that trusts the player — no markers, no checklist, and somehow I never got lost in 216 hours.',
    },
    lesson: {
      zh: '好奇心比任何任务日志都更可靠：关卡设计可以引导玩家，却一句话都不必说。',
      en: 'Curiosity is a better navigation system than any quest log; level design can guide without ever saying “go here”.',
    },
  },
  {
    id: 'the-witcher-3',
    name: 'The Witcher 3',
    zh: '巫师3',
    hours: 134,
    feel: {
      zh: '支线任务有真正的道德重量——哪怕一份随机委托，收尾也是一个让人久久难平的选择。',
      en: 'Side quests with real moral weight — even a random contract ends in a choice that sits with you.',
    },
    lesson: {
      zh: '让开放世界显得「被写出来」而不是「被生成出来」的，正是任务写作。',
      en: 'Quest writing is what makes an open world feel authored instead of generated.',
    },
  },
  {
    id: 'black-myth-wukong',
    name: 'Black Myth: Wukong',
    zh: '黑神话：悟空',
    hours: 86,
    feel: {
      zh: '一场接着一场的 BOSS 战，每一章都是一次美术投递——像大片一样被呈现出来的西游记。',
      en: 'A boss-rush action game where every chapter is an art drop — Journey to the West rendered like a blockbuster.',
    },
    lesson: {
      zh: '聚焦的战斗循环、强硬的美术方向与文化自信，足以把一个初出茅庐的团队送得很远。',
      en: 'A focused combat loop, strong art direction and cultural confidence can carry a debut studio a very long way.',
    },
  },
  {
    id: 'kingdom-come-deliverance-2',
    name: 'Kingdom Come: Deliverance 2',
    zh: '天国拯救2',
    hours: 97,
    feel: {
      zh: '以模拟换来的沉浸：技能靠做来升级，NPC 各过各的日子，这个世界不欠你任何东西。',
      en: 'Simulation-first immersion — you level skills by doing them, NPCs keep their own routines, and the world owes you nothing.',
    },
    lesson: {
      zh: '不依赖玩家也持续运转的系统，能生成任何编剧都摆不出来的故事。',
      en: 'Systems that keep running without the player create stories no scriptwriter could place by hand.',
    },
  },
  {
    id: 'dont-starve',
    name: 'Don’t Starve Together',
    zh: '饥荒联机版',
    hours: 110,
    feel: {
      zh: '一个手绘的世界，安静地对你充满敌意——饥饿、黑夜与理智同时拉扯着你。',
      en: 'A hand-drawn world quietly hostile to you — hunger, night and sanity all pull at once.',
    },
    lesson: {
      zh: '互相咬合的生存系统能制造出比任何脚本惊吓都更好的涌现张力。',
      en: 'Interlocking survival systems generate emergent tension better than any scripted scare.',
    },
  },
  {
    id: 'stardew-valley',
    name: 'Stardew Valley',
    zh: '星露谷物语',
    hours: 161,
    feel: {
      zh: '史上最舒服的循环：种田、钓鱼、下矿、交友，周而复始，却从不让人腻。',
      en: 'The coziest loop ever built — farm, fish, mine, befriend, repeat, and somehow it never goes stale.',
    },
    lesson: {
      zh: '克制范围、守住一条一致的核心循环，胜过堆砌内容量——而且一个人也能做完。',
      en: 'Scope discipline and one consistent core loop beat raw content volume — and one person can ship it.',
    },
  },
  {
    id: 'red-dead-redemption-2',
    name: 'Red Dead Redemption 2',
    zh: '荒野大镖客2',
    hours: 194,
    feel: {
      zh: '一个密度足以让人相信有人居住的世界——无论你看不看，NPC 都在过自己的生活。',
      en: 'A world dense enough to feel inhabited — NPCs live their own lives whether you watch or not.',
    },
    lesson: {
      zh: '可信度是一种预算：把它花在动画与世界细节上，幻想自己就会成立。',
      en: 'Believability is a budget: spend it on animation and world detail and the fantasy sells itself.',
    },
  },
];
