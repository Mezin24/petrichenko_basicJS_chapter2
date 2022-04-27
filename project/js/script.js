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

function displayMovies(db) {
  const sortedDb = db.map((item) => item.toLowerCase()).sort();

  const html = sortedDb
    .map((movie, i) => {
      return `
        <li class="promo__interactive-item" data-id="${movie.slice(0, 10)}">${
        i + 1
      }: ${movie}
            <div class="delete"></div>
        </li>
    `;
    })
    .join('');

  movieListEl.innerHTML = html;
}
displayMovies(movieDB.movies);

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const form = document.querySelector('.add');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let filmName = formData.get('name');

  if (filmName.trim().length === 0) {
    return;
  }

  filmName = filmName.length >= 21 ? filmName.slice(0, 21) + '...' : filmName;

  const isFavorite = formData.get('isFavorite');
  if (isFavorite === 'on') {
    filmName = '⭐ ' + filmName;
    console.log('Добавляем любимый фильм');
  }

  movieDB.movies.push(filmName);
  displayMovies(movieDB.movies);
  e.target.reset();
});

movieListEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const currentMovieId = e.target.closest('li').dataset.id;
    const deleteMovieIndex = movieDB.movies.findIndex(
      (item) => item.toLowerCase().slice(0, 10) === currentMovieId
    );
    movieDB.movies.splice(deleteMovieIndex, 1);
    displayMovies(movieDB.movies);
  }
});
