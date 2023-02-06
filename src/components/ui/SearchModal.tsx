import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import SearchBar from './SearchBar';

const SearchModal = ({
  setCityName,
}: {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { modalToggle, setModalToggle } = useContext(ModalContext);
  return (
    <div
      className={`${
        modalToggle ? '' : 'hidden'
      } absolute inset-0 bg-transparent flex justify-center items-start py-20`}
    >
      <button className="cursor-default" onClick={() => setModalToggle(false)}>
        <div className="absolute inset-0 z-30 bg-black/60"></div>
      </button>
      <div className="absolute top-10 left-10 z-40">
        <button onClick={() => setModalToggle(false)}>
          <i className="fa-regular fa-circle-xmark fa-xl text-white"></i>
        </button>
      </div>
      <div className="relative z-40">
        <SearchBar setCityName={setCityName} />
      </div>
    </div>
  );
};

export default SearchModal;
