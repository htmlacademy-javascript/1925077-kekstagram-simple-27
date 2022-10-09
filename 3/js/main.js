const DEFAULT_MAX_LENGTH = 140;
const TEST_STRING = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo esse inventore corporis quod aliquid fugit! Possimus laudantium odit';
const AMOUNT_OF_OBJECTS = 25;
const DESCRIPTIONS = [
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


/**
 * Функция, возвращающая случайное целое число из переданного диапазона
 * source: https://learn.javascript.ru/task/random-int-min-max
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
const getRandomOnlyPositiveInt = (from = 0, to = 8) => {
  if ((from < 0 || to < 0)
  || (typeof from !== 'number')
  || (typeof to !== 'number')) {
    return NaN;
  }

  from = Math.ceil(Math.min(from, to));
  to = Math.floor(Math.max(from, to));

  const rand = from + Math.random() * (to + 1 - from);
  return Math.floor(rand);
};


/**
 * Проверяет, не превышает ли строка максимум.
 * @param {string} text
 * @param {number} maxLength
 * @returns {boolean} True, если не превышает.
 */
const checkLengthOfComment = (text, maxLength = 140) => text.length <= maxLength;


/**
 * Функция создания массива [1, 2, 3 ... любой длины]
 * @param {number} length
 * @returns возвращает массив чисел от 1 до выбранного с шагом 1
 */
const createArrayOfNumbers = (length = 25) => {
  const array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};


/**
 * Тасование Фишера—Йетса: https://learn.javascript.ru/task/shuffle
 * Тасует исходный массив
 * @param {array} array
 * @returns возвращает перемешанный массив
 */
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


/**
 * Каждый объект массива — описание фотографии, опубликованной пользователем
 * @param {number} amount
 * @param {array} descriptions
 * @returns Возвращает массив объектов с данными к фото
 */
const createArrayDataOfPhotos = (amount, descriptions) => {
  const identifiers = createArrayOfNumbers(amount);
  const urls = shuffle(createArrayOfNumbers(amount));
  const data = [];
  for (let i = 0; i < amount; i++) {
    const dataOfaPhoto = {
      id: identifiers[i],
      url: `photos/${urls[i]}.jpg`,
      description: descriptions[getRandomOnlyPositiveInt(0, descriptions.length - 1)],
      likes: getRandomOnlyPositiveInt(15, 200),
      comments:getRandomOnlyPositiveInt(0, 200),
    };
    data[i] = dataOfaPhoto;
  }
  return data;
};


checkLengthOfComment(TEST_STRING, DEFAULT_MAX_LENGTH);


createArrayDataOfPhotos(AMOUNT_OF_OBJECTS, DESCRIPTIONS);
