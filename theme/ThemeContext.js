
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const lightTheme = {
  background: '#FFFFFF',
  background2: '#ffffff',
  color: '#000000',
  color1: '#ffffff',
  color2: '#461799',
  color3: 'rgba(79, 34, 174, 0.1)',
  color4: '#474747',
  color5: '#474D66',
  log: '#FE1717',
  text: '#000000',
  coloring: 'rgba(146, 146, 146, 0.155)',
  cardbg: '#EFEEFC',
  cardbg2: '#F5F4F8',
  cardbg3: 'rgba(26, 22, 51, 0.20)',
  cardbg4: 'rgba(146, 146, 146, 0.155)',
  card: '#4F22AE',
  card2: 'rgba(146, 146, 146, 0.155)',
  overlay:  'rgba(0, 0, 0, 0.5)',
  bordercolor: '#808080',
};

const darkTheme = {
  background: '#000000',
  background2: 'rgba(238, 238, 238, 0.2)',
  color: '#ffffff',
  color1: '#000000',
  color2: '#ffffff',
  color3: '#ffffff',
  color4: '#ffffff',
  color5: '#f6f6f6',
  log: '#FE1717',
  text: '#BABABA',
  coloring: '#1C1C21',
  cardbg: '#ffffff',
  cardbg2: '#504A70',
  cardbg3: '#261F4E',
  cardbg4: '#1A1A1A',
  card: '#6A5AE0',
  card2: '#0F0F0F',
  overlay: 'rgba(255, 255, 255, 0.4)',
  bordercolor: '#ffffff',
  pagination: '#836EFE',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState.darkMode);
          setTheme(parsedState.darkMode ? darkTheme : lightTheme);
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  const toggleTheme = async () => {
    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      setTheme(newDarkMode ? darkTheme : lightTheme);
      await AsyncStorage.setItem("darkMode", JSON.stringify({ darkMode: newDarkMode }));
    } catch (error) {
      console.error("Error saving dark mode state:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
