import localStorageAPI from './localstorage.js';

const contactFormEl = document.querySelector('.js-contact-form');
const userInfo = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageAPI.load('contactFormData');

  if (userInfoFromLS === undefined) {
    return;
  }

  console.log(userInfoFromLS);

  for (const key in userInfoFromLS) {
    contactFormEl.elements[key].value = userInfoFromLS[key];
  }
};

fillContactFormFields();

const onContactFormFielElChange = event => {
  const contactFormFieldEl = event.target;
  const contactFieldValue = contactFormFieldEl.value;
  const contactFieldName = contactFormFieldEl.name;

  userInfo[contactFieldName] = contactFieldValue;

  localStorageAPI.save('contactFormData', userInfo);
};

const onContactFormElSubmit = event => {
  event.preventDefault();

  const contactFormEl = event.target;

  contactFormEl.reset();
  localStorageAPI.remove('contactFormData');
};

contactFormEl.addEventListener('change', onContactFormFielElChange);
contactFormEl.addEventListener('submit', onContactFormElSubmit);
