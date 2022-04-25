import * as selector from './selectors.js';

export const toggleFunction = () => {
  selector.hamburgerMenu.classList.toggle('active');
  selector.navBar.classList.toggle('active');
}

export const removeFunction = (link) => {
  link.addEventListener('click', () => {
    selector.hamburgerMenu.classList.remove('active');
    selector.navBar.classList.remove('active');
  });
}