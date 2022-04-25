import Books from './modules/class.js';
import { addBook, navList, navContact, navAddNew, hamburgerMenu, navLinks, dateTime, validationMessage, titleInput, authorInput } from './modules/selectors.js';
import clear from './modules/clearmessage.js';
import { navAddNewFunction, navListFunction, navContactFunction } from './modules/desktopnav.js';
import { toggleFunction, removeFunction } from './modules/mobilenav.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = new Books();
bookCollection.displayBooks();

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    bookCollection.addBook(titleInput.value, authorInput.value);
    validationMessage.innerHTML = 'Your book has been added successfully';
    validationMessage.classList.add('active');
    setTimeout(clear, 2000);
    titleInput.value = '';
    authorInput.value = '';
  }
});

// Website Navigation
navList.addEventListener('click', navListFunction);

navAddNew.addEventListener('click', navAddNewFunction);

navContact.addEventListener('click', navContactFunction);

// dateTime
const getTime = () => {
  const date = DateTime.now();
  dateTime.innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(getTime, 1000);

// Mobile Navigation

hamburgerMenu.addEventListener('click', toggleFunction);

navLinks.forEach(removeFunction);

export default { bookCollection };