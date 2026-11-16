const yearElements = document.querySelectorAll<HTMLElement>('[data-current-year]');
const currentYear = String(new Date().getFullYear());

for (const element of yearElements) {
  element.textContent = currentYear;
}
