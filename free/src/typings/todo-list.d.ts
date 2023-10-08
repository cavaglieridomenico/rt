export interface ToDoListDisplayProps {
  todoList: TodoListItem[];
  removeTodoItem: (id: string | number) => void;
}

interface TodoListItem {
  id: string | number;
  itemList: string;
}
