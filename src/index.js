import axios from 'axios';

async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  const res = await fetch(url);
  const pokemonList = await res.json();

  const promises = pokemonList.results.map(pokemon => {
    return fetch(pokemon.url);
  });

  const resultPromises = await Promise.all(promises);

  const promises1 = resultPromises.map(res => res.json());

  const resultPokemons = await Promise.all(promises1);

  return resultPokemons;

  /* fetch(url).then(res => res.json());
  then(pokemonList => {
    console.log(pokemonList);
    const promises = pokemonList.results.map(pokemon => {
      return fetch(pokemon.url);
    });
    return Promise.all(promises);
  })
    .then(resultPromises => {
      console.log(resultPromises);
      const promises = resultPromises.map(res => res.json());
      return Promise.all(promises);
    })
    .then(resultPokemons => {
      console.log(resultPokemons);
    }); */
}

async function main() {
  try {
    const res = await getPokemons();
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  //  getPokemons().then((res)=>{
  //   console.log(res);
  //  }).catch((err)=>{
  //   console.log(err);
  //  });
}

// main();

/* async function foo(){}
const foo1 = async()=>{}
const obj = {
    async foo(){}
}
class User {
    async foo(){}
}

const arr=[1,2,3,3,4]
arr.map(async ()=>{})
*/

// ===============================================

async function getPokemons() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    const random = Math.round(Math.random() * 1000);
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;

    promises.push(fetch(url).then(res => res.json()));

    // const res = await fetch(url);
    // const pokemon = await res.json();
    // console.log(pokemon);

    // fetch(url).then(res => res.json())
    //   .then(pokemon => {
    //     console.log(pokemon);
    //   });
  }

  const result = await Promise.all(promises);
  console.log(result);
}

// getPokemons();

function getBooks() {
  const book = {
    author: 'Test',
    title: 'Test',
    desc: 'Test',
  };

  const url = 'http://localhost:3000/books';
  const options = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(url, options);

  axios.post(url, book).then(res => res.data);
}

getBooks();
