import { useState } from 'react';

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
      <div>
        <p>{cityName}</p>
      </div>
      <SearchBar setSearchText={setSearchText} />
      <div className="flex flex-dir justify-center items-center">
        <ResultsPanel
          cityList={cityList}
          setCityName={setCityName}
          setCityList={setCityList}
        />
      </div>
    </div>
  );
};

export default App;
