import { ThemeProvider } from "@/components/provider";
import { themeModel } from "@/entities/theme";
import { useUnit } from "effector-react";
import { Stack } from "expo-router";

export default function RootLayout() {
  const themeMode = useUnit(themeModel.$themeMode);

  return (
    <ThemeProvider mode={themeMode ?? "light"}>
      <Stack />
    </ThemeProvider>
  );
}
