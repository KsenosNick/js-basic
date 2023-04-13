'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('input').value = '';
  return input;
}

function inputChanged(e) {
  if (e.key === 'Enter') {
    submitForm();
  }
}
