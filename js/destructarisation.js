/*
 * Деструктуризація об'єктів
 */

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// // const flag = team.flag;
// // const original = team.langs.original;
// // const secondary = team.langs.secondary;

// const {
//   flag,
//   langs: { original, secondary },
// } = team;

// console.log(flag);
// console.log(original);
// console.log(secondary);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, , user3] = names;

// console.log(user1);
// console.log(user3);

// const rgb = [220, 100, 50];

// const [red, green, blue] = rgb;
