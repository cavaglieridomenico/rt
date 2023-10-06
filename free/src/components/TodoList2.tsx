import { useAppContext2 } from "../context/context2";
import TodoListLDisplay2 from "./TodoListDisplay2";

const TodoList2 = () => {
  const { todoList } = useAppContext2();
  console.log("TodoList2 rendering");
  return (
    <div>
      <TodoListLDisplay2 todoList={todoList} />
    </div>
  );
};

export default TodoList2;
