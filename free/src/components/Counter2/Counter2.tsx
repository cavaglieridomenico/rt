import { useAppContext } from "../../context/context1";

const Counter2 = () => {
  const { setContextValue } = useAppContext();

  console.log("Counter2 rendering");

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Counter2 with useState via context1
      </span>
      <ul>
        <li>
          - Changing the state within the context re-renders the context and the
          components attached to it
        </li>
      </ul>
      <div>
        <button
          className="counter-button"
          style={{ margin: ".5rem .5rem .5rem 0" }}
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
          className="counter-button"
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
