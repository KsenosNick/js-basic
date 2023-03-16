'use strict';

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);

users[2] = 'Марина';
console.log(users);

console.log(users.push('Никита'));
console.log(users);

console.log(users.unshift('Вася'));
console.log(users);

console.log(users.pop());
console.log(users);

console.log(users.shift());
console.log(users);