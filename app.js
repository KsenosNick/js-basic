'use strict';

const verification = prompt('Сколько будет 7 + или - 15?');

switch (true) {
  case +verification === 23:
  case +verification === -8:
  case verification === 'Я не робот':
    console.log('Успех');
    break;

  default:
    console.log('Вы робот');
    break;
}