import {renderMiniPhotos} from './render-mini-photos.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((photos) => {
    // console.log(photos);
    renderMiniPhotos(photos);
  });

