import { useState, useEffect, useRef } from "react";
import Counter1Display from "./Counter1Display";

const Counter1 = () => {
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

  console.log("Counter1 rendering");

  useEffect(() => {
    console.log("Counter1 value: ", counterValue);
  }, [counterValue]);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setAutomaticCounterValue(automaticCounterValue + 1),
  //     1000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <>
      <span style={{ fontWeight: "bold" }}>
        Counter1 with useState / CounterDisplay with Memo
      </span>
      <div style={{ margin: ".5rem 0" }}>
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
        <Counter1Display value={counterValue} />
      </div>
    </>
  );
};

export default Counter1;
