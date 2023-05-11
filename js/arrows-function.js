/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */

//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = firstName => {
//   console.log(`Hello ${firstName}`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   console.log('Hello!');
// };

// greet();

//? arguments
// const sum = (...args) => {
//   console.log(args);
// };

// sum(1, 2, 3, 4, 5);

//? Неявне повернення
// const createProduct = product => ({ id: Date.now(), ...product });

// console.log(createProduct({ name: '🍎', price: 30, quantity: 3 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
const each = (array, callback) => {
  const newArr = [];

  for (const el of array) {
    newArr.push(callback(el));
  }

  return newArr;
};

// Було
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// Стало
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// Було
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// Стало
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// Було
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// Стало
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// Було
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// Стало
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// Було
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
// Стало
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
