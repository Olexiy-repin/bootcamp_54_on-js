/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const message = 'Hello ' + userFirstName + ', ' + 'your age is ' + userAge;

// console.log(message);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const message = `Hello ${userFirstName}, your age is ${userAge}`;

// console.log(message);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.

// const userFirstName = prompt('Ваше ім`я');
// const lengthOfFirstName = userFirstName.length;

// console.log(lengthOfFirstName);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// let userEmail = prompt('Ваш email');
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр

// const userEmail = prompt('Ваш email?').toUpperCase();

// console.log(userEmail);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;

// const str = '24px';
// let endOfStr = str.endsWith('14');

// console.log(endOfStr);

//? У нас є рядок '23,4', замініть кому на крапку

// const str = '23,4'.replace(',', '.');

// console.log(str);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/

// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// str = str.replaceAll('dog', 'monkey');

// console.log(str);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)

// const someDate = '12:05:21'.replaceAll(':', '.');

// console.log(someDate);
