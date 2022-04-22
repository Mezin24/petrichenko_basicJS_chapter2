// Место для первой задачи
function getTimeFromMinutes(min) {
  if (isNaN(min) || !Number.isInteger(min) || min < 0) {
    return `Ошибка, проверьте данные`;
  }
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  return `Это ${hours} час${hours === 0 ? 'ов' : 'а'} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

// Место для второй задачи
function findMaxNumber(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return 0;
    }
  }
  return Math.max(...numbers);
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));

// Место для второй задачи
// function findMaxNumber(...numbers) {

// }
