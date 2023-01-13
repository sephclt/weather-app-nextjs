import { createContext, useState } from 'react';
import { ISearchContext } from '../interfaces/DataInterface';

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext>({
  searchText: '',
  setSearchText: () => {},
});

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
