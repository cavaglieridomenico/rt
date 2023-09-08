import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleTimerStop = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => handleTimerStop();
  });

  return (
    <>
      <div>{timer}</div>
      <button onClick={handleTimerStop}>Stop Timer</button>
    </>
  );
};

export default MutableRef;
