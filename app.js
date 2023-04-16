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

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class=${panelClass}>${panelText}</button>`;

document.querySelector('.test').appendChild(newElement);