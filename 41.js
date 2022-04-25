'use strict';

function sum(arg1) {
  return function (arg2) {
    return arg1 + arg2;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
//////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(from, to) {
  return function (num) {
    return num >= from && num <= to;
  };
}

function inArray(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
//////////////////////////////////
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(prop) {
  return function (a, b) {
    return a[prop] > b[prop] ? 1 : -1;
  };
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

//////////////////////////////////
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // функция shooter
      console.log(j); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

////////////////////////////////////////////////

function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }

  counter.set = function (num) {
    count = num;
  };

  counter.decrease = function () {
    count--;
  };

  return counter;
}

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function (num) {
    counter.count = num;
  };

  counter.decrease = function () {
    counter.count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
////////////////////////////////////////////////
console.log(sum(1)(2)); // 1 + 2
console.log(sum(1)(2)(3)); // 1 + 2 + 3
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));

function sum(num) {
  function f(num2) {
    f.count += num2;
    return f;
  }

  f.count = num;

  f.toString = function () {
    return f.count;
  };

  return f;
}
