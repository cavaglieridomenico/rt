import { createContext, useContext, useReducer } from "react";
import { reducer } from "./redsucer";
import type {
  Context2Value,
  Context2ProviderProps,
  Context2State,
} from "../typings/context";

export const AppContext2 = createContext<Context2Value>({} as Context2Value);

const initialState: Context2State = {
  counter: 0,
  todoList: [
    { id: 1, itemList: "Study React" },
    { id: 2, itemList: "Study JS" },
    { id: 3, itemList: "Study CSS" },
  ],
};

export const Appcontext2Provider = ({ children }: Context2ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  const removeTodoItem = (id: string | number) => {
    dispatch({
      type: "REMOVE_ITEM_TODO_LIST",
      payload: id,
    });
  };

  console.log("Context2 rendering");
  console.log(state);

  return (
    <AppContext2.Provider
      value={{ ...state, handleIncrement, handleDecrement, removeTodoItem }}
    >
      {children}
    </AppContext2.Provider>
  );
};

export const useAppContext2 = () => useContext(AppContext2);
