//? Формат JSON
// import users from '../json/userDb.json';

// console.log(users);

// const JSONuser =
//   '[{"firstName": "Oleksii","lastName": "Repin", "age": 20}, {"firstName": "Adrian","Conner": "Repin", "age": 30}]';
// const user = JSON.parse(JSONuser);

// console.log(JSONuser);
// console.log(user);

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 20,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const JSONuser = JSON.stringify(user);

// console.log(user);
// console.log(JSONuser);

//? Конструкція try...catch для обробки помилок

// console.log('First');

// try {
//   const data = JSON.parse('Well, this is awkward');

//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// console.log('Second');

//? Робота з localStorage
// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
// };

// localStorage.setItem('userData', JSON.stringify(user));
// localStorage.setItem('userAnswer', 'sdfsdf');

// const user = JSON.parse(localStorage.getItem('userData'));

// console.log(user);

// localStorage.removeItem('userData');
// localStorage.clear();

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
// };

// sessionStorage.setItem('userData', JSON.stringify(user));
