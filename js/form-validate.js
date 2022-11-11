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

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValide = pristine.validate();

    if (isValide) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      );
    } else {
      console.log('asdf');
    }
  });
};

export {setUserFormSubmit};
