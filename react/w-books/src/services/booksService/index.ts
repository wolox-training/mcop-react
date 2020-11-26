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

export const getBookById = async (id: string) => {
  const data: any = await (await api.get(`/books/${id}`)).data;
  return data;
};
