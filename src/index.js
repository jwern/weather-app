import "./style.scss";
import { getAPIKey } from "./apiKey.js";

const convertTemp = function (temp, unit = "Kelvin") {
  const unitConversion = {
    Celsius: Number(temp) - 273.15,
    Fahrenheit: (Number(temp) * 9) / 5 - 459.67,
    Kelvin: Number(temp),
  };

  let convertedTemp = Math.round(unitConversion[unit]);
  return convertedTemp;
};

const showWeather = function (weather) {
  console.log("Weather", weather);
  console.log(convertTemp(weather.main.temp, "Fahrenheit"));
};

const getWeatherData = async function (location) {
  try {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${getAPIKey()}`,
      {
        mode: "cors",
      }
    );
    const weather = await data.json();
    showWeather(weather);
  } catch (err) {
    console.log("There was an error");
  }
};

// Promise / Then version of async / await function from above
// const getWeatherDataPromiseThen = function (location) {
//   fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${secretKey.getKey()}`,
//     {
//       mode: "cors",
//     }
//   )
//     .then((response) => response.json())
//     .then((jsonData) => showWeather(jsonData))
//     .catch((err) => console.log(err));
// };

getWeatherData("Torl Aviv");
