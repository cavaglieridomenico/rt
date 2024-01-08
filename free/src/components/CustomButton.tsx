import { ComponentProps } from "react";

type CustomButtonProps = ComponentProps<"button"> & {
  className?: string;
  textContent: React.ReactNode;
};

const CustomButton = ({
  className,
  textContent,
  ...restOfTheProps
}: CustomButtonProps) => {
  return (
    <button {...restOfTheProps} className={className}>
      {textContent}
    </button>
  );
};

export default CustomButton;
