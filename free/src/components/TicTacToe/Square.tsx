import style from "./tic-tac-toe.module.css";
import type { SquareProps } from "../../typings/tic-tac-toe.d";

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button type="button" className={style.square} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
