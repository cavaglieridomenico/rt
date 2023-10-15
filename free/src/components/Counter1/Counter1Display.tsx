import { memo } from "react";

interface CounterDisplayProps {
  value: number;
}

const CounterDisplay = ({ value }: CounterDisplayProps) => {
  console.log("Counter1Display rendering");

  return <>{value}</>;
};

export default memo(CounterDisplay);
