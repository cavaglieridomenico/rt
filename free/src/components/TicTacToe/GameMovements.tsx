import type { GameMovementsProps } from "../../typings/tic-tac-toe.d";
import style from "./tic-tac-toe.module.css";

const GameMovements = ({
  movementList,
  onGameMovementClick,
}: GameMovementsProps) => {
  return (
    <div>
      <ol>
        {movementList?.map((item, index: number) => {
          return (
            <li key={index}>
              <button
                className={style.buttonGameMovement}
                type="button"
                onClick={() => onGameMovementClick(index)}
              >
                {index === 0 ? `Go to game start` : `Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default GameMovements;
