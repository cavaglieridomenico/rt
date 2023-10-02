import { useAppContext2 } from "../context/context2";

const Counter3 = () => {
  const { handleIncrement } = useAppContext2();

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Counter2 with useState via context
      </span>
      <div style={{ margin: ".5rem" }}>
        <button style={{ marginRight: ".5rem" }}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter3;
