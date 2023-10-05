export interface ToDoListDisplayProps {
  todoList: ToDoListItem[];
}

interface ToDoListItem {
  id: string | number;
  itemList: string;
}
