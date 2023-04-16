'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('input').value = '';
  // document.querySelector('.notification').classList.add('notification_active');
  // document
  //   .querySelector('.notification')
  //   .classList.remove('notification_hidden');
  // return input;
  console.log(document.querySelector('.notification').getAttribute('class'));
  // document.querySelector('.notification').setAttribute('class', 'notification'); - НЕ РЕКОМЕНДУЕТСЯ
  document.querySelector('.notification').setAttribute('user-id', 1);
  console.log(
    Number(document.querySelector('.notification').getAttribute('user-id'))
  );
}

function inputChanged(e) {
  if (e.key === 'Enter') {
    submitForm();
  }
}

localStorage.setItem('token', 'vjnrvzr');
localStorage.setItem('token1', 1);
localStorage.setItem('token2', true);

console.log(localStorage.getItem('token1'));
localStorage.removeItem('token2');
localStorage.clear();