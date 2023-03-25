'use strict';

const userName = 'Вася Пупкина';

console.log(userName[0]);
console.log(userName[1]);
console.log(userName[2]);

console.log(userName.charAt(3));

console.log(userName.length);
console.log(userName.indexOf('а'));
console.log(userName.lastIndexOf('а'));
console.log(userName.lastIndexOf('А'));
console.log(userName.includes('П'));
console.log(userName.includes('eП'));

console.log(userName.slice(4));

console.log(userName.slice(4, 8));
