import api from '../../config/api';

const accessToken = localStorage.getItem('access-token');
const client = localStorage.getItem('client');
const uid = localStorage.getItem('uid');

if (accessToken && client && uid) {
  api.setHeader('access-token', accessToken);
  api.setHeader('client', client);
  api.setHeader('uid', uid);
}

export const getBooks = () => api.get('/books');
