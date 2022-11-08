import { scale as defaultScale, resetScale } from './scale-control.js';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
/** @type {HTMLInputElement} */
const uploadFileButtonElement = formElement.querySelector('#upload-file');


const closeModal = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};


const closeModalonEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.removeEventListener('keydown', closeModalonEscape);
    formElement.reset();
  }
};


const openModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', closeModalonEscape);
};


uploadFileButtonElement.addEventListener('change', () => {
  openModal();
  defaultScale();
});


formElement.addEventListener('reset', () => {
  closeModal();
  resetScale();
});


openModal();
