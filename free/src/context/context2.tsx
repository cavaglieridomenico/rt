import { createContext, useContext, useReducer } from "react";
import { reducer } from "./redsucer";

const AppContext2 = createContext<any>(null);

const initialState = {
  counter: 0,
};

export const Appcontext2Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  return (
    <AppContext2.Provider value={{ state, handleIncrement }}>
      {children}
    </AppContext2.Provider>
  );
};

export const useAppContext2 = () => useContext(AppContext2);
