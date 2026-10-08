/** Maps each home section to the shell path it should show in the header crumb. */
const SECTION_PATHS: Array<{ id: string; path: string }> = [
  { id: 'terminal-title', path: '~' },
  { id: 'projects', path: '~/projects' },
  { id: 'skills', path: '~/skills' },
  { id: 'library', path: '~/library' },
];

/** Highlights where the reader is: writes the current section path into the header crumb. */
export const mountSectionSpy = () => {
  const crumb = document.querySelector<HTMLElement>('#crumb-path');
  if (!crumb) return;

  const sections = SECTION_PATHS.map(({ id, path }) => {
    const section = document.getElementById(id);
    return section ? { section, path } : null;
  }).filter((entry): entry is { section: HTMLElement; path: string } => entry !== null);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const match = sections.find(({ section }) => section === entry.target);
        if (match) crumb.textContent = match.path;
      });
    },
    // Only the band across the middle of the viewport counts as "current".
    { rootMargin: '-45% 0px -45% 0px' },
  );

  sections.forEach(({ section }) => observer.observe(section));
};

/** Mirrors the horizontal rail scroll position so the overflow is visible at a glance. */
export const mountRailProgress = () => {
  const grid = document.querySelector<HTMLElement>('#projects-grid');
  const track = document.querySelector<HTMLElement>('#rail-track');
  if (!grid || !track) return;
  const thumb = track.querySelector<HTMLElement>('.rail-thumb');
  if (!thumb) return;

  const update = () => {
    const max = grid.scrollWidth - grid.clientWidth;
    // Nothing overflows (wide viewport, or few cards): the hint is noise, hide it.
    if (max <= 1) {
      track.hidden = true;
      return;
    }
    track.hidden = false;
    const visible = grid.clientWidth / grid.scrollWidth;
    const position = grid.scrollLeft / max;
    thumb.style.width = `${visible * 100}%`;
    thumb.style.left = `${position * (100 - visible * 100)}%`;
    // At the end of the rail there is nothing more to hint at — drop the fade.
    grid.parentElement?.classList.toggle('rail-end', position > 0.99);
  };

  grid.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
};
