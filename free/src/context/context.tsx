import { createContext, useContext, useState } from "react";

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

  console.log("Context1 rendering");
  console.log(contextValue);

  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
