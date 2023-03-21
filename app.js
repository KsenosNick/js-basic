'use strict';

const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, value) => (acc += value), 0) / arr.length;

console.log(avg);
