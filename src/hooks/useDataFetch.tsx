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
    air_quality: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
    };
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        daily_chance_of_rain: number;
        avgtemp_c: number;
        avghumidity: number;
        maxwind_kph: number;
        condition: {
          text: string;
        };
      };
    }[];
  };
}

const useDataFetch = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q=${cityName}&days=3&aqi=yes&alerts=yes`
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
