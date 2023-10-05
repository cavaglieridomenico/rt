import { useEffect } from "react";
import { useAppContext } from "../context/context1";

const TodoListDisplay = ({ deleteItem }: any) => {
  const { contextValue } = useAppContext();

  useEffect(() => {
    console.log("TodoListDisplay rendering");
  });

  return (
    <div>
      {contextValue?.todoList?.map((item: any, index: number) => {
        return (
          <div
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <span>{item.item}</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => deleteItem(item.id)}
            >
              x
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListDisplay;
