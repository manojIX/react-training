import { Theme, ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export default function () {
  const themeContext = useContext(ThemeContext);
  const setTheme = () => {
    const newTheme = themeContext.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    themeContext.setTheme(newTheme);
  };
  return { theme: themeContext.theme, setTheme };
}
