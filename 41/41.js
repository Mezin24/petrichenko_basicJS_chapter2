'use strict';

/*
Выбрать input типа checkbox.
Выбрать input типа checkbox, НЕ отмеченный.
Найти все элементы с id=message или message-*.
Найти все элементы с id=message-*.
Найти все ссылки с расширением href="...zip".
Найти все элементы с атрибутом data-action, содержащим delete в списке (через пробел).
Найти все элементы, у которых ЕСТЬ атрибут data-action, но он НЕ содержит delete в списке (через пробел).
Выбрать все чётные элементы списка #messages.
Выбрать один элемент сразу за заголовком h3#widget-title на том же уровне вложенности.
Выбрать все ссылки, следующие за заголовком h3#widget-title на том же уровне вложенности.
Выбрать ссылку внутри последнего элемента списка #messages.
*/

const checkboxInputChecked = document.querySelector(
  'input[type="checkbox"][checked]'
);
const checkboxInput = document.querySelector('input[type="checkbox"]');
const messages = document.querySelectorAll('[id^="message"]');
const messagesDash = document.querySelectorAll('[id^="message-"]');
const zips = document.querySelectorAll('[href$=".zip"]');
const dataActions = document.querySelectorAll('[data-action~="delete"]');
const dataActions2 = document.querySelectorAll('[data-action$="delete"]');

console.log(dataActions2);
