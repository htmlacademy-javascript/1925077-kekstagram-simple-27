//Функция, возвращающая случайное целое число из переданного диапазона
//source: https://learn.javascript.ru/task/random-int-min-max
const getRandomOnlyPositiveInt = (min = 0, max = 8) => {
  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  const randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};

getRandomOnlyPositiveInt();
// console.log(getRandomOnlyPositiveInt());
