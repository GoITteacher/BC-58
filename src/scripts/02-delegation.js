let refs = {
  firstBoxElem: document.querySelector('.js-box-0'),
};

refs.firstBoxElem.addEventListener('click', onBtnListClick);

/* function onBtnListClick(evt) {
  if (evt.target === evt.currentTarget) return;
  // console.log(evt.target.nodeName);
  const btnElem = evt.target.closest('li').lastElementChild;
  console.log(btnElem.textContent.trim());
}
 */

/* function onBtnListClick(evt) {
  if (evt.target.nodeName !== 'BUTTON' && evt.target.nodeName !== 'SPAN')
    return;

  console.log(evt.target.nodeName);
} */

function onBtnListClick(evt) {
  const myTarget = evt.target.closest('.js-delegation-btn');

  if (!myTarget) return;

  console.log(evt.target.nodeName);
}
