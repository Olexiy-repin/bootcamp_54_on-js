/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
const User = function (userInfo) {
  const { firstName, lastName, age, phoneNumber, email } = userInfo;

  // let this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.email = email;
  // return this;
};

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.dir(User);

const user = new User({
  firstName: 'Joseph',
  lastName: 'Hammond',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  email: 'id@si.pg',
});

const user1 = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 40,
  phoneNumber: '(096) 58-05-459',
  email: 'id@si.pg',
});

console.log(user);
console.log(user1);

console.log(user.getFullName());
console.log(user1.getFullName());

// const user1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

// const user2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   login: 'cu@hecekalo.edu';
//   phoneNumber: '(097) 60-62-231';
//   password: 'qwerty123'
// };
