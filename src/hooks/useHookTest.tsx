import { useEffect } from 'react';
import { IWeatherData } from './useDataFetch';

const useHookTest = (weatherData: IWeatherData | null) => {
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
};

export default useHookTest;
