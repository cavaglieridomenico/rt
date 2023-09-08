const Input = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return <input value="" onChange={(event) => handleInputChange(event)} />;
};

export default Input;
