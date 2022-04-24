'use strict';

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());

function invitation(name) {
  let str = `${name.replace(
    name[0],
    name[0].toUpperCase()
  )} invite to the party: `;

  function addGuest(guest) {
    str += guest + ' ';
    return str;
  }

  return addGuest;
}

const pavel = invitation('pavel');
const max = invitation('max');

console.log(pavel('Ivan'));
console.log(pavel('Sergey'));
console.log(max('Masha'));
console.log(pavel('Mihail'));
