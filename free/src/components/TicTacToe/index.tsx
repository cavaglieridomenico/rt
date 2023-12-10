import style from "./tic-tac-toe.module.css";
import { useState, useEffect } from "react";
import { getTictactoeWinner } from "./utils";
import GameMovements from "./GameMovements";
import Board from "./Board";
import { TictactoeValues } from "../../typings/tic-tac-toe.d";

const TicTacToe = () => {
  const [history, setHistory] = useState<TictactoeValues[]>([
    [null, null, null, null, null, null, null, null, null],
  ]);
  const [historyIndex, setHistoryIndex] = useState(history.length - 1);
  let status: string;
  let isTurnX = historyIndex % 2 === 0;

  useEffect(() => {
    console.log("history:", history);
  }, [history]);

  useEffect(() => {
    console.log("historyIndex:", historyIndex);
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

    let newList = [...history[historyIndex]];
    if (isTurnX) {
      newList[index] = "X";
    } else if (!isTurnX) {
      newList[index] = "O";
    } else {
      return;
    }

    setHistory((prevState: any) => {
      let newMovementList = [...prevState];
      newMovementList.splice(
        historyIndex + 1,
        newMovementList.length - historyIndex
      );
      newMovementList.push(newList);
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
