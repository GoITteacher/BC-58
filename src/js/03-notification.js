import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */

// function showNotification() {
//   console.log('show');
//   refs.notification.classList.add('is-visible');
// }

// function hideNotification() {
//   console.log('hide');
//   refs.notification.classList.remove('is-visible');
// }

// setTimeout(() => {
//   showNotification();
// }, 5000);

// const id = setTimeout(() => {
//   hideNotification();
// }, 8000);

// refs.notification.addEventListener('click', () => {
//   clearTimeout(id);
//   hideNotification();
// });
