export const createWeatherCard = weatherInfo => {
  return `
    <div class="weather__card">
      <h2 class="city-name">${weatherInfo.name}</h2>
      <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${weatherInfo.main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${weatherInfo.main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${weatherInfo.sys.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${weatherInfo.sys.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${weatherInfo.clouds.all}%</p>
        </li>
      </ul>
    </div>
  `;
};
