import { loadPhotos } from './show-mini-photos.js';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((photos) => {
    loadPhotos(photos);
  });
