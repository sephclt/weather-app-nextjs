import { useState } from 'react';

interface ISearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchText }: ISearchBarProps) => {
  const [inputText, setInputText] = useState<string>('');

  return (
    <div className="flex items-center gap-3">
      <input
        className="w-[37.5rem] px-5 py-4 rounded-2xl text-base outline-none"
        type="text"
        placeholder="Search City ..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-white hover:bg-gray-300 duration-100 rounded-2xl px-5 py-4"
        onClick={() => setSearchText(inputText)}
      >
        <i className="fa-solid fa-magnifying-glass-location fa-xl"></i>
      </button>
    </div>
  );
};

export default SearchBar;
