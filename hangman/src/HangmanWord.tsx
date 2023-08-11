type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  isLoser: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  isLoser = false,
}: HangmanWordProps) => {
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
              color:
                !guessedLetters.includes(letter) && isLoser ? "red" : "black",
            }}
          >
            {(guessedLetters.includes(letter) || isLoser) && (
              <span>{letter}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HangmanWord;
