'use strict';

const userArray = ['Вася', 'Пупкин', 24];
const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: ['Программирование', 'Готовка'],
  eduBasic: 'Школа №3',
  eduPro: 'МФТИ',
};

console.log(user);
console.log(user.name);
console.log(user.skills[0]);

console.log(user['skills']);

const level = 'Pro';
console.log(user['edu' + level]);

// const res = prompt('Введите свойство: ');
// console.log(user[res]);

user['city'] = 'Москва';
console.log(user);

user.age = 30;
user['age'] = 35;
