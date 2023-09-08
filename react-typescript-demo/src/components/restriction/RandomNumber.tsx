type ValueType = {
  value: number;
};

type PositiveType = ValueType & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeType = ValueType & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};

type ZeroType = ValueType & {
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type RandomNumberProps = PositiveType | NegativeType | ZeroType;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}{" "}
    </div>
  );
};

export default RandomNumber;
