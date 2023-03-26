'use strict';

const card = '2342834203458353';

console.log(card.slice(-4).padStart(16, '*'));

let str = 'How are you?';
console.log(str);
console.log((str = str.padStart(1, '%')));
console.log(str);
