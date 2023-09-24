import { useAppContext } from "../context/context";

const TodoListDisplay = ({ deleteItem }: any) => {
  const { contextValue } = useAppContext();
  return (
    <div>
      {contextValue?.todoList?.map((item: any) => {
        return (
          <div
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "space-between",
            }}
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
