const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const header = document.querySelector<HTMLElement>('[data-header]');

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  header?.toggleAttribute('data-menu-open', !isOpen);
});

document.querySelectorAll<HTMLAnchorElement>('#primary-navigation a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    header?.removeAttribute('data-menu-open');
  });
});
