import { create } from 'apisauce';

import { API } from '~constants/api';

const api = create({
  baseURL: API.url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default api;
