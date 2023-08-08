type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
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
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div
            key={index}
            style={{
              borderBottom: ".1em solid black",
              width: ".5em",
              height: "1em",
            }}
          >
            {guessedLetters.includes(letter) && <span>{letter}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default HangmanWord;
