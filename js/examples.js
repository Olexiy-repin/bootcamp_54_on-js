/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає властивість mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log(user);

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return `${stoneName} не знайдено!`;
// };

// console.log(calcTotalPrice(stones, 'Смарагд')); // 5200
// console.log(calcTotalPrice(stones, 'Діамант')); // 8100
// console.log(calcTotalPrice(stones, 'Аконіт')); // Каменя за такою назвою не знайдено

/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзакцій лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт із властивостями: id, type та amount
*/

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Початковий ID для транзакції
//   startId: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює, додає транзакцію до історії та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {},

//   // Генерація ID для транзакції
//   generateId() {
//     return (this.startId += 1);
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {},

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * Після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод, що повертає поточний баланс
//    */
//   getBalance() {},

//   /*
//    * Метод шукає та повертає об'єкт транзації по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };
