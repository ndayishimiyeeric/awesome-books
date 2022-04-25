const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');
const validationMessage = document.querySelector('#form-validation');


// Website Navigation
const navList = document.querySelector('#nav-list');
const navAddNew = document.querySelector('#nav-add-new');
const navContact = document.querySelector('#nav-contact');

const bookListSection = document.querySelector('.books-list');
const addNewSection = document.querySelector('.add-new-book');
const contactSection = document.querySelector('.contact-info');

// Show date and time
const dateTime = document.querySelector('#date-text');

// Mobile navbar
const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('#nav-links li');

export {titleInput, authorInput, addBook, validationMessage, navList, navAddNew, navContact, bookListSection, addNewSection, contactSection, dateTime, hamburgerMenu, navBar, navLinks};