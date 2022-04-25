import { bookCollection } from '../index.js';
import * as selector from './selectors.js';
import { clear } from './clearmessage.js';

export const addFunction = (e) => {
  e.preventDefault();
    if (selector.titleInput.value && selector.authorInput.value) {
      bookCollection.addBook(selector.titleInput.value, selector.authorInput.value);
      selector.validationMessage.innerHTML = 'Your book has been added successfully';
      selector.validationMessage.classList.add('active');
      setTimeout(clear, 2000);
      selector.titleInput.value = '';
      selector.authorInput.value = '';
    }
}