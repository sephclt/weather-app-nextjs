import { useCallback, useEffect, useState } from 'react';

interface IUseSearchProps {
  searchText: string;
  setCityList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}

const useSearch = ({ searchText, setCityList }: IUseSearchProps) => {
  const [data, setData] = useState<{ id: number; name: string }[] | null>([]);

  const cityDataFetch = async () => {
    if (searchText) {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=21465421a71e4be6a60131002222712&q=${searchText}`
      );
      const data = await res.json();

      setCityList(data);
    }
  };

  const handleDataFetch = useCallback(cityDataFetch, [searchText, setCityList]);

  useEffect(() => {
    handleDataFetch();
  }, [handleDataFetch]);
};

export default useSearch;
