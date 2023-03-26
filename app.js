'use strict';

const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,

  getFullName: function () {
    return this.name + ' ' + this.surname;
  },
};

console.log(user.getFullName());
