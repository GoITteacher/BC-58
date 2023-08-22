import { NewsAPI } from './modules/newsApi';

const newsApi = new NewsAPI();
let maxPage = 1;
const refs = {
  targetElem: document.querySelector('.js-target'),
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
};

// =====================================
refs.formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  newsApi.query = query;
  newsApi.page = 1;
  newsApi.getArticles().then(data => {
    refs.articleListElem.innerHTML = '';
    maxPage = Math.ceil(data.totalResults / newsApi.pageSize);
    renderArticles(data.articles);
    observer.observe(refs.targetElem);
    updateStatusObserver();
  });
}

function loadMore() {
  newsApi.page += 1;
  newsApi.getArticles().then(data => {
    renderArticles(data.articles);
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
    updateStatusObserver();
  });
}
// =====================================
function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Hello');
      loadMore();
    }
  });
}
const observer = new IntersectionObserver(callback);
// ======================================

function updateStatusObserver() {
  if (newsApi.page === maxPage) {
    observer.unobserve(refs.targetElem);
  }
}

function templateArticle({
  author,
  title,
  description,
  urlToImage,
  publishedAt,
}) {
  return `
    <li class="card news-card">
          <img loading="lazy"
            class="news-image"
            src="${urlToImage}"
            alt="${title}"
          />
          <h3 class="card-title">
            ${title}
          </h3>
          <p class="card-desc">
          ${description}
          </p>
          <div class="card-footer">
            <span>${author}</span>
            <span>${publishedAt}</span>
          </div>
        </li>`;
}

function renderArticles(articles) {
  const markup = articles.map(templateArticle).join('');
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
