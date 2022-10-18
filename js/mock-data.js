import {getRandomOnlyPositiveInt, createArrayOfNumbers, shuffle} from './util.js';

export const DEFAULT_MAX_LENGTH = 140;
export const TEST_STRING = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo esse inventore corporis quod aliquid fugit! Possimus laudantium odit';
export const AMOUNT_OF_OBJECTS = 25;
export const DESCRIPTIONS = [
  'Соображения высшего порядка, а также новая модель организационной деятельности требует определения и уточнения модели развития.',
  'Таким образом, постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации новых предложений!',
  'Практический опыт показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнить важнейшие задания',
  'Соображения высшего порядка, а также начало...',
  'Генератор псевдочитабельного текста (рыботекста) полезен дизайнерам и верстальщикам при наполнении макетов и тестовых сайтов.',
  'Данный приём позволяет без лишнего труда создать эффект заполненности сайта текстовым контентом.',
  'Скрипт поддерживает произвольную расстановку знаков препинания и отображение HTML тэгов абзацев.',
  'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.',
  'Подтверждено: обучение кадров — приоритетная задача',
  'Chocolate covered crickets were his favorite snack.',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;


/**
 * Каждый объект массива — описание фотографии, опубликованной пользователем
 * @param {number} amount
 * @param {array} descriptions
 * @returns Возвращает массив объектов с данными к фото
 */
const createArrayDataOfPhotos = (amount = AMOUNT_OF_OBJECTS) => {
  const urls = shuffle(createArrayOfNumbers(amount));
  const data = [];
  for (let i = 0; i < amount; i++) {
    const dataOfaPhoto = {
      id: i + 1,
      url: `photos/${urls[i]}.jpg`,
      description: DESCRIPTIONS[getRandomOnlyPositiveInt(0, DESCRIPTIONS.length - 1)],
      likes: getRandomOnlyPositiveInt(MIN_LIKES, MAX_LIKES),
      comments:getRandomOnlyPositiveInt(MIN_COMMENTS, MAX_COMMENTS),
    };
    data[i] = dataOfaPhoto;
  }
  return data;
};

export {createArrayDataOfPhotos};
