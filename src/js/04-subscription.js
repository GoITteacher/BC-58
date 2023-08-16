import '../css/common.css';
import { Modal } from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  closeBtn: document.querySelector('button[data-close]'),
};

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new Modal('#subscription-modal');

function openModal() {
  console.log(hasSubscribed);
  if (hasSubscribed || promptCounter === MAX_PROMPT_ATTEMPTS) return;

  setTimeout(() => {
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

openModal();

refs.modal.addEventListener('hide.bs.modal', () => {
  openModal();
});

refs.subscribeBtn.addEventListener('click', () => {
  hasSubscribed = true;
  modal.hide();
});

refs.closeBtn.addEventListener('click', () => {
  modal.hide();
});
