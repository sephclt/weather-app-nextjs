import axios from "axios";

export default axios.create({
  baseURL: 'https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q='
})