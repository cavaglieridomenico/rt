import { createContext, useContext } from "react";

export const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
  const testValue = "gatto";
  return (
    <AppContext.Provider value={testValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
