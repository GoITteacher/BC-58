import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    volodkaKey: 'HELLO WORLD',
    myHeaders: 'Hello Headers',
  },
  params: {
    key: 'HELLO',
    login: 'TEST',
  },
});

export class BooksAPI {
  async getBooks() {
    return axios2.get('/books').then(res => res.data);
  }

  async createBook(book) {
    const res = await axios2.post('/books', book);
    return res.data;
  }

  async updateBook({ id, ...book }) {
    const res = await axios2.patch(`/books/${id}`, book);
    return res.data;
  }

  async resetBook({ id, ...book }) {
    const res = await axios.put(`/books/${id}`, book);
    return res.data;
  }

  deleteBook(id) {
    return axios.delete(`/books/${id}`);
  }
}

export class BooksAPIV2 {
  #BASE_URL = 'http://localhost:3000';
  #END_POINT = '/books';

  async getBooks() {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;

    try {
      const res = await fetch(url);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error get Books');
      }
    } catch (err) {
      console.log(err.message);
      return [];
    }
  }
  async createBook(book) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(url, options);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error create Book');
    }
  }
  async updateBook({ id, ...book }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return res.json();
  }
  async resetBook({ id, ...book }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    res.json();
  }
  deleteBook(id) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'DELETE',
    };
    return fetch(url, options);
  }
}
