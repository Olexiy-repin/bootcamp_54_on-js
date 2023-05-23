/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

const onSectionElClick = event => {
  console.group('Event Listener on Section');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('Event Listener on Section');
};

const onDivElClick = event => {
  console.group('Event Listener on Div');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('Event Listener on Div');
};

const onTextElClick = event => {
  console.group('Event Listener on P');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('Event Listener on P');
};

sectionEl.addEventListener('click', onSectionElClick, {
  once: true,
});
divEl.addEventListener('click', onDivElClick);
textEl.addEventListener('click', onTextElClick);
