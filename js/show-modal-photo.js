import { scale as defaultScale, resetScale } from './scale-control.js';
import { resetEffectInImg } from './effect.js';
import { pristine } from './form.js';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
/** @type {HTMLInputElement} */
const uploadFileButtonElement = formElement.querySelector('#upload-file');
const imageElement = formElement.querySelector('.img-upload__preview img');
const imagePreviewElements = formElement.querySelectorAll('.effects__preview');
const fieldsetInputElement = formElement.querySelector('.img-upload__effect-level');


const FILE_TYPES = ['jpg', 'jpeg', 'png'];


const closeModal = () => formElement.reset();


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};


const openModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fieldsetInputElement.style.display = 'none';
};


formElement.addEventListener('reset', () => {
  pristine.reset();
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetScale();
  document.removeEventListener('keydown', onDocumentKeydown);
  resetEffectInImg();
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


export { closeModal, openModal, onDocumentKeydown };
