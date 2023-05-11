/*
 * Колбек-функції, функції вищого порядку
 */

// const greet = function (callback) {
//   const username = prompt('Ваше імʼя?');

//   callback(username);
// };

// const simpleGreet = function (firstName) {
//   console.log(`Hello ${firstName}`);
// };

// const prettyGreet = function (firstName) {
//   console.log(`Welcome ${firstName}! 🙋‍♂️`);
// };

// greet(simpleGreet);
// greet(prettyGreet);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.js-contact-form-email');

// const greet = function () {
//   console.log('Hi!');
// };

// userEmail.addEventListener('change', greet);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/
// const numbers = [1, 2, 3, 4, 5];
// const anotherNumbers = [20, 30, 40, 50];

// const each = function (array, callback) {
//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// console.log(numbers);
// console.log(each(numbers, multi));
// console.log(each(numbers, add));
// console.log(each(anotherNumbers, multi));

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
*/

// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   const productKeys = Object.keys(product);

//   for (const key of productKeys) {
//     console.log(`${key}: ${product[key]}`);
//   }
// };

// const logTotalPrice = function (product) {
//   console.log(`total price: ${product.price * product.quantity}`);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
