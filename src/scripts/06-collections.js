let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/

// console.log(list.textContent);
// console.log(list.innerHTML);
// console.log(list.innerHTML);
// list.textContent = '<h1>Hello World</h1>';
// list.innerHTML += '<li>1</li><li>2</li><li>3</li><li>4</li>';
// ==================================
const markup = `<li>Hello 1</li>
  <li>Hello 2</li>
  <li>Hello 3</li>
  <li>Hello 4</li>
  `;
list.insertAdjacentHTML('afterbegin', markup);
