export interface IDataContext {
  weatherData?: { location: { name: string } };
  setWeatherData: React.Dispatch<
    React.SetStateAction<
      {
        location: {
          name: string;
        };
      }[]
    >
  >;
}

export interface ISearchContext {
  searchText?: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IHome {
  res: { location: { name: string } };
}

export interface CityName {
  cityName: string;
}

export interface IResults {
  id: number;
  name: string;
  region: string;
}
