import { createContext, useState } from 'react';

export interface IDataContext {
  data?: {};
  setData: React.Dispatch<React.SetStateAction<object | undefined>>;
}

export interface IDataContextProps {
  children: React.ReactElement;
}

export const DataContext = createContext<IDataContext>({
  data: {},
  setData: () => {},
});

export const DataContextProvider = ({ children }: IDataContextProps) => {
  const [data, setData] = useState<object | undefined>({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
