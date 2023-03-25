'use strict';

const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(new Array(1, 2, 3, 4, 5));

const arr2 = new Array(5);
console.log(arr2);

arr2.fill(1, 0, 3);
console.log(arr2);
arr2.fill(2, 3, 5);
console.log(arr2);

const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr3);

let res = arr.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res);