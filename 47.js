'use strict';

// const pow = (a, b) => {
//   if (b === 1) {
//     return a;
//   } else {
//     return a * pow(a, b - 1);
//   }
// };

// const pow = (a, b) => {
//   if (b === 0) return 1;
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// };

// console.log(pow(3, 2));
// console.log(pow(2, 4));

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
  let progress = 0;
  let studens = 0;

  for (let values of Object.values(students)) {
    if (Array.isArray(values)) {
      studens += values.length;

      for (let i = 0; i < values.length; i++) {
        progress += values[i].progress;
      }
    } else {
      for (let subvalues of Object.values(values)) {
        studens += subvalues.length;
        for (let j = 0; j < subvalues.length; j++) {
          progress += subvalues[j].progress;
        }
      }
    }
  }

  return progress / studens;
}

function calcProgressRecurs(data) {
  if (Array.isArray(data)) {
    let progress = 0;

    for (let i = 0; i < data.length; i++) {
      progress += data[i].progress;
    }

    return [progress, data.length];
  } else {
    let total = [0, 0];
    for (let values of Object.values(data)) {
      const res = calcProgressRecurs(values);
      total[0] += res[0];
      total[1] += res[1];
    }

    return total;
  }
}

// console.log(calcProgress(students));
console.log(calcProgressRecurs(students)[0] / calcProgressRecurs(students)[1]);

// function factorial(n) {
//   if (n === 1) {
//     return 1
//   } else {
//     return n * factorial(n - 1);
//   }
// }

const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));

console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(5));
