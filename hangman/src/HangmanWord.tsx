export const HangmanWord = () => {
  const word = "test";
  const guessedLetter: string[] = [];

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => {
        return (
          <div
            key={index}
            style={{
              borderBottom: ".1em solid black",
              width: ".5em",
              height: ".7em",
            }}
          >
            {guessedLetter.includes(letter) && <span>{letter}</span>}
          </div>
        );
      })}
    </div>
  );
};
