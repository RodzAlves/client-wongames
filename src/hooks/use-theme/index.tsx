import { useContext, createContext, useState, useEffect } from "react";
import {
  DefaultTheme,
  CustomTheme,
  ThemeProvider as StyledThemeProvider
} from "styled-components";

import { getStorageItem, setStorageItem } from "utils/localStorage";
import { combineTheme, dark, light } from "styles/themes";

const THEME_KEY = "theme";

export type ThemeProps = DefaultTheme & CustomTheme;

export type ThemeContextData = {
  theme: ThemeProps | null;
  handleChangeTheme: () => void;
};

export const ThemeContextDefaultValues = {
  theme: null,
  handleChangeTheme: () => null
};

export const ThemeContext = createContext<ThemeContextData>(
  ThemeContextDefaultValues
);

export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  const [mounted, setMounted] = useState(false);

  const handleChangeTheme = () => {
    const formattedTheme = combineTheme(theme.title === "light" ? dark : light);

    setTheme(formattedTheme);
    setStorageItem(THEME_KEY, [theme.title === "light" ? "dark" : "light"]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const [themeKeyStorage] = getStorageItem(THEME_KEY) || [];

    if (themeKeyStorage) {
      const formattedTheme = combineTheme(
        themeKeyStorage === "light" ? light : dark
      );

      setTheme(formattedTheme);
    }
  }, []);

  const bodyProvider = (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{bodyProvider}</div>;
  }

  return bodyProvider;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
