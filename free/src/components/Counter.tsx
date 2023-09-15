import { useState, useEffect } from "react";
import ValuePrint from "./ValuePrint";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    console.log("Counter render");
  });

  useEffect(() => {
    console.log("Counter value: ", counterValue);
  }, [counterValue]);

  return (
    <>
      <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
      <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
      <div style={{ margin: "0 5px" }}>
        <ValuePrint value={counterValue} />
      </div>
    </>
  );
};

export default Counter;
