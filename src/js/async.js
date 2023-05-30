/*
 * Синхронний vs Асинхронний JS
 */

//? window.setTimeout
// console.log('First');

// setTimeout(function () {
//   console.log('SetTimeout 3000ms');
// }, 3000);

// setTimeout(function () {
//   console.log('SetTimeout 1000ms');
// }, 1000);

// console.log('Second');

// console.log('Third');

//? window.setInterval
// console.log('First');

// setInterval(() => {
//   console.log('Hello!');
// }, 1000);

// console.log('Second');

// console.log('Third');

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

//? Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

//? Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
// const timeoutId = setTimeout(() => {
//   console.log('setTimeout!');
// }, 1000);

// console.log(timeoutId);

// clearTimeout(timeoutId);

// const intervalId = setInterval(() => {
//   console.log('setInterval');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);
