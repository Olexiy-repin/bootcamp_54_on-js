/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 10;

// if (num > 0) {
//   console.log('Done!');
// } else {
//   console.log('Else!');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';

// if (str.startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const userNumber = Number(prompt('Введіть число'));

// if (userNumber >= 10 && userNumber < 20) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

// const userNumber = Number(prompt('Введіть число'));

// if (userNumber > 0) {
//   console.log(1);
// } else if (userNumber < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const min = 1;

// if (min >= 0 && min < 15) {
//   console.log('Перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('Друга чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('Третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('Четверта чверть години');
// } else {
//   console.log('Невірна кількість хвилин');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const num = Number(prompt('Введіть число'));

// if (num === 10) {
//   console.log(10);
// } else if (num === 5) {
//   console.log(5);
// } else if (num === 0) {
//   console.log(0);
// } else {
//   console.log('Інше число');
// }

// switch (num) {
//   case 10: {
//     console.log(10);

//     break;
//   }

//   case 5: {
//     console.log(5);

//     break;
//   }

//   case 0: {
//     console.log(0);

//     break;
//   }

//   default: {
//     console.log('Інше число');
//   }
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може і 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може і 3');

//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
 * Тернарний оператор
 */

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/

// const a = 2;
// const b = 1;
// const result = a + b < 4 ? 'Мало' : 'Багато';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Співробітник';
// const message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Вітаю'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
