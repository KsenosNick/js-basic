'use strict';

const tasks = ['Задача 1'];

function addTask(taskArr, newTask) {
  taskArr.push(newTask);
}

function delTask(taskArr, task) {
  if (taskArr.includes(task)) {
    const taskIndex = taskArr.indexOf(task);
    taskArr.splice(taskIndex, 1);
  }
}

function moveTask(taskArr, task) {
  if (taskArr.includes(task)) {
    const taskIndex = taskArr.indexOf(task);
    taskArr.splice(taskIndex, 1);
    taskArr.unshift(task);
  }
}

addTask(tasks, 'Задача 2');
addTask(tasks, 'Задача 3');
addTask(tasks, 'Задача 4');
console.log(tasks);

delTask(tasks, 'Задача 3');

moveTask(tasks, 'Задача 5');
console.log(tasks);
