import { TictactoeValue, TictactoeValues } from "../../typings/tic-tac-toe.d";

export const getTictactoeWinner = (
  list: TictactoeValues
): TictactoeValue | undefined => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (list[a] && list[a] === list[b] && list[a] === list[c]) {
      return list[a];
    }
  }
};
