/*
 *  Контекст виконання this
 */

/*
 * this існує тільки всередині функцій.
 * На this не впливає те де функція була //! ОГОЛОШЕНА.
 * На this впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 */

//TODO: Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

//TODO: Розглянемо як this поводиться у звичайних функціях
//? Function expression
// const greet = function () {
//   console.log('This --->', this);
// };

// greet();

//? Function declaration
// function greet() {
//   console.log('This --->', this);
// }

// greet();

//TODO: Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showUserThis = showThis;
// user.showUserName = showName;

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Estelle',
//   age: 40,
// };

// anotherUser.showAnotherUserName = showName;

// anotherUser.showAnotherUserName();

//TODO: Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;

// user.showUserThis();

// showThis();

//TODO: This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const someFunction = function (callback) {
//   callback();
// };

// someFunction(user.showUserName);

//TODO: This у стрілочних функціях. Стрілочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeUserAge(newAge) {
//     // let this = user;

//     const changeAge = () => {
//       console.log(`this ---->`, this);

//       this.age = newAge;
//     };

//     changeAge();
//   },
// };

// user.changeUserAge(40);

// console.log(user);

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//   },
// };

// const goFn = user.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
//   // let this = undefined;

//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   // let this = undefined;

//   return {
//     name: 'Джон',

//     ref() {
//       // let this = user;

//       return this;
//     },
//   };
// }

// const user = makeUser();

// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

const ladder = {
  step: 0,

  up() {
    this.step += 1;

    return this;
  },

  down() {
    this.step -= 1;

    return this;
  },

  showStep() {
    console.log(this.step);

    return this;
  },
};

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down та showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
ladder.up().up().down().showStep();
