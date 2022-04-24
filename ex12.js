'use strict';

const someString = 'This is some strange string';

// function reverse(str) {
//   return str.split('').reverse().join('');
// }
function reverse(str) {
  let reverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr === undefined || arr.length === 0) {
    return 'Нет доступных валют';
  }
  let output = 'Доступные валюты:\n';
  if (missingCurr) {
    const filtredArr = arr.filter((item) => item !== missingCurr);
    return output + filtredArr.join('\n');
  } else {
    return output + arr.join('\n');
  }
}
console.log(availableCurr(additionalCurrencies, 'CNY'));
console.log(availableCurr(additionalCurrencies));
console.log(availableCurr([]));
// console.log(reverse(someString));

///////////////////////////////////////
let dictionary = Object.create(null);
Object.defineProperty(dictionary, 'toString', {
  enumerable: false,
  value: function () {
    return Object.keys(this).join();
  },
});

// добавляем немного данных
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"

///////////////////////////////////////
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
