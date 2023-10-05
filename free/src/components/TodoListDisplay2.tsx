import type { ToDoListDisplayProps } from "../typings/todo-list";
import type { ToDoListItem } from "../typings/todo-list";

const TodoListLDisplay2 = ({ todoList }: ToDoListDisplayProps) => {
  return (
    <div>
      {todoList?.map((itemList: ToDoListItem) => (
        <div key={itemList.id}>
          <span style={{ marginRight: "2rem" }}>{itemList.itemList}</span>
          <span>x</span>
        </div>
      ))}
    </div>
  );
};

export default TodoListLDisplay2;
