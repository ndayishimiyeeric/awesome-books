import * as selector from './selectors.js';

export const navAddNewFunction = () => {
  selector.bookListSection.classList.remove('display-section');
  selector.addNewSection.classList.add('display-section');
  selector.contactSection.classList.remove('display-section');
}

export const navContactFunction = () => {
  selector.bookListSection.classList.remove('display-section');
  selector.addNewSection.classList.remove('display-section');
  selector.contactSection.classList.add('display-section');
}

export const navListFunction = () => {
  selector.bookListSection.classList.add('display-section');
  selector.addNewSection.classList.remove('display-section');
  selector.contactSection.classList.remove('display-section');
}