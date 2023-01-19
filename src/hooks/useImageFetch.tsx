import { useCallback, useEffect, useReducer } from 'react';
import { IWeatherData } from './useDataFetch';

// --- Weather Icons ---
import cloudico from '../../public/Weather_Icons/cloud.png';
import heavyrainico from '../../public/Weather_Icons/heavyrain.png';
import sunnyico from '../../public/Weather_Icons/sunny.png';
import stormico from '../../public/Weather_Icons/thunder.png';

const initialState = { imageUrl: 'bg-sunny', iconUrl: sunnyico };

interface IImageState {
  image: typeof initialState;
}

// type ActionList = | { condition: 'Cloudy' } | { condition: 'Partially Cloudy'} | { condition: 'Light Rain'} | { condition: 'Heavy Rain'}

type ActionList = { condition: string };

const imageReducer = (state: typeof initialState, action: ActionList) => {
  switch (action.condition) {
    case 'cloud':
      return { imageUrl: 'bg-cloudy', iconUrl: cloudico };
    case 'rain':
      return { imageUrl: 'bg-rain', iconUrl: heavyrainico };
    case 'heavy':
      return { imageUrl: 'bg-storm', iconUrl: stormico };
    default:
      return { imageUrl: 'bg-sunny', iconUrl: sunnyico };
  }
};

const useImageFetch = (weatherData: IWeatherData | null) => {
  const [imageOutput, dispatch] = useReducer(imageReducer, initialState);

  const imageSelect = () => {
    const weatherTypes = ['rain', 'sunny', 'cloud', 'heavy'];
    for (const type of weatherTypes) {
      if (weatherData?.current.condition.text.toLowerCase().includes(type)) {
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
