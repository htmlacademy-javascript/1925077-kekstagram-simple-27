import { uploadPhoto } from './upload.js';

const formElement = document.querySelector('.img-upload__form');
const textInputElement = formElement.querySelector('.text__description');
const dataButtonElement = document.querySelector('#upload-submit');

const MAX_LENGTH_OF_COMMENT = 140;
const checkLongOfComment = (value) => value.length < MAX_LENGTH_OF_COMMENT;


const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

pristine.addValidator(textInputElement, checkLongOfComment, 'Максимальная длина 140 символов');

const disableButton = () => {
  dataButtonElement.disabled = true;
  dataButtonElement.textContent = 'Данные отправляются';
};

const enableDataButton = () => {
  dataButtonElement.disabled = false;
  dataButtonElement.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess, onError) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      disableButton();
      const formData = new FormData(evt.target);
      uploadPhoto(onSuccess, onError, formData);
    }
  });
};


export { setUserFormSubmit, enableDataButton };
