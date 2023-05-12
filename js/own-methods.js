'use strict';

/* ============== Метод map() ============== */
Array.prototype.ownMap = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i += 1) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
console.log(planets);

const planetsInUpperCase = planets.ownMap(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.ownMap(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

/* ============== Метод filter() ============== */
// const ownFilter = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = ownFilter(values, value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = ownFilter(values, value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = ownFilter(values, value => value > 1000);
// console.log(bigValues); // []

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }

//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFind(colorPickerOptions, option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'white')); // undefined

/* ============== Метод findIndex() ============== */
// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }

//   return -1;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'blue')); // 2
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'pink')); // 3
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'white')); // -1

/* ============== Метод every() ============== */
// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);
//     if (result) {
//       continue;
//     }

//     return false;
//   }

//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = ownEvery(fruits, fruit => fruit.amount > 0); // false
// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);

//     if (result) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = ownSome(fruits, fruits => fruits.amount > 0); // true
// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
// const ownReduce = function (arr, callback, initialValue = 0) {
//   for (let i = 0; i < arr.length; i += 1) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }

//   return initialValue;
// };

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = ownReduce(
//   students,
//   (total, student) => {
//     return total + student.score;
//   },
//   0
// );

// const averageScore = totalScore / students.length;
// console.log(averageScore);
