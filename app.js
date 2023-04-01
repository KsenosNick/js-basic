'use strict';

let successMesage = 'Успех';

const user = {
  name: 'Вася',
  roles: [],
};

function addRole(user, role) {
  if (role === 'admin') {
    const message = 'Ошибка';
    console.log(message);
    return user;
  }
  user.roles.push(role);
  let successMesage = 'Ура!';
  console.log(successMesage);

  function logRoles() {
    console.log(user.roles);
  }
  logRoles();
  return user;
}

console.log(addRole(user, 'developer'));
console.log(successMesage);
