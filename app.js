'use strict';

const arr = [2, 4, 3, 10, 20];

function some(arr, item) {
  if (arr.find((el) => el === item)) {
    return true;
  } else {
    return false;
  }
}

console.log(some(arr, 6));
