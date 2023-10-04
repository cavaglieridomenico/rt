import { useAppContext2 } from "../context/context2";

const Counter3Display = () => {
  const { state } = useAppContext2();

  console.log("Counter3Display rendering");

  return <div>Counter: {state.counter}</div>;
};

export default Counter3Display;
