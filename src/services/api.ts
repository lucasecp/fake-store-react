import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/', // Substitua pela sua URL da API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
