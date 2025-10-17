import { Stack } from "expo-router";
import { ThemeProvider } from "@/shared/components/provider";
import { useUnit } from "effector-react";
import { themeModel } from "@/entities/theme";

export default function RootLayout() {
  const themeMode = useUnit(themeModel.$themeMode);

  return (
    <ThemeProvider mode={themeMode ?? "light"}>
      <Stack />
    </ThemeProvider>
  );
}
