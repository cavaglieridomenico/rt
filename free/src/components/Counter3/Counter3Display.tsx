import { useAppContext2 } from "../../context/context2";

const Counter3Display = () => {
  const { counter } = useAppContext2();

  console.log("Counter3Display rendering");

  return <div>Counter: {counter}</div>;
};

export default Counter3Display;
