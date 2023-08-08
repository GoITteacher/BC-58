/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

/* refs.input.addEventListener('focus', evt => {
  console.log('FOCUS');
  evt.target.placeholder = '';
  evt.target.style.border = 'none';
}); */

/* refs.input.addEventListener('blur', evt => {
  console.log('BLUR');
  evt.target.placeholder = 'HELLO';
  if (evt.target.value.length > 6) {
    evt.target.style.border = '1px solid green';
  } else {
    evt.target.style.border = '1px solid red';
  }
}); */

// ===============================

// refs.input.addEventListener('input', evt => {
//   const userName = evt.target.value;
//   refs.nameLabel.textContent = userName || 'Anonym';
// });

// refs.licenseCheckbox.addEventListener('change', evt => {
//   const checked = evt.target.checked;
//   refs.btn.disabled = !checked;
// });

// refs.btn.addEventListener('click', () => {
//   const userName = refs.nameLabel.textContent;
//   console.log(`Hello ${userName}`);
// });

// ==================
// refs.input.addEventListener('keydown', evt => {
//   evt.preventDefault();
//   console.log(evt.key);
// });
