'use strict';

function logName(name, surname) {
  console.log(`Моё имя ${name} ${surname}`);
}

logName('Николай', 'Малютин');

function countDepositeSum(depositInUSD, month, rate) {
  return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositeSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositeSum(1000, 48, 0.1);
console.log(example2);
