/*
 * Методи об'єкта і this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

const filmDuna = {
  title: 'Duna',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    this.actors.push(newActor);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  isAdult() {
    return this.adult;
  },
};

filmDuna.changeTitle('NewTitle');

filmDuna.addActor('Jane Miller');

filmDuna.updateRating(8);

console.log(filmDuna.isAdult());

console.log(filmDuna);
