import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const API_KEY = '4fac81442e49a0849060733bebb2ac8a'

export { Api, API_KEY };