'use strict';

const userData = ['Николая', 38, 'Выкса'];

function getData() {
  return ['Николая', 38, 'Выкса'];
}

// const userName = [0];
// const age = getData()[1];
// const city = getData()[2];

const [userName, _, city] = getData();

console.log(userName, city);
