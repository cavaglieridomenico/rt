import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [inputNumber, setInputNumber] = useState<number>(1);
  const [isDark, setIsDark] = useState(false);

  const slowFunction = (num: number): number => {
    console.log("Calling slow function");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const newNumber = useMemo(() => slowFunction(inputNumber), [inputNumber]);

  const newNumberStyle = useMemo(
    () => ({
      color: "red",
      background: `${isDark ? "black" : ""}`,
    }),
    [isDark]
  );

  return (
    <>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={inputNumber}
          onChange={(event) => {
            setInputNumber(+event.target.value);
          }}
        />
      </div>
      <button onClick={() => setIsDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={newNumberStyle}>{newNumber}</div>
    </>
  );
};

export default UseMemoExample;
