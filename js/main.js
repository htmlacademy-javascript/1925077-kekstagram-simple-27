const DEFAULT_MAX_LENGTH = 140;
const TEST_STRING = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo esse inventore corporis quod aliquid fugit! Possimus laudantium odit';


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
  to = Math.floor(Math.min(from, to));

  const rand = from - 0.5 + Math.random() * (to - from + 1);
  return Math.round(Math.abs(rand));
};


/**
 * Проверяет, не превышает ли строка максимум.
 * @param {string} text
 * @param {number} maxLength
 * @returns {boolean} True, если не превышает.
 */
const checkLengthOfComment = (text, maxLength = 140) => text.length <= maxLength;


getRandomOnlyPositiveInt();


checkLengthOfComment(TEST_STRING, DEFAULT_MAX_LENGTH);
