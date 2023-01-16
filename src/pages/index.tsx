import { useState } from 'react';

import HeaderContainer from '../components/containers/HeaderContainer';
import ResultsPanel from '../components/ui/ResultsPanel';
import SearchBar from '../components/ui/SearchBar';

import useDataFetch from '../hooks/useDataFetch';
import useSearch from '../hooks/useSearch';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [cityList, setCityList] = useState<{ id: number; name: string }[]>([]);
  const [cityName, setCityName] = useState<string>('manila');

  useSearch({ searchText, setCityList });
  const weatherData = useDataFetch(cityName);

  return (
    <div style={{ color: 'black' }}>
      <HeaderContainer>
        <h1 className="text-4xl font-bold">Weather App</h1>
        <div className="relative">
          <SearchBar setSearchText={setSearchText} />
          <div className="absolute top-[57px] left-0 right-0 bg-white flex flex-col justify-center items-center">
            <ResultsPanel
              cityList={cityList}
              setCityName={setCityName}
              setCityList={setCityList}
            />
          </div>
        </div>
      </HeaderContainer>
    </div>
  );
};

export default App;
