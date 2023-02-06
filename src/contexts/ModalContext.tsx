import React, { createContext, useState } from 'react';

const initialValue: boolean = false;

type ModalContextType = {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
  modalToggle: initialValue,
  setModalToggle: () => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalToggle, setModalToggle] = useState<boolean>(initialValue);

  return (
    <ModalContext.Provider
      value={{ modalToggle: modalToggle, setModalToggle: setModalToggle }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
