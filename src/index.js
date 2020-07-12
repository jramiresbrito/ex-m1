/* eslint-disable */

// application state
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favCountries = [];

let countCountries = 0;
let countFavorites = 0;

let globalPopulation = 0;
let favoritesPopulation = 0;

let numberFormat = null;

// wait DOM load before manipulate it
window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');

  countCountries = document.querySelector('#countContries');
  countFavorites = document.querySelector('#countFavorites');

  globalPopulation = document.querySelector('#globalPopulation');
  favoritesPopulation = document.querySelector('#favoritesPopulation');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

const fetchCountries = () => {
  console.log('fetching...');
};
