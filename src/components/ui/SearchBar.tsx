import { useState } from 'react';
import useSearch from '../../hooks/useSearch';
import ResultsPanel from './ResultsPanel';

interface ISearchBarProps {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setCityName }: ISearchBarProps) => {
  // const [inputText, setInputText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [cityList, setCityList] = useState<{ id: number; name: string }[]>([]);

  useSearch({ searchText, setCityList });

  return (
    <>
      <div className="flex items-center">
        <input
          className="w-[31.25rem] px-[1.375rem] py-2 rounded-2xl text-base outline-none"
          type="text"
          placeholder="Search City ..."
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={() => setSearchText('')}
        />
      </div>
      <div
        className={`${
          cityList ? '' : 'hidden'
        } absolute top-[57px] left-0 right-0 bg-white flex flex-col justify-center items-center`}
      >
        <ResultsPanel
          cityList={cityList}
          setCityName={setCityName}
          setCityList={setCityList}
        />
      </div>
    </>
  );
};

export default SearchBar;
