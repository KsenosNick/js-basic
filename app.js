'use strict';

const transcationsInUSD = [10, -7, 50, -10, 100];

/* const transactionInRubles = [];
for (const transaction of transcationsInUSD) {
    transactionInRubles.push(transaction * 60);
} */

const transactionInRubles = transcationsInUSD.map((transaction, i) => {
  console.log(i);
  return transaction * 60;
});

console.log(transcationsInUSD);
console.log(transactionInRubles);
