import { useCallback, useEffect, useState } from 'react';

export interface IWeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: {
      day: {
        daily_chance_of_rain: number;
      };
    }[];
  };
}

const useDataFetch = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q=${cityName}&days=1&aqi=yes&alerts=yes`
    );
    const data = await res.json();
    setWeatherData(data);
  };

  const handleFetchData = useCallback(fetchData, [cityName]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return weatherData;
};

export default useDataFetch;
