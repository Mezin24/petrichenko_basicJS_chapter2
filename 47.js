'use strict';

// const pow = (a, b) => {
//   if (b === 1) {
//     return a;
//   } else {
//     return a * pow(a, b - 1);
//   }
// };

const pow = (a, b) => {
  if (b === 0) return 1;
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

console.log(pow(3, 2));
console.log(pow(2, 4));

let students = {
  js: [
    { name: 'John', progress: 100 },
    { name: 'Ivan', progress: 60 },
  ],
  html: {
    basic: [
      { name: 'Peter', progress: 20 },
      { name: 'Ann', progress: 18 },
    ],
    pro: [{ name: 'Sam', progress: 10 }],
  },
};

function calcProgress(students) {
  let sum = 0;

  console.log(Object.values(students));
  return sum;
}

console.log(calcProgress(students));
