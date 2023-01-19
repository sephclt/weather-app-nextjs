import { useState } from 'react';

import droplet from '../../public/Weather_Icons/droplet.png';
import thermo from '../../public/Weather_Icons/thermo.png';
import wind from '../../public/Weather_Icons/wind.png';

import CardContainer from '../components/containers/CardContainer';
import HeaderContainer from '../components/containers/HeaderContainer';
import MainLayout from '../components/layouts/MainLayout';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';

import Image from 'next/image';
import useDataFetch, { IWeatherData } from '../hooks/useDataFetch';
import useImageFetch from '../hooks/useImageFetch';

const getStaticProps = async () => {
  const res = await fetch(
    'https://api.weatherapi.com/v1/forecast.json?key=21465421a71e4be6a60131002222712&q=manila&days=3&aqi=yes&alerts=yes'
  );
  const currentData = await res.json();

  return {
    props: { currentData },
  };
};

const App = (currentData: IWeatherData | null) => {
  const [cityName, setCityName] = useState<string>('manila');

  const weatherData = useDataFetch(cityName);

  const imageOutput = useImageFetch(weatherData);

  return (
    <MainLayout>
      <HeaderContainer>
        <h1 className="text-base font-bold text-white">Weather App</h1>
        <div className="relative">
          <SearchBar setCityName={setCityName} />
        </div>
      </HeaderContainer>
      <div>
        <h1 className="font-bold text-xl text-white">
          {weatherData?.location.name}
        </h1>
      </div>
      <CardContainer>
        {/* First Card */}
        <Card>
          <h1 className="text-base">
            {weatherData?.forecast.forecastday[0].date}
          </h1>
          <Image
            src={
              weatherData
                ? 'https:' +
                  weatherData!.forecast.forecastday[0].day.condition.icon
                : imageOutput.iconUrl
            }
            alt="Image of a Cloud"
            width={120}
            height={120}
          />
          <h1 className="text-2xl font-bold">
            {weatherData?.current.condition.text}
          </h1>
          <p className="font-medium text-base">
            {weatherData?.forecast.forecastday[0].day.daily_chance_of_rain}%
            Chance of rain
          </p>
          <div className="flex gap-4">
            <h1 className="text-base font-bold">
              {weatherData?.current.temp_c}°C
            </h1>
            <Image
              src={thermo}
              alt="svg of thermostat"
              width={10}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.current.humidity}%
            </h1>
            <Image
              src={droplet}
              alt="svg of waterdrop"
              width={14.35}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.current.wind_kph} KPH
            </h1>
            <Image src={wind} alt="svg of wind" width={27.65} height={20} />
          </div>
        </Card>
        {/* Second Card */}
        <Card>
          <div className="flex gap-1">
            <h1 className="text-base">
              {weatherData?.forecast.forecastday[1].date}
            </h1>
          </div>
          <Image
            src={
              weatherData
                ? 'https:' +
                  weatherData!.forecast.forecastday[1].day.condition.icon
                : imageOutput.iconUrl
            }
            alt="Image of a Cloud"
            width={120}
            height={120}
          />
          <h1 className="text-2xl font-bold">
            {weatherData?.forecast.forecastday[1].day.condition.text}
          </h1>
          <p className="font-medium text-base">
            {weatherData?.forecast.forecastday[1].day.daily_chance_of_rain}%
            Chance of rain
          </p>
          <div className="flex gap-4">
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[1].day.avgtemp_c}°C
            </h1>
            <Image
              src={thermo}
              alt="svg of thermostat"
              width={10}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[1].day.avghumidity}%
            </h1>
            <Image
              src={droplet}
              alt="svg of waterdrop"
              width={14.35}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[1].day.maxwind_kph} KPH
            </h1>
            <Image src={wind} alt="svg of wind" width={27.65} height={20} />
          </div>
        </Card>
        {/* Third Card */}
        <Card>
          <div className="flex gap-1">
            <h1 className="text-base">
              {weatherData?.forecast.forecastday[2].date}
            </h1>
          </div>
          <Image
            src={
              weatherData
                ? 'https:' +
                  weatherData!.forecast.forecastday[2].day.condition.icon
                : imageOutput.iconUrl
            }
            alt="Image of a Cloud"
            width={120}
            height={120}
          />
          <h1 className="text-2xl font-bold">
            {weatherData?.forecast.forecastday[2].day.condition.text}
          </h1>
          <p className="font-medium text-base">
            {weatherData?.forecast.forecastday[2].day.daily_chance_of_rain}%
            Chance of rain
          </p>
          <div className="flex gap-4">
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[2].day.avgtemp_c}°C
            </h1>
            <Image
              src={thermo}
              alt="svg of thermostat"
              width={10}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[2].day.avghumidity}%
            </h1>
            <Image
              src={droplet}
              alt="svg of waterdrop"
              width={14.35}
              height={20}
            />
            <h1 className="text-base font-bold">
              {weatherData?.forecast.forecastday[2].day.maxwind_kph} KPH
            </h1>
            <Image src={wind} alt="svg of wind" width={27.65} height={20} />
          </div>
        </Card>
      </CardContainer>
      <CardContainer>
        <div className="w-full px-4 py-4 grid grid-cols-2 gap-2 bg-darkBg/40 rounded-xl">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Air Quality</h1>
            <p className="text-base">
              <span className="font-bold">CO: </span>
              {weatherData?.current.air_quality.co}
            </p>
            <p className="text-base">
              <span className="font-bold">NO2: </span>
              {weatherData?.current.air_quality.no2}
            </p>
            <p className="text-base">
              <span className="font-bold">O3: </span>
              {weatherData?.current.air_quality.o3}
            </p>
            <p className="text-base">
              <span className="font-bold">SO2: </span>
              {weatherData?.current.air_quality.so2}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Alerts</h1>
            <p>No Alerts</p>
          </div>
        </div>
      </CardContainer>
    </MainLayout>
  );
};

export default App;
