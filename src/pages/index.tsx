import { Inter } from '@next/font/google';
import { useContext, useState } from 'react';
import SearchBar from '../components/ui/SearchBar';
import { DataContext } from '../contexts/ApiDataContext';
import { SearchContext } from '../contexts/searchcontext';
import { searchData, weatherData } from './api/axios';

const inter = Inter({ subsets: ['latin'] });

export interface IHome {
  res?: object;
}

interface IResults {
  id: number;
  name: string;
  region: string;
}

export const getServerSideProps = async () => {
  const res = await weatherData.get('tokyo&days=3&aqi=yes&alerts=yes');

  return {
    props: {
      res: res.data,
    },
  };
};

const Home = ({ res }: IHome) => {
  const { searchText } = useContext(SearchContext);
  const { data, setData } = useContext(DataContext);
  const [results, setResults] = useState<IResults[]>([]);

  const fetchSearchResults = async () => {
    const initialState = '';
    if (searchText) {
      const searchRes = await searchData.get(searchText);
      setResults(searchRes.data);
    }
  };

  const fetchWeatherData = async () => {
    const location = 'london';
    if (searchText) {
      const res = await weatherData.get(
        `${searchText}&days=3&aqi=yes&alerts=yes`
      );
      setData(res.data);
    } else {
      setData(res);
    }
  };

  console.log(results);

  return (
    <div>
      <SearchBar />
      <button onClick={fetchSearchResults}>Search</button>
      {results.map((result) => (
        <div key={result.id}>
          {result.name} : {result.region}
        </div>
      ))}
    </div>
  );
};

export default Home;
