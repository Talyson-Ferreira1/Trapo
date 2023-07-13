import { createContext, useCallback, useContext, useState } from 'react';

const AmountOfActveColorContext = createContext({});

export const AmountOfActveColorProider = ({ children }) => {
  const [numberActiveColor, setNumberActiveColor] = useState(1);

  const handleNumberOfColors = useCallback((number) => {
    setNumberActiveColor(number);
  }, []);

  return (
    <AmountOfActveColorContext.Provider
      value={{ numberActiveColor, handleNumberOfColors }}
    >
      {children}
    </AmountOfActveColorContext.Provider>
  );
};

export const useColorContext = () => useContext(AmountOfActveColorContext);
