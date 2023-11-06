import style from "./tic-tac-toe.module.css";
import type { SquareProps } from "../../typings/tic-tac-toe.d";

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <input
      type="button"
      value={value}
      className={style.square}
      onClick={onSquareClick}
    ></input>
  );
};

export default Square;
