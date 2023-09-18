import { useEffect, memo } from "react";

export interface ValuePrintProps {
  value: number;
}

const ValuePrint = ({ value }: ValuePrintProps) => {
  useEffect(() => {
    console.log("ValuePrint render");
  });

  return <>{value}</>;
};

export default memo(ValuePrint);
