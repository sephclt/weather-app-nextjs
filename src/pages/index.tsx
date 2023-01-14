import { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/ui/SearchBar';
import { SearchContext } from '../contexts/searchcontext';
import useFetch from '../hooks/useFetch';
import useFetchResults from '../hooks/useFetchResults';
import { IHome, IResults } from '../interfaces/DataInterface';
import { weatherData } from './api/axios';

import CardContainer from '../components/containers/CardContainer';
import HeaderContainer from '../components/containers/HeaderContainer';
import MainWrapper from '../components/containers/MainWrapper';
import MainLayout from '../components/layouts/MainLayout';
import Button from '../components/ui/Button';

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
  const [weatherData, setWeatherData] = useState<
    { location: { name: string } }[]
  >([res]);
  const [results, setResults] = useState<IResults[]>([]);
  const [cityName, setCityName] = useState<string>('');

  const { handleFetchData } = useFetch({ setWeatherData, cityName });
  const { textResult, fetchSearchResults } = useFetchResults({ searchText });

  useEffect(() => {
    handleFetchData();
    setResults(textResult);
  }, [handleFetchData, textResult]);

  return (
    <MainLayout>
      <MainWrapper>
        <HeaderContainer>
          <h1 className="text-5xl font-bold">LOGO</h1>
          <div className="flex gap-1">
            <SearchBar />
            <Button>
              <i className="fa-solid fa-magnifying-glass-location fa-xl"></i>
            </Button>
          </div>
        </HeaderContainer>
        <button onClick={fetchSearchResults}>Search</button>
        {results.map((result) => (
          <button key={result.id} onClick={() => setCityName(result.name)}>
            {result.name} : {result.region}
          </button>
        ))}
        <CardContainer>
          <div>
            {weatherData.map((data, index) => (
              <p key={index}>{data.location.name}</p>
            ))}
          </div>
        </CardContainer>
      </MainWrapper>
    </MainLayout>
  );
};

export default Home;
