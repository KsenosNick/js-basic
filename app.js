'use strict';

// DRY - DO NOT REPEAT YOURSELF

const tasks = ['Задача 1'];

function addTask(taskArr, newTask) {
  taskArr.push(newTask);
}

function delTask(taskArr, task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  return tasks.splice(index, 1)
}

function moveTask(taskArr, task) {
  const result = delTask(taskArr, task);
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

addTask(tasks, 'Задача 2');
addTask(tasks, 'Задача 3');
addTask(tasks, 'Задача 4');
console.log(tasks);

delTask(tasks, 'Задача 3');

moveTask(tasks, 'Задача 4');
console.log(tasks);
