interface ButtonProps {
  className: string;
}

// you can choose annotate the return type so an error is raised if you accidentally return some other type
export const Button = ({ className }: ButtonProps): JSX.Element => {
  return <div className={className}></div>;
};

// Alternatively, you can use `React.FunctionComponent` (or `React.FC`), if you prefer.
// With latest React types and TypeScript 5.1. it's mostly a stylistic choice, otherwise discouraged.
export const Button2: React.FC<ButtonProps> = ({ className }: ButtonProps) => {
  return <div className={className}></div>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class" />
      <Button2 className="my-class2" />
    </>
  );
};
