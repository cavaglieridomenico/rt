import { useState, useEffect, memo } from "react";
import ValuePrint from "./ValuePrint";
import { ValuePrintProps } from "./ValuePrint";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [automaticCounterValue, setAutomaticCounterValue] = useState(0);

  useEffect(() => {
    console.log("Counter rendering");
  });

  useEffect(() => {
    console.log("Counter value: ", counterValue);
  }, [counterValue]);

  useEffect(() => {
    const interval = setInterval(
      () => setAutomaticCounterValue(automaticCounterValue + 1),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
      <span style={{ margin: ".5rem" }}>{automaticCounterValue}</span>
      <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
      <div style={{ margin: "0 5px" }}>
        <ValuePrint value={counterValue} />
      </div>
    </>
  );
};

export default Counter;
