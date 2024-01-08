type CustomButton2Props = {
  handleNameChange: (name: string) => void;
  name: string;
};

const CustomInput = ({ handleNameChange, name }: CustomButton2Props) => {
  return (
    <input
      value={name}
      onChange={(event) => handleNameChange(event.target.value)}
    />
  );
};

export default CustomInput;
