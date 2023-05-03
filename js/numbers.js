/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 10 та 20.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/

// const numA = 6;
// const numB = 20;

// const result = numB % numA;

// console.log(result);

//? Перевірте чи парні числа 15, 20, 45, 30.

// const num = 15;
// const isEven = num % 2;

// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// const totalMinutes = 90;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours, minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const userNumber = Number(prompt('Введіть число'));

// console.log(userNumber);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.

// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.

// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.

// const numA = Number.parseFloat(prompt('Введіть перше число'));
// const numB = Number.parseFloat(prompt('Введіть друге число'));

// const result = numA + numB;

// console.log(result);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

// const number = Math.round(23.4);

// console.log(number);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/

// const num = Number(prompt('Введіть число'));
// const pow = Number(prompt('Введіть ступінь'));

// const result = num ** pow;

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNumber = Math.random();

// console.log(randomNumber);

/*
  ? Рандомне число в діапазоні
*/

// const min = 1;
// const max = 100;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
