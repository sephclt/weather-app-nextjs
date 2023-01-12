import { Inter } from '@next/font/google';
import { useContext } from 'react';
import SearchBar from '../components/ui/SearchBar';
import { DataContext } from '../contexts/ApiDataContext';
import { SearchContext } from '../contexts/searchcontext';
import api from './api/axios';

const inter = Inter({ subsets: ['latin'] });

export interface IHome {
  res?: {};
}

export const getServerSideProps = async () => {
  const res = await api.get('tokyo&days=3&aqi=yes&alerts=yes');

  return {
    props: {
      res: res.data,
    },
  };
};

const Home = ({ res }: IHome) => {
  const { searchText } = useContext(SearchContext);
  const { data, setData } = useContext(DataContext);

  const fetchAPI = async () => {
    const location = 'london';
    if (searchText) {
      const res = await api.get(`${searchText}&days=3&aqi=yes&alerts=yes`);
      setData(res.data);
    } else {
      const res = await api.get(`${location}&days=3&aqi=yes&alerts=yes`);
      setData(res.data);
    }
  };

  console.log(data);

  return (
    <div>
      <SearchBar />
      <button onClick={fetchAPI}>Search</button>
    </div>
  );
};

export default Home;
