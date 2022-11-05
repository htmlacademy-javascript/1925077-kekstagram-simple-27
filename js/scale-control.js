const controlSmallerElement = document.querySelector('.scale__control--smaller');
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('.scale__control--value');
const imgElementElement = document.querySelector('.img-upload__preview').querySelector('img');

const MIN_SIZE = 25;
const MAX_SIZE = 100;
const STEP = 25;


let valueInControlValue = MAX_SIZE;//Дефолтное значение при загрузке

controlValueElement.value = `${valueInControlValue}%`;//Дефолтное значение при загрузке в самом элементе

/**
 * Принимет измененное значение масштаба картинки и задает его элементам в разметке
 * @param {number} value
 */
const scale = (value) => {
  imgElementElement.style.transform = `scale(${value / 100})`;
  controlValueElement.value = `${valueInControlValue}%`;
};


const zoomIn = () => {
  if (valueInControlValue >= MAX_SIZE - STEP) {
    valueInControlValue = MAX_SIZE;
  } else {
    valueInControlValue += STEP;
  }

  scale(valueInControlValue);
};


const zoomOut = () => {
  if (valueInControlValue <= MIN_SIZE) {
    valueInControlValue = MIN_SIZE;
  } else {
    valueInControlValue -= STEP;
  }

  scale(valueInControlValue);
};


controlBiggerElement.addEventListener('click', zoomIn);
controlSmallerElement.addEventListener('click', zoomOut);
