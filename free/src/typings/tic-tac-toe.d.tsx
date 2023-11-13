export interface SquareProps {
  value: TictactoeValue;
  onSquareClick: () => void;
}

export interface SquareValue {
  value: null | string | number;
}

export type TictactoeValue = null | "X" | "O";
export type TictactoeValues = [
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue,
  TictactoeValue
];

export interface GameMovementsProps {
  movementList: TictactoeValues[];
  onGameMovementClick: (item: number) => void;
}

export interface BoardProps {
  boardValues: TictactoeValues;
  onSquareClick: (index: number) => void;
}
