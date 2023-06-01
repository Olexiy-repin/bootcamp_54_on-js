const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '95632b02f9162f375a368971925f5209';

export const fetchWeatherByCityName = cityName => {
  const searchParams = new URLSearchParams({
    q: cityName,
    units: 'metric',
    appid: API_KEY,
  });

  return fetch(`${BASE_URL}/data/2.5/weather?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
