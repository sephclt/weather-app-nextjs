import { useState } from 'react';

import HeaderContainer from '../components/containers/HeaderContainer';
import SearchBar from '../components/ui/SearchBar';

import useDataFetch from '../hooks/useDataFetch';

const App = () => {
  const [cityName, setCityName] = useState<string>('manila');

  const weatherData = useDataFetch(cityName);

  return (
    <div style={{ color: 'black' }}>
      <HeaderContainer>
        <h1 className="text-4xl font-bold">Weather App</h1>
        <div className="relative">
          <SearchBar setCityName={setCityName} />
        </div>
      </HeaderContainer>
      <div>{cityName}</div>
    </div>
  );
};

export default App;
