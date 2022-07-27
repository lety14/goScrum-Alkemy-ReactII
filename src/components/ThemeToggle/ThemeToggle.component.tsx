import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider.context";
import { Icons, Toggle } from "./ThemeToggle.style";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Toggle
      className={theme === "dark" ? "darkTheme" : ""}
      onClick={() => toggleTheme()}
    >
      <Icons className={theme === "dark" ? "darkTheme" : ""}>
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
      </Icons>
    </Toggle>
  );
};
