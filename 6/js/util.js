/**
 * Функция, возвращающая случайное целое число из переданного диапазона
 * {@link https://learn.javascript.ru/task/random-int-min-max}
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
 * {@link https://learn.javascript.ru/task/shuffle | Тасование Фишера—Йетса. Тасует исходный массив}
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

export {getRandomOnlyPositiveInt, checkLengthOfComment, createArrayOfNumbers, shuffle};
