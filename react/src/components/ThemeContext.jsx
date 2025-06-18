import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
