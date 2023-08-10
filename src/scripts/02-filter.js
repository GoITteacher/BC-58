let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
  { label: 'Vanil' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');

function renderList(list) {
  const markup = list
    .map(el => {
      return `<li>${el.label}</li>`;
    })
    .join('');
  listElem.innerHTML = markup;
}

filterElem.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(e) {
  const userValue = e.target.value.toLowerCase();

  const filteredList = list.filter(({ label }) =>
    label.toLowerCase().includes(userValue),
  );

  renderList(filteredList);
}

// ==================

const formElem = document.querySelector('.js-form');
const copy = _.throttle(onFormSubmit, 300);

formElem.addEventListener('submit', e => {
  e.preventDefault();
  copy(e);
});

function onFormSubmit(e) {
  console.log(e.target.elements.message.value);
}
