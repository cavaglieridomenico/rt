import { useAppContext2 } from "../context/context2";
import TodoListForm2 from "./TodoListForm2";
import TodoListLDisplay2 from "./TodoListDisplay2";

const TodoList2 = () => {
  const { todoList, addTodoItem, removeTodoItem } = useAppContext2();
  console.log("TodoList2 rendering");
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Todo list via context and reducer
      </span>
      <TodoListForm2 addTodoItem={addTodoItem} todoList={todoList} />
      <TodoListLDisplay2 todoList={todoList} removeTodoItem={removeTodoItem} />
    </div>
  );
};

export default TodoList2;
