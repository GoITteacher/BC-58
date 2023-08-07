let myBtn = document.querySelector('#testButton');
// let listItem = document.querySelector('.js-list');
myBtn.addEventListener('click', onClick);
/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

/* 
Властивість style
*/

const ulElem = document.querySelector('.js-list');
const liElem = ulElem.querySelector('li');
// console.log(liElem.classList.contains('bold'));
// liElem.classList.add('upper', 'italic');
// liElem.classList.remove('blue', 'bold');
// liElem.classList.toggle('upper');
//   liElem.classList.replace('blue', 'tomato');
liElem.style.backgroundColor = 'grey';
liElem.style.position = 'fixed';
function onClick() {
  //   liElem.style.display = 'flex';
  const random = Math.round(Math.random() * 1000);
  liElem.style.left = 20;
}
