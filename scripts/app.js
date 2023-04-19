'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('input').value = '';
  document.querySelector('.notification').setAttribute('user-id', 1);
  const textString = JSON.stringify({
    text: input,
  });

  localStorage.setItem('text', textString);
}

function inputChanged(e) {
  if (e.key === 'Enter') {
    submitForm();
  }
}

console.log(localStorage.getItem('a'));
