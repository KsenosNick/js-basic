'use strict';

const arr = ['!', 'JS', 'люблю', 'Я'];

function invertArr(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(' '));
}

invertArr(arr);
