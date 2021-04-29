import axios from 'axios';
import queryString from 'query-string';

export default class Client {
  constructor({ token }) {
    this._token = token;
  }

  _baseUrl = 'http://18.139.50.74:8080'

  _getConfig(method, data) {
    const config = {
      method,
      headers: {}
    };

    if (this._token) {
      config.headers.Authorization = `Bearer ${this._token}`
    }

    if (data) {
      config.data = data;
    }

    return config;
  }

  //FIXME catch errors

  get(endpoint, filter) {
    return axios(
      `${this._baseUrl}${endpoint}?${queryString.stringify(filter)}`,
      this._getConfig('get')
      ) 
      .catch((err) => err)
  }

  post(endpoint, data) {
    return axios(this._baseUrl + endpoint, this._getConfig('post', data))
    .catch((err) => err)
  }

  delete(endpoint) {
    return axios(this._baseUrl + endpoint, this._getConfig('delete'))
    .catch((err) => err)
  }
}