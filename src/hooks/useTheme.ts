import { Theme, ThemeContext } from "@contexts/ThemeContext";
import { useContext, useEffect } from "react";

export default function () {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (themeContext.theme === "dark") {
      document.querySelector("body")!.classList.add("dark");
    }
  }, []);

  const setTheme = () => {
    const newTheme = themeContext.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    themeContext.setTheme(newTheme);
    const body = document.querySelector("body");
    body!.classList.toggle("dark");
  };
  return { theme: themeContext.theme, setTheme };
}
