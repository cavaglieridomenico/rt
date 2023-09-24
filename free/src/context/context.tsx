import { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
  const [contextValue, setContextValue] = useState({
    todoList: [
      { id: 1, item: "study performance" },
      { id: 2, item: "study React" },
    ],
    users: [{ name: "Max", surname: "Cavalera" }],
    counter: 0,
  });

  useEffect(() => {
    console.log("Context rendering");
    console.log(contextValue);
  });

  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
