/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

addListenerBtn.addEventListener('click', onAddBtnClick);
removeListenerBtn.addEventListener('click', onRemoveBtnClick);

function onAddBtnClick(evt) {
  targetBtn.addEventListener('click', onTargetBtnClick);
}
function onRemoveBtnClick(evt) {
  targetBtn.removeEventListener('click', onTargetBtnClick);
}

let count = 1;

function onTargetBtnClick(evt) {
  console.log(evt);
  evt.target.classList.toggle('active');
}

/* function handleTargetBtnClick() {
  console.log('TEST');
}

function targetBtnClickHandler() {
  console.log('TEST');
}

function onTargetBtnClick(){

}
 */
