const controlSmallerElement = document.querySelector('.scale__control--smaller');
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('.scale__control--value');
const imgElementElement = document.querySelector('.img-upload__preview img');

const MIN_SIZE = 25;
const MAX_SIZE = 100;
const STEP = 25;


const defaultValue = () => MAX_SIZE;
let valueInControlValue = defaultValue();//Дефолтное значение при загрузке

controlValueElement.value = `${valueInControlValue}%`;//Дефолтное значение при загрузке в самом элементе

/**
 * Принимет измененное значение масштаба картинки и задает его элементам в разметке
 * @param {number} value
 */
const scale = (value = MAX_SIZE) => {
  imgElementElement.style.transform = `scale(${value / 100})`;
  controlValueElement.value = `${value}%`;
};


const onZoomInClick = () => {
  if (valueInControlValue >= MAX_SIZE - STEP) {
    valueInControlValue = MAX_SIZE;
  } else {
    valueInControlValue += STEP;
  }

  scale(valueInControlValue);
};


const onZoomOutClick = () => {
  if (valueInControlValue <= MIN_SIZE) {
    valueInControlValue = MIN_SIZE;
  } else {
    valueInControlValue -= STEP;
  }

  scale(valueInControlValue);
};


controlBiggerElement.addEventListener('click', onZoomInClick);
controlSmallerElement.addEventListener('click', onZoomOutClick);


const resetScale = () => {
  valueInControlValue = defaultValue();
  imgElementElement.style.transform = `scale(${valueInControlValue / 100})`;
};


export { scale, resetScale };
