'use strict';

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const deltaPositive = prices
  .filter((pricesEl) => {
    return pricesEl[1] > pricesEl[0];
  })
  .map((pricesEl) => pricesEl[1] - pricesEl[0]);

console.log(deltaPositive);
