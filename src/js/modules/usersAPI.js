export class UsersAPI {
  static #BASE_URL = 'http://localhost:3000';
  static #END_POINT = '/users';
  static getUsers() {
    const url = `${UsersAPI.#BASE_URL}${UsersAPI.#END_POINT}`;
    return fetch(url).then(res => res.json());
  }
  static createUser(user) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(url, options).then(res => res.json());
  }
  static updateUser({ id, ...user }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options).then(res => res.json());
  }
  static resetUser({ id, ...user }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(url, options).then(res => res.json());
  }
  static deleteUser(id) {}
}

UsersAPI.getUsers();
