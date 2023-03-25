'use strict';

let str = 'Вася Пупкина';

console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));

console.log(new String('Вася Пупкин').includes('а'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф'));
console.log(str);

str = 'Вася Пупкина';

console.log(str.replace('а', 'и'));
console.log(str.replaceAll('а', 'и'));

console.log(str.replace(/а/, 'и'));
console.log(str.replace(/а/g, 'и'));

str = ' Вася Пупкин    \n'

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());