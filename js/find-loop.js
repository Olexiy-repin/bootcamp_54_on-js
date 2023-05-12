/*
 *  Метод find()
 */

// масив.find((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Знайдіть перше непарне число
*/

// Повна версія
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNumber = numbers.find((el, idx, arr) => {
//   return el % 2 !== 0;
// });

// console.log('numbers: ', numbers);
// console.log('oddNumber: ', oddNumber);

// Скорочена версія
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNumber = numbers.find(el => el % 2 !== 0);

// console.log('numbers: ', numbers);
// console.log('oddNumber: ', oddNumber);

/*
? Знайдіть автомобіль за моделлю
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Повна версія
// const getCarByModel = (allCars, model) => {
//   const findedCarByModel = allCars.find((el, idx, arr) => {
//     return el.model.toLowerCase() === model.toLowerCase();
//   });

//   return findedCarByModel;
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// console.log(getCarByModel(cars, 'CX'));

// Скорочена версія
// const getCarByModel = (allCars, model) => {
//   return allCars.find(el => el.model.toLowerCase() === model.toLowerCase());
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// console.log(getCarByModel(cars, 'CX'));
