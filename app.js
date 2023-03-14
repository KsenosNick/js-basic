'use strict';

function caAccessWebsite(age) {
  if (age < 18) {
    return false;
  }
  return true;
}
console.log(caAccessWebsite(19));

const canAccessWebSite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccessWebSite2(19));