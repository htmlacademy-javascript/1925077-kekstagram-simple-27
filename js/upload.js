import { enableDataButton } from './form-validate.js';

const SERVER_FOR_UPLOAD = 'https://27.javascript.pages.academy/kekstagram-simple';

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
      } else {
        onError();
      }
    })
    .catch(onError)
    .finally(enableDataButton);
};

export { uploadPhoto };