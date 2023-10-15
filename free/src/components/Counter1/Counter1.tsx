import { useState, useEffect, useRef } from "react";
import Counter1Display from "./Counter1Display";

const Counter1 = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [automaticCounterValue, setAutomaticCounterValue] = useState(0);
  const [showText, setShowText] = useState(false);
  const startDate = useRef<string | null>(null);
  let time = "init";
  const handleStartTime = () => {
    time = new Date().toLocaleTimeString();
    startDate.current = new Date().toLocaleTimeString();
    setShowText(true);
    setTimeout(() => setShowText(false), 4000);
  };

  console.log("Counter1 rendering");

  useEffect(() => {
    console.log("Counter1 value: ", counterValue);
  }, [counterValue]);

  //Uncomment to start the counter
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
    <div className="single-block">
      <span style={{ fontWeight: "bold" }}>
        Counter1 with useState / CounterDisplay with Memo
      </span>
      <ul>
        <li>- memo avoids re-rendering when the parent re-renders</li>
        <li>
          - useRef maintains the value between re-renders, a variable does not
        </li>
      </ul>
      <div style={{ margin: ".5rem 0" }}>
        <button style={{ padding: ".1rem" }} onClick={handleStartTime}>
          Show times
        </button>
        {showText && (
          <span style={{ margin: ".5rem" }}>
            Time in useRef: {startDate.current} / Time in variable: {time}
          </span>
        )}
      </div>
      <div style={{ margin: ".5rem" }}>
        {automaticCounterValue}{" "}
        <span style={{ marginLeft: ".3rem" }}>
          //uncomment the code to start the timer...
        </span>
      </div>
      <button
        className="counter-button"
        onClick={() => setCounterValue(counterValue - 1)}
      >
        -
      </button>
      <span style={{ margin: "0 .2rem" }}>
        <Counter1Display value={counterValue} />
      </span>
      <button
        className="counter-button"
        onClick={() => setCounterValue(counterValue + 1)}
      >
        +
      </button>
      <div></div>
    </div>
  );
};

export default Counter1;
