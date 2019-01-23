import axios from 'axios';

export default class Http {
  constructor(config = {}) {
    return axios.create({
      baseURL: config.baseURL || null,
      headers: config.headers || null,
      timeout: 10000,
    });
  }
}
