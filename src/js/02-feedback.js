/* import colors from './colors.json';
const refs = {
  formElem: document.querySelector('.js-feedback-form'),
};

refs.formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const data = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const jsonData = JSON.stringify(data);
  localStorage.setItem('myObj', jsonData);
}

function onLoadPage() {
  const data = localStorage.getItem('myObj');
  //   console.log(data);
  const parseData = JSON.parse(data);
  console.log(parseData);
  refs.formElem.elements.name.value = parseData.name;
  refs.formElem.elements.message.value = parseData.message;
}
onLoadPage();
 */

// ==================================================
/* 
import { saveToLS, loadFromLS } from './helpers';
const refs = {
  formElem: document.querySelector('.js-feedback-form'),
};

let obj = {};

refs.formElem.addEventListener('input', onFormInput);

function onFormInput(e) {
  const value = e.target.value;
  const key = e.target.name;
  obj[key] = value;
  saveToLS('formData', obj);
}

function onPageLoad() {
  const myData = loadFromLS('formData') || {};
  obj = myData;
  refs.formElem.elements.name.value = myData?.name || '';
  refs.formElem.elements.message.value = myData?.message || '';
}

onPageLoad();

refs.formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(obj);
  obj = {};
  e.target.reset();
  localStorage.removeItem('formData');
}
 */
