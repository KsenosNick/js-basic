'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('input').value = '';
  // document.querySelector('.notification').classList.add('notification_active');
  document
    .querySelector('.notification')
    .classList.remove('notification_hidden');
  return input;
}

function inputChanged(e) {
  if (e.key === 'Enter') {
    submitForm();
  }
}
