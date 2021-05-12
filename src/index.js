import "./style.scss";
import { secretKey } from "./apiKey.js";

const convertTemp = function (temp, unit = "Kelvin") {
  const unitConversion = {
    Celsius: Number(temp) - 273.15,
    Fahrenheit: (Number(temp) * 9) / 5 - 459.67,
    Kelvin: Number(temp),
  };

  let convertedTemp = Math.round(unitConversion[unit]);
  return convertedTemp;
};

const translateWeather = function (weather, unit) {
  const weatherType = weather.weather[0].main;
  const weatherTemp = convertTemp(weather.main.temp, unit);
  const weatherLocation = weather.name;
  const weatherIcon = weather.weather[0].icon;

  return { weatherType, weatherTemp, weatherLocation, weatherIcon };
};

const displayWeather = function (weatherObject) {
  const tempDiv = document.getElementById("show-temp");
  const typeDiv = document.getElementById("show-description");
  const cityDiv = document.getElementById("show-city-name");
  const iconDiv = document.getElementById("show-icon");

  tempDiv.innerHTML = `${weatherObject.weatherTemp}&#730;`;
  typeDiv.innerText = weatherObject.weatherType;
  cityDiv.innerText = weatherObject.weatherLocation;
  iconDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherObject.weatherIcon}@2x.png">`;
};

const displayError = function (error) {
  let errorDiv = document.getElementById("error-message");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.id = "error-message";
    let showWeatherDiv = document.getElementById("show-weather-banner");
    showWeatherDiv.appendChild(errorDiv);
  }
  errorDiv.innerText = `There was an error: ${error.statusText}`;
};

const fetchWeatherData = function (location) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${secretKey}`,
    {
      mode: "cors",
    }
  )
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw result;
      }
    })
    .then((response) => response)
    .catch((err) => displayError(err));
};

const fetchAndDisplayWeather = async function (location, unit) {
  let weather = await fetchWeatherData(location);
  if (weather) {
    console.log(weather.weather[0].icon);
    const weatherData = translateWeather(weather, unit);
    displayWeather(weatherData);
  }
};

const getFormData = function (e) {
  e.preventDefault();

  let formInputs = Object.fromEntries(new FormData(e.target).entries());
  if (formInputs.city) {
    fetchAndDisplayWeather(formInputs.city, formInputs.tempUnit);
  }
};

const weatherForm = document.getElementById("weather-form");
weatherForm.addEventListener("submit", getFormData);

window.addEventListener("load", (e) =>
  fetchAndDisplayWeather("San Francisco", "Fahrenheit")
);
