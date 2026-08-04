const filters = [...document.querySelectorAll<HTMLButtonElement>('[data-filter]')];
const projects = [...document.querySelectorAll<HTMLElement>('[data-project-category]')];

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach((project) => {
      project.hidden = selected !== 'All work' && project.dataset.projectCategory !== selected;
    });
  });
});
