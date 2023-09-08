import { theme } from "./Theme";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const Box = () => {
  const themes = useContext(ThemeContext);

  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      BoxText!
    </div>
  );
};

export default Box;
