import { loadPhotos } from './show-mini-photos.js';
import { showAlert } from './util.js';

const DOWNLOAD_ERROR = 'Что-то пошло не так. Данные с сервера не загрузились';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((photos) => loadPhotos(photos))
  .catch(() => showAlert(DOWNLOAD_ERROR));
