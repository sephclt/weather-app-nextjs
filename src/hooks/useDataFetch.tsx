import { useCallback, useEffect, useState } from 'react';

const useDataFetch = (cityName: string) => {
  const [weatherData, setWeatherData] = useState<
    { location: { name: string } }[]
  >([{ location: { name: '' } }]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q=${cityName}&days=1&aqi=yes&alerts=yes`
    );
    const data = await res.json();
    setWeatherData([data]);
  };

  const handleFetchData = useCallback(fetchData, [cityName]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return weatherData;
};

export default useDataFetch;
