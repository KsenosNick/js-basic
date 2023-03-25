'use strict';

const num1 = '9103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56';

const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isNumber(number) {
  number = number.trim();
  if (number.startsWith('+7')) {
    number = number.replace('+7', 8);
  }
  number = number.replace('(', '');
  number = number.replace(')', '');
  number = number.replaceAll(' ', '');
  number = number.replaceAll('-', '');
  if (
    (number.startsWith(89) && !isNaN(number) && number.length === 11) ||
    (number.startsWith(9) && !isNaN(number) && number.length === 10)
  ) {
    console.log('Проверка успешна');
  } else {
    console.log('Неверный формат номера');
  }
}

isNumber(num1);
