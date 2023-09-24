import { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

const TodoListForm = ({ handleSubmit }: any) => {
  const [inputValue, setInputValue] = useState("");
  const { contextValue } = useAppContext();

  useEffect(() => {
    console.log("TodoListForm rendering");
  });

  return (
    <form
      style={{ marginBottom: ".5rem" }}
      onSubmit={(event) => {
        handleSubmit(event, inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="to-do-item">
        <input
          type="text"
          name="to-do-item"
          id="to-do-item"
          value={inputValue}
          onChange={(event: any) => setInputValue(event.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Add"
        disabled={
          !inputValue ||
          contextValue.todoList.some((item: any) => item.item === inputValue)
        }
      />
    </form>
  );
};

export default TodoListForm;
