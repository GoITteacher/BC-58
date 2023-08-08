/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
}

/* function onFormSubmit(evt) {
  evt.preventDefault();

  const email1 = evt.target.elements.email1.value;
  const email2 = evt.target.elements.email2.value;
  const email3 = evt.target.elements.email3.value;
  const password = evt.target.elements.password.value;
  const subscription = evt.target.elements.subscription.value;
  const subscription = evt.target.elements.subscription.value;

  const data = {
    email1,
    email2,
    email3,
    password,
    subscription,
  };
  console.log(data);
} */
