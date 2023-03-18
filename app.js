'use strict';

for (let i = 1; i < 5; i++) {
  console.log(`Цикл 1 - ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`Цикл 2 - ${i}`);
  }
}

const tasks = [
  [1, 'Задача 1'],
  [2, 'Зачада 2'],
];

for (let i = 0; i < tasks.length; i++) {
  for (let j = 0; j < tasks.length; j++) {
    console.log(`${tasks[i][j]}`);
  }
}
