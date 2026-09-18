import { fixed, type Tx } from '../lib/i18n';

/**
 * Interface copy in both languages.
 * Terminal / shell flavoured strings (prompts, `ls ~/skills`, `cd ..`, EOF) are
 * deliberately NOT translated — they stay in English everywhere.
 */
export const ui = {
  nav: {
    github: 'GitHub' as string,
    email: { zh: '邮箱', en: 'Email' } satisfies Tx,
  },
  hero: {
    kicker: { zh: '游戏开发者 // 0101', en: 'Game developer // 0101' } satisfies Tx,
  },
  skills: {
    sectionLabel: { zh: '系统档案 / 03', en: 'System profile / 03' } satisfies Tx,
    title: { zh: '工具箱。', en: 'The toolkit.' } satisfies Tx,
    intro: {
      zh: '构建世界时，我最常使用的语言、引擎与系统。',
      en: 'Languages, engines, and systems I reach for when building a world.',
    } satisfies Tx,
  },
  projects: {
    sectionLabel: { zh: '精选作品 / 02', en: 'Selected work / 02' } satisfies Tx,
    title: { zh: '项目。', en: 'Projects.' } satisfies Tx,
    intro: {
      zh: '小巧的系统、真实的界面，以及它们背后的那些瞬间。',
      en: 'Small systems, real interfaces, and the captured moments behind them.',
    } satisfies Tx,
    disc: { zh: '项目编号', en: 'PROJECT DISC' } satisfies Tx,
    spine: { zh: '原创', en: 'OWNED' } satisfies Tx,
    open: { zh: '查看项目', en: 'open case file' } satisfies Tx,
  },
  library: {
    sectionLabel: { zh: '参考书架 / 04', en: 'Reference shelf / 04' } satisfies Tx,
    title: { zh: '游戏库。', en: 'The library.' } satisfies Tx,
    intro: {
      zh: '我投入了大量时间的游戏——通关、玩透。这就是那个书架。',
      en: 'Games I’ve put serious hours into — played, finished. This is the shelf.',
    } satisfies Tx,
    // Terminal readout — stays English in every locale.
    hours: fixed('PLAYED · {n} HRS') satisfies Tx,
  },
  footer: {
    made: { zh: '用好奇心做成', en: 'Made with curiosity' } satisfies Tx,
  },
  projectPage: {
    back: { zh: '← 项目', en: '← projects' } satisfies Tx,
    source: { zh: '查看源码', en: 'view source' } satisfies Tx,
    archive: { zh: '项目档案', en: 'project archive' } satisfies Tx,
  },
  lang: {
    label: { zh: '切换语言', en: 'Switch language' } satisfies Tx,
    switchTo: { zh: 'EN', en: '中文' } satisfies Tx,
  },
} as const;
