'use strict';

const startBalance = 100;
const operations = [1000, -700, 300, -500, 10000];

function getBalance(startBalance, operations) {
  let balance = startBalance;
  for (const i of operations) {
    balance += i;
  }
  return balance;
}

function checkBalance(startBalance, operations) {
  let balance = startBalance;
  for (const i of operations) {
    if (balance < 0) {
      return false;
    }
    balance += i;
  }
  return true;
}

function averageOperations(operations) {
  let incomeSum = 0;
  let incomeCount = 0;
  let consumptionSum = 0;
  let consumptionCount = 0;

  for (const i of operations) {
    if (i > 0) {
      incomeSum += i;
      incomeCount++;
    } else {
      consumptionSum += i;
      consumptionCount++;
    }
  }

  return [incomeSum / incomeCount, consumptionSum / consumptionCount];
}
