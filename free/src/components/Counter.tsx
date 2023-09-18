import { useState, useEffect, useRef } from "react";
import ValuePrint from "./ValuePrint";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [automaticCounterValue, setAutomaticCounterValue] = useState(0);
  const [showText, setShowText] = useState(false);
  const startDate = useRef<string | null>(null);
  let time = "nothing";
  const handleStartTime = () => {
    time = new Date().toLocaleTimeString();
    startDate.current = new Date().toLocaleTimeString();
    setShowText(true);
  };

  useEffect(() => {
    console.log("Counter rendering");
  });

  useEffect(() => {
    console.log("Counter value: ", counterValue);
  }, [counterValue]);

  useEffect(() => {
    const interval = setInterval(
      () => setAutomaticCounterValue(automaticCounterValue + 1),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div style={{ marginBottom: ".5rem" }}>
        <button onClick={handleStartTime}>Start experiment</button>
        {showText && (
          <span style={{ margin: ".5rem" }}>
            This experiment began at {startDate.current} or {time}
          </span>
        )}
      </div>
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
