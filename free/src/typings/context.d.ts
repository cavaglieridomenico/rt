export interface Context2State {
  counter: number;
  todoList: ToDoListItem[];
}

export type Context2Dispatch = Counter;

interface Counter {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}
