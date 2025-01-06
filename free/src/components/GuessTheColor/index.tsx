import { useEffect, useState } from "react";
import style from "./style.module.css";
import { getRandomHexColorList } from "./utils";

const GuessTheColor = () => {
  const messages = {
    start: "",
    win: "You win! This is the correct color!",
    lost: "This is the wrong color...",
  };

  const [colorList, setColorList] = useState<string[]>([]);
  const [squareColor, setSquareColor] = useState<string>("");
  const [text, setText] = useState(messages.start);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    setColorList(() => getRandomHexColorList(3));
  }, []);

  useEffect(() => {
    setSquareColor(colorList[Math.round(Math.random() * 2)]);
  }, [colorList]);

  const handleClick = (
    color: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    (event.target as HTMLButtonElement).disabled = true;
    if (squareColor === color) {
      setText(messages.win);
      setIsWin(true);
    } else {
      setText(messages.lost);
    }
  };

  const handlePlayAgain = () => {
    setColorList(() => getRandomHexColorList(3));
    setIsWin(false);
    setText(messages.start);
  };

  return (
    <div className={style.guessTheColorContainer}>
      <h1 style={{ textAlign: "center" }}>Guess the color</h1>
      <div
        className={`flex ${style.squareColor}`}
        style={{
          backgroundColor: `${squareColor}`,
        }}
      >
        <span>{isWin && squareColor}</span>
      </div>
      <div className="flex justify-center">
        {colorList.map((color, index) => (
          <button
            className={`custom-button ${style.colorButton}`}
            key={index}
            disabled={isWin}
            onClick={(event) => handleClick(color, event)}
          >
            {color}
          </button>
        ))}
      </div>
      <div className={`flex justify-center ${style.textContainer}`}>
        <p className={`${isWin && style.winText}`}>{text}</p>
        {isWin && (
          <div>
            <button onClick={handlePlayAgain} className="custom-button">
              Play again!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuessTheColor;
