import { useAppContext2 } from "../context/context2";

const Counter3 = () => {
  const { handleIncrement, handleDecrement } = useAppContext2();

  console.log("Counter3 rendering");

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Counter3 with useReducer via context
      </span>
      <div style={{ margin: ".5rem" }}>
        <button style={{ marginRight: ".5rem" }} onClick={handleDecrement}>
          -
        </button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter3;
