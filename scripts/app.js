'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  content: {
    days: document.querySelector('.days'),
    day: document.querySelector('.habbit__day'),
    comment: document.querySelector('.habbit__comment'),
  },
};

/* utils */
function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */
function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      const element = document.createElement('button');
      element.setAttribute('menu-habbit-id', habbit.id);
      element.classList.add('menu__item');
      element.addEventListener('click', () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add('menu__item_active');
      }
      page.menu.appendChild(element);
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add('menu__item_active');
    } else {
      existed.classList.remove('menu__item_active');
    }
  }
}

function rerenderHead(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerText = progress.toFixed(0);
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function rerenderContent(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  const days = activeHabbit.days;
  console.log(days);
  page.content.days.innerHTML = '';

  days.forEach(() => {
    const habbit = document.createElement('div');
    habbit.classList.add('habbit');
    page.content.days.appendChild(habbit);
  });

  const habbits = document.querySelectorAll('.habbit');

  for (let i = 0; i < habbits.length; i++) {
    const habbitDay = document.createElement('div');
    const habbitComment = document.createElement('habbit__comment');
    const button = document.createElement('button');
    habbitDay.classList.add('habbit__day');
    habbitComment.classList.add('habbit__comment');
    button.classList.add('habbit__delete');
    habbitDay.innerText = `День ${i + 1}`;
    habbitComment.innerText = days[i].comment;
    button.innerHTML = `<img src="./images/delete.svg" alt="${habbits[i].name}"  alt="Удалить день" />`;
    habbits[i].appendChild(habbitDay);
    habbits[i].appendChild(habbitComment);
    habbits[i].appendChild(button);
  }

  const lastHabbit = document.createElement('div');
  const lastHabbitDay = document.createElement('div');
  const habbitForm = document.createElement('form');
  const inputIcon = document.createElement('image');
  const input = document.createElement('input');
  const habbitFormButton = document.createElement('button');

  lastHabbit.classList.add('habbit');
  lastHabbitDay.classList.add('habbit__day');
  habbitForm.classList.add('habbit__form');
  inputIcon.classList.add('input__icon');
  input.classList.add('input_icon');
  habbitFormButton.classList.add('button');

  inputIcon.setAttribute('src', './images/comment.svg');
  inputIcon.setAttribute('alt', 'Иконка комментацрия');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Комментарий');

  lastHabbitDay.innerText = `День ${habbits.length + 1}`;
  habbitFormButton.innerText = 'Готово';

  page.content.days.appendChild(lastHabbit);

  habbitForm.appendChild(inputIcon);
  habbitForm.appendChild(input);
  habbitForm.appendChild(habbitFormButton);

  lastHabbit.appendChild(lastHabbitDay);
  lastHabbit.appendChild(habbitForm);
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}

/* init */
(() => {
  loadData();
  rerender(habbits[0].id);
})();
