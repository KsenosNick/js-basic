'use strict';

const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 25 },
  { name: 'Петя', age: 33 },
];

users.sort((user1, user2) => user1.age - user2.age);
console.log(users);
