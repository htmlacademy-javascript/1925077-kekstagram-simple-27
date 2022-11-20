import { scale as defaultScale, resetScale } from './scale-control.js';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
/** @type {HTMLInputElement} */
const uploadFileButtonElement = formElement.querySelector('#upload-file');
const imageElement = formElement.querySelector('.img-upload__preview img');
const imagePreviewElements = formElement.querySelectorAll('.effects__preview');


const FILE_TYPES = ['jpg', 'jpeg', 'png'];


const closeModal = () => formElement.reset();


const closeModalOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};


const openModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', closeModalOnEscape);
};


formElement.addEventListener('reset', () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetScale();
  document.removeEventListener('keydown', closeModalOnEscape);
});


uploadFileButtonElement.addEventListener('change', () => {
  openModal();
  defaultScale();
  const file = uploadFileButtonElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageElement.src = URL.createObjectURL(file);
    imagePreviewElements.forEach((elem) => (elem.style = `background-image: url(${URL.createObjectURL(file)});`));
  }
});


export { closeModal, openModal };
