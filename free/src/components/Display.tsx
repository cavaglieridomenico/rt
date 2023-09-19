// import { useContext } from "react";
// import { AppContext } from "../context/context";
import { useAppContext } from "../context/context";

const Display = () => {
  const contextValues = useAppContext();
  return <>{contextValues}</>;
};

export default Display;
