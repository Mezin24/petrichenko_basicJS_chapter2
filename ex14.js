'use strict';

const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  // 'Takesi',
  'Sam',
];

function sortStudentsByGroups(arr) {
  const sortedArr = arr.sort();

  const groups = [];
  const extra = [];
  for (let i = 0; i < 3; i++) {
    groups.push([]);
  }

  for (let i = 0; i < sortedArr.length; i++) {
    const numOfArr = Math.floor(i / 3);
    if (numOfArr === 3) {
      extra.push(sortedArr[i]);
    } else {
      groups[numOfArr].push(sortedArr[i]);
    }
  }
  let remaining = 'Оставшиеся студенты: ';
  remaining += extra.length === 0 ? '-' : extra.join(', ');
  groups.push(remaining);

  return groups;
}

console.log(sortStudentsByGroups(students));
