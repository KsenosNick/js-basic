'use strict';

const money = 100;
const canBuy = money > 50;

if (canBuy) {
  console.log('Может купить наш продукт');
} else if (money > 5) {
  console.log('Куплен mini продукт');
} else {
  console.log('Не хватает денег:-(');
}

console.log('Итог');
