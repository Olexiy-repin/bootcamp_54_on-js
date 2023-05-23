const messageListEl = document.querySelector('.js-messages-wrapper');

const onMessageCloseBtnElClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const messageCloseBtnEl = event.target;
  const messageEl = messageCloseBtnEl.closest('.js-message');

  messageEl.remove();
};

messageListEl.addEventListener('click', onMessageCloseBtnElClick);
