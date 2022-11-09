const formElement = document.querySelector('.img-upload__form');
const textInputElement = formElement.querySelector('.text__description');

const MAX_LENGTH_OF_COMMENT = 140;
const checkLongOfComment = (value) => value.length < MAX_LENGTH_OF_COMMENT;


// const pristine = new Pristine(formElement);
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

pristine.addValidator(textInputElement, checkLongOfComment, 'Максимальная длина 140 символов');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
