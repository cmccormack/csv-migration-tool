import React, { createContext, useState } from "react";

const ThemeContext = createContext("");

const ThemeProvider = ({ value, children }) => {
  const [currentTheme, setCurrentTheme] = useState(value.current);
  const [newTheme, setNewTheme] = useState(value.new);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        newTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
