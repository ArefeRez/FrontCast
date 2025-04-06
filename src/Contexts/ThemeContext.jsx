import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeContextComponent = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return <themeContext.Provider value={{isDark,toggleTheme}}>
    {children}
  </themeContext.Provider>;
};

export default ThemeContextComponent;
