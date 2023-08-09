let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  btnElem: document.querySelector('.js-btn'),
};

refs.firstTagsList.addEventListener('click', onCheckboxListClick);
refs.secondTagsList.addEventListener('click', onRadioListClick);
refs.btnElem.addEventListener('click', sendData);

function onCheckboxListClick(evt) {
  if (evt.target === evt.currentTarget) return;
  const liElem = evt.target.closest('li');
  liElem.classList.toggle('active');
}

function onRadioListClick(evt) {
  if (evt.target === evt.currentTarget) return;

  const oldElem = refs.secondTagsList.querySelector('.active');
  oldElem?.classList?.remove('active');

  const liElem = evt.target.closest('li');
  liElem.classList.toggle('active');
}

function sendData() {
  const checkboxElems = refs.firstTagsList.querySelectorAll('.active');
  const radioActive = refs.secondTagsList.querySelector('.active');

  const tagList = [...checkboxElems].map(el => el.textContent.trim());
  console.log(tagList);
  console.log(radioActive?.textContent.trim());
}
