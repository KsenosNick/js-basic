'use strict';
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calcWeight(present) {
  return present * KG_IN_USD;
}

function calcDist(distance) {
  return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
  const price1 = calcWeight(present1);
  const price2 = calcWeight(present2);
  const distancePrice = calcDist(distance);
  return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 10));
