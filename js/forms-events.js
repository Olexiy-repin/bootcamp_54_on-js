/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const inputFieldEl = document.querySelector('.js-username-input');
const firstNameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

inputFieldEl.addEventListener('focus', () => {
  inputFieldEl.style.outline = 'none';
  inputFieldEl.style.border = '1px solid teal';
});

inputFieldEl.addEventListener('blur', () => {
  inputFieldEl.style.border = '1px solid #cccccc';
});

inputFieldEl.addEventListener('change', () => {
  console.log('Hello from change!');
});

inputFieldEl.addEventListener('input', () => {
  firstNameOutputEl.textContent = ', ' + inputFieldEl.value;
});

checkboxEl.addEventListener('change', () => {
  if (checkboxEl.checked && inputFieldEl.value !== '') {
    submitBtnEl.removeAttribute('disabled');
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Hello from submit!');
});
