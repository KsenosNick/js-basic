'use strict';

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((good) => good.id === id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood) {
      console.log(`Товар id = ${good.id} уже есть`);
      return;
    }
    this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, good) => {
      return (acc += good.weight?.kg ? good.weight.kg : 0);
    }, 0);
  },
};

/* Товары */

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford',
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: 'red',
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(paper);

console.log(warehouse);

// console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());
// console.log();
