import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchcontext';

const SearchBar = () => {
  const { setSearchText } = useContext(SearchContext);

  return (
    <div>
      <input
        type="text"
        onChange={
          setSearchText ? (e) => setSearchText(e.target.value) : undefined
        }
      />
    </div>
  );
};

export default SearchBar;
