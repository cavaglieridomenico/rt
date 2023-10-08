export interface TodoListForm2Props {
  addTodoItem: (item: TodoListItem) => void;
  todoList: TodoListItem[];
}

export interface ToDoListDisplayProps {
  todoList: TodoListItem[];
  removeTodoItem: (id: string | number) => void;
}

interface TodoListItem {
  id: string | number;
  itemValue: string;
}
