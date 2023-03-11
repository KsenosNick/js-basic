'use strict';
/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).

К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.

Выведете в консоль:

Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?
*/

const rate = 80;
const workingDay = 5;
const workingWeek = 5;
const leadTime = 40;
const daysBeforeDeparture = 11;

console.log('Смогу ли выполнить работу? ' + ((daysBeforeDeparture - 2) * workingWeek > leadTime));
console.log('Плата за заказ: ' + rate * leadTime);
