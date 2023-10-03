import { useAppContext2 } from "../context/context2";

const Counter3Display = () => {
  const { state } = useAppContext2();
  return <div>Counter: {state.counter}</div>;
};

export default Counter3Display;
