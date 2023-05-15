//? Автоматичне призведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' + '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
// console.log(6 + true);

//? Області видимості
// const value = 10;

// if (true) {
//   const value = 20;

//   console.log(value);
// }

//? var зміні, суворий режим, type="module"
// const value = 10;

// console.log(value);

//? Фільтрація масиву на унікальні значення за допомогою .filter()
// const users = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

/*
1 Ітерація
el = 'Clyde';
idx = 0;
arr = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

arr.indexOf('Clyde') === 0

2 Ітерація
el = 'Ola';
idx = 1;
arr = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

arr.indexOf('Ola') === 1

3 Ітерація
el = 'Norman';
idx = 2;
arr = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

arr.indexOf('Norman') === 2

4 Ітерація
el = 'Ola';
idx = 3;
arr = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

arr.indexOf('Ola') === 3

5 Ітерація
el = 'Norman';
idx = 4;
arr = ['Clyde', 'Ola', 'Norman', 'Ola', 'Norman'];

arr.indexOf('Norman') === 4


['Clyde', 'Ola', 'Norman']
*/
// const uniqueUsers = users.filter((el, idx, arr) => {
//   return arr.indexOf(el) === idx;
// });

// console.log('users: ', users);
// console.log('uniqueUsers: ', uniqueUsers);

//? Фільтрація масиву обʼєктів на унікальність
// const users = [
//   {
//     firstName: 'Oleksii',
//     lastName: 'Repin',
//     age: 30,
//   },
//   {
//     firstName: 'Lelia',
//     lastName: 'Spencer',
//     age: 20,
//   },
//   {
//     firstName: 'Oleksii',
//     lastName: 'Repin',
//     age: 30,
//   },
//   {
//     firstName: 'Lelia',
//     lastName: 'Spencer',
//     age: 20,
//   },
// ];
// const uniqueUsers = users.reduce((acc, user, idx, arr) => {
//   if (acc.find(el => el.firstName === user.firstName)) {
//     return acc;
//   }

//   acc.push(user);

//   return acc;
// }, []);

// Метод бібліотеки lodash _.uniqBy()
// const uniqueUsers = _.uniqBy(users, 'firstName');

// console.log('users: ', users);
// console.log('uniqueUsers: ', uniqueUsers);

/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзакцій лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт із властивостями: id, type та amount
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Початковий ID для транзакції
  startId: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює, додає транзакцію до історії та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.generateId(),
      amount,
      type,
    };
  },

  // Генерація ID для транзакції
  generateId() {
    return (this.startId += 1);
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert(`Зняття такої суми не можливе, недостатньо коштів`);

      return;
    }

    this.balance -= amount;

    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },

  /*
   * Метод, що повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {
    const transaction = this.transactions.find(el => el.id === id);

    return transaction !== undefined ? transaction : 'Такої транзакції не існує в історії.';
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const total = this.transactions
      .filter(el => el.type === type)
      .reduce((acc, el) => acc + el.amount, 0);

    return total;
  },
};

account.deposit(200);
account.deposit(200);
account.deposit(200);
account.withdraw(100);
account.withdraw(300);
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
