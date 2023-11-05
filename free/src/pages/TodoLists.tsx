import TodoList from "../components/TodoList1/TodoList";
import TodoList2 from "../components/TodoList2/TodoList2";

const TodoLists = () => {
  return (
    <div className="page">
      <div className="single-block">
        <TodoList />
      </div>
      <div className="single-block">
        <TodoList2 />
      </div>
    </div>
  );
};

export default TodoLists;
