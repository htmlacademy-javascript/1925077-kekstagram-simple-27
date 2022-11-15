const formElement = document.querySelector('.img-upload__form');
const textInputElement = formElement.querySelector('.text__description');

const MAX_LENGTH_OF_COMMENT = 140;
const checkLongOfComment = (value) => value.length < MAX_LENGTH_OF_COMMENT;


const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

pristine.addValidator(textInputElement, checkLongOfComment, 'Максимальная длина 140 символов');


const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            console.log('данные не отправились');
          }
        })
        .catch(() => {
          console.log('хз когда должно сработать');
        });
    }
  });
};


export {setUserFormSubmit};
