const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

// function onDocumentMouseMove() {
//   countMouseEvent += 1;
//   countMouseEventElement.textContent = countMouseEvent;
// }
// document.addEventListener(
//   'mousemove',
//   _.throttle(onDocumentMouseMove, 3000, {
//     leading: true,
//     trailing: false,
//   }),
// );

// ==============

// inputElement.addEventListener(
//   'input',
//   _.debounce(onInputChange, 300, {
//     leading: true,
//     trailing: true,
//   }),
// );

// function onInputChange(e) {
//   outputElem.textContent = e.target.value;
// }
