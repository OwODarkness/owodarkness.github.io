import { games, type Game } from '../data/library';
import { formatHours } from './format';
import { tx, type Locale } from './i18n';

const requiredElement = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing library explorer element: ${selector}`);
  return element;
};

export const mountLibraryExplorer = (locale: Locale) => {
  const overview = requiredElement<HTMLElement>('#library-overview');
  const detail = requiredElement<HTMLElement>('#library-detail');
  const back = requiredElement<HTMLButtonElement>('#library-back');
  const command = requiredElement<HTMLElement>('#game-command');
  const name = requiredElement<HTMLElement>('#game-name');
  const hours = requiredElement<HTMLElement>('#game-hours');
  const feel = requiredElement<HTMLElement>('#game-feel');
  const lesson = requiredElement<HTMLElement>('#game-lesson');

  const showOverview = () => {
    detail.hidden = true;
    overview.hidden = false;
  };

  const showDetail = (game: Game) => {
    command.textContent = `cat ~/library/${game.id}/notes`;
    // Game titles deliberately stay mixed: original English title beside the Chinese one.
    name.textContent = `${game.name} · ${game.zh}`;
    hours.textContent = formatHours(game.hours, locale);
    feel.textContent = tx(game.feel, locale);
    lesson.textContent = tx(game.lesson, locale);
    overview.hidden = true;
    detail.hidden = false;
  };

  document.querySelectorAll<HTMLButtonElement>('.library-item').forEach((button) => {
    button.addEventListener('click', () => {
      const game = games.find((entry) => entry.id === button.dataset.gameId);
      if (game) showDetail(game);
    });
  });

  back.addEventListener('click', showOverview);
};
