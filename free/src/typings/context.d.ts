import { TodoListItem } from "./todo-list";

export interface Context2Value extends Context2State {
  handleIncrement: () => void;
  handleDecrement: () => void;
  addTodoItem: (valueInput: TodoListItem) => void;
  removeTodoItem: (id: string | number) => void;
}

export interface Context2State {
  counter: number;
  todoList: TodoListItem[];
}

export interface Context2ProviderProps {
  children: React.ReactNode;
}

export type Context2Dispatch =
  | CounterDispatch
  | odoListDispatchRemoveItem
  | TodoListDispatchAddItem;

interface CounterDispatch {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}

interface TodoListDispatchRemoveItem {
  type: "REMOVE_ITEM_TODO_LIST";
  payload: string | number;
}

interface TodoListDispatchAddItem {
  type: "ADD_ITEM_TODO_LIST";
  payload: TodoListItem;
}
