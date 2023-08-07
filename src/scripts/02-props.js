let myBtn = document.querySelector('#testButton');
myBtn.addEventListener('click', onBtnClick);

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

function onBtnClick() {
  const myImg = document.querySelectorAll('img')[1];
  console.log(myImg.dataset.userName);
  // console.log(myImg.hasAttribute('hello'));
  // const imgUrl = myImg.getAttribute('alt');
  // myImg.setAttribute(
  //   'src',
  //   'https://source.unsplash.com/100x100/?random=99&eat,bread,dish,meet,egg',
  // );

  // myImg.removeAttribute('alt');
  // myImg.setAttribute('test', 'Hello World');
  // console.log(myImg.attributes[0]);
  // console.log(imgUrl);
}
