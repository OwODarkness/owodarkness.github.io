export const mountLangSwitch = (onSwitch: () => void): void => {
  const button = document.querySelector<HTMLButtonElement>('#lang-switch');
  if (!button) return;
  button.addEventListener('click', onSwitch);
};
