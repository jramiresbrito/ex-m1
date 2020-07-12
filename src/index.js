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

  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  globalPopulation = document.querySelector('#globalPopulation');
  favoritesPopulation = document.querySelector('#favoritesPopulation');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

const fetchCountries = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  allCountries = await res.json();
  allCountries = allCountries.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });

  render();
};

const render = () => {
  renderCountryList();
  renderFavorites();
  renderSummary();
  renderCountryButtons();
};

const renderCountryList = () => {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const countryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}" />
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${population}</li>
          </ul>
        </div>
      </div>
    `;

    countriesHTML += countryHTML;
  });

  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
};

const renderFavorites = () => {
  let favoritesHTML = '<div>';

  favCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const favCountryHTML = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn red darken-4">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}" />
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${population}</li>
          </ul>
        </div>
      </div>
    `;

    favoritesHTML += favCountryHTML;
  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
};

const renderSummary = () => {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favCountries.length;

  const totalPop = allCountries.reduce((acc, curr) => acc + curr.population, 0);

  globalPopulation.textContent = totalPop;

  const favPop = favCountries.reduce((acc, curr) => acc + curr.population, 0);
  favoritesPopulation.textContent = favPop;
};

const renderCountryButtons = () => {
  const allCountriesButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favCountriesButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  allCountriesButtons.forEach((btn) => {
    btn.addEventListener('click', () => addToFavorites(btn.id));
  });

  favCountriesButtons.forEach((btn) => {
    btn.addEventListener('click', () => removeFromFavorites(btn.id));
  });
};

const addToFavorites = (id) => {
  const countryToAdd = allCountries.find((btn) => btn.id === id);

  favCountries = [...favCountries, countryToAdd];

  favCountries.sort((a, b) => a.name.localeCompare(b.name));

  allCountries = allCountries.filter((country) => country.id !== id);

  render();
};

const removeFromFavorites = (id) => {
  const countryToRemove = favCountries.find((btn) => btn.id === id);

  allCountries = [...allCountries, countryToRemove];

  allCountries.sort((a, b) => a.name.localeCompare(b.name));

  favCountries = favCountries.filter((country) => country.id !== id);

  render();
};
