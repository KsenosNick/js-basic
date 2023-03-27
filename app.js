'use strict';

const arr = [1, 2, 4];
const [z, y, x] = arr;
console.log(x, y, z);

let user = {
  name: 'Вася',
  age: 40,
  city: 'Москва',
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionData = {
  skills: ['Разработка', 'Дизайн'],
  creadiCard: '2343-2345-2734-2356',
};

user = {
  ...user,
  ...additionData,
};
console.log(user);
