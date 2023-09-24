import TodoListDisplay from "./TodoListDisplay";
import TodoListForm from "./TodoListForm";
import { useAppContext } from "../context/context";

const TodoList = () => {
  const { contextValue, setContextValue } = useAppContext();
  const handleSubmit = (event: any, inputValue: any) => {
    event.preventDefault();
    console.log(inputValue);
    setContextValue({
      ...contextValue,
      todoList: [
        ...contextValue.todoList,
        { id: new Date().getTime().toString(), item: inputValue },
      ],
    });
  };

  const deleteItem = (id: any) => {
    setContextValue({
      ...contextValue,
      todoList: contextValue.todoList.filter((item: any) => item.id !== id),
    });
  };

  return (
    <div>
      <TodoListForm handleSubmit={handleSubmit} />
      <TodoListDisplay deleteItem={deleteItem} />
    </div>
  );
};

export default TodoList;
