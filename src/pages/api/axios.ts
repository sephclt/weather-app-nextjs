import axios from 'axios';

export const weatherData = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q=',
});

export const searchData = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/search.json?key=21465421a71e4be6a60131002222712&q=',
});
