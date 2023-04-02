'use strict';

function sumNum(num1, num2) {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}

console.log(sumNum(1, 3, 4, 5));

const sumNum = (num1, num2) => {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
};
