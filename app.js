'use strict';

const wallet = {
  balance: 0,
  operations: [],

  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      sum,
      reason,
    });
    return true;
  },

  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log('Недостаточно баланса');
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      sum: -sum,
      reason,
    });
    return true;
  },

  getOperations: function () {
    return this.operations.length;
  },
};
