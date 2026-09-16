import { profile, type Skill } from '../data/profile';
import { tx, type Locale } from './i18n';

const requiredElement = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing skill explorer element: ${selector}`);
  return element;
};

const entries = profile.skills.flatMap((group) => group.skills.map((skill) => ({ ...skill, category: group.label })));

export const mountSkillExplorer = (locale: Locale) => {
  const overview = requiredElement<HTMLElement>('#skill-overview');
  const detail = requiredElement<HTMLElement>('#skill-detail');
  const back = requiredElement<HTMLButtonElement>('#skill-back');
  const category = requiredElement<HTMLElement>('#detail-category');
  const command = requiredElement<HTMLElement>('#detail-command');
  const description = requiredElement<HTMLElement>('#detail-description');
  const features = requiredElement<HTMLUListElement>('#detail-features');
  const tags = requiredElement<HTMLElement>('#detail-tags');

  const showOverview = () => {
    detail.hidden = true;
    overview.hidden = false;
  };

  const showDetail = (skill: Skill & { category: string }) => {
    category.textContent = skill.category;
    command.textContent = `cat ~/skills/${skill.name.toLowerCase().replaceAll(' ', '-')}`;
    description.textContent = tx(skill.detail, locale);
    features.replaceChildren(...skill.features.map((feature) => {
      const item = document.createElement('li');
      item.textContent = tx(feature, locale);
      return item;
    }));
    tags.replaceChildren(...(skill.tags ?? []).map((tag) => {
      const chip = document.createElement('span');
      chip.textContent = tag;
      return chip;
    }));
    tags.hidden = (skill.tags ?? []).length === 0;
    overview.hidden = true;
    detail.hidden = false;
  };

  document.querySelectorAll<HTMLButtonElement>('.skill-button').forEach((button) => {
    button.addEventListener('click', () => {
      const skill = entries.find((entry) => entry.id === button.dataset.skillId);
      if (skill) showDetail(skill);
    });
  });

  back.addEventListener('click', showOverview);
};
