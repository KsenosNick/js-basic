'use strict';

const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps'],
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн'],
  },
];

const users2 = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillsNum: user.skills.length,
  };
});

console.log(users2);
