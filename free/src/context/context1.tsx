import { createContext, useContext, useState } from "react";

export const AppContext1 = createContext<any>(null);

export const AppContext1Provider = ({ children }: any) => {
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
    <AppContext1.Provider value={{ contextValue, setContextValue }}>
      {children}
    </AppContext1.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext1);
};
