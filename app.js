'use strict';

const depositAmount = 12000;
const depositRate = 0.07;
const depositeTerm = 2;
const purchasePrice = 13500;

const result = depositAmount * (1 + depositRate / 12) ** (depositeTerm * 12);

if (result > purchasePrice) {
  console.log(`Всего накоплено ${result} $. Покупка возможна. Остаток на счёте - ${result - purchasePrice} $`);
} else {
  console.log('Денег недостаточно');
}
