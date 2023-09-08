import { useEffect, useRef } from "react";

const DomRef = () => {
  const refContainer = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={refContainer} name="" id="" />
    </div>
  );
};

export default DomRef;
