import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchcontext';

const SearchBar = () => {
  const { setSearchText } = useContext(SearchContext);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
    </div>
  );
};

export default SearchBar;
