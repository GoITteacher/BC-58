const BASE_URL = 'https://moviesdatabase.p.rapidapi.com';
const END_POINT = '/titles/search/keyword/';

export function getMovies(keyWord) {
  const url = `${BASE_URL}${END_POINT}${keyWord}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
