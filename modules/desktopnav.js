import { bookListSection, addNewSection, contactSection } from './selectors.js';

export const navAddNewFunction = () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.add('display-section');
  contactSection.classList.remove('display-section');
};

export const navContactFunction = () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.add('display-section');
};

export const navListFunction = () => {
  bookListSection.classList.add('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.remove('display-section');
};