/* 
element.querySelector();
element.querySelectorAll();
document.getElementById
element.getElementsByClassName
document.getElementsByName
element.getElementsByTagName
*/

const myElem = document.querySelector('ul');
// const myElem1 = document.querySelector('#findItem234234234234234234234234234');
console.log(myElem);
// ======

// const liElems = myElem.querySelectorAll(':scope > li');
// console.log(liElems);

const liElem = document.getElementById('findItem');
console.log(liElem);

const liElems1 = document.getElementsByClassName('site_item');
console.log(liElems1);

const liElem2 = document.getElementsByName('testname');
console.log(liElem2);

// liElem.getElement;
