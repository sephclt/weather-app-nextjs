import { useCallback, useState } from 'react';
import { IResults, ISearchContext } from '../interfaces/DataInterface';
import { searchData } from '../pages/api/axios';

const useFetchResults = ({ searchText }: ISearchContext) => {
  const [textResult, setTextResult] = useState<IResults[]>([]);
  const fetchSearchResults = async () => {
    const initialState = '';
    if (searchText) {
      const searchRes = await searchData.get(searchText);
      const searchResData = searchRes.data;
      setTextResult(searchResData);
    }
  };

  const handleFetchResults = useCallback(fetchSearchResults, [searchText]);

  return {
    textResult,
    fetchSearchResults,
  };
};

export default useFetchResults;
