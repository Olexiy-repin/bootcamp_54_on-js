// https://openweathermap.org/current
import { fetchWeatherByCityName } from './weatherApi';
import { createWeatherCard } from './weather-card';

const searchFormEl = document.querySelector('.js-search-form');
const weatherCardEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
    2,
    '0'
  )}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const city = event.target.elements.user_city.value;

  fetchWeatherByCityName(city)
    .then(data => {
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);

      weatherCardEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Інформації по цьому місту не має!');
      }
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
