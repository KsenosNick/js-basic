'use strict';

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message =
  budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);
