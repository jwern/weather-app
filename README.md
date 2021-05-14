# README

# Project: Weather App

This is my solution to The Odin Project's [Weather App project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/weather-app). The primary focus of this project was to practice using an API to fetch external data, as well as promises to manage asynchronous code.

## Project Post-Mortem

Compared to some past Odin projects that required heavy DOM manipulation and longterm data management, this weather app is pretty simple. Its biggest complexity is in asynchronously fetching external data from OpenWeather. The layout and amount of actual on-site elements are fairly minimal: it features a form that lets users input a city and temperature unit type and an area to display some of the data retrieved.

## Challenges

The biggest challenge of this project was wrapping my head around promises & `async` / `await`. I spent two full days re-learning the concepts around promises after initially writing my `fetch()` call: even though I had the function "working" initially, I knew I didn't truly understand _why_ it was working. Detouring to devote this additional time to async was initially demotivating but ended up being extremely valuable: I certainly have more to learn in this area, but it's no longer a complete enigma. The hardest part of promises to understand was their return value, and when and _where_ it is available. Having access to a promise's return **inside** of `.then` -- or **inside** an `async` function after `await` -- wasn't initially obvious, and I kept trying to figure out why I couldn't just do something like `Promise.value` once a promise had been returned.

## Screenshots

![Desktop view screenshot](/screenshots/screenshot_desktop.png)
![Mobile view screenshot](/screenshots/screenshot_mobile.png)

## Getting Started

Because this project uses an API key, the repo is not immediately usable in its current state. In order to run it after cloning:

Install dependencies (webpack) with:

```
npm install
```

If you don't have an OpenWeather API key, go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free key.

In this project's src/ folder, create a JavaScript file named "apiKey.js".

Paste the key you got from OpenWeather into "src/apiKey.js" and assign it to the variable "secretKey," then export it. In the below example, your secret key is "123456":

```
const secretKey = "123456";

export { secretKey };
```

Feel free to rename this file and variable as you please; just be sure to update it in "index.js".

## Technologies

This weather app was built with HTML, SCSS, and JavaScript. It uses npm for library management and webpack for bundling modules and compiling SCSS to CSS. It uses the [OpenWeather](https://openweathermap.org/) API to gather real-time weather data: the city name, temperature, weather description ("clear," "clouds," etc.), and weather icon are all taken from OpenWeather via a free API key. The down arrow / carrot on the temperature unit select dropdown is from [IonIcons](https://ionic.io/ionicons).
