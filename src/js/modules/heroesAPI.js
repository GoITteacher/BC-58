const BASEURL = 'https://superhero-search.p.rapidapi.com/api/';

export function searchHero(heroName) {
  const PARAMS = new URLSearchParams({
    hero: heroName,
  });

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  const url = `${BASEURL}?${PARAMS}`;
  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('err');
    }
  });
}
