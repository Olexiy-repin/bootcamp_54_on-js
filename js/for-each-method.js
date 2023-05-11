/*
 * forEach() замість циклів for і for...of для масивів
 */

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// const logItems = function (items) {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

// items.forEach((el, idx, arr) => {
//   console.log(`${idx + 1} - ${el}`);
// });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// const printContactsInfo = function ({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((el, idx, arr) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

const calсulateAverage = function (...args) {
  let total = 0;

  // for (let i = 0; i < args.length; i += 1) {
  //   total += args[i];
  // }

  args.forEach((el, idx, arr) => {
    total += el;
  });

  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
