'use strict';

for (let i = 1; i < 5; i++) {
  console.log(`Цикл 1 - ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`Цикл 2 - ${i}`);
  }
}

let i = 1;

while (i < 5) {
  console.log(`Вывод ${i}`);
  i++;
}

const arr = [1, 4, 8, 7];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] > 5) {
    break;
  }
  console.log(arr[index]);
}

i = 0;

while (arr[i] <= 5 && i < arr.length) {
  console.log(arr[i]);
  i++;
}

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 0);
