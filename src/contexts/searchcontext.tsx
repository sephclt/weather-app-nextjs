import { createContext, useState } from 'react';

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export type SearchContextType = {
  searchText?: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
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
