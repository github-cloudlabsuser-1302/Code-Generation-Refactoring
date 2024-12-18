const fetch = require('node-fetch');

const apiKey = 'b8502963c92eb7f631cb2f58a75323ef';
const city = 'London';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}K`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => console.error('Error fetching weather data:', error));