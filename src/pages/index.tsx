import { Inter } from '@next/font/google';
import { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/ui/SearchBar';
import { DataContext } from '../contexts/ApiDataContext';
import { SearchContext } from '../contexts/searchcontext';
import { searchData, weatherData } from './api/axios';

const inter = Inter({ subsets: ['latin'] });

export interface IHome {
  res?: object;
}

interface CityName {
  cityName: string;
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

  const [cityName, setCityName] = useState<string | undefined>();

  const fetchSearchResults = async () => {
    const initialState = '';
    if (searchText) {
      const searchRes = await searchData.get(searchText);
      setResults(searchRes.data);
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const location = 'london';
      if (cityName) {
        const res = await weatherData.get(
          `${cityName}&days=3&aqi=yes&alerts=yes`
        );
        setData(res.data);
      } else {
        setData(res);
      }
    };
    fetchWeatherData();
  }, [cityName, setData, res]);

  console.log(data);

  return (
    <div>
      <SearchBar />
      <button onClick={fetchSearchResults}>Search</button>
      {results.map((result) => (
        <button key={result.id} onClick={() => setCityName(result.name)}>
          {result.name} : {result.region}
        </button>
      ))}
    </div>
  );
};

export default Home;
