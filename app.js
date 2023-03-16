'use strict';

const role1 = 'admin';
const role2 = 'user';
const role3 = 'superUser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];

console.log(roles);
console.log(roles[0]);
console.log(roles[roles.length - 1]);

// console.log(roles.at(-1)); - пока не везде поддерживается

const usersAge = [2040 -2022, 20 - '6', 10 > 0 ? 5 : 0];
console.log(usersAge);

const usersNames = new Array('Вася', 'Петя', 'Катя');
console.log(usersNames);

function square(el) {
  return el * el;
}

console.log(square([1, 2, 3]));