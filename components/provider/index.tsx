import { useMemo } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { ThemeMode } from "./types";

export const THEMES = {
  light: {
    background: "#FFFFFF",
    foreground: "#1E232C",
    accent: {
      primary: "#9530F1",
      primaryLight: "#C48BF8",
    },
    grayScale: {
      gray1: "#8391A1",
      gray2: "#E8ECF4",
      gray3: "#F7F8F9",
    },
  },
  dark: {
    background: "#1E232C",
    foreground: "#FFFFFF",
    accent: {
      primary: "#9530F1",
      primaryLight: "#C48BF8",
    },
    grayScale: {
      gray1: "#8391A1",
      gray2: "#E8ECF4",
      gray3: "#F7F8F9",
    },
  },
};

export interface ThemeProviderProps {
  mode: ThemeMode;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  mode,
  children,
}) => {
  const theme = useMemo(() => THEMES[mode], [mode]);

  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};

export * from "./types";
