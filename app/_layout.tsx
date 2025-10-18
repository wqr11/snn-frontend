import { ThemeProvider, THEMES } from "@/components/provider";
import { themeModel } from "@/entities/theme";
import { useGate, useUnit } from "effector-react";

import { InitGate } from "@/entities/init";
import { Notifications } from "@/entities/notification";
import { userModel } from "@/entities/user";
import { Footer } from "@/widgets/layout/footer/Footer";
import { Header } from "@/widgets/layout/header/Header";
import { Stack } from "expo-router";
import { useEffect, useMemo } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

export default function RootLayout() {
  useGate(InitGate);

  const themeMode = useUnit(themeModel.$themeMode);
  const theme = useMemo(() => THEMES[themeMode], [themeMode]);

  const isAuth = useUnit(userModel.$isAuth);

  useEffect(() => {
    StatusBar.setBackgroundColor(THEMES[themeMode].foreground);

    StatusBar.setBarStyle(`${themeMode}-content`);

    StatusBar.setTranslucent(false);
  }, [themeMode]);

  return (
    <ThemeProvider mode={themeMode ?? "light"}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.background,
            maxHeight: "100%",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <StyledScrollView>
            <Notifications />
            <Header />
            <Stack
              screenOptions={{
                animation: "fade_from_bottom",
                animationTypeForReplace: "pop",
                animationDuration: 300,
                headerShown: false,
                contentStyle: {
                  backgroundColor: theme.background,
                },
              }}
              initialRouteName="index"
            >
              <Stack.Screen name="auth" />
              <Stack.Screen name="feed" options={{}}></Stack.Screen>
              <Stack.Screen name="profile" options={{}}></Stack.Screen>
            </Stack>
            {isAuth && <Footer />}
          </StyledScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const StyledScrollView = styled.View`
  height: 100%;
`;
