/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');
const children = boxRef.firstElementChild;

// boxRef.addEventListener('mouseenter', evt => {
//   evt.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', evt => {
//   evt.target.classList.remove('box--active');
// });

// boxRef.addEventListener('mouseover', evt => {
//   evt.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseout', evt => {
//   evt.target.classList.remove('box--active');
// });

// ===================================

boxRef.addEventListener('mousemove', evt => {
  const { x, y } = evt;
  children.style.left = `${x - 50}px`;
  children.style.top = `${y - 50}px`;

  console.log(`X - ${x}\tY - ${y}`);
});
