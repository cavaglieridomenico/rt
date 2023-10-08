import type { Context2State, Context2Dispatch } from "../typings/context";
import { TodoListItem } from "../typings/todo-list";

export const reducer = (state: Context2State, action: Context2Dispatch) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - payload,
      };
    case "REMOVE_ITEM_TODO_LIST":
      return {
        ...state,
        todoList: state.todoList.filter(
          (itemList: TodoListItem) => itemList.id !== payload
        ),
      };
    default:
      return state;
  }
};
