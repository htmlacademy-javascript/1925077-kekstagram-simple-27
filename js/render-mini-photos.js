// import {createArrayDataOfPhotos} from './mock-data.js';

const photosContainerElement = document.querySelector('.pictures');
const miniPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const dataOfPhotos = createArrayDataOfPhotos();


const renderMiniPhotos = (dataOfPhotos) => {
  const photosListFragment = document.createDocumentFragment();

  dataOfPhotos.forEach(({ url, likes, comments }) => {
    const miniPhotoElement = miniPhotoTemplate.cloneNode(true);
    // miniPhotoElement.querySelector('.picture__img').dataset.photoId = id;
    miniPhotoElement.querySelector('.picture__img').src = url;
    miniPhotoElement.querySelector('.picture__comments').textContent = comments;
    miniPhotoElement.querySelector('.picture__likes').textContent = likes;

    photosListFragment.append(miniPhotoElement);
  });

  photosContainerElement.append(photosListFragment);
};

export { renderMiniPhotos };
