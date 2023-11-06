import type {
  ToDoListDisplayProps,
  TodoListItem,
} from "../../typings/todo-list";

const TodoListLDisplay2 = ({
  todoList,
  removeTodoItem,
}: ToDoListDisplayProps) => {
  return (
    <div>
      {todoList?.map((itemList: TodoListItem) => (
        <div className="todoListItem" key={itemList.id}>
          <span style={{ marginRight: "2rem" }}>{itemList.itemValue}</span>
          <span className="remove" onClick={() => removeTodoItem(itemList.id)}>
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoListLDisplay2;
