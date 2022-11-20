const formElement = document.querySelector('.img-upload__form');
const effectListElements = formElement.querySelector('.effects__list');
const imageElement = formElement.querySelector('.img-upload__preview img');
const effectValueInput = formElement.querySelector('.effect-level__value');
const sliderElement = formElement.querySelector('.effect-level__slider');
const fieldsetInputElement = formElement.querySelector('.img-upload__effect-level');

const ZERO_TO_1 = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const ZERO_TO_100_PERCENT = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  mean: '%',
};

const FOBOS = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
  mean: 'px',
};

const HEAT = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


fieldsetInputElement.style.display = 'none';


const setFilter = (filter, start, mean = '') => {
  sliderElement.noUiSlider.set(start);
  sliderElement.noUiSlider.on('update', () => {
    effectValueInput.value = sliderElement.noUiSlider.get();
    const value = sliderElement.noUiSlider.get();
    imageElement.style.filter = `${filter}(${value}${mean})`;
  });
};

const updateSlider = (preset) => {
  sliderElement.noUiSlider.updateOptions({
    ...preset
  });
};

const onListClick = (evt) => {
  imageElement.removeAttribute('class');
  imageElement.style.filter = '';
  if (evt.target.classList.contains('effects__radio')) {
    const effect = evt.target.value;
    imageElement.classList.add(`effects__preview--${effect}`);

    if (effect === 'none') {
      fieldsetInputElement.style.display = 'none';
    } else {
      fieldsetInputElement.style.display = 'block';

      switch (effect) {
        case 'chrome':
          updateSlider(ZERO_TO_1);
          setFilter('grayscale', ZERO_TO_1.start);
          break;
        case 'sepia':
          updateSlider(ZERO_TO_1);
          setFilter('sepia', ZERO_TO_1.start);
          break;
        case 'marvin':
          updateSlider(ZERO_TO_100_PERCENT);
          setFilter('invert', ZERO_TO_100_PERCENT.start, ZERO_TO_100_PERCENT.mean);
          break;
        case 'phobos':
          updateSlider(FOBOS);
          setFilter('blur', FOBOS.start, FOBOS.mean);
          break;
        case 'heat':
          updateSlider(HEAT);
          setFilter('brightness', HEAT.start);
          break;
      }
    }
  }
};


sliderElement.noUiSlider.on('update', () => {
  effectValueInput.value = sliderElement.noUiSlider.get();
});


effectListElements.addEventListener('change', onListClick);


export { onListClick };
