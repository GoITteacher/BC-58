export class BooksAPI {
  #BASE_URL = 'http://localhost:3000';
  #END_POINT = '/books';

  getBooks() {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error get Books');
        }
      })
      .catch(err => {
        console.log(err.message);
        return [];
      });
  }
  createBook(book) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error create Book');
      }
    });
  }
  updateBook({ id, ...book }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options)
      .then(res => res.json())
      .catch();
  }
  resetBook({ id, ...book }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options)
      .then(res => res.json())
      .catch();
  }
  deleteBook(id) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'DELETE',
    };
    return fetch(url, options);
  }
}
