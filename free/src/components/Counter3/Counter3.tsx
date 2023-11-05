import { useAppContext2 } from "../../context/context2";

const Counter3 = () => {
  const { handleIncrement, handleDecrement } = useAppContext2();

  console.log("Counter3 rendering");

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Counter3 with useReducer via context
      </span>
      <div>
        <button className="counter-button" onClick={handleDecrement}>
          -
        </button>
        <button className="counter-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter3;
