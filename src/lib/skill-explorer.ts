import { profile, type Skill } from '../data/profile';

const requiredElement = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing skill explorer element: ${selector}`);
  return element;
};

const entries = profile.skills.flatMap((group) => group.skills.map((skill) => ({ ...skill, category: group.label })));

export const mountSkillExplorer = () => {
  const overview = requiredElement<HTMLElement>('#skill-overview');
  const detail = requiredElement<HTMLElement>('#skill-detail');
  const back = requiredElement<HTMLButtonElement>('#skill-back');
  const category = requiredElement<HTMLElement>('#detail-category');
  const command = requiredElement<HTMLElement>('#detail-command');
  const description = requiredElement<HTMLElement>('#detail-description');
  const topics = requiredElement<HTMLParagraphElement>('#detail-topics');

  const showOverview = () => {
    detail.hidden = true;
    overview.hidden = false;
  };

  const showDetail = (skill: Skill & { category: string }) => {
    category.textContent = skill.category;
    command.textContent = `cat ~/skills/${skill.name.toLowerCase().replaceAll(' ', '-')}`;
    description.textContent = skill.detail;
    topics.textContent = `tags: ${skill.topics.join(', ')}`;
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
