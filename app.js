'use strict';

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const [one, two, ...others] = data;
console.log(one, two, ...others);
