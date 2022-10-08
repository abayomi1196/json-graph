import React, { createContext, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  updateTheme: (val: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  function updateTheme(val: ThemeType) {
    setTheme(val);
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
