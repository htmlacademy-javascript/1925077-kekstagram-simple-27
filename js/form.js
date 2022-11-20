import { uploadPhoto } from './upload.js';
import { closeModal } from './show-modal-photo.js';


const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const textInputElement = formElement.querySelector('.text__description');
const inputFileSubmitElement = bodyElement.querySelector('#upload-submit');
const uploadingSuccessTemplate = bodyElement.querySelector('#success').content;
const uploadErrorTemplate = bodyElement.querySelector('#error').content;


const MAX_LENGTH_OF_COMMENT = 140;
const checkLongOfComment = (value) => value.length < MAX_LENGTH_OF_COMMENT;


const showSuccessPopup = () => {
  const successElement = uploadingSuccessTemplate.cloneNode(true);
  bodyElement.appendChild(successElement);
  const closeSuccessButtonElement = document.querySelector('.success__button');
  const successModalElement = document.querySelector('.success');
  const successInnerElement = successModalElement.querySelector('.success__inner');

  const onSuccessPopup = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successModalElement.remove();
      document.removeEventListener('keydown', onSuccessPopup);
    }
  };

  const onMissClickClose = (node) => {
    const closeMessage = () => {
      successModalElement.remove();
    };

    const testFunction = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        closeMessage();
        document.removeEventListener('keydown', onSuccessPopup);
      }
    };

    document.addEventListener('click', testFunction);
  };

  onMissClickClose(successInnerElement);
  closeSuccessButtonElement.addEventListener('click', () => {
    successModalElement.remove();
    document.removeEventListener('keydown', onSuccessPopup);
  });

  document.addEventListener('keydown', onSuccessPopup);
};

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

pristine.addValidator(textInputElement, checkLongOfComment, 'Максимальная длина 140 символов');

const setDisableSubmitButton = () => {
  inputFileSubmitElement.disabled = true;
  inputFileSubmitElement.textContent = 'Данные отправляются';
};

const setEnableSubmitButton = () => {
  inputFileSubmitElement.disabled = false;
  inputFileSubmitElement.textContent = 'Опубликовать';
};


const showUploadError = () => {
  const errorElement = uploadErrorTemplate.cloneNode(true);
  bodyElement.appendChild(errorElement);
  const closeErrorButtonElement = document.querySelector('.error__button');
  const errorModalElement = document.querySelector('.error');
  const errorInnerElement = errorModalElement.querySelector('.error__inner');

  const onErrorModalEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorModalElement.remove();
      document.removeEventListener('keydown', onErrorModalEscKeydown);
    }
  };

  const missClickErrorClose = (node) => {
    const closeMessage = () => {
      errorModalElement.remove();
    };

    const checkError = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        closeMessage();
      }
    };

    document.addEventListener('click', checkError);
  };

  missClickErrorClose(errorInnerElement);
  closeErrorButtonElement.addEventListener('click', () => {
    errorModalElement.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
  });

  document.addEventListener('keydown', onErrorModalEscKeydown);
};


formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    setDisableSubmitButton();
    const formData = new FormData(evt.target);
    uploadPhoto(closeModal, showUploadError, formData);
  }
});


export { setEnableSubmitButton, showSuccessPopup };
