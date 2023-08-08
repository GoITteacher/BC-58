/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// document.addEventListener('keypress', evt => {
//   console.log('KEY PRESS', evt);
// const { key, code, keyCode } = evt;
// console.log(key, code, keyCode);
// });

// document.addEventListener('keypress', evt => {
//   if (evt.ctrlKey) {
//     refs.output.textContent = `Ctrl + ${evt.key}`;
//   }
//   if (evt.shiftKey) {
//     refs.output.textContent = `Shift + ${evt.key}`;
//   }
// });

// document.addEventListener('keyup', evt => {
//   refs.output.textContent = '';
// });
