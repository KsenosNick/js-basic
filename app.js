'use strict';

console.log('Вася' || 'Олег');
console.log(false || 'Олег');

console.log('Вася' && 'Олег');
console.log(false && 'Олег');

let a = 'Марина';
const userName = a || 'Петя';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.name';
console.log(fileName);