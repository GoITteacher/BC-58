import '../css/common.css';
import { refs } from './modules/refs.js';
import { searchHero } from './modules/heroesAPI';
import { randomQuote } from './modules/quotesAPI';
import { getMovies } from './modules/movies';
// =======================================================

refs.form.addEventListener('submit', onSearchHero);

function onSearchHero(evt) {
  evt.preventDefault();
  const query = evt.target.elements.query.value;
  searchHero(query)
    .then(hero => {
      renderHero(hero);
    })
    .catch(err => {
      console.log(err);
    });
}

function templateHero({ name, images, biography }) {
  return `
  <div class="card">
  <div class="card-img-top">
    <img src="${images.sm}" alt="${name}" style="width:160px;height:240px">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${biography.fullName}</h2>
  </div>
</div>
    `;
}

function renderHero(hero) {
  const markup = templateHero(hero);
  refs.cardContainer.innerHTML = markup;
}
// =======================================================

refs.form1.addEventListener('submit', onGetRandomQuote);
function onGetRandomQuote(evt) {
  evt.preventDefault();
  const lang = evt.target.elements.langdata.value;
  randomQuote(lang).then(data => {
    renderQuote(data);
  });
}

function templateQuote({ content, originator, tags }) {
  const tagsMarkup = tags.map(el => `<li>${el}</li>`).join('');

  return `
  <div class="card">
    <div class="card-body">
    <p><q>${content}</q> - <h3>${originator.name}</h3></p>
    <ul>
    ${tagsMarkup}
    </ul>
  </div>
</div>
  `;
}

function renderQuote(quote) {
  const markup = templateQuote(quote);
  refs.cardContainer1.innerHTML = markup;
}
// =======================================================

refs.form2.addEventListener('submit', onSearchMovie);

function onSearchMovie(evt) {
  evt.preventDefault();
  const keyWord = evt.target.elements.query.value;
  getMovies(keyWord).then(movies => {
    renderMovies(movies.results);
  });
}

function templateMovie({
  originalTitleText: { text },
  primaryImage,
  releaseYear: { year },
}) {
  return `<li>
  <div class="card">
  <div class="card-img-top">
    <img src="${primaryImage?.url}" alt="${text}" style="width:160px;height:240px">
  </div>
  <div class="card-body">
    <h2 class="card-title">Назва фільму: ${text}</h2>
  </div>
  <p>Year -  ${year}</p>
</div>
  </li>`;
}

function renderMovies(arr) {
  const markup = arr.map(templateMovie).join('');
  refs.cardContainer2.innerHTML = markup;
}

// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
