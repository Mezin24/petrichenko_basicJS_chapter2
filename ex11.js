'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length === 0) {
    return 'Семья пуста';
  }
  let people = '';
  arr.forEach((person, i, arr) => {
    if (i === arr.length - 1) {
      people += person;
    } else {
      people += person + ' ';
    }
  });

  return `Семья состоит из: ${people}`;
}
function showFamily(arr) {
  if (arr.length === 0) {
    return 'Семья пуста';
  }
  return `Семья состоит из: ${arr.join(' ')}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach((city) => console.log(city.toLowerCase()));
}

console.log(showFamily(family));
console.log(showFamily([]));
standardizeStrings(favoriteCities);
