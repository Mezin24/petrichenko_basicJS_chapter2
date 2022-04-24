/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
//////////////////////////////////////////////////////////////////

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
//////////////////////////////////////////////////////////////////

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

///////////////////////////////////////////////////////////////////
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';
const form = document.getElementById('form');
const addBtn = document.getElementById('addBtn');
const showBtn = document.getElementById('showBtn');
const addGenreBtn = document.getElementById('addGenreBtn');
const msg = document.getElementById('msg');

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },
};

function showMyDB(db) {
  if (db.privat === false) {
    console.log(db);
  } else {
    console.log('This is a private database');
  }
}

function writeYourGenres(db) {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    if (genre === null || genre === undefined || genre.trim() === '') {
      alert('Введите корректные данные');
      i--;
    } else {
      db.genres[i - 1] = genre;
    }
  }
  db.genres.forEach((genre, i) =>
    console.log(`Любимый жанр #${i + 1} - это ${genre}"`)
  );
}

function addNewMovie() {
  let i = 0;
  while (i < 2) {
    const movie = prompt('Один из последних просмотренных фильмов?');
    const rating = prompt('На сколько оцените его?');
    if (
      movie?.trim() === '' ||
      rating?.trim() === '' ||
      rating === null ||
      movie === null ||
      movie.length >= 10
    ) {
      alert('Invalid Value, repeat please.');
      continue;
    }

    personalMovieDB.movies[movie] = rating;
    i++;
  }
}

addBtn.addEventListener('click', addNewMovie);
showBtn.addEventListener('click', () => {
  console.log(showMyDB(personalMovieDB));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const numberOfFilms = new FormData(e.target).get('movieSum');
  if (
    numberOfFilms !== null ||
    numberOfFilms !== undefined ||
    numberOfFilms.trim() === ''
  ) {
    personalMovieDB.count = undefined;
  } else {
    personalMovieDB.count = +numberOfFilms;
  }

  let message;

  if (personalMovieDB.count < 10) {
    message = 'Просмотрено довольно мало фильмов';
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    message = 'Вы классический зритель';
  } else if (personalMovieDB.count >= 30) {
    message = 'Вы киноман';
  } else {
    message = 'Произошла ошибка';
  }

  msg.textContent = message;
});

addGenreBtn.addEventListener('click', () => writeYourGenres(personalMovieDB));
