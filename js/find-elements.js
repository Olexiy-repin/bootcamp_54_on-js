//* Об'єкти window і document

// console.log(window);

// console.log(document);

//* Дідівські методи пошуку елементів (getElementBy...)

// const listItemsEl = document.getElementsByTagName('li');

// console.dir(listItemsEl);

//* Сучасні методи пошуку елементів (querySelector, querySelectorAll)

// const titleEl = document.querySelector('.js-main-title');

// console.log(titleEl);

// const listItemsEl = document.querySelectorAll('.js-list-item');

// console.log(listItemsEl);

//* Навігації по DOM дереву
const listEl = document.querySelector('.js-list');

console.log(listEl.parentNode);
