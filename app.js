'use strict';

const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const userName = [
  fullUserName.split(' ').splice(0, 1),
  userName.split(' ').splice(-1),
]
  .flat()
  .join(' ');
console.log(userNameCroped);
