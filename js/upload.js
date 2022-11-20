import { setEnableSubmitButton, showSuccessPopup } from './form.js';

const SERVER_FOR_UPLOAD = 'https://27.javascript.pages.academy/kekstagram-simpl';

const uploadPhoto = (onSuccess, onError, photoWithOtherData) => {
  fetch(
    SERVER_FOR_UPLOAD,
    {
      method: 'POST',
      body: photoWithOtherData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccessPopup();
      } else {
        onError();
      }
    })
    .catch(onError)
    .finally(setEnableSubmitButton);
};

export { uploadPhoto };
