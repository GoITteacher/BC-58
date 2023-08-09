let colorPalette = [];
const LENGTH = 10;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRandomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();

//=====================================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};
//=====================================================

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  renderColors(colorPalette);
});

refs.itemList.addEventListener('click', evt => {
  if (!evt.target.classList.contains('color-body')) return;
  refs.modalElement.style.backgroundColor = evt.target.style.backgroundColor;
  showModal();
});

refs.backdropElem.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) hideModal();
});

function onModalKeyDown(evt) {
  console.log(evt.key);
  if (evt.key !== 'Escape') return;
  hideModal();
}

//=====================================================
function colorTemplate({ hex, rgb }) {
  return `<li class="color-item">
  <button class="color-body" style="background-color: ${hex}"></button>
  <div class="color-footer">
    <div>HEX: ${hex}</div>
    <div>RGB: ${rgb}</div>
    <div></div>
  </div>
</li>`;
}

function renderColors(colors) {
  const markup = colors.map(colorTemplate).join('');
  refs.itemList.innerHTML = markup;
}

renderColors(colorPalette);

//=====================================================
function showModal() {
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onModalKeyDown);
}

function hideModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onModalKeyDown);
}
//=====================================================
