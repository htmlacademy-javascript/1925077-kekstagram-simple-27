const controlSmallerElement = document.querySelector('.scale__control--smaller');
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('.scale__control--value');
const imgElementElement = document.querySelector('.img-upload__preview').querySelector('img');

const MIN_SIZE = 25;
const MAX_SIZE = 100;
const STEP = 25;


let valueInControlValue = MAX_SIZE;//Дефолтное значение при загрузке

controlValueElement.value = `${valueInControlValue}%`;//Дефолтное значение при загрузке в самом элементе


const scale = (value) => {
  imgElementElement.style.transform = `scale(${value / 100})`;
  valueInControlValue = value;
  controlValueElement.value = `${valueInControlValue}%`;
};


const zoonIn = () => {
  if (valueInControlValue >= MAX_SIZE - STEP) {
    valueInControlValue = MAX_SIZE;
  } else {
    valueInControlValue += STEP;
  }

  scale(valueInControlValue);
};


const zoonOut = () => {
  if (valueInControlValue <= MIN_SIZE) {
    valueInControlValue = MIN_SIZE;
  } else {
    valueInControlValue -= STEP;
  }

  scale(valueInControlValue);
};


controlBiggerElement.addEventListener('click', zoonIn);
controlSmallerElement.addEventListener('click', zoonOut);
