import { useEffect, memo } from "react";

interface CounterDisplayProps {
  value: number;
}

const CounterDisplay = ({ value }: CounterDisplayProps) => {
  useEffect(() => {
    console.log("CounterDisplay rendering");
  });

  return <>{value}</>;
};

export default CounterDisplay;
