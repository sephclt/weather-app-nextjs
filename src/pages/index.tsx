import { useState } from 'react';

import cloudy from '../../public/Weather_Icons/cloudy.png';
import droplet from '../../public/Weather_Icons/droplet.png';
import thermo from '../../public/Weather_Icons/thermo.png';
import wind from '../../public/Weather_Icons/wind.png';

import CardContainer from '../components/containers/CardContainer';
import HeaderContainer from '../components/containers/HeaderContainer';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';

import Image from 'next/image';
import useDataFetch from '../hooks/useDataFetch';

const App = () => {
  const [cityName, setCityName] = useState<string>('manila');

  const weatherData = useDataFetch(cityName);

  return (
    <>
      <HeaderContainer>
        <h1 className="text-4xl font-bold">Weather App</h1>
        <div className="relative">
          <SearchBar setCityName={setCityName} />
        </div>
      </HeaderContainer>
      <CardContainer>
        <Card>
          <div className="flex gap-2">
            <h1 className="font-bold text-xl">{weatherData?.location.name}</h1>
            <h1 className="text-xl">{weatherData?.location.localtime}</h1>
          </div>
          <Image src={cloudy} alt="Image of a Cloud" width={240} height={160} />
          <h1 className="text-2xl font-bold">
            {weatherData?.current.condition.text}
          </h1>
          <p>
            {weatherData?.forecast.forecastday[0].day.daily_chance_of_rain}%
            Chance of rain
          </p>
          <h1 className="text-2xl font-bold">
            {weatherData?.current.temp_c}°C
          </h1>
          <Image src={thermo} alt="svg of thermostat" width={15} height={30} />
          <h1 className="text-2xl font-bold">
            {weatherData?.current.humidity}%
          </h1>
          <Image src={droplet} alt="svg of waterdrop" width={21} height={30} />
          <h1 className="text-2xl font-bold">
            {weatherData?.current.wind_kph}KPH
          </h1>
          <Image src={wind} alt="svg of wind" width={41} height={30} />
        </Card>
      </CardContainer>
    </>
  );
};

export default App;
