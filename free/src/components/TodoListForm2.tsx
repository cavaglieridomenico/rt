import { useState } from "react";
import { TodoListForm2Props } from "../typings/todo-list";

const TodoListForm2 = ({ addTodoItem, todoList }: TodoListForm2Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem({
      id: new Date().getTime(),
      itemValue: inputValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoListInput"
        id="todoListInput"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <input
        type="submit"
        value="Add"
        disabled={
          inputValue === "" ||
          todoList?.some((item) => item.itemValue === inputValue)
        }
      />
    </form>
  );
};

export default TodoListForm2;
