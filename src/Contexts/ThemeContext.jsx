import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeContextComponent = ({children}) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme === "dark"
  })
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev
      localStorage.setItem("theme", newTheme ? "dark" : "light")
      return newTheme
    })
  }
  return <themeContext.Provider value={{isDark,toggleTheme}}>
    {children}
  </themeContext.Provider>;
};

export default ThemeContextComponent;
