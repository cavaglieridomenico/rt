import type { ToDoListDisplayProps, ToDoListItem } from "../typings/todo-list";
import "../style/todo-list.css";

const TodoListLDisplay2 = ({ todoList }: ToDoListDisplayProps) => {
  return (
    <div>
      {todoList?.map((itemList: ToDoListItem) => (
        <div className="listItem" key={itemList.id}>
          <span style={{ marginRight: "2rem" }}>{itemList.itemList}</span>
          <span>x</span>
        </div>
      ))}
    </div>
  );
};

export default TodoListLDisplay2;
