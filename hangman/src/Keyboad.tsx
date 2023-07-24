import style from "./keyboard.module.css";

const Keyboad = () => {
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
        return (
          <button key={index} className={style["btn"]}>
            {character}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboad;
