import { ThemeMode } from "@/components/provider";
import { createEvent, createStore } from "effector";

export const setThemeMode = createEvent<ThemeMode>();
export const $themeMode = createStore<ThemeMode>("light").on(
  setThemeMode,
  (_, data) => data
);
