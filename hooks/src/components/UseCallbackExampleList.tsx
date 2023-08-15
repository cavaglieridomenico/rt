import { useEffect, useState } from "react";

interface UseCallbackExampleListProps {
  getList: (param: number) => number[];
}

const UseCallbackExampleList = ({ getList }: UseCallbackExampleListProps) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getList(5));
    console.log("Updating items");
  }, [getList]);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default UseCallbackExampleList;
