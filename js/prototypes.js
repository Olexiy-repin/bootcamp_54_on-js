/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const usersMethods = {
//   getFirstName() {
//     return this.firstName;
//   },
// };

// const user = Object.create(usersMethods);

// user.firstName = 'Rosalie';
// user.lastName = 'Lloyd';

// const user1 = Object.create(usersMethods);

// user1.firstName = 'Oleksii';
// user1.lastName = 'Repin';

// console.log('user: ', user);
// console.log('user1: ', user1);

// console.log(user1.age);
// console.log(user1.lastName);
// console.log(user1.firstName);

// console.log(user.getFirstName());
// console.log(user1.getFirstName());

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()

// console.log(user.hasOwnProperty('getFirstName'));

//* Цикл for...in, перебирає і власні, і не власні властивості.

// for (const key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }
