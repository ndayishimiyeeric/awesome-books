import bookCollection from '../index.js';
import {titleInput, authorInput, validationMessage} from './selectors.js';
import clear from './clearmessage.js';

const addFunction = (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    bookCollection.addBook(titleInput.value, authorInput.value);
    validationMessage.innerHTML = 'Your book has been added successfully';
    validationMessage.classList.add('active');
    setTimeout(clear, 2000);
    titleInput.value = '';
    authorInput.value = '';
  }
};

export default { addFunction };