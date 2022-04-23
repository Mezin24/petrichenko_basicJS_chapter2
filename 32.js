'use strict';

const person = {
  name: 'Pavel',
  age: 34,
  adress: {
    city: 'Obninsk',
    street: 'Gagarina',
    build: 52,
    lat: 51,
  },
};

for (let [key, value] of Object.entries(person)) {
  if (typeof value === 'object') {
    let adress = '';

    for (let k in value) {
      adress += `${value[k]} `;
    }
    console.log(`Проживающий по адрусу: ${adress}`);
    continue;
  }
  console.log(`Свойство ${key} имеет значениие ${value}`);
}

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.fullName.split(' ')[0];
    },

    set: function (value) {
      this.fullName = value + ' ' + this.fullName.split(' ')[1];
    },
  });
  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.fullName.split(' ')[1];
    },
    set: function (value) {
      this.fullName = this.fullName.split(' ')[0] + ' ' + value;
    },
  });
}

const vasya = new User('Василий Попкин');
console.log(vasya);
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.firstName = 'Pavel';
console.log(vasya.fullName);
vasya.lastName = 'Mezencev';
console.log(vasya.fullName);
