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
  return (
    <div>
      {cityList.map((city) => (
        <button
          key={city.id}
          onClick={() => {
            setCityName(city.name), setCityList([]);
          }}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default ResultsPanel;
