let myBtn = document.querySelector('#testButton');
let list = document.querySelector('.usernames');

/* 
Створення
document.createElement(tagName);
*/

// const arr = [];
// for (let i = 1; i < 10; i++) {
//   const myLi = document.createElement('li');
//   myLi.style.width = `${10 * i}px`;
//   myLi.style.height = `${10 * i}px`;
//   myLi.style.border = '1px solid black';
//   arr.push(myLi);
// }

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

// list.append(...arr);
// list.prepend(...arr);
// list.before(...arr);
// list.after(...arr);

/* 
Видалення
elem.remove();
*/

list.children[0].remove();
list.lastElementChild.remove();
