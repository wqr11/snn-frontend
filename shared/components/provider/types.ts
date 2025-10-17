export type Theme = {
  [key in ThemeMode]: {
    white: string;
    black: string;
    accent: {
      primary: string;
      primaryLight: string;
    };
    grayScale: {
      gray1: string;
      gray2: string;
      gray3: string;
    };
  };
};

export type ThemeMode = "light" | "dark";
