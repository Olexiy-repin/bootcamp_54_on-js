const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
    adult: true,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

// const getAllTitlesOfFilms = function (films) {
//   const filmsTitles = [];

//   for (const film of films) {
//     filmsTitles.push(film.title);
//   }

//   return filmsTitles;
// };

// console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// const findFilmByName = function (films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }

//   return `${filmTitle} не знайдено!`;
// };

// console.log(findFilmByName(filmoteka, 'Venom'));
// console.log(findFilmByName(filmoteka, 'Star Wars'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// const getAdultFilms = function (films) {
//   const adultFilms = [];

//   for (const film of films) {
//     if (film.adult) {
//       adultFilms.push(film);
//     }
//   }

//   return adultFilms;
// };

// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// const getNotAdultFilms = function (films) {
//   const notAdultFilms = [];

//   for (const film of films) {
//     if (!film.adult) {
//       notAdultFilms.push(film);
//     }
//   }

//   return notAdultFilms;
// };

// console.log(getNotAdultFilms(filmoteka));
