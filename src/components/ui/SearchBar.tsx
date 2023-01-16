import { useState } from 'react';

interface ISearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchText }: ISearchBarProps) => {
  const [inputText, setInputText] = useState<string>('');
  return (
    <>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => setSearchText(inputText)}>Click Me!</button>
    </>
  );
};

export default SearchBar;
