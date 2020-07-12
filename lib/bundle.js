"use strict";

/* eslint-disable */
// application state
var tabCountries = null;
var tabFavorites = null;
var allCountries = [];
var favCountries = [];
var countCountries = 0;
var countFavorites = 0;
var globalPopulation = 0;
var favoritesPopulation = 0;
var numberFormat = null; // wait DOM load before manipulate it

window.addEventListener('load', function () {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countContries');
  countFavorites = document.querySelector('#countFavorites');
  globalPopulation = document.querySelector('#globalPopulation');
  favoritesPopulation = document.querySelector('#favoritesPopulation');
  numberFormat = Intl.NumberFormat('pt-BR');
  fetchCountries();
});

var fetchCountries = function fetchCountries() {
  console.log('fetching...');
};
