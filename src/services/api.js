import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const apiRest = axios.create({
  baseURL: 'https://prontolight.sinnapse.com.br/wp-json/wp/v2/posts',
});

export default api;