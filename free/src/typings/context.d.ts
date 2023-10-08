import { TodoListItem } from "./todo-list";

export interface Context2Value {
  counter: number;
  todoList: TodoListItem[];
  handleIncrement: () => void;
  handleDecrement: () => void;
  removeTodoItem: (id: string | number) => void;
}

export interface Context2State {
  counter: number;
  todoList: TodoListItem[];
}

export interface Context2ProviderProps {
  children: React.ReactNode;
}

export type Context2Dispatch = CounterDispatch | TodoListDispatch;

interface CounterDispatch {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}

interface TodoListDispatch {
  type: "REMOVE_ITEM_TODO_LIST";
  payload: string | number;
}
