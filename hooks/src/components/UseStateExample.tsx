import { useState } from "react";

const getInitialState = () => {
  console.log("Initial state");
  return 0;
};
const UseStateExample = () => {
  const [counter, setCounter] = useState<number>(getInitialState);

  const decrementCount = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const incrementCount = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <button onClick={decrementCount} className="usestate-example">
        -
      </button>
      <span>{counter}</span>
      <button onClick={incrementCount} className="usestate-example">
        +
      </button>
    </>
  );
};

export default UseStateExample;
