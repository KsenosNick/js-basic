'use strict';

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
};

const carManipulations = {
  addDamage(part, rate) {
    this.damages.push({ part, rate });
    console.log(`Добавить повреждение на ${this.make} ${this.model}`);
  },
};

const addDamageAudi = carManipulations.addDamage.bind(audi);
addDamageAudi('Крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManipulations.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
addDamageAudiRoof(3);
console.log(audi);