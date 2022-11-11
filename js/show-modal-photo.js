import { scale as defaultScale, resetScale } from './scale-control.js';
import { setUserFormSubmit } from './form-validate.js';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
/** @type {HTMLInputElement} */
const uploadFileButtonElement = formElement.querySelector('#upload-file');


const closeModal = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};


const closeModalOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    formElement.reset();
  }
};


const openModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', closeModalOnEscape);
};


uploadFileButtonElement.addEventListener('change', () => {
  openModal();
  defaultScale();
});


formElement.addEventListener('reset', () => {
  closeModal();
  resetScale();
  document.removeEventListener('keydown', closeModalOnEscape);
});

setUserFormSubmit(closeModal);

// export {closeModal, openModal};
