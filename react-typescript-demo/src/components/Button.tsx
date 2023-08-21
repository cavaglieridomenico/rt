type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 3)}>Click me</button>;
};

export default Button;
