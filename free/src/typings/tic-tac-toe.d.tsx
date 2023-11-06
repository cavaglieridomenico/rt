export interface SquareProps {
  value: string | number | readonly string[] | undefined;
  onSquareClick: () => void;
}

export interface SquareValue {
  value: null | string | number;
}
