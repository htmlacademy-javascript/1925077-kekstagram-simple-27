import { loadPhotos } from './show-mini-photos.js';
import { showAlert } from './util.js';

const SERVER_FOR_DOWNLOAD = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const DOWNLOAD_ERROR = 'Что-то пошло не так. Данные с сервера не загрузились';


fetch(SERVER_FOR_DOWNLOAD)
  .then((response) => response.json())
  .then((photos) => loadPhotos(photos))
  .catch(() => showAlert(DOWNLOAD_ERROR));
