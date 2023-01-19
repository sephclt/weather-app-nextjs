import { useCallback, useEffect, useReducer } from 'react';
import { IWeatherData } from './useDataFetch';

// --- Background Images ---
import cloudy from '../../public/Images/cloudy.jpg';
import rain from '../../public/Images/rain.jpg';
import storm from '../../public/Images/storm.jpg';
import sunny from '../../public/Images/sunny.jpg';

// --- Weather Icons ---
import cloudico from '../../public/Weather_Icons/cloud.png';
import heavyrainico from '../../public/Weather_Icons/heavyrain.png';
import sunnyico from '../../public/Weather_Icons/sunny.png';
import stormico from '../../public/Weather_Icons/thunder.png';

const initialState = { imageUrl: sunny, iconUrl: sunnyico };

interface IImageState {
  image: typeof initialState;
}

// type ActionList = | { condition: 'Cloudy' } | { condition: 'Partially Cloudy'} | { condition: 'Light Rain'} | { condition: 'Heavy Rain'}

type ActionList = { condition: string };

const imageReducer = (state: typeof initialState, action: ActionList) => {
  switch (action.condition) {
    case 'cloud':
      return { imageUrl: cloudy, iconUrl: cloudico };
    case 'rain':
      return { imageUrl: rain, iconUrl: heavyrainico };
    case 'heavy':
      return { imageUrl: storm, iconUrl: stormico };
    default:
      return { imageUrl: sunny, iconUrl: sunnyico };
  }
};

const useImageFetch = (weatherData: IWeatherData | null) => {
  const [imageOutput, dispatch] = useReducer(imageReducer, initialState);

  const imageSelect = () => {
    const weatherTypes = ['rain', 'sunny', 'cloud', 'heavy'];
    for (const type in weatherTypes) {
      if (
        weatherData?.forecast.forecastday[0].day.condition.text.includes(type)
      ) {
        dispatch({ condition: type });
      }
    }
  };

  const handleImageSelect = useCallback(imageSelect, [weatherData]);

  useEffect(() => {
    handleImageSelect();
  }, [handleImageSelect]);

  return imageOutput;
};

export default useImageFetch;
