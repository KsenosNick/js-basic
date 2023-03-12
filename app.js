'use strict';

const role = 'Менеджер';

switch (role) {
  case 'Менеджер':
    console.log('Менеджер');
    break;
  case 'Админ':
    console.log('Админ');
    break;
  case 'ceo': 
    console.log('CEO');
    break;
  default:
    console.log('Мы тебя не знаем!');
    break;
}

const num = 1;

switch (true) {
  case num > 0: // true === num > 0
    console.log('Положительный');
    break;
  case num < 0:
    console.log('Отрицательный');
    break;
  default:
    console.log('Ноль');
}