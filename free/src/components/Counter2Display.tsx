// import { useContext } from "react";
// import { AppContext } from "../context/context";
import { useAppContext } from "../context/context1";

const Counter2Display = () => {
  const { contextValue } = useAppContext();
  console.log("Counter2Display rendering");

  return <>{contextValue.counter}</>;
};

export default Counter2Display;
