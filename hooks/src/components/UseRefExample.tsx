import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [name, setName] = useState<string>("");
  let prevName = useRef(name);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>
        My name is <span style={{ color: "red" }}>{name}</span> but it used to
        be <span style={{ color: "red" }}>{prevName.current}</span>
      </p>
    </>
  );
};

export default UseRefExample;
