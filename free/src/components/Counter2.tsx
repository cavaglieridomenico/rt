import { useAppContext } from "../context/context";

import { useEffect } from "react";
const Counter2 = () => {
  const { setContextValue } = useAppContext();

  useEffect(() => {
    console.log("Counter2 rendering");
  });
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Counter2 with useState via context
      </span>
      <div>
        <button
          style={{ margin: ".5rem" }}
          onClick={() =>
            setContextValue((prevState: any) => ({
              ...prevState,
              counter: prevState.counter - 1,
            }))
          }
        >
          -
        </button>
        <button
          onClick={() =>
            setContextValue((prevState: any) => ({
              ...prevState,
              counter: prevState.counter + 1,
            }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter2;
