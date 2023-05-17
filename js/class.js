/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #email;
  static test = 5;

  constructor(userInfo) {
    // let this = {};
    const { firstName, lastName, age, phoneNumber, email } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#email = email;
    // return this;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User({
  firstName: 'Joseph',
  lastName: 'Hammond',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  email: 'id@si.pg',
});

console.log(user);

console.log(user.email);

user.email = 'test@gmail.com';

console.log(user.email);

console.dir(User);

// console.log(user.getFullName());
