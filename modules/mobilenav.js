import {hamburgerMenu, navBar} from './selectors.js';

export const toggleFunction = () => {
  hamburgerMenu.classList.toggle('active');
  navBar.classList.toggle('active');
};

export const removeFunction = (link) => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navBar.classList.remove('active');
  });
};