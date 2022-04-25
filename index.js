import Books from './modules/class.js';
import * as selector from './modules/selectors.js';
import { addFunction } from './modules/addbook.js';
import { navAddNewFunction, navListFunction, navContactFunction } from './modules/desktopnav.js';
import { toggleFunction, removeFunction } from './modules/mobilenav.js';
import { DateTime } from './modules/luxon.js';

export const bookCollection = new Books;
bookCollection.displayBooks();

selector.addBook.addEventListener('click', addFunction);

// Website Navigation
selector.navList.addEventListener('click', navListFunction);

selector.navAddNew.addEventListener('click', navAddNewFunction);

selector.navContact.addEventListener('click', navContactFunction);

// dateTime
const getTime = () => {
    const date = DateTime.now();
    selector.dateTime.innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

setInterval(getTime, 1000);

// Mobile Navigation

selector.hamburgerMenu.addEventListener('click', toggleFunction);

selector.navLinks.forEach(removeFunction);