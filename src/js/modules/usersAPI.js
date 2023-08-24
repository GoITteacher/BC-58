export class UsersAPI {
  static #BASE_URL = 'http://localhost:3000';
  static #END_POINT = '/users';
  static async getUsers() {
    const url = `${UsersAPI.#BASE_URL}${UsersAPI.#END_POINT}`;
    const res = await fetch(url);
    return res.json();
  }
  static async createUser(user) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(url, options);
    return res.json();
  }
  static async updateUser({ id, ...user }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    return res.json();
  }
  static async resetUser({ id, ...user }) {
    const url = `${this.#BASE_URL}${this.#END_POINT}/${id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);

    return res.json();
  }
  static deleteUser(id) {}
}

UsersAPI.getUsers();
