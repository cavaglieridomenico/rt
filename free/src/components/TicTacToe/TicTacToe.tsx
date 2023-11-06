import Square from "./Square";
//import { SquareValue } from "../../typings/tic-tac-toe.d";
import style from "./tic-tac-toe.module.css";
import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [boardValues, setBoardValues] = useState<any>(Array(9).fill(null));

  const [isTurnX, setIsTurnX] = useState(true);
  const [isWin, setIsWin] = useState(false);

  const checkWin = (index1: any, index2: any, index3: any) => {
    if (
      boardValues[index1] !== null &&
      boardValues[index2] !== null &&
      boardValues[index3] !== null &&
      boardValues[index1] === boardValues[index2] &&
      boardValues[index1] === boardValues[index3]
    ) {
      setIsWin(true);
      setTimeout(() => alert("Win!"), 400);
    }
  };

  useEffect(() => {
    checkWin(0, 1, 2);
    checkWin(0, 3, 6);
    checkWin(0, 4, 8);
    checkWin(3, 4, 5);
    checkWin(6, 7, 8);
    checkWin(2, 4, 6);
    checkWin(1, 4, 7);
    checkWin(2, 5, 8);
  }, [boardValues]);

  const handleClick = (index: any) => {
    let newList = [...boardValues];
    if (newList[index] === null && isTurnX && !isWin) {
      newList[index] = "X";
      setIsTurnX(false);
    } else if (newList[index] === null && !isTurnX && !isWin) {
      newList[index] = "O";
      setIsTurnX(true);
    } else {
      return;
    }
    console.log(newList);
    setBoardValues(newList);
  };

  return (
    <div className={style.table}>
      {boardValues?.map((item: any, index: number) => (
        <div key={index}>
          <Square
            value={item}
            index={index}
            onSquareClick={() => handleClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
