const modalElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const buttonCloseElement = document.querySelector('.img-upload__cancel');
const uploadFileButtonElement = document.querySelector('#upload-file');


const closeModal = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};


const openModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  buttonCloseElement.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }
  });
};


window.addEventListener('load', () => openModal());

uploadFileButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal();
});
