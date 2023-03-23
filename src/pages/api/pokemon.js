// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default api;