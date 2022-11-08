const formElement = document.querySelector('.img-upload__form');
const effectListElements = formElement.querySelector('.effects__list');
const imageElement = formElement.querySelector('.img-upload__preview img');
const effectValueInput = formElement.querySelector('.effect-level__value');
const sliderElement = formElement.querySelector('.effect-level__slider');
const fieldsetInputElement = formElement.querySelector('.img-upload__effect-level');

fieldsetInputElement.style.display = 'none';

const onListClick = (evt) => {
  imageElement.removeAttribute('class');
  if (evt.target.classList.contains('effects__radio')) {
    const effect = evt.target.value;
    // console.log(effect);
    imageElement.classList.add(`effects__preview--${effect}`);
    if (effect === 'none') {
      fieldsetInputElement.style.display = 'none';
    } else {
      fieldsetInputElement.style.display = 'block';
    }
  }
};

effectListElements.addEventListener('click', onListClick);
