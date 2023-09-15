import { useEffect } from "react";

interface ValuePrintProps {
  value: number;
}

const ValuePrint = ({ value }: ValuePrintProps) => {
  useEffect(() => {
    console.log("ValuePrint render");
  });

  return <>{value}</>;
};

export default ValuePrint;
