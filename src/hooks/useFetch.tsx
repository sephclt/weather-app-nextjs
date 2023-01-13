import { useCallback } from 'react';
import { CityName, IDataContext } from '../interfaces/DataInterface';
import { weatherData } from '../pages/api/axios';

const useFetch = ({ setWeatherData, cityName }: IDataContext & CityName) => {
  const fetchWeatherData = async () => {
    if (cityName) {
      const res = await weatherData.get(
        `${cityName}&days=3&aqi=yes&alerts=yes`
      );
      setWeatherData([res.data]);
    }
  };

  const handleFetchData = useCallback(fetchWeatherData, [
    cityName,
    setWeatherData,
  ]);

  return {
    handleFetchData,
  };
};

export default useFetch;
