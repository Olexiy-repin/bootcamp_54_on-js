const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
};

const onOpenModalBtnClick = () => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyDown);
};

const onCloseModalBtnClick = () => {
  closeModal();
};

const onDocumentKeyDown = event => {
  console.log(event.code);

  if (event.code === 'Escape') {
    closeModal();
  }
};

openModalBtnEl.addEventListener('click', onOpenModalBtnClick);
closeModalBtnEl.addEventListener('click', onCloseModalBtnClick);
