import { createContext, Dispatch } from "react";

export type Theme = "dark" | "light";
type themeContext = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};
export const ThemeContext = createContext<themeContext>({
  theme: "light",
  setTheme: () => {},
});
