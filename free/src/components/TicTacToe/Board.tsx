import Square from "./Square";
import { TictactoeValue, BoardProps } from "../../typings/tic-tac-toe.d";
import style from "./tic-tac-toe.module.css";

const Board = ({ boardValues, onSquareClick }: BoardProps) => {
  return (
    <div>
      <div className={style.table}>
        {boardValues?.map((item: TictactoeValue, index: number) => (
          <div key={index}>
            <Square value={item} onSquareClick={() => onSquareClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
