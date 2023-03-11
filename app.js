'use strict';

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price;
const template2 = `${author} \nзаказал ${projectName} \nпо цене ${price}`;

console.log(template);
console.log(template2);