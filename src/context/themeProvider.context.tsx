import React, { FC, ReactNode, useState } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = { theme: ThemeType; toggleTheme: () => void };
interface IThemeProvider {
  children: ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
