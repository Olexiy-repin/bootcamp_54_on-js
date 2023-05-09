/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// Фільм (назва, опис, рейтинг, акторскій склад, вікове обмеження)

// const film = {
//   title: 'Duna',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid.',
//   rating: 8,
//   actors: ['Eunice', 'Phoebe', 'Willie'],
// };

// console.log(film);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// film.rating = 10;
// film.actors.push('Garrett');

// film.adult = true;

// console.log(film);

// film['rating'] = 10;
// film['actors'].push('Garrett');
// film['adult'] = true;

// console.log(film);

// const key = 'title';

// console.log(film[key]);

/*

 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const user = {
//   username,
//   email,
// };

// console.log(user);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Rena',
//   lastName: 'Lynch',
//   age: 20,
// };
// const user2 = user;

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.age = 30;

// console.log('user: ', user);
// console.log('user2: ', user2);
