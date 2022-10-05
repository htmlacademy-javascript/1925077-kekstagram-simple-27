const DEFAULT_MAX_LENGTH = 140;
const TEST_STRING = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo esse inventore corporis quod aliquid fugit! Possimus laudantium odit';


/**
 * Функция, возвращающая случайное целое число из переданного диапазона
 * source: https://learn.javascript.ru/task/random-int-min-max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomOnlyPositiveInt = (min = 0, max = 8) => {
  if ((min < 0 || max < 0)
  || (typeof min !== 'number')
  || (typeof max !== 'number')) {
    return NaN;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  min = Math.round(min);
  max = Math.round(max);

  const rand = min - 0.5 + Math.random() * (max - min + 1);
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
