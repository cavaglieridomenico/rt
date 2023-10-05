import { useAppContext2 } from "../context/context2";
import TodoListLDisplay2 from "./TodoListDisplay2";

const TodoList2 = () => {
  const { state } = useAppContext2();
  return (
    <div>
      <TodoListLDisplay2 todoList={state.todoList} />
    </div>
  );
};

export default TodoList2;
