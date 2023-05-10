/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// const calcBMI = function ({ weight, height }) {
//   // let { weight, height } = { weight: '88,3', height: '1.75', };

//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// };

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// const printContactsInfo = function ({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// };

// // Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// const getBotReport = function (companyInfo) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = companyInfo;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// };

// // // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

/*
? Напиши функцію getStockReport(companyName, stock), щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт
? про кількість товарів на складі будь-якої компанії.
*/

// const getStockReport = function ({ companyName, stock }) {
//   let total = 0;
//   const stockValues = Object.values(stock);

//   for (const value of stockValues) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// };

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createContact = function (partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
*/

const transformUsername = function (userInfo) {
  const { firstName, lastName, ...props } = userInfo;

  return {
    fullName: `${firstName} ${lastName}`,
    ...props,
  };
};

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
