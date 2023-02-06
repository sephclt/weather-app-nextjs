import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

interface IResultsPanelProps {
  cityList: { id: number; name: string }[];
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  setCityList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}

const ResultsPanel = ({
  cityList,
  setCityName,
  setCityList,
}: IResultsPanelProps) => {
  const { setModalToggle } = useContext(ModalContext);
  return (
    <>
      {cityList.map((city) => (
        <button
          className="w-full flex items-center p-2 border-b border-b-gray-300 hover:bg-gray-300"
          key={city.id}
          onClick={() => {
            setCityName(city.name), setCityList([]), setModalToggle(false);
          }}
        >
          {city.name}
        </button>
      ))}
    </>
  );
};

export default ResultsPanel;
