import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// setTimeout(() => {
//   console.log('HELLO');
// }, 0);

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

// setTimeout(
//   (x, y) => {
//     console.log(x, y);
//   },
//   5000,
//   'Hello',
//   20,
// );

// setTimeout(() => {
//   console.log('Hello', 2);
// }, 3000);

// setTimeout(() => {
//   console.log('Hello', 3);
// }, 1000);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const id1 = setTimeout(() => {
//   console.log('T1');
// }, 1000);
// const id2 = setTimeout(() => {
//   console.log('t2');
// }, 1000);
// const id3 = setTimeout(() => {
//   console.log('t3');
// }, 1000);

// console.log(id1, id2, id3);
// clearTimeout(id2);
