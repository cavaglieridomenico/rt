type CustomButton2Props = {
  handleClick: (name: string) => void;
};

const CustomButton2 = ({ handleClick }: CustomButton2Props) => {
  return <button onClick={() => handleClick("Max")}>Click me</button>;
};

export default CustomButton2;
