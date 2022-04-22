const userName = 'Pavel';

console.log(userName);
const person = {
  name: 'Pavel',
  friends: [
    { name: 'Ivan', age: 33 },
    { name: 'Mihail', age: 36 },
    { name: 'Ivan', age: 34 },
  ],
};

console.log(person);

if (NaN) {
  console.log('Yes');
} else {
  console.log('Yes');
}

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log((!1 && 2) || !3); // false
console.log(25 || (null && !3)); // 25
console.log(NaN || null || !3 || undefined || 5); // 5
console.log(NaN || (null && !3 && undefined) || 5); // 5
console.log((5 === 5 && 3 > 1) || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } // Done
// console.log(hamburger === 3 && cola || fries === 3 && nuggets); // 2

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!') // Yes
// }
// console.log(hamburger || cola || fries === 3 || nuggets); // 2

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!'); // No
// }
// console.log((hamburger && cola) || (fries === 3 && nuggets)); //false
let figure = '';
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < i; j++) {
    figure += '*';
  }
  figure += '\n';
}
// let figure = '';
// for (let i = 1; i < 6; i++) {
//   for (let j = 1; j < 6; j++) {
//     if (i === j) {
//       figure = figure + '*'.repeat(i) + '\n';
//     }
//   }
// }

// console.log(figure);

function firstTask() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}
firstTask();

function secondTask() {
  for (let i = 20; i >= 10; i--) {
    if (i === 13) {
      return;
    }
    console.log(i);
  }
}
secondTask();

function thirdTask() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

thirdTask();

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

function fourthTask() {
  let i = 2;
  while (i <= 16) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
}
fourthTask();

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
  }

  return arrayOfNumbers;
}
fifthTask();
