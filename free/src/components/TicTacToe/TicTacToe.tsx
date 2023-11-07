import Square from "./Square";
//import { SquareValue } from "../../typings/tic-tac-toe.d";
import style from "./tic-tac-toe.module.css";
import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [boardValues, setBoardValues] = useState<any>(Array(9).fill(null));

  const [isTurnX, setIsTurnX] = useState(true);
  const [isWin, setIsWin] = useState(false);

  const calculateWinner = (list: []) => {
    const rows = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i];
      if (list[a] && list[a] === list[b] && list[a] === list[c]) {
        return list[a];
      }
    }
  };

  useEffect(() => {
    if (calculateWinner(boardValues)) {
      setIsWin(true);
      setTimeout(() => alert(`Winner is ${calculateWinner(boardValues)}`), 300);
    }
  }, [boardValues]);

  const handleClick = (index: any) => {
    if (boardValues[index] || calculateWinner(boardValues)) return;
    let newList = [...boardValues];
    if (isTurnX) {
      newList[index] = "X";
      setIsTurnX(false);
    } else if (!isTurnX) {
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
