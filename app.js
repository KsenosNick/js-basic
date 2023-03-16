'use strict';

function creditCalc(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuyMacBook(age, hasJob, money, productPrice) {
  return money + creditCalc(age, hasJob) >= productPrice;
}

console.log(canBuyMacBook(25, true, 1550, 2000));
