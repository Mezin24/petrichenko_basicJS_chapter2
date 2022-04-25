/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

//////////////////// 1 /////////////////////////////
const ads = document.querySelectorAll('.promo__adv > img');
ads.forEach((item) => item.remove());

//////////////////// 2 /////////////////////////////
const genreEl = document.querySelector('.promo__genre');
genreEl.innerHTML = 'ДРАМА';

//////////////////// 3 /////////////////////////////
const promoBgEl = document.querySelector('.promo__bg');
promoBgEl.style.background = 'url(img/bg.jpg)';
promoBgEl.style.backgroundSize = '100%';

//////////////////// 4 /////////////////////////////
const movieListEl = document.querySelector('.promo__interactive-list');
movieDB.movies.sort();
const { movies } = movieDB;

const html = movies
  .map((movie, i) => {
    return `
        <li class="promo__interactive-item">${i + 1}: ${movie}
            <div class="delete"></div>
        </li>
    `;
  })
  .join('');

movieListEl.innerHTML = html;
