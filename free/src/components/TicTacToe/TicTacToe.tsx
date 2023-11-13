import style from "./tic-tac-toe.module.css";
import { useState, useEffect } from "react";
import { getTictactoeWinner } from "./utils";
import GameMovements from "./GameMovements";
import Board from "./Board";
import { TictactoeValues } from "../../typings/tic-tac-toe.d";

const TicTacToe = () => {
  const [isTurnX, setIsTurnX] = useState(true);
  // const [boardValues, setBoardValues] = useState<any>(Array(9).fill(null));
  // const [movementList, setMovementList] = useState<TictactoeValues[]>([
  //   [null, null, null, null, null, null, null, null, null],
  // ]);
  const [history, setHistory] = useState<TictactoeValues[]>([
    [null, null, null, null, null, null, null, null, null],
  ]);
  const [historyIndex, setHistoryIndex] = useState(history.length - 1);
  let status: string;

  useEffect(() => {
    console.log(historyIndex);
  }, [historyIndex]);

  if (getTictactoeWinner(history[historyIndex])) {
    status = `Winner is: ${getTictactoeWinner(history[history.length - 1])}`;
  } else {
    status = `Next Player: ${isTurnX ? "X" : "O"}`;
  }

  const handleClick = (index: number): void => {
    if (
      history[historyIndex][index] ||
      getTictactoeWinner(history[historyIndex])
    )
      return;
    setHistory((prevState: any) => {
      let newMovementList = [...prevState];
      newMovementList.splice(historyIndex + 1, newMovementList.length - index);
      console.log("#############");
      console.log(historyIndex);
      console.log(newMovementList);
      setHistoryIndex(newMovementList.length - 1);
      return newMovementList;
    });
    let newList = [...history[historyIndex]];
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
    setHistory((prevState: any) => {
      let newMovementList = [...prevState];
      newMovementList.splice(historyIndex + 1, newMovementList.length - index);
      console.log("..................");
      console.log(newMovementList);
      newMovementList.push(newList);
      console.log(newMovementList);
      setHistoryIndex(newMovementList.length - 1);
      return newMovementList;
    });
  };

  const handleHistory = (index: number) => {
    setHistoryIndex(index);
  };

  return (
    <div>
      <div className={style.winnerTextWrapper}>
        <p className={style.winnerText}>{status}</p>
      </div>
      <div className={style.gameWrapper}>
        <Board
          boardValues={history[historyIndex]}
          onSquareClick={handleClick}
        />
        <div>
          <GameMovements
            movementList={history}
            onGameMovementClick={handleHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
