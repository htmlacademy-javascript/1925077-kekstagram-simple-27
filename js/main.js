const MAX_LENGTH_OF_COMMENT = 140;
const length140 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo esse inventore corporis quod aliquid fugit! Possimus laudantium odit';

//Функция, возвращающая случайное целое число из переданного диапазона
//source: https://learn.javascript.ru/task/random-int-min-max
const getRandomOnlyPositiveInt = (min = 0, max = 8) => {
  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  const randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};

//Функция, проверяющая, больше ли длина строки разрешенного максимума
const checkLengthOfComment = (comment) => comment.length <= MAX_LENGTH_OF_COMMENT;

getRandomOnlyPositiveInt();

checkLengthOfComment(length140);
