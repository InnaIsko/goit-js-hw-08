// При загрузке страницы проверяй состояние хранилища, и если
// там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также
// выводи объект с полями email, message и текущими их значениями
// в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в
// 500 миллисекунд.Для этого добавь в проект и используй
// библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formInput = {};
checkTextArea();

function onInputCheck(event) {
  formInput[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
}

function onSubmitCheck(event) {
  event.preventDefault();

  const formInputCurrent = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(formInputCurrent);
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
formRef.addEventListener('input', throttle(onInputCheck, 500));
formRef.addEventListener('submit', onSubmitCheck);

function checkTextArea() {
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  const inputCurrent = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (inputCurrent) {
    email.value = inputCurrent.email || '';
    message.value = inputCurrent.message || '';
  }
}
