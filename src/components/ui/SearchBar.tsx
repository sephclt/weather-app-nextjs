import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchcontext';

const SearchBar = () => {
  const { setSearchText } = useContext(SearchContext);

  return (
    <>
      <input
        className="w-[48rem] h-auto rounded-xl px-5 py-4 text-black outline-none"
        type="text"
        placeholder="Search Location ..."
        onChange={
          setSearchText ? (e) => setSearchText(e.target.value) : undefined
        }
      />
    </>
  );
};

export default SearchBar;
