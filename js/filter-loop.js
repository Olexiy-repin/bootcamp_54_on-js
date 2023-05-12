/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/

// Повна версія
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((el, idx, arr) => {
//   return el % 2 === 0;
// });

// console.log('numbers: ', numbers);
// console.log('evenNumbers: ', evenNumbers);

// Скорочена версія
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(el => el % 2 === 0);

// console.log('numbers: ', numbers);
// console.log('evenNumbers: ', evenNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише позитивні числа:
*/

// Повна версія
// const numbers = [-2, 5, 1, -5, -1, 1, 0, 3, 4, -1];
// const positiveNumbers = numbers.filter((el, idx, arr) => {
//   return el >= 0;
// });

// console.log('numbers: ', numbers);
// console.log('positiveNumbers: ', positiveNumbers);

// Скорочена версія
// const numbers = [-2, 5, 1, -5, -1, 1, 0, 3, 4, -1];
// const positiveNumbers = numbers.filter(el => el >= 0);

// console.log('numbers: ', numbers);
// console.log('positiveNumbers: ', positiveNumbers);

/*
? Відфільтруйте масив heroes за властивістю об'єкта franchise.
*/

// Повна версія
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const marvelHeroes = heroes.filter((el, idx, arr) => {
//   return el.franchise.toLowerCase() === 'Marvel'.toLowerCase();
// });
// const dcHeroes = heroes.filter((el, idx, arr) => {
//   return el.franchise.toLowerCase() === 'DC'.toLowerCase();
// });

// console.table(heroes);
// console.table(marvelHeroes);
// console.table(dcHeroes);

// Скорочена версія
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const marvelHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'Marvel'.toLowerCase());
// const dcHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'DC'.toLowerCase());

// console.table(heroes);
// console.table(marvelHeroes);
// console.table(dcHeroes);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
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
// const filterByPrice = (allCars, threshold) => {
//   const filteredCars = allCars.filter((el, idx, arr) => {
//     return el.price < threshold;
//   });

//   return filteredCars;
// };

// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 30000));

// Скорочена версія
// const filterByPrice = (allCars, threshold) => allCars.filter(el => el.price < threshold);

// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 30000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

// Повна версія
// const getCarsWithDiscount = allCars => {
//   const carsWithDiscount = allCars.filter((el, idx, arr) => {
//     return el.onSale;
//   });

//   return carsWithDiscount;
// };

// console.table(getCarsWithDiscount(cars));

// Скорочена версія
// const getCarsWithDiscount = allCars => allCars.filter(el => el.onSale);

// console.table(getCarsWithDiscount(cars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/

// Повна версія
// const getCarsWithType = (allCars, type) => {
//   const carsWithType = allCars.filter((el, idx, arr) => {
//     return el.type.toLowerCase() === type.toLowerCase();
//   });

//   return carsWithType;
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// Скорочена версія
// const getCarsWithType = (allCars, type) => {
//   return allCars.filter(el => el.type.toLowerCase() === type.toLowerCase());
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));
