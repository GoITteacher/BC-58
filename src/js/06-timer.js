import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

let intervalId = null;
let isActive = false;

refs.startBtn.addEventListener('click', () => {
  if (isActive) return;
  isActive = true;
  const initTime = Date.now();
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - initTime;
    const time = getTimeComponents(diff);
    renderTime(time);
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  if (!isActive) return;
  isActive = false;
  clearInterval(intervalId);
});

function renderTime({ hours, mins, secs }) {
  refs.clockface.innerHTML = `${hours}:${mins}:${secs}`;
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
