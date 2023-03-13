'use strict';

const balance = 200;
const bonusBalance = 80;
const isBanned = false;
const isExist = true;
const isSelling = true;

const canBuy =
  (balance > 1000 || bonusBalance > 100) && !isBanned && isExist && isSelling;

console.log(canBuy);