import type { ToDoListDisplayProps, TodoListItem } from "../typings/todo-list";
import style from "../style/todo-list.module.css";

const TodoListLDisplay2 = ({
  todoList,
  removeTodoItem,
}: ToDoListDisplayProps) => {
  return (
    <div>
      {todoList?.map((itemList: TodoListItem) => (
        <div className={style.listItem} key={itemList.id}>
          <span style={{ marginRight: "2rem" }}>{itemList.itemValue}</span>
          <span
            className={style.remove}
            onClick={() => removeTodoItem(itemList.id)}
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoListLDisplay2;
