'use strict';

const user = {
  password: '1234',
};

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

const resetUserPassword = removePassword.bind(user, true);

resetUserPassword();
console.log(user);
