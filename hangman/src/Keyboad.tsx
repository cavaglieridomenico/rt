import style from "./keyboard.module.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboad = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)  ",
        gap: ".5rem",
      }}
    >
      {KEYS.map((character, index) => {
        const isActive = activeLetters.includes(character);
        const isInactive = inactiveLetters.includes(character);

        return (
          <button
            key={index}
            className={`${style.btn} ${isActive && style.active} ${
              isInactive && style.inactive
            }`}
            disabled={isActive || isInactive}
            onClick={() => addGuessedLetter(character)}
          >
            {character}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboad;
