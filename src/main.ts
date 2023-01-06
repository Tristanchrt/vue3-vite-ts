import axios, { AxiosInstance } from 'axios';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import RestPokemonRepository from './secondary/pokemon/RestPokemon';
import { key, store } from './secondary/store/store';
import './assets/styles/index.css';

const BACKEND_URL: string = 'https://pokeapi.co/api/v2/';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

const pokemonApi = new RestPokemonRepository(axiosInstance);

const app = createApp(App);
app.use(store, key);
app.use(router);
app.provide('pokemonApi', pokemonApi);
app.mount('#app');
