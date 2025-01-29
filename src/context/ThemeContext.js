import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "../styles/themes/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme); // Default to LightTheme

  // Load the saved theme from AsyncStorage on app start
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("appTheme");
      if (savedTheme) {
        setTheme(savedTheme === "dark" ? DarkTheme : LightTheme);
      }
    };
    loadTheme();
  }, []);

  // Toggle and save the theme
  const toggleTheme = async () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem(
      "appTheme",
      newTheme === DarkTheme ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
