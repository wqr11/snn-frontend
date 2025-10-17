import { createEvent, createStore } from "effector";
import { ThemeMode } from "@/shared/components/provider";

export const setThemeMode = createEvent<ThemeMode>();
export const $themeMode = createStore<ThemeMode>("light").on(
  setThemeMode,
  (_, data) => data,
);
