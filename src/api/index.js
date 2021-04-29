import Client from './client';
// import cookie from '../utils/cookie';

export default class Api {
  constructor(options) {
    const token = options?.token;
    // const token = cookie.get('token')
    this._client = new Client({ token })
  }

  user = {
    login: ({ username, password }) => {
      return this._client.post('/login', {
        username,
        password
      })
    }
  }
}