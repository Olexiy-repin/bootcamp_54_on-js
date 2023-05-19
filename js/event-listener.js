/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-btn');
const removeBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnElClick = event => {
  console.log(event);

  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'Random image';
};

const onRemoveBtnElClick = () => {
  swapBtnEl.removeEventListener('click', onSwapBtnElClick);
};

swapBtnEl.addEventListener('click', onSwapBtnElClick);
removeBtnEl.addEventListener('click', onRemoveBtnElClick);
