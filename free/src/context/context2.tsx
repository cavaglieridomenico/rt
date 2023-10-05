import { createContext, useContext, useReducer } from "react";
import { reducer } from "./redsucer";
import { ToDoListItem } from "../typings/todo-list";

const AppContext2 = createContext<any>(null);

export interface ReducerInitialState {
  counter: number;
  todoList: ToDoListItem[];
}

const initialState: ReducerInitialState = {
  counter: 0,
  todoList: [
    { id: 1, itemList: "Study React" },
    { id: 2, itemList: "Study JS" },
    { id: 3, itemList: "Study CSS" },
  ],
};

export const Appcontext2Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  console.log("Context2 rendering");
  console.log(state);

  return (
    <AppContext2.Provider value={{ state, handleIncrement, handleDecrement }}>
      {children}
    </AppContext2.Provider>
  );
};

export const useAppContext2 = () => useContext(AppContext2);
