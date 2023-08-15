import { useCallback, useState } from "react";
import UseCallbackExampleList from "./UseCallbackExampleList";

const UseCallbackExample = () => {
  const [inputNumber, setInputNumber] = useState<number>(1);
  const [isDark, setIsDark] = useState<boolean>(false);
  const themeStyle = {
    background: `${isDark ? "black" : ""}`,
    color: "red",
  };

  const getItems = useCallback(
    (incrementor: number) => [
      inputNumber + incrementor,
      inputNumber + 1 + incrementor,
      inputNumber + 2 + incrementor,
    ],
    [inputNumber]
  );

  return (
    <>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={inputNumber}
          onChange={(event) =>
            setInputNumber((prevState) => (prevState = +event.target.value))
          }
        />
      </div>
      <div style={themeStyle}>
        <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
        <UseCallbackExampleList getList={getItems} />
      </div>
    </>
  );
};

export default UseCallbackExample;
