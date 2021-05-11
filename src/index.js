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

  return { weatherType, weatherTemp };
};

const displayWeather = function (weatherObject) {
  const tempDiv = document.getElementById("show-temp");
  const typeDiv = document.getElementById("show-description");

  tempDiv.innerText = weatherObject.weatherTemp;
  typeDiv.innerText = weatherObject.weatherType;
};

const fetchWeatherData = function (location) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${secretKey}`,
    {
      mode: "cors",
    }
  )
    .then((result) => result.json())
    .then((response) => response)
    .catch((err) => console.log("The error", err));
};

const fetchAndDisplayWeather = async function (location, unit) {
  let weather = await fetchWeatherData(location);
  const weatherData = translateWeather(weather, unit);

  displayWeather(weatherData);
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
